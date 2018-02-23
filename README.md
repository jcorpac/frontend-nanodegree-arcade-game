# Arcade Game Project

## Table of Contents

* [Project Attribution](#attribution)
* [Dependencies](#dependencies)
* [Playing the Game](#playing-the-game)
* [Running on a Local Server](#running-on-a-local-server)

## Project Attribution

This project is an extension of a [starter project](https://github.com/udacity/frontend-nanodegree-arcade-game) provided by Udacity, as part of their Front End Web Developer NanoDegree program. The starter project provided art assets and a game engine written in JavaScript. As a student, I used Object Oriented JavaScript to add Player, Enemy, and Star objects to the game, and created code for the objects to interact.

Source code for this project is available at `https://github.com/jcorpac/frontend-nanodegree-arcade-game`

## Dependencies

This game runs in EC5 JavaScript, and all of the files for game logic and art assets are included in the repository's code.

## Playing the Game

The game is a clone of the popular arcade game "Frogger". The screen starts with a 5x6 tile grid. The top row consists of water tiles, rows 2-4 will have stone tiles, and rows 5 and 6 are "safe" grass tiles. Enemy bugs will scroll onto the left side of the stone tiles and move left-to-right. The player's goal is to move past the bugs and reach the water without getting hit.

The player appears as a person on the center of the bottom row, and can be moved using the up, left, right, and down keys on the player's keyboard. There is also a star which appears in a random location on the board, and the player can collect by moving their character over it.

If the player is touched by one of the bugs, they are returned to the starting tile, and their character is changed. If they had collected the star, then it is returned to a random location on the game board. If the player can get to the water without being hit, then they win the game and are given the option to play again.

## Running on a Local Server
This page is designed to run in any web browser with JavaScript enabled. As such, it can be run from a folder on your local machine, or from any web server. A recommended web server for your local machine is [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en).

If your computer has the Python interpreter installed on it, you can run the page by running the command line from the project folder and entering `python -m SimpleHTTPServer 8080`. The page with the portfolio will be available at `http://localhost:8080/`.
