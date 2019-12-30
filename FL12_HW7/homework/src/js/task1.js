let email, password = 1, check, passChange = true, oldPass, oldCheck, newPass, newPassCheck;
const user = 'user@gmail.com', admin = 'admin@gmail.com';

email = prompt('Write your email: ', '');

if (!email){
    alert('Canceled');
} else if (email.length < 5){
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === user || email === admin){
    password = prompt('Write your password: ', '');
} else {
    alert('I don\'t know you');
}

if (!password){
    alert('Canceled');
} else if (email === user){
    if (password !== 'UserPass'){
        alert('Wrong password');
    } else {
        check = true;
    }
} else if(email === admin){
    if (password !== 'AdminPass'){
        alert('Wrong password');
    } else {
        check = true;
    }
}

if (check){
    passChange = confirm('Do you want to change your password?');
    if (!passChange){
        alert('You have failed the change.');
    } else {
        oldPass = prompt('Write your old password: ', '');
         if (email === user){
            if (oldPass !== password){
                alert('Wrong password');
            } else {
                oldCheck = true;
            }
        } else if(email === admin){
            if (oldPass !== password){
                alert('Wrong password');
            } else {
                oldCheck = true;
            }
        }
    }
}

if (oldCheck){
    newPass = prompt('Enter new password: ', '');
    if (!newPass){
        alert('Canceled');
    } else if (newPass.length < 6){
        alert('It’s too short password. Sorry.');
    } else {
        newPassCheck = prompt('Write new password again: ', '');
        if (newPassCheck !== newPass){
            alert('You wrote the wrong password.');
        } else {
            alert('You have successfully changed your password.');
        }
    }
}
