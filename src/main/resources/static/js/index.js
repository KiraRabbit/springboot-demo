var maxHeight=0;	//窗口高度
var maxWidth=0;		//窗口宽度
var canvas=null;	//定义画布
var arrMess=new Array(256);		//生成256列数据
var index = 0;                            //全局索引
var colorIndex = 0;
var L2Dwidget;
/*定义逻辑方法*/
function $_id(id){
    return document.getElementById(id);
}

function random(min,max){
    return (Math.random() * (max - min + 1) | 0) + min;
}

/*立即执行函数初始化数据*/
(function(){
    maxWidth=window.innerWidth;
    maxHeight=window.innerHeight;
    var canvasEle=$_id("canvas");
    canvasEle.width=maxWidth;
    canvasEle.height=maxHeight;
    canvas=canvasEle.getContext('2d');
    var i=arrMess.length;
    while(i--){
        arrMess[i]=random(-500,0);
    }

})();

/*进行画布绘画*/
function draw(){
    canvas.fillStyle="rgba(0,0,0,0.05)";
    canvas.fillRect(0,0,maxWidth,maxHeight);
    arrMess.forEach(function(value,index){
        var x=index * 10;
        var text=String.fromCharCode(random(97,122));
        canvas.fillStyle=getColor();
        canvas.fillText(text,x,value);
        arrMess[index]=value>(758 + Math.random()*484) ? 0 : value+10;
    });
}

/*定时器刷新*/
setInterval(draw,90);

/*获取随机颜色*/
function getColor(){
    return "#"+(function(color){
        return new Array(7 - color.length).join(0) + color;})((Math.random() * 0x1000000 | 0).toString(16));
}
//    return "#00FF00"

function startGame(){
    /*var audio= new Audio("../music/iKnow.mp3");
    audio.play();*/
    window.location.href="resources/static/index2.html";
}



