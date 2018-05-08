
var user_id = null;

function login() {
    $.ajax(
        {   
            type: "POST",
            url: 'http://127.0.0.1:5000/login',
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            data: JSON.stringify({
                username: $("#username").val(),
                password: $("#password").val()
            }),
                
            error: function (data) {
                alert('Wrong username/password');
                user_id = data.userid;
                // window.location.replace('http://www.google.com/');
            },
            success: function (data) {
                if (data.status == 'ok') {
                    window.location.replace('userprofile.html');
                }
                else {
                    // window.location.replace('http://www.google.com/');
                    alert(data.message); 
                    // console.log(data);
                    // callback(data);
                }

            }
        });
}
