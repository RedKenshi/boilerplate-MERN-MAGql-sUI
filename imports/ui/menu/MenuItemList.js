import React, { Fragment,Component } from 'react'
import { Link } from 'react-router-dom';

class MenuItemList extends Component {
  state={
    active:""
  }

  render() {
    const { menuItems } = this.props;
    const list = [];
    menuItems.forEach(item => {
      if(item.display){
        list.push(
          <Fragment key={item.name}>
            <Link to={'/'+ item.name} onClick={()=>{this.setState({active:item.active})}} style={{textDecoration: 'none' }}>
              <li className={"menuItem " + (this.state.active == item.active ? "menuItemActive" : "")} style={{cursor:"pointer"}} name={item.name}>
                <p style={{
                    textAlign:"right",
                    padding:"8px 16px 8px 0",
                    fontSize:"1.1em",
                    fontWeight:"800",
                    fontFamily: "'Open Sans', sans-serif"
                  }}>{item.label.toUpperCase()}</p>
              </li>
            </Link>
          </Fragment>
        )
      }
    });
    return (
      list
    );
  }
}

export default MenuItemList
