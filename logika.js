let umur = 17;
let KTP = false;
let SIM = false;

let naikMotor = ( umur >= 17) && SIM;

let remaja = (umur >= 13) || !KTP;

console.log("Boleh naik motor : " , naikMotor);
console.log("Status Remaja : " , remaja);