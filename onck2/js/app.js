
function checkName() {
    let name = document.getElementById('inputName').value;
    let pattern = /^[A-Z][a-z]+( [A-Z][a-z]*){1,}$/;
    if (name === "") {
        document.getElementById('errName').innerHTML = "Họ tên không được để trống";
        return false;
    } else {
        if (pattern.test(name)) {
            document.getElementById('errName').innerHTML = "";
            return true;
        }else {
            document.getElementById('errName').innerHTML = "Họ tên tối thiểu 2 từ và viết hoa chữ cái đầu";
            return false;   
        }    
    } 
}
function checkPhone() {
    let num = document.getElementById('inputPhone').value;
    let pattern = /^[0-9]{10}$/;
    if (num === "") {
        document.getElementById('errPhone').innerHTML = "Số điện thoại không được để trống";
        return false;
    } else {
        if (pattern.test(num)) {
            document.getElementById('errPhone').innerHTML = "";
            return true;
        }else {
            document.getElementById('errPhone').innerHTML = "Số điện thoại bao gồm 10 số";
            return false;   
        }    
    } 
}
function checkEmail() {
    let email = document.getElementById('inputEmail').value;
    let pattern = /^[A-Za-z0-9]+(@[A-Za-z0-9.]{3,})\.com$/;
    if (email === "") {
        document.getElementById('errEmail').innerHTML = "Email không được để trống";
        return false;
    } else {
        if (pattern.test(email)) {
            document.getElementById('errEmail').innerHTML = "";
            return true;
        }else {
            document.getElementById('errEmail').innerHTML = "Email có dạng emailname@mailsever.com";
            return false;   
        }    
    } 
}
function checkAddress() {
    let a = document.getElementById('inputAddress').value;
    if(a === ""){
        document.getElementById('errAddress').innerHTML = "Địa chỉ không được để trống";     
        return false;
    }else {
        document.getElementById('errAddress').innerHTML = "";  
        return true;   
    }
}
function checkYear() {
    let y = new Date( document.getElementById('inputYear').value);
    let ht = new Date();
    if( document.getElementById('inputYear').value === ""){
        document.getElementById('errYear').innerHTML = "Năm không được để trống";     
        return false;
    } else if( ht.getFullYear() < y.getFullYear()) {
        document.getElementById('errYear').innerHTML = "";     
        return true;
    } else{
        document.getElementById('errYear').innerHTML = "Năm du hoc phải lớn hơn năm hiện tại";     
        return false;
    }
}
function select() {
    let point = 0;
    let p = document.getElementsByName('place');
    for (let i = 0; i < p.length; i++) {
        if(p[i].checked === true){
            point = 1;
            return true;
        }    
    }
    if(point === 0){
        alert('Vui long chon');
        return false;
    }
}
let stt=4;
function ketqua() {
    
    if(checkName() && checkPhone() && checkEmail() && checkAddress() && checkYear() && select()){
        let p = "";
        let ppp = document.querySelector('input[name="place"]:checked')
        if(ppp){
        p=ppp.value;
        }
        let name = document.getElementById('inputName').value;
        let num = document.getElementById('inputPhone').value;
        let email = document.getElementById('inputEmail').value;
        let a = document.getElementById('inputAddress').value;
        let y = document.getElementById('inputYear').value;
    
        let row_moi = "<tr><td>" + stt + "</td><td>" + name + "</td><td>" + num + "</td><td>" + email + "</td><td>"
        + a + "</td><td>" + y + "</td><td>" + p + "</td></tr>";
        
        document.getElementById('tbl').innerHTML+=row_moi;
        stt++;
    } 
}

let s = document.querySelector('.check');
console.log(s);
s.addEventListener('click', function(e){
    e.preventDefault();
    ketqua() ;
})