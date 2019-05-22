import React, { Component } from 'react'
import CurrencyContainer from './CurrencyContainer'

class CurrencyList extends Component {
  state = {
    currencyData: []
  }
  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          currencyData: json.data
        })
      })
  }
  render() {
    return (
      <main className="currency-list">
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
      </main>
    )
  }
}

export default CurrencyList
