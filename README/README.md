::::::::::::::::::::::::::::
::::::: 04-Code Quiz :::::::
::::::::::::::::::::::::::::

## Deployed web address 
https://kyunginlee.github.io/04-Code-Quiz/

## Project Description
Utilising learnings covered in week 4, the assignment was to create a multiple choice quiz which demonstrated javascript functionalities explored in week 4 as well as become familiar with parts of a typical coding assessment which may include multiple choice questions as part of an interview process for a developer role.

## Functionality
On the home page, when the user clicks the start button, a timer starts and they are presented with the first question. 

WHEN the user answers the question, they are presented with another question and the processbar and text above indicates how far the user has progressed, until the end of the quiz is reached, or the timer has reached 0 seconds, both ending the game and progressing to the scores page.

WHEN the user answers a question incorrectly, 2 seconds are subtracted from the clock, and when the user answers a question correctly, 4 seconds are added to the timer.

WHEN the game is over, the user can save their username and score, and play again or return to the start page.

![Alt Text](./codequiz.gif)

## Development Process

I followed the tutorial (first link in resources below- from youtube as this presented the most similarities to the quiz shown in the readme file of the homework project of week 4). 

On Completion I reviewed the miniproject completed in week 4 to begin add in the timer element. Corresponding css and javascript file were created for the below pages-
1) index.html (original page which shows the start and high scores)
2) quiz.html (main quiz)
3) endquiz.html (where user can enter username to save scores)
4) highscores.html (where user is able to review historical scores)

## Installation and usage Instructions
1) Go to https://kyunginlee.github.io/04-Code-Quiz/ and click on 'start'. 

2) Choose 1 answer for the question, until all 5 questions have been answered. 

3) Save score by typing a username and clicking 'save'.

4) On the 'Scores' page, navigate home by clicking 'Home' button.  


## Challenges / Bugs 
On finalising project, I was seeing the below in the console when browsing the project via my local repository, but did not show the message when the deployed link was used, something I will look into but on brief research it seems to be a browser imposed restriction.
****Not allowed to load local resource: file:///Users/jess/Desktop/TRILOGY/HOMEWORK/week-4/04-Code-Quiz/highscores****

There is also a split second where - when the timercount is < 0, it shows the negative number (eg.-2) before directing user to the save score page as the quiz is over because time has run out. Ideally it should not show the negative timecount at all. 

## Resources
* How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial https://www.youtube.com/watch?v=f4fB9Xg2JEY

