
function setup() {
    initializeFields();
    createCanvas(500, 500);
}

var N;

var A;

var B;

function draw() {
    background(color(0xF5, 0xDB, 0x48));
    for (var i = 0; i <= 10; i++) {
        line(50 * i, 0, 50 * i, 500);
        line(0, 50 * i, 500, 50 * i);
    }
    for (var i = 0; i < N; i++) {
        ellipse(A[i], B[i], 45, 45);
    }
    ellipse(mouseX, mouseY, 45, 45);
}

function mousePressed() {
    A[N] = mouseX;
    B[N] = mouseY;
    N++;
}

function initializeFields() {
    N = 0;
    A = new Array(100);
    B = new Array(100);
}
