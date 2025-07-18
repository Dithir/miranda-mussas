import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("gallery", "routes/Gallery/gallery.tsx", [
        index("routes/Gallery/index.tsx"), // /galeria
        route("boda", "routes/Gallery/boda.tsx"), // /galeria/boda
        route("graduaciones", "routes/Gallery/graduaciones.tsx"), // /galeria/graduaciones
        route("disfraces", "routes/Gallery/disfraces.tsx"), // /galeria/disfraces
    ]),

] satisfies RouteConfig;
