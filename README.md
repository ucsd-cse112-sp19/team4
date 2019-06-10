### Build Status
[![Build Status](https://travis-ci.com/ucsd-cse112/team4.svg?token=G2KuH6bAmVeY7RpLEfsK&branch=master)](https://travis-ci.com/ucsd-cse112/team4)
[![Sauce Test Status](https://saucelabs.com/buildstatus/BartholomewTam)](https://saucelabs.com/u/BartholomewTam)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/BartholomewTam.svg)](https://saucelabs.com/u/BartholomewTam)

### How to Install
  Simply run `npm install team-a-icomponent`, you should be able to find a folder called "team-a-icomponent" in the "node_module" folder under the same directory where you ran the command.

### Button Component
  To add our button component to your page, copy the "team_a_icomponent" folder to where your html file is located, and include `<script src="team-a-icomponent/button/button-component.js"></script>` in your html file.
  Below is a demo of our button components and the codes generating them:

![Demo](/images/button.gif)
![code](/images/button_code_1.png)
![code](/images/button_code_2.png)
![code](/images/button_code_3.png)

### Slider Component  
  To add our button component to your page, copy the "team_a_icomponent" folder to where your html file is located, and include `<script src="team-a-icomponent/slider/slider-component.js"></script>` in your html file.
  Our slider component is ported from [Element.io](https://element.eleme.io/#/en-US/component/slider). Users can define the initial value, the min/max values, and the boostrap theme by simply changing the attribute values of the tag. Below is a quick demo:

![Demo](/images/slider_demo.gif)

### Onboarding

### Things to keep in mind:
  Create a new branch with the name + number of the task on trello  
  For example: T1-create-hello-world-component  
  Add people to code review when creating a pull request.  
  Keep MASTER branch clean (always working)  
  Write comment whenever possible /** */   
  Make sure to run the test before commit 

### How to install locally:
  npm install
  
### How ro run test locally:
  npm test  
  or npm run test   

### Git
  git clone https://github.com/ucsd-cse112/team4.git  
  git add .  
  git commit -m ""  
  git remote add origin https://github.com/ucsd-cse112/team4.git  
  git push -u origin master  

### Acknowledgement
  We would like to thank [Sauce Labs](https://saucelabs.com) for their support of open source projects like
  ours.
