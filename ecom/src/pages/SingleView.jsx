import { Box, Typography } from '@mui/material'
import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'

 {/*/inside the arrow fuction create a dependency array i.e ,[]*/}
export default function SingleView() {
    const [product, setProduct]=useState({})
    //to access any url  useParams() is used to parse ny item then you have put the url inside the backtick i.e `https://dummyjson.com/products/1/${id}`
    const {id}= useParams();
    console.log(id)
    useEffect(()=>{
       fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(res => setProduct(res));   //this should be changed like product folder and whenever that id chanes in url at that time 'useEffect()' triggered again means entire thing called it again
    },[id])  //and pass [id] as dependency and print the products at last

    console.log(product)   
  return (
    <div>
        <Typography variant='h4' sx={{
            textAlign:'center'
        }}>
        {product.title}
        
</Typography>
        <Box sx={{
            display:'flex',
            gap:"10px"
        }}> 
            <Box>
                <img src={product.images} alt="No image" style={{height:"50%",border:"2px solid black"}}/>
           </Box>
            <Box>
             <Typography>Availability:{product.availabilityStatus}</Typography>
             <Typography>Category:{product.category}</Typography>
             <Typography>Brand:{product.Brand}</Typography>
            </Box>
        </Box>
    </div>
  )
}
