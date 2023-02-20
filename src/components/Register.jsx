import { useState } from "react"

const Registers=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [gender,setGender]=useState("")
    const [age,setAge]=useState("")
    const [pass,setPass]=useState("")
    const [city,setCity]=useState("")

    const handleSubmit=()=>{
     const payload={
        name,
        email,
        gender,
        age,
        pass,
        city
        }
        fetch("http://localhost:8080/users/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }

        }).then((res)=>res.json()).then((res)=>console.log(res))
       .catch(err=>console.log(err))
    }
    return <div>
        <h1>Register Page</h1>
        <input type="text" placeholder="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="email" value={email}    onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="gender" value={gender}    onChange={(e)=>setGender(e.target.value)}/>
        <input type="number" placeholder="age" value={age}    onChange={(e)=>setAge(e.target.value)}/>
        <input type="password" placeholder="pass" value={pass}  onChange={(e)=>setPass(e.target.value) }/>
        <input type="text" placeholder="city" value={city}    onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
}

export default Registers
