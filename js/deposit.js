document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    if(isNaN(newDepositAmountString)){
        return alert('Please Enter Number value only')
    };
    const newDepositAmount = parseFloat(newDepositAmountString);
     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalaneTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalaneTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value ='';

});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const widthdrawField = document.getElementById('widthdraw-field');
    const newWidthdrawAmountString = widthdrawField.value;

    if(isNaN(newWidthdrawAmountString)){
        return alert('Please Enter Number value only')
    };
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);
   
    const widthdrawTotalElement = document.getElementById('withdraw-total');
    const previouswidthdrawTotalString = widthdrawTotalElement.innerText;
    const previouswidthdrawTotal = parseFloat(previouswidthdrawTotalString);
     
    const balancedTotalElement = document.getElementById('balance-total');
    const previousBalance2TotalString = balancedTotalElement.innerText;
    const previousBalanedTotal = parseFloat(previousBalance2TotalString);
    
    widthdrawField.value ='';

    if(previousBalanedTotal < newWidthdrawAmount){
       return alert('Balance Low');
        
    }

    const currentwidthdrawTotal = previouswidthdrawTotal + newWidthdrawAmount;

    widthdrawTotalElement.innerText = currentwidthdrawTotal;

    const currentBalancedTotal = previousBalanedTotal - newWidthdrawAmount;
    balancedTotalElement.innerText = currentBalancedTotal;
  
});