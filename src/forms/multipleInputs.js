import React, { useState } from 'react'
import './mistyle.css'
const MultipleInputs = () => {
  const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserRegistration({ ...userRegistration, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegistration, id: new Date().getTime.toString() }
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setuserRegistration({ username: "", email: "", phone: "", password: "", age: "" });
  }

  return (
    <>

      <br></br>
      <br></br>
      <br></br>

      <h1 >Welcome Preetam</h1>

      <form action="" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="username">Full Name: </label>
            <input type="text" autoComplete="off"
              value={userRegistration.username}
              onChange={handleInput}
              name="username" id="username" />
          </div>
          <div>
            <label htmlFor="email">E mail: </label>
            <input type="text" autoComplete="off"
              value={userRegistration.email}
              onChange={handleInput}
              name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" autoComplete="off"
              value={userRegistration.phone}
              onChange={handleInput}
              name="phone" id="phone" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" autoComplete="off"
              value={userRegistration.password}
              onChange={handleInput}
              name="password" id="password" />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" min="18" max="65"
              autoComplete="off"
              value={userRegistration.age}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Gender: </label>
            <div className="form-check">
              <input
                className="form-check-input" type="radio" id="male" value="male" name="gender"
              />
              <label className="form-check-label pointer" htmlFor="male"> Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input" type="radio" id="female" value="female" name="gender"
              />
              <label className="form-check-label pointer" htmlFor="female"> Female</label>
            </div>
          </div>
          {/* here for slots */}
          <div className="form-group">
            <label htmlFor="slot">Select slot: </label>
            <select className="form-control" id="slot">
              <option value="">Selct Slot</option>
              <option value="a"> 6 to 7 AM</option>
              <option value="b"> 7 to 8 AM</option>
              <option value="c"> 8 to 9 AM</option>
              <option value="d"> 5 to 6 PM</option>

            </select>
          </div>
          <button type="pay">Complete Payment </button>

          <button type="submit">Submit </button>

          <br></br>
          <br></br>
        </div>
      </form>

      <div>
        {
          records.map((curElem) => {
            return (

              <table align='center'>
                <tr>
                  <td align='left'>{curElem.username}</td>
                </tr>
                <tr>
                  <td align='left'>{curElem.email}</td>
                </tr>
                <tr>
                  <td align='left'>{curElem.phone}</td>
                </tr>
                <tr>
                  <td align='left'>{curElem.age}</td>
                </tr>

              </table>

              // <div>
              //   <p>Name: {curElem.username}</p>
              //   <p>{curElem.email}</p>
              //   <p>{curElem.phone}</p>
              //   <p>{curElem.password}</p>
              //   <p>{curElem.age}</p>
              // </div>
            )
          })
        }

      </div>
    </>
  )
}

export default MultipleInputs
