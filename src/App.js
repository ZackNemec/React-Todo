import React from "react";
import { Container } from "reactstrap";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
  {
    id: 0,
    todoInput: "Finish Project",
    checkValue: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }
  checkChange = (dataId) => {
    const todo = this.state.todo.map((t) =>
      t.id === dataId ? { ...t, checkValue: !t.checkValue } : t
    );
    this.setState({ todo });
  };
  addTodo = (todoText) => {
    this.setState({
      todo: [
        ...this.state.todo,
        { id: Date.now(), todoInput: todoText, checkValue: false },
      ],
    });
  };
  deleteTodo = () => {
    this.setState({
      todo: this.state.todo.filter((data) => {
        return !data.checkValue;
      }),
    });
  };
  render() {
    return (
      <Container>
        <h1>Todo List</h1>
        <TodoList
          todoArray={this.state.todo}
          checkChange={this.checkChange}
          deleteTodo={this.deleteTodo}
        />
        <TodoForm addTodo={this.addTodo} />
      </Container>
    );
  }
}

export default App;
