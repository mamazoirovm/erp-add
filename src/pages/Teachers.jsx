import React, { useEffect, useState } from "react";
import MyInputs from "../layout/MyInput";
import MySelect from "../layout/MySelect";
import Buttons from "../layout/Buttons";
import "../index.css";
import { Button, Drawer, Flex, Form, Input, Table } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import useTeacher from "../hooks/useTeacher";
import { useForm } from "antd/es/form/Form";
const Teachers = () => {
  const [open, setOpen] = useState(false);
  const onFinish = (values) => {
    addTeacher(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const {loading, data, addTeacher} = useTeacher()
  const columns = [
    {
      title: "Ism",
      dataIndex: "firstName",
      key: "firstName",
      width: 180,
    },
    {
      title: "Familya",
      dataIndex: "lastName",
      key: "lastName",
      width: 420,
    },
  
  ];
  const form = useForm()
  console.log(data);

  useEffect(()=> {
    if (!open) {
     form.resetFields();
    }
  },[open])
  return (
    <div>
      <Flex justify="space-between">
        <h1 className="text-one">Teachers</h1>
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          icon={<PlusCircleFilled />}
        ></Button>
      </Flex>

      <div className="in-group">
        <MyInputs />
        <Buttons />
      </div>
      <Table loading={loading} rowKey="id" columns={columns} dataSource={data}/>
      <Drawer
        onClose={() => setOpen(false)}
        title="Add new Teacher"
        open={open}
        placement="left"
      >
        <Form
        form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          name="add_teacher"
        >
          <Form.Item rules={[
                {
                  required: true,
                  message: "Iltimos ismingizni kiriting",
                },
              ]} required label="Ism kiriting" name={"firstName"}>
            <Input   />
          </Form.Item>
          <Form.Item    rules={[
                {
                  required: true,
                  message: "Iltimos familyangizni kiriting",
                },
              ]} required label="Familiya kiriting" name={"lastName"}>
            <Input
           
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Saqlash
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Teachers;
