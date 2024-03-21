$(function(){
    // 데이터 통신 기본 버튼
    $("#btnAjax").click(function(){
        const option = {
            url : "/api/apiTest",
            data : {}
        }

        callAjax(option, function(data){
            console.log(data);

        });


    });

    // 거리재기 버튼
    $("#btnDistance").click(function(){
        _MAP.measureCtrls["distance"].enable();
    });

    // 면적재기 버튼
    $("#btnArea").click(function(){
        _MAP.measureCtrls["area"].enable();
    });

    // 지우기 버튼
    $("#btnRemove").click(function(){
        if (!isEmpty(_MAP.measureCtrls["distance"])) {
            _MAP.measureCtrls["distance"].removeAllMeasureItem();
        }
        if (!isEmpty(_MAP.measureCtrls["area"])) {
            _MAP.measureCtrls["area"].removeAllMeasureItem();
        }
    });

    // 마커추가 버튼
    $("#btnMarkerAdd").click(function(){
        const layers = _MAP.layers["markerSample"];
        if(layers.length > 0) return;

        const markerImg = L.icon({            
            iconUrl: "images/ico_map.png",
            //마커사이즈 수정(key)
            iconSize: [22, 30],
            iconAnchor: [8, 0]
        });

        const options = {
            icon : markerImg
        };

        const popup = "<div>팝업 테스트</div>";
        const tooltip = "<div>툴팁 테스트</div>";

        const action = {
            "mouseover": function(e){
                L.DomEvent.stopPropagation(e); // 이벤트 전파 중지
                console.log(`포인트 마우스 오버 이벤트`);

            },
            "mouseout": function(e){
                L.DomEvent.stopPropagation(e); // 이벤트 전파 중지
                console.log(`포인트 마우스 아웃 이벤트`);

            },
            "click": function(e){
                L.DomEvent.stopPropagation(e); // 이벤트 전파 중지
                console.log(`포인트 마우스 클릭 이벤트`);
            }
        };
        _MAP_FN.setPoint([37.576385491668596, 126.95792198181154], options, popup, tooltip, "markerSample", action);

    });

    // 마커삭제 버튼
    $("#btnMarkerDel").click(function(){
        _MAP_FN.deleteLayer("markerSample");

    });

    // 마커보이기 버튼
    $("#btnMarkerShow").click(function(){
        _MAP_FN.showLayer("markerSample");

    });

    // 마커숨기기 버튼
    $("#btnMarkerHide").click(function(){
        _MAP_FN.hideLayer("markerSample");

    });

    // 폴리라인추가
    $("#btnLineAdd").click(function(){
        const data = [
            [37.5665, 126.9780],
            [35.1796, 129.0756],
            [35.8714, 128.6014],
            [35.1595, 126.8526],
            [36.3504, 127.3845],
            [35.1796, 126.7739],
            [35.5384, 129.3114]
        ];

        const options = {
            color : "blue",
            weight: 3,
            opacity: 0.7,
            dashArray: "5, 10"
        };

        _MAP_FN.setPolyline(data, options, "polylineSample");
    });

    // 폴리라인삭제
    $("#btnLineDel").click(function(){
        _MAP_FN.deleteLayer("polylineSample");

    });

    // 폴리곤추가
    $("#btnPolygonAdd").click(function(){


        const data = [
           [37.563, 126.975],
           [37.566, 126.977],
           [37.564, 126.980]
        ];

        const style = {
            color: "#FF4DEC",
            opacity: 0.4,
            fillColor:"#FA05E0",
            fillOpacity: 0.1
        };

        const action = {
            "click": function(e){
                L.DomEvent.stopPropagation(e); // 이벤트 전파 중지
                alert(`폴리곤 마우스 클릭 이벤트`);
            }
        };

        _MAP_FN.setPolygon(data, style, "polygonSample", action);

    });

    // 폴리곤삭제
    $("#btnPolygonDel").click(function(){
        _MAP_FN.deleteLayer("polygonSample");

    });

    // 써클추가
    $("#btnCircleAdd").click(function(){

        const options = {
            radius : 500,
            color : "#3388ff",
            opacity: 0.2
        };

        const action = {
            "click": function(e){
                L.DomEvent.stopPropagation(e); // 이벤트 전파 중지
                alert(`써클 마우스 클릭 이벤트`);
            }
        };

        _MAP_FN.setCircle([37.576385491668596, 126.95792198181154], options, "circleSample", action);

    });

    // 써클삭제
    $("#btnCircleDel").click(function(){
        _MAP_FN.deleteLayer("circleSample");

    });




});