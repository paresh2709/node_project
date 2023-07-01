import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update(props) {
    const[name,setName]=useState("")
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const params=useParams()
    const navigate=useNavigate()

    
useEffect(()=>{
    console.log(useParams);
    getProductDeatails()
},[]);
const getProductDeatails=async()=>{
    console.log(useParams);
    let result=await fetch(`http://localhost:5000/product/${params.id}`)
    result=await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
}
    
    const updateproduct= async()=>{
        console.log(name,price,category,company);
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
         method:'put',
         body:JSON.stringify({name,price,category,company}),
         headers:
         {
            'Content-Type':'application/json'
         }
        })
        result=await result.json();
        console.log(result);
        navigate('/')
        

    }
    return (
        
        
        <div className='nav-add'>

            <input type="text" className='inputBox'
             placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)} 
            value={name} />



            <input type="text" className='inputBox'
             placeholder='Enter your price'
             onChange={(e)=>setPrice(e.target.value)} 
             value={price}/>




                 <input type="text" className='inputBox'
                  placeholder='Enter your category'
                     onChange={(e)=>setCategory(e.target.value)} value={category}/>


             
            <input type="text" className='inputBox'
            placeholder='Enter your company'
            onChange={(e)=>setCompany(e.target.value)} value={company}/>


              <button type="button" onClick={updateproduct} className='appButton'>update product</button>
        </div>
    );
}   

export default Update;