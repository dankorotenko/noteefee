import React, { useEffect, useState } from "react";
import arrowRight from "../assets/icons/la_angle-down.svg";
import Select from "./Select";
import Modal from "./Modal";

import { MdClose } from "react-icons/md";

export default function TriggerCard({
  card,
  isOpen,
  isHidden,
  onClick,
  setOpen,
  handleTriggerProps
}) {
  const [showModal, setShowModal] = useState(false);

  const cardClass = isOpen ? "open" : "";
  const hiddenClass = isHidden ? "closed" : "";

  const closeCard = () => {
    // setOpen(null);
    // handleChildProps({ trigger: null });
    handleTriggerProps({closed: null})
  };

  return (
    <div
      className={`trigger__card ${cardClass}${hiddenClass}`}
      onClick={onClick}
    >
      <div className="trigger__card_title">
        <h4>
          <img src={card.img} alt={card.img} />
          {card.title}
        </h4>
        {isOpen && (
          <div className="trigger__card_btns">
            <button className="btn bordered" onClick={() => setShowModal(true)}>
              Test
            </button>
            <button className="btn filled">Continue</button>
          </div>
        )}
      </div>
      {isOpen ? (
        <div className="trigger__card_body opened">
          <div className="field-wrapper user-address">
            <label htmlFor="user-address">User Address</label>
            <input type="text" placeholder="0*123456789..." id="user-address" />
            <p className="tip">Enter the address that you use on Compount</p>
          </div>
          <div className="field-wrapper threshold-amound">
            <label htmlFor="threshold-amound">Threshold Amound</label>
            <div className="inputs-wrapper">
              <Select className={""} options={["Below", "Above", "Equal"]} />
              <div className="input-wrapper">
                <input type="number" placeholder="0.00" id="threshold-amound" />
                <p>USD</p>
              </div>
            </div>
          </div>
          <button className="btn bordered close-button" onClick={closeCard}>
            <MdClose color="#8c5ae8"/>
          </button>
        </div>
      ) : (
        <div className="trigger__card_body">
          <p className="trigger__card_desc">{card.desc}</p>
          <img src={arrowRight} alt={arrowRight} />
        </div>
      )}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}
