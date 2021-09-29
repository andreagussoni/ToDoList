import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])
  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    const newTodos = [...todos, {text: value, isCompleted: false}]
    setTodos(newTodos)
    setValue('')
  }
  const removeTodo = e => {
    const index = Number(e.target.id)
    let temp = [...todos]
    temp.splice(index, 1)
    setTodos(temp)
  }

  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" id={i} onClick={removeTodo} key={i}>{todo.text}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={value}
          placeholder='add todo...'
          onChange={e=> setValue(e.target.value)}
          />
      </form>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
