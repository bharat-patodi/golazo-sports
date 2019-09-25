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

displayPopupTop = () => {
    const popupTop = document.getElementById('popupTop');
    popupTop.classList.toggle("show");
}

displayPopupBottom = () => {
    const popupBottom = document.getElementById('popupBottom');
    popupBottom.classList.toggle("show");
}

popupClose = (popupType) => {
    const test = '' + popupType + '';
    console.log(test);
    document.getElementById('popup' + popupType).classList.toggle('show');
}

myEventListener = (form, func) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                console.log('Success!', response);
                if(response.status === 200) {
                    func();
                }
            })
            .catch(error => console.error('Error!', error.message));
        for (var key of formData.entries()) {
            console.log(key);
        }
    });
}
// Script for inputting form data to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbzpM1YWhYX7tctcU1vW-XulWl94sPtNwKCa65abD6eEOkZOXrA/exec';
const form01 = document.forms['submit-to-google-sheet-01'];
myEventListener(form01, displayPopupTop);
const form02 = document.forms['submit-to-google-sheet-02'];
myEventListener(form02, displayPopupBottom);