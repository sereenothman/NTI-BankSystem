// user=[];

// function adduser(){
//     let id=prompt("enter your id")
//     let name=prompt("enter your name")
//     let balance=prompt("enter your balance");

//     user.push({id: id , name:name , balance:balance})
//     console.log(user);
// }

// function edituserbalance(){
//     let id=prompt("enter your id")
//     let balance=prompt("enter your balance");
//     let getuserindx=user.findIndex(item => item.id==id);
//     user[getuserindx].balance=balance;
//     // console.log(user[getuserindx]);
//     console.log(user);
// }
// function deleteuser(){
//     let id=prompt("enter your id");
//     let getuserindx=user.findIndex(item => item.id==id);
//     user.splice(getuserindx, 1)
//     console.log(user);
// }
// adduser();
// adduser();
// edituserbalance();
// deleteuser();



// anther solution
// let users=[];

// function yourbank(){
//     let yourwants= prompt("1-add 2-edit 3-del");
//     if(yourwants==1){add();}
//     else if(yourwants==2){edit()}
//     else if(yourwants==3){del()}
// }
// function add(){
//     let id= prompt("enter your id");
//     let name= prompt("enter your name");
//     let balance= prompt("enter your balance");
//     users.push({id:id , name: name , balance:balance});
//     console.log(users);
// }
// function edit(){
//     let id= prompt("enter your id");
//     let balance= prompt("enter your balance");
//     let user= users.find(item => item.id==id);
//     user.balance=balance;  
//     console.log(users);
// }
// function del(){
//     let id= prompt("enter your id");
//     let delindx= users.findIndex(item => item.id==id)
//     users.splice(delindx,1)
//     console.log(users);
// }

// do{
//     var yourwants= prompt("1-add 2-edit 3-del");
//     if(yourwants==1){add();}
//     else if(yourwants==2){edit()}
//     else if(yourwants==3){del()}
// }
// while(yourwants !=null)

