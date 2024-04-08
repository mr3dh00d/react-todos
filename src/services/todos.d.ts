interface Todo {
    id: number
    titulo: string
    autor: string
    lista: boolean
    fecha_creacion: string
}

export async function getTodos() : Promise<Todo[]>
export async function getTodo({ id: number }) : Promise<Todo>
export async function createTodo({
    titulo: string,
    autor: string
}) : Promise<Todo>
export async function updateTodo({
    id: number,
    titulo: string,
    autor: string,
    lista: boolean,
}) : Promise<Todo>
export async function deleteTodo({
    id: number
}) : Promise<{
    message: string
}>