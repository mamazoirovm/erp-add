import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firabase";
import { message } from "antd";

export default collectionName => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  useEffect(() => {
    getTeachers();
  }, []);
  async function getTeachers() {
    setloading(true);
    const col = collection(db, collectionName);
    const snapShot = await getDocs(col);

    setData(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setloading(false);
  }

  async function addTeacher(teacher) {
    try {
      setloading(true);
      const docRef = await addDoc(collection(db, collectionName), teacher);
      setData([...data, { ...teacher, id: docRef.id }]);
      message.success("Muvaffaqiyatli qo'shildi");
      setOpen(false);
    } catch (e) {
      console.error("error adding doc");
    }
    setloading(false);
  }

  async function deleteTeach(id) {
    try {
      setloading(true);
      await deleteDoc(doc(db, collectionName, id));
      setData(data.filter((d) => d.id != id));
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }

  async function updateTeacher(id, values) {
    try {
      setloading(true);
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, values);
      setData(data.map((d) => (d.id === id ? { ...values, id } : d)));
      message.success("Muvaffaqiyatli yangilandi");
      setOpen(false);
      setEditing(null); // reset editing state after updating
    } catch (e) {
      console.error("error updating doc");
    }
    setloading(false);
  }

  return {
    loading,
    data,
    addTeacher,
    deleteTeach,
    open,
    setOpen,
    editing,
    setEditing,
    updateTeacher,
  };
};
