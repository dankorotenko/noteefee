import React, { useEffect, useState } from "react";

import Account from "./icons/logos/Account";
import Aptos from "./icons/logos/Aptos";
import Wallet from './icons/logos/Account'
import Topaz from "./icons/logos/Topaz";
import TriggerCard from "./TriggerCard";

export default function Triggers({ handleChildProps }) {
  const [open, setOpen] = useState(null);
  const [closeCard, setCloseCard] = useState(null);

  const cards = [
    {
      title: "Account",
      desc: "Track Account Liquidity",
      img: <Account />,
    },
    {
      title: "Aptos",
      desc: "Track APT price",
      img: <Aptos />,
    },
    {
      title: "Wallet",
      desc: "Track new transaction",
      img: <Wallet />,
    },
    {
      title: "Topaz",
      desc: "Track NFT floor price",
      img: <Topaz />,
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
    setOpen(null);
    handleChildProps({ trigger: null });
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
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}
