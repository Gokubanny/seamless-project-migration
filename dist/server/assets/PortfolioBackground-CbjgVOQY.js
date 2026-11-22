import { useEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points } from "@react-three/drei";
//#region src/components/portfolio/PortfolioBackground.tsx
var shapePositions = [
	{
		position: [
			2,
			1,
			-5
		],
		scale: .5
	},
	{
		position: [
			-3,
			-1,
			-8
		],
		scale: .8
	},
	{
		position: [
			1,
			-2,
			-6
		],
		scale: .6
	},
	{
		position: [
			-2,
			2,
			-7
		],
		scale: .4
	},
	{
		position: [
			4,
			0,
			-9
		],
		scale: .7
	}
];
function FloatingShape({ position, scale, color }) {
	const meshRef = useRef(null);
	useFrame((state, delta) => {
		const mesh = meshRef.current;
		if (!mesh) return;
		mesh.rotation.x += delta * .2;
		mesh.rotation.y += delta * .3;
		mesh.position.y = position[1] + Math.sin(state.clock.elapsedTime * .5) * .5;
	});
	return /* @__PURE__ */ jsx(Float, {
		speed: .8,
		rotationIntensity: .7,
		floatIntensity: .4,
		children: /* @__PURE__ */ jsxs("mesh", {
			ref: meshRef,
			position,
			scale,
			children: [/* @__PURE__ */ jsx("icosahedronGeometry", { args: [1, 1] }), /* @__PURE__ */ jsx("meshStandardMaterial", {
				color,
				transparent: true,
				opacity: .45,
				wireframe: true,
				emissive: color,
				emissiveIntensity: .18
			})]
		})
	});
}
function Particles({ color }) {
	const particlesRef = useRef(null);
	const positions = useMemo(() => {
		const values = /* @__PURE__ */ new Float32Array(3300);
		for (let index = 0; index < values.length; index += 1) values[index] = (Math.random() - .5) * 20;
		return values;
	}, []);
	useFrame((_state, delta) => {
		const points = particlesRef.current;
		if (!points) return;
		points.rotation.x -= delta / 10;
		points.rotation.y -= delta / 15;
	});
	return /* @__PURE__ */ jsx("group", {
		rotation: [
			0,
			0,
			Math.PI / 4
		],
		children: /* @__PURE__ */ jsx(Points, {
			ref: particlesRef,
			positions,
			stride: 3,
			frustumCulled: false,
			children: /* @__PURE__ */ jsx(PointMaterial, {
				transparent: true,
				color,
				size: .04,
				sizeAttenuation: true,
				depthWrite: false,
				opacity: .45
			})
		})
	});
}
function PortfolioBackground() {
	const [palette, setPalette] = useState(null);
	useEffect(() => {
		const styles = getComputedStyle(document.documentElement);
		setPalette({
			accent: styles.getPropertyValue("--portfolio-accent").trim(),
			coral: styles.getPropertyValue("--portfolio-coral").trim(),
			lime: styles.getPropertyValue("--portfolio-lime").trim()
		});
	}, []);
	if (!palette?.accent || !palette.coral || !palette.lime) return null;
	const shapeColors = [
		palette.accent,
		palette.coral,
		palette.lime,
		palette.accent,
		palette.coral
	];
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none fixed inset-0 z-[3] opacity-70",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxs(Canvas, {
			camera: {
				position: [
					0,
					0,
					1
				],
				fov: 75,
				near: .1,
				far: 1e3
			},
			dpr: [1, 1.35],
			children: [
				/* @__PURE__ */ jsx("ambientLight", { intensity: .3 }),
				/* @__PURE__ */ jsx("pointLight", {
					position: [
						10,
						10,
						10
					],
					intensity: .7
				}),
				/* @__PURE__ */ jsx(Particles, { color: palette.accent }),
				shapePositions.map((shape, index) => /* @__PURE__ */ jsx(FloatingShape, {
					position: shape.position,
					scale: shape.scale,
					color: shapeColors[index] ?? palette.accent
				}, index))
			]
		})
	});
}
//#endregion
export { PortfolioBackground as default };
