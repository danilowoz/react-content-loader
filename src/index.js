// Demo component
// this is only example component
// you can find tests in __test__ folder

import React from 'react';

class MyComponent extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        return (
            <div className="my-component">
                <i className="icon-test"></i>
                <i className="icon-test"></i>
                <i className="icon-test"></i>
                <button onClick={this.props.handleClick} type="button"></button>
            </div>
        )
    }
};

export default MyComponent;