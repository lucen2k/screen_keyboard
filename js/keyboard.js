$(document).ready(function(){
    $('.softkeys1').softkeys({
        target : $('.softkeys1').data('target'),
        layout : [
            ['1','2','3','4','5','6','7','8','9','0'],
            ['a','b','c','d','e','f','g','h','i','j'],
            ['k','l','m','n','o','p','q','r','s','t'],
            ['u','v','w','x','y','z','shift','delete']
        ]
    });
    $('.softkeys2').softkeys({
        target : $('.softkeys2').data('target'),
        layout : [
            ['1','2','3','4','5','6','7','8','9','0'],
            ['a','b','c','d','e','f','g','h','i','j'],
            ['k','l','m','n','o','p','q','r','s','t'],
            ['u','v','w','x','y','z','shift','delete']
        ]
    });
});
$(function(){
    $('input[type!=hidden]:first').focus();
    $('.softkeys1').show();
    $('.softkeys2').hide();
    $('input#input-id').focus(function(){
        $('.softkeys1').show();
        $('.softkeys2').hide();
    });
    $('input#input-pw').focus(function(){
        $('.softkeys1').hide();
        $('.softkeys2').show();
    });

});