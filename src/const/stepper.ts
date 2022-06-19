import { Step } from "types/steps.type";

export const STEPS = {
  CONNECT: "connect",
  JOIN_DISCORD: "join-discord",
  ADD_EMAIL: "add-email",
  CLAIM_NFT: "claim-nft",
  INVITE_FRIENDS: "invite-friends",
};

export const STEPPER = [
  {
    id: "default",
    label: "Loading",
    path: "/",
    next: STEPS.CONNECT,
    disabled: null,
  },
  {
    id: STEPS.CONNECT,
    label: "Connect wallet",
    path: "/connect",
    next: STEPS.JOIN_DISCORD,
    disabled: null,
  },
  {
    id: STEPS.JOIN_DISCORD,
    label: "Join discord",
    path: "/discord",
    next: STEPS.ADD_EMAIL,
    disabled: [STEPS.CONNECT],
  },
  {
    id: STEPS.ADD_EMAIL,
    label: "Add Email",
    path: "/add-email",
    next: STEPS.CLAIM_NFT,
    disabled: [STEPS.CONNECT, STEPS.JOIN_DISCORD],
  },
  {
    id: STEPS.CLAIM_NFT,
    label: "Claim Your nft",
    path: "/claim-nft",
    next: STEPS.INVITE_FRIENDS,
    disabled: [STEPS.CONNECT, STEPS.JOIN_DISCORD, STEPS.ADD_EMAIL],
  },
  {
    id: STEPS.INVITE_FRIENDS,
    label: "Invite friends",
    path: "/invite",
    next: null,
    disabled: [
      STEPS.CONNECT,
      STEPS.JOIN_DISCORD,
      STEPS.ADD_EMAIL,
      STEPS.CLAIM_NFT,
    ],
  },
];

export const getStep = (id: Step) => {
  return STEPPER.find((item) => item.id === id);
};
