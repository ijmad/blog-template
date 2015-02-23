$(window).load(function() {
    $("body").removeClass("noscript");
    // $('section').removeClass('focus');
});

// $(document).ready(function() {
//     $(document).scroll(function() {
//         var scrollTop = $(document).scrollTop();
//
//         if (scrollTop > 150) {
//             $('header.expanded').switchClass('expanded', 'collapsed', 350);
//         }
//         else {
//             $('header.collapsed').switchClass('collapsed', 'expanded', 350);
//         }
//
//         // $('article').each(function(i) {
//         //     // is the article underneath the top header?
//         //     if ($(this).offset().top < (scrollTop + $('header').outerHeight())) {
//         //         var sticky = $(this).find('.sticky');
//         //
//         //         // only go as low as the top of the h4
//         //         if ((sticky.offset().top + sticky.outerHeight()) < $(this).find('h4').offset().top) {
//         //             $(this).find('.sticky').css('top', (scrollTop + $('header').outerHeight()) - $(this).offset().top );
//         //         }
//         //         // }
//         //         // else {
//         //             // alert('boo');
//         //         // }
//         //         // $(this).children('h1').css('top', $(this).outerHeight() - $(this).children('h1').outerHeight() );
//         //     }
//         //     else {
//         //         $(this).find('.sticky').css('top', '0px');
//         //     }
//         // });
//     });
// });





var word_array = [
    {text: "Dolor", weight: 6, html: {title: "I can haz any html attribute"}},
    {text: "Sit", weight: 7},
    {text: "Amet", weight: 5},
    {text: "Will", weight: 4, link: "http://jquery.com/"},
    {text: "You", weight: 3, html: {title: "I can haz any html attribute"}},
    {text: "Save", weight: 2},
    {text: "Me", weight: 1}
];

$(function() {
  $("#cloud").jQCloud(word_array);
});
