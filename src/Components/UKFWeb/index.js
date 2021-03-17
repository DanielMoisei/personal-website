import React from 'react'

import {DataContextProvider} from "./dataContext.js"

import App from './App'

import './style.css'



export default function UKFWeb() {
  return (
    <DataContextProvider>
      <App />
    </DataContextProvider>
  )
}
