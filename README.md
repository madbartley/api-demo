# api-demo
A quick demonstration of state vs APIs, and the different types of "post" requests

This repository was built as a demonstration of some core topics for a software engineering project for CSC 4110; I built it as an example for my group members to see how DjangoREST and React's Axios APIs worked together with frontend state to populate job listings for our class project so that they could build out the full job listing feature/page. The code was built to show off several features:
  1) How can we use the "inspect" tool in a browser to see different get/post status messages (ie 304, 400, etc)
  2) How can we use the "inspect" tool to see what information has been loaded into the page, even when it's not displaying (ie the state is set not to show it)
  3) Why state is important - the page will make the POST request as soon as the user clicks "accept job", but that job will still show on the screen as available
     because we will not be making any GET requests unless the page is reloaded - thus, we use state to "hide" jobs from the screen when they are accepted
  4) How to use different types of Axios POST requests and how to set up Django's views to accept these different types
     *for instance, when using a PUT request, we must feed ALL of the expected data to the database, even if only some items changed
     *when using a PATCH request, we are able to ONLY send the fields that we want to update

If you would like to download these files and run this webpage, you will need the following libraries installed:

-django
-django rest framework
-cors headers
-axios
-node and npm (if you don't already have them, but you probably do)
*Remember to create a new virtual environment 

Next, in a new terminal, navigate to the first "project" folder and activate Django by entering "py manage.py runserver"
In a new terminal, while Django is still running, navigate to the main "front" folder and enter "npm start"
*** NOTE: because this is a tutorial, we haven't set up the view for Django's index page, so you will see a 404 error when you view that page in the browser - this is expected, and not an indication that anything is wrong! For the same reason, you will see only a blank white page when you navigate to React's browser until you go to the URL specified in the following step:

With both the React and Django project running, navigate in the browser to the page that has React's port and go to the following URL: http://localhost:3000/path/jobs/

Now, you can play around with the state and the POST requests! Click "accept" on some of the jobs and watch them disappear from the screen - when you press "refresh", these jobs will not repopulate on the screen. When you want to reset all of the jobs in the database to be "available", click the button at the top - but remember, there is no state on that button, so you will need to refresh the entire page to see the jobs come back. 

Feel free to reach out to me at he9169@wayne.edu with any questions about this code! Thanks!
