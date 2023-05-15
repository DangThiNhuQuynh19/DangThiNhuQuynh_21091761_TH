function ktMaSV() {
    let ma = document.getElementById('txtMaSV').value;
    let patten = /^[0-9]{10}$/;
    if (patten.test(ma)) {
        document.getElementById('errMaSV').innerHTML = "";
        return true;
    } else {
        document.getElementById('errMaSV').innerHTML = "Mã gồm 10 chữ số";
        return false;
    }
}
function ktName() {
    let name = document.getElementById('txtHT').value;
    let patten = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
    if (patten.test(name)) {
        document.getElementById('errName').innerHTML = "";
        return true;
    } else {
        document.getElementById('errName').innerHTML = "Viết hoa chữ cái đầu";
        return false;
    }
}
function ktDate() {
    let ngay = new Date();
    let ngaytg = new Date(document.getElementById('dateTG').value);
    if(ngaytg.getDate() - ngay.getDate() <= 7) {
        document.getElementById('errDate').innerHTML = "Ngày tham gia phải sau ngày hiện tại 7 ngày";
        return false;
    } else {
        document.getElementById('errDate').innerHTML = "";
        return true;
       
    }
}
function ktEmail() {
    let email = document.getElementById('txtEmail').value;
    let patten = /^[a-zA-Z0-9]+(@iuh.edu.vn)$/;
    if (patten.test(email)) {
        document.getElementById('errEmail').innerHTML = "";
        return true;
    } else {
        document.getElementById('errEmail').innerHTML = "Email có định dang xxxxxx@iuh.edu.vn";
        return false;
    }
}
function ktPhone() {
    let sdt = document.getElementById('phoneNumber').value;
    let patten = /^[0-9]{10}$/;
    if (patten.test(sdt)) {
        document.getElementById('errPhone').innerHTML = "";
        return true;
    } else {
        document.getElementById('errPhone').innerHTML = "Số điện thoại gồm 10 chữ số";
        return false;
    }
}
let stt=1
    function ketqua() {
        event.preventDefault();
        if(ktMaSV() && ktName() && ktDate() && ktEmail() && ktPhone()) {
            let ma = document.getElementById('txtMaSV').value;
            let name = document.getElementById('txtHT').value;
            let ngaytg = (document.getElementById('dateTG').value);
            let email = document.getElementById('txtEmail').value;
            let sdt = document.getElementById('phoneNumber').value;

            let row_moi = "<tr><td>" + stt + "</td><td>" + ma + "</td><td>"
            + name + "</td><td>" + ngaytg + "</td><td>" + email + "</td><td>"
            + sdt + "</td></tr>";
            document.getElementById('tbl').innerHTML+=row_moi;
            stt++;
        }
    }