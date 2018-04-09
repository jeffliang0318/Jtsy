import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/session_actions";
import UserShow from "./user_show";

const mapStateToProps = state => ({
  products: Object.values(state.ui.session.currentUser.products),
  user: state.ui.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
