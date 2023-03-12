import React from 'react'
import Header from '../components/Layout/Header'
import EmployeeBoxCard from '../components/EmployeeCard/EmployeeBoxCard';
import EmployeeBoxMiniCard from '../components/EmployeeCard/EmployeeBoxMiniCard';
import "../shared/styled/employee.css"; 

function Employee() {
  let employee =[{
    title:"대표",
    job:"대표",
    name:"최--",
    active:"업무 총괄"
  },
  {
    title:"경영기획부",
    job:"부장",
    name:"윤--",
    active:"경영기획부 업무 총괄"
  },
  {
    title:"플랫폼사업부",
    job:"차장",
    name:"임--",
    active:"플랫폼사업부 업무 총괄"
  },
  { 
    title:"생산기술부",
    job:"부장",
    name:"최--",
    active:"생산기술부 업무 총괄"
  }
]

  return (
    <>
    <Header/>
    <div  style={{  height: "80vh" ,display:"flex"}} >
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
          빈곳
        </div>
                      {/*빈곳*/}
        <div className='EmployeeContainer2'>
          <EmployeeBoxMiniCard/>

        </div>
        <div className='EmployeeContainer2'>
          <EmployeeBoxMiniCard/>
          <EmployeeBoxMiniCard/>
          <EmployeeBoxMiniCard/>
        </div>
        <div  className='EmployeeContainer2'>
            <EmployeeBoxMiniCard/>
        </div>
        
      </div>{/* EmployeeContainer */}
    </div>
    </>

  )
}

export default Employee