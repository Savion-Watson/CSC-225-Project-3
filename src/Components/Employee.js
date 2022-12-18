



const Employee = (props) => {
 
    return ( 

        
        <div className="col-md-6 col-lg-4 p-4">
          <div class="card bg-light">
           <div class="card-body text-center"> 
   
            <img src={props.data.photo} alt="ICON" class="card-img-top" /> 
           
            {/* Default Info */}
             <h3 class="card-title mb-3 p-3 fw-bolder text-center"> {props.data.name}</h3> 
             <p class="card-text fs-4"> <u>Department:</u> {props.data.department}</p>
             <p class="card-text fs-4"> <u>ID#:</u> {props.data.id}</p> 
              
             
             {/* Extra info */} 
             <p class="card-text fs-4"> <u>Start Date:</u> {props.data.startDate}</p>  
             <p class="card-text fs-4"> <u>Role:</u> {props.data.role}</p> 
             <button type="button" onClick={props.resetState} class="btn btn-secondary">Back to List</button>
           </div> 
         </div> 
        </div>    
        
        
                 );


} 

export default Employee;