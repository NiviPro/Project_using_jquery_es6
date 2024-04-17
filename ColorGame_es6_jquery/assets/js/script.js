// generate colors rgb
var rgb = [];
var arr = [];
for(var i =0;i<10;i++){
  for(var j=0;j<3;j++){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   rgb[j] = "rgb("+r+" "+g+" "+b+")"
}

// add colors
var g_Colors={
   color1 : rgb[0],
   color2 : rgb[1],
   color3 : rgb[2],
   pickedColor : rgb[Math.floor(Math.random() * 3)],
   is_select : false,
}
 arr.push(g_Colors)

}
arr.forEach(function(e) {
    $("tbody").append('<tr><td class="color">' + e.pickedColor + '</td><td><input type="radio" name ="getVal" id="getVal">&nbsp;&nbsp;<label style="background: '+e.color1+'"></label></td><td><input type="radio" name="getVal" id="getVal">&nbsp;&nbsp;<label style="background: '+e.color2+'"></label></td><td><input type="radio" name ="getVal" id="getVal">&nbsp;&nbsp;<label style="background: '+e.color3+'"></label></td><tr>')
})

// navigate pg 2
$(document).ready(function(){
  $("#submit").click(function(){
    $(".frst_atmt").hide();
    $(".sec_atmt").show();
  });
});

//navigate pg 3
$(document).ready(function(){
  $("#submit2").click(function(){
    $(".sec_atmt").hide();
    $(".thrd_atmt").show();
  });
});
