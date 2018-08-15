import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Category extends Component{
  render(){
    return(
      <div>
        <h2>CATEGORY</h2>
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3 justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to={`${this.props.match.url}/shoes`}  >Shoes</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`${this.props.match.url}/boots`}  >Boots</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`${this.props.match.url}/footwear`} >Footwear</Link></li>
           </ul>
        </nav>
        <hr />
        <Route path={`${this.props.match.path}/:name`} render={({match}) => (<div><h3>{match.params.name}</h3></div>)}/>
      </div>
    );
  }
}

export default Category;