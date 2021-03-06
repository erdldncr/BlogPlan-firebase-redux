import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signIn} from '../../store/actions/authActions'
class Signin extends Component {
    state={email:'',password:''}

handleChange=(e)=>{
this.setState({[e.target.id]:e.target.value})

    }
handleSubmit=(e)=>{
    e.preventDefault()
this.props.signIn(this.state)
    }
    render() {
            const {auth}=this.props
           
            if(auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign IN</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.password} type="password" name="" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
                        </button>
                        <div className="red-text center">
                            {this.props.authError&& <p>{this.props.authError}</p> }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
   
    return {
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)