import React, { Component } from 'react'

class ItemProduct extends Component {
  render() {

    var { match } = this.props;
    console.log(match)
    var { paramUrl } = match.params;
    console.log(paramUrl)
    var nameProduct = '';
    switch (paramUrl) {
      case paramUrl = 'ipX':
        return nameProduct = 'Iphone X'
      case paramUrl = 'ip5':
        return nameProduct = 'Iphone 5'
      case paramUrl = 'ip7':
        return nameProduct = 'Iphone 7'
      default:
        break;
    }
    return (

      <div>
       
      </div>
    );
  }
}

export default ItemProduct;
