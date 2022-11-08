import { Outlet } from "react-router"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import './baseLayout.scss'
import { CardView } from "./cards/cardView"
import { useState } from "react"
import { useSelector } from "react-redux"
import { BrowserView, MobileView } from "react-device-detect"
import { CardColor } from "./cards/cardColor"
import { AddArticle } from "./cards/addArticle"

export const BaseLayout = ()=>{
    const cardMakerActive = useSelector(state=> state.card.cardMaker)
    const active = useSelector(state=> state.card.active)
    const colorActive = useSelector(state=>state.card.colorActive)
    console.log(cardMakerActive)
    return(
        <div className="base-layout">
        <Header/>
        <BrowserView>
        <Outlet/>
        {
            cardMakerActive? <AddArticle/> : null
        }
        {
            active? <CardView/> : null
        }
        {
        colorActive?<CardColor/> : null
        }
        </BrowserView>
        
           <MobileView>
                <h1 style={{borderRadius: '3px' ,color: 'black', backgroundColor: 'gold', padding: '1.5rem', margin: '1rem', textAlign: "center"}}>Sorry, we don't support mobile version right now! 
                <br />:(</h1>
               </MobileView>
        <Footer/>
        </div>
    )
}