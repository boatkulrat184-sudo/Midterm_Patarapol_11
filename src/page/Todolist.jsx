import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Todolist() {
  const { id } = useParams();
  console.log(id);
  const [todos, setTodos] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchtodo();
  }, []);
  const hdlClick = (e) => {
    e.preventDefault();
    fetch(
      `https://drive-accessible-pictures-send.trycloudflare.com/todos/${id}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ content: "example" }),
      },
    )
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
    console.log(JSON.stringify({ content: "example" }));
  };
  const fetchtodo = async () => {
    const res = await axios.get(
      `https://drive-accessible-pictures-send.trycloudflare.com/todos/${id}`,
    );
    console.log(res.data);
  };
  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          My Todo
        </h2>
        <form className="space-y-4">
          <input
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
            type="text"
            placeholder="new task "
          />
          <button
            type="button"
            onClick={hdlClick}
            className=" bg-teal-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition duration-300 mt-6 cursor-pointer ac"
          >
            add
          </button>
          <ul>
            {todos.map((el) => (
              <li key={el.id}>{el.username}</li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Todolist;
