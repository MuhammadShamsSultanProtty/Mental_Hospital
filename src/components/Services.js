import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h3 className="text-center m-3">Our Services</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {services.map(service =>
                    <div key={service.id} className="border bg-dark text-white rounded-2 shadow-lg p-2 m-4">
                        <img src={service.images} alt={service.id} width="350px" height="250px" />
                        <div className="my-2">Service Name : {service.name}</div>
                        <div className="my-2">Short Description : {service.details.slice(0, 15)}...</div>
                        <Link to={`/service/${service.id}`}><button className="btn btn-warning">View Details</button></Link>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Services;