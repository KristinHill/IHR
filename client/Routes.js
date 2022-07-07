import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { me } from './store';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Contact from './components/Contact';
import QHealth from './components/QHealth';
import WHealth from './components/WHealth';

// ** COMPONENT ** //
class Routes extends Component {
    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        return (
            <div>
                <Route path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/articles' component={Articles} />
                <Route exact path='/qhealth' component={QHealth} />
                <Route exact path='/whealth' component={WHealth} />
            </div>
        )
    }
}

// ** CONTAINER ** //
const mapDispatch = (dispatch) => {
    return {
      loadInitialData() {
        dispatch(me());
      },
    };
  };
  

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapDispatch)(Routes));
