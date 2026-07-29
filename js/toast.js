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
    const animationDurationMs = 500;
    const isVisible = toast.classList.contains('show');

    if (toast.hideTimeoutId) {
        clearTimeout(toast.hideTimeoutId);
        toast.hideTimeoutId = null;
    }

    if (isVisible) {
        toast.classList.remove('show');
        toast.classList.add('hide');

        toast.hideTimeoutId = setTimeout(function() {
            toast.classList.remove('hide');
            toast.hideTimeoutId = null;
        }, animationDurationMs);
    } else {
        toast.classList.remove('hide');
        toast.classList.add('show');
    }
}

// check the visiblity of the modal every 10 seconds after loading the page
let intervalCheck = setInterval(function() {
    if (checkDatasetUploaded()) {
        toggleToast();
        clearInterval(intervalCheck);
    }
}, 10000);

