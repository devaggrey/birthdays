document.getElementById('birthday_form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("am in")

    let birthday = document.getElementById('birthday').value;
    let gender = document.getElementById('gender').value;

    if (!birthday || !gender) {
        alert('Please fill the required fields');
        return;
    }

    let date = new Date(birthday);
    let dayOfWeek = date.getDay();

    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


    let akanName = gender === 'male' ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    document.getElementById('result').textContent = `Your Akan name is ${akanName}`;
    
});
