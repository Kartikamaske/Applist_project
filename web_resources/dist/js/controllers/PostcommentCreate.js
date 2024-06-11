var a=false;
$(document).ready(function(){
$("#post_id").click(function(){
    // alert('hii');
  if(a==false){
    
    saveperform();
   }
  }); 
});


 function saveperform() 
{ 
    var comment_name=$('#comment_name').val();
    var comment_email=$('#comment_email').val();
    var comment_sub=$('#comment_sub').val();
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


    var commentid=$('#commentid').val();
    

    if(comment_name==""||comment_sub=="") 
    {
    //   alert("requird");
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter required fields!"
      });  
  }

  else if(comment_email==""||!expr.test(comment_email)||comment_email==null) 
    {
      
      // alert("requird");
      Swal.fire({
        icon: "error",
        text: "Enter valid email!!"
      });
         
  }

    // else
    // {
    // 	if(userId>0)
    	// {
      //       a=true;
    	
    		// $.ajax({
      //   url:base_path+"Country/updateCountry",
      //   type: "POST",
      //   data: $('#Form').serialize(),
      //    beforeSend: function(){
      //          $('#post_id').prop('disabled', true);
      //          $('#post_id').html('Loading');
      //     }, 
      //   success: function(data) {
      //      $('#post_id').prop('disabled', false);
      //      $('#post_id').html('<img src="'+base_path+'assets/images/save.png" width="21"> Save');
             
      //       swal({
      //       title:"",
      //       text:"Data Submitted Successfully",
      //       type:"success",
      //       showCancelButton: true, 
      //       showConfirmButton: false,
      //       timer:10000
      //   }); a=false;
      //       window.location.href = base_path+"Country";
      //     }
      // });
    	// }
        else
    	{a=true;
    		
    		$.ajax({
        url:base_path+"Postcomment/insertpostcomment",
        type: "POST",
        data: $('#Form').serialize(),
         beforeSend: function(){
               $('#post_id').prop('disabled', true);
               $('#post_id').html('Loading');
          }, 
        success: function(data) {

            $('#post_id').prop('disabled', false);
           $('#post_id').html('Save');
             $("#Form").trigger("reset");

             // alert("hi");

             Swal.fire({
                // title: "Good job!",
                text: "Data Submitted successfully!",
                icon: "success"
              });

           $('#Form').parsley().destroy();
           $('#Form').parsley();
           a=false;

                }
      });
    	}
      }
 // }
