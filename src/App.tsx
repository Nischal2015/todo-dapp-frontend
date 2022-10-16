import { useEffect } from "react";
import { Container, ConnectWallet, Typography } from "./components";
import { fetchData } from "./lib/fetchData";
import { CreateTodo, Todo } from "./pages";
import { apiDataShaper } from "./utils";

function App() {
  const { getAllTodo, allTodo, addTodo } = fetchData();

  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <Container>
      <Typography as='h1'>Todo App</Typography>
      <ConnectWallet />
      <CreateTodo addTodo={addTodo} />
      <Typography as='h2'>Left to Complete</Typography>
      <Todo datas={apiDataShaper(allTodo)} />
    </Container>
  );
}

export default App;
