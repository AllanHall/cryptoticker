import React, { Component } from 'react'

class CurrencyContainer extends Component {
  render() {
    return (
      <>
        <h3 className="name">{this.props.name}</h3>
        <div className="price">{this.props.quotes.USD.price}</div>
        <div className="symbol">{this.props.quotes.symbol}</div>
        <div className="rank">{this.props.quotes.rank}</div>
      </>
    )
  }
}

export default CurrencyContainer
