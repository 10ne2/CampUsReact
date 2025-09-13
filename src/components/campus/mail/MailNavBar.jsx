import React from 'react'
import { GrayHr } from '../home/HomeWrapperPro'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import MailNavItem from '../mail/MailNavItem'
import { Button } from '../commons/WHComponent'
import { Cancle } from '../img'
import { Container } from '../topNav/TopNav'

const NavContainer = styled.div`
    height: 48px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    gap: 40px;
`

const StyleLink = styled(NavLink)`
    text-decoration: none;
    color: #aaa;
    border-bottom: 2px solid transparent;

    &:hover{
        color: #2ec4b6;
        border-bottom: 2px solid #2ec4b6;
    }
    &.active {
        color: #2ec4b6;
        border-bottom: 2px solid #2ec4b6;
  }
`
function MailNavBar() {
  return (
    <>
    <GrayHr style={{margin:0, backgroundColor:'#ddd'}}/>
    <NavContainer style={{ alignItems:'center'}}>
        <StyleLink to='/mail' end>
            {({ isActive }) => <MailNavItem name='전체 메일' active={isActive} />}
        </StyleLink>
        <StyleLink to='/mail/receive'>
            {({ isActive }) => <MailNavItem name='받은 메일함' active={isActive} />}
        </StyleLink>
        <StyleLink to='/mail/send'>
            {({ isActive }) => <MailNavItem name='보낸 메일함' active={isActive} />}
        </StyleLink>
        <StyleLink to='/mail/waste'>
            {({ isActive }) => <MailNavItem name='휴지통' active={isActive} />}
        </StyleLink>
    </NavContainer>
    <GrayHr style={{margin:0, backgroundColor:'#ddd'}}/>
    </>
  )
}

export default MailNavBar