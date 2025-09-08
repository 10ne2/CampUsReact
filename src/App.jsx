import CampusMain from './components/campus/CampusMain'
import Homework from './components/campus/Homework'
import BoardList from './components/campus/board/BoardList'
import HomeWrapper from './components/campus/home/HomeWrapper'
import LectureHomeworkList from './components/campus/lecHomework/LectureHomeworkList'
import LectureNoticeList from './components/campus/lecNotice/LectureNoticeList'
import LecturePdsList from './components/campus/lecPds/LecturePdsList'
import ProjectObjectList from './components/campus/proObject/ProjectObjectList'
import TopNav from './components/campus/topNav/TopNav'
import LectureAttendenceList from './components/campus/lecAtten/LectureAttendenceList'

function App() {

  return (
    <>
      <TopNav/>
      <LectureAttendenceList/>
    </>
  )
}

export default App
