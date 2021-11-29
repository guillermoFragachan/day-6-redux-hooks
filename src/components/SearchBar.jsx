import React from "react";
import { useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl"


function  SearchBar  ({getQuery}) {
    
   
    useEffect(() => {
      
     },[])
    
    
     return (
        <>
        <InputGroup onChange={(e)=>{
            getQuery(e.target.value)
            
        }} className="mb-3">
        
          <FormControl  aria-describedby="basic-addon1" />
        </InputGroup>
      
      
      </>
     )
    
    }
    
    export default SearchBar