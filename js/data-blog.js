/*
	{
		"title": "",
		"guid": "",
		"date": "",
		"text": [
			"",
			""
		]
	},
*/


// blog content
var blogContent = [
	{
		"title": "An End and a Beginning",
		"guid": "b6e49155",
		"date": "28/07/2018",
		"text": [
			"Oh my god I'm staring at CodeClan tomorrow!! It's been an emotional few weeks, I met my CodeClan cohort and said goodbye to my colleagues of the last 4 years. I'll miss them and learnt a lot from my time working along side some good people but, at the end of the day, I wasn't happy at work and since leaving I've felt happier and more excited than I have done in a long time. I thought I might have doubts or worry I'd made the wrong decision but so far everything has made me more and more sure I'm doing the right thing for me.",
			"The last 2 weeks I've been meeting up with a handful of the students on the course to go through the pre-course work together. It's been great spending time with people who are motivated to do something new and who share similar interests. For the most part we've been working through Codecademy courses on html/CSS and Ruby. I'm still not sure about Ruby, I like how readable it is but I've been getting frustrated with how many ways there are of doing the same thing. Maybe it's just me but I struggle when presented with too much choice. If I need to do something I like to know the best (or at least a good) way of doing it, with Ruby there are usually multiple possibilities with no clear way to decide which one to use. I guess this is down to my lack of experience and things will hopefully become more obvious with more practice.",
			"One of the things that has surprised me while doing the pre-course work (and while working through FreeCodeCamp) was how much I enjoyed and how interesting I found html and CSS to be. I assumed I'd just get through the basics and move on to the more <em>interesting</em> Ruby/JavaScript tutorials but I was wrong. It's very satisfying to structure a page and style it (very simply at this point). It's something I'm really looking forward to about the course, the opportunity to be exposed to things I wouldn't necessarily chose to do myself and hopefully there will be more and more pleasant surprises as I find out what parts of programming/development I enjoy and what I'll chose to do in the end.",
			"Up to this point it's been pretty simple. Lots of basic coding practice and getting used to the Mac. I can't wait to start on more in depth concepts and hopefully begin to build actual programs/applications that do something useful. I'm sure it'll be difficult and there will be times I just don't get something but that's all part of learning anything. Oddly I'm really looking forward to the problems, errors and bugs. Fixing something is a great way to lean how it works and so far this has been the only real bug I've had to deal with. How the hell did it get under the screen?!<video width='320' height='240' controls muted style='display: block; margin: auto;'><source src='/videos/bug.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
			"With the bus timetable checked, lunch prepared and this post written, it's time for an episode of Killjoys before an early night, ready for the beginning of the next phase in my life. Good night!"
		]
	},
	{
		"title": "Focus and Distractions",
		"guid": "7e932448",
		"date": "21/06/2018",
		"text": [
			"The last week or two I've had a bit of a problem with focus. I'd moved away from FreeCodeCamp and started working through The Odin Project. Shortly after FCC released a huge update to their site and courses and I was torn about what to do next. It's odd that such a simple thing threw me and I kind of lost momentum. So after a bit of flapping and being distracted by numerous other things (discussed below) I decided on a plan of action. I'm going to finish the TOP section I'm on (it covers some of the same online course as the CodeClan pre-course work) and then go back to FCC.",
			"So onto the distractions! These are by no means a bad thing and I'm glad I've been doing them but it has taken time away from coding. The first was/is learning to touch type. It's something I've wanted to do for many, many years but never seemed to get round to it. Seeing as im going to be typing an awful lot over the next 6 months (and beyond) I thought now was a good time to start. Enter <a href='https://www.typingclub.com' target='_blank'>typingclub.com!</a> I've only been using it for a few weeks now but so far it's been absolutely brilliant! The lessons are well structured, slowly adding more keys mixed in with lots of practice and little games. The statistics are also really great. You can see details about your current typing speed and accuracy, how long you've practised for and even stats on each individual finger and key. What I really like about the stats is the fact you can see your progress so clearly. It's really good motivation to see a graph of your typing speed going up!",
			"<img class='img-thumbnail' src='images/blog-typingclub1.png' alt='graph showing typingclub.com progress overview'>",
			"The other distraction was dotfiles. Dotfiles are plain text configuration files on *nix systems used for things like the shell (.zshrc) and text editors (.vimrc). One of my favourite things is being able to customise the system I'm working on, colours, backgrounds, shortcuts, etc. I've had a lot of fun tinkering, particularly with Vim and GNU Screen.",
			"<img class='img-thumbnail' src='images/blog-dotfiles1.png' alt='screenshot showing the terminal, gnu screen and vim'>",
			"You can find the dotfiles used in the above screenshot<a href='https://github.com/nimbus117/dotfiles' target='_blank'> here </a>. Vim is incredibly customisable and has a full scripting language (VimScript) you can use to pretty much get vim to do whatever you want and, for the most part, it's pretty straight forward. Screen on the other hand was a little more complicated to configure. The below line from my .screenrc for example, configures the bottom status line (hardstatus) and looks more like hieroglyphics to me than code. It was however, quite satisfying to make sense of it all.",
			"<code>hardstatus string '%{bk} %1`@%H %{Gk} %D %d %{kG}%=%-Lw%{+b bk} %n*%f %t %{-}%+Lw%=%{Gk} %M %Y %{Bk} %0c '</code>",
			"I started this saying they were distractions but in reality I've learned a lot about using Unix like systems, setup my development environment and gained lots of experience in using vim, screen, git and bash.",
			"On top of everything I also handed in my notice so things are getting a little hectic at work. Only 3 weeks to go till my last day and then only two more till I start at CodeClan. I can't wait!!"
		]
	},
	{
		"title": "Learning to Walk",
		"guid": "d324bae1",
		"date": "27/05/2018",
		"text": [
			"&quot;This could be your profession if you like solving logical problems, building useful things, and experimenting with new technologies. Web developers are in high demand, generally have a good work/life balance, and command comfortable salaries&quot;",
			"I've spent most of my first 30 days of #100DaysOfCode working through <a href='https://www.freecodecamp.org' target='_blank'>freeCodeCamp</a>. It's been fun and I've learned a lot but I'm getting a bit frustrated with the pace and feel I need a more solid understanding of the basics before moving on. I had a look around for other courses and guides and decided on the <a href='https://www.theodinproject.com' target='_blank'>The Odin Project</a> (TOP). The paragraph above is from one of the intro pages and it really appealed to me.",
			"TOP is open source and completely free! It's a mix of their own content and links to many other free resources and courses. There's also a lot of cross over with the CodeClan pre-course work which I'm hoping will help prepare me. I've only done the first few sections of the Web Development 101 course but there's two things I've really liked about it so far. First, there's such a mix of different material from different sources to read, videos to watch, online courses to do, guides to follow and most importantly it seems to be in a logical order that builds on itself. Secondly, you do a lot of the work on your actual computer. I liked the freeCodeCamp online interface, CodePen is very cool and the Codecademy courses are great but actually setting up your own computer with all the tools needed and doing it yourself is a lot more satisfying than doing it in the browser.",
			"About a week ago I decided to move away from coding on Windows and installed Ubuntu. I've nothing against windows, in fact I'm a big fan and have predominantly worked with it over my IT career. But, even at this early stage, it was pretty evident that I was better off learning on a *nix platform. I think it was the TOP installing Ruby guide that highlighted just how difficult getting some things running on Windows could be. I'll also be getting a Mac for the CodeClan course so thought it'd be good practice for then.",
			"I've used *nix systems a bit in the past. My old job gave us all MacBooks and we looked after a mix of Windows and Linux servers in AWS. That was a good few years ago and except for the odd bit here and there I've not heavily used Linux for a while. So I installed the latest Ubuntu desktop version on my laptop (dual boot with Windows 10) and spun up an Ubuntu server virtual machine in my home lab (the Sysadmin in me couldn't resist). It's been a fun week of learning and a lot has come back to me from years ago.",
			"<img class='img-thumbnail' src='images/blog-htmldog-beginner.png' alt='Screenshot showing a simple web page and the code used to create it'>",
			"As a way to force myself to do everything using the command line I decided to do all my coding on the Ubuntu server VM. From my laptop I can SSH onto the server, use screen to manage multiple windows and vim as a text editor (vimtutor is a great intro). With the help of this little python command '<code>sudo python3 -m http.server 80</code>' I can run a web server in the current directory and view the page back on my laptop."
		]
	},
	{
		"title": "First Steps",
		"guid": "3627db73",
		"date": "18/05/2018",
		"text": [
			"Hello, welcome and thanks for visiting my site. This is the beginning of a new chapter in my life and I’m excited to see where it'll take me. I've not been in a great place the last couple of years, unfulfilling work, putting other people first and generally feeling that I’m missing something. So it's time to change things.",
			"For 7 years I've worked in operations, from Support to Sysadmin with a sprinkling of DevOps. I’ve enjoyed it thoroughly and learned a lot from some very good people. There is one problem though, most of the time my job is just following instructions and I rarely get a chance to be creative. Luckily, there's one part where I can be and that's scripting! Bash, Python and PowerShell became my way to be creative at work and I always found working with them fun.",
			"I’ve spent quite a lot of my free time over the last few years learning PowerShell and used it whenever possible. Automating tasks like VM creation and configuration, creating tools to manage updates or view event logs and generally writing functions and scripts at any opportunity (I even wrote a PS module to control Kodi on my TV). This, combined with the fact I’ve always worked closely with developers, got me thinking… Am I in the wrong job?",
			"The thought kept coming back but I wasn’t sure how I could make a change. About a year ago I first heard of <a href='https://codeclan.com' target='_blank'>CodeClan</a>. I checked out the site, read about their 16 week course and thought perfect! Then I saw the cost, which would more than double when paying bills for 16 weeks without working, and knew I’d have to be very sure before committing. Time passed and I kept hearing and reading good things about the course and graduates (it turned out my company had hired quite a few). Then a couple months ago I went to one of the weekend intro sessions and it was fantastic! The instructors we’re all keen and excited about what they did and being around other people who wanted to learn was such a great environment to be in. The course was exactly what I was looking for, a way to get where I wanted to be.",
			"Still on a high from the weekend session I sent in my application. A few days later I got an email asking me to come in for an interview. I booked a slot for the next week and waited (mostly patiently) trying not to think about what I’d do if I didn’t get a place. I was pretty nervous during the interview, but Steph was brilliant and we had a good chat making sure the course was the right fit for me. There was a basic code test which was very similar to scripting languages I’d used before and I started to feel confident it was all coming together. I had some questions around payment options and employment prospects after the course and then that was that. The next day I got offered a place in cohort 24!!!",
			"Now that I’ve accepted the place, having to wait two months for the start date is proving pretty tough. Nerves and excitement are keeping me going but I’m also trying to make good use of the time. I committed to #100DaysOfCode and started working through the <a href='https://www.freecodecamp.org' target='_blank'>freeCodeCamp</a> challenges. They’ve been good fun (and challenging) but I’m beginning to feel I need some other material to broaden my basic understanding, there’s lots of free courses for me to check out. Creating and tinkering with this site has also been a great learning experience and hopefully I’ll fill it with some amazing things over the next 6 months."
		]
	}
];
