// 좌표계 공식 선언
const _KATEC = "+proj=tmerc +lat_0=38 +lon_0=128 +k=0.9999 +x_0=400000 +y_0=600000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43";
const _WGS84 = "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees";
const _EPSG5179 = "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs";


const _MAP = {
    // 시작
    init : () => {
        _MAP.createBaseMap();

    },
    // _MAP 지역 변수 선언
    lvar: {

    },
    // 기본맵 obj
    baseMap : {

    },
    // 측정 툴 obj
    measureCtrls : {

    },
    // 지도 레이어
    layers: {
        markerSample : [],
        polylineSample : [],
        polygonSample : [],
        circleSample : []

    },
    // 기본지도 생성
    createBaseMap : () => {
        const mapOptions = {
            minZoom: 8,
            maxZoom: 19,
            zoomsliderControl: true,
            zoomControl: false
        }

        // 기본지도 생성
        const baseMap = L.map('map', mapOptions).setView([37.5800676, 126.9771376], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: mapOptions.minZoom,
            maxZoom: mapOptions.maxZoom,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(baseMap);
        baseMap.zoomsliderControl.setPosition("topright");

        // 측정도구 선언
        const measureCtrls = {
              "distance" : new L.Polyline.distance(baseMap, {})
            ,"area" : new L.Polyline.area(baseMap, {})
        }
        _MAP.measureCtrls = measureCtrls;

        // 외부 버튼에 이벤트 리스너 추가(key)
        $('#zoomInBtn').click(() => _MAP.baseMap.zoomIn());
        $('#zoomOutBtn').click(() => _MAP.baseMap.zoomOut());
        
        // 지도 클릭 이벤트 추가
        baseMap.on('click', function(e) {

            // 거리, 면적 재기 활성화시 리턴
            let activateFlag = false;
            for ( let name in measureCtrls) {
                if(measureCtrls[name]._enabled){
                    activateFlag = true;
                    break;
                }
            }

            if(activateFlag) return false;


            // 클릭한 좌표 가져오기
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;

            // 가져온 좌표 출력
            //alert(`위도 : ${lat}  경도 : ${lng}`);

            const xy = _MAP_FN.xyWGS84ToKATECTrans(lng, lat);
            console.log(xy);

            const xy2 = _MAP_FN.xyKATECToWGS84Trans(xy[1], xy[0]);
            console.log(xy2);


        });

        _MAP.baseMap = baseMap;

    }


}

// 지도 함수
const _MAP_FN = {
    /**
     * x,y 좌표변환 (WGS84 -> KATEC)
     * @param x		x값 (lng)
     * @param y		y값 (lat)
     * @returns     array latLng
     */
    xyWGS84ToKATECTrans : (x, y) => {
        const latLng = [];
        const kToW = proj4(_WGS84, _KATEC, [Number(x), Number(y)]);
        latLng.push(kToW[1]);
        latLng.push(kToW[0]);
        return latLng;

    },
    /**
     * x,y 좌표변환 (KATEC -> WGS84)
     * @param x		x값 (lng)
     * @param y		y값 (lat)
     * @returns     array latLng
     */
    xyKATECToWGS84Trans : (x, y) => {
    	const latLng = [];
    	const kToW = proj4(_KATEC, _WGS84, [Number(x), Number(y)]);
    	latLng.push(kToW[1]);
    	latLng.push(kToW[0]);
    	return latLng;
    },
    /**
     * x,y 좌표변환 (WGS84 -> EPSG5179)
     * @param x		x값 (lng)
     * @param y		y값 (lat)
     * @returns     array latLng
     */
    xyWGS84ToEPSG5179Trans : (x, y) => {
    	var latLng = [];
    	var kToW = proj4(_WGS84, _EPSG5179, [Number(x), Number(y)]);
    	latLng.push(kToW[1]);
    	latLng.push(kToW[0]);
    	return latLng;
    },
    /**
     * x,y 좌표변환 (EPSG5179 -> WGS84)
     * @param x		x값 (lng)
     * @param y		y값 (lat)
     * @returns     array latLng
     */
    xyEPSG5179ToWGS84Trans : (x, y) => {
    	var latLng = [];
    	var kToW = proj4(_EPSG5179, _WGS84, [Number(x), Number(y)]);
    	latLng.push(kToW[1]);
    	latLng.push(kToW[0]);
    	return latLng;
    },
    /**
     * layer show
     * @param layerNm       레이어명 (_MAP.layers['레이어명'])
     * @returns
     */
    showLayer : (layerNm) => {
        const baseMap = _MAP.baseMap;
        const layers = _MAP.layers;

        const targetLayers = layers[layerNm];
        $.each(targetLayers, function(index, item){
            baseMap.addLayer(item);
        });

    },
    /**
     * layer hide
     * @param layerNm       레이어명 (_MAP.layers['레이어명'])
     * @returns
     */
    hideLayer : (layerNm) => {
        const baseMap = _MAP.baseMap;
        const layers = _MAP.layers;

    	const targetLayers = layers[layerNm];
        $.each(targetLayers, function(index, item){
            baseMap.removeLayer(item);
        });

    },
    /**
     * layer delete
     * @param layerNm       레이어명 (_MAP.layers['레이어명'])
     * @returns
     */
    deleteLayer : (layerNm) => {
        const baseMap = _MAP.baseMap;
        const layers = _MAP.layers;

        const targetLayers = layers[layerNm];
        $.each(targetLayers, function(index, item){
            baseMap.removeLayer(item);
        });

        layers[layerNm] = [];

    },
    /**
     * Point 생성
     * @param data        좌표 [y, x]
     * @param options     기본 option
     * @param popup       popup
     * @param tooltip     tooltip
     * @param layerNm     레이어명 (_MAP.layers['레이어명'])
     * @param action      event 함수 선언
     * @returns
     */
    setPoint : (data, options, popup, tooltip, layerNm, action) => {
        const baseMap = _MAP.baseMap;
        const layers = _MAP.layers;

        const marker = L.marker(data, options).addTo(baseMap);
        if(!isEmpty(popup)) marker.bindPopup(popup, {minWidth : 400});
        if(!isEmpty(tooltip)) marker.bindTooltip(popup);
        if(!isEmpty(action)) marker.on(action);
        layers[layerNm].push(marker);

    },
    /**
     * Polyline 생성
     * @param data        좌표 [[y, x], [y, x]]
     * @param options     기본 option
     * @param layerNm     레이어명 (_MAP.layers['레이어명'])
     * @returns
     */
    setPolyline : (data, options, layerNm) => {
        const baseMap = _MAP.baseMap;
        const layers = _MAP.layers;

        let setOptions = {color: "red"};
        if(!isEmpty(options)) setOptions = options;

        const polyline = L.polyline(data, setOptions).addTo(baseMap);
        baseMap.fitBounds(polyline.getBounds());
        layers[layerNm].push(polyline);

    },
    /**
     * Polygon 생성
     * @param data        좌표 [[y, x], [y, x]]
     * @param style       기본 style
     * @param layerNm     레이어명 (_MAP.layers['레이어명'])
     * @param action      event 함수 선언
     * @returns
     */
    setPolygon : (data, style, layerNm, action) => {
        const baseMap = _MAP.baseMap;
        const layers = _MAP.layers;

        let setStyle = {};
        if(!isEmpty(style)) setStyle = style;

        const polygon = L.polygon(data, setStyle).addTo(baseMap);
        baseMap.fitBounds(polygon.getBounds());
        if(!isEmpty(action)) polygon.on(action);
        layers[layerNm].push(polygon);

    },
    /**
     * Circle 생성
     * @param data        좌표 [y, x]
     * @param options     기본 options
     * @param layerNm     레이어명 (_MAP.layers['레이어명'])
     * @param action      event 함수 선언
     * @returns
     */
    setCircle : (data, options, layerNm, action) => {
        const baseMap = _MAP.baseMap;
        const layers = _MAP.layers;

        let setOptions = {radius: 500, opacity: 0.2}; // radius : meters
        if(!isEmpty(options)) setOptions = options;

        const circle = L.circle(data, setOptions).addTo(baseMap);
        baseMap.fitBounds(circle.getBounds());
        if(!isEmpty(action)) circle.on(action);
        layers[layerNm].push(circle);

    }


}