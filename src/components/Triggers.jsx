import React, { useEffect, useState } from "react";

import { cards} from '../data/dummy'

import TriggerCard from "./TriggerCard";

export default function Triggers({ handleChildProps }) {
  const [open, setOpen] = useState(null);
  const [closeCard, setCloseCard] = useState(null);


  const handleOpen = (i) => {
    setOpen(i);
    handleChildProps({ trigger: cards[0].title.toLowerCase() });
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
          setCloseCard={setCloseCard}
        />
      ))}
    </div>
  );
}
