window.onload = () => {
    insert = document.querySelector('.insert');
    ajaxCall('test.html', insert);
}

function ajaxCall(url, target) {
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = () => {
        if (http.readyState == 4 && http.status == 200) {
            target.innerHTML = http.responseText;
        }
    };
    http.send();
}