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

	const globalScope = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : self);
	
	const defaults = {
		'DATE_FORMAT': 'yyyy-MM-dd E HH:mm:ss.SSS',
		'GA_TRACKING_ID': 'G-1W33PGE8L1',
		'corsAnywhereServerUrl': 'https://cors.common.com/'
	}
	
	const common = function (options) {
		Object.assign(defaults, options);
		
		console.table(defaults);
	};

	common.googleAnalytics = function (gaTrackingId = defaults.GA_TRACKING_ID) {
		if (typeof document !== 'undefined') {
			const scriptId = `script-googleAnalytics-${gaTrackingId}`;
			
			if (!document.getElementById(scriptId)) {
				const script = document.createElement('script');
				
				script.id = scriptId;
				script.async = true;
				script.src = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`;
				
				document.head.appendChild(script);
			}
		}
		
		globalScope.dataLayer = globalScope.dataLayer || [];
		
		function gtag() {
			globalScope.dataLayer.push(arguments);
		}
		
		globalScope.gtag = gtag;
		
		gtag('js', new Date());
		gtag('config', gaTrackingId);
	};

	common.defaults = defaults;
	common.googleAnalytics();
	
	return common;
}));
