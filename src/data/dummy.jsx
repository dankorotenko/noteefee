import Telegram from "../components/icons/logos/Telegram";
import Aptos from "../components/icons/logos/Aptos";
import Discord from "../components/icons/logos/Discord";
import Slack from "../components/icons/logos/Slack";

export const notifications = [
    {
      id: "cca46713-d4ba-40cb-8255-0c14dd08245d",
      title: "Notification name",
      logos: [<Aptos />, <Telegram />],
      description: "Aptos – Track NFT floor price",
      active: true,
      amount: 13,
    },
    {
      id: "ec8643e4-9610-4c63-900f-0b4b679002ab",
      title: "Disk_15APT",
      logos: [<Aptos />, <Discord />],
      description: "Aptos account balance - below 15 APT",
      active: true,
      amount: 13,
    },
    {
      id: "123ff874-4abd-44ca-9e99-b4224adf4c11",
      title: "Notification name",
      logos: [<Aptos />, <Slack />],
      description: "New account transaction",
      active: false,
      amount: 2,
    },
  ];