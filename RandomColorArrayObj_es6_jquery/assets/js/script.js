// global variables

var div = document.querySelector("#colorChangeDiv");
var ul = document.querySelector("#subId");
var printList = document.querySelector("#printList");
var arr=[];
var r, g, b;
var color;

// generate colors

function randomColor(){
      
    r = Math.floor(Math.random() * 256)
      
    g = Math.floor(Math.random() * 256)
     
    b = Math.floor(Math.random() * 256)
    
    return "rgb(" + r +", " + g + ", " + b +")";
    }

document.querySelector("#btnGenerate").addEventListener("click",function(){
    color = randomColor();
    div.style.background = color;
});


// top add/remove color

function addlistTop(){
    ul.innerHTML = " ";
    
    arr.forEach(function(call){
        var list = document.createElement("li");
        list.textContent = "RED : "+call.red+" GREEN : "+call.green+" BLUE : "+call.blue;
        ul.appendChild(list);
    });
}

document.querySelector("#add").addEventListener("click",function(){
    arr.unshift({red:r,green:g,blue:b});
    addlistTop();
})

document.querySelector("#remove").addEventListener("click",function(){
    arr.shift();
    addlistTop();
})


// bottom add/remove color

function addlistBottom(){
    ul.innerHTML = " ";
    
    arr.forEach(function(call){
        var list = document.createElement("li");
        list.textContent = "RED : "+list.red+" GREEN : "+list.green+" BLUE : "+list.blue;
        ul.appendChild(list);
    });
}

document.querySelector("#addDown").addEventListener("click",function(){
    arr.push({red:r,green:g,blue:b});
    addlistTop();
})

document.querySelector("#removeDown").addEventListener("click",function(){
    arr.pop();
    addlistTop();
})

// sort colors

document.querySelector("#redSort").addEventListener("click",function(){
   
    arr.sort(function(a,b){
        return a.red-b.red;
    })
    addlistTop();
})
document.querySelector("#greenSort").addEventListener("click",function(){
    arr.sort(function(a,b){
        return a.green-b.green;
    })
    addlistTop();
})
document.querySelector("#blueSort").addEventListener("click",function(){
    arr.sort(function(a,b){
        return a.blue-b.blue;
    })
    addlistTop();
})

// copylist

document.querySelector("#copyList").addEventListener("click",function(){
    var cpyStart = document.querySelector("#cpyStart").value;
    var cpyEnd = document.querySelector("#cpyEnd").value;
    var copy = arr.slice(cpyStart,cpyEnd);
    printResult(copy);
})

// cutlist

document.querySelector("#cutList").addEventListener("click",function(){
    var cutStart = document.querySelector("#cutStart").value;
    var cutEnd = document.querySelector("#cutEnd").value;
    var cut = arr.splice(cutStart,cutEnd);
    printResult(cut);
    addlistTop();

})

// print result colors

function printResult(a){
           printList.innerHTML = " ";
            a.forEach(function(call){
                var list = document.createElement("li");
                list.textContent = "RED : "+call.red+" GREEN : "+call.green+" BLUE : "+call.blue;
                printList.appendChild(list);
            });      
}``