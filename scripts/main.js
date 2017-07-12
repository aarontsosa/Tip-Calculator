console.log("Hello World");

// function hello(name){
//     if (!name){
//         name = "World"
//     }
//     return "Hello " + name;
// }

// function madLib(name, subject){
//     return name + "'s favorite subject in school is " + subject;
// }

function tipAmount(total, service){
    // service = service.toLowerCase();
    if ((service === "good") || (service === "great") || (service === "amazing") || (service == "excellent") || (service == "acceptable")){
        return  total * .2
    } else if ((service === "fair") || (service == "average") || (service == "reasonable") || (service == "okay") || (service == "ok") ){
        return total * .15
    } else if ((service === "bad") || (service == "horrible") || (service == "worst") || (service == "poor") || (service == "not good")){
        return  total * .1
    } 
}

function totalAmount(total, service){
    return (tipAmount(total, service) + total)
}

function splitAmount(total, service, people){
    var total = Number(document.getElementById('total').value)
    var service = document.getElementById('service').value
    var people = Number(document.getElementById('people').value)
    var final = "" ;
    final +=  "The amount you will tip is $" + tipAmount(total, service);
    final += ". In total that will cost $" + totalAmount(total, service);
    if (people > 1){
        final += ". Since you are spliting it that will be $" + (totalAmount(total, service) / people) + " per person";
    }
    document.write(final);
}