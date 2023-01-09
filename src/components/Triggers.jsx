import React from "react";
import arrowRight from '../assets/icons/la_angle-down.svg'

export default function TriggerCard() {
  const cards = [
    {
      title: "Account",
      desc: "Track Account Liquidity",
      img: "src/assets/account.svg",
    },
    {
      title: "Aptos",
      desc: "Track APT price",
      img: "src/assets/aptos.svg",
    },
    {
      title: "Wallet",
      desc: "Track new transaction",
      img: "src/assets/wallet.svg",
    },
    {
      title: "Topaz",
      desc: "Track NFT floor price",
      img: "src/assets/topaz.svg",
    },
  ];
  return (
    <div className="trigger__body">
      {cards.map(card => (
        <div className="trigger__card" key={card.title}>
        <h4 className="trigger__card_title">
          <img src={card.img} alt={card.img} />
          {card.title}
        </h4>
        <div className="trigger__card_body">
          <p>{card.desc}</p>
          <img src={arrowRight} alt={arrowRight} />
        </div>
      </div>
      ))
      }
    </div>
  );
}
