document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('birthday_form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const birthdate = new Date(document.getElementById('birthday').value);
        let gender = document.getElementById('gender').value;
        const dayOfWeek = birthdate.getDay(); 
        let akanName;
        if(gender == "select"){
        
            alert("Please Select Gender ");

        }else if (gender === 'male') {

            akanName = akanMaleName(dayOfWeek);

        } else {

            akanName = akanFemaleName(dayOfWeek);
        }

        finalResult(akanName,gender,dayOfWeek);

    });
});

function akanMaleName(dayOfWeek) {
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    return maleNames[dayOfWeek];
}

function akanFemaleName(dayOfWeek) {
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    return femaleNames[dayOfWeek];
}

function finalResult(akanName,gender,dayOfWeek) {
    const resultDiv = document.getElementById('result');
    let dayName = getDayName(dayOfWeek);
    resultDiv.innerHTML = `<p> Hello  Your gender is : <strong>${gender} !!!</strong>
    Your birth day was on  : <strong>${dayName} !!!</strong> and Your Akan name is: <strong>${akanName} !!!</strong></p>`;
}

function getDayName(dayOfWeek) {
    switch (dayOfWeek) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
 