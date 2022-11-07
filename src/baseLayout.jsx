import { Outlet } from "react-router"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import './baseLayout.scss'

export const BaseLayout = ()=>{
    return(
        <div className="base-layout">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}