let scene, camera, renderer, avatar;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('avatar-container').appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load('frontend/679f7bc3ca1aa096f1ce89c8.glb', function(gltf) {
        avatar = gltf.scene;
        scene.add(avatar);
        avatar.position.set(0, -1, 0);
    });

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    if (avatar) {
        avatar.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}

document.getElementById('generate-outfit').addEventListener('click', function() {
    // Random outfit generation logic
});

document.getElementById('upload-outfit').addEventListener('click', function() {
    // Upload outfit logic
});

document.getElementById('change-background').addEventListener('click', function() {
    // Change background logic
});

document.getElementById('save-outfit').addEventListener('click', function() {
    // Save outfit logic
});

document.getElementById('share-outfit').addEventListener('click', function() {
    // Share outfit logic
});

window.onload = init;
