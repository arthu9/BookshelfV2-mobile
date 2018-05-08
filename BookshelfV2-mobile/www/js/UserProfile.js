
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

function profile(first_name)
{
   return '<h2>' +first_name+ '</h2>';
}

function infoMerge(lname, fname, bday, gender){
  return '<ul>'+
          '<li><label>Full Name:</label>'+ lname+', '+fname+'</li>'+
          '<li><label>Birthdate: </label>'+ bday+'</li>'+
          '<li><label>Gender:</label>' +gender+'</li>'+
          '<li><label>Address:</label>dadad</li>'+
        '</ul>';
}



function profile2(user){

 $.ajax({
            url: 'http://127.0.0.1:5000/user/info' ,
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            success: function(data) {
                if (data.message  == 'ok') {
                                
                      // username = data.user.username;
                      // first_name = data.user.first_name;
                      // last_name = data.user.last_name;
                      // contact_number = data.user.contact_number;
                      // birth_date = data.user.birth_date;
                      // gender = data.user.gender;
                      // profpic = data.user.profpic;
                      $("#profile").append(profile(data.user[0].first_name));
                      $("#infmain").append(infoMerge(data.user[0].last_name, data.user[0].first_name, data.user[0].birth_date, data.user[0].gender));
                      console.log(data.user[0].first_name);

                } else
                {
                    // $("#profile").html("");
                    alert(data.message);
                }
            }
        });
}
 //});






// <script>
//   $(document).ready(function(){
//     $.getJSON("linkherokuapp.com/api/directory",function(data){
//       var directory_data='';
//       $.each(data,function(key,value){
//         directory_data += '<tr>';
//         val = value.contact;
//         yu =value.address;
//         directory_data += '<td onclick="info('+val+')" location = "call.html"><h2>'+value.name+'</h2></td>';
//         directory_data += '</tr>';
//       });
//       $('#directory_table').append(directory_data);
//     });
//   });

// </script>