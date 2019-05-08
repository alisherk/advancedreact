import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

class App extends Component {
  
  renderButton() {
    return this.props.auth ? (
      <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    ) : (
      <button onClick={() => this.props.changeAuth(true)}> Sign In </button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/post'> Post a comment </Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route exact path='/' component={CommentList} />
        <Route path='/post' component={CommentBox} />
      </div>
    );
  }
}

function mapStateToProps ({ auth }) {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
