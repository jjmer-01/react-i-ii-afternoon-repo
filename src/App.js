import React, {Component} from 'react'
import './App.css'
import data from './data'

import ProfileBox from './Components/ProfileBox'

class App extends Component {
  constructor() {
    super()

    this.state = {
      employees: data,
      index: 0
    }
  }

  handleNext() {
    if(this.state.index <= this.state.employees.length - 1) {
      this.setState({index: this.state.index + 1})
    } else {this.setState({index: 0})}
  }

  handlePrevious() {
    if(this.state.index !== 0) {
      this.setState({index: this.state.index - 1})
    } else {this.setState({index: this.state.employees.length - 1})}
  }

  render() {

    return(
      <div className="whole-enchilada">
{/* HOME HEADER  */}
        <header>
          <h1 className="home">Home</h1>
        </header>

{/* USER PROFILE  */}
        <div className="profile-box">
          <ProfileBox dataLength={this.state.employees.length} employee={this.state.employees[this.state.index]} />
        </div>

{/* ACTION BUTTONS  */}
        <div>
          <ul className="action-buttons">
            <li className="action"><p className="anchors previous-anchor" onClick={() => this.handlePrevious()}>&lt; Previous</p></li>
            <li className="action"><button>Edit</button></li>
            <li className="action"><button>Delete</button></li>
            <li className="action"><button>New</button></li>
            <li className="action"><p className="anchors next-anchor" onClick={() => this.handleNext()}> Next &gt;</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App

