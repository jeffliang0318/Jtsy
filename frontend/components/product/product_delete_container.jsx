import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { fetchProduct, deleteProduct } from '../../actions/product_actions';
import React from 'react';
import {withRouter} from 'react-router-dom';

class ProductDelete extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount(){
    this.props.fetchProduct(this.props.id);
  }
  handleDelete(){
    this.props.removeProduct(this.props.id).then(() =>
    this.props.history.push('/'));
  }

  render(){
    if (this.props.currentUserId === this.props.userId) {
      return (
        <button onClick={()=> this.handleDelete()}>Delete Product</button>
      );
    } else {
      return null;
    }
  }

}


const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.ui.session.currentUser.id,
  userId: state.entities.product[Object.keys(state.entities.product)].user_id
});

const mapDispatchToProps = dispatch => ({
  removeProduct: id => dispatch(deleteProduct(id)),
  fetchProduct: id => dispatch(fetchProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDelete);
