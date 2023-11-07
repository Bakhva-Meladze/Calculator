import logo from './logo.svg';
import React from "react";
import './App.css';

const  nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const ops =['/','*', '-', '+', '='];
const ids = {
  9: 'nine',
  8: 'eight',
  7: 'seven',
  6: 'six',
  5: 'five',
  4: 'four',
  3: 'three',
  2: 'two',
  1: 'one',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract',
  '+': 'add',
  '=': 'equals'
}
// eslint-disable-next-line no-undef
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sum: '0',

    }
  }
  handleClick =(e) =>{
    let {innerText} = e.target;

    switch (innerText){
      case "clear": {
        this.setState ({
          sum: '0'
        });
        break;
      }
      case '=': {
        var datas = eval(this.state.sum);
        this.setState ({
          sum: datas
        });
        break;
      }
      case  '.': {
        var checkSymbolIndex =
            Math.max(this.state.sum.lastIndexOf("+"),
                this.state.sum.lastIndexOf("-"),
                this.state.sum.lastIndexOf("/"),
                this.state.sum.lastIndexOf("*")
            );


        var lastNumber = this.state.sum.slice(checkSymbolIndex + 1);
        if(!lastNumber.includes('.')) {
          this.setState({
            sum: `${this.state.sum}${innerText}`
          })
        }

        break;
      }
      default: {
        if(this.state.sum == 0){

          if(innerText != 0){
            this.setState({
              sum: innerText
            });
          }
        }else{
          var operations = ['+', '-', '*', '/'];
          if (operations.includes(innerText)){

            var lastSymbol = this.state.sum.toString().slice(-1);

            if(operations.includes(lastSymbol)){
              if(innerText === "-"){
                this.setState ({
                  sum: `${this.state.sum.toString()}${innerText}`
                });
              }
              else{
                var lastSecondSymbol = this.state.sum.toString().slice(-2, -1);

                if(operations.includes(lastSecondSymbol)){
                  this.setState ({
                    sum: `${this.state.sum.toString().slice(0,-2)}${innerText}`
                  });
                } else {

                  this.setState ({
                    sum: `${this.state.sum.toString().slice(0,-1)}${innerText}`

                  }); }
              }
            }else {
              this.setState ({
                sum: `${this.state.sum}${innerText}`
              });
            }

          } else {
            this.setState ({
              sum: `${this.state.sum}${innerText}`
            });
          }
        }
      }

    }


  }
  render() {


    return (
        <div className="main">
          <div  className="calculator">
            <div id ="display">
              <h2>{this.state.sum}</h2></div>
            <div className="numbers-container">
              <button className="button"
                      id="clear"
                      onClick={this.handleClick}>clear</button>

              {nums.map(num =>(
                  <button className="button"
                          key={num}
                          onClick={this.handleClick}
                          id={ids[num]}>{num}</button>
              ))}
              <button className="button"
                      id="decimal"
                      onClick={this.handleClick}
              >.</button>
            </div>



            <div className="operations-container">
              {ops.map(op => (
                  <button className="buttons"
                          key={op}
                          onClick={this.handleClick }
                          id= {ids[op]}>{op}</button>
              ))}
            </div>
          </div>
        </div>
    )
  }
}

export default App;
