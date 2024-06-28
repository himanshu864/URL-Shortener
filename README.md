# URL Shortener

![URL Shortener](public/images/scissor.png)

A feature-rich URL shortener application with user authentication, authorization, and administrative controls. This project is built using Node.js, Express, and MongoDB, and is securely deployed on Vercel.

## Features

- **User Authentication and Authorization**: Secure login and signup with bcrypt hashed passwords and JWT-based session management.
- **URL Shortening**: Generate and manage short URLs like bit.ly, with users having access to their own URLs and admins having access to all URLs.
- **Admin Controls**: Admin users can create new admins and have special access to view all stored URLs.
- **MongoDB Integration**: Connected to MongoDB Atlas for scalable and secure database management.
- **HTTPS and Cookie Security**: Ensures secure data transmission with HTTPS and uses secure cookies.
- **MVC Architecture**: Implements Model-View-Controller for clean, modular, and maintainable code.
- **Fully Deployed**: Deployed on Vercel for easy access and scalability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Environment Variables](#environment-variables)
- [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a .env file in the root directory and add the following variables**:

   ```bash
   SECRET_KEY=your_secret_key
   URI=your_mongodb_uri
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

## Usage

- Visit http://localhost:3000 to access the homepage.
- Users need to sign up and log in to access their dashboard.
- Admins can manage users and view all URLs.

## File Structure

```bash
.
├── app.js
├── config
│   └── connect.js
├── controllers
│   ├── login.js
│   ├── logout.js
│   ├── postUrl.js
│   ├── redirect.js
│   └── signup.js
├── LICENSE
├── middlewares
│   └── unauth.js
├── models
│   ├── urlModel.js
│   └── users.js
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── images
│   │   └── scissor.png
│   ├── scripts
│   │   └── auth.js
│   └── styles
│       ├── home.css
│       └── sign.css
├── README.md
├── routers
│   ├── admin.js
│   ├── id.js
│   ├── static.js
│   ├── url.js
│   └── user.js
├── utils
│   ├── asyncHandler.js
│   ├── tokenizer.js
│   └── verifyEmail.js
├── vercel.json
└── views
    ├── home.ejs
    ├── login.ejs
    └── signup.ejs
```

## Environment Variables

- SECRET_KEY: Secret key for JWT.
- URI: MongoDB connection URI.

## Security

- **HTTPS**: All communications are encrypted over HTTPS.
- **Secure Cookies**: JWT tokens are stored in secure cookies with an expiration of 1 hour.
- **Authentication and Authorization**: Protect routes and data with multiple layers of security.
- **Password Hashing**: User passwords are hashed using bcrypt for secure storage.
- **Environment Variables**: Critical information is stored securely using environment variables.

## Deployment

1. **Deploy on Vercel**:

   - Link your GitHub repository to Vercel.
   - Add environment variables (SECRET_KEY and URI) in Vercel project settings.
   - Deploy the project and access it via the provided Vercel URL.

2. **MongoDB Atlas**:

   - Create a MongoDB Atlas account.
   - Set up a new cluster and get the connection URI.
   - Add your IP to the whitelist in MongoDB Atlas.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
