import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      clickYet: false
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleUnClick = this.handleUnClick.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }
  handleClickSearch() {
    this.setState({ clickYet: true});
  }
  handleUnClick() {
    this.setState({ clickYet: false});
  }

  matches() {
    const matches = [];
    // if (this.state.inputVal.length === 0) {
    //   return this.props.titles.slice(0,2);
    // }

    this.props.titles.forEach((title, id) => {
      let sub = title.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push([title, id]);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    let title = event.currentTarget.innerText;
    this.setState({inputVal: ""});
  }

  render() {
    let results = this.matches().map((result, i) => {
      let id = this.props.productId;
      return (
        <Link className="search-result-link" key={i} to={`/product/${id[i]}`}>
          <li  className="search-result-li">{result}</li>
        </Link>
      );
    });
    return(
      <div>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'
            onClick={this.handleClickSearch}
            />
          <div className={ this.state.clickYet ? "show search-result" : "hide"}
            onClick={this.handleUnClick}>
            <ul className="result-list">
              <ReactCSSTransitionGroup
                transitionName='auto'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {results}
              </ReactCSSTransitionGroup>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
