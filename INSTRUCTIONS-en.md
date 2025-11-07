# Technical Interview: Product Search (React)

Hello! Welcome to this 60-minute live-coding session.

## The Goal

We will build a product search component that consumes a live API. The goal isn't to finish everything, but rather to see how you structure your code, how you manage asynchronicity, and how you reason about the problems that arise.

**The most important thing:** Please, **think aloud**. Explain your decisions, the alternatives you are considering, and why you are choosing one path over another.

## The Scenario

We will be using a **Vite + React** project.

**Your task:** Implement a product search feature. Every time the user types in a text field, you should call this API to get results:

`https://dummyjson.com/products/search?q={searchTerm}`

---

## Exercise Phases

### Phase 1: The Functional Search (Approx. 20-25 min)

**Goal:** Display search results from the API.

**Tasks:**
1.  Add a text input field (`<input>`) to the application.
2.  Every time the input's value changes, execute an API call (`/search?q=...`) with the new value.
3.  Display a "Loading..." state while the request is in progress.
4.  Render the list of products (`data.products`) when the request is complete.
5.  If the request fails, display an error message.

### Phase 2: Optimization and Robustness (Approx. 20 min)

**Goal:** Identify and solve the problems from Phase 1.

**Context:** Our current implementation is functional, but it has performance issues and potential concurrency bugs.

**Tasks:**
1.  **Optimization:** We are calling the API on *every* single keystroke. How could you optimize this to reduce the number of network requests?
2.  **Robustness:** If a user types "phone" (Request A) and then quickly types "laptop" (Request B), it's possible for Request A (phone) to take longer and resolve *after* Request B (laptop). This would show incorrect results ("phone") even though the input says "laptop". How would you solve this problem?

### Phase 3: E2E Testing (Approx. 15 min)

**Goal:** Ensure our search functionality is reliable.

**Tasks:**
1.  Open the Playwright test file (`tests/search.spec.js`).
2.  Write a test that verifies the "happy path":
    * Type "iPhone" into the search box.
    * Assert that the product "iPhone 9" appears in the list.
3.  **Bonus (if time allows):** How would you reliably test that the "Loading..." state appears? Or that an error message is shown if the API fails?