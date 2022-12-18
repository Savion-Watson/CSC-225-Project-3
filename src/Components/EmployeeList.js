// Simplified version of Employee card 

// import icon from 'src/usericon.svg';
const EmployeeList = (props) => {
  
  
  const updateEmployee = (employeeID) => {
      props.setSelectedEmployee(employeeID);
  }
  
  return <div class="col-md-4 col-lg-6 p-4">{
    // For every employee called from the prop data...
    props.data.map(employee => {
      return ( 

        
      <>
        <div class="card bg-light mb-4">
         <div class="card-body text-center"> 
 
          {/* Default Info */}
           <h3 class="card-title mb-3 p-3 fw-bold"> {employee.name}</h3> 
           <p class="card-text fs-4"> <u>Department:</u> {employee.department}</p> 
           
           {/* Extra info */} 
           <button type="button" onClick={() => {updateEmployee(employee.id)} } class="btn btn-secondary">See More</button>
         </div> 
       </div> 
      </>    
      
      
               );
    })
    
  }</div>
} 

export default EmployeeList;