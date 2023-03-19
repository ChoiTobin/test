import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import img1 from "../../image/FACE.png";
import necklace from "../../image/necklace.png";

function ModalBox({ handleClose, setOpen, setModalInfo, ModalInfo, open }) {
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 400,
    bgcolor: "rgba( 255, 255, 255, 0.8 )",
    borderRadius: "10px",
    boxShadow: 2,
  };

  // 미니모달
  const [open2, setOpen2] = React.useState(false);

  const backgroundImg = img1;
  const backgroundImg3 = necklace;
  return (
    <>
      <Modal
        open={open2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            className="modal-neck"
            style={{
              backgroundImage: `url(${backgroundImg3})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="modal-top-font3" onClick={() => setOpen2(false)}>
            {" "}
            이전
          </div>
          <div className="modal-top-line-dotted">
            ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ{" "}
          </div>
          <div className="modal-container2">
            {ModalInfo && ModalInfo.action}
          </div>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-top-container">
            <div className="modal-top-font">좌석위치보기</div>
            <div
              className="modal-neck"
              style={{
                backgroundImage: `url(${backgroundImg3})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="modal-top-font2" onClick={() => setOpen(false)}>
              닫기
            </div>
          </div>
          <div className="modal-top-line">
            <div className="modal-top-line-dotted">
              ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ ㅡ{" "}
            </div>
          </div>
          <div className="modal-container">
            <div className="modal-flex">
              <div
                className="modal-img"
                style={{
                  backgroundImage: `url(${backgroundImg})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="modal-info">
                <div className="modal-name-flex">
                  <div className="nameWeight">
                    {" "}
                    {ModalInfo && ModalInfo.name}
                  </div>
                  <div className="nameWeight2">
                    {ModalInfo && ModalInfo.active}
                  </div>
                </div>
                <div>
                  <span className="modal-span">전화번호</span>
                  <span>010-****-****</span>
                </div>
                <div>
                  <span className="modal-span">팩스번호</span>
                  <span>010-****-****</span>
                </div>
                <div>
                  <span className="modal-span">담당업무</span>
                  <span className="modal-span2">
                    {ModalInfo && ModalInfo.action}
                  </span>
                </div>
                <div
                  className="modal-box-shadow"
                  onClick={() => setOpen2(true)}
                >
                  담당업무 전체보기{" "}
                </div>
              </div>
            </div>
            <div className="modal-footer-line">
              <div className="modal-footer-span">재실</div>
              <div className="modal-footer-span">부재</div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
export default ModalBox;
