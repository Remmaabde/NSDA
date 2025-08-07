import './App.css'
import {Home} from '../components/Home'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'

function App() {
  return(
  <>
  <Home/>
  <Header/>
  <TaskCard title="Finalize React Project" due_date="Friday, Aug 8"/>
  <TaskCard title="Complete NSDA Project" due_date="Monday Aug 11"/>
  </>
  )
}


export default App
