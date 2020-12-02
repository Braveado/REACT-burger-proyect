import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
//import Checkout from './Containers/Checkout/Checkout';
//import Orders from './Containers/Orders/Orders';
//import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actionCreators from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./Containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(() => {
  return import('./Containers/Orders/Orders');
});
const asyncAuth = asyncComponent(() => {
  return import('./Containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onAuthCheckState();
  }

  render(){
    let routes = (
      <Switch>                    
        <Route path="/auth" component={asyncAuth} />        
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>            
          <Route path="/checkout" component={asyncCheckout} />            
          <Route path="/orders" component={asyncOrders} />          
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />   
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to='/' />
        </Switch>
      );
    }

    return(
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.idToken !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheckState: () => dispatch(actionCreators.authCheckState()) 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
