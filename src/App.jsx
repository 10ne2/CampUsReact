import { createGlobalStyle } from 'styled-components'
import CampusMain from './components/campus/CampusMain'
import BoardDetail from './components/campus/board/BoardDetail'
import TopNav from './components/campus/topNav/TopNav'
import LectureAttendenceModify from './components/campus/lecAtten/LectureAttendanceModify'
import LectureHomeworkDetail from './components/campus/lecHomework/LectureHomeworkDetail'
import LectureAttendanceChange from './components/campus/lecAtten/LectureAttendanceChange'
import LectureHomeworkRegist from './components/campus/lecHomework/LectureHomeworkRegist'
import LectureHomeworkProDetail from './components/campus/lecHomework/LectureHomeworkProDetail'
import LecturePdsRegist from './components/campus/lecPds/LecturePdsRegist'
import ProjectTeamModify from './components/campus/proTeam/ProjectTeamModify'
import ProjectTeamRegist from './components/campus/proTeam/ProjectTeamRegist'
import ProjectObjectRegist from './components/campus/proObject/ProjectObjectRegist'
import LectureHomeworkStuDetailFeedbackSubmit from './components/campus/lecHomework/LectureHomeworkStuDetailFeedbackSubmit'
import { BrowserRouter } from 'react-router-dom'
import LectureHomeworkDetailFeedback from './components/campus/lecHomework/LectureHomeworkDetailFeedback'
import LectureHomeworkStuDetail from './components/campus/lecHomework/LectureHomeworkStuDetail'
import LectureNoticeDetail from './components/campus/lecNotice/LectureNoticeDetail'
import LectureOnlineDetail from './components/campus/lecOnline/LectureOnlineDetail'
import LecturePdsDetail from './components/campus/lecPds/LecturePdsDetail'
import MailWasteDetail from './components/campus/mail/MailWasteDetail'
import MailDetail from './components/campus/mail/MailDetail'
import ProjectObjectDetail from './components/campus/proObject/ProjectObjectDetail'
import ProjectObjectDetailFeedback from './components/campus/proObject/ProjectObjectDetailFeedback'
import ProjectTeamDetail from './components/campus/proTeam/ProjectTeamDetail'
import BoardList from './components/campus/board/BoardList'
import BoardRegist from './components/campus/board/BoardRegist'
import LectureHomeworkSubmit from './components/campus/lecHomework/LectureHomeworkSubmit'
import LectureNoticeRegist from './components/campus/lecNotice/LectureNoticeRegist'
import LecturePlanModify from './components/campus/lecPlan/LecturePlanModify'
import LecturePlanRegist from './components/campus/lecPlan/LecturePlanRegist'
import MailWrite from './components/campus/mail/MailWrite'
import ProjectTeamModifyCheck from './components/campus/proTeam/ProjectTeamModifyCheck'
import BoardModify from './components/campus/board/BoardModify'
import HomeWrapper from './components/campus/home/HomeWrapper'
import HomeWrapperPro from './components/campus/home/HomeWrapperPro'
import LectureAttendanceListPro from './components/campus/lecAtten/LectureAttendanceListPro'
import LectureAttendanceListStu from './components/campus/lecAtten/LectureAttendanceListStu'
import LectureHomeworkList from './components/campus/lecHomework/LectureHomeworkList'
import LectureNoticeList from './components/campus/lecNotice/LectureNoticeList'
import LectureNoticeModify from './components/campus/lecNotice/LectureNoticeModify'
import LectureOnlineList from './components/campus/lecOnline/LectureOnlineList'
import LectureOnlineModify from './components/campus/lecOnline/LectureOnlineModify'
import LectureOnlineRegist from './components/campus/lecOnline/LectureOnlineRegist'
import LecturePdsList from './components/campus/lecPds/LecturePdsList'
import LecturePdsModify from './components/campus/lecPds/LecturePdsModify'
import LecturePlanDetail from './components/campus/lecPlan/LecturePlanDetail'
import LecturePlanDetailPro from './components/campus/lecPlan/LecturePlanDetailPro'
import LecturePlanNoneData from './components/campus/lecPlan/LecturePlanNoneData'
import LecturePlanNoneDataPro from './components/campus/lecPlan/LecturePlanNoneDataPro'
import MailDashBoard from './components/campus/mail/MailDashBoard'
import MailReceive from './components/campus/mail/MailReceive'
import MailSend from './components/campus/mail/MailSend'
import MailWaste from './components/campus/mail/MailWaste'
import Mypage from './components/campus/mypage/Mypage'
import MypagePro from './components/campus/mypage/MypagePro'
import ChangePasswordModal from './components/campus/mypage/ChangePasswordModal'
import ProjectObjectFeedback from './components/campus/proObject/ProjectObjectFeedback'
import ProjectObjectList from './components/campus/proObject/ProjectObjectList'
import ProjectTeamList from './components/campus/proTeam/ProjectTeamList'
import ProjectTeamListPro from './components/campus/proTeam/ProjectTeamListPro'
import AttandanceModal from './components/campus/lecAtten/AttandanceModal'
import ProjectObjectProjectList from './components/campus/proObject/ProjectObjectProjectList'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

  }
  body{
    font-family: 'pretendard'
  }
    .react-datepicker {
    font-size: 14px;       /* 전체 폰트 크기 */
  }

  .react-datepicker__header {
    padding: 4px;          /* 상단 헤더 패딩 */
  }

  .react-datepicker__day, 
  .react-datepicker__day-name {
    width: 20px;           /* 날짜 버튼 크기 */
    line-height: 25px;
  }
`

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <CampusMain />
      </BrowserRouter>
    </>
  )
}

export default App
