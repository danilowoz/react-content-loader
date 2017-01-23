import React, { Component } from 'react';

const hashCode = function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

const FacebookStyle = (props ) => {
    const gradient = {
        fill: `url(#${props.classNameHash})`
    }
    return(
        <svg viewBox = "0 0 400 130" version = "1.1" style={props.style}>
            <rect style={gradient} x="0" y="0" rx="5" ry="5" width="70" height="70" fill={props.primaryColor} />
            
            <rect style={gradient} x="80" y="17" rx="4" ry="4" width="300" height="13" fill={props.primaryColor} />
            <rect style={gradient} x="80" y="40" rx="3" ry="3" width="250" height="10" fill={props.primaryColor} />

            <rect style={gradient} x="0" y="80" rx="3" ry="3" width="350" height="10" fill={props.primaryColor} />
            <rect style={gradient} x="0" y="100" rx="3" ry="3" width="400" height="10" fill={props.primaryColor} />
            <rect style={gradient} x="0" y="120" rx="3" ry="3" width="360" height="10" fill={props.primaryColor} />

            <defs>
                <linearGradient id={props.classNameHash}>
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
        super(props)
        
        this.state = {
            speed: props.speed || 2,
            style: props.style,
            primaryColor: props.primaryColor || '#f3f3f3',
            secundaryColor: props.secundaryColor || '#dfdfdf',
            classNameHash: hashCode()
        }
    }

    render() {
        return (
            <FacebookStyle {...this.state} />
        )
    }
};

export default Placeholder;