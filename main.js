canvas = new fabric.Canvas("myCanvas");

plX = 10;
plY = 10;

bodyW = 30;
bodyH = 30;

var plObj = "";
var bodyObj = "";

function plUpdate(){
   fabric.Image.fromURL("player.png", function(Img){
       plObj = Img;
       plObj.scaleToWidth(150);
       plObj.scaleToHeight(150);

       plObj.set({
           top : plY, left : plX 
       });
       canvas.add(plObj);
   }) 
}

function newBodyImg(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        bodyObj = Img;
        bodyObj.scaleToWidth(bodyW);
        bodyObj.scaleToHeight(bodyH);
 
        bodyObj.set({
            top : plY, left : plX 
        });
        canvas.add(bodyObj);
    }) 
}

 window.addEventListener("keydown", mykeydown);

 function mykeydown(e){
     keyP = e.keyCode;
     console.log(keyP);

     if(e.shiftKey == true && keyP == '80'){
         console.log("shift and p pressed together");
         bodyW = bodyW + 10;
         bodyH = bodyH + 10;
         document.getElementById("cWidth").innerHTML = bodyW;
         document.getElementById("cHeight").innerHTML = bodyH;
     }

     if(e.shiftKey == true && keyP == '77'){
        console.log("shift and m pressed together");
        bodyW = bodyW - 10;
        bodyH = bodyH - 10;
        document.getElementById("cWidth").innerHTML = bodyW;
        document.getElementById("cHeight").innerHTML = bodyH;
    }

    if(keyP == '70')
    {
        newBodyImg("ironman_face.png");
        console.log("f");
    }

    if(keyP == '66')
    {
        newBodyImg("spiderman_body.png");
        console.log("b");
    }

    if(keyP == '76')
    {
        newBodyImg("hulk_legs.png");
        console.log("l");
    }

    if(keyP == '82')
    {
        newBodyImg("thor_right_hand.png");
        console.log("r");
    }

    if(keyP == '72')
    {
        newBodyImg("captain_america_left_hand.png");
        console.log("h");
    }

    if(keyP == '38')
    {
        up();
        console.log("up");
    }

    if(keyP == '40')
    {
        down();
        console.log("down");
    }

    if(keyP == '37')
    {
        left();
        console.log("left");
    }

    if(keyP == '39')
    {
        right();
        console.log("right");
    }

    function up()
 {
     if(plY >=0)
     {
         plY = plY - bodyH;
         console.log("block image height = " + bodyH);
         console.log("When Up arrow key is pressed, X =  " + plX + " , Y = "+plY);
         canvas.remove(plObj);
         plUpdate();
     }
 }

 function down()
 {
     if(plY <=500)
     {
         plY = plY + bodyH;
         console.log("block image height = " + bodyH);
         console.log("When Up arrow key is pressed, X =  " + plX + " , Y = "+plY);
         canvas.remove(plObj);
         plUpdate();
     }
 }

 function left()
 {
     if(plX >=0)
     {
         plX = plX - bodyW;
         console.log("block image height = " + bodyW);
         console.log("When Up arrow key is pressed, X =  " + plX + " , Y = "+plY);
         canvas.remove(plObj);
         plUpdate();
     }
 }
 function right()
 {
 if(plX <=850)
     {
         plX = plX + bodyW;
         console.log("block image height = " + bodyW);
         console.log("When Up arrow key is pressed, X =  " + plX + " , Y = "+plY);
         canvas.remove(plObj);
         plUpdate();
     }
    }
 

    

}