# MVC-Tech-Blog

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

### Description:  



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
- Demo page: 

![alt text][logo]

[logo]: Assets/demo/demo-01.gif "E-commerce Back-End demo"

- Video link:  [Video: Category](https://drive.google.com/file/d/1q4l_tl_GvmR4kw3qaUc51PIPfPwQayCi/view)
- Video link:  [Video: Product](https://drive.google.com/file/d/1hqTTsaCguHt-DdhI8Zmisv2IqU8w9AHK/view)
- Video link:  [Video: Tags](https://drive.google.com/file/d/1c40iXHZ45Kkj3sPKb_8WqrphgNUqic63/view)

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
