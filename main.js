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

    setInterval(function(){
        // W
        if (keyPressed == 87) {
            cameray += 0.1;
            camera.position.set(camerax, cameray, cameraz);
        }
        // A
        if (keyPressed == 65) {
            camerax -= 0.1;
            camera.position.set(camerax, cameray, cameraz);
        }
        // D
        if (keyPressed == 83) {
            cameray -= 0.1;
            camera.position.set(camerax, cameray, cameraz);
        }
        // S
        if (keyPressed == 68) {
            camerax += 0.1;
            camera.position.set(camerax, cameray, cameraz);
        }
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
