$(function () {
	
	// [클로바 - CFR] 유명인 얼굴 인식
	$.cfrCelebrity = function () {
		
		var cfrCelebrityImage = document.getElementsByName("cfrCelebrityImage")[0].files[0];
		
		var formData = new FormData();
		
		formData.append("image", cfrCelebrityImage);
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/vision/celebrity",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: false,
			processData: false,
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: formData,
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var cfrCelebrityResponseCode = JSON.stringify(data, null, "\t");
					
					var cfrCelebrityResponsePrismCode = "";
					cfrCelebrityResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					cfrCelebrityResponsePrismCode += cfrCelebrityResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					cfrCelebrityResponsePrismCode += "</code></pre>";
					
					$("#cfrCelebrityResponseCode").val(cfrCelebrityResponseCode);
					
					$("#cfrCelebrityResponsePrismCode").html(cfrCelebrityResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [클로바 - CFR] 얼굴감지
	$.cfrFace = function () {
		
		var cfrFaceImage = document.getElementsByName("cfrFaceImage")[0].files[0];
		
		var formData = new FormData();
		
		formData.append("image", cfrFaceImage);
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/vision/face",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: false,
			processData: false,
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: formData,
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var cfrFaceResponseCode = JSON.stringify(data, null, "\t");
					
					var cfrFaceResponsePrismCode = "";
					cfrFaceResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					cfrFaceResponsePrismCode += cfrFaceResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					cfrFaceResponsePrismCode += "</code></pre>";
					
					$("#cfrFaceResponseCode").val(cfrFaceResponseCode);
					
					$("#cfrFaceResponsePrismCode").html(cfrFaceResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 통합 검색어 트렌드
	$("#serviceAPIDatalabSearchStartDate, #serviceAPIDatalabSearchEndDate").datepicker({
		
		dateFormat: "yy-mm-dd",
		maxDate: new Date(),
		showButtonPanel: true
		
	});
	
	$("#serviceAPIDatalabSearchStartDate, #serviceAPIDatalabSearchEndDate").datepicker("setDate", new Date());
	
	$("#serviceAPIDatalabSearchStartDate").on("change", function () {
		
		$("#serviceAPIDatalabSearchEndDate").datepicker("option", "minDate", $.datepicker.parseDate("yy-mm-dd", $(this).val()));
		
	});
	
	$("#serviceAPIDatalabSearchEndDate").on("change", function () {
		
		$("#serviceAPIDatalabSearchStartDate").datepicker("option", "maxDate", $.datepicker.parseDate("yy-mm-dd", $(this).val()));
		
	});
	
	$.serviceAPIDatalabSearchAllAgesCheck = function () {
		
		$("input[name='ages[]']").prop("checked", false);
		
	};
	
	$.serviceAPIDatalabSearchAgesCheck = function () {
		
		$("#allAges").prop("checked", false);
		
	};
	
	$(document).on("click", ".serviceAPIDatalabSearchPlus", function (eventObject) {
		
		if ($("#serviceAPIDatalabSearchTable > tbody > tr").length < 5) {
			$(this).closest("tr").after($(this).closest("tr").clone().wrapAll("<div/>").parent().html());
		}
		
	});
	
	$(document).on("click", ".serviceAPIDatalabSearchMinus", function (eventObject) {
		
		if ($(this).parents().find("#serviceAPIDatalabSearchTable > tbody > tr").length == 1) {
			$("#serviceAPIDatalabSearchTable > tbody > tr input").val("");
		} else {
			$(this).closest("tr").remove();
		}
		
	});
	
	$.serviceAPIDatalabSearch = function () {
		
		$("#serviceAPIDatalabSearchTable > tbody > tr").each(function (index, element) {
			
			$(this).find("input[name$='][groupName]']").each(function (index2, element2) {
				
				if ("" == $.trim($(this).val())) {
					$(this).val("주제어" + (index + 1));
				}
				
			});
			
			$(this).find("input[name^='keywordGroups[']").each(function (index2, element2) {
				
				var inputName = $(this).attr("name");
				
				$(this).attr("name", "keywordGroups[" + index + inputName.substring(inputName.indexOf("]")));
				
				if ("" == $.trim($(this).val())) {
					$(this).prop("disabled", true);
				}
				
			});
			
			if ("" == $.trim($(this).find("input[name='keywordGroups[" + index + "][keywords][]']:first").val())) {
				$(this).find("input[name='keywordGroups[" + index + "][keywords][]']:first").val("검색어" + (index + 1)).prop("disabled", false);
			}
			
		});
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/search",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabSearchForm").not("input[value='']").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabSearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabSearchResponsePrismCode = "";
					serviceAPIDatalabSearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabSearchResponsePrismCode += serviceAPIDatalabSearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabSearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabSearchResponseCode").val(serviceAPIDatalabSearchResponseCode);
					
					$("#serviceAPIDatalabSearchResponsePrismCode").html(serviceAPIDatalabSearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				$("input[name^='keywordGroups[']").each(function (index, element) {
					
					if ("" == $.trim($(this).val())) {
						$(this).prop("disabled", false);
					}
					
				});
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트
	$("#serviceAPIDatalabShoppingStartDate, #serviceAPIDatalabShoppingEndDate").datepicker({
		
		dateFormat: "yy-mm-dd",
		maxDate: new Date(),
		showButtonPanel: true
		
	});
	
	$("#serviceAPIDatalabShoppingStartDate, #serviceAPIDatalabShoppingEndDate").datepicker("setDate", new Date());
	
	$("#serviceAPIDatalabShoppingStartDate").on("change", function () {
		
		$("#serviceAPIDatalabShoppingEndDate").datepicker("option", "minDate", $.datepicker.parseDate("yy-mm-dd", $(this).val()));
		
	});
	
	$("#serviceAPIDatalabShoppingEndDate").on("change", function () {
		
		$("#serviceAPIDatalabShoppingStartDate").datepicker("option", "maxDate", $.datepicker.parseDate("yy-mm-dd", $(this).val()));
		
	});
	
	$.serviceAPIDatalabShoppingAllAgesCheck = function () {
		
		$("input[name='ages[]']").prop("checked", false);
		
	};
	
	$.serviceAPIDatalabShoppingAgesCheck = function () {
		
		$("#allAges").prop("checked", false);
		
	};
	
	$(document).on("click", ".serviceAPIDatalabShoppingPlus", function (eventObject) {
		
		if ($("#serviceAPIDatalabShoppingTable > tbody > tr").length < 3) {
			$(this).closest("tr").after($(this).closest("tr").clone().wrapAll("<div/>").parent().html());
		}
		
	});
	
	$(document).on("click", ".serviceAPIDatalabShoppingPlus2", function (eventObject) {
		
		if ($("#serviceAPIDatalabShoppingTable2 > tbody > tr").length < 5) {
			$(this).closest("tr").after($(this).closest("tr").clone().wrapAll("<div/>").parent().html());
		}
		
	});
	
	$(document).on("click", ".serviceAPIDatalabShoppingMinus", function (eventObject) {
		
		if ($(this).parents().find("#serviceAPIDatalabShoppingTable > tbody > tr").length == 1) {
			$("#serviceAPIDatalabShoppingTable > tbody > tr input").val("");
		} else {
			$(this).closest("tr").remove();
		}
		
	});
	
	$(document).on("click", ".serviceAPIDatalabShoppingMinus2", function (eventObject) {
		
		if ($(this).parents().find("#serviceAPIDatalabShoppingTable2 > tbody > tr").length == 1) {
			$("#serviceAPIDatalabShoppingTable2 > tbody > tr input").val("");
		} else {
			$(this).closest("tr").remove();
		}
		
	});
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 분야별 트렌드
	$.serviceAPIDatalabShoppingCategories = function () {
		
		$("#serviceAPIDatalabShoppingTable > tbody > tr").each(function (index, element) {
			
			$(this).find("input[name$='][name]']").each(function (index2, element2) {
				
				if ("" == $.trim($(this).val())) {
					$(this).val("쇼핑 분야 이름" + (index + 1));
				}
				
			});
			
			$(this).find("input[name^='category[']").each(function (index2, element2) {
				
				var inputName = $(this).attr("name");
				
				$(this).attr("name", "category[" + index + inputName.substring(inputName.indexOf("]")));
				
				if ("" == $.trim($(this).val())) {
					$(this).prop("disabled", true);
				}
				
			});
			
			if ("" == $.trim($(this).find("input[name='category[" + index + "][param][]']:first").val())) {
				$(this).find("input[name='category[" + index + "][param][]']:first").val("쇼핑 분야 코드" + (index + 1)).prop("disabled", false);
			}
			
		});
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/categories",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				$("input[name^='category[']").each(function (index, element) {
					
					if ("" == $.trim($(this).val())) {
						$(this).prop("disabled", false);
					}
					
				});
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 분야 내 기기별 트렌드
	$.serviceAPIDatalabShoppingCategoriesDevice = function () {
		
		if ("" == $.trim($("#category").val())) {
			$("#category").val("쇼핑 분야 코드");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/category/device",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 분야 내 성별 트렌드
	$.serviceAPIDatalabShoppingCategoriesGender = function () {
		
		if ("" == $.trim($("#category").val())) {
			$("#category").val("쇼핑 분야 코드");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/category/gender",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 분야 내 연령별 트렌드
	$.serviceAPIDatalabShoppingCategoriesAge = function () {
		
		if ("" == $.trim($("#category").val())) {
			$("#category").val("쇼핑 분야 코드");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/category/age",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 키워드별 트렌드
	$.serviceAPIDatalabShoppingKeywords = function () {
		
		$("#serviceAPIDatalabShoppingTable2 > tbody > tr").each(function (index, element) {
			
			$(this).find("input[name$='][name]']").each(function (index2, element2) {
				
				if ("" == $.trim($(this).val())) {
					$(this).val("검색어" + (index + 1));
				}
				
			});
			
			$(this).find("input[name^='keyword[']").each(function (index2, element2) {
				
				var inputName = $(this).attr("name");
				
				$(this).attr("name", "keyword[" + index + inputName.substring(inputName.indexOf("]")));
				
				if ("" == $.trim($(this).val())) {
					$(this).prop("disabled", true);
				}
				
			});
			
			if ("" == $.trim($(this).find("input[name='keyword[" + index + "][param][]']:first").val())) {
				$(this).find("input[name='keyword[" + index + "][param][]']:first").val("비교 검색어" + (index + 1)).prop("disabled", false);
			}
			
		});
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/category/keywords",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				$("input[name^='keyword[']").each(function (index, element) {
					
					if ("" == $.trim($(this).val())) {
						$(this).prop("disabled", false);
					}
					
				});
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 키워드 기기별 트렌드
	$.serviceAPIDatalabShoppingKeywordsDevice = function () {
		
		if ("" == $.trim($("#category").val())) {
			$("#category").val("쇼핑 분야 코드");
		}
		
		if ("" == $.trim($("#keyword").val())) {
			$("#keyword").val("검색어");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/category/keyword/device",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 키워드 성별 트렌드
	$.serviceAPIDatalabShoppingKeywordsGender = function () {
		
		if ("" == $.trim($("#category").val())) {
			$("#category").val("쇼핑 분야 코드");
		}
		
		if ("" == $.trim($("#keyword").val())) {
			$("#keyword").val("검색어");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/category/keyword/gender",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 데이터랩] 쇼핑인사이트 키워드 연령별 트렌드
	$.serviceAPIDatalabShoppingKeywordsAge = function () {
		
		if ("" == $.trim($("#category").val())) {
			$("#category").val("쇼핑 분야 코드");
		}
		
		if ("" == $.trim($("#keyword").val())) {
			$("#keyword").val("검색어");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/datalab/shopping/category/age",
			method: "POST",
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: JSON.stringify($("#serviceAPIDatalabShoppingForm").serializeObject()),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIDatalabShoppingResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIDatalabShoppingResponsePrismCode = "";
					serviceAPIDatalabShoppingResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIDatalabShoppingResponsePrismCode += serviceAPIDatalabShoppingResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIDatalabShoppingResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIDatalabShoppingResponseCode").val(serviceAPIDatalabShoppingResponseCode);
					
					$("#serviceAPIDatalabShoppingResponsePrismCode").html(serviceAPIDatalabShoppingResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 블로그
	$.serviceAPISearchBlog = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/blog.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 뉴스
	$.serviceAPISearchNews = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/news.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 책
	$("#serviceAPISearchStartDate, #serviceAPISearchEndDate").datepicker({
		
		dateFormat: "yymmdd",
		maxDate: new Date(),
		showButtonPanel: true
		
	});
	
	$("#serviceAPISearchStartDate").on("change", function () {
		
		$("#serviceAPISearchEndDate").datepicker("option", "minDate", $.datepicker.parseDate("yymmdd", $(this).val()));
		
	});
	
	$("#serviceAPISearchEndDate").on("change", function () {
		
		$("#serviceAPISearchStartDate").datepicker("option", "maxDate", $.datepicker.parseDate("yymmdd", $(this).val()));
		
	});
	
	$.serviceAPISearchBook = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/book.xml",
			method: "GET",
			type: "GET",
			dataType: "xml",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = "";
					
					if (window.ActiveXObject){
						serviceAPISearchResponseCode = data.xml;
					} else{
						serviceAPISearchResponseCode = (new XMLSerializer()).serializeToString(data);
					}
					
					var jsBeautifyOption = {};
					
					jsBeautifyOption.indent_size = "1";
					jsBeautifyOption.indent_char = "\t";
					
					serviceAPISearchResponseCode = html_beautify(serviceAPISearchResponseCode, jsBeautifyOption);
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-markup\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	$.serviceAPISearchBookAdv = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		if (("" == $.trim($("#d_titl").val()))
				&& ("" == $.trim($("#d_auth").val()))
				&& ("" == $.trim($("#d_cont").val()))
				&& ("" == $.trim($("#d_isbn").val()))
				&& ("" == $.trim($("#d_publ").val()))) {
			
			$("#d_titl").val("책 제목");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/book_adv.xml",
			method: "GET",
			type: "GET",
			dataType: "xml",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = "";
					
					if (window.ActiveXObject){
						serviceAPISearchResponseCode = data.xml;
					} else{
						serviceAPISearchResponseCode = (new XMLSerializer()).serializeToString(data);
					}
					
					var jsBeautifyOption = {};
					
					jsBeautifyOption.indent_size = "1";
					jsBeautifyOption.indent_char = "\t";
					
					serviceAPISearchResponseCode = html_beautify(serviceAPISearchResponseCode, jsBeautifyOption);
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-markup\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 성인 검색어 판별
	$.serviceAPISearchAdult = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/adult.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 백과사전
	$.serviceAPISearchEncyc = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/encyc.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 영화
	$.serviceAPISearchBlog = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$("#yearfrom").val($.trim($("#yearfrom").val()));
		
		$("#yearto").val($.trim($("#yearto").val()));
		
		if (("" != $("#yearfrom").val()) || ("" != $("#yearto").val())) {
			if (!$.isNumeric($("#yearfrom").val()) || ("" == $("#yearfrom").val()) || (1000 >= parseInt($("#yearfrom").val()))) {
				$("#yearfrom").val((new Date()).getFullYear());
			}
			
			if (!$.isNumeric($("#yearto").val()) || ("" == $("#yearto").val()) || (1000 >= parseInt($("#yearto").val()))) {
				$("#yearto").val((new Date()).getFullYear());
			}
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/movie.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 카페글
	$.serviceAPISearchCafearticle = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/cafearticle.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 지식iN
	$.serviceAPISearchKin = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/kin.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 지역
	$.serviceAPISearchLocal = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/local.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 오타 변환
	$.serviceAPISearchErrata = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/errata.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 웹문서
	$.serviceAPISearchWebkr = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/webkr.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 이미지
	$.serviceAPISearchImage = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/image",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 쇼핑
	$.serviceAPISearchShop = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/shop.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API - 검색] 전문자료
	$.serviceAPISearchDoc = function () {
		
		if ("" == $.trim($("#query").val())) {
			$("#query").val("검색어");
		}
		
		$("#display").val($.trim($("#display").val()));
		
		if (!$.isNumeric($("#display").val()) || ("0" == $("#display").val())) {
			$("#display").val("10");
		}
		
		$("#start").val($.trim($("#start").val()));
		
		if (!$.isNumeric($("#start").val()) || ("0" == $("#start").val())) {
			$("#start").val("1");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/search/doc.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPISearchForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPISearchResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPISearchResponsePrismCode = "";
					serviceAPISearchResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPISearchResponsePrismCode += serviceAPISearchResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPISearchResponsePrismCode += "</code></pre>";
					
					$("#serviceAPISearchResponseCode").val(serviceAPISearchResponseCode);
					
					$("#serviceAPISearchResponsePrismCode").html(serviceAPISearchResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
	// [서비스 API] 단축 URL
	$.serviceAPIUtilShorturl = function () {
		
		if ("" == $.trim($("#url").val())) {
			$("#url").val("http://blog.jokerx04.com");
		}
		
		$.ajax({
			
			crossDomain: true,
			context: this,
			traditional: true,
			url: "https://openapi.naver.com/v1/util/shorturl.json",
			method: "GET",
			type: "GET",
			dataType: "json",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: true,
			timeout : 0,
			headers: { "X-Naver-Client-Id": XNaverClientId, "X-Naver-Client-Secret": XNaverClientSecret },
			data: $("#serviceAPIUtilForm").serialize(),
			beforeSend: function (jqXHR, settings) {
				
				jqXHR.setRequestHeader("x-requested-with", "*");
				
			},
			success: function (data, textStatus, jqXHR) {
				
				if (data != null) {
					var serviceAPIUtilResponseCode = JSON.stringify(data, null, "\t");
					
					var serviceAPIUtilResponsePrismCode = "";
					serviceAPIUtilResponsePrismCode += "<pre class=\"line-numbers\"><code class=\"language-json\">";
					serviceAPIUtilResponsePrismCode += serviceAPIUtilResponseCode.replace(/[&]/g, "&amp;").replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
					serviceAPIUtilResponsePrismCode += "</code></pre>";
					
					$("#serviceAPIUtilResponseCode").val(serviceAPIUtilResponseCode);
					
					$("#serviceAPIUtilResponsePrismCode").html(serviceAPIUtilResponsePrismCode);
					
					Prism.highlightAll();
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
				
				
				
			}
			
		});
		
	};
	
});
