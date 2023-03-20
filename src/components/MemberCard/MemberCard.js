import { useState } from "react";
import img1 from "../../image/FACE.png";
import Green from "../../image/Green.png";
import necklace from "../../image/necklace.png";
import ModalBox from "../../shared/modal/ModalBox";
function MemberCard({ Team,Team2 }) {
  
  
  const backgroundImg = img1;
  const backgroundImg2 = Green;
  const backgroundImg3 = necklace;

  const [open, setOpen] = useState(false);
  const [ModalInfo, setModalInfo] = useState(null);

  function handleOpen(e) {
    setModalInfo(e);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <>
      <ModalBox
        handleClose={handleClose}
        ModalInfo={ModalInfo}
        setModalInfo={setModalInfo}
        setOpen={setOpen}
        open={open}
      ></ModalBox>

      <div className="Title-Member-box1">
        <span className="Title-Member-box1-center">{Team2?.team_nm}</span>
      </div>
      <div className="Member-box1-center " onClick={() => handleOpen(Team2?.mate[0])}>
        <div className="job-Card-flex">
          <div>
            <div
              className="img-hight2"
              style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div>
            <span className="name">{Team2?.mate[0].usr_nm}</span>
            <span className="name2">{Team2?.mate[0].posit_nm}</span>
            <div className="name3">{Team2?.mate[0].adi_info7}</div>
            <div
              style={{
                backgroundImage: `url(${backgroundImg2})`,
                backgroundSize: "cover",
              }}
              className="green"
            ></div>
          </div>
        </div>
      </div>

      {Team2?.mate.slice(1).map((item, i) => (
        <div key={i} className="Member-container">
          <div className="job-box-employee-container">
            <div className="job-EM-box">
              <div className="green2-top">
               <div> 
                <div className="job-EM-border" onClick={() => handleOpen(item)}>
                  <div
                    className="img-hight"
                    style={{
                      backgroundImage: `url(${backgroundImg})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="name-center">
                    <div className="EM-name">{item.usr_nm}</div>
                    <div className="EM-name2">{item.posit_nm}</div>
                  </div>
                </div>
                <div className="EM-name3">{item.adi_info7}</div>

                </div>

                <div
                  style={{
                    backgroundImage: `url(${backgroundImg2})`,
                    backgroundSize: "cover",
                  }}
                  className="green2"
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MemberCard;
