import { Invoice } from "./Classes/Invoice.js";
import { Payment } from "./Classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Yoshi", "Snoring", 250);
docTwo = new Payment("Mario", "Dancing", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);
