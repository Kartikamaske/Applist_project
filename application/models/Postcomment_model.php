<?php
  class Postcomment_model extends CI_Model {
    
    public function __construct()
      {
          $this->load->database();
      }

      public function getallcomment()
        {      
         
                $this->db->select('postcomment_master.*');
                $this->db->from('postcomment_master');
                $this->db->where('postcomment_master.is_active','1');
                $query = $this->db->get();
                return $query->result();
                
        }


      //   public function getdetailviewblog() {  

      //     $this->db->select('blogtype_master.blogTypeId,blogtype_master.blogTypeName,blog_master.blogid,blog_master.fkblogtype,blog_master.blogdescription,blog_master.bloglabel1,blog_master.img1,blog_master.publishdate');
      //     $this->db->from('blogtype_master');
      //     $this->db->join('blog_master', 'blogtype_master.blogTypeId = blog_master.fkblogtype', 'left');
      //     $query = $this->db->get();
      //     return $query->result();
      //  }




       public function getdetailviewblog($blogid)
       {   
         $this->db->select('blog_master.blogid,blog_master.fkblogtype,blog_master.blogdescription,blog_master.bloglabel1,blog_master.photo1,DATE_FORMAT(blog_master.publishdate, "%d/%m/%Y") AS publishdate,blog_master.blog_name,blogtype_master.blogTypeId,blogtype_master.blogTypeName');
         $this->db->join('blogtype_master','blog_master.blogid  = blogtype_master.blogTypeId','left');
         $this->db->from('blog_master');
         $this->db->where('blog_master.blogid',$blogid);
         $this->db->where('blog_master.is_active','1');
         $query = $this->db->get();
         return $query->result();
     
       }


    }