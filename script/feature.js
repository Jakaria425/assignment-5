function donateValidation(input){
    if( input>0){
        return true
    }
    else{
        return false
    }
}
function transactionValidation(myAccountBalance, transferAmount){
    if(myAccountBalance > transferAmount){
        return true
    }
    else{
        return false
    }
}
function transactionProcess(donationForNoakhali, myAccountBalance, noakhaliWalet, donatePlace,historyPlace){
    if(donateValidation(donationForNoakhali)){
        
        if(transactionValidation(myAccountBalance, donationForNoakhali)){
            document.getElementById("myAccountBalance").innerHTML = myAccountBalance - donationForNoakhali
            document.getElementById(donatePlace).innerHTML = noakhaliWalet + donationForNoakhali
            transactionHistory(donationForNoakhali, historyPlace)
            document.getElementById('modal').showModal();
        }
        else{
            alert("Insufficient Balance")
        }
    }
    else{
        alert("Invalid input")
    }
}

function transactionHistory(amountHistory, historyPlace) {
    const currentDate = new Date();
    const donationTime = currentDate.toString()
    const historyMain = document.getElementById("historyMain");
    const newTransactionHistory = document.createElement("div");
    newTransactionHistory.classList.add("h-36", "max-w-4/5", "rounded-lg", "h-boder", "p-5");
  
    newTransactionHistory.innerHTML =`<h2 class="font-bold mt-6">
        ${amountHistory} Taka is Donated for
        ${historyPlace}, Bangladesh
      </h2>
      <h3 class="mt-4">Date : <span id="donationTime">${donationTime}</span></h3>
      `;
  
    historyMain.appendChild(newTransactionHistory);
}
