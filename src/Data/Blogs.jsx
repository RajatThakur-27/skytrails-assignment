const Blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Ananya Sharma",
    content: "React Hooks are an essential feature introduced in React 16.8, enabling developers to use state and other React features without writing class components. The hooks API includes useState, useEffect, useContext, and many more. With useState, functional components can manage their local state without needing a constructor. useEffect allows side effects such as data fetching, subscriptions, and manual DOM manipulations. Additionally, useContext simplifies context usage without consumers. By encouraging developers to create custom hooks, React promotes reusable logic across multiple components. Hooks avoid the need for complex lifecycles in class components and foster a clean, modular architecture. As applications scale, hooks make it easier to test, debug, and refactor code. Custom hooks can encapsulate logic like API calls, authentication, or form handling, which are reusable across your application. This modularity leads to improved code organization and better developer experience. Furthermore, hooks make onboarding new developers easier, as functional components are more concise and readable. The shift from classes to hooks represents a fundamental transformation in how React applications are built, focusing on simplicity and flexibility. Understanding React Hooks is crucial for modern front-end development, ensuring your codebase remains current and maintainable. As a best practice, always name your custom hooks with a 'use' prefix and follow React’s rules of hooks. These include calling hooks only at the top level of components and only from functional components or other custom hooks. React also provides the React DevTools extension, which helps in inspecting hook states during debugging. In large-scale projects, combining hooks with tools like Context API or external state libraries (like Redux Toolkit or Zustand) helps maintain predictable and manageable app state. Overall, React Hooks are not just a utility—they embody a design philosophy that encourages simpler, more effective component development.",
    date: "20/04/2025",
    likes: 0
  },
  {
    id: 2,
    title: "A Guide to JavaScript Closures",
    author: "Rohan Verma",
    content: "Closures are a powerful feature in JavaScript that allow functions to retain access to variables from their lexical scope, even when that function is executed outside of its original context. This means inner functions remember the environment in which they were created. Closures are commonly used in scenarios like data encapsulation, event handling, callbacks, and asynchronous programming. For example, when you define a function inside another function, the inner function can still access variables declared in the outer function—even after the outer function has finished executing. This property makes closures extremely useful for creating private variables and stateful behavior. Developers often use closures in factory functions, where each function call returns a new function with its own private data. It's important to understand how closures interact with memory and garbage collection. Misuse of closures can lead to memory leaks, especially if DOM elements are referenced within a closure and not properly cleaned up. Closures are also heavily used in asynchronous programming, such as when writing functions for `setTimeout`, `setInterval`, or promises. Mastery of closures is vital for building modern JavaScript applications, particularly those involving functional programming patterns. Debugging closures requires a good understanding of JavaScript’s execution context and scope chain. You can inspect closures in developer tools to see what variables are retained in the function’s context. Practicing closure use-cases, such as creating a counter or maintaining hidden state, will strengthen your grasp of this topic. Ultimately, closures help developers write cleaner, modular code that is easier to manage and extend. They are foundational to understanding JavaScript’s behavior and should be part of every developer's core knowledge.",
    date: "18/04/2025",
    likes: 0
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    author: "Meera Iyer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words of blog-style content contrasting CSS Grid and Flexbox.]",
    date: "15/04/2025",
    likes: 0
  },
  {
    id: 4,
    title: "Async/Await in JavaScript",
    author: "Arjun Nair",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words explaining promises, async/await, error handling, and practical examples.]",
    date: "10/04/2025",
    likes: 0
  },
  {
    id: 5,
    title: "State Management with Redux",
    author: "Sanya Reddy",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words on Redux, store, reducers, actions, middleware, and Redux Toolkit.]",
    date: "08/04/2025",
    likes: 0
  },
  {
    id: 6,
    title: "Understanding the Virtual DOM",
    author: "Ishaan Mehta",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words describing the virtual DOM, diffing algorithm, React rendering process.]",
    date: "05/04/2025",
    likes: 0
  },
  {
    id: 7,
    title: "Building Forms in React",
    author: "Diya Singh",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words on controlled vs uncontrolled components, validation, useForm libs.]",
    date: "02/04/2025",
    likes: 0
  },
  {
    id: 8,
    title: "Node.js for Backend Development",
    author: "Karthik Menon",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words on event-driven architecture, Express.js, file system, database integration.]",
    date: "30/03/2025",
    likes: 0
  },
  {
    id: 9,
    title: "Deploying React Apps with Vercel",
    author: "Pooja Desai",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words on build steps, CI/CD, environment variables, GitHub integration.]",
    date: "28/03/2025",
    likes: 0
  },
  {
    id: 10,
    title: "Intro to TypeScript",
    author: "Rajiv Kapoor",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Add approx. 1000 words on types, interfaces, generics, TypeScript + React, type safety.]",
    date: "25/03/2025",
    likes: 0
  }
];

export default Blogs;
