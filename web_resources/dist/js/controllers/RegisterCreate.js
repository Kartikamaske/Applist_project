var a=false;
$(document).ready(function(){
$("#btn_submit").click(function(){
    // alert("hi");
  if(a==false){
    
    saveperform();
   }
  }); 

 
});


 function saveperform() 
{ 
  var userid=$('#userid').val();
    var username=$('#username').val();
    // alert(username); 
    
    if(username=="") 
    {

      Swal.fire(
        'Oops!',
        'Please Enter Required Fields!',
        'error'
      )
        
  }

    // else
    // {
    // 	if(userid>0)
    // 	{
    //     // alert(userid);
    //         a=true;

    //         var form = $("#registerForm").closest("form");
    //         var formData = new FormData(form[0]);
    	
    // 		$.ajax({
    //     url:base_path+"Register/updateCategories",
    //     type: "POST",
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    //     // data: $('#registerForm').serialize(),
    //      beforeSend: function(){
    //            $('#btn_submit').prop('disabled', true);
    //            $('#btn_submit').html('Loading');
    //       }, 
    //     success: function(data) {
    //       console.log(data);
    //        $('#btn_submit').prop('disabled', false);
    //        $('#btn_submit').html('Save');

    //        Swal.fire(
    //         'Good job!',
    //         'Data Updated Successfully!',
    //         'success'
    //       )
             
       
    //      a=false;
    //         // window.location.href = base_path+"Categories";
    //       }
    //   });
    // 	}

        else
    	{
        a=true;
            var form = $("#registerForm").closest("form");
            var formData = new FormData(form[0]);
    		
    		$.ajax({
        url:base_path+"Register/insertUserRegister",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        // data: $('#registerForm').serialize(),
         beforeSend: function(){
               $('#btn_submit').prop('disabled', true);
               $('#btn_submit').html('Loading');
          }, 
        success: function(data) {
          console.log(data);
            $('#btn_submit').prop('disabled', false);
           $('#btn_submit').html('Save');
             $("#registerForm").trigger("reset");

             // alert("hi");

             Swal.fire(
              'Good job!',
              'Your Information Submitted Successfully!',
              'success'
            )

           a=false;

                }
      });
    	}
      }
//  }



