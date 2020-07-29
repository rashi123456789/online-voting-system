import axios from 'axios'

export const AddPartys =(party)=>{
    return {type:'ADD_PARTYS',payload:party}
}
export const startAddPartys =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/partys',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const party =response.data
                    redirect()
                    dispatch(AddPartys(party))
                }
            })
    }
}

export const setPartys = (party) => {
    return { type: 'SET_PARTYS', payload: party }
}

export const startSetPartys = () => {
        return (dispatch) => {
            axios.get('/partys', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const party = response.data
                dispatch(setPartys(party))
            })
        }
}
export const removeParty = (party) => {
    return { type: 'REMOVE_PARTY', payload: party }
}

export const startRemoveParty = (id) => {
    return (dispatch) => {
        axios.delete(`/partys/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const party = response.data
            dispatch(removeParty(party))
        })
    }
}

export const editParty = (party) => {
    return { type: 'EDIT_PARTY', payload: party }
}

export const startEditParty = (party, redirect) => {
    return (dispatch) => {
        axios.put(`/partys/${party.id}`, party, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const party = response.data 
                dispatch(editParty(party))
                redirect()
            }
        })
    }
}