import React from 'react';

const Wrap = (props ) => {
    let heigth = props.height || 130
    const gradient = {
        fill: `url(#${props.classNameHash}1)`
    }
    return(
        <svg viewBox={`0 0 400 ${heigth}`} version="1.1" style={props.style} preserveAspectRatio="xMidYMid meet">
            <rect style={gradient} clipPath={`url(#${props.classNameHash}2`} x="0" y="0" width="400" height={heigth} />

            <defs>
                <clipPath id={`${props.classNameHash}2`}>
                    { props.children }
                </clipPath>

                <linearGradient id={`${props.classNameHash}1`}>
                    <stop offset="0%" stopColor={props.primaryColor}>
                        <animate attributeName="offset" values="-2; 1" dur={`${props.speed}s`} repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor={props.secondaryColor}>
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

export default Wrap
