import React, { useState } from 'react';
import { json } from 'react-router-dom';

function Addproduct(props) {
    const[name,setName]=useState("")
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const[error,setError]=useState("")



    const addproduct= async()=>{
        console.log(!name);

        if(!name || !price ||!category ||!company){
            setError(true)
        return false;
        }
        console.log(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;

        let result=await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json()
        console.log(result)
    }
    return (
        <div className='nav-add'>

            <input type="text" className='inputBox'
             placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)} 
            value={name} />
            {error&& !name&&
<span className='invalid-input'>Enter a valid name</span>
}


            <input type="text" className='inputBox'
             placeholder='Enter your price'
             onChange={(e)=>setPrice(e.target.value)} 
             value={price}/>

{error&& !price&&
<span className='invalid-input'>Enter a valid price</span>
}


                 <input type="text" className='inputBox'
                  placeholder='Enter your category'
                     onChange={(e)=>setCategory(e.target.value)} value={category}/>

{error&& !category&&
<span className='invalid-input'>Enter a valid category</span>
}
             
            <input type="text" className='inputBox'
            placeholder='Enter your company'
            onChange={(e)=>setCompany(e.target.value)} value={company}/>
{error&& !company&&
<span className='invalid-input'>Enter a valid company</span>
}
        <button type="button" onClick={addproduct} className='appButton'>Add product</button>
            </div>
    );
}
export default Addproduct;