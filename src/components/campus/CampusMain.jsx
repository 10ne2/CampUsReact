import React from 'react'
import TopNav from './topNav/TopNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SideMenu from './menu/SideMenu'

import Mypage from './mypage/Mypage'
import MypagePro from './mypage/MypagePro'
import ChangePasswordModal from './mypage/ChangePasswordModal'

import MailDashBoard from './mail/MailDashBoard'
import MailDetail from './mail/MailDetail'
import MailNavBar from './mail/MailNavBar'
import MailNavItem from './mail/MailNavItem'
import MailReceive from './mail/MailReceive'
import MailSend from './mail/MailSend'
import MailWaste from './mail/MailWaste'
import MailWasteDetail from './mail/MailWasteDetail'
import MailWrapper from './mail/MailWrapper'
import MailWrite from './mail/MailWrite'

import HomeWrapper from './home/HomeWrapper'
import HomeWrapperPro from './home/HomeWrapperPro'

import LectureNoticeWrapper from './lecNotice/LectureNoticeWrapper'
import LectureNoticeDetail from './lecNotice/LectureNoticeDetail'
import LectureNoticeRegist from './lecNotice/LectureNoticeRegist'
import LectureNoticeList from './lecNotice/LectureNoticeList'
import LectureNoticeModify from './lecNotice/LectureNoticeModify'

import LectureOnlineWrapper from './lecOnine/LectureOnlineWrapper'
import LectureOnlineDetail from './lecOnine/LectureOnlineDetail'
import LectureOnlineModify from './lecOnine/LectureOnlineModify'
import LectureOnlineList from './lecOnine/LectureOnlineList'
import LectureOnlineRegist from './lecOnine/LectureOnlineRegist'

import LecturePlanWrapper from './lecPlan/LecturePlanWrapper'
import LecturePlanModify from './lecPlan/LecturePlanModify'
import LecturePlanDetail from './lecPlan/LecturePlanDetail'
import LecturePlanDetailPro from './lecPlan/LecturePlanDetailPro'
import LecturePlanRegist from './lecPlan/LecturePlanRegist'
import LecturePlanNoneData from './lecPlan/LecturePlanNoneData'
import LecturePlanNoneDataPro from './lecPlan/LecturePlanNoneDataPro'

import LectureHomeworkDetailFeedback from './lecHomework/LectureHomeworkDetailFeedback'
import LectureHomeworkList from './lecHomework/LectureHomeworkList'
import LectureHomeworkProDetail from './lecHomework/LectureHomeworkProDetail'
import LectureHomeworkRegist from './lecHomework/LectureHomeworkRegist'
import LectureHomeworkStuDetail from './lecHomework/LectureHomeworkStuDetail'
import LectureHomeworkStuDetailFeedbackSubmit from './lecHomework/LectureHomeworkStuDetailFeedbackSubmit'
import LectureHomeworkSubmit from './lecHomework/LectureHomeworkSubmit'
import LectureHomeworkWrapper from './lecHomework/LectureHomeworkWrapper'

import LecturePdsWrapper from './lecPds/LecturePdsWrapper'
import LecturePdsDetail from './lecPds/LecturePdsDetail'
import LecturePdsList from './lecPds/LecturePdsList'
import LecturePdsRegist from './lecPds/LecturePdsRegist'
import LecturePdsModify from './lecPds/LecturePdsModify'

import LectureAttendanceWrapper from './lecAtten/LectureAttendanceWrapper'
import LectureAttendanceChange from './lecAtten/LectureAttendanceChange'
import LectureAttendanceListPro from './lecAtten/LectureAttendanceListPro'
import LectureAttendanceListStu from './lecAtten/LectureAttendanceListStu'
import LectureAttendanceModify from './lecAtten/LectureAttendanceModify'

