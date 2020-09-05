import React from "react";
import { Card, CardText, Input, Button } from "reactstrap";

const Todo = (props) => {
  console.log(props.data);
  return (
    <Card className={`dataS{props.data.checkValue ? "finished" : ""}`}>
      <Input
        type="checkbox"
        checked={props.data.checked}
        onChange={() => props.checkChange(props.data.id)}
      />
      <CardText>{props.data.todoInput}</CardText>
      <Button onClick={props.deleteTodo}>Delete</Button>
    </Card>
  );
};

export default Todo;
