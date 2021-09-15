import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class Products extends Component {
  render() {

    var products = [
      {
        id: 1,
        prices: 300,
        paramUrl : 'ipX',
        name: 'Iphone X'
      },
      {
        id: 2,
        prices: 200,
        paramUrl : 'ip5',
        name: 'Iphone 5'
      },
      {
        id: 3,
        prices: 100,
        paramUrl : 'ip7',
        name: 'Iphone 7'
      },
    ]
    
    
    var {match} = this.props;
    //console.log(match)
    var url = match.url

    var product = products.map((item, index) => {
      return(
        <NavLink to = {`${url}/${item.paramUrl}`} key = {index}>
        <li className="list-group-item" >{item.id} - {item.name} - {item.prices}</li>
        </NavLink>
      )
    })
    return (
      
      <div className='container'>
        <h1>Danh sach san pham</h1>

        
        <div className="row">
          
          <ul className="list-group">
            {product}
          </ul>
          
        </div>
        

      </div>
    );
  }
}

export default Products;
