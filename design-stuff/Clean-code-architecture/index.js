/*
==> Clean Code Architecture:
    ->  Clean Architecture organizes code into layers, where each layer has a single 
        responsibility.
    ->  The architecture starts from the innermost core and moves outward as you can 
        see in picture.

    ->  Dependencies always point inward: outer layers depend on inner layers, but 
        inner layers are independent of outer layers.
    ->  As a result, the core (innermost layer) contains business logic and depends on 
        nothing, making the system clean, maintainable, and testable.
*/

/*
==> Layers of Clean Code architecture:
    1)  Entity (Domain Layer):
        ->  The core of the system and the lowest level of abstraction.
        ->  It contains fundamental business entities like classes and interfaces.
        ->  This layer depends on nothing and is independent of frameworks, databases, 
            or external logic.
        ->  Only the use case layer is allowed to depend on entities.

    2)  Use Case (Application Layer)
        ->  This layer contains the main business logic of the application.
        ->  It takes validated input data, applies business rules, creates or modifies 
            entities, and coordinates actions.
        ->  It acts as a bridge between controllers and infrastructure, ensuring 
            correct business behavior.

    3)  Controller (Interface / Delivery Layer):
        ->  Handles incoming requests and controls the application flow.
        ->  It parses, adapts, and validates input data, then forwards valid data to 
            the use case layer.
        ->  Invalid requests are rejected here to prevent errors from propagating 
            further.

    4) Infrastructure Layer:
        ->  Responsible for data persistence and external integrations.
        ->  It handles database operations and communication with services like email, 
            payment gateways, or APIs.
        ->  This layer implements technical details required by the use cases.

    5) Outermost Layer (UI / Framework Layer)
        ->  The outer boundary of the application, such as UI or frameworks.
        ->  For backend applications, controllers act as the outermost layer; for 
            frontend apps, the UI is the outermost layer.
        ->  This layer depends on all inner layers but is not depended on by them.
*/