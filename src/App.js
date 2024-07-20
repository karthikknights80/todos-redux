import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { ADD_TODO, SHOW, REMOVE_TODO } from "./TodoSlice/todoSlice";
function App() {
  const [todoitem, settodoitem] = useState("");
  const todos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(ADD_TODO({ idx: todos.length, item: todoitem }));
    // dispatch(SHOW());
  };
  const deleteHandler = (idx) => {
    dispatch(REMOVE_TODO({ idx }));
  };
  return (
    <div className="App my-5">
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Todo"
              onChange={(e) => {
                settodoitem(e.target.value);
              }}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <ul>
          {todos.map((x, i) => {
            return (
              <div key={i} className="todoItems rounded">
                <li className="my-2 rounded p-2 ">{x.item}</li>
                <div className="d-flex p-2">
                  <Button variant="success" className="mx-3">
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteHandler(x.idx);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;
