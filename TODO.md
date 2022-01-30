# TimeInn TODOs Project DIW-DWEC

This is the TODO list for the **second and third project** for frontend subjects of DAW

Ech row describes a requirement or an extra feature for the application. Different subtasks are following each general task.

## P3 **Todo List**

### 1. General
- [x] PROJS - Tasks with GitHub Projects with labels. Also different branches are used:
  - [x] Branches for each feature as **"TONIXX - Feature title"**
  - [x] **P3** as main merge branch for new features
  - [x] **Master** as production version of the website

### 2. Forms
- [x] PAGS - Forms of logins and register
- [x] STRUCT - Forms without header and footer
- [x] FORMS - HTML distinct files

### 3. Forms characteristics

#### Login 
- [x] FIELDS
- [x] LOGIN - Redirect to home page with successfull login, message error if a field is wrong.

#### Sign up
- [x] FIELDS - Minim fields also adding lastname
- [x] RESP - Responsive forms
- [x] ACCES - Accesible forms
- [x] NAME - Minum of 2 and mximum of 20 characters
- [x] EMAIL - Validation when out of focus
- [x] VALID - Validation patrons
- [x] PASSWD - Validation when out of focus
- [x] VALID - Validation setted
- [x] EXPR - Regular expressions used
- [x] SUBMIT - Message of successfull register. Focus on the first element with error.
- [x] MODU -  Functions with modules and independent files

### 4. Technical requirements

- [x] STYLE - [DIW guide](https://docs.google.com/document/d/1XgEweoKsHu3U7dW0ieL5uvmHPCljXzoBcc3HAqEd9Ms) followed
- [x] CODE - [DWEC guide](https://docs.google.com/document/d/14XmBU8qXZmJogA8R4YJPTjL-tCHOjUC3AL2Crt5XUEo) followed
- [x] DESIG - Following criteria of class

### 5. Other
 - [x] TESTS - Mocha.js tests

### 6. Enhancements
- [x] New register information managed with local storage
- [x] Added logout option
- [x] Favicon at the page
- [x] Input border-shadow style when an error is at the E-mail or password inputs


## P2 **Todo List**

### 1. General
- [x] PROJS - Tasks with GitHub Projects with labels. Also different branches are used:
  - [x] Branches for each feature as "TONIXX - Feature title"
  - [x] Develop as main merge branch for new features
  - [x] Master as production version of the website
  
### 2. Sketch and Wireframe
 - [x] WIREF - Wireframe made with Balsamiq: [link](https://balsamiq.cloud/sfm09kg/pyncyqf/r2278)
   - [x] Folder with Wireframe screenshots

### 3. Pages
- [x] PAGS
  - [x] Front/Home page
  - [x] Events page
  - [x] Form overlay

- [x] STRUC - Insertion of header and footer with JQuery
- [x] HEAD-FOOT - Do these semantic HTML sections

#### 3.1 Front/Home page
- [x] CONT
  - [x] Header
  - [x] Nav with four web sections
  - [x] Video with autoplay
  - [x] Cards of news with: title, description, date and photo
  - [x] Cards of three events: title, photo, location, date with hour
  - [x] Calendar linked to the events page
  - [x] Footer
  
- [x] PALE
  - [x] CSS variables for colors
  - [x] Color palette specified at required document
  
- [x] WEBF - Use of two Google fonts for:
  - [x] Headings
  - [x] Other texts
  - [x] Fonts specified at required document

- [x] TOP - With scroll down, button to go to the top of the page
- [x] SUBS - 3 seconds after entering the site, a form will pop-up
  - [x] Form
  - [x] Use a cookie to know if the form has to be displayed

- [x] NEWS - store in JS an object structure to store the information
- [x] EVENTS - store in JS an object structure to store the information

#### 3.2 Events page
- [x] EVENTS - Events displayed in rows 
- [x] DOM - List created with JS
- [x] REMO - Icon of trash that will delete an event, refreshing the page
- [x] NOU - Icon of add that will open a form (overlay or modal) to add a new event

#### 3.3 Form (overlay or modal) 
- [x] OVERL - Form displayed with overlay or modal
- [x] CAMPS - Form with the required fields
- [x] DATA - Use _JQuery Data Picker_ to select the new event date
- [x] SAVE 
  - [x] Button to save the event
  - [x] If a field is missing, the event won't be saved
  - [x] All events need a random id vith value between 1 and 999.999.

### 4. CSS and Visual Requirements
- [x] GRFL - CSS Grid and Flexbox are used to create the web page
- [x] DESIG - Following criteria of the [guidelines](https://docs.google.com/document/d/1jFeR5CP9XJt_-D7DPrpodK7h5TEfot450u_ZTWHdP6o)
- [x] RESPO - Responsive version. Hamburger icon for the main menu
- [x] ICON - Using 3 icons of [FontAwesome](https://www.w3schools.com/icons/fontawesome5_intro.asp)

### 5. Technical Requirements
- [x] STYLE - [DIW guide](https://docs.google.com/document/d/1XgEweoKsHu3U7dW0ieL5uvmHPCljXzoBcc3HAqEd9Ms) followed
- [x] CODE - [DWEC guide](https://docs.google.com/document/d/14XmBU8qXZmJogA8R4YJPTjL-tCHOjUC3AL2Crt5XUEo) followed
- [x] MODU - Using modules to organize the code

### 6. Documentation
- [x] READ - Readme with:
  - [x] GitHub Project link
  - [x] Color palette and fonts
  - [x] Other webpages benchmarked

### 7. Enhancements
- [x] EDIT - When editing an event, the current values are displayed at the form
- [ ] FILTR - Filters for the event page
- [ ] GULP - Using GULP for production version
- [x] PENJA - Netifly for deployment