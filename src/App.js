import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import './SideBarNav.CSS';
import MyProfile from './Menu Pages/MyProfile';
// import Research from './Menu Pages/Research';
// import Common_Deficiencies from './Menu Pages/Common_Deficiencies';
import { BrowserRouter as RouterTag, Route } from 'react-router-dom';
import Home from './Home Page/home';

class App extends Component {
  state = {
    vitaminATotal : 0,
    vitaminB6Total : 0,
    vitaminB12Total : 0,
    vitaminCTotal : 0,
    vitaminDTotal : 0,
    vitaminETotal : 0,

    userInputsA:[],
    userInputsB6:[],
    userInputsB12:[],
    userInputsC:[],
    userInputsD:[],
    userInputsE:[],

    vitaminAInput:"",
    vitaminB6Input:"",
    vitaminB12Input:"",
    vitaminCInput:"",
    vitaminDInput:"",
    vitaminEInput:""
}


  getInputValueA = (event) => {
    const inputTotalA = event.target.value;
    this.setState({ vitaminAInput: inputTotalA })
  }

  getInputValueB6 = (event) => {
    const inputTotalB6 = event.target.value;
    this.setState({ vitaminB6Input: inputTotalB6 })
  }

  getInputValueB12 = (event) => {
    const inputTotalB12 = event.target.value;
    this.setState({ vitaminB12Input: inputTotalB12 })
  }
    
  getInputValueC = (event) => {
    const inputTotalC = event.target.value;
    this.setState({ vitaminCInput: inputTotalC })
  }

  getInputValueD = (event) => {
    const inputTotalD = event.target.value
    this.setState({ vitaminDInput: inputTotalD })
  }

  getInputValueE = (event) => {
    const inputTotalE = event.target.value
    this.setState({ vitaminEInput: inputTotalE })
  }

  submitBtnA = (e) => {
    e.preventDefault();
    if (this.state.vitaminAInput.length === 0) {
      alert("Please enter an amount.")
    }
    if (!Number.isInteger(parseInt(this.state.vitaminAInput))) {
      alert("Please enter a number.")
    }
    var newArray = this.state.userInputsA;
    var varTotal = 0;

    newArray.push(parseInt(this.state.vitaminAInput));
    this.setState({
      vitaminAInput: "",
      userInputsA: newArray
    });

    for (let i = 0; i < newArray.length; i++) {
      varTotal += parseInt(newArray[i]);
    }

    this.setState({ vitaminATotal: varTotal })
  }


  submitBtnB6 = (e) => {
    e.preventDefault();
    if (this.state.vitaminB6Input.length === 0) {
      alert("Please enter an amount.")
    }
    if (!Number.isInteger(parseInt(this.state.vitaminB6Input))) {
      alert("Please enter a number.")
    }
    var newArray = this.state.userInputsB6;
    var varTotal = 0;

    newArray.push(parseInt(this.state.vitaminB6Input));
    this.setState({
      vitaminB6Input: "",
      userInputsB6: newArray
    });

    for (let i = 0; i < newArray.length; i++) {
      varTotal += parseInt(newArray[i]);
    }

    this.setState({ vitaminB6Total: varTotal })
  }


  submitBtnB12 = (e) => {
    e.preventDefault();
    if (this.state.vitaminB12Input.length === 0) {
      alert("Please enter an amount.")
    }
    if (!Number.isInteger(parseInt(this.state.vitaminB12Input))) {
      alert("Please enter a number.")
    }
    var newArray = this.state.userInputsB12;
    var varTotal = 0;

    newArray.push(parseInt(this.state.vitaminB12Input));
    this.setState({
      vitaminB12Input: "",
      userInputsB12: newArray
    });

    for (let i = 0; i < newArray.length; i++) {
      varTotal += parseInt(newArray[i]);
    }

    this.setState({ vitaminB12Total: varTotal })
  }


  submitBtnC = (e) => {
    e.preventDefault();
    if (this.state.vitaminCInput.length === 0) {
      alert("Please enter an amount.")
    }
    if (!Number.isInteger(parseInt(this.state.vitaminCInput))) {
      alert("Please enter a number.")
    }
    var newArray = this.state.userInputsC;
    var varTotal = 0;

    newArray.push(parseInt(this.state.vitaminCInput));
    this.setState({
      vitaminCInput: "",
      userInputsC: newArray
    });

    for (let i = 0; i < newArray.length; i++) {
      varTotal += parseInt(newArray[i]);
    }

    this.setState({ vitaminCTotal: varTotal })
  }

