# React Refresher

## Agenda - Day 01

1. What is React and why do we even need it?
2. Basic Setup of React App
3. Folder Structure breakdown
4. JSX Fundamentals
5. Components
6. Props

- JSX:
  -> JavaScript XML (Help us write HTML like code)
  -> JSX must return only one parent element
- Hot Reloading
- Component -> Function that returns JSX
- React Fragment
- In React Data flow from Top to Bottom
- Prop drilling -> Parent passes data to deeply nested component (performance compromise, hard debugging)

## Agenda - Day 02

1. Fundamentals of Virtual Dom
2. Hooks in React js ( usestate and useEffect )
3. Event handling in React
4. Controlled vs Uncontrolled inputs with form handling

### What is Virtual DOM in React?

- Virtual DOM is a light weight in memory representation of actual DOM
- React creates Virtual DOM

Actual DOM -> Window -> Document -> HTML

#### How it Works?

1. Initial Render - React creates Virtual DOM, then react renders it in the Real DOM
2. State/Props update - React creates new virtual DOM
3. Diffing - React compares old Virtual DOM with new Virtual DOM
4. Find minimal changes
5. The real dom gets updated

### React Hooks

Hooks - it is just a function/utility in which the prefix starts with "use_function"

- useState
- useEffect
- useMemo
- useCallback
- useRef
- useContext

-> Side Effects - Any operation that affects something outside the scope of the component function being executed. While React components are designed to be "pure" (calculating the UI based only on props and state), side effects allow them to interact with the "outside world".

#### Hooks Rules

1. Hook must be called at top level
2. You can't call hooks inside a nested function
3. Hooks are used in Functional component

#### useState Hook

- It is a built-in React function that allows us to add/manage state to functional components.

#### useEffect Hook

- Run side effects after rendering
- Use case: API calling, Timers,
- Dependency
  - Without dependency Array: Runs on every render
  - With empty dependency Array: Component will Trigger re-render only when component mounts
  - With state in dependency Array: The component will re-render when this state or props changes
- Cleanup:

### Event Handling

- Respond to User interactions: Mouse, Keyboard, Form, Touch, onScroll, onResize events
- In React we say event as Synthetic Event (Cross browser wrapper)
  - Works consistently across all browsers, also improves performance

SyntheticEvent --> NativeElement --> Browser

### Form Handling

Two types:

1. Controlled Input

- Input is controlled by React State
- Single source of truth
- Easy validation
- Works well with React ecosystem

2. UnControlled Input

- Input manages its own state (DOM handles it)
- No React State
- Value accessed only when needed
- Hard to Validate
- No Reactive
- Less control
