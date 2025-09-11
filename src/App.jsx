import { createGlobalStyle } from 'styled-components'
import CampusMain from './components/campus/CampusMain'
import BoardDetail from './components/campus/board/BoardDetail'
import TopNav from './components/campus/topNav/TopNav'
import LectureAttendenceModify from './components/campus/lecAtten/LectureAttendanceModify'
import LectureHomeworkDetail from './components/campus/lecHomework/LectureHomeworkDetail'

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
      <TopNav/>
      <LectureAttendenceModify/>
    </>
  )
}

export default App
