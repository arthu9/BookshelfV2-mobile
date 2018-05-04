// $(document).ready(function() 	{

//     // id = $('#id').val

//     $.getJSON('http://127.0.0.1:5000/user/info/<id>', function(json) {

//         var html = '';
//         json.forEach(function(val)
//             var keys = Object.keys(val);
//             html += "<div class = 'cat">";
//             html += "first_name='" + val.first_name + "'"
//             keys.forEach(function(key){
//                 hetml += "<strong>" + key + "</strong>:" + val[key] + "<br";
//                 });
//             });
//         html += "</div><br>";
//     });
//     $(".data").html(html)





//         url: 'http://127.0.0.1:5000/user/info/<id>',
//         type: "POST",
//         dataType: "json",
//         data: {'id' : id},
//         // data: "{'first_name':'' , 'last_name': '', 'contact_number':'' , 'birth_date':'', 'gender': '',  'profpic': ''}"
//             success: function(response) {
//                 console.log(response.message)
//                 alert(response.message);
//             },
//             error: function(error) {
//                 console.log(error);
//             },
//             complete: function(response) {
//                 console.log(response);
//             },
//             beforeSend: function (xhrObj){
//                 xhrObj.setRequestHeader("Authorization");
//             }
//     });
// }

//$(document).ready(function(){
  function profile2(){

     //$("#profile").show();

 $.ajax({
            url: 'http://127.0.0.1:5000/user/info/'+8 ,
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            success: function(data) {

                if (data.message  == 'ok') {
     
                                      // username = data.user.username;
                                      first_name = data.user.first_name;
                                      last_name = data.user.last_name;
                                      contact_number = data.user.contact_number;
                                      birth_date = data.user.birth_date;
                                      gender = data.user.gender;
                                      // profpic = data.user.profpic;
                                      $("#profile").append(profile(first_name));

                } else
                {
                    // $("#profile").html("");
                    alert(data.message);
                }
            }
        });
}
 //});



function profile(first_name)
{
   return '<h2>' +first_name+ '</h2>'
}



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