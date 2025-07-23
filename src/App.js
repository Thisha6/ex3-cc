/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

// src/App.js
import React, { useState } from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const usersRef = collection(db, "users");

  const handleLoginOrSignup = async () => {
    const userDoc = doc(usersRef, email);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
      // Email exists → login
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setStatus("✅ Logged in successfully!");
      } catch (err) {
        setStatus("❌ Login failed: " + err.message);
      }
    } else {
      // Email not in DB → sign up
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(userDoc, { email });
        setStatus("✅ Signed up and saved to database!");
      } catch (err) {
        setStatus("❌ Signup failed: " + err.message);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login / Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLoginOrSignup} style={styles.button}>
        Login or Sign Up
      </button>
      <p>{status}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial",
    textAlign: "center"
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;

