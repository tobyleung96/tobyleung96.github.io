function init() {
	var scene = new THREE.Scene();

	// camera
	// var camera = new THREE.OrthographicCamera(
	// 	-15,
	// 	15,
	// 	15,
	// 	-15,
	// 	1,
	// 	1000
	// );
	// camera.position.z = 20;
	// camera.position.x = 10;
	// camera.position.y = 5;
	// camera.lookAt(new THREE.Vector3(0, 0, 0));

	// perspective cam
	var camera = new THREE.PerspectiveCamera(
		45, // field of view
		window.innerWidth / window.innerHeight, // aspect ratio
		1, // near clipping plane
		1000 // far clipping plane
	);
	camera.position.z = 40;
	camera.position.x = 0;
	camera.position.y = 0;
	camera.lookAt(new THREE.Vector3(0, 0, 0));


	var particleMat = new THREE.PointsMaterial({
		color: 'rgb(0, 255, 255)',
		size: 0.1,
		map: new THREE.TextureLoader().load('/assets/textures/particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false
	});

	var particleGeo = new THREE.SphereGeometry(10, 54, 54);

	particleGeo.vertices.forEach(function(vertex) {
		vertex.x += (Math.random() - 0.5);
		vertex.y += (Math.random() - 0.5);
		vertex.z += (Math.random() - 0.5);
	});

	var particleSystem = new THREE.Points(
		particleGeo,
		particleMat
	);
	particleSystem.name = 'particleSystem';

	scene.add(particleSystem);

	var particleMat2 = new THREE.PointsMaterial({
		color: 'rgb(169, 169, 169)',
		size: 0.1,
		map: new THREE.TextureLoader().load('/assets/textures/particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false
	});

	var particleGeo2 = new THREE.SphereGeometry(5, 44, 44);

	particleGeo2.vertices.forEach(function(vertex) {
		vertex.x += (Math.random() - 0.5);
		vertex.y += (Math.random() - 0.5);
		vertex.z += (Math.random() - 0.5);
	});

	var particleSystem2 = new THREE.Points(
		particleGeo2,
		particleMat2
	);
	particleSystem2.name = 'particleSystem2';

	scene.add(particleSystem2);


	var particleMat3 = new THREE.PointsMaterial({
		color: 'rgb(255, 255, 255)',
		size: 0.1,
		map: new THREE.TextureLoader().load('/assets/textures/particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false
	});

	var particleGeo3 = new THREE.SphereGeometry(1, 22, 22);

	particleGeo3.vertices.forEach(function(vertex) {
		vertex.x += (Math.random() - 0.5);
		vertex.y += (Math.random() - 0.5);
		vertex.z += (Math.random() - 0.5);
	});

	var particleSystem3 = new THREE.Points(
		particleGeo3,
		particleMat3
	);
	particleSystem3.name = 'particleSystem3';

	scene.add(particleSystem3);

var geometry = new THREE.CircleGeometry(10.5,50);
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
	material.transparent = true;
	material.opacity = 0.0;
var circle = new THREE.Mesh( geometry, material );
	circle.position.z = 1;
circle.name = circle;
scene.add( circle );

var geometry2 = new THREE.CircleGeometry(5.2,50);
var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff77 } );
	material2.transparent = true;
	material2.opacity = 0.0;
var circle2 = new THREE.Mesh( geometry2, material2 );
	circle2.position.z = 2;
circle2.name = circle2;
scene.add( circle2 );

var geometry3 = new THREE.CircleGeometry(1.4,50);
var material3 = new THREE.MeshBasicMaterial( { color: 0xffffff });
	material3.transparent = true;
	material3.opacity = 0.0;
var circle3 = new THREE.Mesh( geometry3, material3 );
	circle3.position.z = 3;
circle3.name = circle3;
scene.add( circle3 );

	// // renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.getElementById('webgl').appendChild(renderer.domElement);
  renderer.setClearColor('rgb(20, 20, 20)');

	update(renderer, scene, camera);

	return scene;
}


function update(renderer, scene, camera) {
	renderer.render(scene, camera);

	var particleSystem = scene.getObjectByName('particleSystem');
	particleSystem.rotation.y += 0.007;

	var particleSystem2 = scene.getObjectByName('particleSystem2');
	particleSystem2.rotation.y -= 0.005;

	var particleSystem3 = scene.getObjectByName('particleSystem3');
	particleSystem3.rotation.y += 0.001;

	requestAnimationFrame(function() {
		update(renderer, scene, camera );
	});
}

var scene = init();
