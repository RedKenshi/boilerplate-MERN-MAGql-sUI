import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Compte from './Compte';
import Accounts from './Accounts';
import { UserContext } from '../../contexts/UserContext';

class PageBody extends Component {

  getAvailableRoutes = () =>{
    if(this.props.user.isAdmin){
      return(
        <Switch>
          <Route exact path='/' component={Home}/>

          <Route exact path='/compte' component={Compte}/>
          
          <Route exact path='/administration/accounts' component={Accounts}/>
          <Redirect from='*' to={'/'}/>
        </Switch>
      );
    }else{
      return(
        <Switch>
          <Route exact path='/' component={Home}/>

          <Route exact path='/compte' component={Compte}/>
          <Redirect from='*' to={'/'}/>
        </Switch>
      );
    }
  }

  render() {
    return (
      <div style={{
        width:"calc(100vw - 200px)",
        margin:"0 0 0 200px",
        padding:"32px 64px 32px 64px",
        display:"inline-block",
        backgroundColor: "#b8c6db",
        backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        height:"100vh"
      }}>
        {this.getAvailableRoutes()}
      </div>
    )
  }
}

const withUserContext = WrappedComponent => props => (
  <UserContext.Consumer>
      {ctx => <WrappedComponent {...ctx} {...props}/>}
  </UserContext.Consumer>
)

export default withUserContext(PageBody);