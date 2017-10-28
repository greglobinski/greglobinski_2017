import React from 'react';
import Link from 'gatsby-link';
import { FaMapMarker, FaEnvelopeO, FaPaperPlaneO, FaWrench, FaChevronDown } from 'react-icons/lib/fa';
import { TiCodeOutline } from 'react-icons/lib/ti';

const ListLink = (props) => (
  <li className="c-main-nav__elem" >
    <Link 
      to={props.to} 
      className="c-main-nav__link" 
      activeClassName="c-main-nav__link--is-active" 
      exact={true}
      onClick={props.closeMenu}
    >
      {props.children}
    </Link>
  </li>
);  

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      links: [
        { to: '/', text: 'Home', icon: FaMapMarker },
        { to: '/toolbox/', text: 'Toolbox', icon: FaWrench },
        { to: '/playground/', text: 'Playground', icon: FaPaperPlaneO },
        { to: '/contact/', text: 'Contact', icon: FaEnvelopeO }
      ],
      mainNavModifierClassName: '',
      mobileDetailsNav: null
    }
  }

  closeMenu() {
    console.log('closeMenu()');
    if (this.state.mobileDetailsNav) {
      this.setState(() => ({
        mainNavModifierClassName: '',
        mobileDetailsNav: null
      }))
    }
  }

  toggleMenu() {
    let mobileDetailsNav = null;
    let mainNavModifierClassName = '';

    if (!this.state.mobileDetailsNav) {
      mobileDetailsNav = (
        <div className="c-main-nav c-main-nav--is-open">
        { 
          this.state.links.map((link, i) => (
            <ListLink closeMenu={this.closeMenu} to={link.to} key={i} >
              <link.icon />
              <span className="c-main-nav__text">{link.text}</span>
            </ListLink>  
          )) 
        }
        </div>
      );
      mainNavModifierClassName = 'c-main-nav--is-hidden'
    } 

    this.setState(() => ({
      mainNavModifierClassName: mainNavModifierClassName,
      mobileDetailsNav: mobileDetailsNav
    }));
  }
  
  render() {
    return (
      <div>
        <ul className={ `c-main-nav ${this.state.mainNavModifierClassName}` }>
          { 
            this.state.links.map((link, i) => (
              <ListLink to={link.to} key={i} testLink={this.testLink}>
                <link.icon />
                <span className="c-main-nav__text">{link.text}</span>
              </ListLink>  
            )) 
          }
          <li 
            className="c-main-nav__elem c-main-nav__elem--close-link" 
            onClick={this.toggleMenu}
          >
            <a href="#" className="c-main-nav__link">
              <FaChevronDown />
              <span className="c-main-nav__text">Close</span>
            </a>
          </li>    
        </ul> 
        { this.state.mobileDetailsNav }
      </div>
    )
  }
};

export default MainNav;
