function validateAndGetFormData() {
    var empIdVar = $("#empId").val();
    if (empIdVar === "") {
        alert("Employee ID Required Value");
        $("#empId").focus();
        return "";
    }
    var empNameVar = $("#empName").val();
    if (empNameVar === "") {
        alert("Employee Name is Required Value");
        $("#empName").focus();
        return "";
    }
    var empEmailVar = $("#empEmail").val();
    if (empEmailVar === "") {
        alert("Employee Email is Required Value");
        $("#empEmail").focus();
        return "";
    }
    var jsonStrObj = {
        empId: empIdVar,
        empName: empNameVar,
        empEmail: empEmailVar,
    };
    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#empId").val("")
    $("#empName").val("");
    $("#empEmail").val("");
    $("#empId").focus();
}

function saveEmployee() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90938891|-31949290275470343|90941384",
        jsonStr, "EMP", "EMP-REL");
    // alert(putReqStr);
    jQuery.ajaxSetup({
        async: false
    });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({
        async: true
    });
    alert("Details Saved");
    resetForm();
}

function validateAndGetgetFormData() {
   
    var empNameVar = $("#empNameget").val();
    if (empNameVar === "") {
        alert("Employee Name is Required Value");
        $("#empNameget").focus();
        return "";
    }
    
    var jsonStrObj = {
        empName: empNameVar
    };
    return JSON.stringify(jsonStrObj);
}

function resetgetForm() {
    $("#empNameget").val("");
    $("#empNameget").focus();
}

function getEmployee() {
    var jsonStr = validateAndGetgetFormData();
    if (jsonStr === "") {
        alert("error");
        return;
    }
    var getReqStr = createGETRequest("90938891|-31949290275470343|90941384", "EMP", "EMP-REL",
    jsonStr);
    alert(getReqStr);
    jQuery.ajaxSetup({
        async: false
    });
    var resultObj = executeCommandAtGivenBaseUrl(getReqStr,
        "http://api.login2explore.com:5577", "/api/irl");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({
        async: true
    });
    resetgetForm();
}

function resetdelForm() {
    $("#rec").val("");
    $("#rec").focus();
}

function createREMOVERecordRequest(token, dbName, relName, reqId,jsonObjStr) {
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"REMOVE\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n" + "\"record\":"
            + reqId
            + "\n"
            + "\"jsonStr\":\n"
            + jsonObjStr
            + "\n"
            + "}";
    return req;
}

function delEmployee() {
    var recordVar = parseInt(document.getElementById("rec").value);
    if (recordVar === "") {
        alert("Record Number is Required Value");
        $("#rec").focus();
        return "";
    }
    var jsonStr={};
    var x = JSON.stringify(jsonStr);
    var delReqStr = createREMOVERecordRequest("90938891|-31949290275470343|90941384", "EMP", "EMP-REL",
    recordVar,x)
    jQuery.ajaxSetup({
        async: false
    });
    var resultObj = executeCommandAtGivenBaseUrl(delReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({
        async: true
    });
    resetdelForm();
}

function resetupForm() {
    $("#recup").val("");
    $("#empIdup").val("")
    $("#empNameup").val("");
    $("#empEmailup").val("");
    $("#recup").focus();
}

function validateAndGetupFormData() {
    var empIdVar = $("#empIdup").val();
    if (empIdVar === "") {
        alert("Employee ID Required Value");
        $("#empIdup").focus();
        return "";
    }
    var empNameVar = $("#empNameup").val();
    if (empNameVar === "") {
        alert("Employee Name is Required Value");
        $("#empNameup").focus();
        return "";
    }
    var empEmailVar = $("#empEmailup").val();
    if (empEmailVar === "") {
        alert("Employee Email is Required Value");
        $("#empEmailup").focus();
        return "";
    }
    var jsonStrObj = {
        empId: empIdVar,
        empName: empNameVar,
        empEmail: empEmailVar,
    };
    return JSON.stringify(jsonStrObj);
}

function UpEmployee() {
    var jsonStr = validateAndGetupFormData();
    if (jsonStr === "") {
        return;
    }
    var recordVar = parseInt(document.getElementById("recup").value);
    if (recordVar === "") {
        alert("Record Number is Required Value");
        $("#recup").focus();
        return "";
    }
   
    var upReqStr = createUPDATERecordRequest("90938891|-31949290275470343|90941384",jsonStr, "EMP", "EMP-REL",
    recordVar)
    alert(upReqStr);
    jQuery.ajaxSetup({
        async: false
    });
    var resultObj = executeCommandAtGivenBaseUrl(upReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({
        async: true
    });
    resetupForm();
}





