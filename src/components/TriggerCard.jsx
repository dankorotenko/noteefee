import React, { useState } from "react";
import arrowRight from "../assets/icons/la_angle-down.svg";
import Select from "./Select";
import Modal from "./Modal";

import { MdClose } from "react-icons/md";

export default function TriggerCard({
  card,
  open,
  isOpen,
  isHidden,
  onClick,
  handleClose
}) {
  const [showModal, setShowModal] = useState(false);

  const cardClass = isOpen ? "open" : "";
  const hiddenClass = isHidden ? "closed" : "";


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
        {isOpen && (open==0 || open==1 || open==3) && (
          <div className="trigger__card_btns">
            <button className="btn bordered" onClick={() => setShowModal(true)}>
              Test
            </button>
            <button className="btn bordered close-button" onClick={() => handleClose(open)}>
              <MdClose color="#8c5ae8" />
            </button>
          </div>
        )}
        {isOpen && open==2 && (
          <div className="trigger__card_btns">
            <button className="btn bordered close-button" onClick={() => handleClose(open)}>
              <MdClose color="#8c5ae8" />
            </button>
          </div>
        )}
      </div>
      {isOpen && open==0 && (
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
          <button className="btn filled continue-button">Continue</button>
        </div>
      )}
      {isOpen && open==1 && (
        <div className="trigger__card_body opened">
          <p>This task will be disabled once fired to prevent spam from high fluctuations.</p>
          <div className="field-wrapper threshold-amound">
            <label htmlFor="threshold-amound">Aptos Price</label>
            <div className="inputs-wrapper">
              <Select className={""} options={["Below", "Above", "Equal"]} />
              <div className="input-wrapper">
                <input type="number" placeholder="0.00" id="threshold-amound" />
                <p>USD</p>
              </div>
            </div>
          </div>
          <button className="btn filled continue-button">Continue</button>
        </div>
      )}
      {isOpen && open==2 && (
        <div className="trigger__card_body opened">
          <div className="field-wrapper user-address">
            <label htmlFor="user-address">User Wallet Address</label>
            <input type="text" placeholder="0*123456789..." id="user-address" />
            <p className="tip">Enter the address that you use on Compount</p>
          </div>
          <button className="btn filled continue-button">Continue</button>
        </div>
      )}
      {isOpen && open==3 && (
        <div className="trigger__card_body opened">
          <div className="field-wrapper user-address">
            <label htmlFor="user-address">Collection</label>
            {/* change to separate select */}
            <Select className={"collection-select"} options={["Collection URL", 'Collection #1', 'Collection #2', 'Collection #3']}/>
            <p className="topaz-tip">Provide a collection URL from <a href="#">topaz.co</a>, or choose from the list <br /> Example format: <a href="#">https://www.topaz.so/collection/&lt;collection-name&gt;</a></p>
          </div>
          <div className="field-wrapper threshold-amound">
            <label htmlFor="threshold-amound">Floor Price</label>
            <div className="inputs-wrapper">
              <Select className={""} options={["Below", "Above", "Equal"]} />
              <div className="input-wrapper">
                <input type="number" placeholder="0.00" id="threshold-amound" />
                <p>APT</p>
              </div>
            </div>
          </div>
          <button className="btn filled continue-button">Continue</button>
        </div>
      )}
      {!isOpen && (
        <div className="trigger__card_body">
          <p className="trigger__card_desc">{card.desc}</p>
          <img src={arrowRight} alt={arrowRight} />
        </div>
      )}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}
