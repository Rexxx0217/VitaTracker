import React from 'react'

// Progress bars must go in App.js to render... err kinda ?

export default function ProgressBar() {
    return (
        // progress bars 1 & 2      -6-7-19- [2 is the more relevant one.]
        <div id="Progress_Status"> 
            <div id="myprogressBar"></div> 
 

            <div className="Vitamin-C">
                <small style={VitaTextC}>Vitamin C </small>
                <progress id="progressBarC" style={barStyleC} min="0" max="100" value="0"></progress>
                <button onClick={addOneC}>Add 1</button>
            </div>


            <div className="Vitamin-D">
                <small style={VitaTextD}>Vitamin D </small>
                <progress id="progressBarD" style={barStyleD} min="0" max="100" value="0"></progress>
                <button onClick={addOneD}>Add 1</button>
            </div>

            <div className="Vitamin-E">
                <small style={VitaTextE}>Vitamin E </small>
                <progress id="progressBarE" style={barStyleE} min="0" max="100" value="0"></progress>
                <button onClick={addOneE}>Add 1</button>
            </div>


            <div className="Selenium">
                <small style={SeleniumText}>Selenium </small>
                <progress id="BarSelenium" style={barStyleSelenium} min="0" max="100" value="0"></progress>
                <button onClick={addOneSelenium}>Add 1</button>
            </div>

            <div className="Iron">
                <small style={IronText}>Iron </small>
                <progress id="BarIron" style={barStyleIron} min="0" max="100" value="0"></progress>
                <button onClick={addOneIron}>Add 1</button>
            </div>


        </div>

    )
}


// CSS for progress bar 1
const Progress_Status = {
    width: '50%',
    backgroundColor: '#ddd'
}

const myprogressBar = {
    width: '1%',
    height: '35px',
    backgroundColor: '#4CAF50',
    textAlign: 'center',
    lineHeight: '32px',
    color: 'black'
}

// CSS for Progress bar 2
const barStyleC = {
    color: 'yellow',
    backgroundColor: 'white',
    borderWidth: '',
    borderColor: '',
    height: '19px',
    borderRadius: ''
}

const barStyleD = {
    backgroundColor: 'white',
    borderWidth: '',
    borderColor: '',
    height: '19px',
    borderRadius: ''
}

const barStyleE = {
    backgroundColor: 'white',
    borderWidth: '',
    borderColor: '',
    height: '19px',
    borderRadius: ''
}

const barStyleSelenium = {
    backgroundColor: 'grey',
    borderWidth: '',
    borderColor: '',
    height: '19px',
    borderRadius: ''
}

const barStyleIron = {
    backgroundColor: 'grey',
    borderWidth: '',
    borderColor: '',
    height: '19px',
    borderRadius: ''
}

// CSS for <small> tag.
const VitaTextC = {
    marginTop: '8%',
    color: '#e2e83a'
}

const VitaTextD = {
    marginTop: '8%',
    color: '#3caee8'
}

const VitaTextE = {
    marginTop: '8%',
    color: '#2cdd46'
}

const SeleniumText = {
    marginTop: '8%',
    color: 'brown'
}

const IronText = {
    marginTop: '8%',
    color: 'brown'
}

// Javascript for progress bar 1
/*
function update() {
    const element = document.getElementById("myprogressBar")
    const width = 1;
    const identity = setInterval(scene, 10);
    function scene() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}
*/

//Javascript for progress bar 2
// how to add event listener in react.
// onChange/click not rendering the "klik()" function.

function addOneC(){
    var m = document.getElementById("progressBarC");
    m.value = m.value + 5;
    }

function addOneD(){
    var m = document.getElementById("progressBarD");
    m.value = m.value + 5;
    }

function addOneE(){
    var m = document.getElementById("progressBarE");
    m.value = m.value + 5;
    }

function addOneSelenium(){
    var m = document.getElementById("BarSelenium");
    m.value = m.value + 5;
    }


function addOneIron(){
    var m = document.getElementById("BarIron");
    m.value = m.value + 5;
    }    
   /*$(function(){
        p.addEventListener('click', alert('dd'))
    });*/