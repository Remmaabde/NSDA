import './App.css'
import {Home} from '../components/Home'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'

const Tasks =[
  {title:"Finalize React Project", due_date:"Friday, Aug 8"},
  {title:"Writing Proposal", due_date:"Monday, Aug 11"},
  {title:"Memorize Surah Al-khaf", due_date:"Wednesday, Aug 13"},
  {title:"Donate Quran", due_date:"Saturday, Aug 16"},
]

function App() {
  return(
  <>
  <Home/>
  <Header/>
  {Tasks.map(Task => <TaskCard title={Task.title} due_date={Task.due_date}/>)}
  </>
  )
}


export default App
