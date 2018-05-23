# RecipeSaver
Full Stack Application using Node.JS, Express, MySQL, HandleBars, Materialize and a homemade ORM utilizing the MVC design pattern.

## Description

This simple full stack application utilizes a front end constructed via HTML templating (Handlebars) and the Materialize CSS library while implementing a back end made with Node.js, Express, and MySQL.

The user may add any recipe name and url where they've found the recipe online to the persistent database via an entry form.  The recipe will then be stored on the "Recipes To Try" page, where the user can either save the recipe or delete it.  If saved, the tried status in the database will be updated and the recipe will then be rendered on the saved recipes page.  If deleted, the record will no longer be shown.

## Demo

This application is hosted on heroku [here](#).

## Technologies used
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Handlebars](http://handlebarsjs.com/)
- [Body-Parser NPM Package](https://www.npmjs.com/package/body-parser)
- [Express NPM Package](https://www.npmjs.com/package/express)
- [Handlebars NPM Package](https://www.npmjs.com/package/handlebars)
- [Express-Handlebars NPM Package](https://www.npmjs.com/package/express-handlebars)
- [Materialize CSS Library](https://materializecss.com/)

## Prerequisites

- Node.js - Download the latest version of [Node](https://nodejs.org/en/)

## Installation

To run the application locally, first clone this repository with the following command.
  
	`git clone git@github.com:JoeWrightNC/RecipeSaver.git`
	
Next, install the application dependencies.

	`cd RecipeSaver
	npm i`

Create a database at 127.0.0.1 and use the following files to build the recipe_db.

	`schema.sql
	seeds.sql`
	
Finally, run the node server locally.

	`node server.js`
	
Now, open the local application on port 8080 at the URL: `http://localhost:8080/`.