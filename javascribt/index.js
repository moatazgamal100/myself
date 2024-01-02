// function getElement(numberofelement, id) {
//     var cartona = "";
//     for (var i = 0; i < numberofelement; i++){
//         cartona += "<h2> hello from java .</h2>";
//     }
//     document.getElementById(id).innerHTML = cartona;
// }
// getElement(3, "demo1");
// getElement(5, "demo2");
// getElement(7, "demo3");
// getElement(9, "demo4");

// var user = {
//     name: "moataz",
//     age: 25,
//     training:{train_name:"ITI",train_duration:"four months"},
//     eat: function (meal) {
//         console.log(user.name+" eat "+meal);
//     }
// }
// console.log(user.eat("breakfast"));

// var arr = [
//     { user_name: "moataz", age: 24, gender: "male", salary: 5000 },
//     { user_name: "mahmoud", age: 26, gender: "male", salary: 1000 },
//     { user_name: "mohamed", age: 28, gender: "male", salary: 20000 },
//     {user_name:"saida",age:62,gender:"female",salary:60000},
// ]
// for (let i = 0; i < arr.length; i++) {
//     console.log("my name is " + arr[i].user_name + " and my age is " + arr[i].age);
// }


// var arr = ["ahmed", "mohamed", "mahmoud", "moataz"];
// var count = arr.push("gamal", "ali");
// var count = arr.unshift("gamal", "ali");
// var check = arr.indexOf("gamall");
// var check = arr.includes("gamal");
// console.log(check);
// var count = arr.pop();
// var count = arr.shift();
// var new_arr=arr.slice(2)
// var new_arr=arr.splice(2,2,"hanny","diab")
// console.log(count);
// console.log(arr);
// console.log(new_arr);


// //bubbling بيكون عامل شبه الفقاعه كده الايفنت بيتنفذ على اللى فوق منه وكذا لحد مايوصل للاخر
// //capturing عكس البابل بيبتدى من البارنت وينزل للعنصر اللى انا عامل عليه الايفنت
// var myHeader = document.querySelector("h2");
// var mySpan = document.querySelector("span");
// myHeader.addEventListener("click", function (event) {
//     event.stopPropagation(); //to stop event bubbling | capturing
//     console.log("hello from h2");
// },false)//capturing
// mySpan.addEventListener("click", function (event) {
//     //event bubbling
//     event.stopPropagation(); //to stop event bubbling | capturing
//     console.log("hello from span");
// },true)//capturing

//type of events
// // 1-click  on click on the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("click", function (event) {
//     console.log("hello");
// })
///////////////////////////
// // 2-dblclick  on double click on the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("dblclick", function (event) {
//     console.log("hello");
// })
////////////////////////////////////
// // 3-mouseenter  on mouse enter to the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("mouseenter", function (event) {
//     console.log("hello");
// })
////////////////////////////////
// 4-mouseleave  on mouse leave from the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("mouseleave", function (event) {
//     console.log("hello");
// })
////////////////////////////////
// // 5-mousedown  during the click to the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("mousedown", function (event) {
//     console.log("hello");
// })
//////////////////////////////
// 6-mouseup  after the mouse click to the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("mouseup", function (event) {
//     console.log("hello");
// })
// //////////////////////////////
// 7-mousemove  during moving through the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("mousemove", function (event) {
//     console.log("hello");
// })
// //////////////////////////////
// 8-contextmenu  when click right click to the element
// var myImag = document.querySelector("img");
// myImag.addEventListener("contextmenu", function (event) {
//     event.preventDefault();//prevent default behavior of the event
//     console.log("hello");
// })
//////////////////////////////
// 9-drag  during drag element
// var myImag = document.querySelector("img");
// myImag.addEventListener("drag", function (event) {
//     console.log("hello");
// })
//////////////////////////////////////////////////////////
//type of keyboard event
// // 1- keydown when click to any button in keyboard
// document.addEventListener("keydown", function (event) {
//     console.log(event.key);
// })
////////////////////////////////////////////////////////
// // 2- keypress when click to the letter or num button in keyboard
// document.addEventListener("keypress", function (event) {
//     console.log(event.key);
// })
///////////////////////////////////////////////////////////
// // 3- keyup after click to any button in keyboard
// document.addEventListener("keyup", function (event) {
//     console.log(event.key);
// })
///////////////////////////////////////////////////////
//type of input event
// // 1- focus after enter to input
// var myinput = document.querySelector("input");
// myinput.addEventListener("focus", function (event) {
//     console.log("helo");
// })
// // 2- blur after leave from input
// var myinput = document.querySelector("input");
// myinput.addEventListener("blur", function (event) {
//     console.log("helo");
// })
/////////////////////////////////////////
// // 3- input when change any thing in input
// var myinput = document.querySelector("input");
// myinput.addEventListener("input", function (event) {
//     console.log("helo");
// })
/////////////////////////////////////////




