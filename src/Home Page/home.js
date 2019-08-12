/* eslint-disable no-undef */
import React from 'react';
import './home.css';

const home = (props) => {
  return(
    <div>
      <button className="todayIntake" onClick={toggleDisplay}>Today's Intake</button>
                <div id="revan" style={blockDisplay}>
                  <div style={flexStyle}>



                <div className="vitaminContainerDiv">
                  <form onSubmit={this}>
                    <div className="containerDivOne">
                      <div className="labelStyle">
                        <label for="VitaminA" />VitaminA
                      </div>
                      <div className="inputStyle">
                        <input type="text" onChange={props.getInputValueA} value={props.vitaminAInput}/>
                      </div>
                      <div className="progressStyle">
                        <progress name="VitaminA" value={props.vitaminATotal} min="0" max="5000"/>
                      </div>
                      <div className="buttonStyle">
                        <button onClick={props.submitBtnA}>add value</button>
                      </div>
                      <div className="smallStyle">
                        <small>FDA Daily Recommendation 5,000IU**</small>
                      </div>
                    </div>

                    <div className="containerDivTwo">
                      <div className="labelStyle">
                        <label for="VitaminB6" />VitaminB6
                      </div>
                      <div className="inputStyle">
                        <input type="text" onChange={props.getInputValueB6} value={props.vitaminB6Input}/>
                      </div>
                      <div className="progressStyle">
                        <progress name="VitaminA" value={props.vitaminB6Total} min="0" max="10"/>
                      </div>
                      <div className="buttonStyle">
                        <button onClick={props.submitBtnB6}>add value</button>
                      </div>
                      <div className="smallStyle">
                        <small>FDA Daily Recommendation 10mg**</small>
                      </div>
                    </div>

                    <div className="containerDivThree">
                      <div className="labelStyle">
                        <label for="VitaminB12" />VitaminB12
                      </div>
                      <div className="inputStyle">
                        <input type="text" onChange={props.getInputValueB12} value={props.vitaminB12Input}/>
                      </div>
                      <div className="progressStyle">
                        <progress name="VitaminB12" value={props.vitaminB12Total} min="0" max="25"/>
                      </div>
                      <div className="buttonStyle">
                        <button onClick={props.submitBtnB12}>add value</button>
                      </div>
                      <div className="smallStyle">
                        <small>FDA Daily Recommendation 25mcg**</small>
                      </div>
                    </div>

                    <div className="containerDivFour">
                      <div className="labelStyle">
                        <label for="VitaminC" />VitaminC
                      </div>
                      <div className="inputStyle">
                        <input type="text" onChange={props.getInputValueC} value={props.vitaminCInput}/>
                      </div>
                      <div className="progressStyle">
                        <progress name="VitaminC" value={props.vitaminCTotal} min="0" max="2000"/>
                      </div>
                      <div className="buttonStyle">
                        <button onClick={props.submitBtnC}>add value</button>
                      </div>
                      <div className="smallStyle">
                        <small>FDA Daily Recommendation 2,000mg**</small>
                      </div>
                    </div>

                    <div className="containerDivFive">
                      <div className="labelStyle">
                        <label for="VitaminD" />VitaminD
                      </div>
                      <div className="inputStyle">
                        <input type="text" onChange={props.getInputValueD} value={props.vitaminDInput}/>
                      </div>
                      <div className="progressStyle">
                        <progress name="VitaminD" value={props.vitaminDTotal} min="0" max="1000"/>
                      </div>
                      <div className="buttonStyle">
                        <button onClick={props.submitBtnD}>add value</button>
                      </div>
                      <div className="smallStyle">
                        <small>FDA Daily Recommendation 1,000IU**</small>
                      </div>
                    </div>

                    <div className="containerDivSix">
                      <div className="labelStyle">
                        <label for="VitaminE" />VitaminE
                      </div>
                      <div className="inputStyle">
                        <input type="text" onChange={props.getInputValueE} value={props.vitaminEInput}/>
                      </div>
                      <div className="progressStyle">
                        <progress name="VitaminE" value={props.vitaminETotal} min="0" max="22"/>
                      </div>
                      <div className="buttonStyle">
                        <button onClick={props.submitBtnE}>add value</button>
                      </div>
                      <div className="smallStyle">
                        <small>FDA Daily Recommendation 22IU**</small>
                      </div>
                    </div>
                  </form>

                  </div>

                

                  </div>
                </div>
            
                <hr></hr>

              <div id="sidebarId" className="SideBarClass">
                  <button onClick={myFunction} className="dropbtn">Menu</button>
                  <div id="menuDrop" className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Daily-Vitamin</a>
                      <a href="/MyProfile">MyProfile</a>
                      <a href="#">Common-Deficiencies</a>
                      <a href="#">Research</a>
                  </div>
              </div>
            </div>
  )
}


// 6-18-19 styles for data in Today's intake.
const flexStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '15px'
}


// 6-19-19 Javascript for toggling the "Today's Intake".
function toggleDisplay() {
  const m = document.getElementById('revan');
  if (m.style.display === "none") {
      m.style.display = "block"
  }
  else {
      m.style.display = "none"
  }
}

// 6-19-19 const style of the Parent <div> for displaying the content as block.
const blockDisplay = {
  display: 'none'
}


// Vanilla JS for Drop-down menu functionality.
function myFunction() {
    document.getElementById("menuDrop").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

export default home;