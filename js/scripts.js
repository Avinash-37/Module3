const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('itemDisplay');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);

     }



form.addEventListener('submit', function (e) {
  e.preventDefault();
if(input.value !=""){

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
    }
    else{
        alert("Please enter value in box");
    }
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});

 //******************************************************************************************
 /* var chk = document.createElement('input');  
        chk.setAttribute('type', 'checkbox');
      var lbl = document.createElement('label');  
            lbl.setAttribute('for', 'prodName' + id);
            lbl.appendChild(document.createTextNode(input.value));
            ul.appendChild(chk);
            li.appendChild(lbl);
     */       
///*************************************************************************************************
   var d = new Date("October 13, 2014 11:13:00");
document.getElementById("timeDate").innerHTML = d;
