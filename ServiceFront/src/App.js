import React,{useEffect} from "react";
import Context from "./context";
import Todolist from "./webComponents/Todo/Todolist";
import Loader from "./webComponents/Loader/Loader";
import Modal from "./webComponents/Modal/Modal";
const AddTodo=React.lazy(()=>new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./webComponents/Todo/AddTodos'))
    },3000)
}))

const  styles={
    div:{
        margin: 'auto',
        width: 1170+'px',
        height: 100 + '%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'


}


}



function App() {
    const [todos,setTodos] =React.useState([])
    const [loading,setLoading]=React.useState(true)

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
            setTimeout(()=>{
                setTodos(todos)
                setLoading(false)
                }, 2000)

        })
},[])
    function toggleTodo(id){
        setTodos(todos.map(todo=>{
            if(todo.id===id){
                todo.completed= !todo.completed
            }
            return todo
        })
    )
    }
    function removeTodo(id){
       setTodos(todos.filter(todo=>todo.id!==id))

    }
    function   addTodo(title){
        setTodos(
            todos.concat([
                {
                title,
                id: Date.now(),
                completed: false,
            }
            ])
        )

    }

  return <Context.Provider value={{removeTodo}}> <div style={styles.div} className='wrapper'>
              <h1>ToDoo</h1>
            <Modal />
            <React.Suspense fallback={<p>Loading...</p>} >
                <AddTodo   onCreate={addTodo}/>
            </React.Suspense>

             {loading && <Loader/>}
            {todos.length?(<Todolist todos={todos} onToggle={toggleTodo}/>):loading?null:(<p>No todos</p>)}


         </div>
        </Context.Provider>
}

export default App;

console.log(123);