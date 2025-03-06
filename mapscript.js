// 定义投影
const proj = 'EPSG:3031';
const proj4 = '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs';
const crsOpts = {
    resolutions: [8192, 4096, 2048, 1024, 512, 256],
    origin: [-4194304, 4194304],
    bounds: L.bounds(
        [-4194304, -4194304],
        [4194304, 4194304]
    )
};

// crsOpts对象包含了地图的分辨率、原点和边界设置
let crs = new L.Proj.CRS(proj, proj4, crsOpts);

// 创建地图实例
var map = L.map('map', {
    crs: crs,
    center: [-90, 0],
    zoom: 0
});

// Modis imagery添加卫星影像图层
L.tileLayer("http://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.jpg", {
    layer: "MODIS_Aqua_CorrectedReflectance_TrueColor",
    tileMatrixSet: "EPSG3031_250m",
    time: "2023-12-23",
    tileSize: 512,
    opacity: 0.7,
    attribution: "<a href='https://earthdata.nasa.gov/gibs'> NASA </a>"
}).addTo(map);

// Coastlines添加海岸线图层
L.tileLayer.wms("https://geos.polarview.aq/geoserver/wms", {
    layers: "polarview:coastS10",
    format: "image/png",
    transparent: true,
    attribution: "<a href='https://www.polarview.aq/antarctic'>Polarview</a>",
    tileSize: 512,
    opacity: 1
}).addTo(map);

// geojson加载GeoJSON数据
fetch("/echo/json/", {
    method: "POST",
    body: `json={ "type": "Point", "coordinates": [50, -79] }`
}).then(response => response.json())
  .then(json => { L.geoJSON(json).addTo(map) });

var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Antarctica%2C_Australia_territorial_claim.svg";
var imageBounds = [[-48.4, -135], [-48.4, 45]];

// Graticule添加经纬网格线
L.graticule({ intervalLat: 10, intervalLng: 30, latBounds: [-90, -45], centerLonLabels: true }).addTo(map);

// 从CSV加载数据
fetch('web/test4.csv')
    .then(response => response.text())
    .then(csvText => {
        var data = Papa.parse(csvText, { header: true }).data;

        // 输出解析后的数据结构以供调试
        console.log(data);

        // 定义不同类型的自定义图标
        var icons = {
            'Marine Sediment': L.icon({ 
                iconUrl: 'web/images/sediment1.png', 
                iconSize: [38, 38], 
                iconAnchor: [19, 38], 
                popupAnchor: [0, -38],
                opacity: 0.8
            }),
            'On Beach': L.icon({ 
                iconUrl: 'web/images/coast1.png', 
                iconSize: [38, 38], 
                iconAnchor: [19, 38], 
                popupAnchor: [0, -38],
                opacity: 0.8
            }),
            'snow': L.icon({ 
                iconUrl: 'web/images/snow1.png', 
                iconSize: [38, 38], 
                iconAnchor: [19, 38], 
                popupAnchor: [0, -38],
                opacity: 0.8
            }),
            'Water': L.icon({ 
                iconUrl: 'web/images/water1.png', 
                iconSize: [38, 38], 
                iconAnchor: [19, 38], 
                popupAnchor: [0, -38],
                opacity: 0.8
            })
        };

        // 遍历解析后的数据
        data.forEach(point => {
            if (point.Latitude && point.Longitude && icons[point.Type]) {
                L.marker([point.Latitude, point.Longitude], { icon: icons[point.Type] })
                    .addTo(map)
                    .bindPopup(`
                        Type: ${point.Type || 'N/A'}<br>
                        Latitude: ${point.Latitude || 'N/A'}<br>
                        Longitude: ${point.Longitude || 'N/A'}<br>
                        Sampling Date: ${point.Sampling_date || 'N/A'}<br>
                        Author: ${point.Author || 'N/A'}<br>
                        Year: ${point.Year || 'N/A'}<br>
                        Title: ${point.Title || 'N/A'}<br>
                        Journal: ${point.Journal || 'N/A'}<br>
                        DOI: ${point.DOI || 'N/A'}<br>
                        Link: ${point.Link ? `<a href="${point.Link}" target="_blank">${point.Link}</a>` : 'N/A'}
                    `);
            }
        });
    });

var imageUrl = 'antarctica_map.jpg'; // 你的JPG底图的路径
var imageBounds = [[-90, -180], [-48, 180]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);
