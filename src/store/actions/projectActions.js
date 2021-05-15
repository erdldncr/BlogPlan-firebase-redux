export const createProject=(project)=>{

    return (dispatch,getState,{getFirebase,getFirestore})=>{
       
       const {lastName,firstName}=getState().firebase.profile
       const userId=getState().firebase.auth.uid
        
       const firestore=getFirestore()
       firestore.collection('projects').add({
           ...project,
           authorFirstName:firstName,
           authorLastName:lastName,
           authorID:userId,
           createdAt:new Date()

        }).then(()=>{
            ///make async call to database
        dispatch({type:'CREATE_PROJECT',project:project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
        
    }
}