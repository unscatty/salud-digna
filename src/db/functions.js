import {db} from './firebase-config.js';
import { collection, getDocs, addDoc, doc, setDoc, getDoc} from 'firebase/firestore';

const userCollectionRef = collection(db, 'pacientes');

export default async function getPatiens()  {
    try{
        const snapshot = await getDocs(userCollectionRef);
        const data = snapshot.docs.map(doc => doc.data());
        return data;
    }catch(error){
        console.log(error);
    }
    // const id = snapshot.docs.map(doc => doc.id);
    // const name = data[0].nombre;
    // const name = snapshot.docs.map(doc => doc.data().nombre);    
    // console.log(name);
    
}

export const setPatien = async (id, nombre, edad,genero, alergias, enfermedades, medicamentos, cirugias, antecedentes,peso,estatura) => {
    const docRef = doc(db, "pacientes", id);
    const data = {
        nombre, 
        edad,
        genero, 
        alergias, 
        enfermedades, 
        medicamentos, 
        cirugias, 
        antecedentes,
        peso,
        estatura,
        id,
        // imc: 24.22,
    }
    try {
        await setDoc(docRef, data);
        console.log("Document written with ID: ", docRef.id);
    }catch (error) {
        console.error("Error adding document: ", error);
    }
}


export const getPatien = async (id) => {
    try{
        const docRef = await getDoc(doc(db, "pacientes", id));
        const data = docRef.data();
        return data;
    }catch(error){
        console.log(error);
    }
}