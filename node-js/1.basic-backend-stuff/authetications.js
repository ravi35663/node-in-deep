/*
==> What is Authentication:
    ->  Authentication is a way to recognize the user based on role and other things.

==> Types of Authentications:
    1) Local Authentication (Email / Password)
    2) JWT (Token-Based Authentication)
    3) Session-Based Authentication
    4) OAuth Authentication
    5) OAuth 2.0 (Social Login)
    6) OpenID Connect (OIDC)
    7) Multi-Factor Authentication (MFA / 2FA)
        and many more.
*/

/*
1)  Local Authentication (Email / Password)
    ->  Local Authentication means the app manages user credentials itself using 
        email + password, instead of relying on Google, Facebook, etc.
    ->  Local authentication uses email and password managed by the application itself, 
        offering full control but requiring careful security implementation to avoid 
        vulnerabilities.
    ->  Example:
        // Signup
        POST /signup
        {
        "email": "ravi@example.com",
        "password": "MyStrong@123"
        }

        // Backend (important part)
        hashedPassword = bcrypt.hash(password);
        save(email, hashedPassword);

        // Login
        POST /login
        {
        "email": "ravi@example.com",
        "password": "MyStrong@123"
        }

        // Verify
        bcrypt.compare(password, storedHash);
*/
/*
==> Security Level ⭐⭐⭐ (Medium–High)
    Depends on implementation.
    Secure when:
        Passwords are hashed (bcrypt/argon2)
        Salted hashes
        HTTPS only
        Rate limiting + account lock
        JWT / Session with HttpOnly cookies
        Optional 2FA

==> Insecure when:
    Plain text passwords ❌
    Weak hashing (MD5/SHA1) ❌
    No brute-force protection ❌
*/

/*
==> Level of Implementation ⭐⭐⭐⭐ (Medium)
    ->  You must implement:
        Signup
        Login
        Password hashing
        Forgot/reset password
        Token/session handling
        Security hardening
    ->  More work compared to OAuth.
*/

/*
==> Advantages:
    ->  Full control over users & data
    ->  No dependency on third-party providers
    ->  Works offline / intranet apps
    ->  Users don’t need social accounts
*/

/*
==> Disadvantages:
    ->  You are responsible for security
    ->  Higher development & maintenance effort
    ->  Password reset flows are complex
    ->  Higher risk if implemented poorly
*/

/*
*********************************JWT (Token-Based Authentication)*********************************
    ->  JWT (JSON Web Token) is a stateless authentication mechanism where the server 
        issues a signed token after login, and the client sends it with every request to 
        prove identity.
    ->  Example:
        1) Login → Token issued
            POST /login
            { "email": "ravi@example.com", "password": "123456" }

            // server
            const token = jwt.sign(
                { userId: 1, role: "user" },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
        2) Client stores token:
            Authorization: Bearer <JWT_TOKEN>
        3)  Protected API:
            GET /profile
            Authorization: Bearer <JWT_TOKEN>

            jwt.verify(token, JWT_SECRET); // allows access
*/
/*
==> Security Level ⭐⭐⭐⭐ (High if implemented correctly)
    ->  Secure when:
            Strong secret / RSA keys
            Short expiry (15m–1h)
            Stored in HttpOnly cookies
            HTTPS only
            Refresh token rotation
            Role validation on server

    ->  Risky when:
            Stored in localStorage (XSS risk)
            Long expiry tokens
            No refresh-token strategy
*/

/*
==> Level of Implementation ⭐⭐⭐ (Medium)
    ->  You must implement:
            Token generation & verification
            Token expiry handling
            Refresh tokens
            Logout / token revocation (hard part)
            Middleware for protected routes
    ->  Less DB load, more auth logic.
*/

/*
Advantages:
    1) Stateless → highly scalable
    2) No session storage needed
    3) Works well with microservices
    4) Easy to use with mobile & SPAs
*/

/*
==> Session-Based Authentication:
    ->  User logs in → 
        server creates a session → 
        session ID stored in cookie → 
        server validates session on every request.
    ->  Flow:
        Login → Session created (DB/Redis)
        Client stores sessionId in cookie
        Request → cookie → server → session lookup

==> Pros:
    Very secure (HttpOnly cookies)
    Easy logout & session invalidation
    Simple to understand
    CSRF protection built-in (with same-site cookies)

==> Cons:
    Server must store session state
    Hard to scale without Redis
    Not ideal for mobile apps

==> Level of Implementation:    (Easy–Medium)

==> Best Use:
    Traditional web apps
    Banking & enterprise systems
*/

