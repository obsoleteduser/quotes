import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserCard } from "../features/UserCards/userCard"
import { UserColor } from "../features/UserCards/userColor"
import { cardSlice } from "../RTK/slices/cardSlice"
import { getUsers, setCardBig, setDisplayedUsers } from "../RTK/slices/UsersSlice/userCardSlice"
import './Users.scss'

export const Users = () =>{
    const users = useSelector(state=> state.user.users)
    const displayedUsers = useSelector(state=> state.user.displayedUsers)
    const bigCards = useSelector(state => state.user.bigCards)
    console.log(bigCards)
    const dispatch = useDispatch()
    // console.log(users)

    useEffect(()=>{
        dispatch(getUsers())
    }, [])

    // const cardSize  = "page-users";
    // bigCards ? cardSize += " make-two-collumn" : null

    return(
        <div className={'page-users make-two-collum'}>
            <div className="page-users__controller">
                <div 
                onClick={()=>{
                    dispatch(setCardBig(!bigCards))  
                }}
                className="page-users__big-cards">Make big cards</div>
               
           </div>
            <div 
            style={bigCards ?{gridTemplateColumns: 'repeat(2, 1fr)'}: null}
            className="page-users__card-board">
         
            {
                users.filter(user => users.indexOf(user) < displayedUsers)
                .map(user => (
                    <UserCard key={user.id} email={user.email} name={user.name} id={user.id} phone={user.phone}/>
                )
                )
            }
           
            </div>
            <div
             onClick={()=>{
                dispatch(setDisplayedUsers(displayedUsers+3))
             }}
            className="page-users__more-user">More</div>
           
        </div>
    )
}