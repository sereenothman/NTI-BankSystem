let users = [];
let tbl = document.getElementById("tabl");
let tabl = document.createElement("table");
let tr1 = document.createElement("tr")
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
th1.innerText = "ID";
th2.innerText = "Name";
th3.innerText = "Balance";
th4.innerText = "Action";
th1.classList.add("wid");
th2.classList.add("wid");
th3.classList.add("wid");
th4.classList.add("wid");

tr1.append(th2);
tr1.append(th1);
tr1.append(th3);
tr1.append(th4);
tabl.append(tr1);
tbl.append(tabl)


function add() {
    var idinp = document.getElementById("yrid").value;
    var nameinp = document.getElementById("yrname").value;
    var balinp = document.getElementById("yrbalance").value;
    users.push({ id: idinp, name: nameinp, balance: balinp });

    console.log(users);
    document.getElementById("yrid").value = "";
    document.getElementById("yrname").value = "";
    document.getElementById("yrbalance").value = "";
}
function edit() {
    let id = prompt("enter your id");
    let balance = prompt("enter your balance");
    let user = users.find(item => item.id == id);
    user.balance = balance;
    console.log(users);
}
function del() {
    let id = prompt("enter your id");
    let delindx = users.findIndex(item => item.id == id)
    users.splice(delindx, 1)
    console.log(users);
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    
    add();
    

    // for (var i = 0; i < users.length; i++) {

        let d1 = document.createElement("td");
        let d2 = document.createElement("td");
        let d3 = document.createElement("td");
        var d4 = document.createElement("td");
        var btn1 = document.createElement("button");
        var btn2= document.createElement("button");

        d1.innerText = users[users.length-1].id;
        d2.innerText = users[users.length-1].name;
        d3.innerText = users[users.length-1].balance;
        btn1.innerHTML = "Delete";
        btn2.innerHTML="Edit";
        d4.append(btn1);
        d4.append(btn2);

        d1.classList.add("widhr");
        d2.classList.add("widhr");
        d3.classList.add("widhr");
        d4.classList.add("widhr");
        // btn1.classList.add("widdd")
        let arr = [d1, d2, d3, d4]
        let tr = document.createElement("tr");
        for (j = 0; j < 4; j++) {
            tr.append(arr[j]);
        }
        tabl.append(tr);
        tbl.append(tabl)

    // }
    btn1.addEventListener("click" , function(e){
        del();
    })
    btn2.addEventListener("click" , function(){
        edit();
    })
})


// do{
//     var yourwants= prompt("1-add 2-edit 3-del");
//     if(yourwants==1){add();}
//     else if(yourwants==2){edit()}
//     else if(yourwants==3){del()}
// }
// while(yourwants !=null)