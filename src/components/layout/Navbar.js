import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = ({auth,profile}) => {

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Erdal Plan</Link>
        {auth.uid?(<SignedInLinks profile={profile} />):(
          <SignedOutLinks />
        )}
        
      </div>
    </nav>
  )
}
const mapStateProps=(state)=>{

  return {
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default connect(mapStateProps)( Navbar) 