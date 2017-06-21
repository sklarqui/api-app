import React from 'react'
import './Homework.css'
import { Route, NavLink } from 'react-router-dom'

function Homework(props) {
 


 const fetchUserData=(props)=> {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  return (
    <div className="homework">
     
        <div className="nasa">
        <img className="nasa-logo" src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" alt="nasa" />

        <h2>Select a mars rover.</h2>
        <ul className="nav-links">
          <li>
            <NavLink to='/nasa/curiosity'>Curiosity</NavLink>
          </li>
          <li>
            <NavLink to='/nasa/opportunity'>Opportunity</NavLink>
          </li>
          <li>
            <NavLink to='/nasa/spirit'>Spirit</NavLink>
          </li>
        </ul>

        <Route exact path={this.props.match.url} render={() => (
          <h2>No rover selected.</h2>
        )} />
        
        {/*<Route path={`${this.props.match.url}/:rover`} component={}/>*/}
      </div>

      
    </div>
  )
}

export default Homework