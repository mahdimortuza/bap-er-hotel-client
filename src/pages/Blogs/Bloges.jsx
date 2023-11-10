import React from 'react';

const Bloges = () => {
    return (
        <div>
            <h2>1. Tell us the differences between uncontrolled and controlled components.</h2>
            <p>Ans: React components can be either controlled or uncontrolled. An uncontrolled component manages its own state, relying on the browser to read and update its values. On the other hand, a controlled component is managed by the parent component, which controls the child component's state through props. Controlled components are useful when the parent component needs to manage the state of multiple child components, validate or transform input data, or respond to changes in the child component's state. Controlled components can be more predictable and easier to test but may require more code. In contrast, uncontrolled components are simpler and easier to use but may be less predictable and more difficult to validate. Ultimately, the choice between controlled and uncontrolled components depends on the specific requirements of the application and the developer's preferences.</p>
            <br></br>
            <br></br>
            <h2>2. How to validate React props using PropTypes.</h2>
            <p>Ans: To validate React props using PropTypes, import the PropTypes package from the 'prop-types' module, and define the expected data types for the props within the component using the PropTypes library. For example, to define a prop named 'name' as a string, use 'PropTypes.string' as the expected data type. Once the prop types are defined, React will generate a console warning if the actual data type of the props does not match the expected data types. This helps catch bugs early on in the development process and ensures that components receive the correct data types for their props, preventing errors down the line.</p>
            <br></br>
            <br></br>
            <h2>3. Tell us the difference between nodejs and express js.</h2>
            <p>Ans: Node.js is a server-side runtime environment for executing JavaScript code outside of a web browser. Express.js, on the other hand, is a popular web application framework built on top of Node.js. It simplifies the process of building web applications and APIs by providing features such as routing, middleware, and template engines. In other words, Node.js is the runtime environment that allows you to run JavaScript code outside of a web browser, while Express.js is a framework built on top of Node.js that provides additional functionality for building web applications and APIs.</p>
            <br></br>
            <br></br>
            <h2>4. What is a custom hook, and why will you create a custom hook?</h2>
            <p>Ans: A custom hook is a reusable function in React that allows you to extract and reuse stateful logic from components. You would create a custom hook to simplify complex or repetitive logic, make it easier to share between components, and improve the overall maintainability and readability of your code.</p>
        </div>
    );
};

export default Bloges;