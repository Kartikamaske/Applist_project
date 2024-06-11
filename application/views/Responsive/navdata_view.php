
<style>
    .btn-spacing {
                 margin-left: 10px;
                 }

                 @media (max-width: 375px) {
                    .btn-spacing {
                 margin-left: 0px!important;
                 }
                 }


                     .pagination {
                        gap: 10px!important;
                    }

                    .pagination .page-item .page-link{
                        padding: 10px 16px!important;
                        color:white!important;
                        background:#5e4bdb;
                        border:2px solid black!important;
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px!important;

                        border-radius: 5px;
                    }
                    .page-item .page-link:focus {
                        background-color: white;
                        color: #000!important; 
                        border:2px solid black!important;
                        
                    
                    }
</style>

<body>

       
    

   



<?php $url='http://localhost/Admin_applist/upload/'; ?>

<!-- <?php $url='https://www.adminapplist.softwarecompany.tech/upload/'; ?> -->




<!-- <section>
    <div class="container">
            <div class="section-title center-block text-center"> 
                <h2 style="margin-top:70px;">Top<span>Free</span> Apps</h2>
                     <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
            </div>


            <div class="panel panel-primary"> 
                <div class=""> 
                    <div class="tabs-menu "> 
                        
                         <ul class=" nav panel-tabs eductaional-tabs mb-6" role="tablist">
                     
                            <li class="nav-item" onclick="onsumclick(1)">

                            <input type="hidden"  id="inputId1">

                              <a class="nav-link active" data-toggle="pill" href="#home" id="Software"><i class="fa-brands fa-android"></i>&nbsp;Software </a>
                            </li>
                            <li class="nav-item" onclick="onsumclick(2)">
                              <a class="nav-link" data-toggle="pill" href="#menu1" id="android"><i class="fa-brands fa-apple icon-color"></i>&nbsp;Android App</a>
                            </li>
                            <li class="nav-item" onclick="onsumclick(3)">
                              <a class="nav-link" data-toggle="pill" href="#index3" id="iosapp"><i class="fa-brands fa-windows icon-color"></i>&nbsp;Ios App</a>
                            </li>
                            <li class="nav-item" onclick="onsumclick(4)">
                                <a class="nav-link" data-toggle="pill" href="#index4" id="ecommerce"><i class="fa fa-briefcase me-1 icon-color"></i>&nbsp;E-commerce App</a>
                              </li>

                              <li class="nav-item" onclick="onsumclick(5)">
                                <a class="nav-link" data-toggle="pill" href="#index5" id="website"><i class="fa fa-briefcase me-1 icon-color"></i>&nbsp;Website</a>
                              </li>
                          </ul>
                    </div>
                </div>

               
                <div class="tab-content container">
                      <div id="home1" class="tab-pane active d-flex gap-5 row justify-content-center flex-wrap" ><br>
                         </div>
                 </div>
          </div>
    </div>

    </div>

</section> -->

<div class="modal" id="myModal" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
      <form role="form" id="Form" enctype="multipart/form-data" action="" method="post" class="p-1">

      <input type="hidden" class="form-control" id="viewdemoid" placeholder="" name="viewdemoid" value="<?php if(!empty($dataa[0]->viewdemoid)){echo $dataa[0]->viewdemoid;}?>">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title text-dark font-weight-bold">Get Free Demo Download</h4>
          <button type="button" class="close d-none" data-dismiss="modal" id="modelclose" >&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">

            <input type="text" id="softwareid" name="softwareid" hidden>

            <input type="number" class="form-control" placeholder="Contact Number" onKeyPress="if(this.value.length==10) return false;" id="mobilenumber" name="mobilenumber" oninput="mobileforviewdemo()">
            <span id="mobileviewmessage" class="text-danger"></span>
            <br>

            <button type="button" class="btn btn-success" id="btn_save"  style="float:right;background-color:#2f256d;color:white;"> Get Demo</button>
        </div>
     </form>
        
        
      </div>
    </div>
  </div>

   


<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>


<!-- <script  src="<?php echo base_url('web_resources');?>Assets/jquery.js"></script>           -->

 <!-- <script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/PopupCreate.js"></script> -->
 <!-- <script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/SubscribeCreate.js"></script> -->
 <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


   

 <script>
    
    $(document).ready(function () {
   var itemsPerPage = 9; // Number of items per page
   var $pagination = $('#pagination');
   var $items = $('.cardmainimagsizese');
   var itemCount = $items.length;
   var pageCount = Math.ceil(itemCount / itemsPerPage);

   // Initialize pagination
   for (var i = 1; i <= pageCount; i++) {
       $pagination.append('<li class="page-item"><a class="page-link text-primary" href="#">' + i + '</a></li>');
   }

   // Show the first page
   showPage(1);

   $pagination.on('click', 'a', function (e) {
       e.preventDefault();
       var pageNum = $(this).text();
       showPage(pageNum);
   });

   function showPage(pageNum) {
       var start = (pageNum - 1) * itemsPerPage;
       var end = start + itemsPerPage;
       $items.hide().slice(start, end).show();
   }

   // Example: Append other details to the container without affecting pagination
   var otherDetails = '<div class="other-details">Other details go here</div>';
   $('.container-for-other-details').append(otherDetails);
});

