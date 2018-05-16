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
  componentWillReceiveProps(nextProps) {
    let category_title = "";
    if (nextProps.match.params.category === "automation"
    || nextProps.match.params.category === "wiring"
    || nextProps.match.params.category === "electrical"){
      category_title = nextProps.match.params.category + " components"
    } else if ( nextProps.match.params.category === "processing"){
      category_title = nextProps.match.params.category + " tools"
    } else {
      category_title = nextProps.match.params.category
    }
   if (this.props.match.params.category !== nextProps.match.params.category) {
     // console.log(nextProps.match.params.category);
       this.props.fetchCategory(nextProps.match.params.category).then(() =>
     this.setState({load: false, title: category_title.toUpperCase()}));
   }
 }
  componentDidMount(){
    let category_title = "";
    if (this.props.match.params.category === "automation"
    || this.props.match.params.category === "wiring"
    || this.props.match.params.category === "electrical"){
      category_title = this.props.match.params.category + " components"
    } else if ( this.props.match.params.category === "processing"){
      category_title = this.props.match.params.category + " tools"
    } else {
      category_title = this.props.match.params.category
    }
    this.props.fetchCategory(this.props.match.params.category).then(() =>
  this.setState({load: false, title: category_title.toUpperCase()}));
  }

  render(){
    if (this.state.load) {
      return (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
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
