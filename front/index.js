$(document).ready(function() {
    // ^ prevents jQuery code from running before
    //   document is finished loading

    // hide p tag
    $('button').click(() => {
        $('#hiddenP').hide();
    });
    // can select by Element / Id / Class
    $('p:nth-child(even)').dblclick(function() {
        alert("i'm an even p element!");
        $(this).hide();
    });
    // hover alert p tag
    $('#hoverP').mouseenter(function() {
        alert("I warned you this would happen! Have a nice day :D");
    });
});