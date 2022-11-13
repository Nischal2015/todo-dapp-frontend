import { useEffect } from "react";
import { ConnectWallet } from "./components";
import { useConnectWallet } from "./hooks";
import { fetchData } from "./lib/fetchData";

function App() {
  const connectWallet = useConnectWallet();
  const { getAllTodo, allTodo } = fetchData();

  useEffect(() => {
    connectWallet.currentAccount && getAllTodo();
  }, [connectWallet.currentAccount]);

  return <ConnectWallet {...connectWallet} allTodo={allTodo} />;
}

export default App;
