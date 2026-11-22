import * as React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, ArrowUpRight, Award, Braces, Code2, ExternalLink, FileText, Github, GraduationCap, Layers2, Linkedin, Mail, Menu, MessageCircle, Send, Server, Settings2, X } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { z } from "zod";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
var marvellous_benji_high_resolution_logo_transparent_1_png_asset_default = {
	version: 1,
	asset_id: "2af582ed-842c-4f03-8c97-ad9fb6ca935b",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795087806/ouz2euqjoarxtekwvq6u-removebg-preview_1_ptua2o.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/2af582ed-842c-4f03-8c97-ad9fb6ca935b/marvellous-benji-high-resolution-logo-transparent_1.png",
	original_filename: "marvellous-benji-high-resolution-logo-transparent_1.png",
	size: 25286,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:42Z"
};
var cosmic_bg_2m4tagmk1g_jpg_asset_default = {
	version: 1,
	asset_id: "c3d6f72e-abf1-4d46-8416-33687605e8a9",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
	url: "/__l5e/assets-v1/c3d6f72e-abf1-4d46-8416-33687605e8a9/cosmic-bg-2m4tagmk1g.jpg",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/c3d6f72e-abf1-4d46-8416-33687605e8a9/cosmic-bg-2m4tagmk1g.jpg",
	original_filename: "cosmic-bg-2m4tagmk1g.jpg",
	size: 727910,
	content_type: "image/jpeg",
	created_at: "2026-11-10T05:23:30Z"
};
var grave_haven_lzzxti_png_asset_default = {
	version: 1,
	asset_id: "237aad81-95e6-4bfb-8102-65902f81b6e9",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1772017145/novusguard/inspections/699ed1e05d5ab0e0bd4ae37f/gate_view/gprjon7zhhjwlkefj9lo.jpg",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/237aad81-95e6-4bfb-8102-65902f81b6e9/grave-haven_lzzxti.png",
	original_filename: "grave-haven_lzzxti.png",
	size: 166425,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:32Z"
};
var grave_haventailor_png_asset_default = {
	version: 1,
	asset_id: "237aad81-95e6-ed6b-8102-65902f81b6e9",
	project_id: "e0f2d879-9e57-420a-fg87-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1772017145/novusguard/inspections/699ed1e05d5ab0e0bd4ae37f/gate_view/gprjon7zhhjwlkefj9lo.jpg",
	r2_key: "a/v1/e0f2d879-9e57-420a-fg87-c08a990b1442/237aad81-95e6-ed6b-8102-65902f81b6e9/grave-haventailor.png",
	original_filename: "grave-haventailor.png",
	size: 166425,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:32Z"
};
var grave_havencustomer_png_asset_default = {
	version: 1,
	asset_id: "237aad81-95e6-4bfb-8102-65902f81cv89",
	project_id: "e0f2d879-9e57-420a-867a-fg4a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1772017145/novusguard/inspections/699ed1e05d5ab0e0bd4ae37f/gate_view/gprjon7zhhjwlkefj9lo.jpg",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-fg4a990b1442/237aad81-95e6-4bfb-8102-65902f81cv89/grave-havencustomer.png",
	original_filename: "grave-havencustomer.png",
	size: 166425,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:32Z"
};
var grave_havenabout_png_asset_default = {
	version: 1,
	asset_id: "237aad81-10e6-4bfb-8102-65902f81b6e9",
	project_id: "e0f2er39-9e57-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1772017145/novusguard/inspections/699ed1e05d5ab0e0bd4ae37f/gate_view/gprjon7zhhjwlkefj9lo.jpg",
	r2_key: "a/v1/e0f2er39-9e57-420a-867a-c08a990b1442/237aad81-10e6-4bfb-8102-65902f81b6e9/grave-havenabout.png",
	original_filename: "grave-havenabout.png",
	size: 166425,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:32Z"
};
var health_connect_bb9n9k_png_asset_default = {
	version: 1,
	asset_id: "c2f5e89b-6089-416c-8cf8-dd9057c06dc5",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1767317766/health-connect_bb9n9k.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/c2f5e89b-6089-416c-8cf8-dd9057c06dc5/health-connect_bb9n9k.png",
	original_filename: "health-connect_bb9n9k.png",
	size: 1223976,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:34Z"
};
var health_connectabout_png_asset_default = {
	version: 1,
	asset_id: "c2f5e89b-6089-416c-8cf8-dd9057c60dc5",
	project_id: "e0f2d879-9e57-420a-867a-c08a780b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1767317766/health-connect_bb9n9k.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a780b1442/c2f5e89b-6089-416c-8cf8-dd9057c60dc5/health-connectabout.png",
	original_filename: "health-connectabout.png",
	size: 1223976,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:34Z"
};
var health_connectdoctor_png_asset_default = {
	version: 1,
	asset_id: "rff5e89b-6089-416c-8cf8-dd9057c60dc5",
	project_id: "f4f2d879-9e57-420a-867a-c08a780b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1767317766/health-connect_bb9n9k.png",
	r2_key: "a/v1/f4f2d879-9e57-420a-867a-c08a780b1442/rff5e89b-6089-416c-8cf8-dd9057c60dc5/health-connecdoctor.png",
	original_filename: "health-connecdoctor.png",
	size: 1223976,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:34Z"
};
var health_connectpatient_png_asset_default = {
	version: 1,
	asset_id: "c2f5e89b-6089-416c-8cf8-rr9057c60dc5",
	project_id: "e0f2d879-9e57-420a-867a-c08a780b13f2",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1767317766/health-connect_bb9n9k.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a780b13f2/c2f5e89b-6089-416c-8cf8-rr9057c60dc5/health-connectpatient.png",
	original_filename: "health-connectpatient.png",
	size: 1223976,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:34Z"
};
var health_connectconsultation_png_asset_default = {
	version: 1,
	asset_id: "d675e89b-6089-416c-8cf8-dd9057c60dc5",
	project_id: "e0f2d879-9e57-420a-867a-c08a780b1987",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1767317766/health-connect_bb9n9k.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a780b1987/d675e89b-6089-416c-8cf8-dd9057c60dc5/health-connectconsultation.png",
	original_filename: "health-connectconsultation.png",
	size: 1223976,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:34Z"
};
var image_w71kek_png_asset_default = {
	version: 1,
	asset_id: "9a97c36d-e988-492f-a537-8f9e9aae86b9",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1767317819/image_w71kek.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/9a97c36d-e988-492f-a537-8f9e9aae86b9/image_w71kek.png",
	original_filename: "image_w71kek.png",
	size: 1070317,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:40Z"
};
var hopebridgeabout_png_asset_default = {
	version: 1,
	asset_id: "9a97c36d-e988-492f-a537-8f9e9iii86b9",
	project_id: "e0f2d879-9ehh-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065137/abouthope_bridge_ibmacp.png",
	r2_key: "a/v1/e0f2d879-9ehh-420a-867a-c08a990b1442/9a97c36d-e988-492f-a537-8f9e9iii86b9/hopebridgeabout.png",
	original_filename: "hopebridgeabout.png",
	size: 1070317,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:40Z"
};
var hopebridgeprogram_png_asset_default = {
	version: 1,
	asset_id: "pp97c36d-e988-492f-a537-8f9e9iii86b9",
	project_id: "euf2d879-9ehh-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065138/programhopebridge_i6qn5l.png",
	r2_key: "a/v1/euf2d879-9ehh-420a-867a-c08a990b1442/pp97c36d-e988-492f-a537-8f9e9iii86b9/hopebridgeprogram.png",
	original_filename: "hopebridgeprogram.png",
	size: 1070317,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:40Z"
};
var hopebrigdesupport_png_asset_default = {
	version: 1,
	asset_id: "9a97c36d-e988-492f-a537-8f9e9oki86b9",
	project_id: "e0f2d879-9ehh-420a-867a-c08a990b100p",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065137/donatehopebridge_s6z9bw.png",
	r2_key: "a/v1/e0f2d879-9ehh-420a-867a-c08a990b100p/9a97c36d-e988-492f-a537-8f9e9oki86b9/hopebridgesupport.png",
	original_filename: "hopebridgesupport.png",
	size: 1070317,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:40Z"
};
var hive_azhuuk_png_asset_default = {
	version: 1,
	asset_id: "03754687-2ea8-4176-ab26-440006e5555c",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1778792266/hive_azhuuk.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/03754687-2ea8-4176-ab26-440006e5555c/hive_azhuuk.png",
	original_filename: "hive_azhuuk.png",
	size: 1264091,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:36Z"
};
var hivehr_png_asset_default = {
	version: 1,
	asset_id: "03754687-2ea8-4176-s02i-440006e5555c",
	project_id: "e0f2d879-9e57-d09s-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795097195/staff-hive-HR_dashboard_q9rhky.png",
	r2_key: "a/v1/e0f2d879-9e57-d09s-867a-c08a990b1442/03754687-2ea8-4176-s02i-440006e5555c/hivehr.png",
	original_filename: "hivehr.png",
	size: 1264091,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:36Z"
};
var hivehrattendance_png_asset_default = {
	version: 1,
	asset_id: "03754687-2ea8-f02j-ab26-440006e5555c",
	project_id: "e0f2d879-f6r7-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795097245/staff-hive-HR_Attendance_b8na6o.png",
	r2_key: "a/v1/e0f2d879-f6r7-420a-867a-c08a990b1442/03754687-2ea8-f02j-ab26-440006e5555c/hivehrttendance.png",
	original_filename: "hivehrttendance.png",
	size: 1264091,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:36Z"
};
var hiveemployee_png_asset_default = {
	version: 1,
	asset_id: "03754687-2ea8-4176-ab26-440006efhs5c",
	project_id: "e0f2d879-9e57-420a-34re-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795097214/staff-hive-employee_dashboard_xka21o.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-34re-c08a990b1442/03754687-2ea8-4176-ab26-440006efhs5c/hiveemployee.png",
	original_filename: "hiveemployee.png",
	size: 1264091,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:36Z"
};
var hiveemployeeattendance_png_asset_default = {
	version: 1,
	asset_id: "03754687-df89-4176-ab26-440006e5555c",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b333e",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795097258/staff-hive-employee_Attendance_dznsto.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b333e/03754687-df89-4176-ab26-440006e5555c/hiveemployeeattendance.png",
	original_filename: "hiveemployeeattendance.png",
	size: 1264091,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:36Z"
};
var hms_f4bngw_png_asset_default = {
	version: 1,
	asset_id: "bb63aaf6-fbbd-4760-ae2e-577f4388a7bb",
	project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
	url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1777451668/sports-tournament/y7rkgmqqvpbh2eyy1kio.png",
	r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/bb63aaf6-fbbd-4760-ae2e-577f4388a7bb/hms_f4bngw.png",
	original_filename: "hms_f4bngw.png",
	size: 1433382,
	content_type: "image/png",
	created_at: "2026-11-10T05:23:38Z"
};
var visibleProjects = [
	{
		id: "nexfordedu",
		slug: "nexfordedu",
		title: "NexfordEdu",
		description: "An online learning platform with AI-led study and biometric attendance.",
		technologies: [
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"Express.js",
			"MongoDB"
		],
		image: {
			src: {
				asset_id: "e08f52d7-fc66-49c0-a49c-829c39c676de",
				content_type: "image/png",
				created_at: "2026-10-10T00:10:07Z",
				original_filename: "nexford-landing.png",
				project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
				r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/e08f52d7-fc66-49c0-a49c-829c39c676de/printblink-products.png",
				size: 310374,
				url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1776418280/nex_f059jo.png",
				version: 1
			}.url,
			alt: "Medi-core project preview"
		},
		gallery: [
			{
				src: {
					asset_id: "708f52d7-fcnn-49c0-a49c-829c39c676oo",
					content_type: "image/png",
					created_at: "2026-10-10T00:10:07Z",
					original_filename: "nexfordlogin.png",
					project_id: "40002f61-e8bf-4130-9824-44ttdf67cbb9",
					r2_key: "a/v1/40002f61-e8bf-4130-9824-44ttdf67cbb9/708f52d7-fcnn-49c0-a49c-829c39c676oo/nexfordlogin.png",
					size: 310374,
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795089112/nexfordlogin_w7pj95.png",
					version: 1
				}.url,
				alt: "Butta Rush desktop menu with category filters, Nigerian meals and naira prices"
			},
			{
				src: {
					asset_id: "e08f52d7-fc66-49c0-a49c-829c39c676de",
					content_type: "image/png",
					created_at: "2026-10-10T00:10:07Z",
					original_filename: "nexfordlecture.png",
					project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
					r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/e08f52d7-fc66-49c0-a49c-829c39c676de/nexfordlecture.png",
					size: 310374,
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065369/nexfordlecturer_oa9mam.png",
					version: 1
				}.url,
				alt: "Butta Rush desktop pickup booking with date, hourly time slots, address and WhatsApp order summary"
			},
			{
				src: {
					asset_id: "e08f52d7-fcnn-49c0-a49c-829c39c676de",
					content_type: "image/png",
					created_at: "2026-10-10T00:10:07Z",
					original_filename: "nexfordstudent.png",
					project_id: "90002f61-e8bf-4130-9824-57ttdf67cbb9",
					r2_key: "a/v1/90002f61-e8bf-4130-9824-57ttdf67cbb9/e08f52d7-fcnn-49c0-a49c-829c39c676de/nexfordstudent.png",
					size: 310374,
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065368/student_y7scwn.png",
					version: 1
				}.url,
				alt: "Butta Rush mobile menu showing Jollof Rice and the order basket with a naira total"
			},
			{
				src: {
					asset_id: "e08f52d7-fcnn-49c0-a49c-829c39c676oo",
					content_type: "image/png",
					created_at: "2026-10-10T00:10:07Z",
					original_filename: "nexfordadmin.png",
					project_id: "90002f61-e8bf-4130-9824-44ttdf67cbb9",
					r2_key: "a/v1/90002f61-e8bf-4130-9824-44ttdf67cbb9/e08f52d7-fcnn-49c0-a49c-829c39c676oo/nexfordadmin.png",
					size: 310374,
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065368/schooladmin_jpkpmp.png",
					version: 1
				}.url,
				alt: "Butta Rush mobile pickup form and order summary ready to send on WhatsApp"
			}
		],
		featured: true,
		visible: true,
		liveDemo: "https://nexford-edu.onrender.com",
		github: "https://github.com/Gokubanny/novalearn-suite.git",
		tone: "one",
		caseStudy: {
			audience: "Students and institutions that want AI-supported study, dependable attendance records and clear academic insight.",
			overview: "An academic management platform combining AI-powered learning, biometric attendance, and real-time institutional analytics.",
			challenge: "Institutions need reliable attendance records and a live view of how learners are doing, while students benefit from guided study support.",
			approach: "AI-powered learning, biometric attendance and real-time analytics sit together in one academic management platform built on Node.js, Express and MongoDB.",
			features: [
				"AI-powered learning",
				"Biometric attendance",
				"Real-time institutional analytics"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "Bringing AI, biometrics and analytics together in one TypeScript full-stack academic platform."
		}
	},
	{
		id: "medi-core",
		slug: "medi-core",
		title: "Medi-core",
		description: "A multi-tenant hospital management platform with role-based access.",
		technologies: [
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"Express.js",
			"MongoDB"
		],
		featured: true,
		visible: true,
		image: {
			src: hms_f4bngw_png_asset_default.url,
			alt: "Medi-core Landing Page"
		},
		gallery: [
			{
				src: {
					version: 1,
					asset_id: "9718ee84-y8y8-4e41-a60c-fa58ff76f12a",
					project_id: "w2d45e8f-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795089091/login_cxuctu.png",
					r2_key: "a/v1/w2d45e8f-c7fa-4e3f-932d-b1cd18d84104/9718ee84-y8y8-4e41-a60c-fa58ff76f12a/medicorelogin.png",
					original_filename: "medicorelogin.png",
					size: 141548,
					content_type: "image/png",
					created_at: "2026-11-17T00:13:06Z"
				}.url,
				alt: "Medicore login page"
			},
			{
				src: hms_f4bngw_png_asset_default.url,
				alt: "Doctor's Dashboard and workspace"
			},
			{
				src: hms_f4bngw_png_asset_default.url,
				alt: "Patient's Dahboard"
			},
			{
				src: hms_f4bngw_png_asset_default.url,
				alt: "Pharmacy's Dashboard"
			}
		],
		liveDemo: "https://medicore-xo9h.onrender.com",
		github: "https://github.com/Gokubanny/medicore-health-platform.git",
		tone: "three",
		caseStudy: {
			audience: "Hospitals and healthcare organizations that need one platform for their staff, with each organization's data kept separate.",
			overview: "An enterprise hospital management platform built around data isolation and role-based access, designed to streamline operations and support patient care across organizations.",
			challenge: "Hospital software has to serve many organizations and many kinds of staff while keeping each organization's data strictly separate.",
			approach: "A multi-tenant architecture isolates data per organization, and role-based access limits each user to what their job requires. The API runs on Node.js, Express and MongoDB behind a TypeScript front end.",
			features: [
				"Multi-tenant data isolation",
				"Role-based access control",
				"Streamlined hospital operations",
				"Support for patient care across organizations"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "Enterprise-style design: tenant isolation and permissions built into the foundation of a TypeScript full-stack platform."
		}
	},
	{
		id: "tracleads",
		slug: "tracleads",
		title: "Tracleads (CRM)",
		description: "A multi-tenant CRM and sales platform for managing leads, contacts, companies, deals and tasks, with role-based access and reporting.",
		technologies: [
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"MongoDB"
		],
		featured: true,
		visible: true,
		status: "in development",
		companyLabel: "Built at Scaletru",
		image: {
			src: {
				version: 1,
				asset_id: "240ea9d5-965e-42ea-8252-d92db5abeecf",
				project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896175/tracleads-portfolio-mockup.png",
				r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/240ea9d5-965e-42ea-8252-d92db5abeecf/tracleads-portfolio-mockup.png",
				original_filename: "tracleads-portfolio-mockup.png",
				size: 258741,
				content_type: "image/png",
				created_at: "2026-11-16T04:05:17Z"
			}.url,
			alt: "Tracleads CRM workspace and sales pipeline"
		},
		gallery: [
			{
				src: {
					asset_id: "a4557b98-f250-2p72-a618-73f4cf8b0b10",
					content_type: "image/png",
					created_at: "2026-10-08T04:38:21Z",
					original_filename: "tracleads-login-mockup.png",
					project_id: "30002f61-e8bf-4130-98vv-57eedf67cdd9",
					r2_key: "a/v1/30002f61-e8bf-4130-98vv-57eedf67cdd9/a4557b98-f250-2p72-a618-73f4cf8b0b10/tracleads-login-mockup.png",
					size: 259823,
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791978040/tracleads-login-mockup.png",
					version: 1
				}.url,
				alt: "Butta Rush desktop menu with category filters, Nigerian meals and naira prices"
			},
			{
				src: {
					asset_id: "a4557b98-f250-4a72-a618-73f4cf8b0b10",
					content_type: "image/png",
					created_at: "2026-10-08T04:38:21Z",
					original_filename: "tracleads-portfolio-mockup.png",
					project_id: "30002f61-e8bf-4130-9824-57eedf67cdd9",
					r2_key: "a/v1/30002f61-e8bf-4130-9824-57eedf67cdd9/a4557b98-f250-4a72-a618-73f4cf8b0b10/tracleads-workspace-setup-mockup.png",
					size: 259823,
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791978040/tracleads-workspace-setup-mockup.png",
					version: 1
				}.url,
				alt: "Butta Rush desktop pickup booking with date, hourly time slots, address and WhatsApp order summary"
			},
			{
				src: {
					asset_id: "a7577b98-f250-4a72-a618-73f4cf8b0b10",
					content_type: "image/png",
					created_at: "2026-10-08T04:38:21Z",
					original_filename: "tracleads-portfolio-mockup.png",
					project_id: "90002f61-e8bf-4130-9824-57eedf67cdd9",
					r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cdd9/a7577b98-f250-4a72-a618-73f4cf8b0b10/tracleads-dashboard-mockup.png",
					size: 259823,
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791978040/tracleads-dashboard-mockup.png",
					version: 1
				}.url,
				alt: "Butta Rush mobile menu showing Jollof Rice and the order basket with a naira total"
			},
			{
				src: {
					asset_id: "a4557b98-f365-4a72-a618-73f4cf8b0b10",
					content_type: "image/png",
					created_at: "2026-10-08T04:38:21Z",
					original_filename: "tracleads-lead-mockup.png",
					project_id: "30002f61-d8bf-4130-9824-57eedf67cdd9",
					r2_key: "a/v1/30002f61-d8bf-4130-9824-57eedf67cdd9/a4557b98-f365-4a72-a618-73f4cf8b0b10/tracleads-lead-mockup.png",
					size: 259823,
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791978040/tracleads-leads-mockup.png",
					version: 1
				}.url,
				alt: "Butta Rush mobile pickup form and order summary ready to send on WhatsApp"
			}
		],
		tone: "three",
		caseStudy: {
			short: "A full-spec CRM and sales operations workspace built for daily internal use.",
			audience: "Sales teams at growing businesses, starting with Scaletru's own team as the daily users of the workspace.",
			overview: "Tracleads is Scaletru's internal CRM and sales operations workspace, designed to manage client deals from first enquiry through to close. It serves as both an operational system for the team and a showcase of full commercial SaaS execution.",
			challenge: "Growing businesses often manage sales across disconnected spreadsheets, fragmented chat histories and manual reminders. That creates weak ownership, incomplete customer context and follow-ups that are easy to miss as deal volume grows.",
			approach: "The product is organized around a multi-tenant workspace model, with secure account access and structured onboarding for each business. The sales workflow focuses on capturing and qualifying leads, moving deals through defined stages, maintaining customer records, scheduling follow-ups and reviewing performance.",
			built: [
				"Multi-tenant workspace onboarding with business profile setup",
				"Secure account access with Google sign-in and session-aware workspace protection",
				"Lead, contact and company management across a shared CRM workspace",
				"Deal pipeline, task scheduling and reporting views for daily sales operations"
			],
			features: [
				"Lead capture with search, filtering and sorting",
				"Visual deal pipeline from New to Qualified, Proposal and Won",
				"Connected contacts and companies directory",
				"Tasks, follow-up scheduling and reporting dashboards"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "Tracleads demonstrates Scaletru's ability to take a commercial SaaS product from system design through secure onboarding and operational workflows, delivering multi-tenant software for repeated daily use."
		}
	},
	{
		id: "arenax",
		slug: "arenax",
		title: "ArenaX",
		description: "A student sports tournament management platform with single-elimination brackets, invite-based onboarding and admin score confirmation.",
		technologies: [
			"React",
			"TypeScript",
			"Vite",
			"Node.js",
			"Express",
			"MongoDB"
		],
		featured: true,
		visible: true,
		image: {
			src: {
				version: 1,
				asset_id: "12b11b01-1f69-429a-9263-f7a88e4f95cb",
				project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
				url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065139/Screenshot_2026-11-19_060307_zob9br.png",
				r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/12b11b01-1f69-429a-9263-f7a88e4f95cb/arenax.jpg",
				original_filename: "arenax.jpg",
				size: 91376,
				content_type: "image/jpeg",
				created_at: "2026-11-16T04:05:19Z"
			}.url,
			alt: "ArenaX tournament management interface"
		},
		gallery: [
			{
				src: {
					version: 1,
					asset_id: "12b00b01-4t69-429a-9263-f7a88e4f95cb",
					project_id: "0040dce2-c7fa-3r3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065137/arenaxlive_romtsi.png",
					r2_key: "a/v1/0040dce2-c7fa-3r3f-932d-b1cd18d84104/12b00b01-4t69-429a-9263-f7a88e4f95cb/arenaxlive.jpg",
					original_filename: "arenaxlive.jpg",
					size: 91376,
					content_type: "image/jpeg",
					created_at: "2026-11-16T04:05:19Z"
				}.url,
				alt: "Arena Login page"
			},
			{
				src: {
					version: 1,
					asset_id: "12b00b01-1f69-429a-9263-f7a88e4f95cb",
					project_id: "0040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065138/arenaxdashboard_jlyyc9.png",
					r2_key: "a/v1/0040dce2-c7fa-4e3f-932d-b1cd18d84104/12b00b01-1f69-429a-9263-f7a88e4f95cb/arenaxdashboard.jpg",
					original_filename: "arenaxdashboard.jpg",
					size: 91376,
					content_type: "image/jpeg",
					created_at: "2026-11-16T04:05:19Z"
				}.url,
				alt: "ArenaX team representative dahsboard"
			},
			{
				src: {
					version: 1,
					asset_id: "12b05t01-4t69-429a-9263-f7a88e4f95cb",
					project_id: "0040dce2-c7fa-3r3f-932d-b1cd18d84890",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1795065138/arenaxdashboard_jlyyc9.png",
					r2_key: "a/v1/0040dce2-c7fa-3r3f-932d-b1cd18d84890/12b05t01-4t69-429a-9263-f7a88e4f95cb/arenaxtournament.jpg",
					original_filename: "arenaxtournament.jpg",
					size: 91376,
					content_type: "image/jpeg",
					created_at: "2026-11-16T04:05:19Z"
				}.url,
				alt: "Arenax browse tournament page"
			}
		],
		liveDemo: "https://arenax-sdlf.onrender.com",
		github: "https://github.com/Gokubanny/arenax.git",
		tone: "one",
		caseStudy: {
			audience: "Student sports organizers who run tournaments, and the students who compete in them.",
			overview: "ArenaX is a student sports tournament management platform. It brings single-elimination brackets, invite-based onboarding and admin score confirmation into one place.",
			challenge: "Student tournaments are often run through group chats and spreadsheets, which makes brackets, results and score disputes hard to keep straight.",
			approach: "Brackets follow a single-elimination format, participants join by invitation, and an admin confirms scores. It is built with React, TypeScript and Vite on a Node.js, Express and MongoDB API.",
			features: [
				"Single-elimination brackets with winners advancing round by round",
				"Invite-based onboarding",
				"Admin score confirmation"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "A complete tournament workflow, from invitations to brackets to confirmed results, built end to end on a typed React and Node.js stack."
		}
	},
	{
		id: "essence",
		slug: "Essence",
		title: "Essence",
		description: "A concept fragrance house with a 100-product catalog, guided scent discovery, a wishlist and a demo checkout journey, brought together in a considered editorial storefront.",
		technologies: [
			"React",
			"Vite",
			"shadcn/ui",
			"Tailwind CSS",
			"TypeScript",
			"Node.js / Express"
		],
		visible: true,
		image: {
			src: {
				version: 1,
				asset_id: "ed6bf3be-2b9e-49bf-b83e-b9b0ce563eee",
				project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895852/essence-homepage-laptop.jpg",
				r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/ed6bf3be-2b9e-49bf-b83e-b9b0ce563eee/essence-homepage-laptop.jpg",
				original_filename: "essence-homepage-laptop.jpg",
				size: 347107,
				content_type: "image/jpeg",
				created_at: "2026-10-13T10:18:05Z"
			}.url,
			alt: "Essence fragrance storefront homepage shown on a laptop with the Velvet Rose perfume feature"
		},
		liveDemo: "https://hopebridge-foundation.onrender.com",
		github: "https://github.com/Gokubanny/HopeBridge-Foundation.git",
		gallery: [{
			src: {
				version: 1,
				asset_id: "c1e505f6-0984-4186-849e-d718ad960970",
				project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895852/essence-catalog-desktop-mobile.jpg",
				r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/c1e505f6-0984-4186-849e-d718ad960970/essence-catalog-desktop-mobile.jpg",
				original_filename: "essence-catalog-desktop-mobile.jpg",
				size: 288289,
				content_type: "image/jpeg",
				created_at: "2026-10-13T10:18:10Z"
			}.url,
			alt: "Essence fragrance catalog on desktop and mobile with collection filters and perfume product cards"
		}, {
			src: {
				version: 1,
				asset_id: "c9aeaff3-0d4b-45b9-8e3b-c3b1db1644fe",
				project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895853/essence-product-desktop-mobile.jpg",
				r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/c9aeaff3-0d4b-45b9-8e3b-c3b1db1644fe/essence-product-desktop-mobile.jpg",
				original_filename: "essence-product-desktop-mobile.jpg",
				size: 247481,
				content_type: "image/jpeg",
				created_at: "2026-10-13T10:18:14Z"
			}.url,
			alt: "Essence Velvet Rose product page on desktop and mobile with bottle sizes, longevity, quantity and add-to-bag controls"
		}],
		tone: "two",
		caseStudy: {
			short: "A concept fragrance house with a 100-product catalog, guided scent discovery, a wishlist and a demo checkout journey, brought together in a considered editorial storefront.",
			audience: "Landlords and tenants in Lagos and Abuja who want to rent without agents or agency fees.",
			overview: "Essence is a concept perfume brand designed and built as a working storefront demonstration. Rather than a generic product grid, the experience uses language, imagery and guided discovery to evoke a quiet Scandinavian fragrance house. A hundred-product catalog connects to rich product pages, a scent quiz, a wishlist and a cart and checkout journey.",
			challenge: "The project began as a general home-goods store. The challenge was to transform it into a distinctive fragrance house while retaining its commerce foundation. Because customers cannot smell perfume through a screen, the interface needed to communicate scent through evocative copy, product photography and clear fragrance information.",
			approach: "We paired an editorial identity with a structured shopping journey. Cormorant Garamond headings, Karla body text, warm neutrals and terracotta accents give Essence the feel of a fragrance journal. Collection filters, size-aware pricing and a five-question scent quiz turn browsing into considered discovery, while shared cart and wishlist state keep the experience consistent across pages.",
			built: [
				"A 100-product fragrance catalog organized by collection, discovery sets and gift sets",
				"Product pages with 5 ml, 10 ml and 50 ml sizes and size-aware pricing",
				"A guided scent quiz ending in personalized fragrance recommendations",
				"A wishlist with sorting, size-availability filters, removal undo and add-to-bag actions",
				"An editorial homepage with rotating fragrance highlights",
				"A demo cart and checkout journey with size-specific line items",
				"An internal perfume directory for reviewing product imagery status"
			],
			features: [
				"For Her, For Him and Unisex collections with discovery and gift sets",
				"Top, heart and base notes, concentration, longevity and sillage information",
				"Five quiz questions covering mood, season, notes, longevity and sillage",
				"Consistent wishlist hearts and shared client-side shopping state",
				"A bespoke scent-loader animation and carefully written empty states",
				"Brand-consistent copy from the first homepage headline through demo checkout"
			],
			outcomeLabel: "Demo-ready outcome",
			outcome: "Essence presents a cohesive concept fragrance house with a hundred products, real brand names and imagery, guided scent discovery and a checkout path that carries the brand voice throughout. It is demo-ready, not a live trading store: accounts, persistent orders and real payments remain future Lovable Cloud connections, alongside publishing the concept for its next stage."
		}
	},
	{
		id: "butta-rush",
		slug: "butta-rush",
		title: "Butta Rush",
		description: "A bakery and catering website where customers browse the menu, prepare an order and choose a pickup time.",
		technologies: ["React", "TypeScript"],
		featured: false,
		visible: true,
		companyLabel: "Built at Scaletru",
		image: {
			src: {
				version: 1,
				asset_id: "f7bae1f3-6810-492f-b40c-e621b2d5d67d",
				project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895888/butta-rush-home-laptop.png",
				r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/f7bae1f3-6810-492f-b40c-e621b2d5d67d/butta-rush-home-laptop.png",
				original_filename: "butta-rush-home-laptop.png",
				size: 1269233,
				content_type: "image/png",
				created_at: "2026-11-16T04:05:28Z"
			}.url,
			alt: "Butta Rush bakery ordering website on a laptop"
		},
		liveDemo: "https://hopebridge-foundation.onrender.com",
		github: "https://github.com/Gokubanny/HopeBridge-Foundation.git",
		gallery: [
			{
				src: {
					version: 1,
					asset_id: "4949dd35-a84d-4a7b-b345-594e5cf6febd",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895903/butta-rush-menu-desktop.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/4949dd35-a84d-4a7b-b345-594e5cf6febd/butta-rush-menu-desktop.png",
					original_filename: "butta-rush-menu-desktop.png",
					size: 2806811,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:29Z"
				}.url,
				alt: "Butta Rush desktop menu and order basket"
			},
			{
				src: {
					version: 1,
					asset_id: "6c50486e-ed52-4a02-a900-f89a545f13fa",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895879/butta-rush-pickup-desktop.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/6c50486e-ed52-4a02-a900-f89a545f13fa/butta-rush-pickup-desktop.png",
					original_filename: "butta-rush-pickup-desktop.png",
					size: 404045,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:30Z"
				}.url,
				alt: "Butta Rush desktop pickup booking form"
			},
			{
				src: {
					version: 1,
					asset_id: "906895f6-035d-447d-8781-3fe1662263ad",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895894/butta-rush-menu-mobile.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/906895f6-035d-447d-8781-3fe1662263ad/butta-rush-menu-mobile.png",
					original_filename: "butta-rush-menu-mobile.png",
					size: 1126201,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:31Z"
				}.url,
				alt: "Butta Rush menu on a mobile screen"
			},
			{
				src: {
					version: 1,
					asset_id: "72f381d0-456d-4b8c-8eb8-8e5bc9b6aa9a",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791895909/butta-rush-pickup-mobile.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/72f381d0-456d-4b8c-8eb8-8e5bc9b6aa9a/butta-rush-pickup-mobile.png",
					original_filename: "butta-rush-pickup-mobile.png",
					size: 280704,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:33Z"
				}.url,
				alt: "Butta Rush pickup booking on a mobile screen"
			}
		],
		tone: "two",
		caseStudy: {
			short: "A bakery and catering website that turns menu browsing into a ready-to-send WhatsApp order.",
			audience: "Customers who want to order cakes, small chops, pastries and party trays, and the owner who receives those orders on WhatsApp.",
			overview: "Butta Rush sells cakes, small chops, pastries and party trays. The website helps customers browse the menu, build an order, book a pickup time and send the details to the owner on WhatsApp.",
			challenge: "Orders came through scattered social-media chats, requiring the owner to retype menu details, calculate totals and coordinate pickup times one message at a time.",
			approach: "The experience keeps ordering simple: customers can browse and filter the menu, review a basket with a running subtotal, choose pickup details and hand off a complete order through WhatsApp, without requiring a database-backed checkout.",
			role: "Design & development",
			built: [
				"Homepage introducing the catering business and directing customers to browse or order",
				"Filterable menu with item quantities and a running subtotal",
				"Pickup date, time and address selection",
				"Pre-filled WhatsApp order containing items, totals and pickup details"
			],
			features: [
				"Inquiry-only items can be ordered without a listed price",
				"Past pickup dates are blocked and incomplete forms show inline errors",
				"Mobile-friendly menu filters and ordering controls",
				"Large tap targets and higher-contrast text"
			],
			outcomeLabel: "What was delivered",
			outcome: "A lightweight ordering flow combines menu discovery, basket totals, pickup scheduling and WhatsApp handoff in a static site that is simple to host and maintain."
		}
	},
	{
		id: "Geostaff",
		slug: "Geostaff-address-verification",
		title: "Geostaff Address Verification System",
		description: "A streamlined way to verify addresses and strengthen online security.",
		technologies: [
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"Express.js",
			"MongoDB"
		],
		visible: true,
		image: {
			src: {
				version: 1,
				asset_id: "d6a3dd53-ba21-4d6b-ac1c-fb00159272d0",
				project_id: "e0f2d879-9e57-420a-867a-c08a990b1442",
				url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1776404858/novus_iygd53.png",
				r2_key: "a/v1/e0f2d879-9e57-420a-867a-c08a990b1442/d6a3dd53-ba21-4d6b-ac1c-fb00159272d0/novus_iygd53.png",
				original_filename: "novus_iygd53.png",
				size: 182018,
				content_type: "image/png",
				created_at: "2026-11-10T05:23:44Z"
			}.url,
			alt: "Geostaff Address Verification System project preview"
		},
		gallery: [
			{
				src: {
					version: 1,
					asset_id: "r4d6dd53-e46f-4d6b-ac1c-fb00159272d0",
					project_id: "sc42d879-9e57-420a-867a-c08a990b1442",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1776404858/novus_iygd53.png",
					r2_key: "a/v1/sc42d879-9e57-420a-867a-c08a990b1442/r4d6dd53-e46f-4d6b-ac1c-fb00159272d0/geostaffadmin.png",
					original_filename: "geostaffadmin.png",
					size: 182018,
					content_type: "image/png",
					created_at: "2026-11-10T05:23:44Z"
				}.url,
				alt: "Geostaff Admin Dashboard"
			},
			{
				src: {
					version: 1,
					asset_id: "r4d6dd53-e46f-4d6b-ac1c-fb00159272d0",
					project_id: "sc42d879-9e57-420a-867a-c08a990b1442",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1776404858/novus_iygd53.png",
					r2_key: "a/v1/sc42d879-9e57-420a-867a-c08a990b1442/r4d6dd53-e46f-4d6b-ac1c-fb00159272d0/geostaffadmin.png",
					original_filename: "geostaffadmin.png",
					size: 182018,
					content_type: "image/png",
					created_at: "2026-11-10T05:23:44Z"
				}.url,
				alt: "Geostaff Employee Dashboard"
			},
			{
				src: {
					version: 1,
					asset_id: "r4d6dd53-ba21-4d6b-ac1c-fb00159272d0",
					project_id: "h8f2d879-9e57-420a-867a-c08a990b1442",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1776404858/novus_iygd53.png",
					r2_key: "a/v1/h8f2d879-9e57-420a-867a-c08a990b1442/r4d6dd53-ba21-4d6b-ac1c-fb00159272d0/geostaffaddress.png",
					original_filename: "geostaffaddress.png",
					size: 182018,
					content_type: "image/png",
					created_at: "2026-11-10T05:23:44Z"
				}.url,
				alt: "Geostaff Address details  Page"
			},
			{
				src: {
					version: 1,
					asset_id: "th76uj8k-e46f-4d6b-ac1c-fb00159272d0",
					project_id: "c5ef67yh-9e57-420a-867a-c08a990b1442",
					url: "https://res.cloudinary.com/dxpquojo2/image/upload/v1776404858/novus_iygd53.png",
					r2_key: "a/v1/c5ef67yh-9e57-420a-867a-c08a990b1442/th76uj8k-e46f-4d6b-ac1c-fb00159272d0/geostaffmanagement.png",
					original_filename: "geostaffmanagement.png",
					size: 182018,
					content_type: "image/png",
					created_at: "2026-11-10T05:23:44Z"
				}.url,
				alt: "Geostaff Employee Management List Page"
			}
		],
		liveDemo: "https://novus-vy80.onrender.com",
		tone: "two",
		caseStudy: {
			audience: "Teams that need to verify addresses and want to strengthen security in their applications.",
			overview: "An address verification platform designed for real-time validation and straightforward integration with existing applications.",
			challenge: "Unverified addresses weaken security checks and let bad data into applications.",
			approach: "Real-time validation behind a simple integration, so existing applications can add address verification without being rebuilt.",
			features: [
				"Real-time address validation",
				"Straightforward integration with existing applications",
				"Security-focused verification"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "Designing a focused verification service that other applications can plug into."
		}
	},
	{
		id: "directlet",
		slug: "directlet",
		title: "DirectLet",
		description: "A two-sided rental marketplace connecting verified Nigerian landlords directly with tenants in Lagos and Abuja, eliminating agent markups and scam-prone WhatsApp workflows.",
		technologies: [
			"React 19",
			"TanStack Start",
			"TanStack Router & Query",
			"Tailwind CSS",
			"TypeScript",
			"Socket.IO Client",
			"Leaflet / OpenStreetMap",
			"Node.js / Express"
		],
		featured: false,
		visible: true,
		status: "In development",
		companyLabel: "Built at ScaleTru",
		image: {
			src: {
				version: 1,
				asset_id: "374eaee5-4de8-44f5-9b8f-e60113d99f61",
				project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896674/directlet-landing-laptop-photo.png",
				r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/374eaee5-4de8-44f5-9b8f-e60113d99f61/directlet-landing-laptop-photo.png",
				original_filename: "directlet-landing-laptop-photo.png",
				size: 4608191,
				content_type: "image/png",
				created_at: "2026-11-16T04:05:23Z"
			}.url,
			alt: "DirectLet rental marketplace displayed on a laptop"
		},
		gallery: [
			{
				src: {
					version: 1,
					asset_id: "0b6b1b4a-5597-40a5-9719-d184e9dfb041",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896674/directlet-landing-laptop-photo.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/0b6b1b4a-5597-40a5-9719-d184e9dfb041/directlet-landing-shot.png",
					original_filename: "directlet-landing-shot.png",
					size: 672102,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:24Z"
				}.url,
				alt: "DirectLet rental marketplace homepage"
			},
			{
				src: {
					version: 1,
					asset_id: "72c34992-e958-4cb3-9369-70558181e6ba",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896644/directlet-landlord-dashboard-16x9.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/72c34992-e958-4cb3-9369-70558181e6ba/directlet-portfolio-shot.png",
					original_filename: "directlet-portfolio-shot.png",
					size: 992486,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:25Z"
				}.url,
				alt: "DirectLet property search and listing results"
			},
			{
				src: {
					version: 1,
					asset_id: "d048e495-1a7b-456e-848c-15460f7c5a3c",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896645/directlet-tenant-dashboard-4x3.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/d048e495-1a7b-456e-848c-15460f7c5a3c/directlet-tenant-dashboard-4x3.png",
					original_filename: "directlet-tenant-dashboard-4x3.png",
					size: 172771,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:27Z"
				}.url,
				alt: "DirectLet tenant dashboard"
			},
			{
				src: {
					version: 1,
					asset_id: "2b9132de-deb5-4309-b9e2-bcfe058c1345",
					project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896644/directlet-landlord-dashboard-16x9.png",
					r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/2b9132de-deb5-4309-b9e2-bcfe058c1345/directlet-landlord-dashboard-16x9.png",
					original_filename: "directlet-landlord-dashboard-16x9.png",
					size: 343947,
					content_type: "image/png",
					created_at: "2026-11-16T04:05:26Z"
				}.url,
				alt: "DirectLet landlord dashboard"
			}
		],
		tone: "one",
		caseStudy: {
			short: "A two-sided rental marketplace connecting landlords directly with tenants in Lagos and Abuja.",
			audience: "Landlords and tenants in Lagos and Abuja who want to rent without agents or agency fees.",
			overview: "DirectLet is a purpose-built rental marketplace tailored to the operational realities of the Nigerian residential property market. The platform connects vetted landlords with prospective tenants across major urban centres like Lagos and Abuja, removing unvetted intermediaries from the discovery, inspection, and agreement phases.",
			challenge: "Renting residential property in Nigeria is burdened by exorbitant 10–20% agent commission and 'agreement' fees, rampant listing fraud, and uncoordinated inspection arrangements conducted across fragmented WhatsApp threads. Without verified landlord identities or structured scheduling, both tenants and property owners endure severe trust deficits and operational friction.",
			approach: "The product focuses on trust verification and structured transaction checkpoints rather than open-ended classifieds. The frontend connects to modular REST and WebSocket services, with localized filtering, role-based dashboards and an inspection booking flow.",
			built: [
				"Full-featured two-sided marketplace frontend with dedicated Tenant, Landlord, and Admin operational portals",
				"Landlord listing management suite with verified credential badging and property status toggles",
				"Inspection booking and fee checkout pipeline (₦3,000–₦5,000) with real-time status tracking",
				"Real-time landlord-tenant messaging inbox powered by WebSockets with REST conversation history fallbacks",
				"Location-sensitive search engine with Lagos/Abuja neighborhood filters, price bands, and interactive map pins",
				"Centralized administrative moderation panel for user identity audits, dispute flags, and listing verification"
			],
			features: [
				"Verified Landlord Badge system tied to identity vetting to protect tenants against phantom rentals",
				"In-app inspection scheduler with scheduled slots, status progression, and automated confirmation states",
				"Integrated inspection fee checkout flow to eliminate offline cash disputes and confirm tenant intent",
				"Live chat inbox with persistent message history, role indicators, and direct listing context references",
				"Neighborhood-level search filters calibrated for Lagos (Island, Mainland) and Abuja districts",
				"Role-gated dashboard environments with custom views for active inquiries, listings, and pending bookings"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "DirectLet shows how high-friction rental workflows can be organized into a single marketplace with verification, structured inspections, localized discovery and communication tools."
		}
	},
	{
		id: "emberly",
		slug: "emberly",
		title: "Emberly",
		description: "A distraction-free habit tracker built around daily momentum, calm typography and local-first logging.",
		technologies: [
			"React 18",
			"TypeScript",
			"Tailwind CSS",
			"TanStack Router",
			"PostgreSQL",
			"Supabase Realtime & RLS",
			"Vite"
		],
		featured: false,
		visible: true,
		image: {
			src: {
				version: 1,
				asset_id: "60303245-7e88-4a06-a3c5-11f96a569952",
				project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896808/emberly-laptop-mockup.png",
				r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/60303245-7e88-4a06-a3c5-11f96a569952/emberly-laptop-mockup.png",
				original_filename: "emberly-laptop-mockup.png",
				size: 4816123,
				content_type: "image/png",
				created_at: "2026-11-16T04:05:20Z"
			}.url,
			alt: "Emberly habit tracker displayed on a laptop"
		},
		gallery: [{
			src: {
				version: 1,
				asset_id: "9adf5cba-fd70-4b92-8ee2-86a2be56bc71",
				project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896665/emberly-portfolio-mock.png",
				r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/9adf5cba-fd70-4b92-8ee2-86a2be56bc71/emberly-portfolio-mockh.png",
				original_filename: "emberly-portfolio-mockh.png",
				size: 64819,
				content_type: "image/png",
				created_at: "2026-11-16T04:05:21Z"
			}.url,
			alt: "Emberly daily habit checklist and progress ring"
		}, {
			src: {
				version: 1,
				asset_id: "684cba96-8656-4e2f-8765-5b91ae7ae466",
				project_id: "5040dce2-c7fa-4e3f-932d-b1cd18d84104",
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896653/emberly-portfolio-shot.png",
				r2_key: "a/v1/5040dce2-c7fa-4e3f-932d-b1cd18d84104/684cba96-8656-4e2f-8765-5b91ae7ae466/emberly-portfolio-shotn.png",
				original_filename: "emberly-portfolio-shotn.png",
				size: 106076,
				content_type: "image/png",
				created_at: "2026-11-16T04:05:22Z"
			}.url,
			alt: "Emberly daily reflection and journaling screen"
		}],
		liveDemo: "https://emberly.onrender.com",
		github: "https://github.com/Gokubanny/emberly.git",
		tone: "three",
		caseStudy: {
			short: "A distraction-free habit tracker built around daily momentum, calm typography and local-first logging.",
			audience: "People who want a quiet, intentional space to log daily habits and reflections without notification overload.",
			overview: "Emberly is a mobile-first habit tracking application designed to give people a quiet, intentional space to log recurring rituals, maintain streaks and record daily reflections.",
			challenge: "Many habit apps add complex onboarding, gamified vanity metrics and intrusive notifications that can fatigue users. People can end up managing the tool instead of their habits.",
			approach: "The product reduces interaction cost to quick confirmations and immediate feedback. A local-first client cache supports fast updates, with cloud synchronization and relational persistence for cross-device use.",
			built: [
				"Mobile-first responsive web client with custom typography and semantic design tokens",
				"Local-first state with background synchronization",
				"Relational data model with row-level security for user data isolation",
				"Private-by-default community questions and reflection flow"
			],
			features: [
				"One-tap habit checklist with completion feedback",
				"Daily progress ring showing completion and momentum",
				"Daily reflection journaling with visit and reflection heatmaps",
				"Cross-device synchronization and profile management"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "Emberly demonstrates disciplined interface design and low-latency client architecture, showing how a focused habit tracker can feel useful without adding unnecessary complexity."
		}
	},
	{
		id: "grave-haven",
		slug: "grave-haven",
		title: "Grave Haven",
		description: "A fashion marketplace for independent designers and their customers.",
		technologies: [
			"TypeScript",
			"Tailwind CSS",
			"MongoDB",
			"REST API",
			"Express.js",
			"Responsive Design"
		],
		featured: true,
		visible: true,
		image: {
			src: grave_haven_lzzxti_png_asset_default.url,
			alt: "Grave Haven project preview"
		},
		gallery: [
			{
				src: grave_havenabout_png_asset_default.url,
				alt: "Grave Haven About Page"
			},
			{
				src: grave_havencustomer_png_asset_default.url,
				alt: "Grave Haven Customer Dashboard"
			},
			{
				src: grave_haventailor_png_asset_default.url,
				alt: "Grave Haven Tailor Dashboard"
			}
		],
		liveDemo: "https://grave-haven-frontend.onrender.com",
		github: "https://github.com/Gokubanny/grave-haven.git",
		tone: "three",
		caseStudy: {
			audience: "Independent fashion designers and the customers who shop with them.",
			overview: "A full-stack fashion marketplace bringing real-time messaging, designer appointments, and inventory management into one shopping experience.",
			challenge: "Independent designers often sell through scattered channels, with conversations, appointments and stock tracked in different places.",
			approach: "A single marketplace puts messaging, appointments and inventory into one flow, backed by an Express REST API and MongoDB, with a responsive TypeScript front end.",
			features: [
				"Real-time messaging between customers and designers",
				"Designer appointment booking",
				"Inventory management",
				"Responsive shopping experience"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "A multi-sided marketplace where messaging, scheduling and inventory work together in one TypeScript full-stack product."
		}
	},
	{
		id: "hopebridge-foundation",
		slug: "hopebridge-foundation",
		title: "HopeBridge Foundation",
		description: "An awareness and connection hub for donors and volunteers.",
		technologies: ["Next.js", "Tailwind CSS"],
		visible: true,
		image: {
			src: image_w71kek_png_asset_default.url,
			alt: "HopeBridge Foundation project preview"
		},
		gallery: [
			{
				src: hopebridgeabout_png_asset_default.url,
				alt: "HopeBridge About Page"
			},
			{
				src: hopebridgeprogram_png_asset_default.url,
				alt: "HopeBridge Program Page"
			},
			{
				src: hopebrigdesupport_png_asset_default.url,
				alt: "HopeBridge Support Page"
			}
		],
		liveDemo: "https://hopebridge-foundation.onrender.com",
		github: "https://github.com/Gokubanny/HopeBridge-Foundation.git",
		tone: "two",
		caseStudy: {
			audience: "Donors and volunteers deciding whether to support the foundation.",
			overview: "A modern, responsive nonprofit website designed to connect a foundation with donors and volunteers through a clear, awareness-focused experience.",
			challenge: "A nonprofit has to explain its mission quickly and give supporters an obvious way to get involved.",
			approach: "A responsive, awareness-focused site built with Next.js and Tailwind CSS that moves visitors from the foundation's story to supporting it.",
			features: [
				"Awareness-focused content",
				"Clear routes for donors",
				"Clear routes for volunteers",
				"Responsive layout across devices"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "Front-end craft: a clear, responsive content site built with Next.js and Tailwind CSS."
		}
	},
	{
		id: "hr-management-system",
		slug: "hr-management-system",
		title: "HR Management System",
		description: "A people-first platform for employee management, attendance, and performance tracking.",
		technologies: [
			"React",
			"Node.js",
			"MongoDB",
			"Express",
			"JWT",
			"Chart.js"
		],
		visible: true,
		image: {
			src: hive_azhuuk_png_asset_default.url,
			alt: "HR Management System project preview"
		},
		gallery: [
			{
				src: hivehrattendance_png_asset_default.url,
				alt: "Hr Workspace"
			},
			{
				src: hivehr_png_asset_default.url,
				alt: "Hr Attendance Management page"
			},
			{
				src: hiveemployee_png_asset_default.url,
				alt: "Employee Dashboard"
			},
			{
				src: hiveemployeeattendance_png_asset_default.url,
				alt: "Employee Attendance Management page"
			}
		],
		liveDemo: "https://staff-hive.onrender.com",
		github: "https://github.com/Gokubanny/Staff-Hive.git",
		tone: "one",
		caseStudy: {
			audience: "HR teams and managers who run onboarding, payroll and performance reviews for a growing workforce.",
			overview: "A full-stack HR Management System built with React and Node.js. It brings employee onboarding, payroll management, performance tracking, and real-time analytics together, with role-based access and automated workflows.",
			challenge: "HR work often ends up spread across spreadsheets, email threads and separate payroll tools. Records drift out of sync and performance is hard to track in one place.",
			approach: "One platform covers the employee journey from onboarding through payroll and reviews. Role-based access controls who can see and change what, JWT handles sessions, and Chart.js turns the data into live analytics.",
			features: [
				"Employee onboarding and records",
				"Payroll management",
				"Performance tracking",
				"Real-time analytics dashboards",
				"Role-based access with automated workflows"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "A complete full-stack build on React, Node.js and MongoDB, combining authentication, role-based permissions and data visualization in a single product."
		}
	},
	{
		id: "anonymous-advice-platform",
		slug: "anonymous-advice-platform",
		title: "Anonymous Advice Platform",
		description: "A community space for sharing and receiving advice anonymously.",
		technologies: [
			"Next.js",
			"Socket.io",
			"PostgreSQL",
			"Prisma",
			"Tailwind CSS"
		],
		visible: false,
		tone: "two",
		caseStudy: {
			audience: "People who want an honest outside perspective without attaching their name to the question.",
			overview: "An advice community with anonymous posts, topic-focused conversations, moderation, and recommendations, built to make asking for another perspective feel approachable.",
			challenge: "Asking for advice about a personal situation is hard when your identity is attached to the question, so many people simply don't ask.",
			approach: "Posts are anonymous and grouped into topic-focused conversations. Moderation keeps discussions respectful, recommendations help people find relevant threads, and Socket.io keeps conversations live.",
			features: [
				"Anonymous posting",
				"Topic-focused conversations",
				"Moderation tools",
				"Recommendations for relevant threads"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "Real-time features on Next.js and Socket.io, with a PostgreSQL database managed through Prisma, designed around privacy and community safety."
		}
	},
	{
		id: "health-connect",
		slug: "health-connect",
		title: "Health Connect",
		description: "A hospital platform for booking appointments and finding nearby care.",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"Express.js",
			"MongoDB"
		],
		visible: true,
		image: {
			src: health_connect_bb9n9k_png_asset_default.url,
			alt: "Health Connect project preview"
		},
		gallery: [
			{
				src: health_connectabout_png_asset_default.url,
				alt: "HealthConnect About Page"
			},
			{
				src: health_connectdoctor_png_asset_default.url,
				alt: "HealthConnect Doctor Dashboard"
			},
			{
				src: health_connectpatient_png_asset_default.url,
				alt: "HealthConnect Patient Dashboard"
			},
			{
				src: health_connectconsultation_png_asset_default.url,
				alt: "HealthConnect Paitent Consultation Page"
			}
		],
		liveDemo: "https://healthconnect-frontend-qa77.onrender.com",
		github: "https://github.com/Gokubanny/New-Health-Connect",
		tone: "one",
		caseStudy: {
			audience: "Patients who need to book a doctor and find healthcare facilities near them.",
			overview: "A smart hospital platform where people can book doctor appointments, locate healthcare facilities, and manage bookings through an intuitive dashboard.",
			challenge: "Finding nearby care and booking an appointment can mean several calls or visits, and managing those bookings afterwards is just as scattered.",
			approach: "One dashboard handles facility search, doctor appointments and booking management, built with a React and TypeScript front end on a Node.js, Express and MongoDB API.",
			features: [
				"Doctor appointment booking",
				"Find nearby healthcare facilities",
				"Booking management dashboard"
			],
			outcomeLabel: "What it demonstrates",
			outcome: "A practical healthcare workflow, from search to booking to management, delivered end to end on a typed React and Node.js stack."
		}
	},
	{
		id: "printblink",
		slug: "printblink",
		title: "Printblink",
		description: "Digital storefront and hardware enquiry platform for PrintBlink, an authorized partner for Hyperdist commercial printing equipment and office supplies.",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Vite"
		],
		visible: true,
		image: {
			src: {
				asset_id: "f79ba038-35c2-4b07-8e49-c985aa6181b5",
				content_type: "image/webp",
				created_at: "2026-10-10T00:10:07Z",
				original_filename: "printblink-laptop-home.png",
				project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
				r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/f79ba038-35c2-4b07-8e49-c985aa6181b5/printblink-laptop-home.png",
				size: 70742,
				url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896617/mockup-laptop-home.png",
				version: 1
			}.url,
			alt: "Butta Rush homepage shown on a laptop, featuring Nigerian meals, cakes and catering"
		},
		gallery: [
			{
				src: {
					asset_id: "c77356a2-2785-40a2-a0c1-7a392f13a18a",
					content_type: "image/png",
					created_at: "2026-10-10T00:10:07Z",
					original_filename: "printblink-mobile-about.png",
					project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
					r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/c77356a2-2785-40a2-a0c1-7a392f13a18a/printblink-mobile-about.png",
					size: 587024,
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896615/mockup-mobile-about.png",
					version: 1
				}.url,
				alt: "PrintBlink project mobile about page mockup with the Printers, chosen properly headline"
			},
			{
				src: {
					asset_id: "2a4b5f14-b500-4879-9acf-a366a844c255",
					content_type: "image/png",
					created_at: "2026-10-10T00:10:07Z",
					original_filename: "printblink-mobile-contact.png",
					project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
					r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/2a4b5f14-b500-4879-9acf-a366a844c255/printblink-mobile-contact.png",
					size: 196824,
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896615/mockup-mobile-contact.png",
					version: 1
				}.url,
				alt: "PrintBlink project mobile contact page mockup showing a WhatsApp enquiry option"
			},
			{
				src: {
					asset_id: "e08f52d7-fc66-49c0-a49c-829c39c676de",
					content_type: "image/png",
					created_at: "2026-10-10T00:10:07Z",
					original_filename: "printblink-products.png",
					project_id: "90002f61-e8bf-4130-9824-57eedf67cbb9",
					r2_key: "a/v1/90002f61-e8bf-4130-9824-57eedf67cbb9/e08f52d7-fc66-49c0-a49c-829c39c676de/printblink-products.png",
					size: 310374,
					url: "https://res.cloudinary.com/kr2f8mqh/image/upload/v1791896617/mockup-window-products.png",
					version: 1
				}.url,
				alt: "PrintBlink project product catalogue mockup showing printer browsing and search"
			}
		],
		tone: "one",
		caseStudy: {
			audience: "Corporate and Enterprise clients as an authorized distribution partner for Hyperdist printing systems.",
			overview: "PrintBlink serves corporate and enterprise clients as an authorized distribution partner for Hyperdist printing systems and workplace consumables. The engagement focused on engineering an authoritative digital presence that modernizes client discovery and transitions commercial buyers out of fragmented offline sales loops.",
			challenge: "Procurement teams and corporate purchasers previously depended on static PDF catalogues and unstructured messaging to identify models and check hardware specifications. This manual friction delayed response times, increased overhead for sales representatives, and made comparing high-volume office hardware unnecessarily difficult.",
			approach: "Scaletru designed and built a fast, performance-first product showcase prioritizing intuitive category exploration and rapid specification checks. Rather than forcing complex self-serve e-commerce checkout onto high-ticket commercial hardware, the interface pairs instant model filtering directly with contextual WhatsApp RFQ pipelines for immediate quote qualification.",
			built: [
				"High-performance responsive web platform and commercial catalog showcase",
				"Structured hardware inventory hierarchy with dynamic category filtering",
				"Contextual WhatsApp sales integration with prefilled product and model parameters",
				"Distributor credentialing suite, partner overview, and direct procurement channels"
			],
			features: [
				"Multi-tier hardware filtering covering inkjet, enterprise laser, multifunction, and consumable supplies",
				"One-click corporate inquiry routing that attaches model SKUs and specifications directly to WhatsApp chats",
				"Mobile-first responsive architecture designed for sub-second page loads and zero layout shift",
				"Technical spec sheets highlighting print speeds, duty cycles, connectivity, and consumable compatibility"
			],
			outcomeLabel: "What changed",
			outcome: "Replaced scattered offline PDF sharing with a centralized, verified digital storefront that corporate procurement officers can review instantly. Inbound sales requests now reach account executives pre-qualified with precise hardware configurations, cutting quote cycle times and eliminating repetitive back-and-forth model confirmations."
		}
	}
].filter((project) => project.visible);
visibleProjects.filter((project) => project.featured);
var portfolioExperience = [
	{
		title: "Computer Science",
		organization: "University of Port Harcourt",
		date: "2022 — 2026",
		description: [
			" Bachelor's degree in Computer Science",
			" Studying advanced algorithms, data structures, and software engineering",
			" Applying theory to practical development projects"
		],
		tone: "one"
	},
	{
		title: "Hackathon Winner — 3rd Place",
		organization: "GoMyCode × Africa's Talking Hackathon",
		date: "July 2025",
		description: [
			"Competed solo in a challenging hackathon environment",
			"Took a project from concept through implementation",
			"Placed third among the participating teams"
		],
		tone: "two"
	},
	{
		title: "Software Development Bootcamp",
		organization: "GoMyCode",
		date: "2025",
		description: [
			" Completed an intensive software development program",
			" Developed practical full-stack skills and working habits",
			" Built multiple projects throughout the program"
		],
		tone: "three"
	},
	{
		title: "Frontend Development Fundamentals",
		organization: "Divine Learning Hub",
		date: "2022",
		description: [
			"Learned the fundamentals of HTML, CSS, and JavaScript",
			"Built static and interactive web pages",
			"Developed a foundation in web development"
		],
		tone: "one"
	}
];
//#endregion
//#region src/lib/portfolio-contact.ts
var contactSubmissionSchema = z.object({
	name: z.string().trim().min(2).max(120),
	email: z.string().trim().email().max(254),
	subject: z.string().trim().min(2).max(160),
	message: z.string().trim().min(10).max(5e3),
	website: z.string().max(500).default("")
});
//#endregion
//#region src/components/portfolio/PortfolioPage.tsx
var PortfolioBackground = lazy(() => import("./PortfolioBackground-CbjgVOQY.js"));
var navItems = [
	{
		name: "About",
		href: "#about"
	},
	{
		name: "Skills",
		href: "#skills"
	},
	{
		name: "Work",
		href: "#projects"
	},
	{
		name: "Journey",
		href: "#experience"
	},
	{
		name: "Contact",
		href: "#contact"
	}
];
var skillGroups = [
	{
		title: "Frontend",
		index: "01",
		icon: Braces,
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Next.js"
		]
	},
	{
		title: "Backend",
		index: "02",
		icon: Server,
		skills: [
			"Node.js",
			"Express.js",
			"MongoDB"
		]
	},
	{
		title: "Tools & more",
		index: "03",
		icon: Settings2,
		skills: [
			"Git",
			"GitHub",
			"REST APIs",
			"Cloud basics"
		]
	}
];
var experienceIcons = [
	GraduationCap,
	Award,
	Code2,
	Layers2
];
var motionEase = [
	.22,
	1,
	.36,
	1
];
function SectionIntro({ index, kicker, title, accent, detail }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .65,
			ease: motionEase
		},
		className: "mb-12 grid grid-cols-1 gap-5 md:mb-16 md:grid-cols-[1fr_minmax(15rem,24rem)] md:items-end",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
			className: "portfolio-eyebrow mb-4 flex items-center gap-3",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "opacity-60",
					children: index
				}),
				/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-portfolio-accent/60" }),
				kicker
			]
		}), /* @__PURE__ */ jsxs("h2", {
			className: "portfolio-display max-w-3xl text-4xl font-medium leading-[1.05] tracking-normal text-foreground sm:text-5xl md:text-6xl",
			children: [
				title,
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "text-portfolio-accent",
					children: accent
				})
			]
		})] }), /* @__PURE__ */ jsx("p", {
			className: "max-w-sm text-sm leading-7 text-muted-foreground md:justify-self-end",
			children: detail
		})]
	});
}
function TopNavigation() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 32);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const scrollTo = (target) => {
		document.querySelector(target)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
		setMobileOpen(false);
	};
	return /* @__PURE__ */ jsxs(motion.header, {
		initial: {
			y: -18,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .55,
			ease: motionEase
		},
		className: `fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled ? "border-b border-foreground/10 bg-background/85 backdrop-blur-xl" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-[4.6rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ jsxs("button", {
					onClick: () => scrollTo("#home"),
					className: "group flex min-h-11 items-center gap-3 text-left",
					"aria-label": "Return to top",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex size-9 items-center justify-center overflow-hidden rounded-full border border-foreground/15 bg-secondary/80",
						children: /* @__PURE__ */ jsx("img", {
							src: marvellous_benji_high_resolution_logo_transparent_1_png_asset_default.url,
							alt: "",
							className: "size-full object-contain"
						})
					}), /* @__PURE__ */ jsxs("span", {
						className: "portfolio-display text-sm font-medium text-foreground sm:text-base",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-portfolio-accent",
							children: "Omatule"
						}), " Marvellous"]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Main navigation",
					className: "hidden items-center gap-7 md:flex",
					children: navItems.map((item) => /* @__PURE__ */ jsxs("button", {
						onClick: () => scrollTo(item.href),
						className: "group relative py-2 text-xs text-foreground/75 transition-colors hover:text-portfolio-accent",
						children: [item.name, /* @__PURE__ */ jsx("span", { className: "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-portfolio-accent transition-transform group-hover:scale-x-100" })]
					}, item.href))
				}),
				/* @__PURE__ */ jsxs(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => scrollTo("#contact"),
					className: "hidden h-9 gap-2 border-foreground/20 bg-transparent text-xs text-foreground hover:border-portfolio-accent/70 hover:bg-portfolio-accent/10 md:inline-flex",
					children: ["Get in touch ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-3.5" })]
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => setMobileOpen((value) => !value),
					className: "md:hidden",
					"aria-label": mobileOpen ? "Close menu" : "Open menu",
					"aria-expanded": mobileOpen,
					children: mobileOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsx(motion.nav, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: { duration: .22 },
			className: "overflow-hidden border-t border-foreground/10 bg-background/95 px-5 backdrop-blur-xl md:hidden",
			"aria-label": "Mobile navigation",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto grid max-w-7xl py-3 sm:px-3",
				children: navItems.map((item, index) => /* @__PURE__ */ jsxs("button", {
					onClick: () => scrollTo(item.href),
					className: "flex min-h-12 items-center justify-between border-b border-foreground/10 text-left text-sm text-foreground/85 last:border-0",
					children: [/* @__PURE__ */ jsx("span", { children: item.name }), /* @__PURE__ */ jsxs("span", {
						className: "portfolio-eyebrow text-[0.62rem] opacity-60",
						children: ["0", index + 1]
					})]
				}, item.href))
			})
		}) })]
	});
}
function Hero() {
	const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		className: "relative flex min-h-[min(880px,100svh)] scroll-mt-20 items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_19rem] lg:gap-12",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 26
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						ease: motionEase
					},
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "portfolio-eyebrow mb-7 flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-portfolio-accent shadow-[0_0_14px_var(--portfolio-accent)]" }), "Independent developer · Port Harcourt, Nigeria"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "portfolio-display portfolio-glow-text max-w-5xl text-6xl font-medium leading-[0.9] tracking-normal text-foreground sm:text-7xl lg:text-8xl",
							children: [
								"Omatule",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-portfolio-accent",
									children: "Marvellous"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-7 flex min-h-8 items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-7 bg-portfolio-coral" }), /* @__PURE__ */ jsx("p", {
								className: "portfolio-display text-lg text-foreground/90 sm:text-xl",
								children: "Full-Stack Developer"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-9 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ jsxs(Button, {
								onClick: scrollToProjects,
								className: "h-12 gap-3 rounded-sm bg-portfolio-accent px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-portfolio-accent/90",
								children: ["Explore selected work ", /* @__PURE__ */ jsx(ArrowDownRight, { className: "size-4" })]
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "outline",
								className: "h-12 gap-3 rounded-sm border-foreground/25 bg-background/20 px-5 text-sm text-foreground",
								children: /* @__PURE__ */ jsxs("a", {
									href: "/Omatule-Marvellous-CV.docx",
									download: "Omatule-Marvellous-CV.docx",
									children: [/* @__PURE__ */ jsx(FileText, { className: "size-4" }), " Download my CV"]
								})
							})]
						})
					]
				}), /* @__PURE__ */ jsxs(motion.aside, {
					initial: {
						opacity: 0,
						x: 15
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .8,
						delay: .2,
						ease: motionEase
					},
					className: "hidden self-center border-l border-foreground/20 pl-7 lg:block",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "portfolio-eyebrow mb-6",
							children: "A little about me"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "portfolio-display text-xl leading-relaxed text-foreground/85",
							children: [
								"Thoughtful digital craft,",
								/* @__PURE__ */ jsx("br", {}),
								"built with ",
								/* @__PURE__ */ jsx("span", {
									className: "text-portfolio-accent",
									children: "curiosity"
								}),
								/* @__PURE__ */ jsx("br", {}),
								"and a love for the details."
							]
						}),
						/* @__PURE__ */ jsx("div", { className: "portfolio-line my-7" }),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs leading-6 text-muted-foreground",
							children: "Full-stack development · Modern web technologies · Creative problem solving"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs(motion.div, {
				initial: { opacity: 0 },
				animate: {
					opacity: 1,
					y: [
						0,
						6,
						0
					]
				},
				transition: {
					opacity: { delay: 1.1 },
					y: {
						duration: 2.3,
						repeat: Infinity,
						ease: "easeInOut"
					}
				},
				className: "absolute bottom-6 left-5 flex items-center gap-3 text-muted-foreground sm:left-8 lg:left-12",
				children: [/* @__PURE__ */ jsx(ArrowDown, { className: "size-3.5 text-portfolio-accent" }), /* @__PURE__ */ jsx("span", {
					className: "portfolio-eyebrow text-[0.62rem]",
					children: "Scroll to explore"
				})]
			}),
			/* @__PURE__ */ jsx("span", {
				className: "absolute bottom-7 right-5 portfolio-eyebrow text-[0.62rem] text-foreground/50 sm:right-8 lg:right-12",
				children: "01 — 06"
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionIntro, {
				index: "01",
				kicker: "The person behind the pixels",
				title: "A bit about",
				accent: "me.",
				detail: "Curiosity driven development with an eye on the details that make software feel effortless."
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 22
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .7 },
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "portfolio-display text-2xl leading-relaxed text-foreground sm:text-3xl",
							children: [
								"I’m a passionate full-stack developer dedicated to building ",
								/* @__PURE__ */ jsx("span", {
									className: "text-portfolio-accent",
									children: "thoughtful digital experiences"
								}),
								" that join modern technology with intuitive design."
							]
						}),
						/* @__PURE__ */ jsx("div", { className: "my-8 portfolio-line" }),
						/* @__PURE__ */ jsx("p", {
							className: "max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base",
							children: "I enjoy transforming complex ideas into useful, well-crafted applications. Guided by curiosity and a commitment to continuous learning, I build with JavaScript, React, Node.js, modern web APIs and a bit of Python."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 flex flex-wrap gap-x-8 gap-y-4",
							children: [
								["06+", "core technologies"],
								[String(visibleProjects.length).padStart(2, "0"), "featured projects"],
								["2022", "building since"]
							].map(([value, label]) => /* @__PURE__ */ jsxs("div", {
								className: "border-l border-portfolio-accent/45 pl-4",
								children: [/* @__PURE__ */ jsx("p", {
									className: "portfolio-display text-2xl text-foreground",
									children: value
								}), /* @__PURE__ */ jsx("p", {
									className: "portfolio-eyebrow mt-1 text-[0.59rem] text-muted-foreground",
									children: label
								})]
							}, label))
						})
					]
				}), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 22
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .7,
						delay: .12
					},
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-5 flex items-end justify-between",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "portfolio-display text-xl text-foreground",
							children: "Core technologies"
						}), /* @__PURE__ */ jsx("span", {
							className: "portfolio-eyebrow text-[0.6rem]",
							children: "Level of focus"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "border-t border-foreground/15",
						children: [
							{
								name: "HTML",
								level: 85
							},
							{
								name: "CSS",
								level: 90
							},
							{
								name: "JavaScript",
								level: 78
							},
							{
								name: "React",
								level: 90
							},
							{
								name: "Node.js",
								level: 80
							},
							{
								name: "APIs",
								level: 85
							},
							{
								name: "Python",
								level: 20
							}
						].map((skill, index) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								x: 12
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: {
								duration: .45,
								delay: index * .06
							},
							className: "grid grid-cols-[1fr_auto] gap-x-5 border-b border-foreground/10 py-3.5",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-4 text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-foreground/85",
									children: skill.name
								}), /* @__PURE__ */ jsxs("span", {
									className: "portfolio-eyebrow text-[0.6rem]",
									children: [String(skill.level).padStart(2, "0"), "%"]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "col-span-2 mt-2 h-[3px] overflow-hidden bg-foreground/10",
								children: /* @__PURE__ */ jsx(motion.div, {
									initial: { width: 0 },
									whileInView: { width: `${skill.level}%` },
									viewport: { once: true },
									transition: {
										duration: .85,
										delay: index * .06 + .12,
										ease: motionEase
									},
									className: "h-full bg-portfolio-accent"
								})
							})]
						}, skill.name))
					})]
				})]
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ jsx("section", {
		id: "skills",
		className: "portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionIntro, {
				index: "02",
				kicker: "Tools of the trade",
				title: "Built with",
				accent: "intention.",
				detail: "A practical toolkit for turning complex requirements into clear, resilient digital experiences."
			}), /* @__PURE__ */ jsx("div", {
				className: "grid border-l border-t border-foreground/15 sm:grid-cols-2 lg:grid-cols-3",
				children: skillGroups.map((group, index) => {
					const Icon = group.icon;
					return /* @__PURE__ */ jsxs(motion.article, {
						initial: {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .55,
							delay: index * .1
						},
						className: "portfolio-skill-card group min-h-64 border-b border-r border-foreground/15 px-6 py-7 sm:px-7",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-14 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "portfolio-skill-index portfolio-eyebrow",
									children: group.index
								}), /* @__PURE__ */ jsx(Icon, {
									className: "size-5 text-portfolio-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1",
									strokeWidth: 1.4
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "portfolio-display text-2xl text-foreground",
								children: group.title
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: group.skills.map((skill) => /* @__PURE__ */ jsx("span", {
									className: "border border-foreground/12 px-3 py-1.5 text-xs text-foreground/75 transition-colors group-hover:border-portfolio-accent/30",
									children: skill
								}, skill))
							})
						]
					}, group.index);
				})
			})]
		})
	});
}
var projectIcons = {
	"hr-management-system": Layers2,
	"health-connect": Award,
	"medi-core": Server
};
var projectNumber = (project) => String(visibleProjects.indexOf(project) + 1).padStart(2, "0");
function ProjectArtwork({ project }) {
	const Icon = projectIcons[project.slug] ?? Code2;
	return /* @__PURE__ */ jsxs("div", {
		className: `relative flex aspect-[1.85/1] overflow-hidden ${project.tone === "one" ? "bg-portfolio-accent/10" : project.tone === "two" ? "bg-portfolio-coral/10" : "bg-portfolio-lime/10"}`,
		children: [
			project.image ? /* @__PURE__ */ jsx("img", {
				src: project.image.src,
				alt: project.image.alt,
				loading: "lazy",
				className: "portfolio-project-image size-full object-cover"
			}) : /* @__PURE__ */ jsxs("div", {
				className: "flex size-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-background via-secondary/80 to-portfolio-coral/10",
				children: [/* @__PURE__ */ jsx(Icon, {
					className: "size-12 text-portfolio-accent/80",
					strokeWidth: 1
				}), /* @__PURE__ */ jsx("span", {
					className: "portfolio-eyebrow text-[0.6rem] text-foreground/55",
					children: "Project preview"
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" }),
			/* @__PURE__ */ jsxs("span", {
				className: "absolute bottom-3 left-4 portfolio-eyebrow text-[0.58rem] text-foreground/85",
				children: ["Selected work / ", projectNumber(project)]
			}),
			/* @__PURE__ */ jsx("span", {
				className: "absolute right-3 top-3 flex size-9 items-center justify-center border border-foreground/20 bg-background/80 text-foreground backdrop-blur-sm",
				children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
			})
		]
	});
}
function ProjectCard({ project, index, onOpen }) {
	return /* @__PURE__ */ jsx(motion.article, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-50px"
		},
		transition: {
			duration: .55,
			delay: index % 3 * .08,
			ease: motionEase
		},
		children: /* @__PURE__ */ jsxs("button", {
			onClick: onOpen,
			"aria-label": `View details for ${project.title}`,
			className: "portfolio-project-trigger block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent",
			children: [
				/* @__PURE__ */ jsx(ProjectArtwork, { project }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-4 py-5",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "portfolio-display text-xl text-foreground transition-colors group-hover:text-portfolio-accent",
						children: project.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 max-w-md text-sm leading-6 text-muted-foreground",
						children: project.description
					})] }), /* @__PURE__ */ jsx("span", {
						className: "mt-1 flex size-9 shrink-0 items-center justify-center border border-foreground/15 text-foreground/70 transition-all hover:border-portfolio-accent hover:text-portfolio-accent",
						children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2 pb-5",
					children: project.technologies.slice(0, 4).map((technology) => /* @__PURE__ */ jsx("span", {
						className: "portfolio-eyebrow text-[0.58rem] text-muted-foreground",
						children: technology
					}, technology))
				}),
				/* @__PURE__ */ jsx("div", { className: "portfolio-line" })
			]
		})
	});
}
function CaseStudyBlock({ label, children }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "portfolio-eyebrow mb-3",
		children: label
	}), children] });
}
function CaseStudyList({ items }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "space-y-2 text-sm leading-6 text-muted-foreground",
		children: items.map((item) => /* @__PURE__ */ jsx("li", {
			className: "relative pl-4 before:absolute before:left-0 before:top-3 before:size-1 before:bg-portfolio-accent",
			children: item
		}, item))
	});
}
function ProjectDetails({ project, onClose }) {
	const study = project?.caseStudy;
	return /* @__PURE__ */ jsx(Dialog, {
		open: Boolean(project),
		onOpenChange: (open) => {
			if (!open) onClose();
		},
		children: /* @__PURE__ */ jsx(DialogContent, {
			className: "max-h-[88svh] max-w-3xl overflow-y-auto rounded-sm border-foreground/15 bg-background/98 p-0 text-foreground backdrop-blur-xl sm:max-w-3xl",
			children: project && study && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ProjectArtwork, { project }), /* @__PURE__ */ jsxs("div", {
				className: "p-6 sm:p-9",
				children: [
					/* @__PURE__ */ jsxs(DialogHeader, {
						className: "text-left",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ jsxs("p", {
										className: "portfolio-eyebrow",
										children: ["Selected work / ", projectNumber(project)]
									}),
									project.status && /* @__PURE__ */ jsx("span", {
										className: "border border-portfolio-coral/50 px-2 py-0.5 text-[0.7rem] text-portfolio-coral",
										children: project.status
									}),
									project.companyLabel && /* @__PURE__ */ jsx("span", {
										className: "border border-portfolio-accent/40 px-2 py-0.5 text-[0.7rem] text-portfolio-accent",
										children: project.companyLabel
									})
								]
							}),
							/* @__PURE__ */ jsx(DialogTitle, {
								className: "portfolio-display text-3xl font-medium text-foreground sm:text-4xl",
								children: project.title
							}),
							study.short && /* @__PURE__ */ jsx("p", {
								className: "portfolio-display max-w-2xl pt-3 text-lg leading-snug text-foreground/90",
								children: study.short
							}),
							/* @__PURE__ */ jsx(DialogDescription, {
								className: "max-w-2xl pt-3 text-sm leading-7 text-muted-foreground",
								children: study.overview
							})
						]
					}),
					/* @__PURE__ */ jsxs("dl", {
						className: `mt-7 grid gap-6 border-t border-foreground/10 pt-6 ${study.role ? "sm:grid-cols-2" : ""}`,
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "portfolio-eyebrow mb-3",
							children: "Who it’s for"
						}), /* @__PURE__ */ jsx("dd", {
							className: "text-sm leading-7 text-foreground/85",
							children: study.audience
						})] }), study.role && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "portfolio-eyebrow mb-3",
							children: "My role"
						}), /* @__PURE__ */ jsx("dd", {
							className: "text-sm leading-7 text-foreground/85",
							children: study.role
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 grid gap-7 border-t border-foreground/10 pt-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx(CaseStudyBlock, {
							label: "The challenge",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-sm leading-7 text-muted-foreground",
								children: study.challenge
							})
						}), /* @__PURE__ */ jsx(CaseStudyBlock, {
							label: "The approach",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-sm leading-7 text-muted-foreground",
								children: study.approach
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: `mt-7 grid gap-7 border-t border-foreground/10 pt-6 ${study.built?.length ? "sm:grid-cols-2" : ""}`,
						children: [study.built?.length ? /* @__PURE__ */ jsx(CaseStudyBlock, {
							label: "What I built",
							children: /* @__PURE__ */ jsx(CaseStudyList, { items: study.built })
						}) : null, /* @__PURE__ */ jsx(CaseStudyBlock, {
							label: "Key features",
							children: /* @__PURE__ */ jsx(CaseStudyList, { items: study.features })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 border-t border-foreground/10 pt-6",
						children: [/* @__PURE__ */ jsx("p", {
							className: "portfolio-eyebrow mb-4",
							children: "Technologies"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-2",
							children: project.technologies.map((tech) => /* @__PURE__ */ jsx("span", {
								className: "border border-foreground/15 px-3 py-1.5 text-xs text-foreground/75",
								children: tech
							}, tech))
						})]
					}),
					project.gallery?.length ? /* @__PURE__ */ jsxs("div", {
						className: "mt-7 border-t border-foreground/10 pt-6",
						children: [/* @__PURE__ */ jsx("p", {
							className: "portfolio-eyebrow mb-4",
							children: "Screens"
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: project.gallery.map((image) => /* @__PURE__ */ jsx("img", {
								src: image.src,
								alt: image.alt,
								loading: "lazy",
								className: "w-full border border-foreground/15 object-cover"
							}, image.src))
						})]
					}) : null,
					/* @__PURE__ */ jsx("div", {
						className: "mt-7 border-t border-foreground/10 pt-6",
						children: /* @__PURE__ */ jsx(CaseStudyBlock, {
							label: study.outcomeLabel,
							children: /* @__PURE__ */ jsx("p", {
								className: "text-sm leading-7 text-foreground/85",
								children: study.outcome
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [
							project.liveDemo && project.liveDemo !== "#" && /* @__PURE__ */ jsx(Button, {
								variant: "outline",
								asChild: true,
								className: "gap-2 rounded-sm border-foreground/20 bg-transparent",
								children: /* @__PURE__ */ jsxs("a", {
									href: project.liveDemo,
									target: "_blank",
									rel: "noreferrer",
									children: ["Live demo ", /* @__PURE__ */ jsx(ExternalLink, {})]
								})
							}),
							project.github && project.github !== "#" && /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								asChild: true,
								className: "gap-2 rounded-sm",
								children: /* @__PURE__ */ jsxs("a", {
									href: project.github,
									target: "_blank",
									rel: "noreferrer",
									children: [
										/* @__PURE__ */ jsx(Github, {}),
										" GitHub ",
										/* @__PURE__ */ jsx(ExternalLink, { className: "size-3" })
									]
								})
							}),
							!project.liveDemo && !project.github && /* @__PURE__ */ jsx(Button, {
								onClick: onClose,
								variant: "ghost",
								children: "Close details"
							})
						]
					})
				]
			})] })
		})
	});
}
function Projects() {
	const [selected, setSelected] = useState(null);
	const [visibleCount, setVisibleCount] = useState(6);
	return /* @__PURE__ */ jsx("section", {
		id: "projects",
		className: "portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx(SectionIntro, {
					index: "03",
					kicker: "A few things I’ve made",
					title: "Selected",
					accent: "work.",
					detail: "A mix of practical platforms, thoughtful interfaces, and ambitious ideas brought to life across the web."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid gap-x-7 gap-y-8 md:grid-cols-2 lg:grid-cols-3",
					children: visibleProjects.slice(0, visibleCount).map((project, index) => /* @__PURE__ */ jsx(ProjectCard, {
						project,
						index,
						onOpen: () => setSelected(project)
					}, project.id))
				}),
				visibleCount < visibleProjects.length && /* @__PURE__ */ jsx("div", {
					className: "mt-11 flex justify-center",
					children: /* @__PURE__ */ jsxs(Button, {
						variant: "outline",
						onClick: () => setVisibleCount((count) => count + 3),
						className: "h-11 gap-3 rounded-sm border-foreground/20 bg-transparent px-5 text-foreground hover:border-portfolio-accent/60 hover:bg-portfolio-accent/10",
						children: ["View more projects ", /* @__PURE__ */ jsx(ArrowRight, {})]
					})
				}),
				/* @__PURE__ */ jsx(ProjectDetails, {
					project: selected,
					onClose: () => setSelected(null)
				})
			]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ jsx("section", {
		id: "experience",
		className: "portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionIntro, {
				index: "04",
				kicker: "Learning by building",
				title: "The journey",
				accent: "so far.",
				detail: "A growing timeline of study, practice, and moments that shaped the way I approach software."
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-4xl",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-[1.1rem] top-4 w-px bg-gradient-to-b from-portfolio-accent/80 via-foreground/15 to-transparent md:left-1/2" }), /* @__PURE__ */ jsx("div", {
					className: "grid gap-6 md:gap-2",
					children: portfolioExperience.map((item, index) => {
						const Icon = experienceIcons[index] ?? Code2;
						const isRight = index % 2 === 1;
						return /* @__PURE__ */ jsxs(motion.article, {
							initial: {
								opacity: 0,
								x: isRight ? 14 : -14
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: {
								once: true,
								margin: "-55px"
							},
							transition: {
								duration: .55,
								delay: .06
							},
							className: `relative grid gap-3 pl-12 md:grid-cols-[1fr_3.25rem_1fr] md:pl-0 ${isRight ? "md:[&>div:first-child]:col-start-3 md:[&>div:last-child]:col-start-1 md:[&>div:last-child]:row-start-1 md:[&>div:first-child]:text-left" : ""}`,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: `py-1 ${isRight ? "md:col-start-3" : "md:col-start-1 md:text-right"}`,
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "portfolio-eyebrow text-[0.64rem]",
											children: item.date
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "portfolio-display mt-2 text-xl text-foreground",
											children: item.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-sm text-portfolio-accent",
											children: item.organization
										}),
										/* @__PURE__ */ jsx("ul", {
											className: `mt-4 space-y-2 text-sm leading-6 text-muted-foreground ${isRight ? "" : "md:list-inside"}`,
											children: item.description.map((line) => /* @__PURE__ */ jsx("li", {
												className: `relative ${isRight ? "pl-4 before:absolute before:left-0 before:top-3 before:size-1 before:bg-portfolio-accent" : "md:before:ml-1 md:before:inline-block md:before:size-1 md:before:bg-portfolio-accent md:before:content-['']"}`,
												children: line
											}, line))
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "absolute left-0 top-0 z-10 flex size-9 items-center justify-center border border-portfolio-accent/50 bg-background text-portfolio-accent md:relative md:left-auto md:col-start-2 md:row-start-1 md:mx-auto md:size-12",
									children: /* @__PURE__ */ jsx(Icon, {
										className: "size-4 md:size-5",
										strokeWidth: 1.4
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: `hidden md:block ${isRight ? "md:col-start-1 md:row-start-1" : "md:col-start-3"}`,
									"aria-hidden": "true"
								})
							]
						}, item.title);
					})
				})]
			})]
		})
	});
}
function Contact() {
	const [sending, setSending] = useState(false);
	const [honeypot, setHoneypot] = useState("");
	async function submitMessage(event) {
		event.preventDefault();
		if (honeypot) return;
		const form = event.currentTarget;
		const data = new FormData(form);
		const raw = {
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			subject: String(data.get("subject") ?? ""),
			message: String(data.get("message") ?? ""),
			website: String(data.get("website") ?? "")
		};
		const parsed = contactSubmissionSchema.safeParse(raw);
		if (!parsed.success) {
			toast.error("Your message wasn’t sent", { description: "Check each field and try again." });
			return;
		}
		const accessKey = {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_SUPABASE_PROJECT_ID": "xfloayyeteepdfyhlsoj",
			"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_EX2qkpxndp8KpoitDQOTHA_wrspG6kH",
			"VITE_SUPABASE_URL": "https://xfloayyeteepdfyhlsoj.supabase.co",
			"VITE_WEB3FORMS_ACCESS_KEY": "<your Web3Forms access key>"
		}["VITE_WEB3FORMS_ACCESS_KEY"];
		if (!accessKey) {
			toast.error("Your message wasn’t sent", { description: "Message delivery is not available right now. Please email me directly." });
			return;
		}
		const { name, email, subject, message } = parsed.data;
		setSending(true);
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					access_key: accessKey,
					name,
					email,
					subject,
					message,
					from_name: "Omatule Marvellous Portfolio"
				})
			});
			const result = await response.json();
			if (!response.ok || !result.success) throw new Error(result.message ?? "Unable to send your message.");
			toast.success("Message sent", { description: "Thanks for reaching out. I’ll get back to you soon." });
			form.reset();
		} catch (error) {
			const message = error instanceof Error ? error.message : "Please try again in a moment.";
			toast.error("Your message wasn’t sent", { description: message });
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionIntro, {
				index: "05",
				kicker: "Have something in mind?",
				title: "Let’s make",
				accent: "it happen.",
				detail: "Ready to bring an idea to life? Let’s talk about how we can work together."
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-md",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "portfolio-display text-2xl leading-relaxed text-foreground sm:text-3xl",
							children: [
								"I’m always excited to explore ",
								/* @__PURE__ */ jsx("span", {
									className: "text-portfolio-accent",
									children: "new opportunities"
								}),
								", meaningful projects, and good collaborations."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-muted-foreground",
							children: "Whether there’s a specific challenge or you simply want to connect, I’d love to hear from you."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-9 grid gap-2",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: "mailto:omatulemarvellous721@gmail.com",
									className: "flex min-h-12 items-center gap-3 border-b border-foreground/12 py-3 text-sm text-foreground/80 transition-colors hover:text-portfolio-accent",
									children: [
										/* @__PURE__ */ jsx(Mail, { className: "size-4 text-portfolio-accent" }),
										" omatulemarvellous721@gmail.com ",
										/* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-auto size-4" })
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "https://github.com/Gokubanny",
									target: "_blank",
									rel: "noreferrer",
									className: "flex min-h-12 items-center gap-3 border-b border-foreground/12 py-3 text-sm text-foreground/80 transition-colors hover:text-portfolio-accent",
									children: [
										/* @__PURE__ */ jsx(Github, { className: "size-4 text-portfolio-accent" }),
										" GitHub ",
										/* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-auto size-4" })
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "https://www.linkedin.com/in/marvellous-benji",
									target: "_blank",
									rel: "noreferrer",
									className: "flex min-h-12 items-center gap-3 border-b border-foreground/12 py-3 text-sm text-foreground/80 transition-colors hover:text-portfolio-accent",
									children: [
										/* @__PURE__ */ jsx(Linkedin, { className: "size-4 text-portfolio-accent" }),
										" LinkedIn ",
										/* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-auto size-4" })
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: submitMessage,
					className: "space-y-5",
					"aria-label": "Contact form",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("span", {
									className: "portfolio-eyebrow mb-2 block text-[0.62rem]",
									children: "Your name"
								}), /* @__PURE__ */ jsx(Input, {
									name: "name",
									autoComplete: "name",
									placeholder: "Name",
									required: true,
									minLength: 2,
									maxLength: 120,
									className: "portfolio-contact-input h-12 rounded-sm"
								})]
							}), /* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("span", {
									className: "portfolio-eyebrow mb-2 block text-[0.62rem]",
									children: "Email address"
								}), /* @__PURE__ */ jsx(Input, {
									type: "email",
									name: "email",
									autoComplete: "email",
									placeholder: "you@example.com",
									required: true,
									maxLength: 254,
									className: "portfolio-contact-input h-12 rounded-sm"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "portfolio-eyebrow mb-2 block text-[0.62rem]",
								children: "Subject"
							}), /* @__PURE__ */ jsx(Input, {
								name: "subject",
								placeholder: "What would you like to talk about?",
								required: true,
								minLength: 2,
								maxLength: 160,
								className: "portfolio-contact-input h-12 rounded-sm"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "portfolio-eyebrow mb-2 block text-[0.62rem]",
								children: "Your message"
							}), /* @__PURE__ */ jsx(Textarea, {
								name: "message",
								placeholder: "Tell me a little about it…",
								required: true,
								minLength: 10,
								maxLength: 5e3,
								rows: 5,
								className: "portfolio-contact-input min-h-36 resize-y rounded-sm"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -left-[9999px] top-auto size-px overflow-hidden",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "contact-website",
								children: "Leave blank"
							}), /* @__PURE__ */ jsx("input", {
								id: "contact-website",
								name: "website",
								tabIndex: -1,
								autoComplete: "off",
								value: honeypot,
								onChange: (event) => setHoneypot(event.target.value)
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-between gap-4 pt-1",
							children: [/* @__PURE__ */ jsxs(Button, {
								type: "submit",
								disabled: sending,
								className: "h-12 gap-3 rounded-sm bg-portfolio-accent px-5 text-primary-foreground hover:bg-portfolio-accent/90",
								children: [sending ? "Sending…" : "Send message", /* @__PURE__ */ jsx(Send, { className: "size-4" })]
							}), /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-3.5 text-portfolio-coral" }), " Usually replies within a few days"]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Footer() {
	const [year, setYear] = useState(2026);
	useEffect(() => setYear((/* @__PURE__ */ new Date()).getFullYear()), []);
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-foreground/12 px-5 py-8 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
					className: "portfolio-display text-base text-foreground",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-portfolio-accent",
						children: "Omatule"
					}), " Marvellous"]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Full-stack developer · Building with care"
				})] }),
				/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						year,
						" Omatule Marvellous. All rights reserved."
					]
				}),
				/* @__PURE__ */ jsx(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": "Back to top",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "self-end border border-foreground/12 text-foreground/75 hover:border-portfolio-accent/50 hover:text-portfolio-accent sm:self-auto",
					children: /* @__PURE__ */ jsx(ArrowUp, { className: "size-4" })
				})
			]
		})
	});
}
function PortfolioPage() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [backgroundReady, setBackgroundReady] = useState(false);
	useEffect(() => {
		setBackgroundReady(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);
	useEffect(() => {
		let frame = 0;
		const updateProgress = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const max = document.documentElement.scrollHeight - window.innerHeight;
				setScrollProgress(max > 0 ? window.scrollY / max : 0);
			});
		};
		window.addEventListener("scroll", updateProgress, { passive: true });
		window.addEventListener("resize", updateProgress);
		updateProgress();
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", updateProgress);
			window.removeEventListener("resize", updateProgress);
		};
	}, []);
	return /* @__PURE__ */ jsxs("main", {
		className: "relative min-h-screen overflow-clip text-foreground",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: cosmic_bg_2m4tagmk1g_jpg_asset_default.url,
				alt: "",
				"aria-hidden": "true",
				className: "portfolio-backdrop"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "portfolio-shade"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "portfolio-grain"
			}),
			backgroundReady && /* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(PortfolioBackground, {})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-portfolio-accent shadow-[0_0_10px_var(--portfolio-accent)]",
				style: { transform: `scaleX(${scrollProgress})` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsx(TopNavigation, {}),
					/* @__PURE__ */ jsx(Hero, {}),
					/* @__PURE__ */ jsx(About, {}),
					/* @__PURE__ */ jsx(Skills, {}),
					/* @__PURE__ */ jsx(Projects, {}),
					/* @__PURE__ */ jsx(Experience, {}),
					/* @__PURE__ */ jsx(Contact, {}),
					/* @__PURE__ */ jsx(Footer, {})
				]
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var SplitComponent = PortfolioPage;
//#endregion
export { SplitComponent as component };
