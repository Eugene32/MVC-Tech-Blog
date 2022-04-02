# MVC-Tech-Blog

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

### Description:  

Used the following technologies:
- Node.js
- MySQL2 - handles information as a database
- Sequelize - Node.js ORM for MySQL2.
- Handlebars - display engine for html and server as a code refactor.
- dotenv - keeps sensitive information hidden.
- helmet - addtional security for express.js.

## TABLE OF CONTENTS:

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Demo](#demo)                                                        
* [Questions](#questions)
* [License](#license)

### Installation:    
- Fork or copy the whole directory.
- You must have MYSQL installed in your computer.
- Under console, command prompt, or terminal, change to directory where server.js is located.
- Type `npm i`.
- Go to the subdirectory /db by typing `cd /db` on your console.
- Launch SQL by typing `mysql -u root -p`.  
- Enter your mysql password.  Once successful, you will be under SQL environment.
- Type `source schema.sql`. Press 'ENTER' key.
- Type `quit`. Press 'ENTER' key.
- Create .env file on the root directory (where server.js is located).
    - The file must contain the following:
       - `DB_NAME=ecommerce_db`
       - `DB_USER= root`
       - `DB_PASSWORD='password'  <--- The "password" refers to your mysql password. `
       - `key=encryption_key  <-- "encryption_key" is your chosen decryption key.`
- Create a .gitignore file (under root directory) and must contain:
     - `node_modules`
     - `.DS_Store`
     - `.env`
- At the root directory:
    - Type `npm run seed` on the CLI or Terminal.  This will fill up your database with starting informations.
    - Type `npm start` to start under CLI or Terminal. Alternatively, should you want to make changes in the code, type `npm run dev` to run the server and be able to change the code without having to restart the server every time.


### Usage:  
- Can be used for any device.

### Contributing:  
- None

### Tests:  
- None

### Demo:  
- Heroku link:

    https://mvc-tech-blog-rey.herokuapp.com/

- Use the following to login:
    - email: `Berny@fakemail.com`
    - password: `password2`


Home page: 

![alt text][logo]

[logo]: public/demo/HomePage.png

Login page: 

![alt text][logo1]

[logo1]: public/demo/Login.png

Signup page: 

![alt text][logo]

[logo]: public/demo/Signup.png

Logged in page: 

![alt text][logo]

[logo]: public/demo/SigedIn.png

Dashboard: 

![alt text][logo]

[logo]: public/demo/Dashboard.png

Editing Post: 

![alt text][logo]

[logo]: public/demo/EditingPost.png

Commenting on Post: 

![alt text][logo]

[logo]: public/demo/Commenting.png



### Questions: 

Github:  [eugene32](https://github.com/eugene32)

Email:   [ekahiyang@gmail.com](mailto:ekahiyang@gmail.com)


### License:  
The MIT License

	Permission is hereby granted, free of charge, to any person obtaining a 
      copy of this software and associated documentation files (the "Software"), 
      to deal in the Software without restriction, including without limitation 
      the rights to use, copy, modify, merge, publish, distribute, sublicense, 
      and/or sell copies of the Software, and to permit persons to whom the Software 
      is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all 
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
      INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
      PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
      HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
      CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
      OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[MIT License link](https://opensource.org/licenses/MIT)
