import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.ui.session.currentUser,
  titles: Object.values(state.entities.product).map(product => product.title)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
