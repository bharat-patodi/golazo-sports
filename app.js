menuClick = () => {
    const pgBelowNav = document.getElementById('pageBelowNavbar');
    const overlay = document.getElementById('overlay');
    const menuIcon = document.getElementById('menuIcon');
    toggleClass(overlay, "show", "hide");
    toggleClass(pgBelowNav, "hide", "show");
    toggleClass(menuIcon, "change", "");
}

toggleClass = (theId, class1, class2) => {
    if (theId.className === class1) {
        theId.className = class2;
    } else {
        theId.className = class1;
    }
}

displayPopup = () => {
    // const popup = document.getElementById('popup');
    // popup.classList.toggle("show");
    // popup.innerHTML = "Hi";
}

myEventListener = (form) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message));
        for (var key of formData.entries()) {
            console.log(key);
        }
    });
}
// Script for inputting form data to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzpM1YWhYX7tctcU1vW-XulWl94sPtNwKCa65abD6eEOkZOXrA/exec';
const form01 = document.forms['submit-to-google-sheet-01'];
myEventListener(form01);
const form02 = document.forms['submit-to-google-sheet-02'];
myEventListener(form02);
console.log(form01);
console.log(form02);