// step 01
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 02
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // if(isNaN(newDepositAmountString)){
    //     return alert('Please Enter Number value only')
    // };
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 03
     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);

    //  step 04

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step 05 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalaneTotal = parseFloat(previousBalanceTotalString);

    // step 06

    const currentBalanceTotal = previousBalaneTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value ='';


});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const widthdrawField = document.getElementById('widthdraw-field');
    const newWidthdrawAmountString = widthdrawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);
    // step 03
     const widthdrawTotalElement = document.getElementById('withdraw-total');
     const previouswidthdrawTotalString = widthdrawTotalElement.innerText;
     const previouswidthdrawTotal = parseFloat(previouswidthdrawTotalString);

    //  step 04

    const currentwidthdrawTotal = previouswidthdrawTotal + newWidthdrawAmount;

    widthdrawTotalElement.innerText = currentwidthdrawTotal;

    // step 05 

    const balancedTotalElement = document.getElementById('balance-total');
    const previousBalance2TotalString = balancedTotalElement.innerText;
    const previousBalanedTotal = parseFloat(previousBalance2TotalString);

    // step 06

    const currentBalancedTotal = previousBalanedTotal - newWidthdrawAmount;
    balancedTotalElement.innerText = currentBalancedTotal;






    widthdrawField.value ='';
})