let storedValue = 0
let seenValue = "0"
let inputedOperator = null

button = document.querySelector('.calc-buttons')
display = document.querySelector('.display')


button.addEventListener('click', function(event) {
    buttonClick(event.target.innerText)
})

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    } buffer()
}


function handleNumber(value) {
    if (seenValue === "0") {
        seenValue = value
    } else {
        seenValue += value
    }
}

function handleSymbol(value) {
    switch(value) {
        case "C":
                if (seenValue === "0") {
                    seenValue = "0"
                    storedValue = 0
                    inputedoperator = null
                } else {
                    seenValue = "0"
                }
         break;
         case "=":
            if (inputedOperator === null) {
                seenValue = seenValue
            } else {
            Mathematics(parseInt(seenValue))
            inputedOperator = null
            seenValue = storedValue
            storedValue = 0
            }
            break;
            case "%":
                if (seenValue === "0") {
                    seenValue = "0"
                } else {
                    seenValue = seenValue /100
                }
                break;
                case "←":
                    if (seenValue.length === 1) {
                        seenValue = "0"
                    } else {
                        seenValue = seenValue.substring(0, seenValue.length - 1)
                    }
                    break
                    case ".":
                        if (seenValue === "0") {
                            seenValue = "0."
                        } else if (seenValue === "0." ) {
                        seenValue = seenValue
                        
                        } else {
                            seenValue += "."
                        }
                        break
            default:
                handleMath(value)
                break;
    }
}

function handleMath(value) {
    const intSeenValue = parseInt(seenValue)
    if (storedValue === 0) {
        storedValue = intSeenValue
    } else {
        Mathematics(intSeenValue)
    }
    inputedOperator = value
    seenValue = "0"

}

function Mathematics(intSeenValue){
    if (inputedOperator === "+") {
        storedValue += intSeenValue
    } else if (inputedOperator === "−") {
        storedValue -= intSeenValue
    } else if (inputedOperator === "×") {
        storedValue *= intSeenValue
    } else if (inputedOperator === "÷") {
        storedValue /= intSeenValue
    } else {
        storedValue **= intSeenValue
    }
}

function buffer() {
    display.innerText = seenValue
}