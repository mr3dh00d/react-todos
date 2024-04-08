import { useState } from "react"
import { createTodo } from "../services/todos"


const CrearTarea = ({
    fetchTodos
}) => {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [loading, setLoading] = useState(false)

    const handleTitulo = e => setTitulo(e.target.value)
    const handleAutor = e => setAutor(e.target.value)

    const handleSubmit = (e) => {
        setLoading(true)
        createTodo({
            titulo,
            autor
        }).then(response => {
            setTitulo('')
            setAutor('')
        }).finally(() => fetchTodos(), setLoading(false))
    }

    return (
        <>
            <div className="bg-gray-100 shadow-md px-2 py-5 rounded-md">
                <h2 className="text-black font-bold text-2xl">Crear tarea</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Título"
                        className="w-full bg-white px-3 py-2 rounded-md shadow-md my-3"
                        value={titulo}
                        onChange={handleTitulo}
                        disabled={loading}
                    />
                    <input
                        type="text"
                        placeholder="Autor"
                        className="w-full bg-white px-3 py-2 rounded-md shadow-md my-3"
                        value={autor}
                        onChange={handleAutor}
                        disabled={loading}
                    />
                    <div className="flex justify-end">
                        <button
                            className={
                                loading
                                    ? "bg-gray-400 px-3 py-2 text-white rounded-lg"
                                    : "bg-green-600 hover:bg-green-700 px-3 py-2 text-white rounded-lg"
                            }
                            disabled={loading}
                            onClick={handleSubmit}
                        >
                            Crear tarea
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default CrearTarea