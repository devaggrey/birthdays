document.getElementById('birthday_form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("am in")

    var birthday = document.getElementById('birthday').value;
    var gender = document.getElementById('gender').value;
});
