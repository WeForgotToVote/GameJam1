var scene, camera, renderer, world, mass, body, shape, timeStep=1/60, geometry, material, mesh;;
var camerax = 0;
var cameray = 3.5;
var cameraz = 5;

// Create a plane
var groundBody = new CANNON.Body({
    mass: 0 // mass == 0 makes the body static
});
var groundShape = new CANNON.Plane();
groundBody.addShape(groundShape);

var WIDTH  = window.innerWidth;
var HEIGHT = window.innerHeight;

var SPEED = 0.01;

init();
initCannon();
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
  scene.add(camera);
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
  updatePhysics();
  rotateCube();
  renderer.render(scene, camera);
};

function initCannon() {

  world = new CANNON.World();
  world.gravity.set(0,0,-9.82);
  world.broadphase = new CANNON.NaiveBroadphase();
  world.solver.iterations = 10;

  shape = new CANNON.Box(new CANNON.Vec3(1,1,1));
  mass = 1;
  body = new CANNON.Body({
	mass: 1
  });
  body.addShape(shape);
  body.angularVelocity.set(0,10,0);
  body.angularDamping = 0.5;
  world.add(body);
  world.add(groundBody);

}

function updatePhysics() {

  // Step the physics world
  world.step(timeStep);

  // Copy coordinates from Cannon.js to Three.js
  cube.position.copy(body.position);
  cube.quaternion.copy(body.quaternion);

}
