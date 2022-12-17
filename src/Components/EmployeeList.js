// Simplified version of Employee card 

// import icon from 'src/usericon.svg';
const EmployeeList = (props) => {
  
  
  const updateEmployee = (employeeID) => {
      props.setSelectedEmployee(employeeID);
  }
  
  return <div>{
    // For every employee called from the prop data...
    props.data.map(employee => {
      return ( 

        
      <div className="col-md-6 col-lg-3 m-4">
        <div class="card bg-light">
         <div class="card-body text-center"> 
 
          {/* Default Info */}
           <h3 class="card-title mb-3 p-3 fw-bold"> {employee.name}</h3> 
           <p class="card-text fs-4"> <u>Department:</u> {employee.department}</p> 
           
           {/* Extra info */} 
           <button type="button" onClick={() => {updateEmployee(employee.id)} } class="btn btn-secondary">See More</button>
         </div> 
       </div> 
      </div>    
      
      
               );
    })
    
  }</div>
} 

export default EmployeeList;