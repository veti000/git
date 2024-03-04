function järjestäluvut() {
    let t1num1 = document.getElementById("1num1").value;
    let t1num2 = document.getElementById("1num2").value;
    let t1num3 = document.getElementById("1num3").value;

    let t1list = [t1num1, t1num2, t1num3];
    t1text = t1list.sort();

    document.getElementById("loppu1").innerHTML = t1text;
}

function suurinluku() {
    let t2num1 = document.getElementById("2num1").value;
    let t2num2 = document.getElementById("2num2").value;
    let t2num3 = document.getElementById("2num3").value;
    let t2num4 = document.getElementById("2num4").value;
    let t2num5 = document.getElementById("2num5").value;

    let t2list = [t2num1, t2num2, t2num3, t2num4, t2num5];
    t2list = t2list.sort();

    t2text = t2list[t2list.length - 1];

    document.getElementById("loppu2").innerHTML = t2text;
}

function paritonvaiparillinen() {
    let t3num1 = document.getElementById("3num1").value;

    if (t3num1 % 2 == 0) {
        document.getElementById("loppu3").innerHTML = "Parillinen";
    } else {
        document.getElementById("loppu3").innerHTML = "Pariton";
    }
}

function ajoneuvosi() {
    let t4num1 = document.getElementById("4num1").value;

    if (t4num1 <= 4) {
        document.getElementById("loppu4").innerHTML = "(?_?)";
    } else if (t4num1 >= 5 && t4num1 <= 14) {
        document.getElementById("loppu4").innerHTML = "Polkupyörä";
    } else if (t4num1 >= 15 && t4num1 <= 17) {
        document.getElementById("loppu4").innerHTML = "Mopo";
    } else if (t4num1 >= 18 && t4num1 <= 80) {
        document.getElementById("loppu4").innerHTML = "Auto";
    } else {
        document.getElementById("loppu4").innerHTML = "(?_?)";
    }
}

function käännä() {
    let selection = document.getElementById("selection").value;

    document.getElementById("loppu5").innerHTML = selection;
}