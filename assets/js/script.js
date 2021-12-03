$(document).ready(() => {

    // regex variable
    var regexName = /[^a-zA-z]/g;

    // checkout first name function
    function checkName(elem, name, info) {
        var i = $(`.${name}`)
        if($(`#${name}`).val() == '') {
            var msg = `${info} field is required`;
            displayError(i, msg)
        } else if (regexName.test($(`#${name}`).val())){
            var msg = `Please enter valid ${info}`;
            displayError(i, msg);
        } else {
            displaySuccess(i)
            return elem = 1
        }
    }

    // check position function
    function checkRemains(elem, name, info) {
        var i = $(`.${name}`)
        if($(`#${name}`).val() == '') {
            var msg = `${info} field is required`;
            displayError(i, msg)
        } else {
            displaySuccess(i)
            return elem = 1
        }
    }

    // close menu function
    function close() {
        $('nav .wrapper ul').removeClass('showNav');
        $('html, body').css("overflow", "visible");
    }


    // event listeners

    // check only single checkbox function
    $('.check').click(function() {
        $('.check').not(this).prop('checked', false);
    });

    // open menu
    $('.menu').click((e) => {
        e.preventDefault()

        $('nav .wrapper ul').addClass('showNav');
        $('html, body').css("overflow", "hidden");
    })

    // close menu
    $(document).mouseup((e) => {
        var container = $("nav .wrapper ul");
        if (!container.is(e.target) && container.has(e.target).length === 0) return close()
    });
    $('.close').click(close)

    // call this function inside submit form
    function callThis() {

        var firstName = 0;
        var lastName = 0;
        var position = 0;
        var company = 0;
        var companyType = 0;
        var country = 0;
        var email = 0;
        var checkbox = 0;

        var f = checkName(firstName, 'firstName', 'First name')
        var l = checkName(lastName, 'lastName', 'Last name')
        var p = checkRemains(position, 'position', 'Position')
        var c = checkName(company, 'company', 'Company')
        var ct = checkRemains(companyType, 'companyType', 'Company type')
        var cn = checkRemains(country, 'country', 'Country')
        var e = checkRemains(email, 'email', 'Email')
        var ch = checkBox(checkbox)

        checkAll([f,l,p,c,ct,cn,e,ch])
    }

    // on newsletter form submission
    $('#newsletterForm').submit(e => {
        e.preventDefault();
        callThis();
    })

})