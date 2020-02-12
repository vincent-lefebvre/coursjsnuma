$(function(){
    $('aside a').click(function(event){
        // alert('clic');

        // j'annule le clic sur le llien
        event.preventDefault();
        // console.log($(this).attr('href'));

        var monHref = $(this).attr('href');

        $('figure img').attr("src", monHref);

        //

        var monAlt = $(this).attr('title');

        $('figcaption')

    });



    
});