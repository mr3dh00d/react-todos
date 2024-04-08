import React, {
    useState,
    useEffect
} from 'react'
import {
    getTodos
} from '../services/todos'
import ListaDeTareas from '../components/ListaDeTareas'
import CrearTarea from '../components/CrearTarea'

const Todos = () => {
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        fetchTodos()
    }, [])
    const fetchTodos = () => {
        setTodos(null)
        getTodos().then(response => {
            setTodos(response)
        }).catch(error => {
            setTodos([])
        })

    }

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-full px-5 sm:px-7 md:px-10 lg:px-0 flex flex-col gap-5 pt-10">
                    <CrearTarea fetchTodos={fetchTodos}/>
                    <ListaDeTareas tareas={todos} fetchTodos={fetchTodos}/>
                </div>
            </div>
        </>
    )
}
export default Todos