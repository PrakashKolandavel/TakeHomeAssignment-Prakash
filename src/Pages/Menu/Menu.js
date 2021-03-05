import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {  Badge } from 'antd'
import {  UserOutlined, ShoppingCartOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { cartAction } from '../../store/Cart/action'

class MenuComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    collapsed: false,
    showMenu: false,
    cartCount:0
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <div className="header_container">
          <div className="logo"></div>

          <div className="menu_bar_responsive">
            <MenuUnfoldOutlined className="icon" onClick={() => {
              this.setState({ showMenu: !this.state.showMenu })
            }} />
            {this.state.showMenu ?

              <span>
                <NavLink to="/" className="navLink">Shop </NavLink>
                <NavLink to="/" className="navLink">About Us</NavLink>
                <NavLink to="/" className="navLink">Our Stores</NavLink>
                <NavLink to="/" className="navLink">Contact Us</NavLink>
              </span>
              : null}

          </div>

          <div className="menu_bar">
            <NavLink to="/" className="navLink">Shop </NavLink>
            <NavLink to="/" className="navLink">About Us</NavLink>
            <NavLink to="/" className="navLink">Our Stores</NavLink>
            <NavLink to="/" className="navLink">Contact Us</NavLink>
          </div>

          <div className="profile_Sec">
            <UserOutlined className="icon_logo" />
            <NavLink to="/cart">
              <Badge count={this.props.cartData.length}>
                <ShoppingCartOutlined className="icon_logo" size={150} />
              </Badge>
            </NavLink>
          </div>
        </div>
        <div className="invite_zone">
          Invite Friends To Big Fasion Festival & Get Upto $150 MynCash For Every Person Who Visits &nbsp;
        <button className="invite_button">Invite Now</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => { 
 return { ...state.CartReducer }
}
const mapDispatchToProps = ({
  getCartData:cartAction.getFromCart
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
