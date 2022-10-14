import {
  Container,
  PrimaryHeading,
  SecondaryHeading,
  ConnectWallet,
} from "./components";
import { Todo } from "./pages";

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
