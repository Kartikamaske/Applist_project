var a=false;
$(document).ready(function(){
$("#btn_save1").click(function(){
    // alert("sub");
  if(a==false){
    
    saveperform1();
   }
  }); 
});


 function saveperform1() 
{ 
    var subscribeemail=$('#subscribeemail').val();
    
    // var email=$('#email').val();
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


    var subscribeid=$('#subscribeid').val();


    if(subscribeemail==""||!expr.test(subscribeemail)||subscribeemail==null) 
    {
      
      // alert("requird");
      Swal.fire({
        icon: "error",
        customClass: 'swal-wide',
        text: "Enter valid email!"
      });
         
  }


//   else if(subscribeemail==""||!expr.test(subscribeemail)||subscribeemail==null){

//     // alert("hii");
//     swal({
//       title:"",
//       text:"Please Enter Valid Email Id",
//       type:"error",           
//   }); 


// }

    else
    {
    	if(subscribeid>0 )
    	{
            a=true;

            var form = $("#Form1").closest("form");
            var formData = new FormData(form[0]);
    	
    		$.ajax({
        url:base_path+"Responsive/updatecontact",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_save1').prop('disabled', true);
               $('#btn_save1').html('Loading');
          }, 
        success: function(data) {
          console.log(data);
           $('#btn_save1').prop('disabled', false);
           $('#btn_save1').html('Save');
             
            swal({
            title:"",
            text:"Data Updated Successfully",
            type:"success",
            showCancelButton: true, 
            showConfirmButton: false,
            timer:2000
        }); a=false;
            // window.location.href = base_path+"Responsive";
          }
      });
    	}
        else
    	{a=true;

        
      var form = $("#Form1").closest("form");
      var formData = new FormData(form[0]);
    		
    		$.ajax({
        url:base_path+"Responsive/insertsubscribtion",
        type: "POST",

        data: formData,
        processData: false,
        contentType: false,

        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_save1').prop('disabled', true);
               $('#btn_save1').html('Loading');
          }, 
        success: function(data) {

            $('#btn_save1').prop('disabled', false);
           $('#btn_save1').html('Save');
             $("#Form1").trigger("reset");
            //  document.getElementById("profile-img-tag1").src = "";

            //  alert("save");
             Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Data Submitted successfully!",
                customClass: 'swal-wide',
                showConfirmButton: false,
                timer: 1500
              });
           
           a=false;

        //    setTimeout(() => {

        //     window.location.href = base_path+"Responsive/index";
  
        //   }, 3000);


                }
                
      });
    	}
      }
 }
