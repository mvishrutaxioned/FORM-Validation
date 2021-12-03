$(document).ready(() => {

    

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