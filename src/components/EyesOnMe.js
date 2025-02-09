// // Code EyesOnMe Component Here
// the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
import React from 'react';

class EyesOnMe extends React.Component {
    state = {  }
    render() {
        return (
            <button onFocus={() => console.log("Good!")} onBlur ={() => console.log("Hey! Eyes on me!")}></button>
        );
    }
}

export default EyesOnMe;