// Google Analytics
(function() {
	const GA_TRACKING_ID = 'G-1W33PGE8L1';
	
	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
	document.head.appendChild(script);
	
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		window.dataLayer.push(arguments);
	}
	
	window.gtag = gtag;
	
	gtag('js', new Date());
	gtag('config', GA_TRACKING_ID);
})();
