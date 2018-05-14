import React from 'react';
import ProductItem from './product_item';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
class Category extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      load: true,
      title: ""
    };
  }
  componentDidMount(){
    this.props.fetchCategory(this.props.match.params.category).then(() =>
  this.setState({load: false, title: this.props.match.params.category}));
  }

  render(){
    if (this.state.load) {
      return (
        <h1>LOADING...</h1>
      );
    } else {
      const products = this.props.products.map(
        product => {
          return (
            <ProductItem key={product.id} product={ product }/>
          );
        });

        return (
          <div >
              <div className='main'>
                <div className='slogan-div'>
                </div>
                <hr></hr>
                <div className='slogan-div'>
                  <strong className="slogan">{this.state.title}</strong>
                </div>
                <div className='product-index'>
                  <ul className='product-index-items'>
                    { products }
                  </ul>
                </div>
              </div>
            </div>
          );
    }
  }
}

export default Category;
