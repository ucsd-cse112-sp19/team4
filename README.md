### Build Status
[![Build Status](https://travis-ci.com/ucsd-cse112/team4.svg?token=G2KuH6bAmVeY7RpLEfsK&branch=master)](https://travis-ci.com/ucsd-cse112/team4)
[![Sauce Test Status](https://saucelabs.com/buildstatus/BartholomewTam)](https://saucelabs.com/u/BartholomewTam)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/BartholomewTam.svg)](https://saucelabs.com/u/BartholomewTam)

<img src="/team4/images/logo_new_32.png" width=200>

### iTeam

### Getting Started
  Please visit our [home page](https://ucsd-cse112.github.io/team4/team4/index.html) which shows you our beautiful iComponents family along with tutorials, documentations, and more about our components as well as how you can contribute to our projects! (PS: our home page is built purely with our components!)

### Install from NPM
  ```sh
  npm install iteam-icomponents
  ```
  After installing, the folder "node_modules/iteam-icomponents/" will be the folder containing all iComponents. Each can then be included to your webpage with:
  ```html
  <script type="text/javascript" src="node_modules/iteam-icompontents/COMPONENT_NAME/COMPONENT_NAME.js"></script>
  ```
  where `COMPONENT_NAME` is the name of the component to be included.
  
### Installing from Source
  ```sh
  git clone https://github.com/ucsd-cse112/team4.git
  ```
  After cloning, you the folder "team4/component/" will be the folder containing all iComponents. Each can then be included to your webpage with:
  ```html
  <script type="text/javascript" src="team4/compontent/COMPONENT_NAME/COMPONENT_NAME.js"></script>
  ```
  where `COMPONENT_NAME` is the name of the component to be included.
  
### Button Component
  To add our button component to your page, copy the "iteam-icomponents" folder to where your html file is located, and include `<script src="iteam-icomponets/button/button-component.js"></script>` in your html file. <br>
  See usages at the tutorials page located at [home page](https://ucsd-cse112.github.io/team4/team4/index.html).<br>
  Below is a demo of our button components:

<img src="/images/button.gif" width=500>

### Slider Component  
  To add our button component to your page, copy the "iteam-icomponents" folder to where your html file is located, and include `<script src="iteam-icomponents/slider/slider-component.js"></script>` in your html file.<br>
  Our slider component is ported from [Element.io](https://element.eleme.io/#/en-US/component/slider). Users can define the initial value, the min/max values, and the boostrap theme by simply changing the attribute values of the tag. <br>
  See usages at the tutorials page located at [home page](https://ucsd-cse112.github.io/team4/team4/index.html).<br>
  Below is a quick demo:

<img src="/images/slider_demo.gif" width=500>

### Cascader Component
  To add our cascader component to your page, copy the "iteam-icomponents" folder to where your html file is located, and include `<script src="iteam-icomponents/cascader/cascader-component.js"></script>` in your html file.<br>
  See usages at the tutorials page located at [home page](https://ucsd-cse112.github.io/team4/team4/index.html).<br>
  Below is a quick demo:

<img src="/images/cascader_demo.gif" width=500>

### Link Component
  To add our link component to your page, copy the "iteam-icomponents" folder to where your html file is located, and include `<script src="iteam-icomponents/link/link-component.js"></script>` in your html file.<br>
  See usages at the tutorials page located at [home page](https://ucsd-cse112.github.io/team4/team4/index.html).<br>
  Below is a quick demo:

<img src="/images/link_demo.gif" width=500>

### Radio Component
  To add our radio component to your page, copy the "iteam-icomponents" folder to where your html file is located, and include `<script src="iteam-icomponents/radio/radio-component.js"></script>` in your html file.<br>
  See usages at the tutorials page located at [home page](https://ucsd-cse112.github.io/team4/team4/index.html).<br>
  Below is a quick demo:

<img src="/images/radio_demo.gif" width=500>

### Menu Component
  Our Menu Component provides you an easy way to include a nav bar in your website, check out our [home page](https://ucsd-cse112.github.io/team4/team4/index.html) to see how it looks!

### Onboarding
  Checkout our [Internal Documentation](https://docs.google.com/document/d/1YPPVVj0zGL9mlDcBUCZGDCyOEXh_KHbNI2EjDrWPjag/edit?usp=sharing)

### Things to keep in mind:
  Create a new branch with the name + number of the task on trello  
  For example: T1-create-hello-world-component  
  Add people to code review when creating a pull request.  
  Keep MASTER branch clean (always working)  
  Write comment whenever possible /** */   
  Make sure to run the test before commit 

### How to install locally:
  npm install
  
### How to run test locally:
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
