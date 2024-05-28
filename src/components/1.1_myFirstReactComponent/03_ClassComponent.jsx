// Exercise:
// 1. Create a React class component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import React from "react";
class MyFirstClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>This React Component is made by a class, we call it a class component</p>
            </div>
        );
    }
}

export default MyFirstClassComponent;