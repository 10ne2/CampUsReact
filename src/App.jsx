import { createGlobalStyle } from 'styled-components'
import CampusMain from './components/campus/CampusMain'

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
