# Restaurant_Page
Sample Restaurant Page.


To Do:

Mock Up page:
1. restaurant title
2. picture
3. some copy

Second: Initial load.
1. initial page load should be it's own module (aka a js file with an export command at the end)
2. import initial page load to index.js

Third: Tabbed Browsing.
1. Put each tab in its own module
    a. each module exports a function that
        1. creates a div element
        2. adds content to that div
        3. adds style to that div
        4. appends it to that dom
2. tab-switching logic should be written in index.js
    a. event listeners for each tab
        1. wipes current content
        2. grabs correct tab module to repopulate

Fourth: if page is hosted to github pages will have to play with it
Which reminds me host it on github pages.




<body>
    <div id="content">
        <div style="text-align: center;">
            <img src="http://www.rachelrawr.com/wp-content/uploads/2015/11/vsco-photo-4-3.jpg" 
            style="height:300px;
            width:300px;
            border-radius:50%;
            border-width: 10px;
            border-style: solid;
            border-color: black;
            ">
            <h1>Betty and Bobert's Bowls n' More</h1>
            <p>We put the 'bowl' in bowl of veggies ... and more!</p>
        </div>
        <div style="align-items: center; display:flex; justify-content:center">
            <div style="background-color: lightblue; width:80%;">
                <button>Contact</button>
                <button>Menu</button>
                <button>Story</button>
            </div>
        </div>
        <div style="background-color: lightblue;
        display: flex;
        justify-content:center;
        align-items: center;
        width: 80%;
        float: center;">
        
         <p>Here there be text changes </p></div>
    </div>
    <script src="main.js"></script>
</body>

