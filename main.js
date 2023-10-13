
class BankAccount{
	
	constructor(accountnumber,balance){
		this.accountnumber=accountnumber;
		this.balance=balance;
	}
	
	deposite(amount){
		console.log(`your bank account number is ${this.accountnumber}`);
		console.log(`your bank balance is ${this.balance}`);	
		
        this.balance +=amount;
		console.log(`Deposit Amount : ${this.balance}`);
	}
	withdraw(amount){
		this.balance -=amount;
		console.log(`balance Amount : ${this.balance}`);
	}
	
}
let ans=new BankAccount("IOB2345",1500);
ans.deposite(500)
ans.withdraw(400)
