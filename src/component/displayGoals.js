import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function getGoal() {

 fetch('/api/goals',
     {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({title, motive, date})
     }
   ).then((response) => {

   return response.json();

 })

};
