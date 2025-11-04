import React from 'react'
import ReactDOM from 'react-dom/client'
const element=React.createElement('h1',{key:1},'HELLO WORLD')
const element2=React.createElement('h1',{key:2},'HELLO WORLD')
const divElement=React.createElement('div',{},[element,element2])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(divElement)
