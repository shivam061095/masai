import { useState } from "react"

const Create=()=>{
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [device,setDevice]=useState("")
    
    

    const handleSubmit=()=>{
     const payload={
        title,
        body,
        device
        
        }
        fetch("http://localhost:8080/posts/create",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            }

        }).then((res)=>res.json()).then((res)=>console.log(res))
       .catch(err=>console.log(err))
    }
    return <div>
        <h1>create Page</h1>
        <input type="text" placeholder="title" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder="body" value={body}    onChange={(e)=>setBody(e.target.value)}/>
        <input type="text" placeholder="device" value={device}    onChange={(e)=>setDevice(e.target.value)}/>
        
        <button onClick={handleSubmit}>create</button>
        
    </div>
}

export default Create