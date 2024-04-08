import { useRef, useState } from "react"
import { createTodo } from "../services/todos"


const CrearTarea = ({
    fetchTodos
}) => {
    const form = useRef(null)
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [loading, setLoading] = useState(false)

    const handleTitulo = e => setTitulo(e.target.value)
    const handleAutor = e => setAutor(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        createTodo({
            titulo,
            autor
        }).then(response => {
            setTitulo('')
            setAutor('')
        })
    .finally(() => setLoading(false), fetchTodos())
    }

    return (
        <>
            <div className="bg-gray-100 shadow-md px-2 py-5 rounded-md">
                <h2 className="text-black font-bold text-2xl">Crear tarea</h2>
                <form onSubmit={handleSubmit} ref={form}>
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
                            className="bg-green-600 hover:bg-green-700 px-3 py-2 text-white rounded-lg"
                            type="submit"
                            disabled={loading}
                        >
                            Crear tarea
                        </button>
                    </div>
                </form>
            </div>
        </>
    )

}


export default CrearTarea