nostrilx = 0;
nostrily = 0;

function preload(){
    scary_clown_nostril = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas( 400 , 500 );
    canvas.center();
    vie = createCapture(VIDEO);
    vie.size(400,400);
    vie.hide();

    poseNet = ml5.poseNet(vie, model_is_loaded);
    poseNet.on("thingy", got_exam_paper);
}

 function model_is_loaded(){
     console.log("im gonna write a paragrahduauhdu model loaded btw");
 }

 function draw(){
      image(vie , 0, 0, 400, 400 );
      image(scary_clown_nostril , nostrilx , nostrily ,40 , 30);
 }

  function buston(){
      save("name.png");     
  }