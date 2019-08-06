import React, {useState, useEffect} from 'react';
import { Container, Jumbotron} from 'react-bootstrap';
const Goal = props => {
   const cardId = props.id;
   console.log("en el goal", props.id)
   const [goals, setGoals] = useState([]);
   const [info, setInfo] = useState([]);
   useEffect(()=>{
       fetchTasks()
   },[info]);
       const fetchTasks = () => {
           fetch('/api/goals')
           .then(res => res.json())
           .then(data => {
               setGoals(data);
               data.find((cardId)=>{
                   info.push(cardId);
                   setInfo(info)
                   return cardId
               })
               return info
           });
       }
   if(info !== []){
       console.log(info[0])
       return(
           <Container>
           <Jumbotron>
               <h1>Hello, world!</h1>
               {/* <p>{info.motive}</p> */}
           </Jumbotron>
       </Container>
   )
   }
}
export default Goal;