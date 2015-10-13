var bio = {
	name : "Eduardo Moreno",
    role : "Web Developer",
    contacts : {
		mobile: "+58 555 555 5555",
		email: "emoreno911@gmail.com", 
		github: "emoreno911",
		twitter: "emoreno911", 
		location: "Maracay, Aragua, VE",
    },
    welcomeMessage: "Professional with a work philosophy which is based on continuous learning and exploiting the opportunities that arise from it, this creates a person with knowledge of the latest updated technologies in the area of IT who can solve problems efficiently and provide solutions that fit the requirements of a rapidly changing world.", 
    skills: ["Javascript", "CSS", "HTML", "PHP", "C#", "MySQL"],
    other: ["BackboneJS", "Laravel", "ReactJS", "Xamarin", "SASS"],
    biopic: "http://placehold.it/200x200"
};

bio.display = function(){
	HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$('#header').prepend(HTMLheaderRole);

	HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
	$('#header').prepend(HTMLheaderName);

	HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$('#header').append(HTMLbioPic);

	HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$('#topContacts').append(HTMLmobile);

	HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	$('#topContacts').append(HTMLemail);

	HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$('#topContacts').append(HTMLgithub);

	HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$('#topContacts').append(HTMLlocation);

	HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$('#header').append(HTMLwelcomeMsg);

	if(bio.skills.length > 0){
		$('#header').append(HTMLskillsStart);
		for(skill in bio.skills){
			formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$('#skills').append(formattedSkill);
		}
	}
}


var education = {
	schools: [
		{
			name: "Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional, UNEFA",
			location: "Maracay",
			degree: "Bachelor",
			major: "Telecommunications Engineer",
			dates: 2009, //(graduation date)
			url: "unefa"
		}
    ],
    onlineCourses: [
		/*{
			title: "Cisco CCNA1 (Cisco Certificate Network Academy)",
			school: "Academia local Cisco UCV. Maracay",
			date: 2007, //(date finished)
			url: "string"
		},
		{
			title: "Computación en Nube con Windows Azure",
			school: "Microsoft. Caracas",
			date: 2012, //(date finished)
			url: "string"
		},*/
		{
			title: "Applied Machine Learning (CS229a)",
			school: "Stanford University Online Course",
			date: 2011, //(date finished)
			url: "string"
		},
		{
			title: "Startup Engineering",
			school: "Stanford University Online Course",
			date: 2013, //(date finished)
			url: "string"
		}
    ]
};

education.display = function(){
	// schools
	$("#education").append(HTMLschoolStart);
	education.schools.forEach( function( element ) {    
	    var formattedSchoolandDegree = HTMLschoolName.replace("%data%", element.name) +
	      HTMLschoolDegree.replace("%data%", element.degree);
	    $(".education-entry:last").append(formattedSchoolandDegree);
	    var formattedSchoolDates = HTMLschoolDates.replace("%data%", element.dates);
	    $(".education-entry:last").append(formattedSchoolDates);
	    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", element.location);
	    $(".education-entry:last").append(formattedSchoolLocation);
	    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", element.major);
	    $(".education-entry:last").append(formattedSchoolMajor);
	});

	// online
	if( education.onlineCourses.length > 0 ) {
	    $("#education").append(HTMLonlineClasses);
	    education.onlineCourses.forEach( function( element ) {
	      $("#education").append(HTMLschoolStart);
	      var formattedOnlineTitleandSchool = HTMLonlineTitle.replace("%data%", element.title) +
	        HTMLonlineSchool.replace("%data%", element.school);
	      $(".education-entry:last").append(formattedOnlineTitleandSchool);
	      $(".education-entry:last a").attr("href", element.URL);
	      var formattedOnlineDate = HTMLonlineDates.replace("%data%", element.date);
	      $(".education-entry:last").append(formattedOnlineDate);
	    });
	}
}


var work = {
	jobs: [
		{
			employer: "MMD Management Consulting and Services", 
			title: "Web Developer", 
			location: "Caracas, Dto. Capital", 
			dates: "May 2010 - Nov 2010", //(works with a hyphen between them)
			description: "Development of web application to manage the hours worked by SAP consultants", 
		},
		{
			employer: "CPANAX C.A", 
			title: "Full Stack Developer", 
			location: "Maracay, Aragua", 
			dates: "Jan 2012 - Future", //(works with a hyphen between them)
			description: "Development of business solutions based on SaaS", 
		}
    ]
};

work.display = function(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$('.work-entry:last').append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}


var projects = {
	projects: [
		{
			title: "Amargo.co", 
			dates: "Jan 2014 - Feb 2014", //(works with a hyphen between them)
			description: "Responsive website and product catalog",
			images: ["http://placehold.it/200x200","http://placehold.it/200x200","http://placehold.it/200x200"] //array with string urls
		},
		{
			title: "Informe de Gestion 2013 Fundacion Promigas", 
			dates: "May 2014 - Jul 2014", //(works with a hyphen between them)
			description: "Fancy online presentation",
			images: ["http://placehold.it/200x200","http://placehold.it/200x200","http://placehold.it/200x200"] //array with string urls
		},
		{
			title: "Valorar.com.ve", 
			dates: "May 2015 - Jul 2015", //(works with a hyphen between them)
			description: "Responsive website",
			images: ["http://placehold.it/200x200","http://placehold.it/200x200","http://placehold.it/200x200"] //array with string urls
		}
    ]
}

projects.display = function (){
	for(project in projects.projects){
		$('#projects:last').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);
		for(img in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
			$('.project-entry:last').append(formattedImage);
		}
	}
}

//Build the resume
bio.display();
work.display();
projects.display();
education.display();