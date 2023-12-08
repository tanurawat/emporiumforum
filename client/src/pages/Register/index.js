import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/Divider";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../redux/loadersSlice";

const rules = [
  {
    required: true,
    message: "Required",
  },
];

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      const response = await RegisterUser(values);

      dispatch(SetLoader(false));
      if (response.success) {
        navigate("/login");
        message.success(response.message);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="grid grid-cols-2 bg-cover bg-hero">
      <div className="h-screen flex justify-center items-center flex-col p-5">
        <h1 className="custom-font text-primary text-7xl mb-10">
          Emporium Forum
        </h1>
        <div className="custom-font text-primary text-italic text-3xl">
          A Hyper Market of Refurbished Goods
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white p-5 rounded w-[450px]">
          <h1 className="text-primary text-2xl">
            EForum - <span className="text-gray-400 text-xl">REGISTER</span>
          </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={rules}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={rules}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={rules}>
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block className="mt-2">
              Register
            </Button>
            <div className="mt-5 text-center">
              <span className="text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Register;
