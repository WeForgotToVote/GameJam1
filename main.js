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
  camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
  camera.position.set(0, 3.5, 5);
  camera.lookAt(scene.position);
};

function initRenderer()
{
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
};

function initCube()
{
  cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
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