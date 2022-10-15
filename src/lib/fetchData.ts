import { ethers, ContractInterface } from "ethers";

type fetchDataProps = {
  taskContractAddress: string;
  contractAbi: ContractInterface;
};

export const fetchData = ({
  taskContractAddress,
  contractAbi,
}: fetchDataProps) => {
  let TaskContract: ethers.Contract;
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      TaskContract = new ethers.Contract(
        taskContractAddress,
        contractAbi,
        signer
      );
      return TaskContract;
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (error) {
    console.error(error);
  }

  return {
    async getAllTodo() {
      try {
        const todos = await TaskContract.getTasks();
        console.log({ todos });
      } catch (error) {
        console.log(error);
      }
    },
    addTodo() {},
    getTodo() {},
    updateTodo() {},
    deleteTodo() {},
  };
};
