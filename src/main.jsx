import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const obj = [
    {
        description:"this is first message",
        id:1,
        url:'01.jpg'
    },
    {
        description:"this is second message",
        id:2,
        url:'02.jpg'
    }
]
ReactDOM.createRoot(document.getElementById('root')).render(
    <App obj={obj} />
)
