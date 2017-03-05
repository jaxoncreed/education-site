import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: () => {
    const promises = [];

    return Promise.all(promises);
  }
}])
@connect(() => ({}), {})
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div>
        <nav className={s.headerNav}>
          <Link to="/">
            <img src="/images/logo.png" className={s.headerLogo} />
          </Link>
          <div>
            <ul className={s['navbar-list']}>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/assignment">SUBMIT A NEW ASSIGNMENT</Link></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
