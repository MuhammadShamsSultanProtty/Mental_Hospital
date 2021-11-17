import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const DoctorsList =()=>{  
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('/doctorslist.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
       <div>
           <h3 className="m-4"> Our doctors List and their duty schedule</h3>
           <div className="d-flex  flex-wrap justify-content-center">
             {doctors.map((doctor)=>
             <div key={doctor.id} className="border rounded shadow-lg p-2 m-4">
                 <img src={doctor.image} alt={doctor.id} width="350px" height="250px"/>
                 <div className="mt-3">Name : {doctor.name}</div>
                 <div>speciality : {doctor.speciality}</div>
                 <div>Duty Time : {doctor.duty_time}</div>
             </div>
             )}
           </div> 
       </div>
   )
}
export default DoctorsList;