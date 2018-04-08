import React from 'react';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {
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
    return (
      <div className="login-form-container">
        <div className='switchTab'>
          {this.props.registerForm}
          {this.props.loginForm}
        </div>
        <div className="session-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Welcome to Jtsy!</h2>
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <label>Name:
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit"
              value={this.props.formType}/>
          </div>
        </form>
        <button
          onClick={() => {
            this.props.login({email: "user@user.com", password: "123456"});
            this.handleDemo();
            }
          }>
            DEMO</button>
      </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
