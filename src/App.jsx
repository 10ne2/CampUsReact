import { createGlobalStyle } from 'styled-components'
import CampusMain from './components/campus/CampusMain'
import BoardList from './components/campus/board/BoardList'
import LectureHomeworkList from './components/campus/lecHomework/LectureHomeworkList'
import LectureNoticeList from './components/campus/lecNotice/LectureNoticeList'
import LecturePdsList from './components/campus/lecPds/LecturePdsList'
import ProjectObjectList from './components/campus/proObject/ProjectObjectList'
import TopNav from './components/campus/topNav/TopNav'
import LectureAttendenceListStu from './components/campus/lecAtten/LectureAttendenceListStu'
import LectureAttendenceListPro from './components/campus/lecAtten/LectureAttendenceListPro'
import LectureOnlineList from './components/campus/lecOnine/LectureOnlineList'
import MailDashBoard from './components/campus/mail/MailDashBoard'
import MailReceive from './components/campus/mail/MailReceive'
import { BrowserRouter } from 'react-router-dom'
import MailSend from './components/campus/mail/MailSend'
import MailWaste from './components/campus/mail/MailWaste'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

  }
  body{
    font-family: 'pretendard'
  }
`

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle/>
        {/* <TopNav/> */}
        <MailWaste/>
      </BrowserRouter>
    </>
  )
}

export default App
