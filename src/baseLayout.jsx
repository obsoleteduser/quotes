import { Outlet } from "react-router"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import './baseLayout.scss'
import { CardView } from "./cards/cardView"
import { useState } from "react"
import { useSelector } from "react-redux"

export const BaseLayout = ()=>{
    const active = useSelector(state=> state.card.active)
    return(
        <div className="base-layout">
        <Header/>
        <Outlet/>
        {
            active? <CardView/> : null
        }
        <Footer/>
        </div>
    )
}