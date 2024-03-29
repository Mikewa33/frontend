import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';


class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (<div className="feature">{this.props.message}</div>);
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);