import React, { Component } from 'react'

export default class Signup extends Component {
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
    }
    render() {
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
                    </div>
                </form>
            </div>
        )
    }
}
