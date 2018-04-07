import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

class productForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUser.id || null,
      img_url: "",
      title: "",
      description: "",
      quantity: null,
      price: null
    };
  }
  componentDidMount(){
    if (!this.props.loggedIn) {
      this.props.openModal('login');
    }
  }
  componentMwillount(){
    if (!this.props.loggedIn) {
      this.props.openModal('login');
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.productForm(this.state);
  }

  render() {
    return(
      <div>
        <h1>hola</h1>
      </div>
    );
  }

}

export default withRouter(productForm);
