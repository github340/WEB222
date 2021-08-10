var errorCount = 0;

function checkAll() {

    const form = document.forms["signup"];

    const fname = form["fname"].value;
    const lname = form["lname"].value;
    const password = form["password"].value;
    const password2 = form["password2"].value;
    const username = form["username"].value;
    const edu_level = form["edu_level"].value;
    const edu_status = form["edu"].value;
    const email = form["email"].value;
    const age = form["age"].value;

    console.log(fname);
    console.log(lname);
    console.log(password);
    console.log(password2);
    console.log(username);
    console.log(edu_level);
    console.log(edu_status);
    console.log(email);
    console.log(age);

    const sidePanel = document.querySelector('#side-panel');
    while(sidePanel.firstChild)
    {
        sidePanel.removeChild(sidePanel.lastChild);
    }


    let validate = true;
    errorCount = 0;

    if(password.length !== 6)
    {
        addText("Password length should be 6 characters");
        validate = false;
    }

    if(!isAlpha(password[0]))
    {
        addText("Password should start with an alphabet");
        validate = false;
    }

    if(!hasDigit(password))
    {
        addText("Password should have at least 1 digit");
        validate = false;
    }

    if(!hasUpperCase(password))
    {
        addText("Password should have at least 1 uppercase");
        validate = false;
    }
    
    if(password !== password2)
    {
        addText("Password is not match");
        validate = false;
    }

    if(!isAlpha(username[0]))
    {
        addText("not start with an alphabet");
        validate = false;
    }
    
    if (username.length < 6)
    {
        addText("less than 6 characters");
        validate = false;
    }

    if(edu_level === "0")
    {
        addText("Select your Education Level");
        validate = false;
    }

    if(age < 18 || age > 60) 
    {
        addText("Age must be in between 18-60");
        validate = false;
    }

    return false;
   
}

function isAlpha(ch) {
    const code = ch.charCodeAt();
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function addText(text) {

    if(errorCount < 5)
    {
        const sidePanel = document.querySelector('#side-panel');

        const p = document.createElement('p');
        p.innerText = text;
        sidePanel.appendChild(p);

        errorCount++;
    }

}

function hasDigit(text) {
    let count=0;
    for(let i=0; i<text.length; i++)
    {
        if(!isNaN(text[i]))
        {
            count++;
        }
    }

    return count > 0;
}

function hasUpperCase(text) {
    let count=0;
    for(let i=0; i<text.length; i++)
    {
        if(text[i] === text[i].toUpperCase())
        {
            count++;
        }
    }

    return count > 0;
}
