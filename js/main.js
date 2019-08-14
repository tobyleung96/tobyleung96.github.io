function init() {
	var scene = new THREE.Scene();

	// camera
  var camera = new THREE.OrthographicCamera(
		-15,
		15,
		15,
		-15,
		1,
		1000
	);
	camera.position.z = 30;
	camera.position.x = 0;
	camera.position.y = 20;
	camera.lookAt(new THREE.Vector3(0, 0, 0));


	var particleMat = new THREE.PointsMaterial({
		color: 'rgb(0, 206, 209)',
		size: 0.25,
		map: new THREE.TextureLoader().load('/assets/textures/particle.jpg'),
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false
	});

	var particleGeo = new THREE.SphereGeometry(10, 64, 64);

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


	// var particleMat2 = new THREE.PointsMaterial({
	// 	color: 'rgb(169, 169, 169)',
	// 	size: 0.25,
	// 	map: new THREE.TextureLoader().load('/assets/textures/particle.jpg'),
	// 	transparent: true,
	// 	blending: THREE.AdditiveBlending,
	// 	depthWrite: false
	// });
	//
	// var particleGeo2 = new THREE.SphereGeometry(6, 64, 64);
	//
	// particleGeo2.vertices.forEach(function(vertex) {
	// 	vertex.x += (Math.random() - 0.5);
	// 	vertex.y += (Math.random() - 0.5);
	// 	vertex.z += (Math.random() - 0.5);
	// });
	//
	// var particleSystem2 = new THREE.Points(
	// 	particleGeo2,
	// 	particleMat2
	// );
	// particleSystem.name = 'particleSystem2';
	//
	// scene.add(particleSystem2);
	//
	// var particleMat3 = new THREE.PointsMaterial({
	// 	color: 'rgb(255, 255, 255)',
	// 	size: 0.25,
	// 	map: new THREE.TextureLoader().load('/assets/textures/particle.jpg'),
	// 	transparent: true,
	// 	blending: THREE.AdditiveBlending,
	// 	depthWrite: false
	// });
	//
	// var particleGeo3 = new THREE.SphereGeometry(3, 64, 64);
	//
	// particleGeo3.vertices.forEach(function(vertex) {
	// 	vertex.x += (Math.random() - 0.5);
	// 	vertex.y += (Math.random() - 0.5);
	// 	vertex.z += (Math.random() - 0.5);
	// });
	//
	// var particleSystem3 = new THREE.Points(
	// 	particleGeo3,
	// 	particleMat3
	// );
	// particleSystem.name = 'particleSystem3';
	//
	// scene.add(particleSystem3);

	// renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.setClearColor('rgb(20, 20, 20)');

	var controls = new THREE.OrbitControls( camera, renderer.domElement );

	document.getElementById('webgl').appendChild(renderer.domElement);

	update(renderer, scene, camera, controls);

	return scene;
}


function update(renderer, scene, camera, controls) {
	controls.update();
	renderer.render(scene, camera);

	var particleSystem = scene.getObjectByName('particleSystem');
	particleSystem.rotation.y += 0.005;

	var particleSystem = scene.getObjectByName('particleSystem2');
	particleSystem.rotation.y += 0.003;

	var particleSystem = scene.getObjectByName('particleSystem3');
	particleSystem.rotation.y += 0.001;

	requestAnimationFrame(function() {
		update(renderer, scene, camera, controls);
	});
}

var scene = init();
