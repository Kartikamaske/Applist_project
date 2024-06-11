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
    var sliderId=$('#sliderId').val();
      var slider_name=$('#slider_name').val();
      // alert(slider_name); 
      
    if(slider_name=="") 
    {
        Swal.fire(
          'Oops!',
          'Please Enter Required Fields!',
          'error'
        )
    }
    else
    {
          if(sliderId>0)
          {
          // alert(sliderId);
              a=true;
  
              var form = $("#Form").closest("form");
              var formData = new FormData(form[0]);
          
              $.ajax({
          url:base_path+"Slider/updateSlider",
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
          url:base_path+"Slider/insertSlider",
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
                'Good job!',
                'Data Submitted Successfully!',
                'success'
              )
             
             a=false;
  
                  }
        });
          }
        }
   }
  
  
  
  