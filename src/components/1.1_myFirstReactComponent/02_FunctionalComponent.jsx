// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

const MyFirstFunctionalComponent = ({name}) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>This React Component is made by a function expression, we call it a functional component</p>
        </div>
    );
};

export default MyFirstFunctionalComponent;