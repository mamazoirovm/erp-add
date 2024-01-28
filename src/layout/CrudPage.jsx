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
import useTeacher from "../hooks/useCrud";
import { useForm } from "antd/es/form/Form";
import useCrud from "../hooks/useCrud";
const CrudPage = ({ pageColumns, title, pageForm, collectionName }) => {
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
    updateTeacher,
  } = useCrud(collectionName);
  const columns = [
    {
        title: "№",
        dataIndex: "id",
        key:"id",
        width: 80,
        render:(record, id, index)=> index + 1,
    },
    ...pageColumns,
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
        <h1 className="text-one">{title}</h1>
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
          {pageForm.map((page) => (
            <Form.Item
              rules={[
                {
                  required: true,
                  message: `Iltimos ${page.label} kiriting`,
                },
              ]}
              required
              label={page.label}
              name={"firstName"}
            >
              <Input />
            </Form.Item>
          ))}
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

export default CrudPage;
