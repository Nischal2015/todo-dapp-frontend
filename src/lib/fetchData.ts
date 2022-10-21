import { ethers } from "ethers";
import { useState } from "react";
import abi from "../abi/TaskContract.json";

export type TodoProps = {
  taskId: number;
  taskTitle: string;
  taskDescription: string;
  isDeleted: boolean;
};

type ReturnProps = {
  allTodo: TodoProps[];
  todo: any;
  getAllTodo(): void;
  addTodo(title: string, description: string): void;
  getTodo(taskId: number): void;
  updateTodo(taskId: number, title: string, description: string): void;
  deleteTodo(taskId: number): void;
};

export const fetchData = (): ReturnProps => {
  let [allTodo, setAllTodo] = useState<TodoProps[]>([]);
  let [todo, setTodo] = useState([]);
  let TaskContract: ethers.Contract;
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      TaskContract = new ethers.Contract(
        "0x8Dad96bf37BDACfAEABe46446aD09040cAeB8046",
        abi.abi,
        signer
      );
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (error) {
    console.error(error);
  }

  async function getAllTodo() {
    try {
      const todo = await TaskContract.getTasks();
      setAllTodo(todo);
    } catch (error) {
      console.log(error);
    }
  }

  async function addTodo(title: string, description: string) {
    try {
      const addedTodo = await TaskContract.addTask(title, description, false);
      await addedTodo.wait();
    } catch (error) {
      console.log(error);
    } finally {
      await getAllTodo();
    }
  }

  async function getTodo(taskId: number) {
    try {
      const todoById = await TaskContract.getTask(taskId);
      setTodo(todoById);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTodo(
    taskId: number,
    title: string,
    description: string
  ) {
    try {
      const updatedTodo = await TaskContract.updateTask(
        taskId,
        title,
        description
      );
      updatedTodo.wait();
    } catch (error) {
      console.log(error);
    } finally {
      await getAllTodo();
    }
  }

  async function deleteTodo(taskId: number) {
    try {
      await TaskContract.deleteTask(taskId);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    allTodo,
    todo,
    getAllTodo,
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo,
  };
};
