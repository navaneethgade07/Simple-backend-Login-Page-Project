document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(loginForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Fetch API to make an HTTP request to the /login endpoint on the server
        // HTTP request method (POST)
        try {
            
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            // storing the response that has been came from server side 
            const result = await response.json();
            
            
            // result.message which is defined in server js file
            // the content will be dispayed in the message element(i.e. paragraph)
            if (result.success == true) {
                message.textContent = result.message;
                message.style.color = 'green';

                // Reset the form after a successfull login
                loginForm.reset();

                setTimeout(()=>{
                    message.textContent = '';
                },2000);

            } else {
                message.textContent = result.message;
                message.style.color = 'red';

            }

        } catch (error) {
            console.error('Fetch error:', error);
        }
            
    });
});

