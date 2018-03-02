window.onload = () => {
    main = document.querySelector('main');
    header = document.querySelector('header');
    if (typeof sessionStorage.username != 'undefined') {
        display('menu.html', header, getUsername);
        display('profile.html', main, profile);        
    } else {   
        display('login.html', main);
    }
}

function display(url, target, callback) {
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.onload = () => {
        if (http.readyState == 4 && http.status == 200) {
            target.innerHTML = http.responseText;
            if (typeof callback != 'undefined') {
                callback();
            }
        }
    };
    http.send();
}

function setUsername(username) {
    document.querySelector('nav div:nth-child(2)').innerHTML = username;
}

function login(setUsername) {
    document.querySelector('form[name="login"]').onsubmit = function() {
        changeUsername(this[0].value);
        display('menu.html', header);
        return false;
    }
}

function changeUsername(value) {
    sessionStorage.setItem('username', value);
}

function profile() {
    document.querySelector('form input').value = sessionStorage.username;
    document.querySelector('form').onsubmit = function() {
        changeUsername(this[0].value);
        getUsername();
        return false;
    }
}

function getUsername() {
    document.querySelector('nav div:nth-child(2)').innerHTML = sessionStorage.username;
}