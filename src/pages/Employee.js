import React from 'react'
import Header from '../components/Layout/Header'
import EmployeeBoxCard from '../components/EmployeeCard/EmployeeBoxCard';
import EmployeeBoxMiniCard from '../components/EmployeeCard/EmployeeBoxMiniCard';
import "../shared/styled/employee.css"; 
import { useState } from 'react';

function Employee() {

  

  let employee =[{
    title:"대표",
    job:"대표",
    name:"최--",
    active:"업무 총괄",
    isDone:"true"  
  },
  {
    title:"경영기획부",
    job:"부장",
    name:"윤--",
    active:"경영기획부 업무 총괄",
    isDone:"true"
  },
  {
    title:"플랫폼사업부",
    job:"차장",
    name:"임--",
    active:"플랫폼사업부 업무 총괄",
    isDone:"true" 
    
  },
  { 
    title:"생산기술부",
    job:"부장",
    name:"최--",
    active:"생산기술부 업무 총괄",
    isDone:"true" 
  },{
    job:"사원",
    name:"김--",
    active:"경영기획부 업무"
  },
  {
    job:"대리",
    name:"최--",
    active:"소프트웨어 개발/유지 관리"
  },{
    job:"주임",
    name:"최--",
    active:"각종 디자인 콘텐츠 담당"
  },{
    job:"연구원",
    name:"신--",
    active:"소프트웨어 개발/유지 관리"
  },{
    job:"인턴",
    name:"최--",
    active:"소프트웨어 개발/유지 관리"
  },{
    job:"",
    name:"김--",
    active:"생산기술부 업무 보조"
  }
]

//state에서 객체로 불린값 설정한다. {true,false} =>onclci한 속성이랑 객체랑 일치하면 true로 속성 바꿔줘 
//아니면 false 해서 삼항연산자 통해서 props.title.뭐가 true면 컬러 orange아니면 black
//state로 해야할까?렌더링 시키려면 스테이트로 하자.

  return (
    <>
    <Header/>
    <div  style={{  height: "80vh" ,display:"flex"}} className="over">
      <div className='EmployeeContainer'>
       
            <EmployeeBoxCard title={employee[0]} />
                          {/* 대표님 */}
            <EmployeeBoxCard title={employee[1]}/>
                          {/* 경영기획부 */}
            <EmployeeBoxCard title={employee[2]}/>
                          {/* 플랫폼 사업부 */}
            <EmployeeBoxCard title={employee[3]}/>
                          {/* 생산기술부 */}

            <div>
              
            </div>
                          {/*빈곳*/}
            <div className='Employee-EM-Container'>
              <EmployeeBoxMiniCard title={employee[4]}/>

            </div>
            <div className='Employee-EM-Container'>
              <EmployeeBoxMiniCard title={employee[5]}/>
              <EmployeeBoxMiniCard  title={employee[6]}/>
              <EmployeeBoxMiniCard title={employee[7]}/>
              <EmployeeBoxMiniCard title={employee[8]}/>

            </div>
            <div  className='Employee-EM-Container'>
                <EmployeeBoxMiniCard title={employee[9]}/>
            </div>





      </div>{/* EmployeeContainer */}
    </div>
    </>

  )
}

export default Employee