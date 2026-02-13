import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [user, setUser] = useState();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const hdlChang = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await axios.post(
        "https://drive-accessible-pictures-send.trycloudflare.com/auth/login",
        formData,
      );
      console.log(" successfully", res.data);
      setUser(res.data?.user);
      // console.log(res.data.user);

      toast.success("เข้าสู่ระบบสำเร็จ");

      navigate(`/todolist/${res.data.user?.userId}`);
    } catch (error) {
      toast.error("ลงทะเบียนไม่สำเร็จ");
      console.log(error);
      console.log("เกิดข้อผิดพลาด");
    }
  };
  console.log(user);

  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Welcome
        </h2>
        <form className="space-y-4" onSubmit={hdlSubmit}>
          <div className="flex flex-col gap-1">
            <input
              name="username"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
              type="text"
              placeholder="username"
              onChange={hdlChang}
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              name="password"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
              type="password"
              placeholder="password"
              onChange={hdlChang}
            />
          </div>
          <button className="w-full bg-teal-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition duration-300 mt-6 cursor-pointer ac">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
