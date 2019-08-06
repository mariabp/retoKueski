import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Circle } from 'rc-progress';

class Example extends Component {

  constructor() {
      super();
      this.state = {
        percent: 0,
        color: '#A0D85B',
      };
      this.increase = this.increase.bind(this);

    }

    componentDidMount() {
      this.increase();
    }

    increase() {
      const colorMap = ['#A0D85B', '#F72525'];
      const { percent } = this.state;
      const newPercent = percent + 25;

      if (newPercent == 125) {
        return;
      }
      this.setState({ percent: newPercent,
        color: colorMap[parseInt (Math.random() * 1, 10)],
      });

    }


    render() {
      const { percent, color } = this.state;
      return (
        <div style={{ margin: 10, width: 200 }}>
        <h3>Porcentaje de la Meta {percent}%</h3>
          <Circle strokeWidth="6" percent={percent}  strokeColor={color}/>

          <button type="button" onClick={this.increase}>
                  Tarea Cumplida
                </button>

        </div>
      );
    }

}
export default Example;
