import React, { Component } from 'react';


class Product extends Component{
  render(){
    console.log(this.props.match.params.productId)
    let product = this.props.data.find( (p) => {
      if(p.id === this.props.match.params.productId){
        console.log(p.name)
      }else{
       // console.log('HI ERROR')
      }
    });
    

    let ProductData = () => {
      if(product){
        //console.log(product.name)
        return(
        ProductData = 
        <div className="card">
          <div className="card-body">
            <h3 className="card-title"> {product.name} </h3>
            <h4 className="card-subtitle">{product.status}</h4>
            <p className="card-text">{product.description}</p>
          </div>
        </div>)
      }else{
        return(ProductData = <h2> Sorry. Product doesnt exist </h2>);
      }
    };
    
    return(
      
        <ProductData />
    
    );
  }
}

export default Product;