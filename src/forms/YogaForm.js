import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css"
// src/App.css src/App.css
import React, { useState } from "react";
import axios from "axios";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [slot, setSlot] = useState("");



    const onChangeHandler = (e) =>{
        const val = e.target.value;

        switch(e.target.name){
            case "name":
                setName(val);
                break;
            case "email":
                setEmail(val);
                break;
            case "password":
                setPassword(val);
                break;
            case "age":
                setAge(val);
                break;
            case "gender":
                setGender(val);
                break;
            case "slot":
                setSlot(val);
                break;
            default:
                alert("Error");
        }
    };
    const submitHandler=()=>{
        if(age<18 || age>65){
            alert("Age should be between 18 and 65");
            return;
        }
        const userObj ={email, password, age, gender, slot,name};
        axios.post("https://kpreetam7-turbo-funicular-7w4q4w4rv7wfrr6g-8000.preview.app.github.dev/data/",userObj).then((res)=>{
            alert("Payment Done successfully")
        }).catch((error)=>{
            alert("Error in payment");
        })
    };

    return( 
        <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-md-5">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                        <h3 className="text-center">Sign Up Form</h3>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label pt-2">
                                    Name
                                </label>
                                <input autoComplete="off" type="name" name="name" value={name} 
                                onChange={onChangeHandler} className="form-control" id="name" 
                                placeholder="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label pt-2">
                                    Email address
                                </label>
                                <input autoComplete="off" type="email" name="email" value={email} 
                                onChange={onChangeHandler} className="form-control" id="email" 
                                placeholder="xyz@gmail.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label pt-2">Password</label>
                                <input type="password" name="password" value={password} onChange={onChangeHandler} 
                                className="form-control" id="password" placeholder="Password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age" className="form-label pt-2">Age</label>
                                <input type="number" min="18" max="65" autoComplete="off" id="age"  name="age" value={age} 
                                onChange={onChangeHandler} 
                                className="form-control" placeholder="Enter the age"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Gender</label>
                                <div className="form-check">
                                    <input
                                    className="form-check-input" type="radio" id="male" value="male" name="gender"
                                    onChange={onChangeHandler}
                                    />
                                    <label className="form-check-label pointer" htmlFor="male"> Male</label>
                                </div>
                                <div className="form-check">
                                    <input
                                    className="form-check-input" type="radio" id="female" value="female" name="gender"
                                    onChange={onChangeHandler}
                                    />
                                    <label className="form-check-label pointer" htmlFor="female"> 
                                      Female
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="slot"> Select slot</label>
                                <select name="slot" onChange={onChangeHandler} className="form-control" id="slot" >
                                    <option value=""> --Selct Slot-- </option>
                                    <option value="a">6 to 7 AM</option>
                                    <option value="b">7 to 8 AM</option>
                                    <option value="c">8 to 9 AM</option>
                                    <option value="d">5 to 6 PM</option>

                                </select>
                            </div>
                            <br>
                            </br>
                            <button 
                            onClick={submitHandler}
                            type="button" 
                            className="btn btn-primary btn-block">
                                Complete Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignUp;