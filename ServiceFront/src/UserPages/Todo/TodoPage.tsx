//imports
import React,{useEffect} from "react";
import Context from "../../Context/context";
import Todolist from "./webComponentsTodo/Todolist";
import Loader from "../../UI/Loader/Loader";
import Modal from "./UI-Todo/Modal/Modal";

/*
*Линивая подгрузка компонентов
*/
const AddTodo: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() => new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./webComponentsTodo/AddTodos'))
    },3000)
}))




// Инлайновые стили
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




/*
*Страница TodoPage
*/

function TodoPage() {

    const [todos,setTodos] = React.useState([])
    const [loading,setLoading] = React.useState(true)

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


    function toggleTodo(id:any){
        setTodos(todos.map(todo=>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }


    function removeTodo(id:any){
       setTodos(todos.filter(todo=> todo.id !== id))

    }


    function addTodo(title: any){
        setTodos(
            todos.concat([
                {
                    title: any,
                    id: number Date.now(),
                    completed: boolean  false,
                }
            ])
        )

    }

  return <Context.Provider value={{removeTodo}}>
            <div style={styles.div} className='wrapper'>
                <h1>ToDoo</h1>
                <Modal/>
                <React.Suspense fallback={<p>Loading...</p>} >
                    <AddTodo   onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {todos.length?(<Todolist todos={todos} onToggle={toggleTodo}/>):loading?null:(<p>No todos</p>)}


            </div>
        </Context.Provider>
}

export default TodoPage;
