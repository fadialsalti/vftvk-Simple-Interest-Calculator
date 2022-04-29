function compute() {
    p = document.getElementById("principal");
    // validating for only positive values
    if (p.value == 0 || p.value < 0){
        alert("Enter a positive number");
        p.focus();
        document.getElementById("result").innerHTML = "";
        return false;
    }
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // showing calculation results under the button
    document.getElementById("result").innerHTML = "<br\><br\>If you deposit <mark>" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + "</mark>%\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";
}

function updateRate() {
    // update the rate slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
