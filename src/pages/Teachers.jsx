import React from 'react'
import CrudPage from '../layout/CrudPage'
import { collection } from 'firebase/firestore/lite'
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
]
const forms = [
  {
    label: "Ism",
    name: "firstName"
  },
  {
    label: "Familya",
    name: "lastName"
  }
]
const Teachers = () => {
  return (
    <div>
      <CrudPage pageColumns={columns} collectionName={"teachers"} title="Teacher" pageForm={forms}></CrudPage>
    </div>
  )
}

export default Teachers
