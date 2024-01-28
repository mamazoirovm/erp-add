import React, { useEffect, useState } from "react";
import MyInputs from "../layout/MyInput";
import MySelect from "../layout/MySelect";
import Buttons from "../layout/Buttons";
import "../index.css";
import { Button, Drawer, Flex, Form, Input, Space, Table } from "antd";
import {
  PlusCircleFilled,
  DeleteFilled,
  EditOutlined,
} from "@ant-design/icons";
import useTeacher from "../hooks/useTeacher";
import { useForm } from "antd/es/form/Form";
const Teachers = () => {
  const handleEdit = (record) => {
    setEditing(record);
    setOpen(true);
  };
  const onFinish = (values) => {
    if (editing) {
      updateTeacher(editing.id, values);
    } else {
      addTeacher(values);
    }
    console.log(addTeacher);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const {
    loading,
    data,
    addTeacher,
    open,
    setOpen,
    deleteTeach,
    editing,
    setEditing,
    updateTeacher
  } = useTeacher();
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
      width: 180,
    },
    {
      title: "Actions",
      key: "actions",
      width: 70,
      render: (record) => (
        <Space>
          <Button
            onClick={() => deleteTeach(record.id)}
            type="primary"
            danger
            icon={<DeleteFilled />}
          ></Button>
          <Button
            onClick={() => {
              handleEdit(record);
              setOpen(true);
              setEditing(record);
            }}
            type="primary"
            icon={<EditOutlined />}
          ></Button>
        </Space>
      ),
    },
  ];
  const [form] = useForm();

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && editing) {
      form.setFieldsValue(editing);
    }
  }, [open]);
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
      <Table
        loading={loading}
        rowKey="id"
        columns={columns}
        dataSource={data}
      />
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
          <Form.Item
            rules={[
              {
                required: true,
                message: "Iltimos ismingizni kiriting",
              },
            ]}
            required
            label="Ism kiriting"
            name={"firstName"}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Iltimos familyangizni kiriting",
              },
            ]}
            required
            label="Familiya kiriting"
            name={"lastName"}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              {editing ? "Edit" : "Saqlash"}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Teachers;
