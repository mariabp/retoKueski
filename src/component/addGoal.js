import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';



const AddGoal = props =>{

const [title, setTitle] = useState("");
const [motive, setMotive] = useState("");
const [date, setDate] = useState("");

const handleChange = (event) => {

      if (event.target.name === "title") {
        console.log(event.target.value);
          setTitle(event.target.value);
          return;
      }
      if (event.target.name === "motive") {
          setMotive(event.target.value);
          return;
      }

      if (event.target.name === "date") {
          setDate(event.target.value);
          return;
      }

  };

  function postGoal() {

   fetch('/api/goals',
       {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({title, motive, date})
       }
     ).then((response) => {

     return response.json();

   })

};

return(

  <Form>
    <Form.Group>
      <Form.Label>Titulo</Form.Label>
      <Form.Control  onChange={handleChange} type="title"  name="title" placeholder="Nombre de la meta" />
    </Form.Group>
    <Form.Group >
      <Form.Label>Motivo</Form.Label>
      <Form.Control onChange={handleChange}  type="motive" name="motive" placeholder="Motivo" />
    </Form.Group>

    <Form.Group >
      <Form.Label>Fecha</Form.Label>
      <Form.Control onChange={handleChange} type="date" name="date" placeholder="Fecha" />
    </Form.Group>
    <Button onClick={postGoal} variant="primary" type="submit">
      Enviar meta
    </Button>

  </Form>



)



}

 export default AddGoal;
