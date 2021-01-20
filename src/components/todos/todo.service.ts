import Todo from "../../db/models/todo.model";
import HttpErrors from 'http-error'

interface ITodoBody {
  _id?: string
  task?: string
  completed?: boolean
  type?: string
}

class TodoService {
  constructor() { }

  async createTodo(data: ITodoBody) {

    const todo = await Todo.query().insert(data)

    return await Todo.query().findById(todo.id)
  };

  async getAllTodo() {
    const todos = await Todo.query()

    return todos
  }

}

export default TodoService;