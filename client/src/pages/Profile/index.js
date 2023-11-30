import { Tabs } from "antd";
import React from "react";
import moment from "moment";
import Products from "./Products";
import UserBids from "./UserBids";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Products" key="1">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="My Bids" key="2">
          <UserBids />
        </Tabs.TabPane>
        <Tabs.TabPane tab="General" key="3">
          <div className="flex flex-col w-1/3">
            <span className="text-primary text-xl flex justify-between">
              Name: <span className="text-xl ">{user.name}</span>
            </span>
            <span className="text-primary text-xl flex justify-between">
              Email: <span className="text-xl ">{user.email}</span>
            </span>
            <span className="text-primary text-xl flex justify-between">
              Created At:{" "}
              <span className="text-xl">
                {moment(user.createdAt).format("MMM D, YYYY")}
              </span>
            </span>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
