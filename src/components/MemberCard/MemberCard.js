import { useState } from "react";
import img1 from "../../image/FACE.png";
import Green from "../../image/Green.png";
import necklace from "../../image/necklace.png";
import ModalBox from "../../shared/modal/ModalBox";
function MemberCard({ Team }) {
  const backgroundImg = img1;
  const backgroundImg2 = Green;
  const backgroundImg3 = necklace;

  const [open, setOpen] = useState(false);
  const [ModalInfo, setModalInfo] = useState([]);

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
        <span className="Title-Member-box1-center">{Team[0].Team}</span>
      </div>
      <div className="Member-box1-center " onClick={() => handleOpen(Team[0])}>
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
            <span className="name">{Team[0].name}</span>
            <span className="name2">{Team[0].active}</span>
            <div className="name3">{Team[0].action}</div>
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

      {Team.slice(1).map((item, i) => (
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
                    <div className="EM-name">{item.name}</div>
                    <div className="EM-name2">{item.active}</div>
                  </div>
                </div>
                <div className="EM-name3">{item.action}</div>

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
