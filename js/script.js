$(document).ready(function(){
    
    /* ArtDirector open/close */
    $("#button").click(function() {
        setNewChoice();

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
        $("#open_menu").css({"opacity": 0, "visibility": "visible", "height": "207px"})
                       .animate({opacity: 1}, "slow");
    })
    
    $("#close_button img").click(function() {
        $("#open_menu").fadeTo( 400, 0 , function(){ 
                $(this).css('visibility', 'hidden');
        });
        $("#works").css({"visibility": "hidden"});
        $("#words").css({"visibility": "hidden"});
    });
    
    $("#close_button img").hover(function() {
        $(this).animate({"opacity": "0"}, "slow");
    }, function(){
        $(this).animate({"opacity": "1"}, "slow");
    });
    
    $("#main_menu_list li").click(function() {
        $("#open_menu").animate({"height": "320px"}, "slow")
        if( $(this).index() == 0 ){
            $("#works").css({"visibility": "hidden"});
            $("#words").css({"visibility": "visible"});
            $("#words_list").children().remove('ul');
            $("#words li").removeClass("click");
        }else if( $(this).index() == 1 ){
            $("#words").css({"visibility": "hidden"});
            $("#works").css({"visibility": "visible"});
            $("#words_list").children().remove('ul');
            $("#words li").removeClass("click");
        }
    })
    /*---------------*/
    
    /* SubMenu */
    $("#words li").click(function() {
        var wordsList = $("#words_list");
        var liIndex = $(this).index();
        var words = '<ul>';
        var typeOfArray;
        var height = $( document ).height();
        
        wordsList.children().remove('ul');
        $("#words li").removeClass("click");
        $(this).addClass("click");
        
        switch(liIndex) {
            case 0 : typeOfArray = qualitativeAdjectives;
            break;
            case 1 : typeOfArray = inanimateNoun;
            break;
            case 2 : typeOfArray = animateNoun;
            break;
            default:
                typeOfArray = qualitativeAdjectives;
            break;
        }
                         
        for(var i = 0; i < typeOfArray.length; i++){
            words += '<li>' + typeOfArray[i] + '</li>';
        }
    
        words += '</ul>';
        
        $("#open_menu").animate({"height": height}, "slow")
        wordsList.append(words);
    })
    /*---------------*/
    
});

function setNewChoice(){
    var newChoice = randomChoice();
        
    $("#qualitative_adj").empty();
    $("#inanimate_noun").empty();
    $("#animate_noun").empty();

    $("#qualitative_adj").append(qualitativeAdjectives[newChoice.qualitativeAdjectives]);
    $("#inanimate_noun").append(inanimateNoun[newChoice.inanimateNoun]);
    $("#animate_noun").append(animateNoun[newChoice.animateNoun]);
}

function randomChoice(){
    var oRandomWords = { animateNoun, inanimateNoun, qualitativeAdjectives };
    oRandomWords.animateNoun = Math.floor(Math.random() * animateNoun.length);
    oRandomWords.inanimateNoun = Math.floor(Math.random() * inanimateNoun.length);
    oRandomWords.qualitativeAdjectives = Math.floor(Math.random() * qualitativeAdjectives.length);
    
    console.log(animateNoun.length, inanimateNoun.length, qualitativeAdjectives.length)
    console.log(oRandomWords)
    return oRandomWords;
}