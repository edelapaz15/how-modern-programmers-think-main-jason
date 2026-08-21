<#
.SYNOPSIS
    Host wrapper for Windows (PowerShell 7+).

.DESCRIPTION
    Builds the slide-toolchain container image (if needed) and runs it against
    the slides directory, converting md\*.md into pptx\ and pdf\ (plus a merged
    all-modules PDF).

.PARAMETER NoBuild
    Skip the image build and just run the conversion.

.EXAMPLE
    .\convert.ps1
    .\convert.ps1 -NoBuild
    $env:CONTAINER_ENGINE = 'docker'; .\convert.ps1

.NOTES
    Requires podman (default) or docker on PATH.
#>
param(
    [switch]$NoBuild
)

$ErrorActionPreference = 'Stop'

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$SlidesDir = (Resolve-Path (Join-Path $ScriptDir '..')).Path
# The whole courseware\ tree is mounted, not just slides\, because the decks embed
# diagrams from courseware\diagrams\png. Mounting only slides\ puts those images
# outside the container and every diagram renders as a broken-image box.
$CoursewareDir = (Resolve-Path (Join-Path $SlidesDir '..')).Path
$Image     = 'hmpt-slides:latest'
$Engine    = if ($env:CONTAINER_ENGINE) { $env:CONTAINER_ENGINE } else { 'podman' }

if (-not (Get-Command $Engine -ErrorAction SilentlyContinue)) {
    throw "'$Engine' not found on PATH. Install podman (or set `$env:CONTAINER_ENGINE = 'docker')."
}

if (-not $NoBuild) {
    Write-Host "==> Building image '$Image' with $Engine"
    & $Engine build -t $Image $ScriptDir
    if ($LASTEXITCODE -ne 0) { throw "Image build failed (exit $LASTEXITCODE)." }
}

Write-Host "==> Converting slides in: $SlidesDir"
# podman on Windows accepts the native path and maps it into the Linux VM.
& $Engine run --rm -v "${CoursewareDir}:/work" -e SLIDES_DIR=/work/slides $Image
if ($LASTEXITCODE -ne 0) { throw "Conversion failed (exit $LASTEXITCODE)." }

Write-Host "==> Finished. Outputs are in:"
Write-Host "      $SlidesDir\pptx"
Write-Host "      $SlidesDir\pdf"
