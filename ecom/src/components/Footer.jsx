import { Box, Typography } from '@mui/material'
import React from 'react'


export default function Footer() {
  return (
    <div>
        <Box sx={{border:'2px solid blue',
          backgroundColor:'lightblue',
          padding:'10px', borderRadius:'5px', marginTop:'20px'
        }}>
            <Typography sx={{textAlign:'center', color:'white',
              fontWeight:'bold'}}>
                Designed By You @2026
            </Typography>
        </Box>
    </div>
  )
}
