import React from 'react'
import SideContent from './SideContent';
import SideNav from './SideNav';

export default function ContentBox() {
  return ( <>
    <div id="layoutSidenav">
    <SideNav></SideNav>
    <SideContent></SideContent>
    </div>
  </>);
}

export var SimpleNavBar = (props) => {
    const {content} = props;
    return (<>
    <nav>{content}</nav>    
    </>);
}

