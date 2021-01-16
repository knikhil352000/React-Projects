import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED_CONTACTS, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constant/type"

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    }
}

//get a contact

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id,
})

//update a contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
})

//delete a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
})

//select all contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
})

//clear selected contact

export const clearAllContact = () => ({
    type: CLEAR_CONTACT
})

export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACTS
})



