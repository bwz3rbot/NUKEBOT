<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=300px src="https://imgur.com/ciey6EG.jpg" alt="Project logo"></a>
</p>

<h1 align="center">Mention-X</h1>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
  - [Prerequisites](#prereq)
  - [Permissions](#perms)
  - [Setting Up Your Script App](#script_app)
  - [Environment Variables](#env_var)
- [Usage](#usage)


# About <a name = "about"></a>

This bot uses the *___MentionBot___* functionality, which allows a user to mention the bot to perform a command.


# Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

## Prerequisites <a name = "prereq"></a>

This project is built with Node.JS. Download the latest version [here](https://nodejs.org/en/download/). Now download the code from this repo and continue setting up your script app.


## Permissions <a name = "perms"></a>

This bot requires permission to post on any given sub.\
The sub must allow crossposting.\
The bot must be subscribed to every subreddit which it will be submitting a cross-post to, but will attempt to subscribe to the subreddit if not subscribed already.



## Setting Up Your Script App <a name = "script_app"></a>

You'll have to create a new account for your bot before you move any further.\
Once the account is created, log in, go to [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) to fill out the form to create a new script app.


<img src='https://i.imgur.com/yq8akJ7.png'>

## Environment Variables <a name = "env_var"></a>
-----

Now that you've set up your bot account and created a script app, it's time to download the source code and paste in your environment variables.\
Also have open reddit.com/prefs/apps as you'll need to copy & paste the items you'll find there.

<br>

__USER_AGENT__ is just a name that the server will identify your bot by. It can be whatever you want.\
__CLIENT_ID__ and __CLIENT_SECRET__ are fround in prefs/apps.\
__REDDIT_USER__ is your bots username.\
__REDDIT_PASS__ is its password.\
__DEBUG_NETWORK__ may be set to false unless any problems arise.\
__DELETE_USER__ must be the same as REDDIT_USER



```javascript
USER_AGENT='SnootyScraper'
CLIENT_ID='*****'
CLIENT_SECRET='*****'
REDDIT_USER='SnootyScraper'
REDDIT_PASS='*****'
DEBUG_NETWORK='false'
DELETE_USER='SnootyScraper'
```


    


Once these fields are completely filled out, remove <i>EXAMPLE</i> from the end of the filename.


> pw.envEXAMPLE = pw.env
_____

## Usage <a name = "usage"></a>

First install the dependencies by double-clicking __install.bat__ or running this command: `npm i`

Now you may run the bot by double-clicking __run.bat__ or running this command: `node src/bot.js`

To activate the bot on a specific submission, you must reply to the post in a top level comment and send the bot a *mention* by calling its username then passing a command. For example:

```
u/SnootyScraper !xpost
```
Just swap out the name you gave your bot and it will xpost to all of your subs!