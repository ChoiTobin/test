import React from "react"
import styled from 'styled-components';

function MapCard({item}){
console.log(item)

    return(
        <>

        {
            item.slice(1).map((item)=>(
                <Test3>{item.usr_nm}</Test3>
            ))
        }

        </>

    )

}

export default MapCard
const Test3 = styled.div`
background-color: #f1f1f1;
width: 140px;
margin: 10px;
text-align: center;
line-height: 75px;
font-size: 30px;
`

