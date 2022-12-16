
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
  
  // Listener for loading
  useEffect(() => { console.log(`loading changed to ${loading}`); }, [loading]); 
 

  useEffect(() => { getEmployeeData() }, []); 
  
  
  //Makes an API call (w/ Axios) and puts the data in employeeData. loading is toggled when appropriate
  const getEmployeeData = () => {
    setLoading(true);
    axios.get('https://api.matgargano.com/employees/').then(response => {setEmployeeData(response.data); setLoading(false)})
  }
  
  return ( 
    <div className='main'>
        

        <div className="container">  
          <section className = "p-5  text-sm-start" id="Features"> 
            {/* <div className="align-items-center text-center p-4">
              <Button clickHandler={toggleLoading} class="align-items-center"> <h1 class="display-2">  Click Here to Fetch </h1>  </Button>
            </div> */}
              

            {/* Loading Checks  */}   

            {/* If loading is true, show loading component */}
            {!!loading &&  <Loading></Loading>} 
            
            {/* If loading is true, show other components */}
            {!loading && 
            <div> 
              {/* Listing of Employees (just names and maybe roles) */} 
              <EmployeeList data={employeeData}></EmployeeList>

              {/* Individual Employees (with all info) */} 
              <Employee data={employeeData}></Employee>


              {/* Error */} 
              <Error></Error>
            </div>
            
            }


             

          </section>
        </div>
        
        
    </div>
    
    
    
    
  
  
  );
}

export default App;
