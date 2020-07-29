import axios from 'axios'

export const AddCastvotes =(castvote)=>{
    return {type:'ADD_CASTVOTES',payload:castvote}
}
export const startAddCastvotes =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/castvotes',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const castvote =response.data
                    redirect()
                    dispatch(AddCastvotes(castvote))
                }
            })
    }
}

export const setCastvotes = (castvote) => {
    return { type: 'SET_CASTVOTES', payload: castvote }
}

export const startSetCastvotes = () => {
        return (dispatch) => {
            axios.get('/castvotes', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const castvote = response.data
                dispatch(setCastvotes(castvote))
            })
        }
}
