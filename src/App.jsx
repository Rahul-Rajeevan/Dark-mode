import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Theme } from './context/Theme'


function App() {
  const {isLight} = useContext(Theme)
  return (
    <div className={`${isLight?"Light":"Dark"}`}>
      <Navbar/>
      <h1>Welcome to the page</h1>
    </div>
  )
}

export default App
