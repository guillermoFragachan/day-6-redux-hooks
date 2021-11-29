import React, { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/Col"


function  CompanyJobs  (props) {


const [jobs, setJobs] = useState([])

const fetchJobs = async (q)  => { 
    const url = `https://strive-jobs-api.herokuapp.com/jobs?company=${q}&limit=10`
    const response = await fetch(url, {
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        const data = await response.json()
       

        setJobs(data.data)
        console.log(jobs)


    }

}

useEffect(() => {
fetchJobs(props.query)
 },[props.query])


 return (
     <>

     { jobs.length > 0 &&
         jobs.map((e)=>( 
         
         <Col 
         onClick={()=>{
           props.getSelectedJob({e})
            
        }} 
         
         >
                    {e.title}
                    
             </Col>
         ))
     }
     </>
 )

}

export default CompanyJobs