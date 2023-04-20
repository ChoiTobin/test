import { useState,useRef } from "react";
import img1 from "../../image/FACE.png";
import Green from "../../image/Green.png";
import necklace from "../../image/necklace.png";
import ModalBox from "../../shared/modal/ModalBox";


function MemberCard({ Team,Team2 }) {

  const backgroundImg = img1;
  const backgroundImg3 = necklace;

  const [open, setOpen] = useState(false);
  const [ModalInfo, setModalInfo] = useState(null);

  function handleOpen(e) {
    setModalInfo(e);
    setOpen(true);
    console.log(e)
  }
  const handleClose = () => setOpen(false);



  

  return (
    <>
      {/* modal */}
      <ModalBox
        handleClose={handleClose}
        ModalInfo={ModalInfo}
        setModalInfo={setModalInfo}
        setOpen={setOpen}
        open={open}
      ></ModalBox>

      
      {/* Most Used Language 제외 큰박스 */}
      <div className="Title-Member-box1">
        <span className="Title-Member-box1-center">{Team2?.team_nm}</span>
      </div>
      <div className="Member-box1-center " onClick={() => handleOpen(Team2?.mate[0])}>
        <div className="job-Card-flex">
          <div>
            <div
              className="img-hight-Skill"
              style={{
                backgroundImage: `url(${Team2?.mate[0].img})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div>
            <span className="skill-name">{Team2?.mate[0].usr_nm}</span>
          </div>
        </div>
      </div>

      {/* 작은 박스 */}
      {
        Team2?.mate.slice(1).map((item, i) => (
        <div key={i} className="Member-container">
          <div className="job-box-employee-container">
            <div className="job-EM-box">
              <div className="green2-top">
                  <div className="job-EM-border" onClick={() => handleOpen(item)}>
                      <div className="miniBox-Skill-Language">
                          {item.usr_nm}
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      ))
      }
    </>
  );
}

export default MemberCard;
