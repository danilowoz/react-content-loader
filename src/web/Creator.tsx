import React from 'react'

const ALLOWED_LIST = ['H1', 'H2', 'H3', 'H4', 'P']
const WRAPPER_ID = '__react-content-loader_creator___'

const appendExample = (x, y) => {
  const wrapper = document.querySelector(`#${WRAPPER_ID}`)
  const element = document.createElement('div')

  element.style.left = `${x}px`
  element.style.top = `${y}px`
  element.style.width = '50px'
  element.style.height = '50px'
  element.style.position = 'absolute'
  element.style.backgroundColor = 'red'

  wrapper.appendChild(element)
}

const Creator: React.FC = ({ children }) => {
  return (
    <span
      id={WRAPPER_ID}
      onMouseOver={e => {
        e.stopPropagation()

        const nodes = document
          .elementFromPoint(e.clientX, e.clientY)
          .querySelectorAll(ALLOWED_LIST.join(', '))
        console.log(e)
        appendExample(e.clientX, e.clientY)
      }}
    >
      {children}
    </span>
  )
}

export { Creator }
