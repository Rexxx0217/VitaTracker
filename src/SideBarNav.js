import React, { Component } from 'react'
import './App.css';

export default class SideBarNav extends Component {
constructor() {
    super();

    this.state = {
        showMenuFunc: false,
    }

    this.showMenuFunc = this.showMenuFunc.bind(this);
    this.closeMenuFunc = this.closeMenuFunc.bind(this);
}

showMenuFunc(event) {
    event.preventDefault();

    this.setState({showMenuFunc: true,}, () => {
        document.addEventListener('click', this.closeMenuFunc);
    });
}

closeMenuFunc(event) {
    if (!this.dropdownMenu.contains(event.target)) {

        this.setState({ showMenuFunc: false }, () => {
            document.removeEventListener('click', this.closeMenuFunc);
        });
    }
}

    render() {
        return (
        <div>
            <button style={menuStyle} onClick={this.showMenuFunc}>
                ES6 Menu
            </button>
        

        {
            this.state.showMenuFunc
            ? (
                <div className="menu" ref={(element) => {
                    this.dropdownMenu = element;}}>
                    <button><a href="/MyProfile"></a>Daily-Vitamin</button>
                    <button>My-Progress</button>
                    <button>Common-Deficiencies</button>
                </div>
            )
            : (
                null
            )
        }
        </div>

        );
    }
} 

const menuStyle = {
    backgroundColor: 'blue',
    borderColor: 'blue'
}


// Button CSS
const DropdownButton = {
    backgroundColor: '#3498DB',
    color: 'white',
    padding: '16px',
    fontSize: '26px',
    border: 'dashed',
    cursor: 'pointer',
    hover: {
        backgroundColor: 'black'
    }
}