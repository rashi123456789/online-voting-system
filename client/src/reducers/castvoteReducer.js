const castvoteInitialState=[]
const castvoteReducer =(state=castvoteInitialState,action)=>{
    switch(action.type){
        case 'SET_CASTVOTES':{
            return [...action.payload]
        }
        case "ADD_CASTVOTES": {
            return [...state, action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default castvoteReducer