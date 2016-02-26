$(document).ready(function(){

    $("#button").click(function() {
        $("#qualitative_adj").animate({ "top": "120px" }, "slow");
        $("#inanimate_noun").animate({ "top": "216px" }, "slow");
        $("#animate_noun").animate({ "top": "312px" }, "slow");
        
        $("#top_left_black").animate({ "top": "23px" }, "slow");
        $("#bottom_left_black").animate({ "top": "82px" }, "slow");
        
        $("#top_right_yellow").animate({ "top": "119px" }, "slow");
        $("#bottom_right_yellow").animate({ "top": "178px" }, "slow");
        
        $("#top_left_yellow").animate({ "top": "215px" }, "slow");
        $("#bottom_left_yellow").animate({ "top": "274px" }, "slow");
        
        $('footer').animate({ "margin-top": "400px" }, "slow");
    })
    
});