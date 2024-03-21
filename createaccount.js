import { useState } from "react";
import { useContext } from "react";
import MyContext from "./Mycontext";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateAccount(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [show,setShow]=useState(true);
    let ctx =useContext(MyContext);

    function create(e){
        e.preventDefault();
        if(name===""){
            alert("Please Enter name");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        ctx.users.push({name,email,password,balance:0});
        setShow(false);
    }
    
    function reset(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    const styles = {
        app: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        loginForm: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
        },
        title: {
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        inputContainer: {
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
        },
        label: {
            marginRight: '10px',
        },
        input: {
            width: '200px',
            padding: '5px',
        },
        buttonContainer: {
            textAlign: 'center',
            marginTop: '20px',
        },
        successMessage: {
            textAlign: 'center',
            color: 'green',
        },
    };

    return(
        <div style={styles.app}>
            <div style={styles.loginForm} className="login-form">
                <div style={styles.title}>Create Account</div>
                <div style={styles.form} className="form">
                    {show ?
                        <form>
                            <div style={styles.inputContainer}>
                                <label style={styles.label}>Name:</label>
                                <input style={styles.input} type="text" name="uname" required value={name} onChange={e=>setName(e.target.value)} />
                            </div>
                            <div style={styles.inputContainer}>
                                <label style={styles.label}>Email:</label>
                                <input style={styles.input} type="text" name="uname" required value={email} onChange={e=>setEmail(e.target.value)} />
                            </div>
                            <div style={styles.inputContainer}>
                                <label style={styles.label}>Password:</label>
                                <input style={styles.input} type="password" name="pass" required value={password} onChange={e=>setPassword(e.target.value)} />
                            </div>
                            <div style={styles.buttonContainer}>
                                <button onClick={create}>Submit</button>
                            </div>
                        </form>
                    :
                        <>
                            <h4 style={styles.successMessage}>Successfully created</h4>
                            <div style={styles.buttonContainer}>
                                <div><button onClick={reset}>Create another Account</button></div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
