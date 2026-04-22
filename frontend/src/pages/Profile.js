import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Profile() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await addDoc(collection(db, "users"), form);
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Profile Setup</h2>

      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Age" onChange={(e)=>setForm({...form,age:e.target.value})}/>
      
      <select onChange={(e)=>setForm({...form,type:e.target.value})}>
        <option>Student</option>
        <option>Tenant</option>
        <option>Family</option>
      </select>

      <input placeholder="Mobile" onChange={(e)=>setForm({...form,mobile:e.target.value})}/>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default Profile;
