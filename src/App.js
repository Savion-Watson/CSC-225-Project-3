
import './App.css'; 
import Button from "./Components/Button";

function App() { 

  //Api link: "https://api.matgargano.com/employees/"
  //Api ids range from 9912 to 9920
  function clickHandler(){
    alert('The button has been clicked.');
  } 


  function employeeCard() {
    return (
      <div class="col-md-6 col-lg-3"> 
        <div class="card bg-light">
          <div class="card-body text-center"> 
            
            <img src="images/iconmonstr-user-20.svg" alt = "A user icon"/> 
            
            <h3 class="card-title mb-3 p-3"> Name </h3> 
            
            <p class="card-text"> <strong>"Start Date"</strong></p> 
            <p class="card-text"> <strong>"Role"</strong></p> 
            <p class="card-text"> <strong>"Department"</strong></p>
          </div> 
        </div> 
        </div> 
    );
  }
  
  
  
  return ( 
    <div className='main'>
      <section class = "p-5  text-sm-start" id="Features">
      <div className='container'>  
  
        <Button clickHandler={clickHandler}> Click Me </Button>  
        
        <div>
          {employeeCard()}
        </div> 
        </div>
      </section>
        
      </div>
    
    
    
    
  
  
  );
}

export default App;
