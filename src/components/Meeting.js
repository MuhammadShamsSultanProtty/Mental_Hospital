import useAuth from "../hooks/useAuth";


const Meeting =()=>{
    const { user } = useAuth();

    return (
       <div>
           <h2 className="mt-3">Hello Mr. {user}</h2>
           <h5 className="my-5">Please tell us your problems. Our doctors will check your information and fixed a time for visit. We will inform you that via email. Thank you.</h5>
           <div>
             <div>
                 <div className="col-sm-10 mx-5 text-center">
                     <textarea className="form-control"  id="staticEmail" placeholder="Decribe Your Problem..."></textarea>
                 </div>
                 <div><button className="btn btn-success my-2"> Submit</button></div>
              </div>
           </div>
       </div>
   )
}
export default Meeting;