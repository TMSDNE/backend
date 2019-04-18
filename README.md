# This Market Summary Does Not Exist - backend/API


-----------------

**This Market Summary Does Not Exist** is a platform delivering you a summary of financial market activity for the given date. Think of it as the better version of CNBC reports - we deliver you the best experience of checking the market status with the machine learning generated summaries.

This Market Summary Does Not Exist was originally developed by a team of developers at [Lambda School](https://github.com/LambdaSchool).

## Table of contents

* [Demo](#demo)
* [Contributors](#contributors)
* [Technologies used and dependencies](#built-with)
* [Installation](#installation)
* [Contribution guidelines](#contribution-guidelines)
* [Endpoints description](#endpoints-description)
* [Environmental variables](#environmental-variables)
* [License](#license)

## Demo

Check out the demo of our backend/API here: [DEMO](https://tmsdne.herokuapp.com/).

## Contributors

## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<table>
	<tr>
		<td align="center">
			<a href="https://github.com/ivanahuckova">
				<img src="https://raw.githubusercontent.com/TMSDNE/user-interface/master/public/assests/images/Ivana-Huckova.png" width="128px;" alt="Ivana Huckova"/>
				<br />
				<sub>
					<b>Ivana Huckova</b>
					<p>Backend Developer</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/estrax">
				<img src="https://raw.githubusercontent.com/TMSDNE/user-interface/master/public/assests/images/Lukas-Siatka.png" width="128px;" alt="Lukas Siatka"/>
				<br />
				<sub>
					<b>Lukas Siatka</b>
					<p>Backend Developer</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/kovacova">
				<img src="https://avatars0.githubusercontent.com/u/31713047?s=460&v=4" width="128px;" alt="Tina Kovacova"/>
				<br />
				<sub>
					<b>Tina Kovacova</b>
					<p>Project Manager</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/zangell44">
				<img src="https://raw.githubusercontent.com/TMSDNE/user-interface/master/public/assests/images/Zach%20Angell.png" width="128px;" alt="Zach Angell"/>
				<br />
				<sub>
					<b>Zach Angell</b>
					<p>Data Scientist</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/zarrinan">
				<img src="https://raw.githubusercontent.com/TMSDNE/user-interface/master/public/assests/images/Zarrina-Niyazova.png" width="128px;" alt="Zarrina Niyazova"/>
				<br />
				<sub>
					<b>Zarrina Niyazova</b>
					<p>Data Scientist</p>
				</sub>
			</a>
		</td>
	</tr>
	<tr>
		<td align="center">
			<a href="https://github.com/MosesSupposes">
				<img src="https://raw.githubusercontent.com/TMSDNE/user-interface/master/public/assests/images/Moses%20Samuel.png" width="128px;" alt="Moses Samuel"/>
				<br />
				<sub>
					<b>Moses Samuel</b>
					<p>UI Developer</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/colejhudson">
				<img src="https://avatars1.githubusercontent.com/u/11510882?s=460&v=4" width="128px;" alt="Cole Hudson"/>
				<br />
				<sub>
					<b>Cole Hudson</b>
					<p>Data Scientist</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/Brandon-Pampuch">
				<img src="https://raw.githubusercontent.com/TMSDNE/user-interface/master/public/assests/images/Brandon-Pampuch.png" width="128px;" alt="Brandon Pampuch"/>
				<br />
				<sub>
					<b>Brandon Pampuch</b>
					<p>UI Developer</p>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/dpayton23">
				<img src="https://raw.githubusercontent.com/TMSDNE/user-interface/master/public/assests/images/Darien-Payton.png" width="128px;" alt="Darien Payton"/>
				<br />
				<sub>
					<b>Darien Payton</b>
					<p>Frontend Developer</p>
				</sub>
			</a>
		</td>
	</tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Built with

* JavaScript (ECMAScript 6+)
* Express.js
* Knex
* PostgreSQL DB
* Redis
* jsonwebtoken
* Axios
* Jest
* Supertest

## Dependencies

* [axios 0.18.0](https://www.npmjs.com/package/axios)
* [bcryptjs 2.4.3](https://www.npmjs.com/package/bcryptjs)
* [cors 2.8.5](https://www.npmjs.com/package/cors)
* [dotenv 7.0.0](https://www.npmjs.com/package/dotenv)
* [express 4.16.4](https://www.npmjs.com/package/express)
* [helmet 3.16.0](https://www.npmjs.com/package/helmet)
* [jsonwebtoken 8.5.1](https://www.npmjs.com/package/jsonwebtoken)
* [knex 0.16.5](https://www.npmjs.com/package/knex)
* [morgan 1.9.1](https://www.npmjs.com/package/morgan)
* [pg 7.9.0](https://www.npmjs.com/package/pg)
* [redis 2.8.0](https://www.npmjs.com/package/redis)
* [sqlite3 4.0.6](https://www.npmjs.com/package/sqlite3)
* [cross-env](https://www.npmjs.com/package/cross-env)
* [jest 24.7.1](https://www.npmjs.com/package/jest)
* [nodemon 1.18.11](https://www.npmjs.com/package/nodemon)
* [supertest 4.0.2](https://www.npmjs.com/package/supertest)

## Installation

The easiest way to get this web page up and running is to use [Heroku](https://www.heroku.com).
1. Fork the repository.
2. Set up an account at Heroku (or log in if you already have an account).
3. Click "New" and choose "Create new app".
4. Enter your App's name and choose the region
5. Connect your Github account to Heroku using the button under the **Deployment method** section.
6. Select the forked repository.
7. Add the appropriate plugins (Heroku Postgres and Heroku Redis).
8. Set up the environmental variables.
9. You are all set!

## Contribution guidelines

### Contributing to This Market Summary Does Not Exist

So, you want to contribute to this repository? You may contribute in several ways:

* Create new features
* Fix bugs
* Improve documentation and examples
* Translate any document here to your language

### Table of contents

* [Contributing to This Market Summary Does Not Exist](#contributing-to-this-market-summary-does-not-exist)
* [Developing This Market Summary Does Not Exist](#developing-this-market-summary-does-not-exist)
* [Reporting a bug](#reporting-a-bug)
* [Request a feature](#request-a-feature)
* [Commit messages](#commit-messages)
* [Code style](#code-style)

//////////### Developing This Market Summary Does Not Exist

There are several source files in the project. The main JS file is [index.js](index.js) that imports [/src/server.js](/src/server.js). You can use `yarn` as your dependency manager (of course you need to install it first).

### Reporting a bug

Use the [GitHub issue tracker](https://github.com/TMSDNE/backend/issues) to report any bug you find.

Bug description should include:

* How to reproduce the bug;
* Concise and relevant title;

It would be nice to have some code showing how to reproduce the bug - you can use [gist](https://gist.github.com) or [CodePen](https://codepen.io) for uploading your code.

### Request a feature

Use the [GitHub issue tracker](https://github.com/TMSDNE/backend/issues) to request a new feature.
Keep in mind that `This Market Summary Does Not Exist` intends to be a simple-yet-effective application.
Feel free to rewrite it using your favorite language with the framework or library of your choice (e.g. using Python with Django, Golang or Scala with Akka) in the forked repository.

### Commit messages

Commit messages should includes a GitHub reference number and an easy to understand sentence describing the work you did.

### Code style

Feel free to use the newest ECMAScript features. ES2015, ES2017, ES2018...they are all more than welcome. When adding new things, be sure to link them correctly and add the appropriate scripts if needed (e.g. babel).

## Endpoints description

### POST /api/auth/register

**Overview**

Used to register a user and ensure that user information will be saved in the server.

**Inputs**

Javascript object with:

- username (string) - username needs to be unique
- password (string) - password will be hashed

**Success Outputs**

Javascript object with:

- success message (string)

**Failure Outputs**

Javascript object with:

- failure message (string)

### POST /api/auth/login

**Overview**

Used to log in and get authentication for accessing the main functionalities of the React app.

**Inputs**

Javascript object with:

- username (string)
- password (string)

**Success Outputs**

Javascript object with:

- token (string) - used for accessing restricted endpoints.

**Failure Outputs**

Javascript object with:

- failure message (string)

### GET /api/users/profile

**This endpoint is restricted to logged in users.**

**Overview**

Route is used for to receive information about authenticated user.

**Inputs**

Header:

- token(string)

**Success Outputs**

Javascript object with the:

- username (string)
- id (number)

**Failure Outputs**

Javascript object with:

- failure message (string)

### PUT /api/users/profile/update

**This endpoint is restricted to logged in users.**

**Overview**

Route is used for to update authenticated user's information.

**Inputs**

Header:

- token(string)

Javascript object with:

- username (string)
- password (string)

**Success Outputs**

Javascript object with:

- success message (string)

**Failure Outputs**

Javascript object with:

- failure message (string)

### DELETE /api/users/profile/delete

**This endpoint is restricted to logged in users.**

**Overview**

Route is used to delete authenticated user's information.

**Inputs**

Header:

- token(string)

**Success Outputs**

Javascript object with:

- success message (string)

**Failure Outputs**

Javascript object with:

- failure message (string)

### POST /api/articles

**This endpoint is restricted to logged in users.**

**Overview**

Route is used to fetch the article for specific date by authenticated user.

**Inputs**

Header:

- token (string)

Javascript object with:

- date (string)

**Success Outputs**

Javascript object with:

- article (object) with date (string), text (string), graph_url (string)

**Failure Outputs**

Javascript object with:

- failure message (string)

## Environmental variables

Remember to set up the required environmental variables, especially when deploying on Heroku.

* `SECRET_KEY` to the secret key of your choice
* `APP_ENV` to production
* `DS_API_URL` to the URL of endpoint delivering articles
* `REDIS_URL` to the URL (with port) of Redis. The URL should look like this: `redis://127.0.0.1:6379`

## For more information

* [Lambda School](https://lambdaschool.com)

## License

[MIT License](LICENSE)