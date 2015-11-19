var bio = {
	"name": "Rose Tremlett",
	"role": "Web, graphics and text services",
	"contact": {
		"mobile": "+49 555 5555555",
		"email": "ampelfrau@gutenmorgenberlin.com",
		"github": "Rosebudlia",
		"linkedin": "https://www.linkedin.com/pub/rosemary-tremlett/87/ab4/729",
		"gplus": "https://plus.google.com/u/0/108965803952852915317/posts",
		"twitter": "@GutenMoBerlin",
		"twitterURL": "https://twitter.com/gutenmoberlin",
		"fb": "https://www.facebook.com/rosie.tremlett",
		"location": "Berlin, DE"
	},
	"welcomeMessage": "'From front-end web dev to first-rate copy, I'm here to help with the build and content of your website!'",
	"biopic": "images/me.svg",
	"skills": ["front-end web development", "javascript", "graphic design", "writing (journalistic and for SEO)", "project management", "fluent German", "editing"],
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMob = HTMLmobile.replace("%data%", bio.contact.mobile);
		var formattedMail = HTMLemail.replace("%data%", bio.contact.email);
		var formattedGit = HTMLgithub.replace("%data%", bio.contact.github);
		var formattedTwit = HTMLtwitter.replace("%data%", bio.contact.twitter);
		var formattedLoc = HTMLlocation.replace("%data%", bio.contact.location);

		var biopic = HTMLbioPic.replace("%data%", bio.biopic);
		var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var skills = HTMLskills.replace("%data%", bio.skills);

		var mailicon = HTMLmailicon.replace("%data%", bio.contact.email);
		var twiticon = HTMLtwit.replace("%data%", bio.contact.twitterURL);
		var linkedicon = HTMLlinked.replace("%data%", bio.contact.linkedin);
		var fbicon = HTMLfb.replace("%data%", bio.contact.fb);
		var gicon = HTMLgplus.replace("%data%", bio.contact.gplus);

		$("#topContacts").append(formattedMob + formattedMail + formattedGit + formattedTwit + formattedLoc);

		$("#header").append(formattedName + formattedRole + biopic + welcome + HTMLskillsStart);

		$("#floating-menu").append(mailicon + twiticon + linkedicon + fbicon + gicon);

		var l = bio.skills.length;

		for (var i = 0; i < l; i++) {

			if (bio.hasOwnProperty("skills")) {

				var skillz = HTMLskills.replace("%data%", bio.skills[i]);

				$("#skills").append(skillz);
			}


		}
	}
};

var education = {
	"schools": [{
		"school": "Oxford Uni",
		"location": "Oxford",
		"qualification": "BA + MA Oxon",
		"subject": "English Literature & German Dual Honours",
		"dates": 2012,
		"url": "http://www.ox.ac.uk/"
	}, {
		"school": "Cimdata",
		"location": "Berlin",
		"qualification": "Further Education Certificate",
		"subject": "Web design, basic and advanced",
		"dates": 2015,
		"url": "http://www.cimdata.de/"
	}],
	"onlineCourses": [{
		"title": "Nanodegree Front-end web dev",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/",

	}, {
		"title": "HTML, CSS and Javascript",
		"school": "Codecademy",
		"dates": 2015,
		"url": "https://www.codecademy.com/",

	}],
	display: function() {

		var l = education.schools.length;
		for (var i = 0; i < l; i++) {

			if (education.hasOwnProperty("schools")) {

				var formattedSch = HTMLschoolName.replace("%data%", education.schools[i].school);
				var formattedDeg = HTMLschoolDegree.replace("%data%", education.schools[i].qualification);
				var formattedDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
				var formattedMaj = HTMLschoolMajor.replace("%data%", education.schools[i].subject);

				$("#education").append(HTMLschoolStart);

				$(".education-entry:last").append(formattedSch + formattedDeg + formattedDate + formattedLoc + formattedMaj + HTMLdivider);
			}
		}

		$("#education").append(HTMLonlineClasses);

		var le = education.onlineCourses.length;

		for (var i = 0; i < le; i++) {
			if (education.hasOwnProperty("onlineCourses")) {
				var formattedClass = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedonlineSch = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

				$("#education").append(HTMLschoolStart);

				$(".education-entry:last").append(formattedClass + formattedonlineSch + formattedonlineDate + formattedURL + HTMLdivider);
			}
		}
	}
};

