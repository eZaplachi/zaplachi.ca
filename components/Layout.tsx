import { ReactChild, useCallback, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/components/Layout.module.css";

const Layout = (props: { children: ReactChild; footerText: string }) => {
	const refBody = useRef<HTMLDivElement>(null);
	const [renderer, setRenderer] = useState<any>();
	const [_camera, setCamera] = useState<any>();
	const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
	const [initialCameraPosition] = useState(new THREE.Vector3(4, 5, 6));
	const [scene] = useState(new THREE.Scene());
	const handleWindowResize = useCallback(() => {
		const { current: container } = refBody;
		if (container && renderer) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;

			renderer.setSize(scW, scH);
		}
	}, [renderer]);

	useEffect(() => {
		const { current: container } = refBody;
		if (container && !renderer) {
			const scW = container.clientWidth;
			const scH = container.clientHeight;

			const renderer = new THREE.WebGLRenderer({
				alpha: true,
			});

			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(scW, scH);
			renderer.outputEncoding = THREE.sRGBEncoding;
			container.appendChild(renderer.domElement);
			setRenderer(renderer);

			const scale = scH * 0.08 + 4;
			const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale / 2, 0.01, 50000);
			camera.position.copy(initialCameraPosition);
			camera.lookAt(target);
			setCamera(camera);

			const pointLight = new THREE.PointLight(0xffffff, 0.1);
			pointLight.position.x = 2;
			pointLight.position.y = 3;
			pointLight.position.z = 4;
			scene.add(pointLight);

			const particlesGeometry = new THREE.BufferGeometry();
			const particleCount = 32000;
			const posArray = new Float32Array(particleCount * 3);

			for (let i = 0; i < particleCount * 3; i++) {
				posArray[i] = (Math.random() - 0.5) * (Math.random() * 400);
			}

			particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

			const particlesMaterial = new THREE.PointsMaterial({
				size: 0.0001,
				transparent: true,
				opacity: 0.4,
			});

			const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);

			scene.add(particleMesh);

			let mouseX = 0;
			let mouseY = 0;

			let req: any = null;
			const clock = new THREE.Clock();
			const tick = () => {
				req = requestAnimationFrame(tick);
				const deltaTime = clock.getDelta();

				const onMouse = (e: any) => {
					mouseX = e.clientX;
					mouseY = e.clientY;
				};

				window.addEventListener("mousemove", onMouse);

				particleMesh.rotation.y += 0.03 * deltaTime + 0.000001 * (mouseX - 0.5 * scH);
				particleMesh.rotation.x += 0.06 * deltaTime + 0.000001 * (-mouseY - 0.5 * scW);
				renderer.render(scene, camera);

				return () => {
					window.removeEventListener("mousemove", onMouse);
				};
			};

			tick();

			return () => {
				console.log("unmount");
				cancelAnimationFrame(req);
				renderer.dispose();
				// particlesGeometry.dispose();
				// particlesMaterial.dispose();
			};
		}
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize, false);
		return () => {
			window.removeEventListener("resize", handleWindowResize, false);
		};
	}, [renderer, handleWindowResize]);

	return (
		<div>
			<div className='navbar'>
				<Navbar />
			</div>
			<main className={styles.wrapper}>
				<div ref={refBody} className={styles.background} />
				<div className={styles.content}>{props.children}</div>
			</main>
			<footer>
				<Footer text={props.footerText} />
			</footer>
		</div>
	);
};

export default Layout;
