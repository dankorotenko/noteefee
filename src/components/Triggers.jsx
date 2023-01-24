import React, { useEffect, useState } from "react";

import account from "../assets/account.svg";
import aptos from "../assets/aptos.svg";
import wallet from "../assets/wallet.svg";
import topaz from "../assets/topaz.svg";
import TriggerCard from "./TriggerCard";


export default function Triggers({ handleChildProps }) {
  const [open, setOpen] = useState(null);
  const [closeCard, setCloseCard] = useState(null);

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

  const handleOpen = (i) => {
    setOpen(i);
    handleChildProps({ trigger: cards[0].title.toLowerCase() });
  };
  
  const handleClose = (i) => {
    setCloseCard(i);
  };

  useEffect(() => {
    setOpen(null)
  }, [closeCard]);

  return (
    <div className="trigger__body">
      {cards.map((card, i) => (
        <TriggerCard
          card={card}
          open={open}
          key={i}
          isOpen={i === open}
          isHidden={i !== open && open !== null}
          onClick={() => handleOpen(i)}
          handleClose={handleClose}
        />
      ))}
    </div>
  );
}
