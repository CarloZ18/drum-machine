import { bankOne, bankTwo } from "../../data/dataBase";

const bankReducer = (state = bankOne, action) => {
  switch (action.type) {
    case "BANK_ONE":
      return bankOne;

    case "BANK_TWO":
      return bankTwo;
    default:
      return state;
  }
};

const powerReducer = (state = true, action) => {
  switch (action.type) {
    case "POWER_ON":
      return true;

    case "POWER_OFF":
      return false;
    default:
      return state;
  }
};

export { bankReducer, powerReducer };
