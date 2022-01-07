timer_counter;

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

function clearCanvas(){
    background("white");
}

function draw(){
    check_sketch();
}

function check_sketch(){
    timer_counter = timer_counter+ 1
    document.getElementById(timer)= "Timer : " + timer_counter;
}

