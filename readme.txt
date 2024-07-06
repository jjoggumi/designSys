화면은 main.html 싱글 구조이며, 
각 기능 별로 include html 방식(실제로는 thymeleaf replace)으로 할 예정이지만, 
main.html에 통으로 작업해주시면 될 거 같습니다.

css는 head 맨 아래 선언해주시면 됩니다.
script 코딩이 필요하시면 _MAP.init(); 아래코드에 넣으시면 됩니다.


[프로젝트 폴더 구조]
css : css 파일
fragments : thymeleaf html 폴더 (html include가 필요하시면 여기에 넣어주시면 됩니다.)
images : 이미지 폴더
js: 여기에 필요 lib 넣으시면 됩니다. (js/lib 폴더에 넣어주시면 됩니다.)


[main.html 기본구조]
<html>
	<head></head>
	<body>
		<div>상권분석, 유사건물 분석 등등..</div> <!-- 상권분석, 유사건물 분석 영역 -->
		<div>시설물, 유동인구 등등..</div> <!-- 우측 시설물, 유동인구 등등... -->
		<div>map</div> <!-- 지도 영역입니다.  -->
		<div>report</div> <!-- 리포트 영역입니다.  -->

		<script type="text/javascript">
					_MAP.init();
		</script>
	</body>
</html>


-----------------

[추가된 파일]

/css/reboot.css
/css/map.css
/css/fonts.css

/js/lib/chart.min.js
/js/lib/reoprtChart.js

/fonts/*

/images/*


[수정된 파일]

map.js  아래 주석으로 검색 
// 외부 버튼에 이벤트 리스너 추가(key)

event.js   아래 주석으로 검색 
//마커사이즈 수정(key)

main.html  *


[주요 naming]

상권분석  - Market Analysis : mka   >>  mkaArea, mkaBtn,  stdMka, ctrMka
유사건물분석 - Similar Building Analysis >> sbaArea, sbaBtn, sbaView
소지역 - Small Area : sma   >> smaBtn, stdSma, ctrSma
시설물 - amenities : amnt  >> amntBtn, amntCon
유동인구 - density : dst  >> dstBtn, dstCon


[그외]
숫자로 들어간 id는 해당 id와 연결된 label때문에 임의의 숫자로 넣었으니 변경해 사용하시면 됩니다. 
변경하실때 연결된 label for 값도 함께 변경해주시기 바랍니다. 

추가적으로 요청하실 사항이나 잘못 작업된 부분 있으면 바로바로 알려주세요.  

감사합니다. 