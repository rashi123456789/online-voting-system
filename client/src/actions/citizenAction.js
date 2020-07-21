import axios from 'axios'

export const AddCitizens =(citizen)=>{
    return {type:'ADD_CITIZENS',payload:citizen}
}
export const startAddCitizens =(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/citizens',formData,{headers:{'x-auth':localStorage.getItem('authToken')}})
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }
                else{
                    alert('successfully added')
                    const citizen =response.data
                    redirect()
                    dispatch(AddCitizens(citizen))
                }
            })
    }
}

export const setCitizens = (citizen) => {
    return { type: 'SET_CITIZENS', payload: citizen }
}

export const startSetCitizens = () => {
        return (dispatch) => {
            axios.get('/citizens', { headers: {'x-auth': localStorage.getItem('authToken')}})
            .then((response) => {
                const citizen = response.data
                dispatch(setCitizens(citizen))
            })
        }
}
export const removeCitizen = (citizen) => {
    return { type: 'REMOVE_CITIZEN', payload: citizen }
}

export const startRemoveCitizen = (id) => {
    return (dispatch) => {
        axios.delete(`/citizens/${id}`, { headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            const citizen = response.data
            dispatch(removeCitizen(citizen))
        })
    }
}

export const editCitizen = (citizen) => {
    return { type: 'EDIT_CITIZEN', payload: citizen }
}

export const startEditCitizen = (citizen, redirect) => {
    return (dispatch) => {
        axios.put(`/citizens/${citizen.id}`, citizen, {headers: {'x-auth': localStorage.getItem('authToken')}})
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const citizen = response.data 
                dispatch(editCitizen(citizen))
                redirect()
            }
        })
    }
}