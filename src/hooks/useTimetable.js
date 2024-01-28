import { collection, getDocs } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { db } from "../firebase/firabase"

export default ()=> {
    const [loading, setLoading] = useState(false)
    const [classes, setClasses] = useState([])


    const getClasses = async ()=>{
    setLoading(true)
    const col = collection(db, "classes");
    const snapShot = await getDocs(col);


    setClasses(snapShot.docs.map(doc=>({...doc.data(), id: doc.id})))
    setLoading(false)
    }

    useEffect(()=>{
  getClasses()
    }, [])

    return{
        loading,
        classes
    }
}