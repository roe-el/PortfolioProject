$(document).ready(function() {

    //Displaying text after click

    $(document).on('click', ".jav-tracker", function() {
        $('.output').html("<p>Acted as team leader among four team members. I set up meetings and delegated work while also working alongside my teammates to compelete the project. We developed and presented a low cost solution for tracking the university shuttle buses that run throughout the campus and local community. I personally worked on each part of the project including: Android app programming, Arduino Uno programming, database solutions, testing, writing and editing the project report, and creating Power Points for presentations.</p>");
    });
    $(document).on('click', ".comics-plus", function() {
        $('.output').html("<p>Developed, along with my partner, an ecommerce website that allowed customers to browse products, add items to a shopping cart, and submit orders. We set up a database using MySQL to create and populate customers, payments, products, and cart tables with data.</p>");
    });
    $(document).on('click', ".udacity", function() {
        $('.output').html("<p>Courses that I have completed from Udacity: <em>How to Use Git and GithHub</em>, <em>Add Google Maps to your Android App</em>, <em>Google Location Services on Android</em>, <em>Intro to Java Programming</em>, and <em>Android Development for Beginners</em>.</p>");
    });
    $(document).on('click', ".codecademy", function() {
        $('.output').html("<p>Courses that I have completed from Codecademy: <em>HTML & CSS</em>, <em>Make a Website</em>, <em>Learn JavaScript</em>, and <em>jQuery</em>.</p>");
    });
    $(document).on('click', ".freeCodeCamp", function() {
        $('.output').html("<p>I have gone through several of their challanges and tutorials on subjects such as HTML5, CSS, Bootstrap, JavaScript, jQuery, data structures, object oriented programming, APIs, Ajax, and algorithms.</p>");
    });
    $(document).on('click', ".cyberAces", function() {
        $('.output').html("<p>I viewed and completed all the tutorials offered by the site on subjects such as Linux/Windows Operating Systems, Networking and the OSI layers, and System Administration with scripting using php, bash, and Powershell.</p>");
    });
    $(document).on('click', ".acm", function() {
        $('.output').html("<p>While a member of my universities ACM chapter, I helped write and refactor code which was used to create the chapter <a href='https://www.acm-tamuk.com/' target='_blank' rel='noopener'>website</a>.</p>");
    });

});
