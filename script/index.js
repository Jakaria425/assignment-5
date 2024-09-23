document.getElementById("historyBtn").addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById("historyMain").classList.remove("hidden")
    document.getElementById("donationMain").classList.add("hidden")

    document.getElementById("historyBtn").classList.add("bg-btn")
    document.getElementById("donationBtn").classList.remove("bg-btn")
})

document.getElementById("donationBtn").addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById("historyMain").classList.add("hidden")
    document.getElementById("donationMain").classList.remove("hidden")

    document.getElementById("historyBtn").classList.remove("bg-btn")
    document.getElementById("donationBtn").classList.add("bg-btn")
})

document.getElementById("donetToNoakhali").addEventListener('click', function(event){
    event.preventDefault()
    const donationForNoakhali = parseFloat(document.getElementById('donationForNoakhali').value)
    const myAccountBalance = parseFloat(document.getElementById("myAccountBalance").innerHTML)
    const noakhaliWalet =  parseFloat(document.getElementById("noakhaliWalet").innerHTML)
    const donatePlace = "noakhaliWalet"
    const historyPlace = "famine-2024 at Feni"
    transactionProcess(donationForNoakhali, myAccountBalance, noakhaliWalet, donatePlace, historyPlace)
})
document.getElementById("donetToFeni").addEventListener('click', function(event){
    event.preventDefault()
    const donationForFeni = parseFloat(document.getElementById('donationForFeni').value)
    const myAccountBalance = parseFloat(document.getElementById("myAccountBalance").innerHTML)
    const feniWalet =  parseFloat(document.getElementById("feniWalet").innerHTML)
    const donatePlace = "feniWalet"
    const historyPlace = "Flood Relief in Feni"
    transactionProcess(donationForFeni, myAccountBalance, feniWalet, donatePlace, historyPlace)
})
document.getElementById("donetToQuata").addEventListener('click', function(event){
    event.preventDefault()
    const donationForQuata = parseFloat(document.getElementById('donationForQuata').value)
    const myAccountBalance = parseFloat(document.getElementById("myAccountBalance").innerHTML)
    const quataWalet =  parseFloat(document.getElementById("quataWalet").innerHTML)
    const donatePlace = "quataWalet"
    const historyPlace = "Aid for Injured in the Quota Movement"
    transactionProcess(donationForQuata, myAccountBalance, quataWalet, donatePlace, historyPlace)
})
