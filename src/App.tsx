import { Container, PrimaryHeading, SecondaryHeading } from "./components";
import datas from "./data.json";
import { Todo } from "./pages";

function App() {
  return (
    <Container>
      <PrimaryHeading>Todo App</PrimaryHeading>
      <SecondaryHeading>Left to Complete</SecondaryHeading>
      <Todo />
    </Container>
  );
}

export default App;
