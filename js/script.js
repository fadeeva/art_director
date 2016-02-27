$(document).ready(function(){
    
    /* ArtDirector open/close */
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
        
        $('footer').animate({ "margin-top": "410px" }, "slow");
    });
    /*---------------*/
    
    /* Menu */
    $("#close_menu img").hover(function() {
        $(this).animate({"opacity": "0"}, "slow");
    }, function(){
        $(this).animate({"opacity": "1"}, "slow");
    });
    
    $("#close_menu").click(function() {
        $("#open_menu").css({"opacity": 0, "visibility": "visible"}).animate({opacity: 1}, "slow");
    })
    
    $("#open_menu img").click(function() {
        $("#open_menu").fadeTo( 400, 0 , function(){ 
                $(this).css('visibility', 'hidden');
        });
    });
    
    $("#close_button img").hover(function() {
        $(this).animate({"opacity": "0"}, "slow");
    }, function(){
        $(this).animate({"opacity": "1"}, "slow");
    });
    /*---------------*/
    
});