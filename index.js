function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];

var quotes = [
    ["Become a programmer, lose your brain’s virginity."],
    ["My code never has bugs, it just develops random unexpected features."],
    ["A programmer is a person who fixed a problem that you don’t know you have, in a way you don’t understand."],
    ["If at first you don’t succeed, you must be programmer."],
    ["Programming is like sex. One mistake and you have to support it for the rest of your life."],
    ["Life would be much easier if I had the source code."],
    ["If God is a programmer then there is no confusion Devil is a hacker."],
    ["Once you start programming, you no longer have a life."],
    ["Eat, Sleep, Code, Repeat."],
    ["There’s no place like 127.0.0.1"],
    ["Being a good programmer is 3% talent & 97% not being distracted by the internet."],
    ["My code doesn’t always work, but when it does I don’t know why."],
    ["God is real unless declared as integer."],
    ["If you want to treat women as objects, do it with class."],
    ["I know H.T.M.L (How to Meet Ladies)."],
    ["Programming is thinking, not typing."],
    ["I am a programmer, my job is to make you jobless."],
    ["The only people up at 3am are either in love, lonely, drunk or programmer."],
    ["Programmer is just a tool which transforms caffeine into code."],
    ["Some things Man was never meant to know. For everything else, there’s Google."],
    ["Failure is not an option – it comes bundled with Windows."],
    ["Computer games don’t affect kids; I mean if Pac-Man affected us as kids, we’d all be running around in darkened rooms, munching magic pills and listening to repetitive electronic music."],
    ["Like car accidents, most hardware problems are due to driver error."],
    ["If at first you don’t succeed; call it version 1.0"],
    ["If Python is executable pseudo code, then Perl is executable line noise."],
    ["COBOL programmers understand why women hate periods."],
    ["Artificial Intelligence usually beats natural stupidity."],
    ["To err is human… to really foul up requires the root password."],
    ["Programmers are tools for converting caffeine into code."],
    ["Why do we want intelligent terminals when there are so many stupid users ?"],
    ["Crap… Someone knocked over my recycle bin… There’s icons all over my desktop…”"],
    ["Relax, its only ONES and ZEROS !"],
    ["rm -rf /bin/laden"],
    ["I don’t care if you ARE getting a PhD in it ! Get away from that damn computer and go find a woman !"],
    ["The great thing about Object Oriented code is that it can make small, simple problems look like large, complex ones."],
    ["I can’t uninstall it, there seems to be some kind of ‘Uninstall Shield’."],
    ["See daddy ? All the keys are in alphabetical order now."],
    ["Hey! It compiles! Ship it!"],
    ["u what it sounded like before you bought it."],
    ["Yo mumma is like HTML: Tiny head, huge body."],
    ["Windows Vista: It’s like upgrading from Bill Clinton to George W. Bush."],
    ["The more I C, the less I see."],
    ["Life would be so much easier if we only had the source code."],
    ["My software never has bugs. It just develops random features."],
    ["The only problem with troubleshooting is that sometimes trouble shoots back."],
    ["If brute force doesn’t solve your problems, then you aren’t using enough."],
    ["Programming is like sex, one mistake and you have to support it for the rest of your life."],
    ["Unix is user-friendly. It’s just very selective about who its friends are."],
    ["Microsoft: “You’ve got questions. We’ve got dancing paperclips."],
    ["I’m not anti-social; I’m just not user friendly"],
    ["The world is coming to an end… SAVE YOUR BUFFERS !"],
    ["If you don’t want to be replaced by a computer, don’t act like one."],
    ["Better to be a geek than an idiot."],
    ["I went to a gentleman’s cybercafe — and they offered me a ‘laptop dance’."],
    ["After Perl everything else is just assembly language."],
    ["The Internet: where men are men, women are men, and children are FBI agents."],
    ["There are 10 types of people in the world: those who understand binary, and those who don’t."],
    ["Difference between a virus and windows ? Viruses rarely fail."],
    ["Hacking is like sex. You get in, you get out, and hope that you didn’t leave something that can be traced back to you."],
    ["1f u c4n r34d th1s u r34lly n33d t0 g37 l41d"],
    ["Helpdesk: There is an icon on your computer labeled “My Computer”. Double click on it. User: What’s your computer doing on mine?"],
    ["I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing."],
    ["If debugging is the process of removing bugs, then programming must be the process of putting them in."],
    ["Computer dating is fine, if you’re a computer."],
    ["Any fool can use a computer. Many do."],
    ["Hardware: The parts of a computer system that can be kicked."],
    ["Those who can’t write programs, write help files."],
    ["You know you’re a geek when… You try to shoo a fly away from the monitor with your cursor. That just happened to me. It was scary."],
    ["Computer language design is just like a stroll in the park. Jurassic Park, that is."],
    ["To iterate is human, to recurse divine."],
    ["Walking on water and developing software from a specification are easy if both are frozen."],
    ["The sooner you start to code, the longer the program will take."],
    ["Before software can be reusable it first has to be usable."],
    ["Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else."],
    ["Life is a programe in that we most know what we have to achieve, and we most take proper decision on particular step to achieve a correct output of life"],
    ["Wrong decisions in life are like exception/error in programe, we most review the sample code to overcome with that error in next iteration of execution …."],
    ["2b || !2b? (To be or not to be it is the question. ) dialogue from “NATASAMRAT” movie"],
    ["select * from life;"],
    ["Programs are like women. No matter how much you get mad because of errors . You are always the one who is wrong!!"],
    ["Don’t try to inherit my class, You cannot handle the exception I throw."],
    ["When you code something you execute or you fail. There is no middle ground."],
    ["Programming is an art, be the artist."],
    ["There are no bugs if you don’t write any code."],
    ["They told me Java sucks, I made their lives return null."],
    ["Hey girl, without you my world is null;"],
    ["My wife asked me to open a Jar, I told her to download and install Java. My head is now hurting real bad"],
    ["Give me a <br/>"]
	];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});