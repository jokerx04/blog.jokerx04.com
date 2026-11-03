$(function () {
	
	// 네이버 통합검색
	// 네이버 통합검색
	var naverUnifiedSearchFunctionObject = {};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchErrataRequest = function () {
		
		$("#naverUnifiedSearchErrataResponse").hide();
		
		$.naverUnifiedSearchAjax();
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchErrataResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var errata = $.trim(data.errata);
		
		if ("" != errata) {
			$("#naverUnifiedSearchErrataText").text(errata);
			
			$("#naverUnifiedSearchErrataText").attr("onclick", "$.naverUnifiedSearch('" + errata + "')");
		
			$("#naverUnifiedSearchErrataResponse").show();
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchWebkrRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchWebkrRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/webkr.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchWebkrResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-1"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchWebkrResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsDescription = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchBlogRequest = function (options) {
		
		var defaults = {
		
			requestFunction: "naverUnifiedSearchBlogRequest",
		
			ajaxUrl: "https://openapi.naver.com/v1/search/blog.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchBlogResponse",
		
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
		
			activeTabId: "tab-2"
		
		};
	
		var naverUnifiedSearchOptions = $.extend(defaults, options);
	
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
	
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchBlogResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
	
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsDescription = "";
			var itemsBloggername = "";
			var itemsBloggerlink = "";
			var itemsPostdate = "";
		
			var year = "";
			var month = "";
			var day = "";
		
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				itemsBloggername = $.trim(items[i].bloggername);
				itemsBloggerlink = $.trim(items[i].bloggerlink);
				itemsPostdate = $.trim(items[i].postdate);
			
				if (("" != itemsPostdate) && (itemsPostdate.length >= 8)) {
					year = itemsPostdate.substring(0, 4);
					month = itemsPostdate.substring(4, 6);
					day = itemsPostdate.substring(6, 8);
				
					itemsPostdate = $.datepicker.formatDate("yy-mm-dd", new Date(parseInt(year), parseInt(month) - 1, parseInt(day)));
				}
			
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				
				if ("" != itemsBloggername) {
					searchResultTag += "					<p>";
					searchResultTag += "						작성자명 : <a class=\"search-link\" href=\"" + itemsBloggerlink + "\" target=\"_blank\">" + itemsBloggername + "</a>";
					searchResultTag += "					</p>";
				}
				
				if ("" != itemsBloggerlink) {
					searchResultTag += "					<p>";
					searchResultTag += "						블로그 링크 : <a class=\"search-link\" href=\"" + itemsBloggerlink + "\" target=\"_blank\">" + itemsBloggerlink + "</a>";
					searchResultTag += "					</p>";
				}
				
				if ("" != itemsPostdate) {
					searchResultTag += "					<p>등록일 : " + itemsPostdate + "</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
		
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
	
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchCafearticleRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchCafearticleRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/cafearticle.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchCafearticleResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-3"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchCafearticleResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsDescription = "";
			var itemsCafename = "";
			var itemsCafeurl = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				itemsCafename = $.trim(items[i].cafename);
				itemsCafeurl = $.trim(items[i].cafeurl);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				
				if ("" != itemsCafename) {
					searchResultTag += "					<p>";
					searchResultTag += "						카페명 : <a class=\"search-link\" href=\"" + itemsCafeurl + "\" target=\"_blank\">" + itemsCafename + "</a>";
					searchResultTag += "					</p>";
				}
				
				if ("" != itemsCafeurl) {
					searchResultTag += "					<p>";
					searchResultTag += "						카페 링크 : <a class=\"search-link\" href=\"" + itemsCafeurl + "\" target=\"_blank\">" + itemsCafeurl + "</a>";
					searchResultTag += "					</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchKinRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchKinRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/kin.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchKinResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-4"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchKinResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsDescription = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchImageRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchImageRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/image",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchImageResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "all",
			
			activeTabId: "tab-5"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchImageResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsThumbnail = "";
			var itemsSizewidth = "";
			var itemsSizeheight = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsThumbnail = $.trim(items[i].thumbnail);
				itemsSizewidth = $.trim(items[i].sizewidth);
				itemsSizeheight = $.trim(items[i].sizeheight);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\" style=\"table-layout: fixed;\">";
				searchResultTag += "		<colgroup>";
				searchResultTag += "			<col style=\"width: 120px;\" />";
				searchResultTag += "			<col />";
				searchResultTag += "		</colgroup>";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<a href=\"" + itemsThumbnail + "\" title=\"" + itemsTitle + "\" data-gallery=\"#naverUnifiedSearchImage\"><img style=\"max-width: 100px; padding: 5px 0 0 0;\" src=\"" + itemsThumbnail + "\" alt=\"" + itemsTitle + "\" /></a>";
				searchResultTag += "				</td>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				
				if ("" != itemsSizewidth) {
					searchResultTag += "					<p>이미지 가로크기 : " + itemsSizewidth + "px</p>";
				}
				
				if ("" != itemsSizeheight) {
					searchResultTag += "					<p>이미지 세로크기 : " + itemsSizeheight + "px</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchNewsRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchNewsRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/news.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchNewsResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-6"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchNewsResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsOriginallink = "";
			var itemsLink = "";
			var itemsDescription = "";
			var itemsPubDate = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsOriginallink = $.trim(items[i].originallink);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				itemsPubDate = $.trim(items[i].pubDate);
				
				if ("" != itemsPubDate) {
					itemsPubDate = $.datepicker.formatDate("yy-mm-dd", new Date(itemsPubDate));
				}
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsOriginallink + "\" target=\"_blank\">" + itemsOriginallink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				
				if ("" != itemsPubDate) {
					searchResultTag += "					<p>등록일 : " + itemsPubDate + "</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchLocalRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchLocalRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/local.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchLocalResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-7"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchLocalResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsDescription = "";
			var itemsTelephone = "";
			var itemsAddress = "";
			var itemsRoadAddress = "";
			var itemsMapx = "";
			var itemsMapy = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				itemsTelephone = $.trim(items[i].telephone);
				itemsAddress = $.trim(items[i].address);
				itemsRoadAddress = $.trim(items[i].roadAddress);
				itemsMapx = $.trim(items[i].mapx);
				itemsMapy = $.trim(items[i].mapy);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				
				if ("" == itemsLink) {
					searchResultTag += "						" + itemsTitle;
				} else {
					searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				}
				
				searchResultTag += "					</h2>";
				
				if ("" != itemsLink) {
					searchResultTag += "					<p>";
					searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
					searchResultTag += "					</p>";
				}
				
				if ("" != itemsDescription) {
					searchResultTag += "					<p>" + itemsDescription + "</p>";
				}
				
				if ("" != itemsTelephone) {
					searchResultTag += "					<p>연락처 : " + itemsTelephone + "</p>";
				}
				
				if ("" != itemsAddress) {
					searchResultTag += "					<p>지번주소 : " + itemsAddress + "</p>";
				}
				
				if ("" != itemsRoadAddress) {
					searchResultTag += "					<p>도로명주소 : " + itemsRoadAddress + "</p>";
				}
				
				if (("" != itemsMapx) && ("" != itemsMapy)) {
					searchResultTag += "					<p>위치 X좌표(카텍좌표계) : " + itemsMapx + "</p>";
					searchResultTag += "					<p>위치 Y좌표(카텍좌표계) : " + itemsMapy + "</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchMovieRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchMovieRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/movie.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchMovieResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-8"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchMovieResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsImage = "";
			var itemsSubtitle = "";
			var itemsPubDate = "";
			var itemsDirector = "";
			var itemsActor = "";
			var itemsUserRating = "";
			
			var itemsDirectorArray = null;
			var itemsActorArray = null;
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsImage = $.trim(items[i].image);
				itemsSubtitle = $.trim(items[i].subtitle);
				itemsPubDate = $.trim(items[i].pubDate);
				itemsDirector = $.trim(items[i].director);
				itemsActor = $.trim(items[i].actor);
				itemsUserRating = $.trim(items[i].userRating);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<colgroup>";
				
				if ("" != itemsImage) {
					searchResultTag += "			<col style=\"width: 120px;\" />";
				}
				
				searchResultTag += "			<col />";
				searchResultTag += "		</colgroup>";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				
				if ("" != itemsImage) {
					searchResultTag += "				<td style=\"border: 0px !important;\">";
					searchResultTag += "					<a href=\"" + itemsImage + "\" title=\"" + itemsTitle + "\" data-gallery=\"#naverUnifiedSearchMovie\"><img style=\"max-width: 100px; padding: 5px 0 0 0;\" src=\"" + itemsImage + "\" alt=\"" + itemsTitle + "\" /></a>";
					searchResultTag += "				</td>";
				}
				
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				
				if ("" != itemsSubtitle) {
					searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "(" + itemsSubtitle + ")</a>";
				} else {
					searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				}
				
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				
				
				if ("" != itemsPubDate) {
					searchResultTag += "					<p>제작년도 : " + itemsPubDate + "</p>";
				}
				
				if ("" != itemsDirector) {
					if (itemsDirector.lastIndexOf("|") != -1) {
						itemsDirector = itemsDirector.substring(0, itemsDirector.lastIndexOf("|"));
					}
					
					itemsDirectorArray = itemsDirector.split("|");
					
					searchResultTag += "					<p>감독 : ";
					
					for (var k = 0; k < itemsDirectorArray.length; k++) {
						searchResultTag += "						<button class=\"btn btn-white btn-xs\" type=\"button\" onclick=\"window.open('https://movie.naver.com/movie/search/result.nhn?query=" + encodeURIComponent(itemsDirectorArray[k]) + "&ie=utf8', '=" + itemsDirectorArray[k] + "', '')\" title=\"" + itemsDirectorArray[k] + "\">" + itemsDirectorArray[k] + "</button>";
					}
					
					searchResultTag += "					</p>";
				}
				
				if ("" != itemsActor) {
					if (itemsActor.lastIndexOf("|") != -1) {
						itemsActor = itemsActor.substring(0, itemsActor.lastIndexOf("|"));
					}
					
					itemsActorArray = itemsActor.split("|");
					
					searchResultTag += "					<p>출연 배우 : ";
					
					for (var k = 0; k < itemsActorArray.length; k++) {
						searchResultTag += "						<button class=\"btn btn-white btn-xs\" type=\"button\" onclick=\"window.open('https://movie.naver.com/movie/search/result.nhn?query=" + encodeURIComponent(itemsActorArray[k]) + "&ie=utf8', '=" + itemsActorArray[k] + "', '')\" title=\"" + itemsActorArray[k] + "\">" + itemsActorArray[k] + "</button>";
					}
					
					searchResultTag += "					</p>";
				}
				
				if ("" != itemsUserRating) {
					searchResultTag += "					<p>유저들의 평점 : " + itemsUserRating + "</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchShopRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchShopRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/shop.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchShopResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-9"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchShopResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsImage = "";
			var itemsLprice = "";
			var itemsHprice = "";
			var itemsMallName = "";
			var itemsProductId = "";
			var itemsProductType = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsImage = $.trim(items[i].image);
				itemsLprice = $.trim(items[i].lprice);
				itemsHprice = $.trim(items[i].hprice);
				itemsMallName = $.trim(items[i].mallName);
				itemsProductId = $.trim(items[i].productId);
				itemsProductType = $.trim(items[i].productType);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<colgroup>";
				
				if ("" != itemsImage) {
					searchResultTag += "			<col style=\"width: 120px;\" />";
				}
				
				searchResultTag += "			<col />";
				searchResultTag += "		</colgroup>";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				
				if ("" != itemsImage) {
					searchResultTag += "				<td style=\"border: 0px !important;\">";
					searchResultTag += "					<a href=\"" + itemsImage + "\" title=\"" + itemsTitle + "\" data-gallery=\"#naverUnifiedSearchShop\"><img style=\"max-width: 100px; padding: 5px 0 0 0;\" src=\"" + itemsImage + "\" alt=\"" + itemsTitle + "\" /></a>";
					searchResultTag += "				</td>";
				}
				
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				
				if ("" != itemsHprice) {
					searchResultTag += "					<p>최저가 : " + itemsLprice.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</p>";
				}
				
				if (("" != itemsHprice) && ("0" != itemsHprice)) {
					searchResultTag += "					<p>최고가 : " + itemsHprice.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</p>";
				}
				
				if ("" != itemsMallName) {
					searchResultTag += "					<p>쇼핑몰 상호 : " + itemsMallName + "</p>";
				}
				
				if ("" != itemsProductId) {
					searchResultTag += "					<p>상품 ID : " + itemsProductId + "</p>";
				}
				
				if ("" != itemsProductType) {
					if ("1" == itemsProductType) {
						itemsProductType = "일반상품 가격비교 상품";
					} else if ("2" == itemsProductType) {
						itemsProductType = "일반상품 가격비교 비매칭 일반상품";
					} else if ("3" == itemsProductType) {
						itemsProductType = "일반상품 가격비교 매칭 일반상품";
					} else if ("4" == itemsProductType) {
						itemsProductType = "중고상품 가격비교 상품";
					} else if ("5" == itemsProductType) {
						itemsProductType = "중고상품 가격비교 비매칭 일반상품";
					} else if ("6" == itemsProductType) {
						itemsProductType = "중고상품 가격비교 매칭 일반상품";
					} else if ("7" == itemsProductType) {
						itemsProductType = "단종상품 가격비교 상품";
					} else if ("8" == itemsProductType) {
						itemsProductType = "단종상품 가격비교 비매칭 일반상품";
					} else if ("9" == itemsProductType) {
						itemsProductType = "단종상품 가격비교 매칭 일반상품";
					} else if ("10" == itemsProductType) {
						itemsProductType = "판매예정상품 가격비교 상품";
					} else if ("11" == itemsProductType) {
						itemsProductType = "판매예정상품 가격비교 비매칭 일반상품";
					} else if ("12" == itemsProductType) {
						itemsProductType = "판매예정상품 가격비교 매칭 일반상품";
					} else {
						itemsProductType = "";
					}
					
					searchResultTag += "					<p>상품군 구분 : " + itemsProductType + "</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchBookRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchBookRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/book.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchBookResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-10"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchBookResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsImage = "";
			var itemsAuthor = "";
			var itemsPrice = "";
			var itemsDiscount = "";
			var itemsPublisher = "";
			var itemsIsbn = "";
			var itemsDescription = "";
			var itemsPubdate = "";
			
			var year = "";
			var month = "";
			var day = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsImage = $.trim(items[i].image);
				itemsAuthor = $.trim(items[i].author);
				itemsPrice = $.trim(items[i].price);
				itemsDiscount = $.trim(items[i].discount);
				itemsPublisher = $.trim(items[i].publisher);
				itemsIsbn = $.trim(items[i].isbn);
				itemsDescription = $.trim(items[i].description);
				itemsPubdate = $.trim(items[i].pubdate);
				
				if (("" != itemsPubdate) && (itemsPubdate.length >= 8)) {
					year = itemsPubdate.substring(0, 4);
					month = itemsPubdate.substring(4, 6);
					day = itemsPubdate.substring(6, 8);
					
					itemsPubdate = $.datepicker.formatDate("yy-mm-dd", new Date(parseInt(year), parseInt(month) - 1, parseInt(day)));
				}
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<colgroup>";
				
				if ("" != itemsImage) {
					searchResultTag += "			<col style=\"width: 120px;\" />";
				}
				
				searchResultTag += "			<col />";
				searchResultTag += "		</colgroup>";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				
				if ("" != itemsImage) {
					searchResultTag += "				<td style=\"border: 0px !important;\">";
					searchResultTag += "					<a href=\"" + itemsImage + "\" title=\"" + itemsTitle + "\" data-gallery=\"#naverUnifiedSearchBook\"><img style=\"max-width: 100px; padding: 5px 0 0 0;\" src=\"" + itemsImage + "\" alt=\"" + itemsTitle + "\" /></a>";
					searchResultTag += "				</td>";
				}
				
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				
				if ("" != itemsAuthor) {
					searchResultTag += "					<p>저자명 : " + itemsAuthor + "</p>";
				}
				
				if (("" != itemsPrice) && ("0" != itemsPrice)) {
					searchResultTag += "					<p>정가 : " + itemsPrice.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</p>";
				}
				
				if (("" != itemsDiscount) && ("0" != itemsDiscount)) {
					searchResultTag += "					<p>할인 가격 : " + itemsDiscount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "</p>";
				}
				
				if ("" != itemsPublisher) {
					searchResultTag += "					<p>출판사 : " + itemsPublisher + "</p>";
				}
				
				if ("" != itemsIsbn) {
					searchResultTag += "					<p>ISBN : " + itemsIsbn + "</p>";
				}
				
				if ("" != itemsPubdate) {
					searchResultTag += "					<p>출간일 : " + itemsPubdate + "</p>";
				}
				
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchEncycRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchEncycRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/encyc.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchEncycResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-11"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchEncycResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsDescription = "";
			var itemsThumbnail = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				itemsThumbnail = $.trim(items[i].thumbnail);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<colgroup>";
				
				if ("" != itemsThumbnail) {
					searchResultTag += "			<col style=\"width: 120px;\" />";
				}
				
				searchResultTag += "			<col />";
				searchResultTag += "		</colgroup>";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				
				if ("" != itemsThumbnail) {
					searchResultTag += "				<td style=\"border: 0px !important;\">";
					searchResultTag += "					<a href=\"" + itemsThumbnail + "\" title=\"" + itemsTitle + "\" data-gallery=\"#naverUnifiedSearchEncyc\"><img style=\"max-width: 100px; padding: 5px 0 0 0;\" src=\"" + itemsThumbnail + "\" alt=\"" + itemsTitle + "\" /></a>";
					searchResultTag += "				</td>";
				}
				
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchDocRequest = function (options) {
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchDocRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/doc.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchDocResponse",
			
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-12"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$.naverUnifiedSearchAjax(naverUnifiedSearchOptions);
		
	};
	
	naverUnifiedSearchFunctionObject.naverUnifiedSearchDocResponse = function (data, textStatus, jqXHR, naverUnifiedSearchOptions) {
		
		var lastBuildDate = $.trim(data.lastBuildDate);
		var total = parseInt(data.total);
		var start = parseInt(data.start);
		var display = parseInt(data.display);
		var items = data.items;
		
		var searchResultTag = "";
		
		if (items.length > 0) {
			var itemsTitle = "";
			var itemsLink = "";
			var itemsDescription = "";
			
			for (var i = 0; i < items.length; i++) {
				itemsTitle = $.trim(items[i].title);
				itemsLink = $.trim(items[i].link);
				itemsDescription = $.trim(items[i].description);
				
				searchResultTag += "<div>";
				searchResultTag += "	<table class=\"table\">";
				searchResultTag += "		<tbody>";
				searchResultTag += "			<tr>";
				searchResultTag += "				<td style=\"border: 0px !important;\">";
				searchResultTag += "					<h2>";
				searchResultTag += "						<a href=\"" + itemsLink + "\" target=\"_blank\">" + itemsTitle + "</a>";
				searchResultTag += "					</h2>";
				searchResultTag += "					<p>";
				searchResultTag += "						<a class=\"search-link\" href=\"" + itemsLink + "\" target=\"_blank\">" + itemsLink + "</a>";
				searchResultTag += "					</p>";
				searchResultTag += "					<p>" + itemsDescription + "</p>";
				searchResultTag += "				</td>";
				searchResultTag += "			</tr>";
				searchResultTag += "		</tbody>";
				searchResultTag += "	</table>";
				searchResultTag += "</div>";
				
				if ((i + 1) != items.length) {
					searchResultTag += "<div class=\"hr-line-dashed\"></div>";
				}
			}
			
			$.naverUnifiedSearchMore(searchResultTag, total, start, display, naverUnifiedSearchOptions);
		} else {
			$.naverUnifiedSearchEmpty(searchResultTag, naverUnifiedSearchOptions);
		}
		
	};
	
	$.naverUnifiedSearchRequestTab = function (requestFunction, activeTabId) {
		
		if ($.trim($("#naverUnifiedSearchText").val()) != $.trim($("#query").val())) {
			$("#naverUnifiedSearchText").val($.trim($("#query").val()));
		}
		
		if ("" != $.trim($("#" + activeTabId + " .panel-body").html())) {
			return;
		}
		
		naverUnifiedSearchFunctionObject[requestFunction]();
		
	};
	
	$.naverUnifiedSearchRequestMore = function (requestFunction, activeTabId, start) {
		
		$("#" + activeTabId + "_more").remove();
		
		var options = {
			
			parameterStart: start,
			parameterSort: $("#" + activeTabId + "_sort").val(),
			parameterD_titl: $("#" + activeTabId + "_d_titl").val(),
			parameterD_auth: $("#" + activeTabId + "_d_auth").val(),
			parameterD_cont: $("#" + activeTabId + "_d_cont").val(),
			parameterD_isbn: $("#" + activeTabId + "_d_isbn").val(),
			parameterD_publ: $("#" + activeTabId + "_d_publ").val(),
			parameterD_dafr: $("#" + activeTabId + "_d_dafr").val(),
			parameterD_dato: $("#" + activeTabId + "_d_dato").val(),
			parameterD_catg: $("#" + activeTabId + "_d_catg").val(),
			parameterGenre: $("#" + activeTabId + "_genre").val(),
			parameterCountry: $("#" + activeTabId + "_country").val(),
			parameterYearfrom: $("#" + activeTabId + "_yearfrom").val(),
			parameterYearto: $("#" + activeTabId + "_yearto").val(),
			parameterFilter: $("#" + activeTabId + "_filter").val()
			
		};
		
		naverUnifiedSearchFunctionObject[requestFunction](options);
		
	};
	
	$.naverUnifiedSearchMore = function (searchResultTag, total, start, display, naverUnifiedSearchOptions) {
		
		if (((start + naverUnifiedSearchOptions.parameterDisplay) <= 1000) && ((start + naverUnifiedSearchOptions.parameterDisplay) <= total)) {
			searchResultTag += "<div class=\"hr-line-dashed\"></div>";
			searchResultTag += "<div id=\"" + naverUnifiedSearchOptions.activeTabId + "_more\">";
			searchResultTag += "	<table class=\"table\">";
			searchResultTag += "		<tbody>";
			searchResultTag += "			<tr>";
			searchResultTag += "				<td style=\"border: 0px !important;\">";
			searchResultTag += "					<button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" onclick=\"$.naverUnifiedSearchRequestMore('" + naverUnifiedSearchOptions.requestFunction + "', '" + naverUnifiedSearchOptions.activeTabId + "', " + (start + naverUnifiedSearchOptions.parameterDisplay) + ");\">";
			searchResultTag += "						<i class=\"fa fa-arrow-down\"></i> 더보기</button>";
			searchResultTag += "					</button>";
			searchResultTag += "				</td>";
			searchResultTag += "			</tr>";
			searchResultTag += "		</tbody>";
			searchResultTag += "	</table>";
			searchResultTag += "</div>";
		}
		
		$("#" + naverUnifiedSearchOptions.activeTabId + " .panel-body").append(searchResultTag);
		
	};
	
	$.naverUnifiedSearchEmpty = function (searchResultTag, naverUnifiedSearchOptions) {
		
		if ($("#" + naverUnifiedSearchOptions.activeTabId + " .panel-body").is(":empty")) {
			var query = naverUnifiedSearchOptions.parameterQuery;
			var encodeQuery = encodeURIComponent(query);
			
			searchResultTag += "<div>";
			searchResultTag += "	<table class=\"table\">";
			searchResultTag += "		<tbody>";
			searchResultTag += "			<tr>";
			searchResultTag += "				<td style=\"border: 0px !important;\">";
			searchResultTag += "					<h2>";
			searchResultTag += "						<a href=\"https://search.naver.com/search.naver?query=" + encodeQuery + "\" target=\"_blank\">'" + query + "'에 대한 검색결과가 없습니다.</a>";
			searchResultTag += "					</h2>";
			searchResultTag += "					<p>단어의 철자가 정확한지 확인해 보세요.</p>";
			searchResultTag += "					<p>한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.</p>";
			searchResultTag += "					<p>검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.</p>";
			searchResultTag += "					<p>두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요. <a href=\"https://search.naver.com/search.naver?query=%EB%84%A4%EC%9D%B4%EB%B2%84%20%EB%A7%9E%EC%B6%A4%EB%B2%95%20%EA%B2%80%EC%82%AC%EA%B8%B0\" target=\"_blank\">네이버 맞춤법 검사기</a></p>";
			searchResultTag += "				</td>";
			searchResultTag += "			</tr>";
			searchResultTag += "		</tbody>";
			searchResultTag += "	</table>";
			searchResultTag += "</div>";
		}
		
		$("#" + naverUnifiedSearchOptions.activeTabId + " .panel-body").append(searchResultTag);
		
	};
	
	$.naverUnifiedSearch = function (naverUnifiedSearchText) {
		
		if ("" != $.trim(naverUnifiedSearchText)) {
			$("#naverUnifiedSearchText").val($.trim(naverUnifiedSearchText));
		}
		
		$("#naverUnifiedSearchText").val($.trim($("#naverUnifiedSearchText").val()));
		
		if ("" == $("#naverUnifiedSearchText").val()) {
			$("#naverUnifiedSearchText").val("바이너리 아카이브");
		}
		
		naverUnifiedSearchFunctionObject.naverUnifiedSearchErrataRequest();
		
		naverUnifiedSearchFunctionObject.naverUnifiedSearchWebkrRequest();
		
		$(".panel-body").empty();
		
		$("a[href^='#tab-']").removeClass("active");
		
		$("a[href='#tab-1']").addClass("active");
	
		$("#tab-1").addClass("active");
		
		$("#naverUnifiedSearchResponse").show();
		
	};
	
	$.naverUnifiedSearchAjax = function (options) {
		
		$("#query").val($.trim($("#naverUnifiedSearchText").val()));
		
		var defaults = {
			
			requestFunction: "naverUnifiedSearchErrataRequest",
			
			ajaxUrl: "https://openapi.naver.com/v1/search/errata.json",
			ajaxDataType: "json",
			ajaxContentType: "application/x-www-form-urlencoded; charset=UTF-8",
			ajaxSuccessFunction: "naverUnifiedSearchErrataResponse",
			
			parameterQuery: $("#query").val(),
			parameterDisplay: 25,
			parameterStart: 1,
			parameterSort: "sim",
			parameterD_titl: "",
			parameterD_auth: "",
			parameterD_cont: "",
			parameterD_isbn: "",
			parameterD_publ: "",
			parameterD_dafr: "",
			parameterD_dato: "",
			parameterD_catg: "",
			parameterGenre: "",
			parameterCountry: "",
			parameterYearfrom: "",
			parameterYearto: "",
			parameterFilter: "",
			
			activeTabId: "tab-1"
			
		};
		
		var naverUnifiedSearchOptions = $.extend(defaults, options);
		
		$("#query").val(naverUnifiedSearchOptions.parameterQuery);
		$("#display").val(naverUnifiedSearchOptions.parameterDisplay);
		$("#start").val(naverUnifiedSearchOptions.parameterStart);
		$("#sort").val(naverUnifiedSearchOptions.parameterSort);
		$("#d_titl").val(naverUnifiedSearchOptions.parameterD_titl);
		$("#d_auth").val(naverUnifiedSearchOptions.parameterD_auth);
		$("#d_cont").val(naverUnifiedSearchOptions.parameterD_cont);
		$("#d_isbn").val(naverUnifiedSearchOptions.parameterD_isbn);
		$("#d_publ").val(naverUnifiedSearchOptions.parameterD_publ);
		$("#d_dafr").val(naverUnifiedSearchOptions.parameterD_dafr);
		$("#d_dato").val(naverUnifiedSearchOptions.parameterD_dato);
		$("#d_catg").val(naverUnifiedSearchOptions.parameterD_catg);
		$("#genre").val(naverUnifiedSearchOptions.parameterGenre);
		$("#country").val(naverUnifiedSearchOptions.parameterCountry);
		$("#yearfrom").val(naverUnifiedSearchOptions.parameterYearfrom);
		$("#yearto").val(naverUnifiedSearchOptions.parameterYearto);
		$("#filter").val(naverUnifiedSearchOptions.parameterFilter);
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: naverUnifiedSearchOptions.ajaxUrl,
			method: "GET",
			type: "GET",
			dataType: naverUnifiedSearchOptions.ajaxDataType,
			contentType: naverUnifiedSearchOptions.ajaxContentType,
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#naverUnifiedSearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					if (naverUnifiedSearchOptions.ajaxSuccessFunction in naverUnifiedSearchFunctionObject) {
						naverUnifiedSearchFunctionObject[naverUnifiedSearchOptions.ajaxSuccessFunction](data, textStatus, jqXHR, naverUnifiedSearchOptions);
				    }
				}
				
			},
			error: function (jqXHR, textStatus, errorThrown) {
				
				var errorResponseCode = "";
				
				errorResponseCode += "readyState : ";
				errorResponseCode += jqXHR.readyState;
				
				if ("0" == jqXHR.readyState) {
					errorResponseCode += "-UNSENT";
				}
				
				if ("1" == jqXHR.readyState) {
					errorResponseCode += "-OPENED";
				}
				
				if ("2" == jqXHR.readyState) {
					errorResponseCode += "-HEADERS_RECEIVED";
				}
				
				if ("3" == jqXHR.readyState) {
					errorResponseCode += "-LOADING";
				}
				
				if ("4" == jqXHR.readyState) {
					errorResponseCode += "-DONE";
				}
				
				errorResponseCode += "\n";
				errorResponseCode += "status : ";
				errorResponseCode += jqXHR.status;
				errorResponseCode += "\n";
				errorResponseCode += "statusText : ";
				errorResponseCode += jqXHR.statusText;
				errorResponseCode += "\n";
				errorResponseCode += "textStatus : ";
				errorResponseCode += textStatus;
				errorResponseCode += "\n";
				errorResponseCode += "errorThrown : ";
				errorResponseCode += errorThrown;
				errorResponseCode += "\n";
				errorResponseCode += "responseText : ";
				errorResponseCode += (jqXHR.responseText == null ? "" : jqXHR.responseText.replace(/\r/g, "").replace(/\n/g, ""));
				
				alert(errorResponseCode);
				
			},
			complete: function (jqXHR, textStatus) {
				
				$("#" + naverUnifiedSearchOptions.activeTabId + "_start").val(naverUnifiedSearchOptions.parameterStart);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_sort").val(naverUnifiedSearchOptions.parameterSort);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_titl").val(naverUnifiedSearchOptions.parameterD_titl);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_auth").val(naverUnifiedSearchOptions.parameterD_auth);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_cont").val(naverUnifiedSearchOptions.parameterD_cont);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_isbn").val(naverUnifiedSearchOptions.parameterD_isbn);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_publ").val(naverUnifiedSearchOptions.parameterD_publ);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_dafr").val(naverUnifiedSearchOptions.parameterD_dafr);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_dato").val(naverUnifiedSearchOptions.parameterD_dato);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_d_catg").val(naverUnifiedSearchOptions.parameterD_catg);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_genre").val(naverUnifiedSearchOptions.parameterGenre);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_country").val(naverUnifiedSearchOptions.parameterCountry);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_yearfrom").val(naverUnifiedSearchOptions.parameterYearfrom);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_yearto").val(naverUnifiedSearchOptions.parameterYearto);
				$("#" + naverUnifiedSearchOptions.activeTabId + "_filter").val(naverUnifiedSearchOptions.parameterFilter);
				
			}
			
		});
		
	};
	
	// 서버시간
	var serverTimeInterval = null;
	
	$.serverTime = function () {
		
		var serverTimeUrl = $("#serverTimeUrl").val().toLowerCase();
		
		serverTimeUrl = serverTimeUrl.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
		
		$("#serverTimeUrl").val($.trim(serverTimeUrl));
		
		var serverTimeUrlProtocol = "";
		
		if (-1 != serverTimeUrl.indexOf("://")) {
			serverTimeUrlProtocol = serverTimeUrl.substring(0, serverTimeUrl.indexOf("://") + "://".length);
			
			serverTimeUrl = serverTimeUrl.substring(serverTimeUrl.indexOf("://") + "://".length);
		}
		
		if (-1 != serverTimeUrl.indexOf("/")) {
			serverTimeUrl = serverTimeUrl.substring(0, serverTimeUrl.indexOf("/"));
		}
		
		serverTimeUrl = serverTimeUrlProtocol + serverTimeUrl;
		
		if ("" == serverTimeUrl) {
			serverTimeUrl = "http://blog.jokerx04.com";
		}
		
		$("#serverTimeUrl").val(serverTimeUrl);
		
		$("#serverTimeLoading").html("<a href=\"#\" onclick=\"$.selectServerTime('" + serverTimeUrl + "');\">" + serverTimeUrl + "</a> 의 서버시간을 조회 중입니다.");
		
		clearInterval(serverTimeInterval);
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: serverTimeUrl,
			method: "GET",
			type: "GET",
			dataType: "html",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			timeout : 0,
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				var ajaxSuccessTime = Date.now();
				
				if (data != null) {
					var responseHeaderDate = new Date(jqXHR.getResponseHeader("date"));
					
					var serverTimeDifference = ajaxSuccessTime - responseHeaderDate.getTime();
					
					var updateServerTime = function (serverTimeDifference) {
						
	 					var serverTimeDate = new Date(Date.now() - serverTimeDifference);
						
	 					var serverTimeMonthNameArray = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]; 
	 					var serverTimeDayNameArray = [ "일", "월", "화", "수", "목", "금", "토" ]
						
	 					var serverTimeYear = serverTimeDate.getFullYear();
	 					var serverTimeMonth = serverTimeMonthNameArray[serverTimeDate.getMonth()];
	 					var serverTimeDay = serverTimeDate.getDate();
	 					var serverTimeWeek = serverTimeDayNameArray[serverTimeDate.getDay()];
	 					var serverTimeHours = serverTimeDate.getHours();
	 					var serverTimeMinutes = serverTimeDate.getMinutes();
	 					var serverTimeSeconds = serverTimeDate.getSeconds();
						
	 					$("#serverTimeYear").html(serverTimeYear);
	 					$("#serverTimeMonth").html(serverTimeMonth);
	 					$("#serverTimeDay").html(serverTimeDay);
	 					$("#serverTimeWeek").html(serverTimeWeek);
	 					$("#serverTimeHours").html((serverTimeHours < 10 ? "0" : "") + serverTimeHours);
	 					$("#serverTimeMinutes").html((serverTimeMinutes < 10 ? "0" : "") + serverTimeMinutes);
	 					$("#serverTimeSeconds").html((serverTimeSeconds < 10 ? "0" : "") + serverTimeSeconds);
						
						if ($("#serverTimeAlarm input:checkbox").prop("checked")) {
							if ((serverTimeMinutes == 59) && (serverTimeSeconds == 51)) {
								$("audio").trigger("play");
							}
						}
					}
					
					serverTimeInterval = setInterval(function () {
						
						updateServerTime(serverTimeDifference);
						
					}, 1000);
				}
				
			},
			error: function (jqXHR, textStatus, errorThrown) {
				
				var errorResponseCode = "";
				
				errorResponseCode += "readyState : ";
				errorResponseCode += jqXHR.readyState;
				
				if ("0" == jqXHR.readyState) {
					errorResponseCode += "-UNSENT";
				}
				
				if ("1" == jqXHR.readyState) {
					errorResponseCode += "-OPENED";
				}
				
				if ("2" == jqXHR.readyState) {
					errorResponseCode += "-HEADERS_RECEIVED";
				}
				
				if ("3" == jqXHR.readyState) {
					errorResponseCode += "-LOADING";
				}
				
				if ("4" == jqXHR.readyState) {
					errorResponseCode += "-DONE";
				}
				
				errorResponseCode += "\n";
				errorResponseCode += "status : ";
				errorResponseCode += jqXHR.status;
				errorResponseCode += "\n";
				errorResponseCode += "statusText : ";
				errorResponseCode += jqXHR.statusText;
				errorResponseCode += "\n";
				errorResponseCode += "textStatus : ";
				errorResponseCode += textStatus;
				errorResponseCode += "\n";
				errorResponseCode += "errorThrown : ";
				errorResponseCode += errorThrown;
				errorResponseCode += "\n";
				errorResponseCode += "responseText : ";
				errorResponseCode += (jqXHR.responseText == null ? "" : jqXHR.responseText.replace(/\r/g, "").replace(/\n/g, ""));
				
				console.log(errorResponseCode);
				
				$("#serverTimeLoading").html(serverTimeUrl + " 의 서버시간을 조회 중 오류가 발생하였습니다.");
				
			},
			complete: function (jqXHR, textStatus) {
				
				
				
			}
			
		});
		
	};
	
	$.selectServerTime = function (serverUrl) {
		
		$("#serverTimeUrl").val(serverUrl);
		
		$("#serverTime span").text("-");
		
		$.serverTime();
		
	};
	
});