var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var add = document.getElementById("add");
var update = document.getElementById("update");
var product = [];

if (localStorage.getItem("product") != null) {
    product = JSON.parse(localStorage.getItem("product"));
    displayElement(product);
}


function addelement() {
    if (validateproduct() == true) {
        var obj =
        {
            name:productName.value,
            price:productPrice.value,
            Category:productCategory.value,
            Desc:productDesc.value,
        }
        product.push(obj);
        localStorage.setItem("product", JSON.stringify(product));
        clearForm();
    }
    else {
        alert("rong name");
    }
    document.querySelector("#tableBody").innerHTML = ""
    displayElement(product)
    console.log(product);
    
}
function displayElement(arr) {
    var cartona = ``;
    for (var i = 0; i < arr.length; i++) {
        var tableRow = document.createElement("tr");
        var nameTd = document.createElement("td");
        var textName = document.createTextNode(arr[i].name);
        nameTd.append(textName);
        tableRow.append(nameTd)
        var priceTd = document.createElement("td");
        var textPrice = document.createTextNode(arr[i].price);
        priceTd.append(textPrice);
        tableRow.append(priceTd);
        var categoryTd = document.createElement("td");
        var textCategory = document.createTextNode(arr[i].Category)
        categoryTd.append(textCategory);
        tableRow.append(categoryTd)
        var descTd = document.createElement("td");
        var textDesc = document.createTextNode(arr[i].Desc);
        descTd.append(textDesc);
        tableRow.append(descTd);
        var upBtnTd = document.createElement("td");
        var upBtn = document.createElement("button");
        upBtn.textContent = "Update";
        upBtnTd.append(upBtn);
        tableRow.append(upBtnTd);
        upBtn.setAttribute("num", i)
        upBtn.addEventListener("click", function (i) {
            let index = i.target.getAttribute("num");
            add.classList.add("hidden");
            update.classList.remove("hidden");
            productName.value = product[index].name;
            productPrice.value = product[index].price;
            productCategory.value = product[index].Category;
            productDesc.value = product[index].Desc;
            // update.onclick = function () {
            //     // ubdateElement(index);
            //     console.log("hiii");
            //     };
            update.addEventListener("click", function (event) {
                // event.stopPropagation();
                // ubdateElement(index);
                // console.log(product);
                console.log("hiii");
            })
        })
        var delBtnTd = document.createElement("td");
        var delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.setAttribute("num", i)
        delBtn.addEventListener("click", function (i) {
            var tr = this.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
            let index = i.target.getAttribute("num");
            deleteElement(index);
            
        })
        
        delBtnTd.append(delBtn);
        tableRow.append(delBtnTd);
        var tabBody = document.getElementById("tableBody");
        tabBody.append(tableRow);
    }
}
        
add.addEventListener("click", function () {
    addelement();
})
function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value=""
}

function deleteElement(elementDelete) {
    product.splice(elementDelete, 1);
    localStorage.setItem("product", JSON.stringify(product));
    console.log(product);
    document.querySelector("#tableBody").innerHTML = "";
    displayElement(product);
}

function searchProduct(term) {
    var pro = [];
    for (var i = 0; i < product.length; i++){
        if (product[i].name.toLowerCase().includes(term.toLowerCase())) {
            pro.unshift(product[i]);
        }
    }
    displayElement(pro);
    console.log(pro);
}


function ubdateElement(index) {
    
    update.classList.add("hidden");
    add.classList.remove("hidden");
    product[index].name = productName.value;
    product[index].price = productPrice.value;
    product[index].Category = productCategory.value;
    product[index].Desc = productDesc.value;
    localStorage.setItem("product", JSON.stringify(product));
    document.querySelector("#tableBody").innerHTML = "";
    displayElement(product);
    clearForm();
    
}



function validateproduct() {
    var regex = /^[A-Z].{3,8}$/;
    return regex.test(productName.value);
}

