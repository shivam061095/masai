import { useEffect,useState } from "react"


const Post=()=>{
    const [data,setData]=useState("")
   
useEffect(()=>{
    fetch("http://localhost:8080/posts",{
           
        headers:{
        
            "Authorization":localStorage.getItem("token")
        }

    }).then((res)=>res.json()).then((res)=>{console.log(res)
        setData(res)
    
    })
   .catch(err=>console.log(err))

},[])
   
      
    
    return <div>
        <h1>all post are here</h1>
        {data?data.map((ele)=>{
            return (
                <>
                <h2>title:{ele.title}</h2>
                <h2>body:{ele.body}</h2>
                <button>delete</button>
                </>
            )

        }):"something is wrong"}
       
    </div>
}

export default Post