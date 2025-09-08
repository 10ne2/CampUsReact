import React from 'react'
import TopNav from '../topNav/TopNav'
import Card from '../commons/ListComponent'
import ComingCardList from './ComingCardList'
import AttenCardList from './HwCardList'
import HwCardList from './HwCardList'
import go from '../img/go.png'
import styled from 'styled-components'

const ActionText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #696969;
`

function HomeWrapper() {
  return (
    <>
        <Card title="예정 강의" listComponent={<ComingCardList/>} marginTop= "4px" />
        <Card title="금주의 출결" listComponent={<AttenCardList/>} marginTop= "20px" action= {<img src={go} alt="go" style={{ width: "24px" }}/>} />
        <Card title="2학기" listComponent={<HwCardList/>} marginTop= "20px" fontSize="14px" fontWeight="500" action={<ActionText>CampUs</ActionText>}
          date="2025-09-02 ~ 2025-09-22"/>
    </>
  )
}

export default HomeWrapper