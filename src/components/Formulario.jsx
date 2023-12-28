import { Fragment } from "react";
import { useState } from "react";

import { Component } from "react";
import styles from "./Formulario.module.css";




const Formulario = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            user: firstName,
            lastName : lastName,
            email:email,
            password,
            confirmPassword
        };
   
        console.log(data);

        setfirstName("");
        setPassword("");
        setConfirmPassword("");
    }

 
    return (
        <div className={styles.general} >
     
         
            <form action="#" onSubmit={handleRegister}>

            <div className={styles.formCard}>
                    <label htmlFor="userInput">First Name</label>
                    <input
                        type="text"
                        id="userInput"
                        name="usrIpt"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value) } 
                    />

                </div>

                <div className={styles.formCard}>
                    <label htmlFor="userInput">Last Name</label>
                    <input
                        type="text"
                        id="userInput"
                        name="usrIpt"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                    />

                </div>
                <div className={styles.formCard}>
                    <label htmlFor="userInput">Email</label>
                    <input
                        type="email"
                        id="userInput"
                        name="usrIpt"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className={styles.formCard}>
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        type="password"
                        id="passwordInput"
                        name="passIpt"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles.formCard}>
                    <label htmlFor="confirmPasswordInput">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPasswordInput"
                        name="confIpt"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value) }
                    />
                    {
                        password !== confirmPassword && confirmPassword.length > 0 &&
                        <p>Las contraseñas no coinciden</p>
                    }
                </div>
            </form>

            <div>
                <h1>Your Form Data </h1>
                <p>First Name {firstName}</p>
                <p>Last Name {lastName}</p>
                <p>Email {email}</p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmPassword}</p>            
             </div>
        </div>
    )
}


export default Formulario;