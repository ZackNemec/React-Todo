// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import { Container, Card } from "reactstrap";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <Container>
      {props.todoArray.map((data) => (
        <Todo
          key={data.id}
          data={data}
          checkChange={props.checkChange}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </Container>
  );
};
export default TodoList;
