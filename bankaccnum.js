const cashWithdrawal = (pin, amount) => {
    console.log(`Withdrawing ${amount} from account ${pin}`);
    if (pin == 1234){
        console.log("pin correct");
    
    } else {
    console.log("pin isn't correct");
    }
}
   
   cashWithdrawal(300, 50449921);
   cashWithdrawal(30, 50449921);
   cashWithdrawal(200, 50447921);
