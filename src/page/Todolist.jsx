import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Todolist() {
  const { id } = useParams();
  console.log(id);
  const [todos, setTodos] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [user, setUser] = useState([]);

  function hdlChang(e) {
    setTaskText(e.target.value);
  }

  const hdlRemove = async (e) => {
    const todoID = e.id;
    await axios.delete(
      `https://drive-accessible-pictures-send.trycloudflare.com/todos/11/${todoID}`,
    );
    fetchtodo();
  };

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
        body: JSON.stringify({ content: taskText }),
      },
    )
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        console.log(data);
        fetchtodo();
      });
  };
  const fetchtodo = async () => {
    const res = await axios.get(
      `https://drive-accessible-pictures-send.trycloudflare.com/todos/${id}`,
    );
    setTodos(res.data);
  };
  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          My Todo
        </h2>
        <form className=" flex">
          <input
            className="border-b border-gray-300    w-full"
            type="text"
            placeholder="new task "
            onChange={hdlChang}
          />
          <button
            type="button"
            onClick={hdlClick}
            className=" bg-teal-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition duration-300 mt-6 cursor-pointer ac"
          >
            add
          </button>
        </form>

        <form>
          {todos.map((e) => (
            <div className="flex justify-between gap-5">
              <div className=" flex gap-4">
                <input type="checkbox" checked={e.isdone} />
                <p>{e.content}</p>
              </div>

              <div className="flex gap-5">
                <button>Edit</button>
                <p
                  key={e.id}
                  onClick={() => {
                    hdlRemove(e);
                  }}
                >
                  x
                </p>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Todolist;