/*
==> OAuth 2.0 (Authorization Framework):
    ->  OAuth 2.0 allows apps to access user data from another platform 
        (Google, Facebook,..etc.) without sharing passwords.
    ->  OAuth is NOT authentication by itself.
    ->  Example:    
            App → Google login
            User approves
            Google → Access Token
            App → Google API (with token)

==> Pros:
    No password handling
    Trusted third-party security
    Fast user onboarding

==> Cons:
    Depends on third-party provider
    Complex flows (PKCE, scopes)
    Provider downtime affects login

==> Level of Implementation:  
    ->  (Medium)

==> Best Use
    Social login
    Third-party integrations
*/

/*
==> OpenID Connect (OIDC):
    ->  OIDC is authentication built on top of OAuth 2.0.
    ->  It tells WHO the user is.
    ->  | OAuth         | OIDC           |
        | ------------- | -------------- |
        | Authorization | Authentication |
        | Access token  | ID token       |
        | API access    | User identity  |
    ->  Flow:
        ->  Login → ID Token (JWT) → user identity verified

==> Pros:
    Standardized identity protocol
    Very secure (JWT + signatures)
    Used by Google, Auth0, Keycloak

==> Cons:
    More complex than OAuth
    Token validation logic required

==> Level of Implementation
    ->  (Medium–High)

==> Best Use:
    Enterprise SSO
    Identity platforms
    Modern auth systems
*/

/*
==> Multi-Factor Authentication (MFA / 2FA):
    ->  User must prove identity using 2 or more factors:
        ->  Something you know → password
        ->  Something you have → OTP / phone
        ->  Something you are → biometrics
    ->  Flow:
        Login → Password OK
        → OTP / Authenticator
        → Access granted

==> Pros:
    Extremely secure
    Protects against stolen passwords
    Mandatory for financial apps

==> Cons:
    Extra user friction
    OTP delivery issues
    Higher implementation effort

==> Level of Implementation: High
*/

/*
==> OAuth (Authorization Framework):
    ->  OAuth is an authorization framework that allows a third-party application to 
        access a user’s protected resources (APIs/data) on another service without 
        sharing the user’s username and password.

    ->  OAuth is not authentication (it doesn’t prove who the user is).
        Authentication is added using OpenID Connect (OIDC).

==> Simple Example (Real-world):
    ->  “Login with Google” → allow app to access profile/email
    ->  Flow (OAuth 2.0 – Authorization Code):
            1) User clicks Continue with Google
            2) Google asks for consent (email, profile)
            3) Google issues an Access Token
            4) App uses the token to call Google APIs
            5) App never sees the user’s Google password

        ->  App → Google (consent)
            User approves
            Google → Access Token
            App → Google API (with token)

==> Why Do We Use OAuth?
    To avoid handling passwords
    To securely access third-party APIs
    To limit access using scopes
    To enable social login & integrations
    To build scalable, secure systems

==> Pros:
    No password sharing
    High security when using HTTPS
    Scope-based limited access
    Trusted identity providers (Google, GitHub)
    Faster user onboarding
    Industry standard

==> Cons:
    Complex flows (redirects, tokens)
    Depends on third-party availability
    Token mismanagement = security risk
    Debugging redirect issues can be tricky

==> Level of Implementation: High

==> You must handle:
    Redirect flows
    Access token handling
    Token expiry & refresh
    Secure storage of client secrets
    Error & callback handling
*/

/*
| Feature              | OAuth 1.0          | OAuth 2.0         |
| -------------------- | ------------------ | ----------------- |
| Release year         | 2010               | 2012              |
| Complexity           | Very High          | Moderate          |
| Security model       | Request signatures | HTTPS + tokens    |
| Access token         | Signed per request | Bearer token      |
| Mobile / SPA support | Poor               | Excellent         |
| Adoption             | Rare               | Industry standard |
| Debugging            | Hard               | Easy              |
*/

