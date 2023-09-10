import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, deletetodo, toggletodo } from './redux/Action'


function App() {
  let [task, setTask] = useState("")
  let dispatch = useDispatch();
  const handletodo = () => {
    dispatch(addtodo({ task: task, isCompleted: false }))
  }
  const handledelete = (id) => {
    dispatch(deletetodo(id));
  }
  // const handletoggle = (index) => {
  //   dispatch(toggletodo(index));
  // }
  let todolist = useSelector((store) => store);
  console.log(todolist);

  return (
    <div className='display'>
    <div className='main-div'>
      <h1 className='todo'>TODO</h1>
      <input type="text" onChange={(e) => setTask(e.target.value)} placeholder='enter your todo'/>
      <br />
      <br />
      <button onClick={handletodo} className='add'>ADD TODO</button>
      <div className='grid'>
      {todolist.map((ele, index) => (
        
        <div key={index} className='divs'>
          <h3>{ele.task}</h3>
          {ele.isCompleted ? (
            <span style={{ backgroundColor: "purple", color: "white" }} onClick={() => dispatch(toggletodo(index))}>Completed</span>
          ) : (
            <span style={{ backgroundColor: "red", color: "white" }} onClick={() => dispatch(toggletodo(index))}>UnCompleted</span>
          )}
          <button className='delete' onClick={() => handledelete(index)}>DELETE</button>
        </div>
      ))}
      </div>

    </div>
    </div>
  )
}

export default App
