import * as THREE from "three";

const canvas = document.querySelector("canvas");
//SCENE
const scene = new THREE.Scene();

//geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000  , wireframe: true });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const size = {
  height: 600,
  width: 800,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 2;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
