# CS 465 Reflection
## Architecture

In the Travlr Getaways project, I used multiple approaches for frontend development. On the customer-facing side, I implemented traditional Express-rendered HTML pages using templating engines for quick rendering and ease of development. These pages delivered static content and provided a basic but functional UI for browsing trips.

On the administrative side, I built a Single-Page Application (SPA) using Angular. This allowed for a more dynamic and responsive experience, where components could update asynchronously without full page reloads. The Angular SPA used routing, services, and reactive forms to provide real-time data manipulation, improving usability and performance.

The SPA was ideal for the admin interface due to the need for rich interaction—such as managing users, bookings, and trips—while the Express-rendered HTML was better suited for public-facing pages that required less interactivity.

The backend used a NoSQL MongoDB database because of its flexibility and scalability. MongoDB's document-based structure allowed for quick adjustments to data models as the project evolved, especially when dealing with varied and nested data such as trip details, user information, and booking records. Its schema-less nature also made rapid development and iteration easier.

## Functionality

JSON (JavaScript Object Notation) is a lightweight data-interchange format that's syntactically similar to JavaScript objects but is language-independent. While JavaScript is a scripting language used to add interactivity to web pages, JSON is purely used for data representation and exchange between systems.

In the Travlr project, JSON served as the bridge between the frontend and backend. Angular's HTTPClient sent and received data in JSON format, which the Express.js server parsed and used to interact with MongoDB. For example, when a user requested a list of trips, the backend responded with a JSON array, which the frontend rendered dynamically using Angular components.

I refactored several pieces of the application throughout development. For instance, I modularized the API routes by separating controller logic from route definitions, which made the backend easier to maintain. On the frontend, I created reusable Angular components for displaying trip details and booking forms, allowing for consistency and reducing duplication. Reusable UI components improved maintainability, supported scalability, and allowed for easier debugging and updates across the application.

## Testing

Testing a full stack application involves verifying that the various layers—from the frontend UI to the database—interact as expected. I tested API endpoints using Postman to simulate different request types (GET, POST, PUT, DELETE) and ensure proper data retrieval and error handling.

One complexity in testing arose from the need for secure endpoints. When adding authentication or restricting access to admin routes, testing required simulating login processes and handling authentication tokens. Although a full authentication system was not implemented in the initial version, I planned for token-based authentication using JSON Web Tokens (JWT), which would require testing for expired or invalid tokens, user roles, and unauthorized access.

Understanding how methods (like GET for data retrieval or POST for data creation), endpoints, and security mechanisms work together was essential for ensuring reliability. Each endpoint had to return meaningful responses and handle both valid and invalid input gracefully to provide a robust experience for users and admins.

## Reflection

This course significantly contributed to my professional development by deepening my understanding of full stack development and reinforcing best practices across the software development lifecycle. I strengthened my ability to design, implement, and test a complete web application using the MEAN stack, which is highly relevant to many real-world projects and roles in web development and DevOps.

I developed and refined skills in database modeling with MongoDB, building RESTful APIs with Express.js, creating dynamic SPAs with Angular, and connecting those layers into a cohesive system. I also gained experience with version control, deployment considerations, and project documentation—skills that make me a more versatile and marketable candidate.

Most importantly, I learned how to think like a full stack developer—focusing not just on how features work, but how they interact and scale within a complete system. This holistic approach to software design and development will serve me well in future roles, whether I’m building products from scratch or maintaining existing systems.
