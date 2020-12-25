import Todo from "../../models/todo.model";
import httpErrors from "http-errors";

// let todosService: { [key: string]: any } = {};

// todosService.createTodo = async (todoInfo) => {
//   const todo = await Todo.create({
//     ...todoInfo,
//   });

//   await todo.save();

//   return {
//     todo,
//   };
// };
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
