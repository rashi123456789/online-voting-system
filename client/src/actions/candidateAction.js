import axios from 'axios'

export const AddCandidates =(candidate)=>{
    return {type:'ADD_CANDIDATES',payload:candidate}
}
export const startAddCandidates =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/candidates',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const candidate =response.data
                    redirect()
                    dispatch(AddCandidates(candidate))
                }
            })
    }
}

export const setCandidates = (candidate) => {
    return { type: 'SET_CANDIDATES', payload: candidate }
}

export const startSetCandidates = () => {
        return (dispatch) => {
            axios.get('/candidates', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const candidate = response.data
                dispatch(setCandidates(candidate))
            })
        }
}
export const removeCandidate = (candidate) => {
    return { type: 'REMOVE_CANDIDATE', payload: candidate }
}

export const startRemoveCandidate = (id) => {
    return (dispatch) => {
        axios.delete(`/candidates/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const candidate = response.data
            dispatch(removeCandidate(candidate))
        })
    }
}

export const editCandidate = (candidate) => {
    return { type: 'EDIT_CANDIDATE', payload: candidate }
}

export const startEditCandidate = (candidate, redirect) => {
    return (dispatch) => {
        axios.put(`/candidates/${candidate.id}`, candidate, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const candidate = response.data 
                dispatch(editCandidate(candidate))
                redirect()
            }
        })
    }
}