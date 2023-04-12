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


export async function getPatien (id){
    try{
        const docRef = await getDoc(doc(db, "pacientes", id));
        const data = docRef.data();
        return data;
    }catch(error){
        console.log(error);
    }
}

//citas collection
//doctor
export function getCitasDoctor() {
    const citasCollectionRef = collection(db, 'citas-doctor');
    return getDocs(citasCollectionRef);
}

//add cita
export const addCitaDoctor = async (citaId, pacienteId, date) => {
    const docRef = doc(db, "citas-doctor", citaId);
    const patient = await getPatien(pacienteId);
    const data = {
        citaId,
        date,
        patient,
    }
    try {
        await setDoc(docRef, data);
        console.log("Document written with ID: ", docRef.id);
    }catch (error) {
        console.error("Error adding document: ", error);
    }
}

//delete cita
export const deleteCitaDoctor = async (citaId) => {
    const docRef = doc(db, "citas-doctor", citaId);
    try {
        await deleteDoc(docRef);
        console.log("Document successfully deleted!");
    }catch (error) {
        console.error("Error removing document: ", error);
    }
}


//agregar un nuevo post oficial

export const addPost = async (id, title, content, date, category, img) => {
    const docRef = doc(db, "oficial", id);
    const data = {
        id,
        title,
        content,
        date,
        category,
        img,
    }
    try {
        await setDoc(docRef, data);
        console.log("Document written with ID: ", docRef.id);
    }catch (error) {
        console.error("Error adding document: ", error);
    }
}

//obtener todos los posts oficiales
export async function getOficialPosts() {
    const postsCollectionRef = collection(db, 'oficial');
    const snapshot = await getDocs(postsCollectionRef);
    const data = snapshot.docs.map(doc => doc.data());
    return data;
}

//agregar un post publico
export const addPublicPost = async (id, title, content, date, category, img) => {
    const docRef = doc(db, "public", id);
    const data = {
        id,
        title,
        content,
        date,
        category,
        img,
    }
    try {
        await setDoc(docRef, data);
        console.log("Document written with ID: ", docRef.id);
    }catch (error) {
        console.error("Error adding document: ", error);
    }
}

//obtener todos los posts publicos
export async function getPublicPosts() {
    const postsCollectionRef = collection(db, 'public');
    const snapshot = await getDocs(postsCollectionRef);
    const data = snapshot.docs.map(doc => doc.data());
    return data;
}



