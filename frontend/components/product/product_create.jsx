import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

class productForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      img_url: "",
      title: "",
      description: "",
      quantity: 1,
      price: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    if (!this.props.loggedIn) {
      // this.props.histroy.push("/");
      this.props.openModal('login');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.productForm(this.state).then( () =>
      this.props.history.push('/')
    );
  }
  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return(
      <div className='product-create-container'>
        <form onSubmit={this.handleSubmit} className="product-form-box" >
          <div className='upload-photos'>
            <div className='photos-upload-instruction'>
              <div className='instruction-title'>
                <h3>Photo</h3>
                <span>Add as many as you can so buyers can
                  see every detail</span>
              </div>
              <div className='instruction-detail'>
                <span>Photos *</span>
                <span>Use up to ten photos to show your items most
                  important qualities</span>
              </div>
            </div>
            <div className='upload-photo-section'>
              <label>img_url *
                <input type="text" value={this.state.img_url} onChange={this.update('img_url')}/>
              </label>
            </div>
          </div>
          <div className='listing-details-instruction'>
            <h3>Listing details</h3>
            <span>Tell the world about your item and why they'll love it.</span>
            <div className='listing-title'>
              <div className='listing-detail'>
                <label>
                  <span>Title *</span>
                  <input type="text" value={this.state.title}
                    onChange={this.update('title')}
                    className="product-input"
                    />
                </label>
                <label>
                  <span>Description *</span>
                  <textarea value={this.state.description}
                    onChange={this.update('description')}
                    className="product-input"
                    />
                </label>
              </div>
            </div>
          </div>
          <div className="price-and-quantity">
            <h3>Inventory and pricing</h3>
            <div className="inventory-price-form">
              <label>
                <span>Price *</span>
                <input value={this.state.price}
                  onChange={this.update('price')}/>
              </label>
              <label>
                <span>Quantity *</span>
                <input value={this.state.quantity}
                  onChange={this.update('quantity')}/>
              </label>
            </div>
          </div>
          <div className="submit-button">
            <input className="product-submit" type="submit"
              value={this.props.formType}/>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(productForm);
