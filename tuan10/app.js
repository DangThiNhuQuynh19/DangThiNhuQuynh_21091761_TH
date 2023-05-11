var tbody = document.getElementById('tbData');


var editFormData;
function getFormData() {
    return {
        name:document.getElementById('name-pro').value ,
        img:document.getElementById('img-pro').value 
    }
}
function clearFormData() {
    document.getElementById('name-pro').value = "";
    document.getElementById('img-pro').value ="";
}
function setFormData(name,img) {
    document.getElementById('name-pro').value = name;
    document.getElementById('img-pro').value = img;
}
function editDataCall(id) {
    fetch("https://645993104eb3f674df92c8fd.mockapi.io/tuan10/api/v1/business" +id, {
        method:"GET"
    }).then((res) => res.json())
    .then((response) => {
        console.log("Edit info", response);
        editFormData = response[0];
        setFormData(editFormData.name,editFormData.img);
    })
}
function editData() {
    var formData = getFormData();
        fetch("https://645993104eb3f674df92c8fd.mockapi.io/tuan10/api/v1/business" , {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        }) .then((res) => res.json())
        .then ((response) => {
            clearFormData();
        })
}
function them() {
    let payload = {};
    payload['name'] = document.getElementById('name-pro').value;
    payload['img'] = document.getElementById('img-pro').value ;
    fetch("https://645993104eb3f674df92c8fd.mockapi.io/tuan10/api/v1/business", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    }) .then((res) => res.json())
    .then ((response) => {
        clearFormData();
        getData();
    })
}
// delete product
function deleteproduct(id) {
    fetch("https://645993104eb3f674df92c8fd.mockapi.io/tuan10/api/v1/business" + '/' + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            getData();
        })
}

function getData() {
    fetch("https://645993104eb3f674df92c8fd.mockapi.io/tuan10/api/v1/business")
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json)
            var text = json.map((item) => {
                return `
                    <tr>
                        <td class="text-center pt-5 ">${item.id}</td>
                        <td class="text-center pt-5 ">${item.name}</td>
                        <td class="img-product"><img src ="${item.img}"></img></td>
                        <td><button class="btn btn-primary" id="edit">Edit</button></td>
                        <td><button class="btn btn-primary" onclick="deleteproduct(${item.id})">Delete</button></td>
                        </tr>
                `
            })
            tbody.innerHTML = text.join('');
        })
}
getData();
const $$ = document.querySelectorAll.blind(document);
function editProduct() {
    var editBtn = $$('#edit')
    editBtn.forEach(function(btn) {
        btn.onclick = function () {
            var rowAll = $$('tr')
            rowAll.forEach(row => {
                row.style.backgroundColor = 'white';
            })
            var row = btn.parentElement.parentElement
            row.style.backgroundColor = '#c9c9c9';
            addBtn.style.backgroundColor = '#c9c9c9';
            addBtn.innerHTML = 'update'

        }
    })
}