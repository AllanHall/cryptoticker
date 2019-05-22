import React, { Component } from 'react'
import CurrencyContainer from './CurrencyContainer'

class CurrencyList extends Component {
  state = {
    currencyData: []
  }
  componentDidMount() {
    this.getCurrencyFromApi()
    console.log('hi')
  }
  getCurrencyFromApi = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          currencyData: json.data
        })
        console.log(json.data)
      })
  }
  render() {
    this.getCurrencyFromApi()
  }
  render() {
    console.log('rendering')
    return (
      <>
        {this.state.currencyData.map(currency => {
          return (
            <CurrencyContainer
              name={currency.name}
              price={currency.quotes.USD.price}
              symbol={currency.symbol}
              rank={currency.quotes.rank}
            />
          )
        })}
      </>
    )
  }
}

export default CurrencyList
