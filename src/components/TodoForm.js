import React from "react";
import { Container, Input, Form, Button } from "reactstrap";

class TodoForm extends React.Component {
  state = {
    data: "",
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ data: e.target.value });
  };

  submit = () => {
    this.props.addTodo(this.state.data);
    console.log(this.state.data);
  };
  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          this.submit();
        }}
      >
        <Input
          todoinput="data"
          type="text"
          value={this.state.data}
          onChange={this.handleChange}
        />
        <Button>Add</Button>
      </Form>
    );
  }
}

export default TodoForm;
