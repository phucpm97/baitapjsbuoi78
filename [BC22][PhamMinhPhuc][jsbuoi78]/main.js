var numberList = [];

document.getElementById("btnThemso1").onclick = function() {
    var number = document.getElementById("txt_number").value * 1;
    numberList.push(number);
    console.log(numberList);
}
document.getElementById("btnKetquaMang").onclick = function() {
    console.log(numberList)
    document.getElementById("footerCardKqMang").innerHTML = numberList;
}

document.getElementById("btnKetqua1").onclick = function() {
    var tong = 0;
    for (var i = 0; i < numberList.length; i++) {
        {
            if (numberList[i] >= 0) {
                tong += numberList[i];
                console.log("numberList");
            }
        }
    }
    console.log(tong);
    document.getElementById("footerCard").innerHTML = tong;
}

document.getElementById("btnKetqua2").onclick = function() {
    var demso = 0;
    for (var i = 0; i < numberList.length; i++) {
        {
            if (numberList[i] > 0) {
                console.log("numberList");
                demso++;
            }
        }
    }
    console.log(demso);
    document.getElementById("footerCard2").innerHTML = demso;
}
document.getElementById("btnKetqua3").onclick = function() {

    min = numberList[0];
    for (var i = 0; i < numberList.length; i++) {
        {
            if (numberList[i] < min) {
                min = numberList[i]
                console.log("numberList");
            }
        }
    }
    console.log(min);
    document.getElementById("footerCard3").innerHTML = min;
}
document.getElementById("btnKetqua4").onclick = function() {
    var max = 0;
    for (var j = 0; j < numberList.length; j++) {
        if (max < numberList[j]) {
            max = numberList[j];
        }
    }
    var min = max;
    for (var i = 1; i < numberList.length; i++) {
        if (numberList[i] > 0 && numberList[i] < min) {
            min = numberList[i];
        }
    }
    document.getElementById("footerCard4").innerHTML = min;
}

document.getElementById("btnKetqua5").onclick = function() {
    var sochan = "-1";
    for (var i = 0; i < numberList.length; i++) {
        {
            if (numberList[i] % 2 === 0) {
                sochan = numberList[i];
                console.log("numberList");
            } else {
                console.log("numberList2");
            }
        }
    }
    console.log(sochan);
    document.getElementById("footerCard5").innerHTML = sochan;
}
document.getElementById("btnKetqua6").onclick = function() {
    var number1 = document.getElementById("txt_number6Vitri1").value * 1;
    var number2 = document.getElementById("txt_number6Vitri2").value * 1;
    var hoanvi = 0;

    console.log(numberList[number1 - 1]);


    console.log(numberList[number2 - 1]);

    hoanvi = numberList[number1 - 1];
    numberList[number1 - 1] = numberList[number2 - 1];
    numberList[number2 - 1] = hoanvi;
    console.log(numberList[number1 - 1], numberList[number2 - 1]);

    console.log(numberList);
    document.getElementById("footerCard6").innerHTML = numberList;
}
document.getElementById("btnKetqua7").onclick = function() {
    for (var i = 0; i < numberList.length - 1; i++) {
        for (var j = i + 1; j < numberList.length; j++) {
            if (numberList[i] > numberList[j]) {
                var hoanvi = numberList[i];
                numberList[i] = numberList[j];
                numberList[j] = hoanvi;
            }
        }
    }
    console.log(numberList);
    document.getElementById("footerCard7").innerHTML = numberList;
}
document.getElementById("btnKetqua8").onclick = function() {
    var count = 0;
    var SoNuyenTo = -1;
    for (var i = 0; i < numberList.length && count == i; i++) {
        if (numberList[i] > 1 && numberList[i] == Math.floor(numberList[i])) {
            var SoNuyenTo = numberList[i];
            count = i;
            console.log("hello");
            // console.log(SoNuyenTo);
        } else { count++; }
    }

    document.getElementById("footerCard8").innerHTML = SoNuyenTo;
}
document.getElementById("btnKetqua9").onclick = function() {
    var count = 0;
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] == Math.floor(numberList[i]) && numberList[i] > 1) {
            count++;
        }
    }
    // console.log(count);
    document.getElementById("footerCard9").innerHTML = count;
}
document.getElementById("btnKetqua10").onclick = function() {
    var SoAm = 0;
    var SoDuong = 0;
    for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] >= 0) {
            console.log("soduong");
            SoDuong++;
        } else {
            console.log("soam");
            SoAm++;
        }
    }
    if (SoDuong > SoAm) {
        document.getElementById("footerCard10").innerHTML = "Số dương nhiều hơn số âm";
    } else if (SoDuong < SoAm) {
        document.getElementById("footerCard10").innerHTML = "Số âm nhiều hơn số dương";
    } else {
        document.getElementById("footerCard10").innerHTML = "Số dương và số âm bằng nhau";
    }
    // console.log(count);
    // document.getElementById("footerCard10").innerHTML = count;
}