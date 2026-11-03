(function (global, factory) {
	'use strict';
	
	if ((typeof exports === 'object') && (typeof module !== 'undefined')) {
		module.exports = factory();
	} else if ((typeof define === 'function') && define.amd) {
		define(factory);
	} else if (typeof globalThis !== 'undefined') {
		global = globalThis;
		
		global.common = factory();
	} else {
		global = self;
		
		global.common = factory();
	}
})(this, (function () {
	'use strict';
	
	/**
	 * 라이브러리 디폴트 설정 정보이다.
	 */
	const defaults = {
		'dateFormat': 'yyyy-MM-dd E HH:mm:ss.SSS',
		'corsAnywhereServerUrl': 'https://cors.common.com/'
	}
	
	/**
	 * 라이브러리 생성자 함수이다.
	 * Console 출력 여부에 따라 디폴트 설정 정보 및 함수 목록을 출력한다.
	 * common(options); 형태로 선언하며 options 값으로 디폴트 설정 정보를 변경 또는 추가한다.
	 * ASCII Art 텍스트 생성 : https://patorjk.com/software/taag
	 * 
	 * common({ 'dateFormat': 'yyyy-MM-dd E HH:mm:ss.SSS' });
	 */
	const common = function (options) {
		try {
			_.assign(defaults, options);
			
			common.common.console('default', `
%c ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ ██████╗ ███╗   ██╗     █████╗ ██████╗ ██╗
%c██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔═══██╗████╗  ██║    ██╔══██╗██╔══██╗██║
%c██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║██╔██╗ ██║    ███████║██████╔╝██║
%c██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║██║╚██╗██║    ██╔══██║██╔═══╝ ██║
%c╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║╚██████╔╝██║ ╚████║    ██║  ██║██║     ██║
%c ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝     ╚═╝
					`, 'color: #084081', 'color: #0868AC', 'color: #2B8CBE', 'color: #4EB3D3', 'color: #7BCCC4', 'color: #A8DDB5');
			
			common.common.console('table', defaults);
			
			common.common.getFunctionStringArray(common);
		} catch(e) {
			if (e.message === '_ is not defined') {
				common.common.console('error', common.name + '는 Lodash(https://lodash.com) 라이브러리가 필요합니다.');
			} else {
				common.common.console('error', e);
			}
		}
	};
	
	/**
	 * 공통 관련 함수 패키지이다.
	 */
	common.common = {
		/**
		 * Console 에 문자열을 출력한다.
		 * 
		 * common.common.console('default', 'log'); // log
		 * common.common.console('log', null); // [2023-02-24 금요일 12:44:34.229][]
		 * common.common.console('log', undefined); // [2023-02-24 금요일 12:44:34.229][]
		 * common.common.console('log', 123); // [2023-02-24 금요일 12:44:34.229][123]
		 * common.common.console('log', '123'); // [2023-02-24 금요일 12:44:34.229][123]
		 * common.common.console('log', false); // [2023-02-24 금요일 12:44:34.229][false]
		 * common.common.console('error', Symbol('123')); // [2023-02-24 금요일 12:44:34.229][Symbol(123)]
		 * common.common.console('clear'); // Console 삭제
		 * common.common.console('table', [ 1, 2, 3 ]); // 테이블 형태의 인덱스, 값 Console
		 * common.common.console('table', { "key1": 123, "key2": "value" }); // 테이블 형태의 키, 값 Console
		 * common.common.console('dir', window); // Window 객체 Console
		 * common.common.console('dirxml', document.querySelector('body')); // body Element 객체 Console
		 * common.common.console('count', 'count'); // count: 1
		 * common.common.console('count', 'count'); // count: 1
		 * 		common.common.console('count', 'count'); // count: 2
		 * 		common.common.console('countReset', 'count');
		 * 		common.common.console('count', 'count'); // count: 1
		 * common.common.console('log', 'group start');
		 * 		common.common.console('group', 'Level 1');
		 * 		common.common.console('log', 'Level 1-1');
		 * 		common.common.console('group', 'Level 2');
		 * 		common.common.console('trace', 'Level 2-1');
		 * 		common.common.console('info', 'Level 2-2');
		 * 		common.common.console('groupEnd');
		 * 		common.common.console('warn', 'Level 1-2');
		 * 		common.common.console('groupEnd');
		 * 		common.common.console('error', 'group end'); // 계층구조 Console
		 * common.common.console('time', 'time');
		 * 		common.common.console('timeLog', 'time'); // time: 0.006103515625 ms
		 * 		common.common.console('timeEnd', 'time'); // time: 0.112060546875 ms
		 */
		console: function (type, ...object) {
			if (_.isEqual(type, 'default')) {
				console.log(...object);
			} else if ([ 'clear', 'groupEnd' ].includes(type)) {
				console[type]();
			} else if ([ 'dir', 'dirxml' ].includes(type)) {
				console[type](...object);
			} else if ((_.isEqual(type, 'table')) && (_.isArray(object) || _.isPlainObject(object))) {
				console[type](...object);
			} else if ([ 'count', 'countReset', 'group', 'groupCollapsed', 'time', 'timeEnd', 'timeLog' ].includes(type)) {
				console[type](...object);
			} else if (_.isEqual(type, 'log')) {
				console.log('[%s][%s] ', type.toUpperCase(), common.date.getCurrentDate(), ...object);
			} else if (_.isEqual(type.toUpperCase(), 'trace')) {
				console.trace('[%s][%s] ', type.toUpperCase(), common.date.getCurrentDate(), ...object);
			} else if (_.isEqual(type.toUpperCase(), 'debug')) {
				console.debug('[%s][%s] ', type.toUpperCase(), common.date.getCurrentDate(), ...object);
			} else if (_.isEqual(type.toUpperCase(), 'info')) {
				console.info('[%s][%s] ', type.toUpperCase(), common.date.getCurrentDate(), ...object);
			} else if (_.isEqual(type, 'warn')) {
				console.warn('[%s][%s] ', type.toUpperCase(), common.date.getCurrentDate(), ...object);
			} else if (_.isEqual(type, 'error')) {
				console.error('[%s][%s] ', type.toUpperCase(), common.date.getCurrentDate(), ...object);
			}
		},
		
		/**
		 * 객체의 속성 Function 들의 파라미터 포함 함수명을 배열로 반환한다.
		 * isCollapsed 파라미터가 true 일 경우 console.groupCollapsed(), false 일 경우 console.group() 형태로 함수명을 출력한다.
		 * 
		 * common.common.getFunctionStringArray(null); // []
		 * common.common.getFunctionStringArray(undefined); // []
		 * common.common.getFunctionStringArray(document.querySelector('body')); // []
		 * common.common.getFunctionStringArray(common); // common 객체의 속성 내 Function 들의 파라미터 포함 함수명의 배열
		 */
		getFunctionStringArray: function (object, isCollapsed) {
			if (_.isNull(object) || _.isUndefined(object)) {
				return [];
			}
			
			const functionStringArray = function (object, objectName, returnValue) {
				let key;
				
				let parameterText;
				
				for (key in object) {
					if (_.isObject(object[key])) {
						groupCount++;
						
						if (isCollapsed) {
							common.common.console('groupCollapsed', objectName + '.' + key);
						} else {
							common.common.console('group', objectName + '.' + key);
						}
						
						if (_.isEqual(Object.keys(object[key]).length, 0)) {
							groupCount--;
							
							common.common.console('groupEnd');
						}
						
						if (Object.keys(object[key]).length > 0) {
							functionStringArray(object[key], objectName + '.' + key, returnValue);
							
							groupCount--;
							
							common.common.console('groupEnd');
						}
					}
					
					if (_.isFunction(object[key])) {
						parameterText = common.string.getSubstringBetween(object[key], '(', '{');
						
						parameterText = '(' + _.trim(parameterText) + ';';
						
						returnValue.push(objectName + '.' + key + parameterText);
						
						common.common.console('default', objectName + '.' + key + parameterText);
					}
				}
				
				return returnValue;
			};
			
			let returnValue;
			
			let objectName;
			
			let groupCount = 0;
			
			if (_.isNull(isCollapsed) || _.isUndefined(isCollapsed)) {
				isCollapsed = true;
			}
			
			if (_.isNull(objectName) || _.isUndefined(objectName)) {
				objectName = object.name;
				
				groupCount++;
				
				common.common.console('group', objectName);
			}
			
			if (!_.isArray(returnValue)) {
				returnValue = new Array();
			}
			
			functionStringArray(object, objectName, returnValue);
			
			for (let i = 0; i < groupCount; i++) {
				common.common.console('groupEnd');
			}
			
			return returnValue;
		}
	};
	
	/**
	 * 문자열 관련 함수 패키지이다.
	 */
	common.string = {
		/**
		 * 객체를 시작/종료 문자열로 검색하여 범위 내 문자열만 추출하여 반환한다.
		 * 
		 * common.string.getSubstringBetween(null, '', ''); // ''
		 * common.string.getSubstringBetween(undefined, '', ''); // ''
		 * common.string.getSubstringBetween(123, null, '3'); // '12'
		 * common.string.getSubstringBetween('123', '2', undefined); // '3'
		 * common.string.getSubstringBetween(false, 'a', 's'); // 'l'
		 * common.string.getSubstringBetween(Symbol('123'), 'y', '2'); // 'mbol(1'
		 * common.string.getSubstringBetween([ 1, 2, 3 ], '[', ','); // '1'
		 * common.string.getSubstringBetween({ "key1": 123, "key2": "value" }, 'key', 'key'); // '[object Object]'
		 * common.string.getSubstringBetween(window, '', 'W'); // '[object '
		 * common.string.getSubstringBetween(function () {}, '(', ''); // ') {}'
		 * common.string.getSubstringBetween(new Date(), '(', ')'); // '한국 표준시'
		 * common.string.getSubstringBetween(/\w+/, '/', '/'); // '\\w+'
		 * common.string.getSubstringBetween(document.querySelector('body'), '[', ']'); // object HTMLBodyElement
		 */
		getSubstringBetween: function (object, open, close) {
			const stringObject = _.toString(object);
			const stringOpen = _.toString(open);
			const stringClose = _.toString(close);
			
			let startIndex = stringObject.indexOf(stringOpen);
			
			if (_.isEqual(startIndex, -1)) {
				startIndex = 0;
			} else {
				startIndex = stringObject.indexOf(stringOpen) + stringOpen.length;
			}
			
			let endIndex = stringObject.indexOf(stringClose, startIndex);
			
			if ((_.isEqual(endIndex, -1)) || (_.isEqual(startIndex, endIndex))) {
				endIndex = stringObject.length;
			}
			
			return stringObject.substring(startIndex, endIndex);
		},
		
		/**
		 * 객체의 HTML 특수 문자를 이스케이프 문자로 치환하여 반환한다.
		 * 
		 * common.string.getEscapeHtml(null); // ''
		 * common.string.getEscapeHtml(undefined); // ''
		 * common.string.getEscapeHtml(123); // '123'
		 * common.string.getEscapeHtml('123'); // '123'
		 * common.string.getEscapeHtml(false); // 'false'
		 * common.string.getEscapeHtml(Symbol('123')); // 'Symbol(123)'
		 * common.string.getEscapeHtml([ 1, 2, 3 ]); // '[1,2,3]'
		 * common.string.getEscapeHtml({ "key1": 123, "key2": "value" }); // '{&quot;key1&quot;:123,&quot;key2&quot;:&quot;value&quot;}'
		 * common.string.getEscapeHtml(window); // '[object Window]'
		 * common.string.getEscapeHtml(function () {}); // 'function () {}'
		 * common.string.getEscapeHtml(new Date()); // 'Fri Feb 24 2023 11:08:26 GMT+0900 (한국 표준시)'
		 * common.string.getEscapeHtml(/\w+/); // '/\\w+/'
		 * common.string.getEscapeHtml('<>&\"\'\n\t'); // '&lt;&gt;&amp;&quot;&#39;&#10;&#9;'
		 */
		getEscapeHtml: function (object) {
			return _.toString(object).replace(/(<|>|&|"|'|\n|\t|)/g, function ($1) {
						switch ($1) {
							case '<': return '&lt;';
							case '>': return '&gt;';
							case '&': return '&amp;';
							case '\"': return '&quot;';
							case '\'': return '&#39;';
							case '\n': return '&#10;';
							case '\t': return '&#9;';
							default: return $1;
						}
					});
		}
	};
	
	/**
	 * 일자 관련 함수 패키지이다.
	 */
	common.date = {
		/**
		 * Date 객체를 출력 패턴 형태로 치환하여 반환한다.
		 * dateFormat 를 지정하지 않을 경우 기본 출력 포맷은 'yyyy-MM-dd E HH:mm:ss.SSS' 이며, common(options); 의 options 에서 설정할 수 있다.
		 * dateFormat 에서 yyyy 는 년도 4자리, MM 은 월 2자리, dd 는 일 2자리, E 는 요일, HH 는 시 2자리, mm 는 분 2자리, ss 는 초 2자리, SSS 는 밀리초 3자리를 표현하는 패턴 문자열이다.
		 * 
		 * common({
		 * 
		 * 	dateFormat: Date 출력 패턴 문자열
		 * 
		 * });
		 * 
		 * common.date.getFormatDate(new Date()); // '2023-02-24 금요일 18:32:08.263'
		 * common.date.getFormatDate(null, 'yyyy-MM-dd E HH:mm:ss.SSS'); // ''
		 * common.date.getFormatDate(undefined, 'yyyy-MM-dd E HH:mm:ss.SSS'); // ''
		 * common.date.getFormatDate('123', 'yyyy-MM-dd E HH:mm:ss.SSS'); // '123'
		 * common.date.getFormatDate(new Date(), 'yyyy-MM-dd'); // '2023-02-24'
		 * common.date.getFormatDate(new Date(), 'HH:mm:ss'); // '18:32:08'
		 * common.date.getFormatDate(new Date(), 'yyyy-MM-dd HH:mm:ss'); // '2023-02-24 18:32:08'
		 * common.date.getFormatDate(new Date(), 'yyyy-MM-dd E HH:mm:ss.SSS'); // '2023-02-24 금요일 18:32:08.263'
		 */
		getFormatDate: function (date, dateFormat) {
			if (!_.isDate(date)) {
				return '';
			}
			
			dateFormat = _.defaultTo(dateFormat, defaults.dateFormat);
			
			return dateFormat.replace(/(yyyy|MM|dd|E|HH|mm|ss|SSS)/g, function ($1) {
				switch ($1) {
					case 'yyyy': return date.getFullYear();
					case 'MM': return ('0' + (date.getMonth() + 1)).slice(-2);
					case 'dd': return ('0' + date.getDate()).slice(-2);
					case 'E': return [ '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일' ][date.getDay()];
					case 'HH': return ('0' + date.getHours()).slice(-2);
					case 'mm': return ('0' + date.getMinutes()).slice(-2);
					case 'ss': return ('0' + date.getSeconds()).slice(-2);
					case 'SSS': return ('000' + date.getMilliseconds()).slice(-3);
					default: return $1;
				}
			});
		},
		
		/**
		 * 현재 일시를 출력 패턴 형태로 치환하여 반환한다.
		 * dateFormat 를 지정하지 않을 경우 기본 출력 포맷은 'yyyy-MM-dd E HH:mm:ss.SSS' 이며, common(options); 의 options 에서 설정할 수 있다.
		 * dateFormat 에서 yyyy 는 년도 4자리, MM 은 월 2자리, dd 는 일 2자리, E 는 요일, HH 는 시 2자리, mm 는 분 2자리, ss 는 초 2자리, SSS 는 밀리초 3자리를 표현하는 패턴 문자열이다.
		 * 
		 * common({
		 * 
		 * 	dateFormat: Date 출력 패턴 문자열
		 * 
		 * });
		 * 
		 * common.date.getCurrentDate(); // '2023-02-24 금요일 18:32:08.263'
		 * common.date.getCurrentDate(null); // '2023-02-24 금요일 18:32:08.263'
		 * common.date.getCurrentDate(undefined); // '2023-02-24 금요일 18:32:08.263'
		 * common.date.getCurrentDate('123'); // '123'
		 * common.date.getCurrentDate('yyyy-MM-dd'); // '2023-02-24'
		 * common.date.getCurrentDate('HH:mm:ss'); // '18:32:08'
		 * common.date.getCurrentDate('yyyy-MM-dd HH:mm:ss'); // '2023-02-24 18:32:08'
		 * common.date.getCurrentDate('yyyy-MM-dd E HH:mm:ss.SSS'); // '2023-02-24 금요일 18:32:08.263'
		 */
		getCurrentDate: function (dateFormat) {
			return common.date.getFormatDate(new Date(), dateFormat);
		}
	};
	
	/**
	 * AJAX(Asynchronous JavaScript And XML) 관련 함수 패키지이다.
	 */
	common.ajax = {
		/**
		 * Promise 객체인지 여부를 반환한다.
		 * 
		 * common.ajax.isPromise(null); // false
		 * common.ajax.isPromise(undefined); // false
		 * common.ajax.isPromise(123); // false
		 * common.ajax.isPromise('123'); // false
		 * common.ajax.isPromise(false); // false
		 * common.ajax.isPromise(Symbol('123')); // false
		 * common.ajax.isPromise([ 1, 2, 3 ]); // false
		 * common.ajax.isPromise({ "key1": 123, "key2": "value" }); // false
		 * common.ajax.isPromise(window); // false
		 * common.ajax.isPromise(function () {}); // false
		 * common.ajax.isPromise(new Promise(function (resolve, reject) { resolve(); })); // true
		 * common.ajax.isPromise(new Date()); // false
		 * common.ajax.isPromise(/\w+/); // false
		 * common.ajax.isPromise(document.querySelector('body')); // false
		 */
		isPromise: function (object) {
			return (!_.isNull(object) &&
					!_.isUndefined(object) &&
					_.isEqual(typeof object.then, 'function') &&
					_.isEqual(typeof object.catch, 'function'));
		},
		
		/**
		 * URL 을 Cors Anywhere(https://cors-anywhere.herokuapp.com) 서버 API URL 로 변환하여 반환한다.
		 * 
		 * common.ajax.getCorsAnywhereUrl(null); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(undefined); 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(123); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl('http://openapi.naver.com'); // 'https://cors.common.com/openapi.naver.com/'
		 * common.ajax.getCorsAnywhereUrl('http://openapi.naver.com:8080'); // 'https://cors.common.com/openapi.naver.com:8080/'
		 * common.ajax.getCorsAnywhereUrl('https://openapi.naver.com'); // 'https://cors.common.com/openapi.naver.com:443/'
		 * common.ajax.getCorsAnywhereUrl('https://openapi.naver.com:8081'); // 'https://cors.common.com/openapi.naver.com:8081/'
		 * common.ajax.getCorsAnywhereUrl(false); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(Symbol('123')); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl([ 1, 2, 3 ]); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl({ "key1": 123, "key2": "value" }); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(window); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(function () {}); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(new Promise(function (resolve, reject) { resolve(); })); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(new Date()); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(/\w+/); // 'https://cors.common.com/'
		 * common.ajax.getCorsAnywhereUrl(document.querySelector('body')); // 'https://cors.common.com/'
		 */
		getCorsAnywhereUrl: function (object) {
			try {
				var url;
				
				if (common.string.isContainsAny(common.string.getTrim(object), 'http://', 'https://')) {
					url = new URL(common.string.getTrim(object));
				} else {
					url = new URL('http://' + common.string.getTrim(object));
				}
				
				if (_.isEqual(url.port, '') && _.isEqual(url.protocol, 'https:')) {
					return (defaults.corsAnywhereServerUrl + url.host + ':443' + url.pathname + url.search);
				}
				
				return (defaults.corsAnywhereServerUrl + url.host + url.pathname + url.search);
			} catch (e) {
				return defaults.corsAnywhereServerUrl;
			}
		}
	};
	
	/**
	 * UI(User interface) 관련 함수 패키지이다.
	 */
	common.ui = {
		/**
		 * Element 객체를 생성하여 반환한다.
		 * 
		 * common.ui.createDom('span'); // <span></span>
		 * common.ui.createDom('div', { 'id': 'divId', 'class': 'divClass' }); // <div id="divId" class="divClass"></div>
		 */
		 createDom: function (element, object) {
			const returnValue = document.createElement(_.toString(element));
			
			for (let key in object) {
				returnValue.setAttribute(key, object[key]);
			}
			
			return returnValue;
		},
		
		/**
		 * DOM 또는 CSS 선택자에 해당되는 첫번째 Element 객체를 반환한다.
		 * 해당 Element 객체가 없을 경우 null 을 반환한다.
		 * 
		 * common.ui.getDom(null); // null
		 * common.ui.getDom(undefined); // null
		 * common.ui.getDom(''); // null
		 * common.ui.getDom('html'); // html Element 객체
		 * common.ui.getDom('body', common.ui.getDom('html')); // body Element 객체
		 * 		document.querySelector('body').className = 'bodyClass';
		 * 		common.ui.getDom('.bodyClass'); // body Element 객체
		 * 		document.querySelector('body').id = 'bodyId';
		 * 		common.ui.getDom('#bodyId'); // body Element 객체
		 */
		getDom: function (selector, dom) {
			try {
				if (dom) {
					return dom.querySelector(_.toString(selector));
				} else {
					return document.querySelector(_.toString(selector));
				}
			} catch (e) {
				return null;
			}
		},
		
		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element NodeList 객체를 반환한다.
		 * 해당 Element 객체가 없을 경우 크기가 0 인 NodeList 객체를 반환한다.
		 * 
		 * common.ui.getDomList(null); // NodeList [] 객체
		 * common.ui.getDomList(undefined); // NodeList [] 객체
		 * common.ui.getDomList(''); // NodeList [] 객체
		 * common.ui.getDomList('html'); // NodeList [html] 객체
		 * common.ui.getDomList('body', common.ui.getDom('html')); // NodeList [body] 객체
		 * 		document.querySelector('body').appendChild(document.createElement('div'));
		 * 		document.querySelector('body').appendChild(document.createElement('div'));
		 * 		document.querySelector('body').appendChild(document.createElement('div'));
		 * 		common.ui.getDomList('div'); // NodeList [div, div, div] 객체
		 */
		getDomList: function (selector, dom) {
			try {
				if (dom) {
					return dom.querySelectorAll(_.toString(selector));
				} else {
					return document.querySelectorAll(_.toString(selector));
				}
			} catch (e) {
				return document.querySelectorAll(null);
			}
		},
		
		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element NodeList 객체의 CSSStyleDeclaration Array 객체를 반환한다.
		 * 속성 키를 지정하여 호출 시 CSSStyleDeclaration 의 해당 속성 값을 Array 객체로 반환한다.
		 * 해당 Element 객체가 없을 경우 크기가 0 인 Array 객체를 반환한다.
		 * 
		 * common.ui.getDomStyleList(null); // [] 객체
		 * common.ui.getDomStyleList(undefined); // [] 객체
		 * common.ui.getDomStyleList(''); // [] 객체
		 * common.ui.getDomStyleList(common.ui.getDomList('div')); // [CSSStyleDeclaration] 객체
		 * common.ui.getDomStyleList(common.ui.getDomList('div', common.ui.getDom('body')), 'width'); // ['auto', '100%', 'auto', 'auto', '300px'] 객체
		 * common.ui.getDomStyleList(common.ui.getDomList('div'), 'propertyKey'); // ['', '', '', '', ''] 객체
		 */
		getDomStyleList: function (domList, propertyKey) {
			const returnValue = new Array();
			
			try {
				for (let i = 0; i < domList.length; i++) {
					if (_.isNull(propertyKey) || _.isUndefined(propertyKey)) {
						returnValue.push(window.getComputedStyle(domList[i]));
					} else {
						returnValue.push(window.getComputedStyle(domList[i]).getPropertyValue(_.toString(propertyKey)));
					}
				}
			} catch (e) {
				return [];
			}
			
			return returnValue;
		},
		
		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element 에 불투명 레이어를 적용한다.
		 * DOM 또는 CSS 선택자를 지정하지 않거나 해당되는 Element 객체가 없을 경우 body Element 에 불투명 레이어를 적용한다.
		 * 
		 * common.ui.blockUI();
		 * common.ui.blockUI('', { 'data-text': '로딩중...' });
		 * common.ui.blockUI('#divId');
		 * common.ui.blockUI('#divId', { 'data-text': '조회중입니다.' });
		 */
		blockUI: function (selector, options) {
			const defaultOptions = {
				'data-text': 'Loading...'
			};
			
			if (_.isPlainObject(options)) {
				_.merge(defaultOptions, options);
			}
			
			if (!common.ui.getDom('style[title="blockUI"]')) {
				const styleDom = common.ui.createDom('style', {
					'title': 'blockUI'
				});
				
				styleDom.appendChild(document.createTextNode(`
.blockUI {
	
	cursor: wait;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	z-index: 1000;
	background-color: #000000;
	opacity: 0.5;
	transition: opacity 0.25s;

}

.blockUI:before {
	
	content: "";
	display: block;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border-width: 10px;
	border-style: solid;
	border-color: #ffffff #72c02c #72c02c #72c02c;
	position: absolute;
	top: calc(50% - 110px);
	left: calc(50% - 110px);
	will-change: transform;
	animation: blockUISpin 2s infinite ease-in-out;

}

.blockUI:after {
	
	content: attr(data-text);
	display: block;
	max-width: 125px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 20px;
	color: #ffffff;
	text-align: center;

}

@keyframes blockUISpin {

	0% { transform: translateZ(0) rotate(0deg); }
	100% { transform: translateZ(0) rotate(360deg); }

}
				`));
				
				common.ui.getDom('head').appendChild(styleDom);
			}
			
			const parentDom = common.ui.getDom(selector) || document.body;
			
			if ((!_.isEqual(parentDom.tagName, 'BODY')) && _.isEmpty(parentDom.style.position)) {
				parentDom.style.position = 'relative';
			}
			
			parentDom.appendChild(common.ui.createDom('div', {
				'class': 'blockUI',
				'style': (_.isEqual(parentDom.tagName, 'BODY')) ? 'position: fixed' : 'position: absolute',
				'data-text': defaultOptions['data-text']
			}));
		},
		
		/**
		 * DOM 또는 CSS 선택자에 해당되는 Element 의 불투명 레이어를 제거한다.
		 * DOM 또는 CSS 선택자를 지정하지 않거나 해당되는 Element 객체가 없을 경우 불투명 레이어 모두를 제거한다.
		 * 
		 * common.ui.unblockUI();
		 * common.ui.unblockUI('');
		 * common.ui.unblockUI('#divId');
		 */
		unblockUI: function (selector) {
			try {
				if (_.isNull(selector) || _.isUndefined(selector)) {
					throw new Error();
				} else {
					common.ui.getDom(selector).removeChild(common.ui.getDom(_.toString(selector) + ' .blockUI'));
				}
			} catch (e) {
				const domList = common.ui.getDomList('.blockUI');
				
				for (let i = 0; i < domList.length; i++) {
					domList[i].remove();
				}
			}
		}
	};
	
	/**
	 * jQuery, jQuery UI 관련 함수 패키지이다.
	 * 
	 * common.jQuery 패키지 사용 시 jQuery(https://jquery.com) 라이브러리가 필요하다.
	 * common.jQuery.ui 패키지 사용 시 jQuery(https://jquery.com), jQuery UI(https://jqueryui.com) 라이브러리가 필요하다.
	 */
	(function ($) {
		if ($) {
			$(document).ajaxStart(function () {
			});
			
			$(document).ajaxSend(function (event, jqXHR, ajaxOptions) {
				if (ajaxOptions.global && ajaxOptions.async) {
					if (Pace) {
						common.Pace.restart();
					} else {
						jqXHR.timeoutId = setTimeout(function () {
							if (_.isEqual($('.blockUI').length, 0)) {
								common.ui.blockUI();
							}
						}, 500);
					}
				}
			});
			
			$(document).ajaxComplete(function (event, jqXHR, ajaxOptions) {
				if (jqXHR.timeoutId) {
					clearTimeout(jqXHR.timeoutId);
				}
			});
			
			$(document).ajaxStop(function () {
				if (!Pace) {
					common.ui.unblockUI();
				}
			});
		} else {
			common.common.console('warn', common.name + '.jQuery 패키지는 jQuery(https://jquery.com) 라이브러리가 필요합니다.');
		}
		
		common.jQuery = {
			/**
			 * jQuery 버전을 반환한다.
			 * 
			 * common.jQuery.getVersion(); // '3.6.3'
			 */
			getVersion: function () {
				return $().jquery;
			},
			
			/**
			 * jQuery Ajax 를 실행한다.
			 * 
			 * common.jQuery.ajax({
			 * 		url: '/url.do',
			 * 		data: $('#frm').serialize(),
			 * 		success: function (data, textStatus, jqXHR) {
			 * 			common.common.console('log', data);
			 * 			common.common.console('log', textStatus);
			 * 			common.common.console('log', jqXHR);
			 * 		}
			 * });
			 */
			ajax: function (options) {
				const defaults = {
					global: true,
					crossDomain: true,
					context: this,
					traditional: true,
					method: 'POST',
					type: 'POST',
					dataType: 'json',
					contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
					processData: true,
					async: true,
					cache: true,
					timeout : 0,
					headers: {  },
					beforeSend: function (jqXHR, settings) {
					},
					success: function (data, textStatus, jqXHR) {
						common.common.console('log', data);
						common.common.console('log', textStatus);
						common.common.console('log', jqXHR);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						let readyStateText = '';
						
						if (jqXHR.readyState === 0) {
							readyStateText = '(UNSENT)';
						} else if (jqXHR.readyState === 1) {
							readyStateText = '(OPENED)';
						} else if (jqXHR.readyState === 2) {
							readyStateText = '(HEADERS_RECEIVED)';
						} else if (jqXHR.readyState === 3) {
							readyStateText = '(LOADING)';
						} else if (jqXHR.readyState === 4) {
							readyStateText = '(DONE)';
						}
						
						common.common.console('error', 'readyState : ' + jqXHR.readyState + readyStateText);
						common.common.console('error', 'status : ' + jqXHR.status);
						common.common.console('error', 'statusText : ' + jqXHR.statusText);
						common.common.console('error', 'textStatus : ' + textStatus);
						common.common.console('error', 'errorThrown : ' + errorThrown);
						common.common.console('error', 'responseText : ' + jqXHR.responseText);
					},
					complete: function (jqXHR, textStatus) {
					},
					isCorsUrl: false
				};
				
				$.extend(defaults, options);
				
				if (defaults.crossDomain && jQuery.support.cors && defaults.isCorsUrl) {
					defaults.url = common.ajax.getCorsAnywhereUrl(defaults.url);
				}
				
				return $.ajax(defaults);
			}
		}
		
		if ($ && !$.ui) {
			common.common.console('warn', common.name + '.jQuery.ui 패키지는 jQuery UI(https://jqueryui.com) 라이브러리가 필요합니다.');
		}
		
		common.jQuery.ui = {
			/**
			 * jQuery UI 버전을 반환한다.
			 * 
			 * common.jQuery.ui.getVersion(); // '1.12.1'
			 */
			getVersion: function () {
				return $.ui.version;
			},
			
			/**
			 * jQuery UI Datepicker Widget 을 실행한다.
			 * 
			 * common.jQuery.ui.datepicker('#date');
			 */
			datepicker: function (selector, options) {
				const minDate = new Date(2000, 0, 1);
				const maxDate = new Date();
				
				maxDate.setFullYear(maxDate.getFullYear() + 3);
				
				const defaults = {
					dateFormat: 'yy-mm-dd',
					minDate: minDate,
					maxDate: maxDate,
					changeYear: true,
					yearRange: minDate.getFullYear() + ':' + maxDate.getFullYear(),
					changeMonth: true,
					showMonthAfterYear: true,
					showOtherMonths: true,
					monthNames: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
					monthNamesShort: [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
					dayNames: [ '일', '월', '화', '수', '목', '금', '토' ],
					dayNamesMin: [ '일', '월', '화', '수', '목', '금', '토' ],
					dayNamesShort: [ '일', '월', '화', '수', '목', '금', '토' ],
					showWeek: true,
					weekHeader: '주',
					showButtonPanel: true,
					nextText: '다음 달',
					prevText: '이전 달',
					currentText: '오늘',
					closeText: '초기화',
					beforeShow: function (input, inst) {
						//common.common.console('log', 'beforeShow:', input, inst);
						
						setTimeout(function () {
							const $reverseYears = $('.ui-datepicker-year option').get().reverse();
							
							$('.ui-datepicker-year').html($reverseYears);
							
							$('.ui-datepicker-year option').each(function (index, element) {
								if ($(this).text().indexOf('년') === -1) {
									$(this).text($(this).text() + '년');
								}
							});
						}, 0);
					},
					onChangeMonthYear: function (year, month, inst) {
						//common.common.console('log', 'beforeShow:', input, inst);
						
						setTimeout(function () {
							const $reverseYears = $('.ui-datepicker-year option').get().reverse();
							
							$('.ui-datepicker-year').html($reverseYears);
							
							$('.ui-datepicker-year option').each(function (index, element) {
								if ($(this).text().indexOf('년') === -1) {
									$(this).text($(this).text() + '년');
								}
							});
						}, 0);
					},
					onClose: function(dateText, inst) {
						//common.common.console('log', 'onClose:', dateText, inst);
						
						if ($('.ui-datepicker-close')[0] === document.activeElement) {
							$(this).val('');
						}
					}
				};
				
				$.extend(defaults, options);
				
				return $(selector).datepicker(defaults);
			}
		}
	})(window.jQuery);
	
	/**
	 * UAParser.js 관련 함수 패키지이다.
	 * 
	 * common.UAParser 패키지 사용 시 UAParser.js(https://github.com/faisalman/ua-parser-js) 라이브러리가 필요하다.
	 */
	(function (UAParser) {
		let uaParser;
		
		if (UAParser) {
			uaParser = new UAParser();
		} else {
			common.common.console('warn', common.name + '.UAParser 패키지는 UAParser.js(https://github.com/faisalman/ua-parser-js) 라이브러리가 필요합니다.');
		}
		
		common.UAParser = {
			/**
			 * 사용자 브라우저명을 반환한다.
			 * 
			 * common.UAParser.getBrowserName(); // 'Chrome'
			 */
			 getBrowserName: function () {
				return uaParser.getBrowser().name;
			},
			
			/**
			 * 사용자 브라우저 버전을 반환한다.
			 * 
			 * common.UAParser.getBrowserVersion(); // '110.0.0.0'
			 */
			 getBrowserVersion: function () {
				return uaParser.getBrowser().version;
			},
			
			/**
			 * 사용자 브라우저 주요 버전을 반환한다.
			 * 
			 * common.UAParser.getBrowserMajorVersion(); // '110'
			 */
			 getBrowserMajorVersion: function () {
				return uaParser.getBrowser().version;
			},
			
			/**
			 * 사용자 기기 구분명을 반환한다.
			 * 
			 * common.UAParser.getDeviceType(); // 'mobile'
			 */
			 getDeviceType: function () {
				return uaParser.getDevice().type;
			},
			
			/**
			 * 사용자 기기 공급업체명을 반환한다.
			 * 
			 * common.UAParser.getDeviceVendor(); // 'LG'
			 */
			 getDeviceVendor: function () {
				return uaParser.getDevice().vendor;
			},
			
			/**
			 * 사용자 기기 모델명을 반환한다.
			 * 
			 * common.UAParser.getDeviceModel(); // 'Nexus 5'
			 */
			 getDeviceModel: function () {
				return uaParser.getDevice().model;
			},
			
			/**
			 * 사용자 브라우저 엔진명을 반환한다.
			 * 
			 * common.UAParser.getEngineName(); // 'Blink'
			 */
			 getEngineName: function () {
				return uaParser.getEngine().name;
			},
			
			/**
			 * 사용자 브라우저 엔진 버전을 반환한다.
			 * 
			 * common.UAParser.getEngineVersion(); // '110.0.0.0'
			 */
			 getEngineVersion: function () {
				return uaParser.getEngine().version;
			},
			
			/**
			 * 사용자 OS 명을 반환한다.
			 * 
			 * common.UAParser.getOSName(); // 'Linux'
			 */
			 getOSName: function () {
				return uaParser.getOS().name;
			},
			
			/**
			 * 사용자 OS 버전을 반환한다.
			 * 
			 * common.UAParser.getOSVersion(); // 'x86_64'
			 */
			 getOSVersion: function () {
				return uaParser.getOS().version;
			},
			
			/**
			 * 사용자의 CPU 아키텍처명을 반환한다.
			 * 
			 * common.UAParser.getCPUArchitecture(); // 'amd64'
			 */
			 getCPUArchitecture: function () {
				return uaParser.getCPU().architecture;
			},
			
			/**
			 * User Agent 를 반환한다.
			 * 
			 * common.UAParser.getUserAgent(); // 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
			 */
			 getUserAgent: function () {
				return uaParser.getUA();
			},
			
			/**
			 * User Agent 를 설정한다.
			 * 
			 * common.UAParser.getUserAgent(); // 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
			 * 		common.UAParser.getBrowserName(); // 'Chrome'
			 * 		common.UAParser.setUserAgent('Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537');
			 * 		common.UAParser.getUserAgent(); // 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537'
			 * 		common.UAParser.getBrowserName(); // 'IEMobile'
			 */
			 setUserAgent: function (object) {
				return uaParser.setUA(_.toString(object));
			}
		}
	})(window.UAParser);
	
	/**
	 * PACE 관련 함수 패키지이다.
	 * 
	 * common.Pace 패키지 사용 시 PACE(https://codebyzach.github.io/pace) 라이브러리가 필요하다.
	 */
	(function (Pace) {
		if (Pace) {
			const styleDom = common.ui.createDom('style');
			
			styleDom.appendChild(document.createTextNode(`
.loadingBar.pace-running:before {
	content: "";
	position: absolute;
	cursor: wait;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	z-index: 1000;
	background-color: #000000;
	opacity: 0.5;
	transition: opacity 0.25s;
}

.loadingBar .pace {
	-webkit-pointer-events: none;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	border-radius: 10px;
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding;
	background-clip: padding-box;
	z-index: 2000;
	position: fixed;
	margin: auto;
	top: 12px;
	left: 0;
	right: 0;
	bottom: 0;
	width: 200px;
	height: 50px;
	overflow: hidden;
}

.loadingBar .pace .pace-progress {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	-webkit-background-clip: padding-box;
	-moz-background-clip: padding;
	background-clip: padding-box;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	display: block;
	position: absolute;
	right: 100%;
	margin-right: -10px;
	width: 93%;
	top: 7px;
	height: 14px;
	font-size: 14px;
	background: #72c02c;
	color: #72c02c;
	line-height: 60px;
	font-weight: bold;
	-webkit-box-shadow: 120px 0 #ffffff, 240px 0 #ffffff;
	-ms-box-shadow: 120px 0 #ffffff, 240px 0 #ffffff;
	box-shadow: 120px 0 #ffffff, 240px 0 #ffffff;
}

.loadingBar .pace .pace-progress:after {
	content: attr(data-progress-text);
	display: inline-block;
	position: fixed;
	width: 45px;
	text-align: right;
	right: 0;
	padding-right: 16px;
	top: 4px;
	color: #ffffff;
}

.loadingBar .pace .pace-progress[data-progress-text="0%"]:after { right: -200px }
.loadingBar .pace .pace-progress[data-progress-text="1%"]:after { right: -198.14px }
.loadingBar .pace .pace-progress[data-progress-text="2%"]:after { right: -196.28px }
.loadingBar .pace .pace-progress[data-progress-text="3%"]:after { right: -194.42px }
.loadingBar .pace .pace-progress[data-progress-text="4%"]:after { right: -192.56px }
.loadingBar .pace .pace-progress[data-progress-text="5%"]:after { right: -190.7px }
.loadingBar .pace .pace-progress[data-progress-text="6%"]:after { right: -188.84px }
.loadingBar .pace .pace-progress[data-progress-text="7%"]:after { right: -186.98px }
.loadingBar .pace .pace-progress[data-progress-text="8%"]:after { right: -185.12px }
.loadingBar .pace .pace-progress[data-progress-text="9%"]:after { right: -183.26px }
.loadingBar .pace .pace-progress[data-progress-text="10%"]:after { right: -181.4px }
.loadingBar .pace .pace-progress[data-progress-text="11%"]:after { right: -179.54px }
.loadingBar .pace .pace-progress[data-progress-text="12%"]:after { right: -177.68px }
.loadingBar .pace .pace-progress[data-progress-text="13%"]:after { right: -175.82px }
.loadingBar .pace .pace-progress[data-progress-text="14%"]:after { right: -173.96px }
.loadingBar .pace .pace-progress[data-progress-text="15%"]:after { right: -172.1px }
.loadingBar .pace .pace-progress[data-progress-text="16%"]:after { right: -170.24px }
.loadingBar .pace .pace-progress[data-progress-text="17%"]:after { right: -168.38px }
.loadingBar .pace .pace-progress[data-progress-text="18%"]:after { right: -166.52px }
.loadingBar .pace .pace-progress[data-progress-text="19%"]:after { right: -164.66px }
.loadingBar .pace .pace-progress[data-progress-text="20%"]:after { right: -162.8px }
.loadingBar .pace .pace-progress[data-progress-text="21%"]:after { right: -160.94px }
.loadingBar .pace .pace-progress[data-progress-text="22%"]:after { right: -159.08px }
.loadingBar .pace .pace-progress[data-progress-text="23%"]:after { right: -157.22px }
.loadingBar .pace .pace-progress[data-progress-text="24%"]:after { right: -155.36px }
.loadingBar .pace .pace-progress[data-progress-text="25%"]:after { right: -153.5px }
.loadingBar .pace .pace-progress[data-progress-text="26%"]:after { right: -151.64px }
.loadingBar .pace .pace-progress[data-progress-text="27%"]:after { right: -149.78px }
.loadingBar .pace .pace-progress[data-progress-text="28%"]:after { right: -147.92px }
.loadingBar .pace .pace-progress[data-progress-text="29%"]:after { right: -146.06px }
.loadingBar .pace .pace-progress[data-progress-text="30%"]:after { right: -144.2px }
.loadingBar .pace .pace-progress[data-progress-text="31%"]:after { right: -142.34px }
.loadingBar .pace .pace-progress[data-progress-text="32%"]:after { right: -140.48px }
.loadingBar .pace .pace-progress[data-progress-text="33%"]:after { right: -138.62px }
.loadingBar .pace .pace-progress[data-progress-text="34%"]:after { right: -136.76px }
.loadingBar .pace .pace-progress[data-progress-text="35%"]:after { right: -134.9px }
.loadingBar .pace .pace-progress[data-progress-text="36%"]:after { right: -133.04px }
.loadingBar .pace .pace-progress[data-progress-text="37%"]:after { right: -131.18px }
.loadingBar .pace .pace-progress[data-progress-text="38%"]:after { right: -129.32px }
.loadingBar .pace .pace-progress[data-progress-text="39%"]:after { right: -127.46px }
.loadingBar .pace .pace-progress[data-progress-text="40%"]:after { right: -125.6px }
.loadingBar .pace .pace-progress[data-progress-text="41%"]:after { right: -123.74px }
.loadingBar .pace .pace-progress[data-progress-text="42%"]:after { right: -121.88px }
.loadingBar .pace .pace-progress[data-progress-text="43%"]:after { right: -120.02px }
.loadingBar .pace .pace-progress[data-progress-text="44%"]:after { right: -118.16px }
.loadingBar .pace .pace-progress[data-progress-text="45%"]:after { right: -116.3px }
.loadingBar .pace .pace-progress[data-progress-text="46%"]:after { right: -114.44px }
.loadingBar .pace .pace-progress[data-progress-text="47%"]:after { right: -112.58px }
.loadingBar .pace .pace-progress[data-progress-text="48%"]:after { right: -110.72px }
.loadingBar .pace .pace-progress[data-progress-text="49%"]:after { right: -108.86px }
.loadingBar .pace .pace-progress[data-progress-text="50%"]:after { right: -107px }
.loadingBar .pace .pace-progress[data-progress-text="51%"]:after { right: -105.14px }
.loadingBar .pace .pace-progress[data-progress-text="52%"]:after { right: -103.28px }
.loadingBar .pace .pace-progress[data-progress-text="53%"]:after { right: -101.42px }
.loadingBar .pace .pace-progress[data-progress-text="54%"]:after { right: -99.56px }
.loadingBar .pace .pace-progress[data-progress-text="55%"]:after { right: -97.7px }
.loadingBar .pace .pace-progress[data-progress-text="56%"]:after { right: -95.84px }
.loadingBar .pace .pace-progress[data-progress-text="57%"]:after { right: -93.98px }
.loadingBar .pace .pace-progress[data-progress-text="58%"]:after { right: -92.12px }
.loadingBar .pace .pace-progress[data-progress-text="59%"]:after { right: -90.26px }
.loadingBar .pace .pace-progress[data-progress-text="60%"]:after { right: -88.4px }
.loadingBar .pace .pace-progress[data-progress-text="61%"]:after { right: -86.53999999999999px }
.loadingBar .pace .pace-progress[data-progress-text="62%"]:after { right: -84.68px }
.loadingBar .pace .pace-progress[data-progress-text="63%"]:after { right: -82.82px }
.loadingBar .pace .pace-progress[data-progress-text="64%"]:after { right: -80.96000000000001px }
.loadingBar .pace .pace-progress[data-progress-text="65%"]:after { right: -79.1px }
.loadingBar .pace .pace-progress[data-progress-text="66%"]:after { right: -77.24px }
.loadingBar .pace .pace-progress[data-progress-text="67%"]:after { right: -75.38px }
.loadingBar .pace .pace-progress[data-progress-text="68%"]:after { right: -73.52px }
.loadingBar .pace .pace-progress[data-progress-text="69%"]:after { right: -71.66px }
.loadingBar .pace .pace-progress[data-progress-text="70%"]:after { right: -69.8px }
.loadingBar .pace .pace-progress[data-progress-text="71%"]:after { right: -67.94px }
.loadingBar .pace .pace-progress[data-progress-text="72%"]:after { right: -66.08px }
.loadingBar .pace .pace-progress[data-progress-text="73%"]:after { right: -64.22px }
.loadingBar .pace .pace-progress[data-progress-text="74%"]:after { right: -62.36px }
.loadingBar .pace .pace-progress[data-progress-text="75%"]:after { right: -60.5px }
.loadingBar .pace .pace-progress[data-progress-text="76%"]:after { right: -58.64px }
.loadingBar .pace .pace-progress[data-progress-text="77%"]:after { right: -56.78px }
.loadingBar .pace .pace-progress[data-progress-text="78%"]:after { right: -54.92px }
.loadingBar .pace .pace-progress[data-progress-text="79%"]:after { right: -53.06px }
.loadingBar .pace .pace-progress[data-progress-text="80%"]:after { right: -51.2px }
.loadingBar .pace .pace-progress[data-progress-text="81%"]:after { right: -49.34px }
.loadingBar .pace .pace-progress[data-progress-text="82%"]:after { right: -47.480000000000004px }
.loadingBar .pace .pace-progress[data-progress-text="83%"]:after { right: -45.62px }
.loadingBar .pace .pace-progress[data-progress-text="84%"]:after { right: -43.76px }
.loadingBar .pace .pace-progress[data-progress-text="85%"]:after { right: -41.9px }
.loadingBar .pace .pace-progress[data-progress-text="86%"]:after { right: -40.04px }
.loadingBar .pace .pace-progress[data-progress-text="87%"]:after { right: -38.18px }
.loadingBar .pace .pace-progress[data-progress-text="88%"]:after { right: -36.32px }
.loadingBar .pace .pace-progress[data-progress-text="89%"]:after { right: -34.46px }
.loadingBar .pace .pace-progress[data-progress-text="90%"]:after { right: -32.6px }
.loadingBar .pace .pace-progress[data-progress-text="91%"]:after { right: -30.740000000000002px }
.loadingBar .pace .pace-progress[data-progress-text="92%"]:after { right: -28.880000000000003px }
.loadingBar .pace .pace-progress[data-progress-text="93%"]:after { right: -27.02px }
.loadingBar .pace .pace-progress[data-progress-text="94%"]:after { right: -25.16px }
.loadingBar .pace .pace-progress[data-progress-text="95%"]:after { right: -23.3px }
.loadingBar .pace .pace-progress[data-progress-text="96%"]:after { right: -21.439999999999998px }
.loadingBar .pace .pace-progress[data-progress-text="97%"]:after { right: -19.58px }
.loadingBar .pace .pace-progress[data-progress-text="98%"]:after { right: -17.72px }
.loadingBar .pace .pace-progress[data-progress-text="99%"]:after { right: -15.86px }
.loadingBar .pace .pace-progress[data-progress-text="100%"]:after { right: -14px }

.loadingBar .pace .pace-activity {
	position: absolute;
	width: 100%;
	height: 28px;
	z-index: 2001;
	box-shadow: inset 0 0 0 2px #72c02c, inset 0 0 0 7px #ffffff;
	border-radius: 10px;
}

.loadingBar .pace.pace-inactive {
	display: none;
}
			`));
			
			common.ui.getDom('head').appendChild(styleDom);
			
			Pace.on('hide', function () {
				common.ui.getDom('body').classList.remove('loadingBar');
				common.ui.getDom('body').classList.add('loadingBar');
			});
		} else {
			common.common.console('warn', common.name + '.Pace 패키지는 PACE(https://codebyzach.github.io/pace) 라이브러리가 필요합니다.');
		}
		
		const defaultOptions = {
			ajax: {
				trackMethods: [
					'GET',
					'HEAD',
					'POST',
					'PUT',
					'DELETE',
					'CONNECT',
					'OPTIONS',
					'TRACE',
					'PATCH'
				],
				trackWebSockets: true,
				ignoreURLs: []
			}
		};
		
		common.Pace = {
			/**
			 * Pace 를 재시작한다.
			 * 
			 * common.Pace.restart();
			 */
			 restart: function (options) {
				if (_.isPlainObject(options)) {
					_.merge(defaultOptions, options);
				}
				
				Pace.trigger('restart');
				
				Pace.stop();
				
				return Pace.start(defaultOptions);
			}
		}
	})(window.Pace);
	
	/**
	 * Apache ECharts 관련 함수 패키지이다.
	 * 
	 * common.echarts 패키지 사용 시 Apache ECharts(https://echarts.apache.org/) 라이브러리가 필요하다.
	 */
	(function (echarts) {
		if (!echarts) {
			common.common.console('warn', common.name + '.echarts 패키지는 Apache ECharts(https://echarts.apache.org/) 라이브러리가 필요합니다.');
		}
		
		common.echarts = {
			/**
			 * Apache ECharts 를 생성한다.
			 * 
			 * const echart1 = common.echarts.create('#echart1');
			 */
			create: function (selectors, options) {
				const defaultOptions = {
					locale: 'KO',
					isBlockUI: false
				};
				
				if (_.isPlainObject(options)) {
					_.merge(defaultOptions, options);
				}
				
				const echart = echarts.init(document.querySelector(selectors), 'macarons', defaultOptions);
				
				if (defaultOptions.isBlockUI) {
					common.ui.blockUI(selectors, { 'data-text': '조회중입니다.' });
				}
				
				const finishedHandler = function () {
					if (defaultOptions.isBlockUI) {
						common.ui.unblockUI(selectors);
					}
					
					echart.off('finished', finishedHandler);
				}
				
				echart.on('finished', finishedHandler);
				
				window.addEventListener('resize', function (eventObject) {
					echart.resize();
				});
				
				return echart;
			},
			
			/**
			 * Apache ECharts 의 Pie 차트를 생성한다.
			 * 
			 * common.echarts.pie(common.echarts.create('#echart1'), {
			 * 또는
			 * common.echarts.pie('#echart1', {
			 * 		title: {
			 * 			text: '위원 상태'
			 * 		},
			 * 		series: [
			 * 			{
			 * 				data: [
			 * 					{ name: '위촉', value: 1048 },
			 * 					{ name: '해촉[기간만료외]', value: 735 },
			 * 					{ name: '해촉[기간만료]', value: 580 },
			 * 					{ name: '기타', value: 484 }
			 * 				]
			 * 			}
			 * 		]
			 * });
			 */
			pie: function (echart, options) {
				if (_.isString(echart)) {
					echart = common.echarts.create(echart);
				}
				
				const defaultOptions = {
					title: {
						left: 'center',
						top: '10',
						textStyle: {
							color: '#333',
							fontWeight: 'bold'
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: function (params) {
							if (_.isEmpty(params.seriesName)) {
								return params.marker +
										params.name +
										' : ' +
										params.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
										' (' +
										params.percent +
										'%)';
							} else {
								return params.seriesName +
										'<br />' +
										params.marker +
										params.name +
										' : ' +
										params.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
										' (' +
										params.percent +
										'%)';
							}
						}
					},
					legend: {
						type: 'scroll',
						left: 'center',
						top: 'bottom',
					},
					series: [
						{
							type: 'pie',
							radius: '60%',
							emphasis: {
								itemStyle: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							label: {
								position: 'outer',
								alignTo: 'none',
								bleedMargin: 5,
								formatter: function (params) {
									return params.name +
											' : ' +
											params.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
											' (' +
											params.percent +
											'%)';
								}
							},
						}
					]
				};
				
				if (_.isPlainObject(options)) {
					_.merge(defaultOptions, options);
				}
				
				echart.setOption(defaultOptions);
				
				if (options.series[0].hasOwnProperty('data') &&
						_.isArray(options.series[0].data) &&
						(options.series[0].data.length > 0)) {
					echart.setOption({
						series: [
							{
								name: options.title.text,
							}
						]
					});
				}
				
				return echart;
			}
		}
	})(window.echarts);
	
	return common;
}));
