import Todo from "../models/Todo.js"

async function getTodo(request, response) {

    const todo = await Todo.find()

    return response.status(200).json(todo);
}

async function createTodo(request, response) {
    const todo = request.body

    const newTodo = await Todo.create(todo)

    return response.status(201).json(newTodo)

}

async function deleteTodo(request, response) {
    const { id } = request.params
    await Todo.findByIdAndDelete(id)
    return response.json({ message: "Tarefa deletada com sucesso" })
}

export { getTodo, createTodo, deleteTodo } 