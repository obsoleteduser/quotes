import { Outlet } from "react-router"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import './baseLayout.scss'
import { CardView } from "./cards/cardView"
import { useState } from "react"
import { useSelector } from "react-redux"
import { BrowserView, MobileView } from "react-device-detect"

export const BaseLayout = ()=>{
    const active = useSelector(state=> state.card.active)
    return(
        <div className="base-layout">
        <Header/>
        <BrowserView>
        <Outlet/>
        {
            active? <CardView/> : null
        }
        </BrowserView>
        
           <MobileView>
                <h1 style={{textAlign: "center"}}>Sorry, we don't support mobile version right now!</h1>
               </MobileView>
        <Footer/>
        </div>
    )
}