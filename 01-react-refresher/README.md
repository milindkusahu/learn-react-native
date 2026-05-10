# React Refresher

Short revision notes for React basics before moving into React Native.

## Table of Contents

- [Day 01 Agenda](#day-01-agenda)
- [Day 01 Notes](#day-01-notes)
- [JSX](#jsx)
- [Hot Reloading](#hot-reloading)
- [Components](#components)
- [Props](#props)
- [Props vs State](#props-vs-state)
- [Conditional Rendering](#conditional-rendering)
- [Lists and Keys](#lists-and-keys)
- [Day 02 Agenda](#day-02-agenda)
- [Day 02 Notes](#day-02-notes)
- [Virtual DOM](#virtual-dom)
- [React Hooks](#react-hooks)
- [Side Effects](#side-effects)
- [useState](#usestate)
- [State Update Pattern](#state-update-pattern)
- [useEffect](#useeffect)
- [Component Lifecycle with useEffect](#component-lifecycle-with-useeffect)
- [Custom Hooks](#custom-hooks)
- [Context API](#context-api)
- [Event Handling](#event-handling)
- [Form Handling](#form-handling)
- [Controlled Input](#controlled-input)
- [Uncontrolled Input](#uncontrolled-input)

## Day 01 Agenda

1. What React is and why we use it
2. Basic React app setup
3. Folder structure overview
4. JSX fundamentals
5. Components
6. Props

## Day 01 Notes

### JSX

JSX means JavaScript XML. It lets us write HTML-like code inside JavaScript.

- JSX must return one parent element.
- Use a React Fragment when you do not want to add an extra wrapper element.
- Example fragment syntax: `<>...</>`

### Hot Reloading

Hot reloading updates the app quickly after code changes, without manually refreshing the full app every time.

### Components

A component is a function that returns JSX. Components help split the UI into small reusable parts.

### Props

Props are data passed from a parent component to a child component.

- React data flow is top to bottom.
- Props are read-only inside the child component.
- Prop drilling means passing data through many nested components.
- Prop drilling can make debugging harder in large apps.

### Props vs State

Props come from a parent component. State belongs to the component itself.

- Use props to receive data.
- Use state to store data that changes.
- Props are read-only.
- State can be updated with a setter function.

### Conditional Rendering

Conditional rendering means showing UI based on a condition.

Common patterns:

- `if` statements before `return`
- Ternary operator: `isLoggedIn ? <Home /> : <Login />`
- `&&` operator: `isLoading && <Loader />`

### Lists and Keys

Use `.map()` to render a list of items in React.

- Each list item needs a unique `key`.
- Keys help React track which item changed.
- Avoid using array index as key if the list can change order.

## Day 02 Agenda

1. Virtual DOM fundamentals
2. React hooks: `useState` and `useEffect`
3. Event handling
4. Controlled and uncontrolled form inputs

## Day 02 Notes

### Virtual DOM

The Virtual DOM is a lightweight in-memory copy of the real DOM. React uses it to update the UI efficiently.

Real DOM path: `window -> document -> html`

How it works:

1. React creates a Virtual DOM during the first render.
2. When state or props change, React creates a new Virtual DOM.
3. React compares the old and new Virtual DOM.
4. React finds the smallest required changes.
5. React updates only the needed parts of the real DOM.

### React Hooks

Hooks are React functions that let functional components use React features like state, effects, refs, and context.

Common hooks:

- `useState`
- `useEffect`
- `useMemo`
- `useCallback`
- `useRef`
- `useContext`

Hook rules:

1. Call hooks only at the top level.
2. Do not call hooks inside loops, conditions, or nested functions.
3. Use hooks only inside functional components or custom hooks.

### Side Effects

A side effect is any work that touches something outside the component render logic.

Common examples:

- API calls
- Timers
- Subscriptions
- Updating the document title
- Reading or writing browser storage

### useState

`useState` adds state to a functional component. Use it when the UI needs to remember and update a value.

### State Update Pattern

Do not directly change state. Create a new value and update state with the setter function.

- For numbers or strings, pass the new value.
- For arrays, use methods like `map`, `filter`, or spread.
- For objects, use spread and update only the needed property.
- Use callback state when the new state depends on the old state.

Example pattern: `setCount((prev) => prev + 1)`

### useEffect

`useEffect` runs side effects after rendering.

Common use cases:

- Fetching API data
- Starting timers
- Listening to events
- Running code when a value changes

Dependency array behavior:

- No dependency array: runs after every render.
- Empty dependency array `[]`: runs once after the component mounts.
- With dependencies `[value]`: runs when the listed value changes.

Cleanup is used to stop side effects, such as clearing timers or removing event listeners.

### Component Lifecycle with useEffect

Functional components do not use class lifecycle methods. `useEffect` covers the same ideas in a simpler way.

- Mount: component appears on screen.
- Update: state or props change.
- Unmount: component is removed from screen.
- Cleanup runs before unmount or before the effect runs again.

### Custom Hooks

A custom hook is a reusable function that uses React hooks inside it.

- Custom hook names must start with `use`.
- They help share logic between components.
- Example use cases: fetching data, form handling, theme logic.

### Context API

Context API helps share data without passing props through every level.

- Useful for theme, auth user, language, and app settings.
- Helps reduce prop drilling.
- Best for shared data used by many components.

### Event Handling

Event handling means responding to user actions like clicks, typing, scrolling, form changes, and touch events.

React uses Synthetic Events. They are cross-browser wrappers around native browser events.

Event flow: `SyntheticEvent -> NativeEvent -> Browser`

### Form Handling

Forms can be handled in two main ways: controlled inputs and uncontrolled inputs.

### Controlled Input

A controlled input is managed by React state.

- React is the single source of truth.
- Easy to validate.
- Easy to reset or update from code.
- Best for most React forms.

### Uncontrolled Input

An uncontrolled input is managed by the DOM itself.

- No React state is used for every change.
- Value is read only when needed.
- Less code for simple cases.
- Harder to validate and control.
