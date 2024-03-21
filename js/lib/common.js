/**
 * 기본 ajax 호출
 * @param option		ajax 옵션
 * @param callback		callback 함수
 * @returns             callback
 */
const callAjax = (option, callback) => {
    const _options = {
        url : option["url"] || "",
        type : option["type"] || "POST",
        data : option["data"] || {},
        async : option["async"] || true,        // 동기/비동기 처리여부 (true: 비동기, false: 동기)
        loading : option["loading"] || true     // 로딩바 여부 (true: 로딩바 있음, false: 로딩바 없음)
    }

    $.ajax({
        type: "POST",
        url: _options.url,
        data: _options.data,
        cache: false,
        async: _options.sync,
        timeout: 300000,		// 300초
        beforeSend : function(e) {
            if(option.loading) {
                // 나중에 로딩바 show 코드 추가
            }
        },
        success: function (data) {
            callback(data);
            if(option.loading) {
                // 나중에 로딩바 hide 코드 추가
            }

        },
        error: function (err) { //서버로부터 응답이 정상적으로 처리되지 못햇을 때 실행
            // 나중에 로딩바 hide 코드 추가

            console.log(err);
            alert("문제가 발생하였습니다\n관리자에게 문의하여 주세요.");
        }
    });

}

/**
 * 공백 및 null 체크
 * @param value		값
 * @returns         boolean true/false
 */
const isEmpty = (value) => {
    if (value === "null" || value === "" || value === null || value === undefined || (value !== null && typeof value === "object" && !Object.keys(value).length)) {
            return true
        } else {
            return false
        }
}

/**
 * 전화번호 - 처리
 * @param num		값
 * @returns         formatNum
 */
const telFomatter = (num) => {
	let formatNum = "";

	if(!isEmpty(num)){
	    if(num.length==11){
	        formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

	    }else if(num.length==8){
	        formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');

	    }else{

	        if(num.indexOf("02")==0){
	        	if(num.length==9){
	        		formatNum = num.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');

	        	}else{
	        		formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');

	        	}

	        }else{
	            formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

	        }

	    }
	}

    return formatNum;
}

/**
 * 숫자에 100단위로 콤마 넣기
 * @param number		값
 * @returns             rNumber
 */
const numberComma = (number) => {
	let rNumber = "0";
	if(!isEmpty(number)){
		rNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

    return rNumber;
}