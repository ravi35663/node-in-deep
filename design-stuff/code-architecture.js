/*
==> Layered (N-Tier) Architecture:
    ->  Layered (or N-Tier) Architecture is a way of structuring software into distinct 
        layers, where each layer has a single responsibility.
    ->  Each layer communicates only with the layer directly below or above it, keeping 
        the system clean and organized.
*/

/*
==> Typical Layers Explained:
    1)  Presentation Layer (UI / API)
        ->  Handles user interaction
        ->  Receives requests and sends responses
        ->  Contains no business logic

        Examples: React UI, Express/NestJS Controllers

    2)  Business Layer (Application / Service)
        ->  Contains core business rules
        ->  Orchestrates workflows and validations
        ->  Independent of UI and database
        ->  Examples:   OrderService, AuthService, PaymentService

    3)  Data Access Layer (Repository)
        ->  Handles database operations
        ->  Converts data to/from business objects
        ->  Isolates DB logic from business logic
        ->  Examples:   UserRepository, OrderRepository

    4)  Database Layer
        ->  Stores application data
        ->  No knowledge of business logic
        ->  Examples: PostgreSQL, MongoDB, MySQL
*/

/*
==> How Data Flows Through Layers:
    User
    ↓
    Presentation Layer
    ↓
    Business Layer
    ↓
    Data Access Layer
    ↓
    Database
*/

/*
==> Why Do We Use Layered Architecture?
    ->  To separate concerns
    ->  To reduce tight coupling
    ->  To make systems maintainable and scalable
    ->  To allow parallel team development
*/

/*
Benefits of Using Layered Architecture
    ->  Easy to understand
    ->  Easy to modify and extend
    ->  Better testing (mock layers)
    ->  Framework & DB can be replaced easily
    ->  Clear responsibility boundaries
*/

/*
==> Where You’ve Already Used It
    ->  Express.js → Controller → Service → Repository
    ->  NestJS → Controller → Service → Repository
    ->  React → UI → Hooks → API layer
*/

/*
==> Microservices Architecture:
    ->  Microservices Architecture is a design approach where an application is broken 
        into small, independent services, each responsible for one business capability.
    ->  Each service runs independently and communicates with others using APIs or 
        events.

==> Core Idea (In Simple Words):
    ->  Instead of building one big application (monolith), you build many small 
        applications that work together.
    ->  User Service | Order Service | Payment Service | Notification Service
    ->  Each service:
            1) Has its own logic
            2) Often has its own database
            3) Can be deployed independently
*/

/*
==> Typical Microservices Components:
    1)  Client / API Gateway
        ->  Single entry point for clients
        ->  Routes requests to correct service
        ->  Handles auth, rate limiting
        ->  Examples: API Gateway, NGINX, AWS API Gateway

    2)  Independent Services
        ->  Each service handles one responsibility.
        ->  Examples:
                Auth Service
                User Service
                Order Service
                Payment Service
        ->  Built using: Node.js / NestJS / Java / Go

    3)  Database per Service
        ->  Each service owns its own database
        ->  No direct DB sharing
        ->  Examples: User DB, Order DB, Payment DB

    4)  Communication Layer
        ->  Services communicate via:
        ->  REST APIs
        ->  gRPC    
        ->  Message queues (Kafka, RabbitMQ)
*/

/*
==> How Request Flow Works:
    Client
    ↓
    API Gateway
    ↓
    Order Service
    ↓
    Payment Service
    ↓
    Notification Service
    Note:
        Services talk to each other over the network, not through shared memory.
*/

/*
==> Why Do We Use Microservices?
    To scale specific parts of the system
    To allow independent deployments
    To support large teams
    To improve fault isolation
*/

/*
==> Benefits of Microservices Architecture:
    ->  Independent scaling
    ->  Faster deployments
    ->  Better fault isolation
    ->  Technology flexibility (polyglot)
    ->  Easier to maintain large systems
*/

/*
==> Challenges (Very Important):
    ->  Complex infrastructure
    ->  Network latency
    ->  Distributed debugging
    ->  Data consistency issues
    ->  Requires DevOps maturity
*/

/*
==> Real-World Example: E-Commerce Platform

Services:
    User Service → user profiles
    Product Service → product catalog
    Order Service → order processing
    Payment Service → payments
    Notification Service → emails/SMS

    If Payment Service fails, product browsing still works
    You can scale Order Service during sales only
*/

/*
==> Companies Using Microservices
    Netflix
    Amazon
    Uber
    Spotify
*/

/*
==> When Should YOU Use Microservices?
    ->  Large-scale applications
    ->  Multiple teams
    ->  High traffic
    ->  Frequent deployments
*/

/*
    | Feature    | Layered           | Microservices     |
    | ---------- | ----------------- | ----------------- |
    | Deployment | Single app        | Multiple services |
    | Scaling    | Whole app         | Per service       |
    | Complexity | Low               | High              |
    | Best for   | Small–medium apps | Large systems     |
*/