</script>

<script>
    $(document).ready(function () {
 assignValue(1);
});
function assignValue(id){
//    alert(id);

   photo_typeId = document.getElementById("inputId").value = id;

   var itemsPerPage = 9; // Number of items per page
   
//    alert(photo_typeId);

$.ajax({

url:base_path+"Responsive/datatoclicknav",
method: "POST",

data:{'photo_typeId':photo_typeId},
// dataType: 'json',

success: function(data){
   console.log("mylist",data);
   $('#home').empty();
   var xys=JSON.parse(data);
   
   var uploadURL ='http://localhost/Admin_applist/upload/';

   
   var result='';
   for(i=0;i<xys.length;i++){

       result += '<div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 softwarediv" onclick="showSoftwareDetails(' +xys[i]['softwareid'] + ', \'' +xys[i]['softwarename'] + '\')" data-toggle="modal" data-target="#myModal">'+
       '<div class="mx-2">'+
      
       '<div class="card overflow-hidden cardhover" style="margin-top: 43px;">'+
           '<div class="power-ribbon power-ribbon-top-left text-warning">'+
                 '<span class="bg-warning">'+     
                        '<i class="fa fa-bolt"></i>'+
                 '</span>'+
           '</div>'+
                       
        '<div class="item-card7-imgs">'+ 
               '<a href="javascript:void(0);"></a>'+
                    '<img src="'+uploadURL+xys[i]['photo1']+'" alt="Dash" class="p-0" style="height:270px;width:310px;">'+
        '</div>'+
                       
       '<div class="card-body"> '+
          '<div class="item-card7-desc">'+ 
             '<div class="item-card7-text">'+ 
             '<a href="javascript:void(0);" class="text-dark text-header" >' +
        '<h4 class="mb-1 overflow-hidden headtext">' +xys[i]['softwarename'] + '</h4>' +
        '</a>' + 
                                                              
              '<div style="text-align: left!important;">'+
                 '<p class="overflow-hidden paratext">'+xys[i]['description']+'</p>'+  
               '</div>'+
         '</div>'+ 
                                                        
      '<a href="javascript:void(0);" class="btn btn-primary mt-3 hoverbutton" style="background-color: #5e4bdb;">'+
      '<i class="fa-solid fa-laptop"></i> Get free demo</a>'+


      '<a href="javascript:void(0);" class="btn btn-primary mt-3 btn-spacing detailbutton" style="background-color: #5e4bdb;">'+
      '<i class="fa-solid fa-download"></i> Download</a>'+
                                                       
'</div>'+
'</div>'+                       
'</div>'+ 
'</div>'+
                       '</div>'+
                   '</div>'+
                   '</div>'+
               '</div>';

   }
   $('#home').append(result);


   var $pagination = $('#pagination');
                           // here home is id for append & softwarediv is a class used in div
                   var $items = $('#home .softwarediv');
                   var itemCount = $items.length;
                   var pageCount = Math.ceil(itemCount / itemsPerPage);

                   $pagination.empty(); // Clear existing pagination

                   for (var i = 1; i <= pageCount; i++) {
                       $pagination.append('<li class="page-item"><a class="page-link text-primary" href="#">' + i + '</a></li>');
                   }

                   // Show the first page
                   showPage(1);

                   $pagination.on('click', 'a', function (e) {
                       e.preventDefault();
                       var pageNum = $(this).text();
                       showPage(pageNum);
                   });

                   function showPage(pageNum) {
                       var start = (pageNum - 1) * itemsPerPage;
                       var end = start + itemsPerPage;
                       $items.hide().slice(start, end).show();
                   }
   
       }
   });

}

function showSoftwareDetails(softwareid, softwarename) {
    // alert(softwareid);

    $('#softwareid').val(softwareid);
    // Create an input box of type text dynamically and append it to a specific container (e.g., a modal)
    var inputBox = '<input type="text" value="' + softwareid + '" readonly>';
    $('#inputContainer').empty().append(inputBox);

    // Optionally, you can display the software name as well
    $('#softwareNameContainer').text('Software Name: ' + softwarename);

    // Open your modal or perform any other action to show the input box with the ID
    // $('#myModal').modal('show');
}



function mobileforviewdemo() {
            var mobileNumber = document.getElementById('mobilenumber').value;
            var errorSpan = document.getElementById('mobileviewmessage');

            if (mobileNumber.length !== 10) {
                errorSpan.innerHTML = "Mobile No. must be 10 digits";
            } else {
                errorSpan.innerHTML = ""; // Clear the error message
            }
        }

     
</script>





<script  src="<?php echo base_url('web_resources');?>/dist/js/controllers/ViewdemoCreate.js"></script>




   </body>



 