$(function () {
    $('aside a').click(function (event) {
        // alert('clic');

        // j'annule le clic sur le lien
        event.preventDefault();
        // console.log($(this).attr('href'));

        var monHref = $(this).attr('href');

        $('figure img').attr("src", monHref);


        // Recuperer dans une variable le alt des images vignettes puis changer le contenu de figcaption avec cette variable.


        var monAlt = $(this).attr('title');
        // console.log(monAlt);
        $('figcaption h3').html(monAlt);
    });
});