import React, { Component } from 'react'

class CurrencyContainer extends Component {
  render() {
    return (
      <>
        <div className="name">
          This currency name will go using 'this.prop.'
        </div>
        <div className="price">This is where the price will go</div>
        <div className="symbol">This is where the symbol will go</div>
        <div className="rank">This is where the rank will go</div>
      </>
    )
  }
}

export default CurrencyContainer
