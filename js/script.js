$(document).ready(function() {

    //Displaying text after click

    $(document).on('click', ".jav-tracker", function() {
        $('.output').html("<p>Acted as team leader among four team members. I set up meetings and delegated work while also working alongside my teammates to compelete the project. We developed and presented a low cost solution for tracking the university shuttle buses that run throughout the campus and local community. <p>I personally worked on each part of the project which included: Android app and Arduino Uno programming, database solutions, testing, wrote and edited the project report, and created Power Points for presentations.");
    });
    $(document).on('click', ".comics-plus", function() {
        $('.output').html("<p>For a web dev course, my partner and I developed an ecommerce website that allowed customers to browse products, add items to a shopping cart, and submit orders. We set up a database using MySQL to create and populate customers, payments, products, and cart tables with data.");
    });
    $(document).on('click', ".udacity", function() {
        $('.output').html("<p>An online learning resource that offers courses teaching courses on development, machine learning, analytics, and more. <p>Courses that I have completed from Udacity: <em>How to Use Git and GithHub</em>, <em>Add Google Maps to your Android App</em>, <em>Google Location Services on Android</em>, <em>Intro to Java Programming</em>, and <em>Android Development for Beginners</em>.");
    });
    $(document).on('click', ".codecademy", function() {
        $('.output').html("<p>Courses cover different development technologies such as SQL, Ruby, web dev, and much more. <p>Courses that I have completed from Codecademy: <em>HTML & CSS</em>, <em>Make a Website</em>, <em>Learn JavaScript</em>, <em>Learn Sass</em>, <em>Learn SQL</em>, <em>jQuery</em>,and <em>Learn Python</em>.");
    });
    $(document).on('click', ".cybrary", function() {
        $('.output').html("<p>Cyber security learning resource that offers video courses on networking, operating systems, virtual machines, professional certifications, and computer security. <p>Courses I have completed cover topics such as subnetting, TCP/IP, network fundamentals, and MCSA.");
    });
    $(document).on('click', ".freeCodeCamp", function() {
        $('.output').html("<p>An online community and teaching program that offers guidance on learning algorithms, web dev, frameworks, data structures, and more through challanges and projects. <p>I have gone through several of their challanges and tutorials on subjects such as HTML5, CSS, Bootstrap, JavaScript, jQuery, data structures, object oriented programming, APIs, Ajax, and algorithms. Projects I have cocmpleted include building a tribute page, personal portfolio page, random quote machine, local weather viewer, wiki search page, Twitch streamer status page, JavaScript calculator, and pomodoro clock.");
    });
    $(document).on('click', ".cyberAces", function() {
        $('.output').html("<p>Offered by SANS to teach the fundamentals of cyber security, administration, operating systems, and networking. <p>I have viewed the tutorials offered by the site on subjects such as Linux/Windows operating systems, networking, the OSI model, and system administration with php, bash, and Powershell scripting.");
    });
    $(document).on('click', ".acm", function() {
        $('.output').html("<p>While a member of my universities ACM chapter, I helped write and refactor code which was used to create the chapter <a href='https://www.acm-tamuk.com/' target='_blank' rel='noopener'>website</a>.</p>");
    });

});
