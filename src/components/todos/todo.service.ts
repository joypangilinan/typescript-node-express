import Todo from "../../models/todo.model";
import HttpErrors from 'http-error'

interface ITodoBody {
  _id?: string
  task?: string
  completed?: boolean
  type?: string
}

class TodoService {
  constructor() { }

  async createTodo(todoInfo: ITodoBody) {

    const todo = await Todo.create({
      ...todoInfo
    });

    await todo.save();

    return {
      todo,
    };
  };

  async getAllTodo() {
    const todos = await Todo.find()

    return todos
  }

}

export default TodoService;