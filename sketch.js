const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var p1,p2;
var l1,l2,l3,l4;
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(185,700,50,50);
    p1 = new pig(250,700);
    box2 = new Box(320,700,50,50);
    l1 = new log(250,650,200,PI/2);
    box3 =new Box(185,600,50,50);
    p2 = new pig(250,600);
    box4 =new Box(320,600,50,50);
    l2 = new log(250,550,200,PI/2)
    box5 =new Box(250,550,50,50);
    l3 = new log(200,520,100,PI/2);
    l4 = new log(280,520,100,PI/-2);

    ground = new Ground(200,height,800,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display(); 

    p1.display();
    p2.display();

    l1.display();
    l2.display();
    l3.display();
    l4.display();

    ground.display();
}