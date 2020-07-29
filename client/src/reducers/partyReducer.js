const partyInitialState=[]
const partyReducer =(state=partyInitialState,action)=>{
    switch(action.type){
        case 'SET_PARTYS':{
            return [...action.payload]
        }
        case "ADD_PARTYS": {
            return [...state, action.payload]
        }
        case 'EDIT_PARTY': {
            return state.map(party => {
                if(party._id === action.payload._id){
                    return Object.assign({}, party, action.payload)
                }
                else{
                    return Object.assign({}, party)
                }
            })
        }
        case 'REMOVE_PARTY': {
            return state.filter(party => {
                return party._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default partyReducer