function checkCode() {
    let ma = document.getElementById('inputCode').value;
    let pattern = /^PE160000+([0-9]{4}(DN|GD))$/;
    if (pattern.test(ma)) {
        document.getElementById('errCode').innerHTML = "";
        return true;
    } else {
        document.getElementById('errCode').innerHTML = "Mã khách hàng có dạng PE160000XXXX(DN|GD)";
        return false;
    }
}
function checkName() {
    let name = document.getElementById('inputName').value;
    let pattern = /^[A-Z][a-z]+( [A-Z][a-z]+){1,}$/;
    if (pattern.test(name)) {
        document.getElementById('errName').innerHTML = "";
        return true;
    } else {
        document.getElementById('errName').innerHTML = "Tên tối thiểu 2 từ và viết hoa chữ cái đầu";
        return false;
    }
}
function checkCus() {
    let flag = 0;
    let kh = document.getElementsByName('customer');
    for (let i = 0; i < kh.length; i++) {
       if(kh[i].checked === true){
            document.getElementById('errCus').innerHTML = "";
            flag = 1;
            return true;
       }   
    }
    if(flag === 0){
        document.getElementById('errCus').innerHTML = "Vui lòng chọn khách hàng";
        return false;
    }
}
function km() {
    let km = document.getElementsByName('discount');
    let khuyenmai;
    for (let i = 0; i < km.length; i++) {
        if(km[i].checked === true){
            khuyenmai = km[i].value;
        } else {
            khuyenmai = 0;
        }    
    }
    return khuyenmai;
}
function chiSo() {
    let m = document.getElementById('inputmonth').value;
    let chiso;
    if(m == 1){
        chiso = 121;
    } else if (m == 2){
        chiso = 130;
    } else if(m == 3){
        chiso = 189;
    } else if (m == 4){
        chiso = 154;
    } else {
        chiso = document.getElementById('errMonth').innerHTML = "Chưa tới kỳ thanh toán";
    }
    return chiso;
}
function checkChiSo() {
    let m = document.getElementById('inputmonth').value;
    let chiso = 0;
    if(m == 1){
        chiso = 121;
        document.getElementById('inputNum').value = chiso;
        document.getElementById('errMonth').innerHTML = "";
        return true;
    } else if (m == 2){
        chiso = 130;
        document.getElementById('inputNum').value = chiso;
        document.getElementById('errMonth').innerHTML = "";
        return true;
    } else if(m == 3){
        chiso = 189;
        document.getElementById('inputNum').value = chiso;
        document.getElementById('errMonth').innerHTML = "";
        return true;
    } else if (m == 4){
        chiso = 154;
        document.getElementById('inputNum').value = chiso;
        document.getElementById('errMonth').innerHTML = "";
        return true;
    } 
    else {
        document.getElementById('inputNum').value = "";
        document.getElementById('errMonth').innerHTML = "Chưa tới kỳ thanh toán";
        return false;
    }

}
let stt = 2;
function ketqua() {
    if(checkCus() && checkCode() && checkName() && checkChiSo()){
        let ma = document.getElementById('inputCode').value;
        console.log(ma);
        let name = document.getElementById('inputName').value;
        let month = document.getElementById('inputmonth').value;
        let m = document.getElementById('inputmonth').value;
        let cus="";
        let customer = document.querySelector('input[name="customer"]:checked')
        if(customer){
            cus = customer.value;
        }

        let row_moi = "<tr><td>" + stt + "</td><td>" + cus + "</td><td>" + ma + "</td><td>" + name + "</td><td>" + month + "</td><td>" + 
        m + "</td><td>" + km() + "</td></tr>";

        document.getElementById('tbl').innerHTML += row_moi;
    }
    stt++;
}