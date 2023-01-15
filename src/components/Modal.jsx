import React from "react";
import { GrClose } from "react-icons/gr";
import { BsExclamationTriangle, BsChevronDown } from "react-icons/bs";

export default function Modal({ showModal, setShowModal }) {
  return (
    <div className={`modal`}>
      <div className="modal__inner">
        <div className="modal__inner_head">
          <h3 className="modal__inner_title">
            <BsExclamationTriangle color="#FFA300" /> Test Notify trigger
          </h3>
          <GrClose
            className="close-button"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="modal__inner_body">
          <p className="modal__inner_body__desc">
            Will use the lastest block when left empty
          </p>
          <div className="modal__inner_body__input">
            <div className="modal__inner_body__select">Block number <BsChevronDown color="#8c5ae8"/></div>
            <input type="text" placeholder="Test block #001"/>
          </div>
          <button class="btn filled">Start Test</button>
        </div>
      </div>
    </div>
  );
}
