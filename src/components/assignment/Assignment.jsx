import React, {Component, PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import s from 'components/styles/index.scss';
import {getAssignment} from 'redux/modules/currentAssignment.js';
import {connect} from 'react-redux';
// import {Link} from 'react-router';
import VideoPlayer from './VideoPlayer.jsx';

@asyncConnect([{
  promise: ({store: {dispatch}, params: {id}}) => {
    return dispatch(getAssignment(id));
  }
}])
@connect(state => ({
  assignment: state.currentAssignment.currentAssignment
}))
export default class Home extends Component {
  static propTypes = {
    assignment: PropTypes.object
  }
  render() {
    return (
      <div>
        <VideoPlayer />
        <div className={s.container}>
          <h2>{this.props.assignment.title}</h2>
          <p>{this.props.assignment.subject} {this.props.assignment.classNumber}: {this.props.assignment.className}</p>
          <p>{this.props.assignment.school}</p>
        </div>
      </div>
    );
  }
}
