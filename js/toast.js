function checkDatasetUploaded() {
    // uses the visibility of the modal to determine if a dataset has been uploaded
    const modal = document.getElementById('myModal');
    const visible = window.getComputedStyle(modal).display !== 'none';

    if (!visible) {
        return true;
    } else {
        return false;
    }
}

function toggleToast() {
    const toast = document.getElementsByClassName('toast')[0];
    const isVisible = window.getComputedStyle(toast).display !== 'none';

    if (isVisible) {
        toast.setAttribute('style', 'display: none;');
    } else {
        toast.setAttribute('style', 'display: flex;');
    }
}

// check the visiblity of the modal every 10 seconds after loading the page
let intervalCheck = setInterval(function() {
    if (checkDatasetUploaded()) {
        toggleToast();
        clearInterval(intervalCheck);
    }
}, 10000);

