/**
 * Name                 :   validateSignUp
 * Return type          :   None
 * Input Parameter(s)   :   formDivId
 * Purpose              :   This Method is used to Validate the Merchant details .
 * History Header       :   Version   -   Date              -   Developer Name
 * Added By             :   1.0       -   23rd May, 2015    -   Ranvijay Singh
 */
function validateSignUp(formDivId) {
	var request = {};
	var inputs = $("#" + formDivId + " input");
	var errFieldCount = 0;
	$.each(inputs, function(index, element){
		var fieldName = $(element).attr('id');
		var fieldVal = $(element).val();
		if(fieldName.indexOf("businessName") === 0) {
			if(fieldVal) {
				request.company = fieldVal;
				$("#err" + fieldName).hide();
			} else {
				$("#err" + fieldName).show();
				errFieldCount++;
			}
		} else if(fieldName.indexOf("legalName") === 0) {
			if(fieldVal) {
				request.firstName = fieldVal;
				$("#err" + fieldName).hide();
			} else {
				$("#err" + fieldName).show();
				errFieldCount++;
			}
		} else if(fieldName.indexOf("emailId") === 0) {
			if(fieldVal && validateEmailAddr(fieldVal)) {
				request.email = fieldVal;
				$("#err" + fieldName).hide();
			} else {
				$("#err" + fieldName).show();
				errFieldCount++;
			}
		} else if(fieldName.indexOf("phoneNumber") === 0) {
			if(fieldVal && fieldVal.length === 10) {
				request.phone = fieldVal;
				$("#err" + fieldName).hide();
			} else {
				$("#err" + fieldName).show();
				errFieldCount++;
			}
		}
	});
	
	if(errFieldCount === 0) {
		if(formDivId.indexOf('fuel') === 0) {
			request.retailerType = 'FUEL';
		} else {
			request.retailerType = 'NON_FUEL';
		}
		makeJsonAjaxCall({
			url : "http://localhost:8080/FuelSignal/leadsCustomer/joinNow",
			requestObj : request,
			onSuccess : function(req, status, res) {
				try {
					if(res.errorCode) {
						alert(res.errorDesc);
					} else {
						alert(res.result); 
						$.each(inputs, function(index, element){
							$(element).val('');
						});
					}
				} catch (e) {
					console.log("Error " + e.stack);
				}
			},
			onError : function(req, status, error) {
				try {
					console.log("Error " + req);
				} catch (e) {
					console.log("Error " + e.stack);
				}
			}
		});
	}
}

/**
 * Name                 :   isNumeric
 * Return type          :   None
 * Input Parameter(s)   :   evt, val
 * Purpose              :   Function for allowing the numeric values in TextBox
 * History Header       :   Version   -   Date              -   Developer Name
 * Added By             :   1.0       -   23rd May, 2015    -   Ranvijay Singh
 */

function isNumeric(evt, val) {
	var keyCode = evt ? evt.which : window.event.keyCode;

	if (keyCode == 9 || keyCode == 0)
		return true;

	var charCode = (evt.which) ? evt.which : evt.keyCode;

	if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode == 17)
			&& charCode != 46) {
		return false;
	} else {
		var index = val.indexOf('.');

		if (charCode == null || charCode == 0 || charCode == 8 || charCode == 9
				|| charCode == 13 || charCode == 27) {
			return true;
		} else {
			if (index > 0 && charCode == 46) {
				return false;
			} else if (index == 0 && charCode == 46) {
				return false;
			}
		}
	}
	return true;
}
/**
 * Name                 :   validateEmailAddr
 * Return type          :   None
 * Input Parameter(s)   :   email
 * Purpose              :   Function for validating the email address
 * History Header       :   Version   -   Date              -   Developer Name
 * Added By             :   1.0       -   17rd Mar, 2014    -   Vibha Verma 
 */
// 
function validateEmailAddr(email) {
	var emailRegEx = /^[a-zA-Z0-9][a-zA-Z0-9\_\.\+\-]*[a-zA-Z0-9]\@[a-zA-Z0-9][a-zA-Z0-9\.\-]*\.[a-zA-z]{2,6}/;
	return emailRegEx.test(email);
}

function makeJsonAjaxCall(authCall) {
	var url = authCall.url;
	var requestObj = authCall.requestObj;
	var onSuccess = authCall.onSuccess;
	var onError = authCall.onError;
	var timeout = 30000; /* in miliseconds means 30 second*/
	if (!url) {
		console.log('url was null to makeJsonAjaxCall');
		return;
	}
	if (!requestObj) {
		console.log('requestObj was null to makeJsonAjaxCall');
		return;
	}
	if (!onSuccess) {
		console.log('onSuccess function was null to makeJsonAjaxCall');
		return;
	}
	if (!onError) {
		console.log('onError function was null to makeJsonAjaxCall');
		return;
	}

	$.ajax({
		url: url,
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify(requestObj),
		crossDomain: true,
		dataType: 'json',
		timeout: timeout,
		cache: false,
		success: function (data, status, req) {
			try {
				onSuccess(req, status, data);
			} catch (e) {
				console.log('Error apiName = ' + url + ", " + e);
				throw e;
			}
		},
		error: function (req, status, error) {
			onError(req, status, error);
		},
	});
}