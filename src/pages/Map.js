import React,{useState,useRef} from "react";
import "../shared/styled/Map.css";
import { select } from "d3";


function Map(){




 return(
        <>
        <div  className="box0-map" style={{ height: "90vh",display:"flex" }}>
            <svg width="500px" height="500px">
                <g>
                    <circle cy="50" cx="50" r="30"></circle>
                    <circle cy="150" cx="150" r="30"></circle>
                    <circle cy="250" cx="250" r="30"></circle>
                    <circle cy="350" cx="350" r="30"></circle>
                    <rect x="200" y="50" width="100" height="100"></rect>
                </g>
            </svg>
        </div>
        </>
    )
}

export default Map