  submitBtnD = (e) => { 
    e.preventDefault()
    if (this.state.vitaminDInput.length === 0) {
      alert("Please enter an amount.")
    }
    if (!Number.isInteger(parseInt(this.state.vitaminDInput))) {
      alert("Please enter a number.")
    }
    var newArray = this.state.userInputsD;
    var varTotal = 0;

    newArray.push(parseInt(this.state.vitaminDInput));
    this.setState({
      vitaminDInput: "",
      userInputsD: newArray
    });

    for (let i = 0; i < newArray.length; i++) {
      varTotal += parseInt(newArray[i]);
    }

    this.setState({ vitaminDTotal: varTotal })
  }

  submitBtnE = (e) => { 
    e.preventDefault()
    if (this.state.vitaminEInput.length === 0) {
      alert("Please enter an amount.")
    }
    if (!Number.isInteger(parseInt(this.state.vitaminEInput))) {
      alert("Please enter a number.")
    }
    var newArray = this.state.userInputsE;
    var varTotal = 0;

    newArray.push(parseInt(this.state.vitaminEInput));
    this.setState({
      vitaminEInput: "",
      userInputsE: newArray
    });

    for (let i = 0; i < newArray.length; i++) {
      varTotal += parseInt(newArray[i]);
    }

    this.setState({ vitaminETotal: varTotal })
  }

  render(){
  return (
    <RouterTag>
      <div className="App">
      <header className="App-header">
        <Route exact path='/' render={props => (
            <React.Fragment>
              
              <Home
                vitaminATotal = {this.state.vitaminATotal}
                vitaminB6Total = {this.state.vitaminB6Total}
                vitaminB12Total = {this.state.vitaminB12Total}
                vitaminCTotal = {this.state.vitaminCTotal}
                vitaminDTotal = {this.state.vitaminDTotal}
                vitaminETotal = {this.state.vitaminETotal}

                userInputsA = {this.state.userInputsA}
                userInputsB6 = {this.state.userInputsB6}
                userInputsB12 = {this.state.userInputsB12}
                userInputsC = {this.state.userInputsC}
                userInputsD = {this.state.userInputsD}
                userInputsE = {this.state.userInputsE}

                vitaminAInput = {this.state.vitaminAInput}
                vitaminB6Input = {this.state.vitaminB6Input}
                vitaminB12Input = {this.state.vitaminB12Input}
                vitaminCInput = {this.state.vitaminCInput}
                vitaminDInput = {this.state.vitaminDInput}
                vitaminEInput = {this.state.vitaminEInput}

                submitBtnA = {this.submitBtnA}
                submitBtnB6 = {this.submitBtnB6}
                submitBtnB12 = {this.submitBtnB12}
                submitBtnC = {this.submitBtnC}
                submitBtnD = {this.submitBtnD}
                submitBtnE = {this.submitBtnE}

                getInputValueA = {this.getInputValueA}
                getInputValueB6 = {this.getInputValueB6}
                getInputValueB12 = {this.getInputValueB12}
                getInputValueC = {this.getInputValueC}
                getInputValueD = {this.getInputValueD}
                getInputValueE = {this.getInputValueE}
              />
            </React.Fragment>
          )} />
          <Route path="/MyProfile" component={MyProfile} />
        </header>
      </div>
    </RouterTag>

  );
 }
}



/* 6-24-19 
  Idea is to save the value of the input into the <Progress> tag's value
  1. Create constructor.
  2. Create form
  3. Create setState for the value.
  4. Create function that changes <progress> tag's value to the target.value.
*/

/*
<progress value={this.dataSaver}></progress>

<input
    id="inputter"
    type="text"
    name="nutrientMG"
    value={this.state.nutrientMG}
    onChange={this.handleChange}
    ref={(input) => this.input = input}
  />
  <button onClick={this.dataSaver} type="submit">Add</button>

valueAddingFunc = e => {
  e.preventDefault();
  var x = document.getElementById("myProgress");
  x.value = document.getElementById("value").value;
}
*/


// form
/*
<form>
  <input style={inputStyle} type="text" id="value" max="100" />
  <br></br>
  <label for="VitaminA" />VitaminA
  <progress style={progressStyle} name="VitaminA" id="myProgress" value="0" max="2000" />
  <button onClick={this.myFunc}>AddValue</button>
</form>
*/


// JUCODE ====================================================
/*
class App extends Component {
  state = {
    vitaminsList: [],
    intakeMG: [],
    todayVitamin:[]
  }

  calcIntake = (event) => {
    event.preventDefault()
    const intakeValue = event.target.value
    this.setState({
      intakeMG : intakeValue
    })
    console.log(this.state.intakeMG)
  }

<Home 
  change = {this.calcIntake}
  test = {this.state.intakeMG}
/>

*/

export default App;