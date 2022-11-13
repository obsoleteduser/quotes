import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editUserData, editUserModal } from '../../RTK/slices/UsersSlice/userCardSlice'
import './editUser.scss'

export const EditUser = ()=>{
    const dispatch = useDispatch()
    const [address, setAddress] = useState('')
    const [website, setWebsite] = useState('')
    const [company, setCompany] = useState('')


    return(
        <div 
        onClick={()=>dispatch(editUserModal(false))}
        className="edit-user-overlay">
        <div 
        onClick={(e)=>e.stopPropagation()}
        className="edit-user-modal">
        <h1>Edit Data</h1>
        <input 
        onChange={(e)=>{setAddress(e.target.value)}}
        placeholder='address' type="text" />
        <input 
        onChange={(e)=>{setWebsite(e.target.value)}}
        placeholder='website' type="text" />
        <input
        onChange={(e)=>{setCompany(e.target.value)}}
        placeholder='company' type="text" />
        <div
        onClick={()=>{
            dispatch(editUserData({address, website, company}))
            dispatch(editUserModal(false))
        }}
        className="edit-user-submit">Submit</div>
        </div>
        </div>
    )
}