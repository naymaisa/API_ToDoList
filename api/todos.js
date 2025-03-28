// api/todos.js
import connectDatabase from '../src/database/db.js';
import Todo from '../src/models/Todo.js';

export default async function handler(req, res) {
    // Conectar ao banco de dados
    await connectDatabase();

    // Definir os métodos para a API
    switch (req.method) {
        case 'GET':
            // Obter todos os TODOs
            try {
                const todos = await Todo.find();
                res.status(200).json(todos);
            } catch (err) {
                res.status(500).json({ message: 'Erro ao buscar tarefas' });
            }
            break;

        case 'POST':
            // Criar novo TODO
            try {
                const { tarefa, type } = req.body;
                const newTodo = await Todo.create({ tarefa, type });
                res.status(201).json(newTodo);
            } catch (err) {
                res.status(500).json({ message: 'Erro ao adicionar tarefa' });
            }
            break;

        case 'DELETE':
            // Deletar TODO
            try {
                const { id } = req.query;
                await Todo.findByIdAndDelete(id);
                res.status(200).json({ message: 'Tarefa deletada com sucesso' });
            } catch (err) {
                res.status(500).json({ message: 'Erro ao deletar tarefa' });
            }
            break;

        default:
            // Para métodos HTTP não permitidos
            res.status(405).json({ message: 'Método não permitido' });
    }
}
