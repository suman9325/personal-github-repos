<?php
/*
  Template Name: View Summary
 */

get_header();
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#sub-btn").click(function () {
            var cardno = $("#card_number").val();
            var cardholder_name = $("#cardholder_name").val();
            var expmonth = $("#expmonth option:selected").val();
            var expyear = $("#expyear option:selected").val();
            var cvv = $("#cvv").val();
            if (cardno == '') {
                $(".card_no1").show();
                return false;
            } else {
                $(".card_no1").hide();
            }
            if (isNaN(cardno)) {
                $(".card_no2").show();
                return false;
            } else {
                $(".card_no2").hide();
            }
            if (cardno.length != 16) {
                $(".card_no3").show();
                return false;
            } else {
                $(".card_no3").hide();
            }
            if (cardholder_name == '') {
                $(".cardholder_name1").show();
                return false;
            } else {
                $(".cardholder_name1").hide();
            }
            if (expmonth == '') {
                $(".expmonth1").show();
                return false;
            } else {
                $(".expmonth1").hide();
            }
            if (expyear == '') {
                $(".expyear1").show();
                return false;
            } else {
                $(".expyear1").hide();
            }
            if (cvv == '') {
                $(".cvv1").show();
                return false;
            } else {
                $(".cvv1").hide();
            }
            if (isNaN(cvv)) {
                $(".cvv2").show();
                return false;
            } else {
                $(".cvv2").hide();
            }
            if (cvv.length != 3) {
                $(".cvv3").show();
                return false;
            } else {
                $(".cvv3").hide();
            }
        });
    });
</script>
<link rel='stylesheet' id='js_composer_front-css'  href='<?php echo site_url(); ?>/wp-content/plugins/js_composer_theme/assets/css/js_composer.min.css' type='text/css' media='all' />
<style>
    .form-wrap {
        width: 80%;
        margin: 30px auto;
        background: #fbf9f9;
        box-shadow: 0px 0px 3px #d2d2d2;
    }
    .txt-danger {
        display: none;
        color: #f00;
        margin: 5px 0;
    }
    .form-wrap h3 {
        font-weight: 600;   
        font-size: 37px;
        line-height: 1.14;
        margin: 30px 0;      

    }
    .pull-left {
        float: left;
    }
    .pull-right {
        float: right;
    }
    .col-left-60 {
        width:65%;
        float: left;
        padding: 0px 30px;
        box-sizing: border-box;
    }
    .col-right-40 {
        width:35%;
        float: left;
        padding: 0px 30px;
        box-sizing: border-box;
    }
    .clear {
        clear:both;
    }
    .custom-form-group {
        margin-bottom: 15px;
    }
    .form-wrap label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
    }
    .form-wrap .form-control {
        display: block;
        width: 100%;        
        padding: 12px;
        font-size: 16px;
        line-height: 1.42857143;
        color: #555;               
        border: 1px solid #ccc;
        border-radius: 4px;        
    }
    .form-wrap .form-control:focus {
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    }

    .col-30 {
        width: 33.33%;
        padding: 0 10px;
        box-sizing: border-box;
        float: left;
    }
    .p-r-0 {
        padding-right: 0px;
    } 
    .p-l-0 {
        padding-left: 0px;
    }
    .m-b-20 {
        margin-bottom: 20px;
    }
    .border-right {
        border-right: 1px solid #dddddd;
    }
    .border-bottom {
        border-bottom: 1px solid #dddddd; 
    }
    .btn-pay {
        border-radius: 4px;
        background-color: #0cc971;
        padding: 0 18px;
        border: 0;
        height: 64px;
        line-height: 64px;
        color: #fff;
        font-weight: 600;
        width: 100%;
        font-size: 25px;
        margin: 40px 0;
    }
    .pay-card ul {
        list-style: none;
    }
    .pay-card li{
        float: left;
    }
    .grid input.form-control {
        width: 87%;
    }
    .testimonial-info {
        margin-top: 58%;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: 0px 0px 2px #ddd;
    }
    .testimonial-info .media-left {
        display: table-cell;
        vertical-align: top;
        padding-right: 10px; 
    }
    .testimonial-info .media-body {
        display: table-cell;
        vertical-align: top; 
    }
    .testimonial-info .media-object {        
        width: 60px;
        border-radius: 50%;
        height: 60px;
        border: 1px solid #aaa7a7;
        overflow: hidden;
    }
    .testimonial-info .media-heading {        
        font-size: 14px;
        line-height: 22px;
    }
    .testimonial-info .media-heading span {        
        background: #b5e9ed;
    }
    .testimonial-info .media-body h4 {
        font-size: 20px;
        color: #696868; 
    }
