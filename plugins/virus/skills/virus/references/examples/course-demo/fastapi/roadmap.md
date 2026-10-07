# FastAPI Roadmap

**End state:** Build and run a small production-ready FastAPI service — validated request/response bodies, basic auth, proper error handling, tested, and running behind Uvicorn with a sane deployment setup.

## Lectures

1. **What an API, request, and response actually are — then your first running app** — grounds the jargon in a concrete everyday scenario (a restaurant: customer/waiter/chef) before touching FastAPI, then motivation for FastAPI specifically, hello-world app, running it with Uvicorn.
   - Prerequisites: none (assumes basic Python functions and type hints — not web/API concepts, which this lecture itself covers)
2. **Routing: path and query parameters** — building real endpoints, type-hinted parameters, automatic validation from type hints.
   - Prerequisites: Lecture 1
3. **Request and response bodies with Pydantic** — structured input/output, validation errors, response models.
   - Prerequisites: Lecture 2
4. **Dependency injection with `Depends`** — shared logic (DB sessions, auth checks) without repeating code across endpoints.
   - Prerequisites: Lecture 3
5. **Error handling and custom exceptions** — raising `HTTPException`, custom exception handlers, consistent error responses.
   - Prerequisites: Lecture 3
6. **Basic authentication** — API key or OAuth2/JWT-based auth using `Depends`, protecting routes.
   - Prerequisites: Lecture 4, Lecture 5
7. **Testing FastAPI apps** — `TestClient`, testing endpoints and dependency overrides.
   - Prerequisites: Lecture 6
8. **Running it for real: Uvicorn, config, and deployment basics** — process management, environment-based config, a minimal Docker setup.
   - Prerequisites: Lecture 7
