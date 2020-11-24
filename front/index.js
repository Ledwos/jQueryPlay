$(document).ready(function() {
    // ^ prevents jQuery code from running before
    //   document is finished loading

    // hide p tag
    $('#hideBtn').click(() => {
        $('#hiddenP').hide('slow', function() {
            alert("This occured after I was hidden, an example of using a callback");
        });
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
    // slide toggle
    $('#slideMagic').click(function() {
        $('#slideTrick').slideToggle('slow');
    });
    // animate? write CSS properties in camelCase 
    // fetching text
    $("#textCopier").click(function() {
        let text = $('#textToCopy').text();
        $('#textCopier').text('I\'d also' + text.slice(4,text.length));
    });

    // form validation (the whole 'was-validated' not working as it should)
    let frm = document.getElementById('basicForm');
    // frm.addEventListener('submit', function(e) {
    //     if (frm.checkValidity() === false) {
    //         e.preventDefault();
    //     }
    //     frm.classList.add('was-validated');
    //     e.preventDefault();
    // });
    $('#basicForm').submit(function(e) {
        if (frm.checkValidity === true) {
            $('form').addClass('was-validated');
            e.preventDefault();
        }
        $('form').addClass('was-validated');
        e.preventDefault();
    })
});