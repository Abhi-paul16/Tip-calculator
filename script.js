let bill = document.getElementById('bill');
let peoples = document.getElementById('no-of-peoples')
let DefaultTip = document.querySelectorAll('.tip');
let tipPerperson = document.getElementById('tip-per-person')
let Totalperperson = document.getElementById('total-per-person')
let customTip = document.getElementById('custom')
let resetbtn = document.getElementById('reset')


// Default tip 
DefaultTip.forEach((tip) => {
    tip.addEventListener('click', tipCalc)
})

function tipCalc(e) {

    let SelectedTip = e.target.innerText;
    let ActualBill = bill.value;
    let NoOfPeoples = peoples.value;

    let Tipamount = (parseInt(ActualBill) * SelectedTip) / 100;
    // pp stands for per person

    let TipamountPP = Tipamount / NoOfPeoples;

    tipPerperson.innerHTML = Math.round(TipamountPP);
    let TotalPP = (parseInt(ActualBill) + Tipamount) / NoOfPeoples;
    Totalperperson.innerHTML = Math.round(TotalPP);

}

//custom Tip 

customTip.addEventListener('input', tip)

function tip(e) {
    let CustomTip = e.target.value
    let ActualBill = bill.value;
    let NoOfPeoples = peoples.value;
    let Tipamount = (parseInt(ActualBill) * parseInt(CustomTip)) / 100;
    let TipamountPP = Tipamount / NoOfPeoples;
    tipPerperson.innerHTML = Math.round(TipamountPP);
    let TotalPP = (parseInt(ActualBill) + Tipamount) / NoOfPeoples;
    Totalperperson.innerHTML = Math.round(TotalPP);
}

// Reset btn

resetbtn.addEventListener('click', reset)


function reset() {
    bill.value = "";
    customTip.value = "";
    peoples.value = "";
    tipPerperson.innerHTML = '$0.00';
    Totalperperson.innerHTML = '$0.00';

}