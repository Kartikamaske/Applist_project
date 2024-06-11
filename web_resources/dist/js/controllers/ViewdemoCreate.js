var a=false;
$(document).ready(function(){
$("#btn_save").click(function(){
    // alert("pop");
  if(a==false){
    
    saveperform();
   }
  }); 
});


 function saveperform() 
{ 
    var mobilenumber=$('#mobilenumber').val();
    

    var viewdemoid=$('#viewdemoid').val();


    if(mobilenumber.length != 10 || isNaN(mobilenumber)||  mobilenumber=="") 
    {
      // $('#myModal1').modal('show');

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter valid mobile number !!"
      });

    
  }
  

    else
    {
    	if(viewdemoid>0 )
    	{
            a=true;

            var form = $("#Form").closest("form");
            var formData = new FormData(form[0]);
    	
    		$.ajax({
        url:base_path+"Viewdemo/updatecontact",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_save').prop('disabled', true);
               $('#btn_save').html('Loading');
          }, 
        success: function(data) {
          console.log(data);
           $('#btn_save').prop('disabled', false);
           $('#btn_save').html('Save');
             
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

        
      var form = $("#Form").closest("form");
      var formData = new FormData(form[0]);
    		
    		$.ajax({
        url:base_path+"Viewdemo/insertview",
        type: "POST",

        data: formData,
        processData: false,
        contentType: false,

        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_save').prop('disabled', true);
               $('#btn_save').html('Loading');
          }, 
        success: function(data) {

            $('#btn_save').prop('disabled', false);
           $('#btn_save').html('Save');
             $("#Form").trigger("reset");
            // $('#myModal').hide();


             Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Thanks For Contacting",
              showConfirmButton: false,
              timer: 900
            });

            // $('.modal').modal('hide'); 
            // $('#myModal').removeAttr('data-backdrop');
            // $('#myModal').addClass('hide');

            $("#modelclose").click();
            // $('#myModal').modal('hide');
           a=false;

           setTimeout(() => {


            // window.location.href = base_path+"Responsive/software";
  
          }, 500);


                }
                
      });
    	}
      }
 }





 
