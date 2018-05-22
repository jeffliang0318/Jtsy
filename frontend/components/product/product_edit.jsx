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
      category:"automation",
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
      if (key === 'user_id') {
        product[key] = this.props.currentUser.id;
      }else{
      product[key]=this.state[key];
      }
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
     return (
     <Redirect to={`/product/${showId}`}/>
     );
   } else {
    return(
      <div className='product-create-container'>
        <form onSubmit={this.handleSubmit} className="product-form-box" >
          <div className='top-row'>
            <section className='left-column'>
              <div className='upload-photos'>
                <div className='photos-upload-instruction'>
                  <div className='instruction-title'>
                    <h2>Photo</h2>
                  </div>
                  <div className='instruction-detail'>
                    <div className="upload-description">
                      <span>Please upload a photo</span>
                    </div>
                    <div className='upload-photo-section'>
                      {this.state.img_url === '' ? <Dropzone multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <br></br>
                        <p className="add-photo">Drop an image or click to select a file to upload.</p>
                      </Dropzone> :
                      <div className="empty-box"></div>}

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
            </section>
            <section className='right-column'>
              <div className='listing-details-instruction'>
                <div className='instruction-title'>
                  <h2>Listing details</h2>
                </div>
                <span>Tell the world about your item and why they'll love it.</span>
                <div className='listing-title'>
                  <div className='listing-detail'>
                    <label>
                      <span>Category </span><span className='must'>*</span>
                      <select onChange={this.update('category')} value={this.state.category}>
                        <option value="automation">Automation Components</option>
                        <option value="fasteners">Fasteners</option>
                        <option value="materials">Materials</option>
                        <option value="wiring">Wiring Components</option>
                        <option value="processing">Processing Tools</option>
                        <option value="electrical">Electrical Components</option>
                      </select>
                    </label>
                    <label>
                      <span>Title </span><span className='must'>*</span>
                      <input type="text" value={this.state.title}
                        onChange={this.update('title')}
                        className="product-input"
                        />
                    </label>
                    <label>
                      <span>Description </span><span className='must'>*</span>
                      <textarea value={this.state.description}
                        onChange={this.update('description')}
                        className="product-input"/>
                    </label>
                  </div>
                </div>
              </div>
              <div className="price-and-quantity">
                  <div className='instruction-title'>
                    <h2>Inventory and pricing</h2>
                  </div>
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
            </section>
          </div>
          <div className='product-bot-row'>
            <div className="submit-button">
              <Link className="cancel-link"to="/">Cancel</Link>
              <input className="product-submit" type="submit"
                value={this.props.formType}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
  }
}

export default withRouter(ProductEdit);
