import { Invoice } from "./Classes/Invoice.js";
const invOne = new Invoice("Mario", "sleeping", 250);
const invTwo = new Invoice("Luigi", "eating", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
