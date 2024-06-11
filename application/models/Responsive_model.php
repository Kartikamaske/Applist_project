<?php
  class Responsive_model extends CI_Model {
    
    public function __construct()
      {
          $this->load->database();
      }
  
      
     public function getalldata()
     {      
      
             $this->db->select('frontsoftwarelist_master.frontsoftwareid ,frontsoftwarelist_master.fksoftwareid,software_master.softwareid,software_master.softwarename,software_master.description,software_master.rate,software_master.photo1');
             $this->db->from('frontsoftwarelist_master');

             $this->db->join('software_master', 'frontsoftwarelist_master.fksoftwareid = software_master.softwareid', 'left');

              $query = $this->db->get();
              return $query->result();
            
     
     }



     public function getallapp()
     {      
      
             $this->db->select('middlesoftwarelist_master.middlesoftwareid,middlesoftwarelist_master.fksoftwareid,software_master.softwareid,software_master.softwarename,software_master.description,software_master.rate,software_master.photo1');
             $this->db->from('middlesoftwarelist_master');

             $this->db->join('software_master','middlesoftwarelist_master.fksoftwareid = software_master.softwareid', 'left');

              $query = $this->db->get();
              return $query->result();
            
     
     }



     public function getalllastapp()
     {      
      
             $this->db->select('lastsoftwarelist_master.lastsoftwareid,lastsoftwarelist_master.fksoftwareid,software_master.softwareid,software_master.softwarename,software_master.description,software_master.rate,software_master.photo1');
             $this->db->from('lastsoftwarelist_master');

             $this->db->join('software_master','lastsoftwarelist_master.fksoftwareid = software_master.softwareid', 'left');
 
              $query = $this->db->get();
              return $query->result();
            
     
     }



        // IMP for two master join 
        function gettabtoclick($photo_typeId){

                $this->db->select("lastsoftwarelist_master.lastsoftwareid ,software_master.softwarename,software_master.description,software_master.photo1,lastsoftwarelist_master.fksoftwaretypename,software_master.softwareid");
                $this->db->from('lastsoftwarelist_master');
        
                $this->db->join('software_master','lastsoftwarelist_master.fksoftwareid   = software_master.softwareid ','right');
        
                $this->db->where('lastsoftwarelist_master.fksoftwaretypename',$photo_typeId);
                $this->db->where('software_master.is_active','1');          
                $query = $this->db->get();
                return $query->result();
      }



      function getsoftwaredatas(){

        $this->db->select("lastsoftwarelist_master.lastsoftwareid ,software_master.softwarename,software_master.description,software_master.photo1,lastsoftwarelist_master.fksoftwaretypename,software_master.softwareid");
        $this->db->from('lastsoftwarelist_master');

        $this->db->join('software_master','lastsoftwarelist_master.fksoftwareid   = software_master.softwareid ','right');

        $this->db->where('lastsoftwarelist_master.fksoftwaretypename','1');
        $this->db->where('software_master.is_active','1');          
        $query = $this->db->get();
        return $query->result();
    }

      function gettabtoclick1($photo_typeId){

        // $this->db->select("software_master.softwarename,software_master.description,software_master.photo1,");
        $this->db->select("software_master.softwarename,software_master.description,software_master.photo1,software_master.softwareid");
        $this->db->from('software_master');
       
        // SELECT * FROM `software_master`WHERE fksoftwaretypename=1;

        $this->db->where('software_master.fksoftwaretypename',$photo_typeId);
        $this->db->where('software_master.is_active','1');          
        $query = $this->db->get();
        return $query->result();
    }



        // for save popup form

        public function getallcontact()
        {      
         
                $this->db->select('popup_master.*');
                $this->db->from('popup_master');
                $this->db->where('popup_master.is_active','1');
                $query = $this->db->get();
                return $query->result();
                
        }


        public function getsubscribe()
        {      
         
                $this->db->select('subscribe_master.*');
                $this->db->from('subscribe_master');
                $this->db->where('subscribe_master.is_active','1');
                $query = $this->db->get();
                return $query->result();
                
        }


        // public function getallblog() {  

        //          $this->db->select('blogtype_master.blogTypeId,blogtype_master.blogTypeName,blog_master.blogid,blog_master.fkblogtype,blog_master.blogdescription,blog_master.bloglabel1,blog_master.img1,blog_master.publishdate');
        //         $this->db->from('blogtype_master');
        //         $this->db->join('blog_master', 'blogtype_master.blogTypeId = blog_master.fkblogtype', 'left');
        //          $query = $this->db->get();
        //          return $query->result();
        // }


        public function getallblog()
        {      
       
                $this->db->select('blog_master.*,blogtype_master.blogTypeId,blogtype_master.blogTypeName,DATE_FORMAT(blog_master.publishdate, "%d/%m/%Y") AS publishdate');
                $this->db->join('blogtype_master','blog_master.blogid = blogtype_master.blogTypeId','left');  
                $this->db->from('blog_master');
                $this->db->where('blog_master.is_active','1');
                 $query = $this->db->get();
                 return $query->result();
                
        }
       

    }