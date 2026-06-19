import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './components/enquiry/Form'
import Table from './components/enquiry/Table'
import axios from 'axios'

function App() {

  let [enquiryData,setEnquiryData]=useState([])

  let [singleData,setsingeData]=useState(null)



const apiUrl = import.meta.env.VITE_APIBASEURL;

// console.log(apiUrl);

//ttp://localhost:8000/



  let getEnquiry=()=>{
    axios.get(`${apiUrl}enquiry/view`)
    .then((res)=>res.data)
    .then((finalRes)=>{
     setEnquiryData(finalRes.data);
      
    })
  }

  let deleteEnquiry=(delid)=>{


       if (confirm("Are you sure want delete?")) {
      axios
        .delete(`${apiUrl}enquiry/delete/${delid}`)
        .then((res) => res.data)
        .then((finalRes) => {
             getEnquiry()
            alert(finalRes.message);

        });
    }
  }


let editData=(id)=>{
 
   axios.get(`${apiUrl}enquiry/view/${id}`)
   .then((res)=>res.data)
   .then((finalRes)=>{
    setsingeData(finalRes.data);
    
   })
}


  useEffect(()=>{
      getEnquiry()
  },[])

  return (
    <>
      <section className='grid grid-cols-[25%_auto] gap-5 p-5'>
          <Form setsingeData={setsingeData} singleData={singleData} getEnquiry={getEnquiry}/>
          <Table editData={editData} enquiries={enquiryData} deleteEnquiry={deleteEnquiry}  />
      </section>

    
    </>
  )
}

export default App
