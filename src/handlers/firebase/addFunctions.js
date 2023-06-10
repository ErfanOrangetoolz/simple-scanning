import { collection, addDoc } from 'firebase/firestore';
import { firebaseDb } from '.';

const executeAddFunction = (method) => {
    return method(firebaseDb)
};
const addSingleUser = async (db) => {
    let uuid = generateRandomString(3) + '-' + create_UUID() + '-' + generateRandomString(3);
    const usersCollection = collection(db, 'users');
    return addDoc(usersCollection, {
        id: uuid, //no need add id
        name: "Erfannul Islam",
        created_at: JSON.stringify(new Date())
    });
};
const addMultipleUser = async (db) => {
};
export {
    executeAddFunction,
    addSingleUser,
    addMultipleUser
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        // eslint-disable-next-line eqeqeq, no-mixed-operators
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid; //1fe35579-5ce7-46ec-89e0-7e7236700297
    //https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
}

const generateRandomString = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

//https://firebase.google.com/docs/firestore?authuser=0&hl=en