# Topic 4: Modern Web Development Overview
## How Front-End and Back-End Technologies Work Together

### Introduction: The Web as a Platform

When you think of "programming," you might imagine isolated code running on a single computer. But the modern web is a system of interconnected computers—your browser on your device, servers in data centers, databases storing information, APIs connecting them all.

Understanding how these pieces fit together is essential. JavaScript, which you just learned, is the client-side language of the web. But modern web applications are full-stack: they involve front-end (what the user sees), back-end (what the user doesn't), and the network connecting them.

In this section, you'll see the big picture: how a request travels from your browser to a server and back, how data flows through the system, and where different technologies fit.

### The Web as a Platform: How the Internet Works

#### The Internet in Simple Terms

The internet is a network of computers connected by cables and wireless signals. When you visit a website:

![Six steps of loading a page: you ask for a page, DNS turns the name into an address, the request is sent over HTTPS, the server runs code and queries the database, the response comes back with a status code plus HTML, CSS and JavaScript, and the browser draws it.](../../diagrams/png/web-request-lifecycle.png)

*Steps 1, 2, 3 and 6 happen on the user's machine. Steps 4 and 5 happen somewhere you may never see.*

1. Your browser makes a **request** to a server
2. The server processes the request
3. The server sends back a **response**
4. Your browser displays the result

This request-response pattern is the foundation of the web.

#### URLs: The Address System

Every resource on the web has an address, called a URL (Uniform Resource Locator):

```
https://www.example.com/products/laptop
```

Breaking it down:
- **https://** — Protocol (secure HTTP)
- **www.example.com** — Domain name (identifies the server)
- **/products/laptop** — Path (identifies a specific resource on the server)

When you type this into your browser, the browser:
1. Translates the domain name to an IP address (like 203.0.113.10)
2. Connects to the server at that address
3. Sends an HTTP request
4. Receives an HTTP response
5. Displays the response

#### DNS: Domain Name System

Domain names (example.com) are for humans. Computers use IP addresses (203.0.113.10). **DNS** is the system that translates between them.

When you type example.com, your browser:
1. Queries a DNS server
2. DNS returns the IP address
3. Your browser connects to that IP

This happens automatically and almost instantly.

#### HTTP: HyperText Transfer Protocol

**HTTP** is the protocol for web communication. It defines:
- How to format requests
- What responses look like
- What errors mean

You've probably seen HTTP status codes:
- **200** — OK (successful request)
- **404** — Not Found (page doesn't exist)
- **500** — Server Error (something broke on the server)

**HTTPS** is HTTP with encryption (the "S" is for Secure). Your sensitive data (passwords, credit cards) should always go over HTTPS.

### Client-Server Architecture: Requests and Responses

The web is built on a **client-server model**:

```
Client (Your Browser)          Server (Web Server)
        |                              |
        |-------- Request ------->    |
        |                             | Process
        |                             | Request
        |   <------- Response --------|
        | Display Response            |
```

The client (your browser) initiates requests. The server responds. This asymmetry is fundamental: the server controls what the client can do.

#### Request

A typical HTTP request includes:

```
GET /products/laptop HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html
```

This says: "Get the resource at /products/laptop from www.example.com. I'm a browser, and I can understand HTML."

#### Response

A typical HTTP response includes:

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 5648

<!DOCTYPE html>
<html>
...
</html>
```

This says: "Success! I'm sending you HTML that's 5648 bytes long."

### Front-End: What the User Sees and Interacts With

**Front-end** is everything the user interacts with directly. When you visit a website, the front-end is what you see in your browser.

#### HTML: Structure

HTML defines the structure of a page:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Product Page</title>
</head>
<body>
    <header>
        <h1>Our Laptop</h1>
    </header>
    <main>
        <h2>$999.99</h2>
        <p>A powerful laptop for professionals</p>
        <button>Add to Cart</button>
    </main>
    <footer>
        <p>&copy; 2024 Example Store</p>
    </footer>
</body>
</html>
```

HTML organizes content with tags: `<header>`, `<main>`, `<footer>`, `<button>`, etc. It's the skeleton of the page.

#### CSS: Styling and Layout

CSS makes pages beautiful. The same HTML can look completely different with different CSS:

```css
body {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    color: #333;
    font-size: 32px;
}

button {
    background-color: #0066cc;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0052a3;
}
```

CSS:
- Sets colors, fonts, spacing
- Controls layout and positioning
- Creates responsive designs
- Adds animations and transitions

#### JavaScript: Interactivity and Behavior

JavaScript makes pages interactive:

```javascript
let addButton = document.querySelector("button");

addButton.addEventListener("click", function() {
    alert("Added to cart!");
});
```

JavaScript:
- Responds to user actions
- Updates the page without reloading
- Validates form input
- Communicates with servers
- Powers dynamic, modern web applications

#### How HTML, CSS, and JavaScript Work Together

Here's a complete example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Color Mixer</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        input { margin: 10px; }
        div {
            width: 100px;
            height: 100px;
            margin-top: 20px;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <h1>Pick a Color</h1>
    <label>
        Red:
        <input type="range" id="red" min="0" max="255" value="128">
        <span id="redValue">128</span>
    </label>
    <label>
        Green:
        <input type="range" id="green" min="0" max="255" value="128">
        <span id="greenValue">128</span>
    </label>
    <label>
        Blue:
        <input type="range" id="blue" min="0" max="255" value="128">
        <span id="blueValue">128</span>
    </label>
    <div id="colorBox"></div>

    <script>
        function updateColor() {
            let r = document.getElementById("red").value;
            let g = document.getElementById("green").value;
            let b = document.getElementById("blue").value;

            document.getElementById("redValue").textContent = r;
            document.getElementById("greenValue").textContent = g;
            document.getElementById("blueValue").textContent = b;

            let color = `rgb(${r}, ${g}, ${b})`;
            document.getElementById("colorBox").style.backgroundColor = color;
        }

        document.getElementById("red").addEventListener("input", updateColor);
        document.getElementById("green").addEventListener("input", updateColor);
        document.getElementById("blue").addEventListener("input", updateColor);

        updateColor();  // Initialize
    </script>
</body>
</html>
```

Here:
- **HTML** defines three sliders and a color box
- **CSS** styles them
- **JavaScript** updates the color when sliders move

Together they create an interactive application entirely in the browser.

### Responsive Design: Adapting to Different Devices

The web is accessed on phones, tablets, and desktops—all with different screen sizes. **Responsive design** makes pages look good on all devices.

#### Mobile-First Approach

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

This tells the browser: "Display at the device's natural width, not a zoomed-out view."

#### Media Queries

CSS media queries apply different styles based on screen size:

```css
/* Default: mobile */
body {
    font-size: 14px;
    padding: 10px;
}

.container {
    width: 100%;
}

/* Tablets: 600px and wider */
@media (min-width: 600px) {
    body {
        font-size: 16px;
        padding: 20px;
    }

    .container {
        width: 90%;
        margin: 0 auto;
    }
}

/* Desktops: 1200px and wider */
@media (min-width: 1200px) {
    body {
        font-size: 18px;
        padding: 40px;
    }

    .container {
        width: 1200px;
        margin: 0 auto;
    }
}
```

Same HTML, but CSS adapts based on screen size. Users see an optimized experience on any device.

### Back-End: What Happens Behind the Scenes

The back-end is the server-side logic. Users don't see it, but it's essential: processing requests, accessing databases, enforcing business rules, and sending responses.

#### Server-Side Responsibilities

1. **Authentication** — Verify the user is who they claim to be
2. **Authorization** — Check if the user has permission for this action
3. **Validation** — Ensure input is valid and safe
4. **Business Logic** — Apply the company's rules (calculate discounts, check inventory, etc.)
5. **Database Access** — Read and write data persistently
6. **Error Handling** — Manage errors gracefully
7. **Logging** — Record what happened for debugging and auditing

#### Why Back-End Exists

You might think: "Why not do all this in JavaScript in the browser?" Several reasons:

1. **Security** — Users can't see or modify back-end code. If pricing calculations happened in the browser, users could manipulate them. The server is trustworthy; the browser isn't.

2. **Data Protection** — Sensitive data (passwords, credit cards) are processed on secure servers, not in users' browsers.

3. **Computation** — The server can perform complex calculations and handle heavy traffic.

4. **Shared State** — All users share the same database. If two customers buy the last item simultaneously, the server ensures only one gets it.

5. **Integration** — The back-end connects to external systems (payment processors, email services, APIs).

### Server-Side Languages: Node.js, Python, Java, C#, PHP, Go

Different languages are popular for back-end development. Each has tradeoffs.

#### Node.js (JavaScript)

JavaScript on the server. The same language front and back.

**Advantages:**
- Unified language across full-stack
- Non-blocking, asynchronous design
- Large ecosystem (npm packages)

**Disadvantages:**
- Single-threaded (harder to utilize multiple CPUs)
- A fast-moving ecosystem — packages and best practices turn over quickly, so tutorials date fast

**Use case:** Web applications, real-time applications (chat, collaboration tools)

#### Python

Known for readability and rapid development.

**Advantages:**
- Easy to learn and read
- Excellent data science libraries (NumPy, Pandas)
- Fast development

**Disadvantages:**
- Slower execution than compiled languages
- Less suitable for real-time systems

**Use case:** Web applications, data pipelines, machine learning backends

#### Java

Enterprise standard. Used at banks, insurance companies, large retailers.

**Advantages:**
- Mature ecosystem
- Excellent performance
- Strong typing catches bugs early
- Scales well to large teams

**Disadvantages:**
- Verbose; requires more code
- Slower development
- Steeper learning curve

**Use case:** Enterprise applications, mission-critical systems

#### C# (pronounced "C sharp")

Similar to Java but developed by Microsoft. Runs on .NET.

**Advantages:**
- Modern language design
- Excellent tooling (Visual Studio)
- Integrates well with Microsoft platforms (Azure, SQL Server)

**Disadvantages:**
- Historically tied to Windows/Microsoft
- Smaller community than Java

**Use case:** Enterprise applications, games (Unity engine), Azure applications

#### PHP

Designed specifically for web development.

**Advantages:**
- Easy to get started
- Vast hosting options
- Huge community (WordPress, Drupal built in PHP)

**Disadvantages:**
- Can lead to messy code in large projects
- Type system is weak
- Older language design

**Use case:** Web applications, content management systems

#### Go

Modern language designed for cloud and concurrent systems.

**Advantages:**
- Fast compilation and execution
- Simple, readable syntax
- Excellent concurrency support
- Produces standalone binaries

**Disadvantages:**
- Smaller ecosystem than Java or Python
- A deliberately small language — fewer built-in conveniences, so you write more of the plumbing yourself

**Use case:** Cloud infrastructure (Kubernetes is Go), microservices, CLI tools

### Databases on the Back-End

(This connects to Module VI on databases.)

Back-end systems need to persistently store data. **Databases** are the structured storage layer:

```
User Request
    ↓
Web Server (back-end code)
    ↓
Database
    ↓
Web Server
    ↓
Response to User
```

The back-end receives requests, queries the database (SQL), processes results, and responds.

Example: A user requests "Show me products in the laptop category."

1. Browser sends request to server
2. Server queries: `SELECT * FROM products WHERE category = 'laptop'`
3. Database returns matching products
4. Server formats as JSON: `[{name: "Laptop A", price: 999}, ...]`
5. Server sends JSON response to browser
6. Browser displays the laptops

Without a database, there'd be nowhere for any of this to live between requests — every product, order, and account would vanish the moment the server restarted. The database is what makes the data *persistent*, and it provides fast, structured access to it.

### APIs: How Front-End and Back-End Communicate

An **API** (Application Programming Interface) is a contract between front-end and back-end: "If you send me a request in this format, I'll respond with data in that format."

#### REST APIs

**REST** (Representational State Transfer) is a popular API style. It uses standard HTTP methods:

- **GET** — Retrieve data
- **POST** — Create new data
- **PUT** — Update data
- **DELETE** — Remove data

Examples:

```
GET /api/products              → Get all products
GET /api/products/42           → Get product with ID 42
POST /api/products             → Create a new product
PUT /api/products/42           → Update product 42
DELETE /api/products/42        → Delete product 42
```

The server responds with JSON (structured data):

```text
GET /api/products/42

Response:
{
    "id": 42,
    "name": "Laptop Pro",
    "price": 1999.99,
    "category": "electronics",
    "inStock": true
}
```

#### JavaScript Fetch API

From the browser, you call back-end APIs using JavaScript's `fetch`:

```javascript
fetch('/api/products/42')
    .then(response => response.json())
    .then(data => {
        console.log(data.name);    // "Laptop Pro"
        console.log(data.price);   // 1999.99
    })
    .catch(error => console.error('Error:', error));
```

This:
1. Sends a GET request to `/api/products/42`
2. Waits for the response
3. Parses the JSON
4. Uses the data

Modern syntax using `async/await`:

```javascript
async function getProduct() {
    try {
        let response = await fetch('/api/products/42');
        let data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.error('Error:', error);
    }
}

getProduct();
```

### The Full-Stack Picture: From Browser to Database and Back

Let's trace a complete request: "Add item to shopping cart."

```
1. User clicks "Add to Cart" button
   ↓
2. JavaScript event handler triggered
   ↓
3. JavaScript calls fetch('/api/cart', {method: 'POST', body: JSON.stringify({productId: 42})})
   ↓
4. Browser sends HTTP POST request to server
   ↓
5. Server receives request
   ↓
6. Server validates: Is the user logged in? Is the product real?
   ↓
7. Server queries database: INSERT INTO cart (user_id, product_id) VALUES (...)
   ↓
8. Database processes INSERT, returns success
   ↓
9. Server responds with JSON: {"success": true, "cartCount": 3}
   ↓
10. Browser receives response
   ↓
11. JavaScript processes response
   ↓
12. JavaScript updates the page: shows "3 items in cart"
   ↓
13. User sees the update instantly
```

Each layer adds value:
- **Browser/JavaScript** — User interface
- **Network/HTTP** — Communication
- **Server/Back-end** — Business logic and validation
- **Database** — Persistent storage

Remove any layer, and the system breaks. Full-stack development means understanding all of it.

### Modern Frameworks and Libraries: React, Angular, Vue, Express, Spring, Django

As applications grow, managing front-end and back-end becomes complex. **Frameworks** provide structure and reusable patterns.

#### Front-End Frameworks

**React** (Facebook)
- Component-based architecture
- Virtual DOM for efficient updates
- Huge ecosystem
- Most popular

**Angular** (Google)
- Complete framework (not just the view)
- TypeScript by default
- Excellent for large enterprises
- Steeper learning curve

**Vue**
- Simple, approachable
- Great documentation
- Scales from small to large projects
- Growing community

These frameworks let you build complex, interactive applications without managing the DOM manually.

#### Back-End Frameworks

**Express** (Node.js)
- Minimal, flexible
- Large ecosystem of middleware
- Quick to get started

**Spring** (Java)
- Mature, stable
- Comprehensive (ORM, security, testing)
- Enterprise-ready

**Django** (Python)
- "Batteries included" approach
- Admin panel, ORM, authentication built-in
- Fast development

These frameworks handle routing, database interaction, authentication, error handling, etc. They're layers on top of the language that enforce good practices.

### Deployment: Getting Your Application to Users

You can't email users your code. You need to deploy it to servers that are always running.

#### Hosting Options

**Traditional Hosting**
- Rent a server from a hosting company
- SSH into it, deploy your code
- You're responsible for security, backups, scaling

**Platform-as-a-Service (PaaS)**
- Deploy code, the platform handles everything
- Examples: Heroku, Vercel, Netlify
- Good for small to medium applications
- Less control, but much simpler

**Cloud Services**
- Rent infrastructure from AWS, Google Cloud, Azure
- More control, more complexity
- Scales to any size

**Serverless**
- Upload functions, not applications
- Provider runs them on demand
- You pay only for execution time
- Good for APIs and scheduled tasks

A typical deployment:

```
1. Develop locally
2. Push code to git
3. Git service (GitHub) triggers deployment
4. Deployment service builds and tests code
5. If tests pass, deploys to production
6. Users access the live application
```

### DevOps and CI/CD: Automating the Delivery Pipeline

**DevOps** (Development + Operations) is the practice of automating deployment and infrastructure.

**CI/CD** (Continuous Integration/Continuous Deployment):
- Every code change is automatically tested
- If tests pass, code is automatically deployed to production
- Developers ship code multiple times a day, not quarterly

Benefits:
- Faster feedback (you know within minutes if code breaks)
- Safer deployments (automated tests catch bugs)
- Less manual work

Example CI/CD pipeline:

```
Developer pushes code
    ↓
Automated tests run
    ↓
Linting (code style checks)
    ↓
All pass?
    Yes → Deploy to production
    No → Notify developer with error
```

### The Modern Web Development Ecosystem: Package Managers, Build Tools, Testing

Modern web development involves many tools working together.

#### Package Managers

**npm** (Node Package Manager)

Installs and manages dependencies. Your project lists what packages it needs:

```json
{
  "dependencies": {
    "express": "^4.18.0",
    "react": "^18.0.0"
  }
}
```

Install with: `npm install`

#### Build Tools

**Webpack, Vite, Parcel**

Modern JavaScript files are split across many files. Build tools:
- Combine files into bundles
- Minify code (remove whitespace, shorten variable names)
- Transpile modern JavaScript to older syntax (for browser compatibility)
- Optimize images and assets

```
Source code (many files)
    ↓
Build tool processes
    ↓
Optimized bundle (smaller, compatible)
```

#### Testing

Automated tests verify code works. Types of tests:

**Unit Tests** — Test individual functions
```javascript
test('add function', () => {
    expect(add(2, 3)).toBe(5);
});
```

**Integration Tests** — Test how components work together
**End-to-End Tests** — Test complete user workflows

Good testing practices:
- Write tests as you develop
- Catch bugs before they reach users
- Enable refactoring safely
- Serve as documentation

### Career Paths in Web Development

Web development has multiple specializations:

**Front-End Developer**
- Build user interfaces
- Work with HTML, CSS, JavaScript, React/Vue/Angular
- Focus on user experience

**Back-End Developer**
- Build servers, APIs, databases
- Work with Node.js, Python, Java, databases
- Focus on performance and security

**Full-Stack Developer**
- Do both front-end and back-end
- Understand the entire application

**DevOps/Site Reliability Engineer**
- Manage deployment, scaling, monitoring
- Work with Docker, Kubernetes, cloud platforms
- Focus on reliability and performance at scale

**Mobile Developer**
- Build iOS and Android apps
- Languages: Swift, Kotlin, React Native, Flutter

**Specializations**
- Security
- Database optimization
- Performance engineering
- Accessibility

Most developers start in one area and branch out. Understanding the full-stack helps in any specialization.

### Real Code Snippets: A Simple HTML Page, Basic CSS, JavaScript Interaction

Let's build a complete, realistic example: a weather widget.

**File: weather.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Weather Widget</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        .widget {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .city-input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        .search-button {
            background-color: #0066cc;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        .search-button:hover {
            background-color: #0052a3;
        }

        .weather {
            margin-top: 20px;
            padding: 20px;
            background-color: #e3f2fd;
            border-radius: 4px;
            display: none;
        }

        .weather.active {
            display: block;
        }

        .temperature {
            font-size: 48px;
            font-weight: bold;
            color: #0066cc;
        }

        .description {
            font-size: 18px;
            color: #666;
            margin-top: 10px;
        }

        .error {
            color: #d32f2f;
            padding: 10px;
            background-color: #ffebee;
            border-radius: 4px;
            margin-top: 10px;
            display: none;
        }

        .error.active {
            display: block;
        }
    </style>
</head>
<body>
    <div class="widget">
        <h1>Weather Widget</h1>
        <input
            type="text"
            class="city-input"
            placeholder="Enter city name"
            id="cityInput"
        >
        <button class="search-button" id="searchButton">Search</button>

        <div class="weather" id="weatherResult">
            <div class="temperature" id="temperature">75°F</div>
            <div class="description" id="description">Sunny</div>
        </div>

        <div class="error" id="error"></div>
    </div>

    <script src="weather.js"></script>
</body>
</html>
```

**File: weather.js**

```javascript
// Mock weather data (in reality, you'd call a real API)
const weatherData = {
    'new york': { temp: 72, condition: 'Cloudy' },
    'los angeles': { temp: 85, condition: 'Sunny' },
    'chicago': { temp: 68, condition: 'Rainy' },
    'seattle': { temp: 65, condition: 'Overcast' }
};

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const errorDiv = document.getElementById('error');
const temperatureDiv = document.getElementById('temperature');
const descriptionDiv = document.getElementById('description');

searchButton.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
});

function searchWeather() {
    const city = cityInput.value.trim().toLowerCase();

    // Clear previous results
    weatherResult.classList.remove('active');
    errorDiv.classList.remove('active');

    if (!city) {
        showError('Please enter a city name');
        return;
    }

    // Simulate API call (in reality, you'd use fetch)
    setTimeout(() => {
        if (weatherData[city]) {
            const weather = weatherData[city];
            temperatureDiv.textContent = weather.temp + '°F';
            descriptionDiv.textContent = weather.condition;
            weatherResult.classList.add('active');
        } else {
            showError(`Weather data not found for "${city}". Try: New York, Los Angeles, Chicago, Seattle`);
        }
    }, 500);
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.add('active');
}
```

This example shows:
- **HTML** — Structure with form inputs
- **CSS** — Styling, responsive layout, hover effects
- **JavaScript** — Event handling, data processing, DOM updates

In a real application, the JavaScript would call a real weather API instead of using mock data.

### Business Perspective: The Web as a Business Platform

Why do companies invest in web applications?

1. **Reach** — Anyone with a browser and internet can use your application. Global scale from day one.

2. **Lower barrier to entry** — Users don't need to install anything. "Just go to our website."

3. **Always up-to-date** — Update the server, and all users get the new version instantly. No distribution hassles.

4. **Data and analytics** — Understand what users do, optimize accordingly.

5. **Integration** — Connect to other services (payment processors, analytics, email, etc.).

6. **Competitive advantage** — In many industries, having a polished, fast web app is expected. It's table stakes.

Examples:
- **Netflix** went from mailing DVDs to streaming everything. The web (and mobile) made that possible.
- **Airbnb** created a two-sided marketplace accessible to anyone globally.
- **Stripe** disrupted payment processing by building an API developers love.

Understanding web development gives you insight into how the digital world works and how to build the applications reshaping industries.

---

## Review and Discussion Questions

1. **Request-Response Cycle:** Write out the complete journey of a request from when you click "Add to Cart" on an e-commerce site until you see "Item added" on the page. What roles do HTML, JavaScript, HTTP, the server, and the database play?

2. **Front-End vs. Back-End:** For each of these tasks, decide whether it should happen in the browser (front-end) or on the server (back-end), and explain why:
   - Validate that an email address format is correct
   - Check if an email address is already in use
   - Calculate a shopping cart total
   - Apply a discount code and verify it's still valid
   - Encrypt a password before storing it

3. **Responsive Design:** Visit a website on your phone, then on a desktop. How does the layout change? What happens to:
   - Navigation menus
   - Images and their sizes
   - Text and font sizes
   - Button sizes and spacing

   How might CSS media queries achieve these changes?

4. **API Design:** You're building a back-end API for a bookstore application. Design REST endpoints for:
   - Get all books
   - Get a specific book by ID
   - Create a new book (add to inventory)
   - Update a book's price
   - Delete a book

   Use REST conventions (GET, POST, PUT, DELETE) and appropriate paths.

5. **Technology Stack:** You're building a social media application with:
   - A web front-end (desktop browsers)
   - A mobile app
   - A real-time chat feature
   - User authentication
   - Image uploads and storage

   What technologies would you choose for each layer? Why?

6. **Security:** Why can't you trust the browser to enforce business rules? Give an example of what would happen if you relied on browser-side validation for:
   - Checking that a discount code is valid
   - Verifying that a user has permission to access a resource
   - Ensuring a product is in stock before confirming a purchase

7. **Full-Stack Understanding:** Imagine you're the tech lead explaining your company's web stack to a non-technical executive. Explain:
   - What JavaScript frameworks do and why they matter
   - Why you have a back-end separate from the front-end
   - Why DevOps and automated testing matter
   - What the business benefits are

