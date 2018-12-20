var tempFahr = prompt("What is the temperature today?")
var eventType = prompt("What type of event are you going to?")
var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event you should wear " 

if (eventType == "casual") {
  result = result + "something comfy"
}

else if (eventType == "semi-formal") {
  result = result + "a polo"
}

else if (eventType == "formal") {
  result = result + "a suit"
}

result = result + " and "


if (Number(tempFahr) <54) {
  result = result + "a coat "
}
else if (Number(tempFahr) >= 54 && Number(tempFahr) <= 70){
  result = result + "a jacket "
}
else {
  result = result + "no jacket  "
}
console.log(result)

