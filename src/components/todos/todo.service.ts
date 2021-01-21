import Todo from "../../db/models/todo.model";

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

    return todo
  };

  async getAllTodo() {
    const todos = await Todo.query()

    return todos
  }

}

export default TodoService;