.vc_column_container > .vc_column-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
}
    @media only screen and (max-width: 1199px){
        .pay-card p {
            float:none;
        }
        .pay-card ul {
            float:none;
            margin-left: 0px;
            margin-right: 15px;
            padding-left: 0 !important;
        }
        .pay-card li {
            float:none;
            display: inline-block;
        }
        .form-wrap .col-right-40.pull-right{
            float: none;
            width: 100%;
            clear: both;
            padding-top: 15px;
        }
        .form-wrap .col-right-40.pull-right h3{
            font-weight: 600;
            font-size: 17px;
            line-height: 1.14;
            margin:0 0 15px 0;
        }
        .form-wrap .col-right-40.pull-right .testimonial-info{
            margin-bottom: 15px;
            margin-top: 12px;
        }
        .form-wrap .col-left-60.border-right.pull-left{
              float: none;
            width: 100%;
            clear: both;
            border-right: 0;
        }
    }
    @media only screen and (max-width: 991px){
        .form-wrap h3 {
            font-size: 33px;
            float:none;
            text-align: center;
        }
        .form-wrap img {            
            float:none;
            display: block;
            margin-top: 0px auto 30px !important;            
        }

    }
    @media only screen and (max-width: 500px){
        .form-wrap{
            margin-top: 101px;
        }
    }

</style>
<link rel='stylesheet' id='js_composer_front-css'  href='<?php echo site_url(); ?>/wp-
      content/plugins/js_composer_theme/assets/css/js_composer.min.css' type='text/css' media='all' />
