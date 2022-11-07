import { NavLink } from "react-router-dom"
import './Header.scss'
export const Header = ()=>{
    return(
        <header>
            <div className="brand">Quotes</div>
            <nav>
                <NavLink className='link' to='/'>Home</NavLink>
                <NavLink className='link' to='/users'>Users</NavLink>
                <NavLink className='link' to='/photos'>Photos</NavLink>
            </nav>
        </header>
    )
}