import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = (props) => {
  return (
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item" to="/use-state-demo">Use state</NavLink>
          <NavLink className="dropdown-item" to="/use-effect-demo">UseEffect</NavLink>
          <NavLink className="dropdown-item" to="/use-callback-demo">UseCallBack</NavLink>
          <NavLink className="dropdown-item" to="/use-memo-demo">UseMemoDemo</NavLink>
          <NavLink className="dropdown-item" to="/use-ref-demo">UseRef</NavLink>
          <NavLink className="dropdown-item" to="/use-redux-demo">Redux hook</NavLink>
          <NavLink className="dropdown-item" to="/use-navigate-demo">Use Navigate</NavLink>
          <NavLink className="dropdown-item" to="/use-search-params">Use search params</NavLink>
        
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

  )
}

export default Header