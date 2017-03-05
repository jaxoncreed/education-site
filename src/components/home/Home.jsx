import React, {Component, PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import s from 'components/styles/index.scss';
import {getScenarios} from 'redux/modules/scenarioList.js';
import {connect} from 'react-redux';
import {Link} from 'react-router';

@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    return dispatch(getScenarios());
  }
}])
@connect(state => ({
  scenarios: state.scenarioList.scenarios
}))
export default class Home extends Component {
  static propTypes = {
    scenarios: PropTypes.array
  }
  render() {
    return (
      <div>
        <div className={s.banner}>
          <h1>Find Tutoring for your Classes</h1>
          <form className={s.searchBar}>
            <input type="text" placeholder="Find Classes / Assignments / Schools" />
            <input type="submit" value="Search" className={s['button-primary']} />
          </form>
        </div>
        <div className={s.searchResults}>
          <div className={s.searchCard}>
            <img src="http://placehold.it/300x110" />
            <h2>Homework 5</h2>
            <p>CS 1301</p>
            <p>Georgia Institute of Technology</p>
          </div>
          <div className={s.searchCard}>
            <img src="http://placehold.it/300x110" />
            <h2>Homework 5</h2>
            <p>CS 1301</p>
            <p>Georgia Institute of Technology</p>
          </div>
          <div className={s.searchCard}>
            <img src="http://placehold.it/300x110" />
            <h2>Homework 5</h2>
            <p>CS 1301</p>
            <p>Georgia Institute of Technology</p>
          </div>
          <div className={s.searchCard}>
            <img src="http://placehold.it/300x110" />
            <h2>Homework 5</h2>
            <p>CS 1301</p>
            <p>Georgia Institute of Technology</p>
          </div>
          <div className={s.searchCard}>
            <img src="http://placehold.it/300x110" />
            <h2>Homework 5</h2>
            <p>CS 1301</p>
            <p>Georgia Institute of Technology</p>
          </div>
        </div>
      </div>
    );
  }

}
