import { useEffect, useState } from "react";
const Covid = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/covid.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h3 className="my-10">Covid Info</h3>
            <div className="d-flex flex-wrap justify-content-center ">
                {data.map((covid) =>
                    <div className="border shadow-sm rounded p-5 m-1 bg-warning" key={covid.id}>
                        <h4>{covid.topic}</h4>
                        <div>Total Cured patient: {covid.cure}</div>
                        <div>Total Affected : {covid.affected}</div>
                        <div>Total Vaccinated : {covid.vaccinated}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Covid;