import React, { Component } from 'react'
import Header from './components/Header'
import CurrencyList from './components/CurrencyList'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CurrencyList />
      </>
    )
  }
}

export default App
