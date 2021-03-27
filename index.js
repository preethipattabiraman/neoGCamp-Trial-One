function changeHeader() {
    document.getElementById("header").innerText = "Let's update some content!";
}

function checkPrime() {
    let dob = document.getElementById("dob").value;
    let d = dob.split("-");
    let date = parseInt(d[0]);
    let month = parseInt(d[1]);
    if(isPrime(date) && isPrime(month)) {
        window.alert("Both are prime!");
    } 
    else {
        if(isPrime(date)) {
            window.alert("Your date is prime.");
        }
        else if(isPrime(month)) {
            window.alert("Your month is prime.");
        }
        else {
            window.alert("oops.");
        }
    }
}

function isPrime(num) {
    let i = 2;
    for(; i < num ; i++) {
        if(num %i == 0) {
            return false;
        }
    }
    return true;
}