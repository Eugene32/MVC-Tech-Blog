
const signupFormHandler = async (event) => {
    event.preventDefault();
   
    const name = document.getElementById('name-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

 
    if (name && email && password) {
        console.info(name, email, password);
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    else{
        console.info('Incomplete or no inputs');
        alert('No input');
    }
};


document
    .getElementById('signup-form')
    .addEventListener('submit', signupFormHandler);