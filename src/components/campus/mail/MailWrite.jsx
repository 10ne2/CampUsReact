import React from 'react'
import { Container } from '../topNav/TopNav'
import Cancle from '../img/Cancle.png'
import styled from 'styled-components'
import { GrayHr } from '../home/HomeWrapperPro'

export const RegistButton = styled.button`
    width: 69px;
    height: 29px;
    background-color: #2ec4b6;
    color: #ffffff;
    border-radius: 5px;
    border: #2ec4b6;
    font-size: 13px;
    font-weight: bold;
`
function MailWrite() {
  return (
    <>
    <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <img src={Cancle} style={{width:'19px', height:'19px'}}></img>
        <RegistButton>메일 작성</RegistButton>
        </Container>
    <GrayHr style={{margin:0}}/>
    </>
  )
}

export default MailWrite