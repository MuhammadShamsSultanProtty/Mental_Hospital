import { useEffect, useState } from "react";


const Hospitals =()=>{
    const [hospitals, setHospitals] = useState([]);
    useEffect(()=>{
        fetch('/hospital.json')
        .then(res=>res.json())
        .then(data=>setHospitals(data))
    },[])
    return (
       <div>
           <h3 className="my-3">Our Hospitals</h3>
           <div className="mb-4 mx-4">
               Our mission is very simple. We want to provide the common medical services to all kinds of people specially the poor people. All our services are accurate but cheap. This is the list of hospital included or systems. 
           </div>
           <div className="my-4">
             {hospitals.map((hospital)=>
             <button key={hospital.id} className="btn btn-dark text-white mx-2 my-1">{hospital.name}</button>
             )}
           </div>
       </div>
   )
}
export default Hospitals;