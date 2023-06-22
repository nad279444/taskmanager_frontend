import './App.css'
import { useQuery } from 'react-query'
import fetchTasks from './data/api';
import Header from './components/Header'
import Task from './components/Task'



function App() {
  const { data, error, isError, isLoading } = useQuery('tasks', fetchTasks)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }
  
  return (
    <>
    <Header />
    <Task data={data}/>
    </>
  )
}

export default App