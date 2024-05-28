// Exercise:
// 1. Create a React function component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import PropTypes from 'prop-types'; 
function MyFirstFunctionComponent({name}) {
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>This React Component is made by a function declaration, we call it a function component</p>
        </div>
    );
}



export default MyFirstFunctionComponent