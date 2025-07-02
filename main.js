import * as maplibregl from "https://esm.sh/maplibre-gl";

import { Protocol } from "https://esm.sh/pmtiles";

const protocol = new Protocol();

maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: './assets/style.json', // style URL
    center: [9.35, 45.85], // starting position [lng, lat]
    zoom: 13 // starting zoom
});
