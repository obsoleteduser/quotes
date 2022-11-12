import './editUser.scss'

export const EditUser = ()=>{
    return(
        <div className="edit-user-overlay">
        <div className="edit-user-modal">
        <h1>Edit Data</h1>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div className="edit-user-submit">Submit</div>
        </div>
        </div>
    )
}