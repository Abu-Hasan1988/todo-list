import React from 'react';
import './App.css';
import deleteSvg from './xxx.svg';
function App() {

    const [todo, setTodo] = React.useState([
      {title:'Купить продукты', id:1},
      {title:'Сходить на тренировку', id:2},
      {title:'Помыть машину', id:3},
      {title:'Помыть машину', id:4}
    ]);

    const [newTodo, setNewTodo] = React.useState('');
    const addTodo =()=> {
        if (newTodo.trim() !== '') {
          setTodo([...todo,{id:Date.now(), title: newTodo}]);
            setNewTodo('');
        }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        addTodo();
      }
    };
    
    const deleteToDo = (spisokId)=> {
      setTodo(todo.filter(massiv=>massiv.id !== spisokId));

    };

  return (
    <div className="App">

     <h1 className='h1'> Список to do list </h1> 
        <div>
        <input 
         type='text'
         
         value={newTodo}
          onChange={(event)=>setNewTodo(event.target.value)}
          onKeyDown={handleKeyDown}
        /> 
         <button onClick={addTodo}>Добавить задачу</button>


        
        
        
      
        </div>
     <ul>
      {todo.map(spisok => (
      <li  className="liwka" key={spisok.id} > {spisok.title} 
       <img 
       className = "imagexxx"
       src= {deleteSvg} 
       alt='удалить'
       onClick={()=>deleteToDo(spisok.id)}/>  
      </li>))}


     
     </ul>
    </div>
  );
}

export default App;
