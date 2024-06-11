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
  var softwareid =$('#softwareid ').val();
    var softwarename=$('#softwarename').val();
    // alert(softwarename); 
    
  if(softwarename=="") 
  {
      Swal.fire(
        'Oops!',
        'Please Enter Required Fields!',
        'error'
      )
  }
  else
  {
        if(softwareid >0)
        {
        // alert(softwareid );
            a=true;

            var form = $("#Form").closest("form");
            var formData = new FormData(form[0]);
        
            $.ajax({
        url:base_path+"Software/updateSlider",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_submit').prop('disabled', true);
               $('#btn_submit').html('Loading');
          }, 
        success: function(data) {
          console.log(data);
           $('#btn_submit').prop('disabled', false);
           $('#btn_submit').html('Save');

           Swal.fire(
            'Good job!',
            'Data Updated Successfully!',
            'success'
          )
        
         a=false;
            // window.location.href = base_path+"Slider";
          }
      });
        }
        else
        {
        a=true;
            var form = $("#Form").closest("form");
            var formData = new FormData(form[0]);
            
            $.ajax({
        url:base_path+"Software/insertsoftware",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        // data: $('#Form').serialize(),
         beforeSend: function(){
               $('#btn_submit').prop('disabled', true);
               $('#btn_submit').html('Loading');
          }, 
        success: function(data) {
          console.log(data);
            $('#btn_submit').prop('disabled', false);
           $('#btn_submit').html('Save');
             $("#Form").trigger("reset");

             // alert("hi");

             Swal.fire(
              'Thank you!!!',
              'Data Submitted Successfully!',
              'success'
            )
           
           a=false;

                }
      });
        }
      }
 }



