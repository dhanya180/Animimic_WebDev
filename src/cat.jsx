import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Link } from "react-router-dom";
import styles from "./animal.module.css"; // Import CSS Module

const Cat = () => {
  const [selectedSound, setSelectedSound] = useState("/audio/meow.mp3"); // Default to cat sound
  const [selectedVoice, setSelectedVoice] = useState(null);
  const mountRef = useRef(null);
  const jumpButtonRef = useRef(null);
  const turnLeftButtonRef = useRef(null);
  const turnRightButtonRef = useRef(null);
  const playSoundButtonRef = useRef(null);
  const textToVoiceButtonRef = useRef(null);
  const soundRef = useRef(null);

  // Load sound function
  const loadSound = (soundFile) => {
    const listener = new THREE.AudioListener();
    soundRef.current = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(soundFile, (buffer) => {
      soundRef.current.setBuffer(buffer);
      soundRef.current.setLoop(false);
      soundRef.current.setVolume(1.0);
    });
  };

  useEffect(() => {
    // Set up a default voice
    const synth = window.speechSynthesis;
    const loadVoices = () => {
      const voicesList = synth.getVoices();
      if (voicesList.length > 0) {
        setSelectedVoice(voicesList[2]); // Set the first available voice as default
      }
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      5,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 0);

    // Orbit controls setup for zoom control
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 13;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2;

    // Ground setup
    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // SpotLight setup
    const spotLight = new THREE.SpotLight(0xffffff, 4000, 100, 0.22, 1);
    spotLight.position.set(10, 15, 25);
    spotLight.castShadow = true;
    scene.add(spotLight);

    let catModel;
    const loader = new GLTFLoader().setPath("/cat/");
    loader.load(
      "cat.gltf",
      (gltf) => {
        catModel = gltf.scene;
        catModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        catModel.position.set(0, 1.05, 0);
        scene.add(catModel);
        controls.target.set(0, 1.05, 0);
        controls.update();
      },
      undefined,
      (error) => console.error(error)
    );

    let isTurning = false,
      turnDirection = 1,
      turnAmount = 0;
    let isJumping = false,
      jumpDirection = 0;

    const turn = (direction) => {
      if (!isTurning && !isJumping) {
        isTurning = true;
        turnDirection = direction;
        turnAmount = 0;
      }
    };

    const jump = () => {
      if (!isJumping && !isTurning) {
        isJumping = true;
        jumpDirection = 1;
      }
    };

    jumpButtonRef.current.addEventListener("click", jump);
    turnLeftButtonRef.current.addEventListener("click", () => turn(-1));
    turnRightButtonRef.current.addEventListener("click", () => turn(1));

    const animate = () => {
      requestAnimationFrame(animate);
      if (catModel) {
        if (isTurning) {
          const rotationStep = 0.05 * turnDirection;
          catModel.rotation.y += rotationStep;
          turnAmount += Math.abs(rotationStep);
          if (turnAmount >= 2 * Math.PI) {
            isTurning = false;
            catModel.rotation.y = 0;
          }
        }
        if (isJumping) {
          if (jumpDirection === 1) {
            catModel.position.y += 0.003;
            if (catModel.position.y >= 1.05 + 0.025) jumpDirection = 0;
          } else {
            catModel.position.y -= 0.003;
            if (catModel.position.y <= 1.05) {
              catModel.position.y = 1.05;
              isJumping = false;
            }
          }
        }
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Listen for changes to selectedSound and load the corresponding sound
    loadSound(selectedSound);

    // Handle resizing

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [selectedSound]); // selectedSound triggers reloading of sound

  useEffect(() => {
    // Add a class to the <body> element when the component mounts
    document.body.classList.add('animal-module-page-body');

    // Optional cleanup to remove the class when the component unmounts
    return () => {
        document.body.classList.remove('animal-module-page-body');
    };
}, []);

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play();
    }
  };

  const handleButtonClick = (e) => {
    const allButtons = document.querySelectorAll(`.${styles.ButtonRight} button, .${styles.ButtonLeft} button`);

    allButtons.forEach((btn) => btn.classList.remove(styles.selected));
    e.currentTarget.classList.add(styles.selected);
  };

  const speakText = () => {
    const text = document.getElementById("textInput").value;
    if (text && selectedVoice) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.voice = selectedVoice;
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <>
      <div className={styles.ButtonLeft}>
        <div id="dog">
          <Link to="/dog">
            <button onClick={handleButtonClick}>&#128021;Dog</button>
          </Link>
        </div>
        <div id="elephant">
          <Link to="/elephant">
            <button onClick={handleButtonClick}>&#129436;Elephant</button>
          </Link>
        </div>
        <div id="cat">
          <Link to="/cat">
            <button onClick={handleButtonClick}>&#128008;Cat</button>
          </Link>
        </div>
        <div id="tiger">
          <Link to="/tiger">
            <button onClick={handleButtonClick}>&#128005;Tiger</button>
          </Link>
        </div>
        <div id="bee">
          <Link to="/bee">
            <button onClick={handleButtonClick}>&#128029;Bee</button>
          </Link>
        </div>
      </div>

      <div ref={mountRef}>
        <div className={styles.ButtonRight}>
          <div id="soundSelect">
            <select
              onChange={(e) => setSelectedSound(e.target.value)}
              value={selectedSound || "/audio/meow.mp3"}
            >
              <option value="/audio/meow.mp3">Cat Sound</option>
              <option value="/audio/bark.mp3">Dog Sound</option>
              <option value="/audio/roar.mp3">Tiger Sound</option>
              <option value="/audio/bee.mp3">Bee Sound</option>
              <option value="/audio/bird.mp3">Bird Sound</option>
            </select>
          </div>
          <div id="playsound">
            <button ref={playSoundButtonRef} onClick={playSound}>
              <i className="fa-solid fa-volume-high"></i>Sound
            </button>
          </div>
          <div id="jump">
            <button
              ref={jumpButtonRef}
              onClick={(e) => {
                handleButtonClick(e);
                jump(); // Add jumping functionality here
              }}
            >
              <i className="fa-solid fa-arrow-turn-up"></i> Jump
            </button>
          </div>
          <div id="turnleft">
            <button
              ref={turnLeftButtonRef}
              onClick={(e) => {
                handleButtonClick(e);
                turn(-1); // Add turning functionality here
              }}
            >
              <i className="fas fa-undo"></i> Rotate Left
            </button>
          </div>
          <div id="turnright">
            <button
              ref={turnRightButtonRef}
              onClick={(e) => {
                handleButtonClick(e);
                turn(1); // Add turning functionality here
              }}
            >
              <i className="fas fa-redo"></i> Rotate Right
            </button>
          </div>
        </div>

        <div className={styles.textareaContainer}>
          <textarea id="textInput" placeholder="Write anything here..." />
          <button ref={textToVoiceButtonRef} onClick={speakText}>
            &#x25B6;
          </button>
        </div>
      </div>
    </>
  );
};

export default Cat;