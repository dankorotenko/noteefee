import React from "react";
import arrowRight from '../assets/icons/la_angle-down.svg'
import account from '../assets/account.svg'
import aptos from '../assets/aptos.svg'
import wallet from '../assets/wallet.svg'
import topaz from '../assets/topaz.svg'

export default function TriggerCard() {
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
