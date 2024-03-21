import React from "react";
import { Space, Table } from "antd";
import { useState } from "react";
import { useEffect } from "react";

function AntdTable() {
  const [state, setstate] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setstate(data);
    setloading(false);
  };
  const dataSource = loading
    ? []
    : state.map((row) => ({
        id: row.id,
        name: row.name,
        username: row.username,
        email: row.email,
        website: row.website,
      }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-20">
      <Table columns={columns} dataSource={dataSource} />;
    </div>
  );
}
export default AntdTable;
