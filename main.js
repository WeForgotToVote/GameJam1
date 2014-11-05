var world, mass, body, shape, timeStep=1/60,
camera, scene, renderer, geometry, material, mesh;

var SPEED = 0.01;

// Create a plane
var groundBody = new CANNON.Body({
	mass: 0 // mass == 0 makes the body static
});

var groundShape = new CANNON.Plane();
groundBody.addShape(groundShape);
  
initThree();
initCannon();
animate();

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
  groundBody.position.z = -10;
  world.add(groundBody);
}
function initThree() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
  camera.position.z = 5;
  scene.add( camera );
  geometry = new THREE.CubeGeometry( 2, 2, 2 );
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = 10;
  scene.add( mesh );
  renderer = new THREE.CanvasRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
}

function animate() {
  requestAnimationFrame( animate );
  rotateCube();
  updatePhysics();
  render();
}

function rotateCube()
{
	mesh.rotation.x += SPEED * 2;
	mesh.rotation.y += SPEED;
	mesh.rotation.z += SPEED * 3;
};

function updatePhysics() {
  // Step the physics world
  world.step(timeStep);
  // Copy coordinates from Cannon.js to Three.js
  mesh.position.copy(body.position);
  mesh.quaternion.copy(body.quaternion);
  console.log(mesh.position)
}
function render() {
  renderer.render( scene, camera );
}