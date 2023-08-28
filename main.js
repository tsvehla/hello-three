import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(3, 3, 3);

const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0x00ff00),
    specularColor: new THREE.Color(0xff0000),
    sheen: 1.0,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const al = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(al);
const dl = new THREE.DirectionalLight(0xffffff, 5.0);
dl.position.set(5, 3, 1);
scene.add(dl);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
