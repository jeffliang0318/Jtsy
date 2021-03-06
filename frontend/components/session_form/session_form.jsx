import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }
  handleDemo(){
    this.props.closeModal();
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  componentWillMount(){
    this.props.clearError();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
    this.props.closeModal();
    this.props.history.push('/');
  });
  }
  handleDemo(){
    this.props.closeModal();
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className='switchTab'>
          {this.props.registerForm}
          {this.props.loginForm}
        </div>
        <div className="session-form">
        <section id="login-modal" className="login-modal">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <div className="session-form-input">
                <label>Email</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  />
              </div>
              <br/>
              <div className="session-form-input">
                <label>Password</label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  />
              </div>
              <br/>
              <input className="session-submit" type="submit"
                value={this.props.formType}/>
            </div>
          </form>
          <div className="demo-button-insection">
            <button
              onClick={() => {
                this.props.login({email: "user@user.com", password: "123456"});
                this.handleDemo();
              }
            }>
            DEMO</button>
          </div>
          <div className="i-forgot-my-password">
            <Link to=""><li>Forgot your password?</li></Link>
            <Link to=""><li>Forgot your email?</li></Link>
            <Link to=""><li>Reopen your account?</li></Link>
          </div>
        </section>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
