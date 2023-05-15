function checkSerial() {
    let ma = document.getElementById('inputserial').value;
    let pattern = /^[A-Z_0-9]{6,}$/;
    if (ma === "") {
        return true;
    } else {
        if (pattern.test(ma)) {
            document.getElementById('errSerial').innerHTML = "";
            return true;
        } else {
            document.getElementById('errSerial').innerHTML = "Số serial có thể gồm các ký tự chữ cái hoa, dấu _ và các ký số; chiều dài ít nhất là 6";
            return false;
        }
    }
}
function checkDescription() {
    let des = document.getElementById('inputdescription').value;
    if (des === "") {
        document.getElementById('errDescription').innerHTML = "Khong duoc de trong";
        return false;
    } else {
        document.getElementById('errDescription').innerHTML = "";
        return true;
    }
}
function checkWeight() {
    let w = document.getElementById('inputweight').value;
    let pattern = /^[0-9]+$/;
    var cost =0 ;
    if (w === "") {
        document.getElementById('errWeight').innerHTML = "Khong duoc de trong";
        return false;
    } else if (pattern.test(w)) {
        document.getElementById('errWeight').innerHTML = '';
        if (w > 50) {
            cost = w * 15000;
        } else if (w > 20) {
            cost = w * 30000;
        } else {
            cost = w * 35000;
        }
        document.getElementById('inputCost').value = cost;
        return true;
    }
    else {
        document.getElementById('errWeight').innerHTML = 'Trong luong la so va lon hon 0';
        return false;
    }
}

let stt=1
function ketqua() {
    if(checkSerial() && checkDescription() && checkWeight()) {
        let ma = document.getElementById('inputserial').value;
        let des = document.getElementById('inputdescription').value;
        let hinhanh = document.getElementById('inputimg').value;
        let w = document.getElementById('inputweight').value;
        let cost = document.getElementById('inputCost').value;

        let row_moi = "<tr><td>" + stt + "</td><td>" + ma + "</td><td>" + des
        + "</td><td>" + hinhanh + "</td><td>" + w + "</td><td>" + cost+"</td></tr>";

        document.getElementById('tbl').innerHTML+=row_moi;
        stt++;
    }
}