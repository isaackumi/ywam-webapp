<?php

include('includes/navSidebar.php');


 ?>

 <div class="row container-fluid">
   <div class="col-md-12 col-sm-12 card shadow mb-4">
     <div class="x_panel">
       <div class="x_title">
         <h2>Create a post</h2>
         <ul class="nav navbar-right panel_toolbox">


           <li><a class="close-link"><i class="fa fa-close"></i></a>
           </li>
         </ul>
         <div class="clearfix"></div>
       </div>
       <div class="x_content">
         <br />
         <form id="create-post" data-parsley-validate class="form-horizontal form-label-left">

           <div class="item form-group">
             <label class="col-form-label col-md-3 col-sm-3 label-align" for="first-name">Title<span class="required">*</span>
             </label>
             <div class="col-md-6 col-sm-6 ">
               <input type="text" id="title" name="title" required="required" class="form-control ">
             </div>
           </div>

           <div class="item form-group">
             <label for="middle-name" class="col-form-label col-md-3 col-sm-3 label-align">Sub-title</label>
             <div class="col-md-6 col-sm-6 ">
               <input id="" class="form-control" type="text" name="subtitle">
             </div>
           </div>

           <!-- <div class="item form-group">
             <label class="col-form-label col-md-3 col-sm-3 label-align">Date Of Birth <span class="required">*</span>
             </label>
             <div class="col-md-6 col-sm-6 ">
               <input id="birthday" class="date-picker form-control" required="required" type="text">
             </div>
           </div> -->

           <div class="ln_solid"></div>

           <div class="col-md-12 col-sm-12 ">
             <div class="x_panel">

               <div class="item form-group">
                 <label class="col-form-label col-md-3 col-sm-3 label-align">Message <span class="required">*</span>
                 </label>

               </div>

               <div class="x_content">
                 <div id="alerts"></div>
                 <div class="btn-toolbar editor" data-role="editor-toolbar" data-target="#editor-one">
                   <div class="btn-group">
                     <a class="btn dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a>
                     <ul class="dropdown-menu">
                     </ul>
                   </div>


                   <div class="btn-group">
                     <a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a>
                     <a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a>
                     <a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a>
                     <a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a>
                   </div>

                   <div class="btn-group">
                     <a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a>
                     <div class="dropdown-menu input-append">
                       <input class="span2" placeholder="URL" type="text" data-edit="createLink" />
                       <button class="btn" type="button">Add</button>
                     </div>
                     <a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a>
                   </div>

                   <div class="btn-group">
                     <a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a>
                     <input type="file" name="photo" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />
                   </div>


                 </div>
                 <br />

                 <div class="ln_solid"></div>

                 <div class="form-group">

                   <div class="col-md-9 col-sm-9 ">
                     <textarea class="resizable_textarea form-control" name="message"></textarea>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <div class="item form-group">
             <div class="col-md-6 col-sm-6 offset-md-3">
               <button class="btn btn-primary" name="cancel"  type="button">Cancel</button>
               <button class="btn btn-primary" name="reset"  type="reset">Reset</button>
               <button type="submit" name="submit"  class="btn btn-success ">Submit</button>
             </div>
           </div>

         </form>
       </div>
     </div>
   </div>
 </div>






 <!-- <?php
if (isset($_GET['submit']) {
  $title =$_GET['title'];
  $message =$_GET['message'];
  $photo =$_GET['photo'];

  echo $title;

}


  ?> -->
