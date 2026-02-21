import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import {Box,TextField,Typography} from '@mui/material'


export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [search, setSearch ] = React.useState([]);
    //useEffect(()=>{
    //},[dependency array--it pass variables,functions])
//useEffect will fetch the data
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
       .then(res => res.json())
     .then(res => setProducts(res.products))
    },[])

   console.log(products)
   const filteredProducts=products.filter((products)=>
   products.title.toLowerCase().includes())
  return (
    <div>
    <Typography variant='h5' sx={{textAlign:'center'}}>
    Products Page
    </Typography>
    <TextField
       type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        fullWidth
        placeholder='Search Item'/>
        
    <Box sx={{
      justfyContent:'space-around',
      flex:'wrap',
      marginTop:'20px'
    }}>
   
            <Card allProductsData={filteredProducts}/>
 
    </Box>
    </div>
  )
}
