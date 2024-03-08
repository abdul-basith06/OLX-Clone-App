import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';


import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth,Firestore} from '../../Firebase/config'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
// import { FirebaseContext } from '../../Store/FirebaseContext';


export default function Signup() {
  const navigate = useNavigate()
  // const firebase = useContext(FirebaseContext);
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [err,setErr] = useState(null)
  const emailPattern =/^([a-zA-Z0-9._]+)@([a-zA-Z0-9]+\.[a-zA-Z.]{2,})$/

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("done");


    if(email && !emailPattern.test(email)){
      setErr('Invalid email format')
      console.log('Invalid email format')
      return
    }else if(name && name.length < 4){
      setErr('name must be at least 4 character')
      console.log('name must be at least 4 character')
      return
    }else if(phone && phone.length < 10){
      setErr('Phone must be at least 10 character')
      console.log('Phone must be at least 10 character')
      return
    }else if(password && password.length < 6){
      setErr('Password must be at least 6 character')
      console.log('Password must be at least 6 character')
      return
    }


    createUserWithEmailAndPassword(auth,email,password).then((result)=>{
      const user = result.user;
      console.log(user);
      updateProfile(user,{displayName:name}).then(()=>{
        const userCollection = collection(Firestore,"users")
        addDoc(userCollection,{
          id:user.uid,
          name:name,
          phone:phone
        })
        .then(()=>{
        console.log("inner fn");

          navigate('/login')
        })
        
      })
    }).catch((err)=>{
     setErr(err.message)
    })
    

    console.log(name)
    console.log(firebase)
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
