import React from 'react'
import Category from './components/Category'

import Pages from './components/pages/Pages'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Category/>
      <Pages/>
      </BrowserRouter>

    </div>
  )
}

export default App

