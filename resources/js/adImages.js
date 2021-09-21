/* Dropzone imagenes */
document.Dropzone = require('dropzone');
/* Dropzone imagenes */
Dropzone.autoDiscover = false;

/* Dropzone imagenes comportamiento servidor*/

(function () {

    if (document.getElementById("drophere")) {

        let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute('content')
        let uniqueSecret = document.querySelector("input[name='uniqueSecret']").getAttribute('value')

        let myDropzone = new Dropzone('#drophere', {
            url: '/ad/images/upload',
            params: {
                _token: csrfToken,
                uniqueSecret: uniqueSecret
            }
        });
    }
})();
