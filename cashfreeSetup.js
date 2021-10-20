
const Cashfree = require("cashfree-sdk");
env = "TEST"
 
//Initialize Cashfree Payout
let Payouts = Cashfree.Payouts;
Payouts.Init({
    "ENV": "TEST", 
    "ClientID": "95893298a1fc68e8617c98f4439859",
    "ClientSecret": "14a56c64a60ff035af92d3c4a2412db3db8e7382"
});