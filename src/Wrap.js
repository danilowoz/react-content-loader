import React from 'react'

const generateId = () => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let text = ''

    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

const Wrap = (props) => {

    let idClip = generateId()
    let idGradient = generateId()

    return (
        <svg viewBox={`0 0 400 ${props.height}`} version="1.1" style={props.style} preserveAspectRatio="xMidYMid meet">
            <rect style={{fill: `url(#${idGradient})`}} clipPath={`url(#${idClip})`} x="0" y="0" width="400" height={props.height} />

            <defs>
                <clipPath id={`${idClip}`}>
                    { props.children }
                </clipPath>

                <linearGradient id={`${idGradient}`}>
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
export { generateId }
