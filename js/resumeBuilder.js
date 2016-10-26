var bio = {
    "name": "Sheethal",
    "role": "WebDeveloper",
    "welcomeMessage": "Welcome to my resume!",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "9629635708",
        "location": "Ooty",
        "github": "http://www.github.com/sheethal7",
        "twitter": "sheethal",
        "email": "sheethal.kappiniraj@gmail.com"
    },
    "skills": ["web developing", "communication", "oration", "programming"]
};

var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Web-developer",
        "dates": "2013 - 2015",
        "location": "Delhi",
        "description": "worked as a Web-developer for two years and built learning sites."
    }, {
        "employer": "W3 schools",
        "title": "Web-developer",
        "dates": "2011 - 2013",
        "location": "Paris",
        "description": "Developed tutorial websites for students."
    }]
};

var projects = {
    "projects": [{
        "title": "Humanoid robot",
        "dates": "2013",
        "description": "A team of four were required to code and develop a prototype for a humanoid robot.",
        "images": ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"]
    }, {
        "title": "Automated electronic toll collection system",
        "dates": "2014",
        "description": "Delay and fuel wastage at toll booths can be minimized by making toll collection automatic using wireless sensor network",
        "images": ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"]
    }]
};

var education = {
    "schools": [{
        "name": "Nehru Institute of Engineering and Technology",
        "location": "Coimbatore, India",
        "degree": "bachelor",
        "majors": ["Electronics and communication Engineering"],
        "dates": "2001 - 2005",
        "url": "http://www.nehrucolleges.com"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com/course/nd001"
    }]
};


work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle,formattedworkDates,formattedworkLocation,formattedworkDescription);
    });
};




bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};




education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName,formattedSchoolDegree,formattedSchoolLocation,formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLworkStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};



projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

work.display();
bio.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);