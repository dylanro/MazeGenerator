//GLOBAL VARIABLES
const rc = rough.canvas(document.getElementById("canvas"));
const context = canvas.getContext('2d');

cells = [];

running = false;

settings;
let m;

function handleSubmit() {
  settings = {
    cols: $( '#js-col' ).val(),
    rows: $( '#js-row' ).val(),
    width: $( '#js-width' ).val(),
    height: $( '#js-height' ).val(),
    fps: $( '#fpsslider' ).val()
    }

    m = new Maze(settings);
    $( '.bottom-buttons button, .button-holder-download a').css('display', 'block');

    timeoutID = window.setTimeout(function(){
      running = true; 
    }, 200);
  $( '#mazeconfig').slideToggle(700);

  setInterval(function () {
    update();
    draw();
  }, 1000 / settings.fps);
}

  function update() {}

  function draw() {
    if(running){
    context.clearRect(0, 0, settings.width, settings.height);
    m.generate();
    m.display();
    rc.rectangle(3,3,width-6,width-6, {
      roughness: 0,
      stroke: '#86E7B8',
      strokeWidth: width/(width/3.3)
    });
    }
  }
