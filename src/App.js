
import './App.css'; 
import Button from "./Components/Button";
import Loading from "./Components/Loading"; 
import Employee from "./Components/Employee"; 
import EmployeeList from "./Components/EmployeeList"; 
import Error from "./Components/Error"; 
import {useEffect,  useState } from 'react';
import axios from 'axios';

function App() { 

  //Api link: "https://api.matgargano.com/employees/"
  //Api ids range from 9912 to 9920
  function clickHandler(){
    alert('The button has been clicked.');
  } 


  // Variables:
  const [loading, setLoading] = useState(true);  
  const [employeeData, setEmployeeData] = useState([]);  
  const [selectedEmployee, setSelectedEmployee] = useState(null);  // Becomes the selected employee ID when "See More" is clicked 
  const [error, setError] = useState(null);
  // Listener for loading
  useEffect(() => { console.log(`loading changed to ${loading}`); }, [loading]); 
 

  useEffect(() => { getEmployeeData() }, []); 
  
  //Sets specific data to null, so we return to the initial screen
  const resetState = () => {
    setEmployeeData([]); 
    getEmployeeData(); 
    setSelectedEmployee(null); 
    setLoading(true);
  }
  
  //Makes an API call (w/ Axios) and puts the data in employeeData. loading is toggled when appropriate
  const getEmployeeData = (id = null) => {
    setLoading(true);
    

    
    //Only the ID from the API call. Is '' by default so the link can work
    let actualID = ''; 

    //Parses the needed value for actualID
    if(!!id && parseInt(id,10) > 0) {
      actualID = parseInt(id,10);
    }

  

    //Goes the individual employee link when id has a (corresponding) value
    axios.get(`https://api.matgargano.com/employees/${actualID}`).then(response => {setEmployeeData(response.data); 
    setLoading(false);}) 

    .catch( (error) => {
      setError(true);
    } )
  }
  
  useEffect( () => {

    //When an employee is selected, pass in relevant data
    if(!!selectedEmployee) {
      getEmployeeData(selectedEmployee);
    }
    
    }, [selectedEmployee]   )


  return ( 
    <div className='main'>
        

          
          
           
            {/* Error Check */}  
            {!!error &&  <Error></Error>} 


            {/* If there's no error, render everything else: */}
            {!error && <>
            
            {/* Loading Checks  */}   

            {/* If loading is true, show loading component */}
            {!!loading &&  <Loading></Loading>} 
            
            {/* If loading is true, show other components */}
            {!loading && !selectedEmployee &&
            
            <section> 
              {/* Listing of Employees (just names and maybe roles) */} 
              <h2 class="text-center p-3 fw-bold"> Company Employees </h2>
              
              <div class="container text-center">
                <div class="row justify-content-center">  
                  <EmployeeList 
                  data={employeeData} 
                  setSelectedEmployee={setSelectedEmployee}></EmployeeList>
                </div>
              </div>
            </section>
            /*End of Employee List*/ }
              

              {/* Individual Employees (with all info) */}  
              {!!selectedEmployee && !loading &&
              <section>
                <h2 class="text-center p-3 fw-bold"> Employee Info </h2>
              
                <div class="container text-center m-4">
                  <div class="row justify-content-center">  
                    <Employee  
                    data={employeeData} resetState={resetState}></Employee>
                  </div>
                </div>
              </section>
               /*End of Individual Employees*/ } 
            
            </>
            
            
            
            }

            
              


              
              
            
            
            


             

        
        
        
        
    </div>
    
    
    
    
  
  
  );
}

export default App;
