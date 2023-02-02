import React, { useState, useEffect, useRef } from "react";
import arrowRight from "../assets/icons/la_angle-down.svg";
import BigSelect from "./BigSelect";
import Select from "./Select";
import Modal from "./Modal";

import { MdClose } from "react-icons/md";
import  collection  from "../assets/collection.png";
export default function TriggerCard({
  card,
  open,
  isOpen,
  isHidden,
  onClick,
  setCloseCard,
}) {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    userAddress: "",
    thresholdAmount: "",
    type: "Below",
    aptosPrice: "",
    userWalletAddress: "",
    floorPrice: "",
    collection: "Collection URL",
  });

  const collectionOptions = [
    {
      img: collection,
      name: 'Collection #1'
    },
    {
      img: collection,
      name: 'Collection #2'
    },
    {
      img: collection,
      name: 'Collection #3'
    },
    {
      img: collection,
      name: 'Collection #4'
    },
    {
      img: collection,
      name: 'Collection #5'
    },
    {
      img: collection,
      name: 'Collection #6'
    },
  ]

  const cardClass = isOpen ? "open" : "";
  const hiddenClass = isHidden ? "closed" : "";

  const handleClose = (i) => {
    setCloseCard(i);
  };
  const handleSelectProps = (props) => {
    setFormData({ ...formData, type: props.selected });
  };
  const handleBigSelectProps = (props) => {
    setFormData({ ...formData, collection: props.selected });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !event.target.closest(".trigger__body")) {
        handleClose(Math.random);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`trigger__card ${cardClass}${hiddenClass}`}
      onClick={onClick}
      ref={ref}
    >
      <div className="trigger__card_title">
        <h4>
          {card.img}
          {card.title}
        </h4>
        <div className="trigger__card_btns">
          {isOpen && (open == 0 || open == 3) && (
            <>
              <button
                className="btn bordered"
                onClick={() => setShowModal(true)}
              >
                Test
              </button>
              <button
                className="btn bordered close-button"
                onClick={() => handleClose(Math.random)}
              >
                <MdClose color="#8c5ae8" />
              </button>
            </>
          )}
          {(isOpen && open == 2) ||
            (open == 1 && (
              <>
                <button
                  className="btn bordered close-button"
                  onClick={() => handleClose(Math.random)}
                >
                  <MdClose color="#8c5ae8" />
                </button>
              </>
            ))}
        </div>
      </div>
      <div className={`trigger__card_body ${isOpen ? "opened" : ""}`}>
        {isOpen && open == 0 && (
          <>
            <div className="field-wrapper user-address">
              <label htmlFor="user-address">User Address</label>
              <input
                type="text"
                placeholder="0*123456789..."
                id="user-address"
                name="userAddress"
                onChange={handleChange}
                value={formData.userAddress}
              />
              <p className="tip">Enter the address that you use on Compount</p>
            </div>
            <div className="field-wrapper threshold-amound">
              <label htmlFor="threshold-amound">Threshold Amound</label>
              <div className="inputs-wrapper">
                <Select
                  className={"select"}
                  options={["Below", "Above", "Equal to"]}
                  value={formData.type}
                  handleSelectProps={handleSelectProps}
                />
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="0.00"
                    id="threshold-amound"
                    name="thresholdAmount"
                    onChange={handleChange}
                    value={formData.thresholdAmount}
                  />
                  <p>USD</p>
                </div>
              </div>
            </div>
            <button className="btn filled continue-button">Continue</button>
          </>
        )}
        {isOpen && open == 1 && (
          <>
            <p>
              This task will be disabled once fired to prevent spam from high
              fluctuations.
            </p>
            <div className="field-wrapper threshold-amound">
              <label htmlFor="threshold-amound">Aptos Price</label>
              <div className="inputs-wrapper">
                <Select
                  className={"select"}
                  options={["Below", "Above", "Equal to"]}
                  value={formData.type}
                  handleSelectProps={handleSelectProps}
                />
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="0.00"
                    id="aptos-price"
                    name="aptosPrice"
                    onChange={handleChange}
                    value={formData.aptosPrice}
                  />
                  <p>USD</p>
                </div>
              </div>
            </div>
            <button className="btn filled continue-button">Continue</button>
          </>
        )}
        {isOpen && open == 2 && (
          <>
            <div className="field-wrapper user-address">
              <label htmlFor="user-wallet-address">User Wallet Address</label>
              <input
                type="text"
                placeholder="0*123456789..."
                id="user-waller-address"
                name="userWalletAddress"
                onChange={handleChange}
                value={formData.userWalletAddress}
              />
              <p className="tip">Enter the address that you use on Compount</p>
            </div>
            <button className="btn filled continue-button">Continue</button>
          </>
        )}
        {isOpen && open == 3 && (
          <>
            <div className="field-wrapper user-address">
              <label htmlFor="user-address">Collection</label>
              <BigSelect
                className={"collection-select big-select"}
                options={collectionOptions}
                value={formData.collection}
                handleBigSelectProps={handleBigSelectProps}
              />
              <p className="topaz-tip">
                Provide a collection URL from <a href="#">topaz.co</a>, or
                choose from the list <br /> Example format:
                <a href="#">
                  https://www.topaz.so/collection/&lt;collection-name&gt;
                </a>
              </p>
            </div>
            <div className="field-wrapper threshold-amound">
              <label htmlFor="floor-price">Floor Price</label>
              <div className="inputs-wrapper">
                <Select
                  className={"select"}
                  options={["Below", "Above", "Equal"]}
                  value={formData.type}
                  handleSelectProps={handleSelectProps}
                />
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="0.00"
                    id="floor-price"
                    name="floorPrice"
                    onChange={handleChange}
                    value={formData.floorPrice}
                  />
                  <p>APT</p>
                </div>
              </div>
            </div>
            <button className="btn filled continue-button">Continue</button>
          </>
        )}
        {!isOpen && (
          <>
            <p className="trigger__card_desc">{card.desc}</p>
            <img src={arrowRight} alt={arrowRight} />
          </>
        )}
      </div>

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}
