import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Confirmation extends Component {
  componentWillMount() {
  	if(this.props.location){
    	this.props.confirmationEmail(this.props.location.query.token);
	}
  }

  render() {
    return (<div className="confirmation">Email Confirmed! Please proceed to the the App</div>);
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(Confirmation);
