import { Container, ConnectWallet, Typography, TextField } from "./components";
import { CreateTodo, Todo } from "./pages";

function App() {
  return (
    <Container>
      <Typography as='h1'>Todo App</Typography>
      <ConnectWallet />
      <CreateTodo />
      <Typography as='h2'>Left to Complete</Typography>
      <Todo />
    </Container>
  );
}

export default App;
