# angularExperiments
A repository of angular experiments
Each experiment is associated with a branch.
##exp1
Add some unit testing of the main controller
Add gulp task to browserify unit controllerMain_test.js.
Install dev dependency angular-mocks.
Add unit test in controllerMain_test.js:
For the unit test we require in our angular module `../app/app` and `angular-mocks`
We also wrap all the controller tests inside a `describe` function passing in the name of the controller.
Using `beforeEach` we mock up our app with the `angular.mock.module` function.
We declare our controller and scope before using another `beforeEach` to run the `inject` function to add our controller and scope as dependencies for the tests.
Then we invoke `describe` two more times using the `expect` function to test the initial value of $scope.message and to test that the value of $scope.message can be changed.
##exp2
Comment out the error handler in for karma testing in gulpfile.js so that failed test do cause the watch to exit.
##exp3
Added `anothercontroller.js` and associated test to demonstrate another way to add a controller to our module. As the number of controllers increase, it would clutter up `app.js` to add controllers this way. That is why it is prefered to keep our controllers in seperate modules as we did with controllerMain.
##setup1
This branch is an experiment of a minimal bootstrap for modular development based on the common js pattern.
Use npm install of angular.
###Directories
Setup the development directories under app based on angular parts. Add a build directory called public for build and static assets. Add a sass directory for sass development. Add a test directory for test files and the browserified test file.
###Root Files
Typical gitignore, license, package.json, and this readme
`karma.conf.js` --- nothing special here except that files is set to one file 'test/testmain.js' which is to be the browserified output of all test files.
`gulpfile.js` --- gulp is configured to watch and compile sass into public/css when sass files change. watch and browserify test files and run karma tests when test files change. watch and browserify production files and update test server when production files change. Uses vinyl-source-stream to help direct browserify output.
`app/app.js` --- Central hub for the application where the angular module is created and where the browserify requires are glued together.
`controllers/controllerMain.js` --- a simple sample controller for setting up testing.
`public/index.html` --- configured for use with angular with the application taking up the entire html as opposed to a paticular area on the page. `<html ng-app="app">` Includes tags for the browserified production javascript and the compiled sass. Also contains an example of utilizing controller scope `<div ng-controller="controllerMain"><h3>{{message}}</h3></div>`
`sass/main.sass` --- trivial sass file for insuring proper compiling and placement of css.
`test/controllerMain_test.js` --- unit test example for the sample controller
##changeBundler
Replace browserify with webpack for compiling the common js files. Webpack come with additional features that will come in handy later.