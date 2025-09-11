import { createGlobalStyle } from 'styled-components'
import CampusMain from './components/campus/CampusMain'
import BoardDetail from './components/campus/board/BoardDetail'
import TopNav from './components/campus/topNav/TopNav'
import LectureAttendenceModify from './components/campus/lecAtten/LectureAttendanceModify'
import LectureHomeworkDetail from './components/campus/lecHomework/LectureHomeworkDetail'
import LectureAttendanceChange from './components/campus/lecAtten/LectureAttendanceChange'
import LectureHomeworkRegist from './components/campus/lecHomework/LectureHomeworkRegist'
import LecturePdsRegist from './components/campus/lecPds/LecturePdsRegist'
import ProjectTeamModify from './components/campus/proTeam/ProjectTeamModify'
import ProjectTeamRegist from './components/campus/proTeam/ProjectTeamRegist'
import ProjectObjectRegist from './components/campus/proObject/ProjectObjectRegist'
import LectureHomeworkStuDetailFeedbackSubmit from './components/campus/lecHomework/LectureHomeworkStuDetailFeedbackSubmit'

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
      <GlobalStyle/>
      <CampusMain/>
    </>
  )
}

export default App
