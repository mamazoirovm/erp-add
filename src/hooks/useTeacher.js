import { addDoc, collection, getDoc, getDocs } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { db } from "../firebase/firabase"

export default ()=> {
    const [loading, setloading] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=> {
    getTeachers()
    }, [])
    async function getTeachers() {
        setloading(true)
        const col = collection(db, "teachers")
        const snapShot = await getDocs(col)

        setData(snapShot.docs.map(doc => ({...doc.data(), id: doc.id})))
        setloading(false)
      }

      async function addTeacher(teacher) {
        try {
            setloading(true)
            const docRef = await addDoc(collection(db, "teachers"), teacher)
        } catch (e) {
            console.error("error adding doc");
        }
        setloading(false)
      }

      return{
        loading,
        data,
        addTeacher
      }
}