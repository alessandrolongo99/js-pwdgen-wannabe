window.addEventListener("load", function () {
    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const myName = document.getElementById('myName').value;
        const lastName = document.getElementById('lastName').value;
        const color = document.getElementById('color').value;
        const randNum = 7;

        const password = myName + lastName + color + randNum;

        document.getElementById('password').innerHTML = password;
    });
});