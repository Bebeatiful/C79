menuListArray = ["Pizza Vegetariana",
                 "Pizza de Frango",
                 "Pizza Portuguesa",
                 "Pizza Quatros Queijos",
                 "Pizza de Calabresa",
                 "Pizza Extravaganzza"];

function getMenu(){
var htmldata;
menuListArray.sort()
for(var i = 0; i<menuListArray.length;i++){
    htmldata = htmldata + menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags =  '<img id = "1m1" src = "image/pizzaImg.png">'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata = ""
for(var i=0; i<menuListArray.length;i++){
        htmldata =htmldata+imtags+ menuListArray[i]+ '<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addTop(){

    var item=document.getElementById("addItem").value;
     menuListArray.push(item);
     addItem();
}