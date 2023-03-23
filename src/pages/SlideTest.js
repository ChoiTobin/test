import React,{useState,useRef} from "react"
import "../shared/styled/SlideTest.css"

function SlideTest(){


    const homeRef = useRef(null);
    const onHomeClick = () => {
        homeRef.current?.scrollIntoView({behavior:"smooth"})
 }

 return(

        <>
        <div ref={homeRef} className="box0" style={{ height: "90vh",display:"flex" }}>
            <button  onClick={onHomeClick}></button>
        </div>
        </>
    )
}

export default SlideTest