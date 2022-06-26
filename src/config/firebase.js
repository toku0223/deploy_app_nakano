import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import {
    addDoc, getFirestore, collection,
    query, addDocs, getDocs, updateDoc,
    doc, deleteDoc
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            console.log("create user success!!")
            return "success"
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
            return "failed"
        });

}
export const loginHandleClick = (email, password) => {
    const auth = getAuth();
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                resolve(user)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
                reject(errorMessage)

            });
    })


}
export const db = getFirestore();

export const createDataInFirebase = async () => {
    let returnObj = ""
    console.log('firebase start')
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "AdaAda",
            last: "Lovelace",
            born: 1815
        });
        returnObj = "test1"
        console.log("Document written with ID:", docRef.id);
    } catch (e) {
        returnObj = "test2"
        console.error("Error adding document:", e)
    }
    return returnObj
}

export const readData = async () => {
    console.log('readData')
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
    });
};

export const updateData = async () => {
    const washingtonRef = doc(db, "users", "8xk1Z5J7aX3pNbT6hxyE");
    await updateDoc(washingtonRef, {
        capital: true
    });
};

export const deleteData = async () => {
    const cityRef = deleteDoc(doc(db, 'users', '8xk1Z5J7aX3pNbT6hxyE'))
    // await updateDoc(cityRef, {
    //     capital: deleteField()
    // })
}