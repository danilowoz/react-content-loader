import React, { Component } from 'react';

const style = {
    container: {
        position: `relative`,
        width: 400,
        margin: `30px auto`,
        padding: 30,
        boxShadow: `0 3px 10px rgba(0,0,0,.2)`,
        background: `#fff`,
        borderRadius: 5
    },
    gradient: {
        fill: `#999`,
        fill: `url(#gradient)`
    }
}

const FacebookStyle = (props ) => {
    return(
        <svg viewBox = "0 0 400 130" version = "1.1">
            <rect style={style.gradient} x="0" y="0" rx="5" ry="5" width="70" height="70" fill={props.primaryColor} />
            
            <rect style={style.gradient} x="80" y="17" rx="4" ry="4" width="300" height="13" fill={props.primaryColor} />
            <rect style={style.gradient} x="80" y="40" rx="3" ry="3" width="250" height="10" fill={props.primaryColor} />

            <rect style={style.gradient} x="0" y="80" rx="3" ry="3" width="350" height="10" fill={props.primaryColor} />
            <rect style={style.gradient} x="0" y="100" rx="3" ry="3" width="400" height="10" fill={props.primaryColor} />
            <rect style={style.gradient} x="0" y="120" rx="3" ry="3" width="360" height="10" fill={props.primaryColor} />

            <defs>
                <linearGradient id='gradient'>
                    <stop offset="0%" stopColor={props.primaryColor}>
                        <animate attributeName="offset" values="-2; 1" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor={props.secundaryColor}>
                        <animate attributeName="offset" values="-1.5; 1.5" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor={props.primaryColor}>
                        <animate attributeName="offset" values="-1; 2" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

class Placeholder extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            speed: props.speed || 2,
            primaryColor: props.primaryColor || '#f3f3f3',
            secundaryColor: props.secundaryColor || '#ddd'
        }

        debugger;
    }

    render() {
        return (
            <div className="container" style={style.container}>
                <FacebookStyle {...this.state} />
            </div>
        )
    }
};

export default Placeholder;