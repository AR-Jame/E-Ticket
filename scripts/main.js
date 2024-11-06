function btnSelect(event) {
    const selectedBtn = event.target.classList;
    const selectedBtnInner = event.target.innerText;
    if (!selectedBtn.contains("bg-[#1DD100]") && parseInt(updateValue) < 4) {
        selectedBtn.remove("bg-[#F7F8F8]");
        selectedBtn.add("bg-[#1DD100]");
        selectedBtn.add("text-white");
        console.log(parseInt(updateValue))
        NumChange("selectedSeat", "+");
        NumChange("decrementSeatCount", "-")

        let forNew = document.getElementById("forNew")
        let newDiv = document.createElement("div");
        newDiv.classList.add("newElement");
        forNew.appendChild(newDiv)


        const newP1 = createP(selectedBtnInner);
        const newP2 = createP("Economy")
        const newP3 = createP("550")
        newDiv.appendChild(newP1);
        newDiv.appendChild(newP2);
        newDiv.appendChild(newP3);


        const total = document.getElementById("total");
        let totalNum = parseInt(total.innerText);
        totalNum = totalNum + parseInt(newP3.innerText)
        total.innerText = totalNum
        grand.innerText = totalNum

    }
    checking()
    coupon()
}

let grand = document.getElementById("grand")
const Name = document.getElementById("inpName");
const Phone = document.getElementById("inpPhone");
const nextBtn = document.getElementById("nextBtn");
const inpCoupon = document.getElementById("inpCoupon");
const applyBtn = document.getElementById("applyBtn");
const grandDiv = document.getElementById("grandDiv");

let inpValue = "";
inpCoupon.addEventListener("keyup", function () {
    inpValue = inpCoupon.value;
    return inpValue
})

applyBtn.addEventListener("click", function () {
    grandValue = parseInt(grand.innerText)
    if (inpValue == "NEW15") {
        grand.innerText = grandValue - grandValue * 15 / 100;
        grandDiv.classList.add("hidden")
    }
    else if (inpValue == "Couple20") {
        grand.innerText = grandValue - grandValue * 20 / 100;
        grandDiv.classList.add("hidden")
    }

})
Name.addEventListener("keyup", checking);
Phone.addEventListener("keyup", checking)

function coupon() {
    if (updateValue == 4) {
        applyBtn.removeAttribute("disabled");
        inpCoupon.removeAttribute("disabled")
    }
}

function checking() {
    if (Name.value !== "" && Phone.value !== "" && parseInt(updateValue) > 0) {
        nextBtn.removeAttribute("disabled")
    }
    else {
        nextBtn.setAttribute("disabled", "disabled");
    }
}