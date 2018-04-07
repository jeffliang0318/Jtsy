import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

class productForm extends React.Component {
  componentDidMount(){
    if (!this.props.loggedIn) {
      <Redirect to="/"/>
      this.props.openModal('login');
    }
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
