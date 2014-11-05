var scene, camera, renderer;
var camerax = 0;
var cameray = 3.5;
var cameraz = 5;

var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;

var SPEED = 0.01;

init();
render();

function init()
{
  scene = new THREE.Scene();

  initCube();
  initCamera();
  initRenderer();
  generateLevel();

    setInterval(function()
    {
        if (keyPressed["W"])
        {
            cameraz -= 0.1;
        }
        if (keyPressed["A"])
        {
            camerax -= 0.1;
        }
        if (keyPressed["D"])
        {
            camerax += 0.1;
        }
        if (keyPressed["S"])
        {
            cameraz += 0.1;
        }
        camera.position.set(camerax, cameray, cameraz);
    }, 0);

  document.body.appendChild(renderer.domElement);
};

function initCamera()
{
  camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 1000);
  camera.position.set(0, 3.5, 5);
  camera.rotation.set(0,0,0);
  //camera.lookAt(scene.position);
};

function initRenderer()
{
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
};

function initCube()
{
  cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
  scene.add(cube);
};

function rotateCube()
{
  cube.rotation.x += SPEED * 2;
  cube.rotation.y += SPEED;
  cube.rotation.z += SPEED * 3;
};

function render()
{
  requestAnimationFrame(render);
  rotateCube(); 
  renderer.render(scene, camera);
};


function generateLevel()
{
  // load a texture, set wrap mode to repeat
   var texture = THREE.ImageUtils.loadTexture( "./textures/moriarty.jpg" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 1.4, 1.4 );


  floor = new THREE.Mesh(new THREE.CubeGeometry(30,1,1000), new THREE.MeshBasicMaterial({color: 'blue'}));
  floor.position.set(0,-2,-480);
  scene.add(floor);
  leftWall = new THREE.Mesh(new THREE.CubeGeometry(1,10,1000), new THREE.MeshBasicMaterial({map : texture}));
  leftWall.position.set(-15,-2,-480);
  //leftWall.material.map = getImage('textures/moriarty.jpg');
  scene.add(leftWall);
  rightWall = new THREE.Mesh(new THREE.CubeGeometry(1,10,1000), new THREE.MeshBasicMaterial({color: 'red'}));
  rightWall.position.set(15,-2,-480);
  scene.add(rightWall); 
}

function getImage(path)
{
  var image = new Image();
  image.src = path;
  return image;
}