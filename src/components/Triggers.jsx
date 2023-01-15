import React, { useState } from "react";
import Modal from "./Modal";
import arrowRight from "../assets/icons/la_angle-down.svg";
import account from "../assets/account.svg";
import aptos from "../assets/aptos.svg";
import wallet from "../assets/wallet.svg";
import topaz from "../assets/topaz.svg";

export default function TriggerCard({handleChildProps}) {
  const cards = [
    {
      title: "Account",
      desc: "Track Account Liquidity",
      img: account,
    },
    {
      title: "Aptos",
      desc: "Track APT price",
      img: aptos,
    },
    {
      title: "Wallet",
      desc: "Track new transaction",
      img: wallet,
    },
    {
      title: "Topaz",
      desc: "Track NFT floor price",
      img: topaz,
    },
  ];
  const [open, setOpen] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTrigger = (i) => {
    setOpen(i);
    handleChildProps({trigger: 'account'})
  };
  return (
    <div className="trigger__body">
      {cards.map((card, i) => (
        <div
          className={`trigger__card ${i === open ? "open" : ""}${
            i != open && open != null ? "closed" : ""
          }`}
          key={i}
          onClick={() => handleTrigger(i)}
        >
          <div className="trigger__card_title">
            <h4>
              <img src={card.img} alt={card.img} />
              {card.title}
            </h4>
            {i === open && (
              <div className="trigger__card_btns">
                <button className="btn bordered" onClick={() => setShowModal(true)}>Test</button>
                <button className="btn filled">Continue</button>
              </div>
            )}
          </div>
          {i === open ? (
            <div className="trigger__card_body opened">
              <div className="field-wrapper user-address">
                <label htmlFor="user-address">User Address</label>
                <input
                  type="text"
                  placeholder="0*123456789..."
                  id="user-address"
                />
                <p className="tip">
                  Enter the address that you use on Compount
                </p>
              </div>
              <div className="field-wrapper threshold-amound">
                <label htmlFor="threshold-amound">Threshold Amound</label>
                <div className="inputs-wrapper">
                  <select>
                    <option value="Below">Below</option>
                    <option value="Below">Above</option>
                    <option value="Below">Equal</option>
                  </select>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      placeholder="0.00"
                      id="threshold-amound"
                    />
                    <p>USD</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="trigger__card_body">
              <p className="trigger__card_desc">{card.desc}</p>
              <img src={arrowRight} alt={arrowRight} />
            </div>
          )}
        </div>
      ))}
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}
