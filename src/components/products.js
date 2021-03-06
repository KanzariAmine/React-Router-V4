import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Product from './product';

class Products extends Component{
  render(){
    const productData = [
      {
        id: 1,
        name: 'NIKE Liteforce Blue Sneakers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
        status: 'Available'
      
      },
      {
        id: 2,
        name: 'Stylised Flip Flops and Slippers',
        description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
        status: 'Out of Stock'
      
      },
      {
        id: 3,
        name: 'ADIDAS Adispree Running Shoes',
        description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
        status: 'Available'
      },
      {
        id: 4,
        name: 'ADIDAS Mid Sneakers',
        description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
        status: 'Out of Stock'
      },
      
      ];

      let linkList = productData.map((product, i) => { return(
        <li className="link" key={i}>
          <Link  to={`${this.props.match.url}/${product.id}`}>{product.name}</Link>
        </li>
        
      )});
    return(
      <div>
        <div>
          <h2>PRODUCTS</h2>
        </div>
        <div className="linkList">
          {linkList}
        </div>
        <Route path={`${this.props.match.url}/:productId`} render={(props) => <Product data= {productData} {...props}/>}/>
      </div>
    );
  }
}

export default Products;