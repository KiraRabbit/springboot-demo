var maxHeight=0;	//窗口高度
var maxWidth=0;		//窗口宽度
var canvas=null;	//定义画布
var arrMess=new Array(256);		//生成256列数据
var index = 0;                            //全局索引
var colorIndex = 0;






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

    /*$_id("#canvas").onclick(function(e) {         //鼠标点击事件
        var arr = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var colorArr = new Array("red", "orange", "yellow", "green", "blue", "indigo", "purple");
        var tmp = $("<span/>").text(arr[index]);    //添加一个span标签显示arr数组对应的第一个索引内容
        index = (index + 1) % arr.length;           //取余,从0到arr数组长度，一直点击一直循环
        var color = colorArr[colorIndex];
        colorIndex = (colorIndex + 1) % colorArr.length;
        var x = e.pageX, y = e.pageY;   //鼠标点击的x,y点坐标
        tmp.css({
            "z-index" : 999,            //堆叠顺序，越大越优先显示
            "top" : y - 20,             //y点坐标往上20像素
            "left" : x,                 //x点坐标
            "position" : "absolute",    //绝对定位
            "font-weight" : "bold",     //加粗
            "color" : color,            //颜色
            "font-size" : 20            //字体大小
        });
        $("body").append(tmp);
        tmp.animate({                   //自定义动画,样式--时间--功能
            "top" : y - 200,            //y点坐标往上200像素
            "opacity" : 0               //饱和度,0即是透明了
        }, 2000, function() {           //2000毫秒
            tmp.remove();               //消失
        });
    });*/

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
setInterval(draw,60);

/*获取随机颜色*/
function getColor(){
    return "#"+(function(color){
        return new Array(7 - color.length).join(0) + color;
    })((Math.random() * 0x1000000 | 0).toString(16));
}

