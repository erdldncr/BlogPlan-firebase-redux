import React, { Component } from 'react';
import { useParams,Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux';
import moment from 'moment'


class ProjectDetails extends Component {
    render() {
        const {project,auth}=this.props
        if(!auth.uid) return <Redirect to='/signin' />
   
        if(project){
            return (
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 gery-text">Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            )
        }else{
           return (<div className="container center">
                <p>loading .... project</p>
            </div>)
        }
    }
}



const mapStateToProps = (state,ownProps) => {
    const id=ownProps.match.params.id
    const projects=state.firestore.data.projects
    const project=projects?projects[id]:null
    
    return {
        project,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
  
    return {
        
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:'projects'}
    ]
    )
)(ProjectDetails)
