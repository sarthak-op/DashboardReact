import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {useState,useEffect} from 'react'
import axios from 'axios'


export default function Register() {
  const [name, setName] = useState("");
  const [empnumber, setEmpnumber] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [curreffort, setCurreffort] = useState("");
  const [neweffort, setNeweffort] = useState("");
  const [impdate, setImpdate] = useState("");
  const [cstatus, setCstatus] = useState("");
  const [count, setCount] = useState("");

  // retrived data statef
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);

    // our object to pass
    const data = {
      Name: name,
      Employee: empnumber,
      Date: date,
      Topic: topic,
      Current_efforts: curreffort,
      New_Efforts:  neweffort,
      Implementatoion: impdate,
      Status: cstatus,
      Count: count
    }
    axios.post('https://sheet.best/api/sheets/a8f822b2-6549-4887-a9c5-400a42196abe',data).then(response=>{
      console.log(response);
      setName('');
      setEmpnumber('');
      setDate('');
      setTopic('');
      setCurreffort('');
      setNeweffort('');
      setImpdate('');
      setCstatus('');
      setCount('');
    })
  }
  
  return (
    
    <div className="App">
      <strong>Register New RPA</strong>
      <form className='form-group'
      onSubmit={handleSubmit}>
        
        <div >
        
          <div >
            <label className="label">
              Name:
              <input 
              className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              Employee Number:
              <input
              className="input"
                type="number"
                value={empnumber}
                onChange={(e) => setEmpnumber(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              Start date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              Topic:
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              Current Efforts:
              <input
                type="text"
                
                value={curreffort}
                onChange={(e) => setCurreffort(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              New Efforts:
              <input
                type="text"
                value={neweffort}
                onChange={(e) => setNeweffort(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              Implementation Date:
              <input
                type="date"
                value={impdate}
                onChange={(e) => setImpdate(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              Status:
              <input
                type="checkbox"
                value={cstatus}
                onChange={(e) => setCstatus(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              Count:
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

  );
}
