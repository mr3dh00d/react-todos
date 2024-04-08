import moment from "moment"
import { useEffect, useState } from "react"
import {
    deleteTodo,
    updateTodo
} from '../services/todos'

const ListaDeTareas = ({
    tareas,
    fetchTodos
}) => {

    const [option, setOption] = useState(null)
    const [editing, setEditing] = useState(null)

    const toggleTodo = (tarea) => {
        tarea.lista = !tarea.lista
        updateTodo(tarea)
        .finally(() => fetchTodos(), setOption(null))
    }

    const eliminarTarea = (id) => {
        if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
            deleteTodo({
                id
            }).then(response => {
                if (response.status === 'success') {
                    alert('Tarea eliminada correctamente')
                }
            })
            .finally(() => fetchTodos(), setOption(null))
        }

    }

    const mappingTareas = () => (
        (!tareas)
            ? Array.from({ length: 5 }).map((_, index) => (
                    <li key={index} className="bg-white shadow-md px-5 py-3 rounded-md my-3 flex justify-between items-center gap-2">
                        <div className="flex items-center gap-2 w-full">
                            <div className="w-8 h-8 animate-pulse bg-gray-100 rounded-sm"></div>
                            <div className="flex flex-col w-full gap-1">
                                <div className="w-full h-4 animate-pulse bg-gray-100 rounded-md"></div>
                                <div className="w-1/2 h-3 animate-pulse bg-gray-100 rounded-md"></div>
                            </div>
                        </div>
                        <div className="w-1/8">
                            <div className="w-20 h-4 animate-pulse bg-gray-100 rounded-md"></div>
                        </div>
                    </li>
            ))
            : tareas?.map((tarea, index) => (
                <li
                    key={tarea.id}
                    className="bg-white shadow-md px-5 py-3 rounded-md my-3 flex justify-between items-center"
                >
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={tarea.lista}
                            onChange={() => toggleTodo(tarea)}
                            className="h-5 w-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                        />
                        <div className="flex flex-col">
                            <input
                                id={`titulo-tarea-${
                                    tarea.id
                                }`}
                                type="text"
                                className="text-black font-semibold focus:outline-none"
                                value={tarea.titulo}
                                disabled={true}
                            />
                            {/* <p className="text-black font-semibold">{tarea.titulo}</p> */}
                            <p className="text-gray-500">{tarea.autor}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span
                            className="text-gray-500 text-[12px]"
                        >
                            {moment(tarea.fecha_creacion).format('HH:mm DD/MM/YYYY')}
                        </span>
                        <div className="relative">
                            <button
                                onClick={
                                    () => setOption(opt => opt !== index ? index : null)
                                }
                                className={`hover:bg-gray-100 rounded-full p-1 ${option === index ? "bg-gray-100" : ""}`}
                            >
                                <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/15/more.png" alt="more" />
                            </button>
                            {/* menu oculto */}
                            <div
                                className={
                                    option === index
                                        ? "absolute py-2 bg-white right-0 rounded-md shadow-md"
                                        : "hidden"
                                }
                            >
                                {/* <button className="w-32 flex items-center group">
                                    <div className="h-full w-full flex gap-2 py-1 px-2 items-center justify-start group-hover:bg-gray-100">
                                        <img width="15" height="15" src="https://img.icons8.com/material-outlined/24/create-new.png" alt="edit" />
                                        <p className="text-[15px]">Editar</p>
                                    </div>
                                </button> */}
                                <button
                                    className="w-32 flex items-center group"
                                    onClick={() => eliminarTarea(tarea.id)}
                                >
                                    <div className="h-full w-full flex gap-2 py-1 px-2 items-center justify-start group-hover:bg-gray-100">
                                        <img width="15" height="15" src="https://img.icons8.com/ios/50/DC2626/trash--v1.png" alt="trash--v1" />
                                        <p className="text-[15px] text-red-600">Eliminar</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))
    )

    return (
        <>
            <div className="bg-gray-100 shadow-md px-2 py-5 rounded-md">
                <h2 className="text-black font-bold text-2xl">Tareas</h2>
                <ul>
                    {mappingTareas()}
                </ul>
            </div>
        </>
    )
}

export default ListaDeTareas