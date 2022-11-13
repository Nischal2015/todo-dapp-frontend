import { useEffect } from "react";
import { Container, ConnectWallet, Typography } from "./components";
import { useConnectWallet } from "./hooks";
import { fetchData } from "./lib/fetchData";
import { CreateTodo, Todo } from "./pages";
import { apiDataShaper } from "./utils";

function App() {
  const connectWallet = useConnectWallet();
  const { getAllTodo, allTodo, addTodo, updateTodo } = fetchData();

  useEffect(() => {
    connectWallet.currentAccount && getAllTodo();
  }, [connectWallet.currentAccount]);

  return (
    <Container>
      <Typography as='h1'>Todo App</Typography>
      <ConnectWallet {...connectWallet} />
      <CreateTodo addTodo={addTodo} />
      <Typography as='h2'>Left to Complete</Typography>
      <Todo datas={apiDataShaper(allTodo)} updateTodo={updateTodo} />
    </Container>
  );
}

export default App;
