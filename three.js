import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';
console.log(OrbitControls)
const labelContainerElem = document.querySelector('#labels');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
    antialias: true
})

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
labelContainerElem.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(3,30, 30), 
    new THREE.MeshPhongMaterial({
        //roughness: 1,
        //metalness: 0,
        map: new THREE.TextureLoader().load('./img/globe.jpg'),
        bumpMap: new THREE.TextureLoader().load('./img/globebump.jpg'),
        bumpScale: 0.1
    })
    )

// let mesh = new THREE.Mesh(
//      new THREE.SphereBufferGeometry(0.5,30,30),
//      new THREE.MeshBasicMaterial({color:0xff0000})
// )
//  let lat = 15 * Math.PI/180;
//  let lng = 96 * Math.PI/180;

//  let x = Math.cos(lng)*Math.sin(lat)
//  let y = Math.sin(lng)*Math.sin(lat)
//  let z = Math.cos(lat)

//  mesh.position.set(1,2,3)
//  scene.add(mesh)

const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(3,30,30)
scene.add(sphere)
scene.add(pointLight)

camera.position.z = 6
function animate()
{
    requestAnimationFrame(animate)
    sphere.rotation.y -= 0.0025
    controls.update()
    renderer.render(scene, camera)
}
animate()

