# Backend details

https://tmsdne.herokuapp.com/

## POST /api/auth/register

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

## POST /api/auth/login

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

## GET /api/users/profile

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

## PUT /api/users/profile/update

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

## DELETE /api/users/profile/delete

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

## POST /api/articles

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
