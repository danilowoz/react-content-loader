import React from 'react';

const CodeStyle = (props ) => {
    const gradient = {
        fill: `url(#${props.classNameHash}1)`
    }
    return(
        <svg viewBox = "0 0 400 70" version = "1.1" style={props.style} preserveAspectRatio="xMidYMid meet">            
            <rect style={gradient} clipPath={`url(#${props.classNameHash}2`} x="0" y="0" width="400" height="400" />
            
            <defs>
                <clipPath id={`${props.classNameHash}2`}>
                    <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
                    <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
                    <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />

                    <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
                    <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />

                    <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
                    <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
                    <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />

                    <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
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

export default CodeStyle
