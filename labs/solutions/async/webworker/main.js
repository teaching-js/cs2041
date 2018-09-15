(function() {
    'use strict';

    const worker = new Worker('worker.js');
    const image = document.getElementById('cat');

    function getImage() {
        worker.postMessage('getImg');
    }

    function postImage({data: { url }}) {
        image.src = url;
    }

    worker.addEventListener('message', postImage);

    setInterval(getImage, 10000);

 }());
 