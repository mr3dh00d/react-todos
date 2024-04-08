export async function getTodos() {
    return fetch(`${process.env.REACT_APP_API_URL}/todos`, {
        method: 'GET'
    }).then(response => response.json())
}

export async function getTodo({ id }) {
    return fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
        method: 'GET'
    }).then(response => response.json())
}

export async function createTodo({
    titulo,
    autor,
}) {
    return fetch(`${process.env.REACT_APP_API_URL}/todos/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo,
            autor
        })
    }).then(response => response.json())
}

export async function updateTodo({
    id,
    titulo,
    autor,
    lista
}) {
    return fetch(`${process.env.REACT_APP_API_URL}/todos/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo,
            autor,
            lista
        })
    }).then(response => response.json())
}

export async function deleteTodo({
    id
}) {
    return fetch(`${process.env.REACT_APP_API_URL}/todos/delete/${id}`, {
        method: 'DELETE'
    }).then(response => response.json())
}