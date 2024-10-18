import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';

import db from './db';

export default function App() {
  
  const [scholar, setscholar] = useState(0);
  const [name, setName] = useState('');
  const [classs, setClasss] = useState([]);
  const [house, setHouse] = useState('');
  const [prefect, setPrefect] = useState(false);
  const [roll, setRoll] = useState(0);
  const [yoa, setYoa] = useState(0);
  const [attendance, setAttendance] = useState([]);
  const [achievements, setachievements ] = useState([]);
  const [dob, setDob] = useState('');
  


  async function getdb(){
    const docRef = doc(db, "students","9899");
    const docSnap =  await getDoc(docRef);


    if(docSnap.exists()){
      console.log("Document data:", docSnap.data());
    }else{
      console.log("no document")
    }
  }

  useEffect(() => {
    getdb();
  }, [])
  






  
  return (
  
    <View>
      <Text>Cheese</Text>
    </View>
  
  );
}
