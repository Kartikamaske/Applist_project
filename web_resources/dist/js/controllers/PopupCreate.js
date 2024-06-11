var a=false;
$(document).ready(function(){
$("#btn_popup").click(function(){
    // alert("pop");
  if(a==false){
    
    saveperform2();
   }
  }); 
});


 function saveperform2() 
{ 
    var fullname=$('#fullname').val();
    var email=$('#email').val();
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var mobile=$('#mobile').val();


    var popupid=$('#popupid').val();


    if(fullname=="") 
    {
      // alert("requird");
      Swal.fire({
        icon: "error",
        customClass: 'swal-wide',
        text: "please enter requird fields"
      }); 
  }



 else if(email==""||!expr.test(email)||email==null) 
    {
      
      // alert("requird");
      Swal.fire({
        icon: "error",
        customClass: 'swal-wide',
        text: "Enter valid email!!"
      });
         
  }


  else if(mobile.length != 10 || isNaN(mobile)||  mobile=="") 
    {
      
      // alert("requird");
      Swal.fire({
        icon: "error",
        customClass: 'swal-wide',
        text: "Enter valid mobile number !!"
      });
         
  }



    else
    {
    	if(popupid>0 )
    	{
            a=true;

            var form = $("#Form2").closest("form");
            var formData = new FormData(form[0]);
    	
    		$.ajax({
        url:base_path+"Responsive/updatecontact",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_popup').prop('disabled', true);
               $('#btn_popup').html('Loading');
          }, 
        success: function(data) {
          console.log(data);
           $('#btn_popup').prop('disabled', false);
           $('#btn_popup').html('Save');
             
            swal({
            title:"",
            text:"Data Updated Successfully",
            type:"success",
            showCancelButton: true, 
            showConfirmButton: false,
            timer:2000
        }); a=false;
            window.location.href = base_path+"Responsive";
          }
      });
    	}
        else
    	{a=true;

        
      var form = $("#Form2").closest("form");
      var formData = new FormData(form[0]);
    		
    		$.ajax({
        url:base_path+"Responsive/insertcontact",
        type: "POST",

        data: formData,
        processData: false,
        contentType: false,

        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_popup').prop('disabled', true);
               $('#btn_popup').html('Loading');
          }, 
        success: function(data) {

            $('#btn_popup').prop('disabled', false);
           $('#btn_popup').html('Save');
             $("#Form2").trigger("reset");

            //  alert("popupsave");
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Data Submitted successfully!",
              showConfirmButton: false,
              timer: 500
            });
           
           a=false;

           setTimeout(() => {
              $('#ouibounce-modal').hide();
  
          }, 2000);


                }
                
      });
    	}
      }
 }





 
