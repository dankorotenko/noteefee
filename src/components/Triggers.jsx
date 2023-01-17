import React, { useState } from "react";

import account from "../assets/account.svg";
import aptos from "../assets/aptos.svg";
import wallet from "../assets/wallet.svg";
import topaz from "../assets/topaz.svg";
import TriggerCard from "./TriggerCard";

export default function Triggers({ handleChildProps }) {
  const [open, setOpen] = useState(null);
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
  const handleTrigger = (i) => {
    setOpen(i);
    handleChildProps({ trigger: cards[0].title.toLowerCase() });
    // if(open === i ) setOpen(null)
  };
  return (
    <div className="trigger__body">
      {cards.map((card, i) => (
        <div
          className={`trigger__card ${
            i === open ? "open" : open != null ? "closed" : ""
          }`}
          onClick={() => handleTrigger(i)}
          key={i}
        >
          <TriggerCard card={card} i={i} open={open} />
        </div>
      ))}
    </div>
  );
}