import ProjectObjectList from './proObject/ProjectObjectList'
import ProjectObjectWrapper from './proObject/ProjectObjectWrapper'
import ProjectObjectDetailFeedback from './proObject/ProjectObjectDetailFeedback'
import ProjectObjectFeedback from './proObject/ProjectObjectFeedback'
import ProjectObjectProjectList from './proObject/ProjectObjectProjectList'
import ProjectObjectRegist from './proObject/ProjectObjectRegist'

import ProjectTeamWrapper from './proTeam/ProjectTeamWrapper'
import ProjectTeamDetail from './proTeam/ProjectTeamDetail'
import ProjectTeamList from './proTeam/ProjectTeamList'
import ProjectTeamListPro from './proTeam/ProjectTeamListPro'
import ProjectTeamModify from './proTeam/ProjectTeamModify'
import ProjectTeamModifyCheck from './proTeam/ProjectTeamModifyCheck'
import ProjectTeamRegist from './proTeam/ProjectTeamRegist'

import BoardWrapper from './board/BoardWrapper'
import BoardDetail from './board/BoardDetail'
import BoardList from './board/BoardList'
import BoardModify from './board/BoardModify'
import BoardRegist from './board/BoardRegist'

function CampusMain() {
  return (
    <>
    <BrowserRouter>
      <TopNav />
      <SideMenu/>
      <Routes>
        <Route path='/' element={<HomeWrapper />}></Route>
        <Route path='/JAVA101/plan' element={<LecturePlanWrapper />}></Route>
          <Route index element={<LecturePlanDetail />}></Route>
        <Route path='/JAVA101/notice' element={<LectureNoticeWrapper />}></Route>
          <Route index element={<LectureNoticeList />}></Route>
          <Route path=':id' element={<LectureNoticeDetail />}></Route>
        <Route path='/' element={<LectureOnlineWrapper />}></Route>
          <Route path='/' element={<LectureOnlineList />}></Route>
          <Route path='/' element={<LectureOnlineDetail />}></Route>
        <Route path='/' element={<LecturePdsWrapper />}></Route>
          <Route path='/' element={<LecturePdsDetail />}></Route>
          <Route path='/' element={<LecturePdsList />}></Route>
        <Route path='/' element={<LectureAttendanceWrapper />}></Route>
          <Route path='/' element={<LectureAttendanceListStu />}></Route>
        <Route path='/' element={<LectureHomeworkWrapper />}></Route>
          <Route path='/' element={<LectureHomeworkDetailFeedback />}></Route>
          <Route path='/' element={<LectureHomeworkList />}></Route>
        <Route path='/' element={<ProjectObjectWrapper />}></Route>
          <Route path='/' element={<ProjectObjectList />}></Route>
          <Route path='/' element={<ProjectObjectDetailFeedback />}></Route>
          <Route path='/' element={<ProjectObjectProjectList />}></Route>
        <Route path='/' element={<ProjectTeamWrapper />}></Route>
          <Route path='/' element={<ProjectTeamDetail />}></Route>
          <Route path='/' element={<ProjectTeamList />}></Route>
        <Route path='/' element={<BoardWrapper />}></Route>
          <Route path='/' element={<BoardDetail />}></Route>
          <Route path='/' element={<BoardList />}></Route>
      </Routes>

      <Mypage />
      <MailDashBoard />

      <LecturePlanModify />
      <LecturePlanRegist />
      <LectureNoticeRegist />
      <LectureNoticeModify />
      <LectureOnlineModify />
      <LectureOnlineRegist />
      <LectureHomeworkRegist />
      <LectureHomeworkStuDetail />
      <LectureHomeworkStuDetailFeedbackSubmit />
      <LectureHomeworkSubmit />
      <LecturePdsRegist />
      <LecturePdsModify />
      <LectureAttendanceChange />
      <LectureAttendanceModify />

      <ProjectObjectFeedback />
      <ProjectObjectRegist />
      <ProjectTeamModify />
      <ProjectTeamRegist />
      <ProjectTeamModifyCheck />

      <BoardModify />
      <BoardRegist />
      
    </BrowserRouter>
    </>
  )
}

export default CampusMain