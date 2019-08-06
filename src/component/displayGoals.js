import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class DisplayGoals extends Component{

constructor() {
  super();
  this.state = {
    title: '',
    motive: '',
    date: '',
    _id: '',
    tasks: []
  };
  this.handleChange = this.handleChange.bind(this);
  this.addTask = this.addTask.bind(this);
  this.deleteTask = this.deleteTask.bind(this);
  this.editTask = this.editTask.bind(this);
}


handleChange(e) {
  const { name, value } = e.target;
  this.setState({
    [name]: value
  });
}

addTask(e) {
  e.preventDefault();
  if(this.state._id) {
    fetch(`/api/goals/${this.state._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.title,
        motive: this.state.motive
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {

        this.setState({_id: '', title: '', motive: ''});
        this.fetchTasks();
      });
  } else {
    fetch('/api/goals', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({title: '', motive: ''});
        this.fetchTasks();
      })
      .catch(err => console.error(err));
  }

}

deleteTask(id) {
    fetch(`/api/goals/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.fetchTasks();
      });
  }

editTask(id) {
  fetch(`/api/goals/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        title: data.title,
        motive: data.motive,
        _id: data._id
      });
    });
}

componentDidMount() {
  this.fetchTasks();
}

fetchTasks() {
  fetch('/api/goals')
    .then(res => res.json())
    .then(data => {
      this.setState({tasks: data});
      console.log(this.state.tasks);
    });
}

render() {
  return (
    <div>
      <div >
        <div>
          <div >
            <div >
              <div >
                <form onSubmit={this.addTask}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Titulo  de la Meta" autoFocus/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea name="motive" onChange={this.handleChange} value={this.state.motive} cols="30" rows="10" placeholder="Motivo de la Meta"></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn light-blue darken-4">
                    Enviar info
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col s7">
            <table>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Motivo</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.tasks.map(task => {
                    return (
                      <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.motive}</td>
                        <td>
                          <button onClick={() => this.deleteTask(task._id)}>
                            <i>delete</i>
                          </button>
                          <button onClick={() => this.editTask(task._id)}>
                            <i>edit</i>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
}

// const DisplayGoals = props => {
// const [mealType, setMealType] = useState("");
// //function getGoal() {
//   const getGoal = async () =>{
//
//  const res = await fetch(`/api/goals`,
//      {
//        method: 'GET',
//        headers: { 'Content-Type': 'application/json' }
//      }
//    )
//   const re =  await res.json();
//   console.log(re);
// };
//
// return(
//   <div>
//   <h1>Aqui son tus metas</h1>
//   <Button  onClick={getGoal}>Click</Button>
//   </div>
// )
//
//
// }
export default DisplayGoals;
