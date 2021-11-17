import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Services from "./Services";


const ServiceDetails=()=>{
    const {id} = useParams();
    const [service,setService] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{
             const x = data.filter(item=>
                item.id==id)
            setService(x);
            console.log(x);
        })
    },[])
    
    return (
         <div>
             {service.map((service)=>
            <div key={service.id}>
                   <h2 className="my-3">{service.name}</h2>
                   <img src={service.images} width="80%" height="500px" alt={service.name} />
                   <div className="my-3">{service.details}</div>
             </div>)}
         </div>
    )
}

export default ServiceDetails;