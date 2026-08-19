let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let editIndex = -1;

function saveData(){
localStorage.setItem("transactions",JSON.stringify(transactions));
}

function addTransaction(){

let title=document.getElementById("title").value;
let amount=document.getElementById("amount").value;
let date=document.getElementById("date").value;
let type=document.getElementById("type").value;
let category=document.getElementById("category").value;

if(title=="" || amount=="" || date==""){
alert("Fill all fields");
return;
}

let obj={
title,
amount:Number(amount),
date,
type,
category
};

if(editIndex==-1){
transactions.push(obj);
}else{
transactions[editIndex]=obj;
editIndex=-1;
}

saveData();
displayTransactions();

document.getElementById("title").value="";
document.getElementById("amount").value="";
document.getElementById("date").value="";
}

function displayTransactions(){

let list=document.getElementById("list");
list.innerHTML="";

let filter=document.getElementById("filter").value;

let income=0;
let expense=0;

transactions.forEach((t,index)=>{

if(filter!="All" && t.category!=filter)
return;

if(t.type=="Income")
income+=t.amount;
else
expense+=t.amount;

list.innerHTML+=`
<tr>
<td>${t.title}</td>
<td>₹${t.amount}</td>
<td>${t.type}</td>
<td>${t.category}</td>
<td>${t.date}</td>
<td>
<button onclick="editTransaction(${index})">Edit</button>
<button onclick="deleteTransaction(${index})">Delete</button>
</td>
</tr>
`;

});

document.getElementById("income").innerHTML="₹"+income;
document.getElementById("expense").innerHTML="₹"+expense;
document.getElementById("balance").innerHTML="₹"+(income-expense);

}

function deleteTransaction(index){

if(confirm("Delete Transaction?")){

transactions.splice(index,1);

saveData();

displayTransactions();

}

}

function editTransaction(index){

let t=transactions[index];

document.getElementById("title").value=t.title;
document.getElementById("amount").value=t.amount;
document.getElementById("date").value=t.date;
document.getElementById("type").value=t.type;
document.getElementById("category").value=t.category;

editIndex=index;

}

displayTransactions();