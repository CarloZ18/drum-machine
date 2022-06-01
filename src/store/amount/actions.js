import { bankOne, bankTwo } from "../../data/dataBase";

const bank1 = () => {
  return {
    type: "BANK_ONE",
    payload: bankOne,
  };
};

const bank2 = () => {
  return {
    type: "BANK_TWO",
    payload: bankTwo,
  };
};

const powerOn = () => {
  return {
    type: "POWER_ON",
    payload: true,
  };
};

const powerOff = () => {
  return {
    type: "POWER_OFF",
    payload: false,
  };
};

export { bank1, bank2, powerOff, powerOn };
