import React, { Component } from 'react'
import MenuItemList from './MenuItemList';
import { Link,withRouter } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

class Menu extends Component {

  state={
    menuItems:[
      {
        name:"compte",
        label:"Compte",
        display:true
      }
    ],
    menuItemsAdmin:[
      {
        name:"compte",
        active:"compte",
        label:"Compte",
        display:true
      },{
        name:"administration/accounts",
        active:"administration",
        label:"Administration",
        display:true
      }
    ]
  }

  getMenuItemsList = () =>{
    if(this.props.user.isAdmin){
        return (this.state.menuItemsAdmin);
    }else{
        return (this.state.menuItems);
      }
  }

  render() {
    return (
      <div style={{
        width:"200px",
        height:"100vh",
        position:"fixed",
        display:"inline-block",
        backgroundImage:"linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)",
        boxShadow:"1px 0 5px black"
      }}>
          <ul style={{marginTop:"32px",padding:"0",listStyle:"none",textAlign:"center"}}>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
              <li style={{cursor:"pointer"}} name="avatarWrapper">
                <img alt="homeLogo" style={{width:"128px"}} src='/res/topMenu.png'/>
              </li>
            </Link>
            <hr style={{width:"80%",margin:"16px auto"}}/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr"}}>
              <img alt="userAvatar" style={{justifySelf:"center",gridColumnStart:"1",gridRowEnd:"span 2",justifySelf:"center",width:"48px"}} src={'/res/avatar/'+this.props.user.avatar}/>
              <p style={{justifySelf:"start",margin:"0"}}>{this.props.user.lastname.toUpperCase()}</p>
              <p style={{justifySelf:"start",margin:"0"}}>{this.props.user.firstname}</p>
            </div>
            <hr style={{width:"80%",margin:"16px auto"}}/>
            <MenuItemList menuItems={this.getMenuItemsList()}/>
            <li onClick={()=>{Meteor.logout();this.props.client.resetStore();this.props.history.push("/")}} className={"menuItemRed"} style={{cursor:"pointer"}}>
              <p style={{textAlign:"right",padding:"8px 16px 8px 0",fontSize:"1.1em",fontWeight:"800",fontFamily: "'Open Sans', sans-serif"}}>
                DECONNEXION
              </p>
            </li>
          </ul>
      </div>
    )
  }
}

const withUserContext = WrappedComponent => props => (
  <UserContext.Consumer>
      {ctx => <WrappedComponent {...ctx} {...props}/>}
  </UserContext.Consumer>
)

export default wrappedInUserContext = withUserContext(withRouter(Menu));