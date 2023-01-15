import {useCallback} from "react";
import Particles from "react-tsparticles";
import type {Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

export function ParticlesContainer() {

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    // this customizes the component tsParticles installation
    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);


    const windowWidth = window.innerWidth

    const options = {
        "particles": {
            "number": {
                "value": windowWidth < 1000 ? 15 : 50,
                "density": {
                    "enable": false,
                    "value_area": 900
                }
            },
            "color": {
                "value": `rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`
            },
            "shape": {
                "type": "star",
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.7,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 3,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": windowWidth > 800 ? 180 : 100,
                "color": `rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`,
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 1,
                "random": false,
                "straight": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": windowWidth > 800,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
        }
    }

    return <Particles options={options}
                      init={customInit}
    />;
}