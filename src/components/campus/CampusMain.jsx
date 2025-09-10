import React from 'react'
import TopNav from './topNav/TopNav'
import Card from './commons/WHComponent'
import { BrowserRouter } from 'react-router-dom'
import LectureAttendenceList from './lecAtten/LectureAttendenceListPro'
import ProjectObjectList from './proObject/ProjectObjectList'
import MailReceive from './mail/MailReceive'

function CampusMain() {
  return (
    <>
    <BrowserRouter>
    <TopNav />
    <MailReceive/>
    </BrowserRouter>
    </>
  )
}

export default CampusMain