<div class="container">
    <div class="vc_row-fluid clearfix m-t-30 p-t-20">
        <div class="wpb_column vc_column_container vc_col-sm-3">
            <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                    <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div class="wpb_wrapper">
                            <a href="<?php echo site_url(); ?>" class="back-home hidden-xs"><i class="fa fa-angle-
                                                                                               left"></i><span> Back home</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wpb_column vc_column_container vc_col-sm-6">
            <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                    <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div class="wpb_wrapper">
                            <div class="logo_started"><img src="<?php echo site_url(); ?>/wp-content/uploads/2018/04/logo_black.png"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wpb_column vc_column_container vc_col-sm-3">
            <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                    <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                        <div class="wpb_wrapper">
                            <a href="<?php echo site_url(); ?>/support" class="support-link hidden-xs" style="text-
                               align:right;">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700,800,900" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
          rel="stylesheet">
          <?php if ($_SERVER['REQUEST_METHOD'] == 'POST') { ?>

        <div class="form-wrap">    

            <div class="col-right-40 pull-right">
                <h3> Your order </h3>
                <div class="border-bottom m-b-20"></div>
                <div class="payment-info">
                    <span class="pull-left">
                        <?php echo $_REQUEST['os0']; ?> package 
                    </span>
                    <span class="pull-right">
                        $<?php echo $_REQUEST['on0']; ?>/mo
                    </span>
                    <div class="clear"></div>
                </div>
                <div class="testimonial-info">
                    <div class="media">
                        <div class="media-left">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/blog.jpg" class="media-
                                 object" style="width:60px">
                        </div>
                        <div class="media-body">
                            <p class="media-heading"><span>Great and real service! Real accounts 
                                    respond</span>. Very happy with service. I can happily recommend Ascend Viral <img src="<?php echo get_stylesheet_directory_uri(); ?>/1261-white-smiling-face.png" style="width:20px"> </p>
                            <h4>@jammestattoo</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-left-60 border-right pull-left">
                <div>
                    <h3 class="text-left pull-left"> Secure checkout </h3>
                    <img src="https://final.ascendviral.com/wp-content/uploads/2018/09/getseal.png" 
                         alt="" class=" pull-right" style="margin:30px 0" />
                    <div class="clear"></div>
                </div>
                <div class="border-bottom m-b-20"></div>
                <div class="pay-card ">
                    <p class="pull-left"> Pay with credit / debit card </p>
                    <ul class="pull-right">
                        <li><img src="https://final.ascendviral.com/wp-content/uploads/2018/09/visa.png"/></li>
                        <li><img src="https://final.ascendviral.com/wp-content/uploads/2018/09/mastercard.png"/></li>
                        <li><img src="https://final.ascendviral.com/wp-content/uploads/2018/09/discover.png"/></li>
                        <li><img src="https://final.ascendviral.com/wp-content/uploads/2018/09/diners-club.png"/></li>
                        <li><img src="https://final.ascendviral.com/wp- content/uploads/2018/09/amex.png"/></li>
                    </ul>
                    <div class="clear"></div>
                </div>
                <form action="<?php echo site_url(); ?>/user-information/" method="post">
                    <input type="hidden" name="plan_name" value="<?php echo $_REQUEST['os0']; ?>">
                    <input type="hidden" name="plan_price" value="<?php echo $_REQUEST['on0']; ?>">
                    <input type="hidden" name="user_email" value="<?php echo $_REQUEST['email_addr']; ?>">
                    <div class="custom-form-group">
                        <label for="card_number">Card Number</label>      
                        <input type="text" name="card_number" id="card_number" placeholder="Card Number" 
                               class="form-control">
                        <p class="txt-danger card_no1">Please Enter Card Number</p>
                        <p class="txt-danger card_no2">Card Number Must be numeric</p>
                        <p class="txt-danger card_no3">Card Number Must be 16 digits</p>
                    </div>
                    <div class="custom-form-group">
                        <label for="cardholder_name">Cardholder Name</label>    
                        <input type="text" name="cardholder_name" id="cardholder_name" placeholder="Cardholder 
                               Name" class="form-control">
                        <p class="txt-danger cardholder_name1">Please Enter Cardholder Name</p>
                    </div>
                    <div class="grid">
                        <div class="col-30 p-l-0">
                            <div class="custom-form-group">
                                <label for="expmonth">Month</label>    
                                <select name="expmonth" id="expmonth" class="form-control">
                                    <option value="">Month</option>
                                    <?php
                                    for ($m = 1; $m <= 12; $m++) {
                                        ?>
                                        <option value="<?php echo($m <= 9) ? '0' . $m : $m; ?>"><?php
                                            echo($m <= 9) ?
                                                    '0' . $m : $m;
                                            ?></option>
    <?php } ?>
                                </select> 
                                <p class="txt-danger expmonth1">Please Select Month</p>
                            </div>
                        </div>
                        <div class="col-30">
                            <div class="custom-form-group">
                                <label for="expyear">Year</label>    
                                <select name="expyear" id="expyear" class="form-control">
                                    <option value="">Year</option>
                                    <?php
                                    for ($y = 1; $y <= 99; $y++) {
                                        ?>
                                        <option value="<?php echo($y <= 9) ? '200' . $y : '20' . $y; ?>"><?php echo($y <= 9) ? '200' . $y : '20' . $y;
                                        ?></option>
    <?php } ?>
                                </select>
                                <p class="txt-danger expyear1">Please Select Year</p>
                            </div>
                        </div>
                        <div class="col-30 p-r-0">         
                            <div class="custom-form-group">
                                <label for="cvv">Cvv</label>    
                                <input type="password" id="cvv" name="cvv" class="form-control" placeholder="CVV">
                                <p class="txt-danger cvv1">Please Enter CVV</p>
                                <p class="txt-danger cvv2">CVV must be numeric</p>
                                <p class="txt-danger cvv3">CVV Must be 3 digits</p>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>  

                    <input type="submit" id="sub-btn" value="Begin Subscription" class="btn btn-cta btn btn-
                           primary btn-pay">   
                </form>
            </div>
            <div class="clear"></div>
        </div>
    <?php } get_footer(); ?>
