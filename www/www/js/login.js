function login() {
    $.ajax(
        {   
            type: "POST",
            url: 'http://127.0.0.1:5000/login',
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            crossDomain: true,
            data: JSON.stringify({
                username: $("#username").val(),
                password: $("#password").val()
            }),
            
            
            error: function (data) {
                alert("error")
            },
            success: function (data) {
                if (data.status == 'ok') {
                    window.location.replace('http://www.google.com/');
                }
                else {
                    alert(data.message)
                }

            }
        });
}
