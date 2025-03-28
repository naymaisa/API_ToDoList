import { Router } from "express"
import { getTodo, createTodo, deleteTodo } from "./controllers/TodoControllers.js"

const routes = Router()

routes.get("/todo", getTodo)
routes.post("/todo", createTodo)
routes.delete("/todo/:id", deleteTodo)

export default routes
