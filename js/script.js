var canvas = document.getElementById("canvas");//ID"canvas"の値を取得
var ctx = canvas.getContext("2d");
var ball = 10;//ballの大きさ10
var x = canvas.width/2;//左右方向の軸
var y = canvas.height-30;//上下方向の軸
var dx = 3;//左右方向の速さ
var dy = -3;//上下方向の速さ
var racketHeight= 15;//ラケットの高さ
var racketWidth = 70;//ラケットの幅
var racketX = (canvas.width-racketWidth)/2;//ラケットの位置
var rightPressed = false;//矢印ボタン
var leftPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ball, 0, Math.PI*2);
    ctx.fillStyle = "#E868E2";
    ctx.fill();
    ctx.closePath();
}

function drawRacket() {
    ctx.beginPath();
    ctx.rect(racketX, canvas.height-racketHeight, racketWidth, racketHeight);
    ctx.fillStyle = "#E868E2";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawRacket();
    
    if(x + dx> canvas.width-ball || x + dx < ball) {
        dx = -dx;
    }
    if(y + dy< ball){
		dy = -dy;
	}
	else if(y + dy >canvas.height-ball) {
		if(x < racketX + racketWidth && x > racketX) {
			dy = -dy;
		}
		else {
			alert("ざんねん！！");
            document.location.reload();
            clearInterval(interval);
		}
	}
    
    if(rightPressed && racketX < canvas.width-racketWidth) {
        racketX=racketX+7;
    }
    else if(leftPressed && racketX > 0) {
        racketX=racketX-7;
    }
    
    x =x+dx;
    y =y+dy;
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}





var interval = setInterval(draw, 10);