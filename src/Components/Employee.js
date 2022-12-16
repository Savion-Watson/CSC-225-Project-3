



const Employee = (props) => {
    // return (<div class="col-md-6 col-lg-3"> 
    // <div class="card bg-light">
    //   <div class="card-body text-center"> 
        
    //     <div> 
    //       <img src="" alt="ICON" /> 
    //     </div>
        
        
    //     <h3 class="card-title mb-3 p-3"> Name </h3> 
        
    //     {
    //       props.data.map(employee => {
    //         return <button type="button" class="btn btn-secondary">{employee.name}</button>;
    //     })
        
    //     }
    //     <p class="card-text"> <strong></strong></p> 
    //     <p class="card-text"> <strong>"Start Date"</strong></p>  
    //     <p class="card-text"> <strong>"Department"</strong></p>
    //   </div> 
    // </div> 
    // </div> ); 


return <div>{
  // For every employee called from the prop data...
  props.data.map(employee => {
    return (
              <div class="col-md-6 col-lg-3"> 
    <div class="card bg-light">
       <div class="card-body text-center"> 
        
         <div class=""> 
          <img src="" alt="ICON" /> 
         </div>
        
        
        {/* Default Info */}
         <h3 class="card-title mb-3 p-3"> {employee.name}</h3> 
         <p class="card-text"> <strong> {employee.id}</strong></p> 
         <p class="card-text"> <strong>{employee.department}</strong></p> 
         
         {/* Extra info */} 
         <button type="button" class="btn btn-secondary">See More</button>
         <p class="card-text"> <strong>"Start Date"</strong></p>  
         <p class="card-text"> <strong>"Role"</strong></p>
       </div> 
     </div> 
     </div>
             );
  })
  
}</div>


} 

export default Employee;