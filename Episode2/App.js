import React from 'react'
import ReactDOM from 'react-dom/client'

const element=React.createElement('h1',{},'HELLO WORLD')
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(element)
