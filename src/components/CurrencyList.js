import React, { Component } from 'react'
import CurrencyContainer from './CurrencyContainer'

class CurrencyList extends Component {
  render() {
    return <CurrencyContainer />
  }
  componentDidMount() {
    this.getDataFromApi()
  }
  getDataFromApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log(json)
      })
  }
}

export default CurrencyList
