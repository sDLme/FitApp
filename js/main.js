/**
 * Created by Marina on 27.12.2016.
 */
$ ('.list-option .text').hide().prev().on('click', function () {
    $('.list-option .text').not(this).slideUp();
    $(this).next().not(':visible').slideDown()
})