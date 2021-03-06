import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'
 class Signup extends Component {
    state={email:'',
    password:'',
    firstName:'',
    lastName:''    
}

handleChange=(e)=>{
this.setState({[e.target.id]:e.target.value})

    }
handleSubmit=(e)=>{
e.preventDefault()
this.props.signUp(this.state)
    }
    render() {
        const {auth,authError}=this.props
     
        if(auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.password} type="password" name="" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">firstName</label>
                        <input type="text" name="" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">lastName</label>
                        <input type="text" name="" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                           Sign Up
                        </button>
                        <div className="red-text center">
                            {authError&& <p>{authError}</p> }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        auth :state.firebase.auth,
        authError:state.auth.authError
    
    }
}
const mapDispatchToProps=(dispatch)=>{

    return {
        signUp:(newUser)=>{dispatch(signUp(newUser))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup)