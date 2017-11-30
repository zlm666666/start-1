var s = document.querySelector("#s");
var li = document.querySelectorAll("nav li");

    var color = ["red","blue","orange","black","yellow"];
for(var i = 0;i<li.length;i++){
    li[i].onmouseover = function(){
  s.style.width = this.clientWidth + "px";
   s.style.left = this.offsetLeft + "px";   
        
//        
//        if(li[0] == this){
//            s.style.backgroundColor = color[0];   
//        }
//        if(li[1] == this){
//            s.style.backgroundColor = color[1];   
//        }
//        if(li[2] == this){
//            s.style.backgroundColor = color[2];   
//        }
//        if(li[3] == this){
//            s.style.backgroundColor = color[3];   
//        }
//        
        
        for(var n = 0;n<li.length;n++){
            if(li[n] == this){
            s.style.backgroundColor = color[n];   
        }
        }
        
        
    }
}




//
//window.onload = function(){
//    var btn = document.getElementById("btn");
//    var box = document.getElementById("box");
//    var on = "block";
//    
//    btn.onclick = function(){
//        if(on == "none"){
//            box.style.display = "block";
//            on = "block";
//        }else{
//            box.style.display = "none";
//            on = "none";
//        }
//    }
//}
