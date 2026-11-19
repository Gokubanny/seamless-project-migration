import { i as __toESM } from "../_runtime.mjs";
import { a as useFrame, i as Canvas, n as Float, r as PointMaterial, t as Points } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PortfolioBackground-CbjgVOQY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	const meshRef = (0, import_react.useRef)(null);
	useFrame((state, delta) => {
		const mesh = meshRef.current;
		if (!mesh) return;
		mesh.rotation.x += delta * .2;
		mesh.rotation.y += delta * .3;
		mesh.position.y = position[1] + Math.sin(state.clock.elapsedTime * .5) * .5;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
		speed: .8,
		rotationIntensity: .7,
		floatIntensity: .4,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: meshRef,
			position,
			scale,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [1, 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
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
	const particlesRef = (0, import_react.useRef)(null);
	const positions = (0, import_react.useMemo)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		rotation: [
			0,
			0,
			Math.PI / 4
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Points, {
			ref: particlesRef,
			positions,
			stride: 3,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointMaterial, {
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
	const [palette, setPalette] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-[3] opacity-70",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .3 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
					position: [
						10,
						10,
						10
					],
					intensity: .7
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { color: palette.accent }),
				shapePositions.map((shape, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingShape, {
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
