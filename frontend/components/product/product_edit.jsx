import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProductCreate from './product_create';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dgxmjwbrc/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "d0p2dmoc";
class ProductEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      img_url: "",
      title: "",
      description: "",
      quantity: 1,
      price: 0,
      redirectToNewPage: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
  }
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id)
      .then(product => this.setState(this.props.product));
    if (!this.props.loggedIn) {
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
    let product = {};
    for (let key in this.state) {
      if ((key === "uploadedFile") || key === "redirectToNewPage") continue;
      product[key]=this.state[key];
    }
    this.props.updateProduct(product).then((payload) => {
      this.props.history.push(`/product/${payload.product.id}`);
      // this.setState({ redirectToNewPage: true });

    });
  }
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
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
    if (this.state.redirectToNewPage) {
      const showId = Object.values(this.props.currentUser.products).slice(-1)[0].id;
      debugger;
     return (
     <Redirect to={`/product/${showId}`}/>
     );
   } else {
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
                <div className="upload-description">
                  <span>Photos *</span>
                  <span>Use up to ten photos to show your items most
                    important qualities</span>
                </div>
                <div className='upload-photo-section'>
                  <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p className="add-photo">Drop an image or click to select a file to upload.</p>
                  </Dropzone>
                  <div className="uploaded-photo">
                    {this.state.img_url === '' ? <div className="empty-box"></div> :
                      <div>
                        <img className="uploadedFile" src={this.state.img_url} />
                      </div>}
                    </div>
                </div>
              </div>
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
            <Link className="cancel-link"to="/">Cancel</Link>
            <input className="product-submit" type="submit"
              value={this.props.formType}/>
          </div>
        </form>
      </div>
    );
  }
  }
}

export default withRouter(ProductEdit);