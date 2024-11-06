
let updateValue = 0;
function NumChange(id, sign) {
    const Id = document.getElementById(id)
    if (sign == "+") {
        const Text = parseInt(Id.innerText);
        Id.innerText = Text + 1
        updateValue = Id.innerText
    }
    else if (sign == "-") {
        const Text = parseInt(Id.innerText);
        Id.innerText = Text - 1
    }
}

function createP(text) {
    const New = document.createElement("p");
    New.innerText = text;
    return New
}