var projects = {
	"projects": [{
		"title": "Clink Noord map",
		"dates": "2015",
		"desc": "Map of Amsterdam created for Clink Noord Hostel",
		"tooltip": "Clink Noord required a map of Amsterdam to print as a free handout for their guests at their new hostel in the north of Amsterdam. The brief was to create a map in hand-drawn style with lots of personality and sketch-style images.",
		"image": ["images/print_xl.jpg", "images/print_xl_2.jpg", "images/print_xl_3.jpg"]
	}, {
		"title": "Illustrations",
		"dates": "2011-2015",
		"desc": "Illustrations for children's learning materials",
		"tooltip": "Sprachcenter Mouroum is an independent language school teaching English to children from 1 to 12 years old. They require clear and engaging images to teach the necessary vocabulary, as the kids are often too young to read.",
		"image": ["images/illu_xl.jpg", "images/illu_xl_2.jpg", "images/illu_xl_3.jpg"]
	}, {
		"title": "Charity Insider",
		"dates": "2015",
		"desc": "Collaborative project - a website which compares UK charities by efficiency of spending",
		"tooltip": "This was a personal project creating a website with a friend who had developed the JSON and AngularJS structure upon which the website is based.",
		"image": ["images/ci.png", "images/ci_2.png", "images/ci_3.png"]
	}],
	display: function() {
		for (var proj in projects.projects) {

			if (projects.hasOwnProperty("projects")) {

				$("#projects").append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
				var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[proj].desc);
				var formattedImgs = [];

				var l = projects.projects[proj].image.length;

				for (var i = 0; i < l; i++) {

					var HTML = HTMLprojectImage.replace("%data%", projects.projects[proj].image[i]).replace("%text%", projects.projects[proj].tooltip);
					formattedImgs.push(HTML);
				}

				//HTMLprojectImage.replace("%data%", projects.projects[proj].image).replace("%text%", projects.projects[proj].tooltip);

				$(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc);

				var le = formattedImgs.length;

				for (var i = 0; i < le; i++) {

					$(".project-entry:last").append(formattedImgs[i]);

				}

				$(".project-entry:last").append(HTMLdivider);
			}
		}
	}
};

var work = {
	"jobs": [{
		"employer": "SANDEMANs NEW Europe",
		"title": "Exec Assistant/Graphic Design Lead/Office Manager",
		"location": "Berlin",
		"dates": "2013-2015",
		"description": "1 year as Executive Assistant, then 1 year as Graphic Designer and Office Manager",
	}, {
		"employer": "Pearson Education",
		"title": "editor",
		"location": "Oxford",
		"dates": "2012-2013",
		"description": "Project managing and editing computer-based language courses",
	}, {
		"employer": "SCM",
		"title": "language trainer",
		"location": "Berlin",
		"dates": "2010-2011",
		"description": "Teaching English to children between 1 and 12 years of age and creating learning materials",
	}],
	display: function() {

		for (var job in work.jobs) {

			if (work.hasOwnProperty("jobs")) {

				$("#workExperience").append(HTMLworkStart);

				var formattedEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

				$(".work-entry:last").append(formattedEmp + formattedTitle + formattedDates + formattedLoc + formattedDesc + HTMLdivider);
			}

		}
	}

};

$('#floating-menu').affix({
	offset: {
		top: 420,
		bottom: function() {
			return (this.bottom = $('header').outerHeight(true));
		}
	}
});

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);

$("img").mouseenter(function() {

	if (!$(this).data("bio")) {

		var text = $(this).data("tooltip");
		var tooltip = HTMLtooltip.replace("%data%", text);

		$("#wrapper").append(tooltip);

		$(this).mousemove(function(event) {

			var x = event.pageX;
			var y = event.pageY;

			$(".hovertext").css("top", y + 5);

			$(".hovertext").css("left", x + 5);
		});


	}
})

.mouseleave(function() {

	$(".hovertext").remove();

});