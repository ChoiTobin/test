import React from "react";
import "../LocateCard/LocateOne.css"


function LocateTwo(){
    let arrDate = [
        {
        name:"1층"
        
    },{
        name:"2층"
        
    }
]

    return(
        <>
            <div className="Locate-main">
                <div className="Locate-box-left">
                    <div className="Locate-box-left-baby">
                        <div className="LocateOne-border">
                            <span className="LocateOne-border-baby">별관 </span>
                            <span className="LocateOne-border-baby2">층별안내</span>
                        </div>
                        <div className="LocateOne-min-border">
                            <span>종합안내</span>
                            <span> ></span>
                        </div>
                        {
                            arrDate.map((item,i)=>(
                        <div key={i} className="LocateOne-min-border">
                            <span>{item.name}</span>
                            <span>></span>
                        </div>
                            ))
                        }
                        
                    </div>
                </div>
                <div className="Locate-box-right">
                    <div className="Locate-box-right-baby">
                        <div className="LocateOne-font1"><span>1층</span></div>
                        <div className="LocateOne-font2">민원 여권과,당직실,부동산정보과,로비</div>

                    </div>
                    
                </div>
            </div>
        </>
    )


}

export default LocateTwo