import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';


const DisplayGoals = props => {
const [mealType, setMealType] = useState("");
//function getGoal() {
  const getGoal = async () =>{

 const res = await fetch(`/api/goals`,
     {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' }
     }
   )
  const re =  await res.json();
  console.log(re);
};

return(
  <div>
  <h1>Aqui son tus metas</h1>
  <Button  onClick={getGoal}>Click</Button>
  </div>
)


}
export default DisplayGoals;
