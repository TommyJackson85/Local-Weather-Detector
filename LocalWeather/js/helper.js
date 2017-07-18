/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
 
/*1-About Section variables*/
var HTMLbioPic = '<img src=%data% alt="..." id="profilePic" class="col-xs-6" />';
var HTMLheaderName =  '<h1>%data%</h1>';
var HTMLbirth = '<h2><i>D.O.B: %data% </i></h2>';
var HTMLcurrentLocation = '<h2><i>Location: %data% </i></h2>';
var HTMLabout = '<p>%data%</p>';
/*END of About Section variables*/

/*2-Contact variables for EACH contact*/
var HTMLcontact = '<div class="contact col-lg-4 col-md-4 col-sm-4 col-xs-6"></div>';
var HTMLcontactType = '<h4>%data%</h4>';
var HTMLcontactData = '<p>%data%</p>';
/*END of Contact variables*/

/*3-Progress Bar variables*/
/*--Combine the Three Variables to create each Progress Bar*/
var HTMLbarChartData = '<div class="progress col-lg-10 col-lg-offset-1 col-md-10 col-sm-12 col-xs-12"><div class="progress-bar" role="progressbar" aria-valuenow="%data%" aria-valuemin="0" '; 
var HTMLbarChartPercentage = 'aria-valuemax="100" style="width: %data%;">';
var HTMLbarChartText = '%data%</div></div>';
/*END of Progress Bar variables*/

/*4-variables for BOTH Education and Projects.*/
/*--Starting Variables*/
var HTMLonlineEducation = '<div id="onlineEdu"><h5>Online Education</h5><ul id="onlineList"></ul></div>';
var HTMLonlineListItem = '<li class="onlineListItem"><h6>%data%</h6>';

var HTMLotherEducation = '<div id="otherEdu"><h5>Other Education</h5><ul id="otherList"></ul></div>';
var HTMLotherListItem = '<li class="otherListItem"><h6>%data%</h6>';

var HTMLprojects = '<div id="projects"><h5>Projects</h5><ul id="projectsList"></ul></div>';
var HTMLprojectsListItem = '<li class="projectListItem"><h6>%data%</h6>';

/*--Ending Variables*/
var HTMLdescription = '<p>%data%</p></li>';
var HTMLlistItemTitleDescription = '<li class="listItem"><h6>item</h6><p>description</p></li>';
var HTMLitemTitle = '<li class="listItem"><h6>title</h6></li>';
var HTMLendItem = '</li>';
/*END of variables for BOTH Education and Experience.*/

/*5-Work Experience HTML*/
var HTMLwork = '<div id="work"><h5>Work Experience</h5><ul id="workList"></ul>';
var HTMLjobRole = '<li class="jobListItem"><h6>%data%</h6></li>';
var HTMLemployerDates = '<h6><i>%data%</i></h6>';
/*END of Work Experience variables.*/

