import { Container, PrimaryHeading, SecondaryHeading } from "./components";
import { Todo } from "./pages";
import ConnectWallet from "./pages/Todo/ConnectWallet/ConnectWallet";

function App() {
  return (
    <Container>
      <PrimaryHeading>Todo App</PrimaryHeading>
      <ConnectWallet />
      <SecondaryHeading>Left to Complete</SecondaryHeading>
      <Todo />
    </Container>
  );
}

export default App;
