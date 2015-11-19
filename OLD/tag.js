// JavaScript Document// JavaScript Document
// TurboTides Spinner
// @Richard Qiu

/* Elements */
var events = [];
var desc = "Happy Halloween week everyone,<br><br> And cheers to the past weekend and the magic of Bobby Dodd Football Stadium and our Jackets football team! What. A. Game. <br><br> Anyways, I wanted to check in with you guys and see how things are going, so if I stop and talk about resident conversations, don't worry its just a typical check up and to see how life is going for you all. And its super quick! <br><br>The most important thing about this email though is to tell you about the S'mores night I'm holding for our floor on Thursday at 5pm in the courtyard behind Woodruff South. Come hang out and roast some marshmallows as we celebrate the holiday and just have a good time together. I'll post a flyer to your doors here in a minute, but hopefully I'll see you guys all soon (Thursday)! <br><br>Up with the White and Gold,<br><br>Dylan Anderer ";

var initEvents = function(){
events.push(["11/26", "10:00"," Thanksgiving Mic Night at the Dirty Buffalo",["thanksgiving" , "turkey" , "blackfriday"], "Dirty Buffalo", 4, "#", "Dirty Buffalo"]);
events.push(["11/26", "10:00"," Thanksgiving Turkey Fight",["thanksgiving" , "turkey" , "BYOT"], "Student Center",26, "#", "Fight Club"]);
events.push(["11/26", "6:00"," Mashed Tater Fling", ["thanksgiving" , "catapults", "raw"], "Camponile", 72, "#", "Rohun Atlury"]);
events.push(["11/26", "5:30"," Cars n Stuff Social", ["thanksgiving" , "gokart", "speed"], "Towers Green", 69, "#", "Alex Rabhan"]);
events.push(["11/26", "10:30"," Alpha Beta Phi Thanksgiving Smash", ["turn up","thanksgiving"], "Alpha Beta Phi, 1200 Ferst Drive, Atlanta, GA 12345" , "4", "#", "Tupoc"]);
events.push(["11/26", "3:00","GT Annual Thanksgiving Pillow  Fight", ["fun","thanksgiving"], "Georgia Tech,Tech Green","5", "#", "Vaun Clagett"]);
events.push(["11/26", "8:00","Black Friday Brawl", ["thanksgiving", "tradition"], "Walmart","67", "#", "Daniil Budanov"]);
events.push(["11/28", "12:30","GT vs UGA Football Game", ["THWG","football","thanksgiving"], "Bobby Dodd Stadium", "3214", "#", "Georgia Tech Football"]);
events.push(["11/28", "9:30","Tupac is Alive concert", ["tupac","thanksgiving"], "GT Ballroom", "3214", "#", "Conspiracy club"]);
events.push(["11/15", "5","S'mores Night at Woody's", ["pool","woodruff", "thanksgiving"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/28", "11:30","Tupac returns as a GT made cyborg", ["tupac","thanksgiving"], "Tech Green", "3214", "#", "Tupac"]);
events.push(["11/26", "10:00"," Thanksgiving Mic Night at the Dirty Buffalo",["thanksgiving" , "turkey" , "blackfriday"], "Dirty Buffalo", 4, "#", "Dirty Buffalo"]);
events.push(["11/26", "10:00"," Thanksgiving Turkey Fight",["thanksgiving" , "turkey" , "BYOT"], "Student Center",26, "#", "Fight Club"]);
events.push(["11/26", "6:00"," Mashed Tater Fling", ["thanksgiving" , "catapults", "raw"], "Camponile", 72, "#", "Rohun Atlury"]);
events.push(["11/26", "5:30"," Cars n Stuff Social", ["thanksgiving" , "gokart", "speed"], "Towers Green", 69, "#", "Alex Rabhan"]);
}
<!-- INITIALIZATION -->
var init = function(){
	var wrapper = $("#wrapper");
	
	var s = '';
	for (i=0; i<events.length; i++) {
		var e = events[i];
		s += '<div id = eventWrapper>'
			s += '<div id = event>'
				s += '<div id = dateWrapper>'
					s += '<div id = date>'+e[0]+'</div>'
					s += '<div id = time>'+e[1]+' PM</div>'
				s += '</div>'
				s += '<div id = eventTitle>'+e[2]+'</div>'
				for (j=0; j<e[3].length; j++){
					s += '<a href="tag.html">'
						s += '<div id = '+e[3][j]+' class = tag>#'+e[3][j]+'</div>'
					s += '</a>'
				}
				s += '<div id = eventLocation>'+e[4]+'</div>'
				s += '<div id = eventInfo> submitted '+e[5]+' hours ago by <a href = "profile.html">'+e[7]+'</a></div>'
				s += '<a href = "#">	'
					s += '<div id = showMore>'
						s += '<img src = "doubledown1.png" id = doubledown></img>'
					s += '</div>'
				s += '</a>'
			s += '</div>'
		s += '</div>'
	}
	wrapper.append(s);
}

var expand = function() {
	console.log("expand");
	$( "#wrapper #eventWrapper #event a #showMore" ).click(function() {
		var eventdiv = $(this).parent().parent();
		console.log(eventdiv.children().length);
		eventdiv.attr({
			id: "eventExpanded"
		});
		// Attending button
		var s = "";
		var x = Math.floor((Math.random() * 50) + 80);
		s+= '<a href = "#"><div id ="attending">'
			s+= '<div id = "attendingNumber"><div id = "num">'+x+'</div></div>'
			s+= '<div id = "button">Attending</div><span id = check>&#x2713</span>'
		s+= '</div></a>'
		
		eventdiv.children()[eventdiv.children().length-2].remove();
		eventdiv.append(s);
		eventdiv.append('<div id = eventInfo> submitted '+events[9][5]+' hours ago by <a href = "profile.html"'+events[9][6]+'">'+events[9][7]+'</a></div>');
		
		// Description
		var parent = eventdiv.parent();
		var s = "";
		s+= '<div id = "descriptionWrapper">'
                s+= '<div id = "eventDescription">'
                    s+= desc;
            	s+= '</div>'
                    s+= '<a href = "#">	'
                        s+= '<div id = showMoreExpanded>'
                            s+= '<img src = "doubledown1.png" id = doubledown></img>'
                        s+= '</div>'
                    s+= '</a>'
        	s+= '</div>'
		parent.append(s);
		
		var descWrapper = eventdiv.next();
		
		descWrapper.slideDown(500);
		$(this).parent().remove();
		
		collapse();
		
		$( "#wrapper #eventWrapper #eventExpanded a #attending" ).click(function() {
			$($(this).children()[2]).css("color", "#00C100");	
			return false;
		});
		return false;
	});
}

var collapse = function() {
	console.log("collapse");
	$( "#wrapper #eventWrapper #descriptionWrapper a #showMoreExpanded" ).click(function() {
			var descWrapper = $(this).parent().parent();
			console.log(descWrapper);
			
			descWrapper.slideUp(500, function(){
				var eventdiv = $(this).prev();
				eventdiv.attr({
					id: "event"
				});	
				descWrapper.remove();
				var s = '<a href="#">	<div id="showMore"><img src="doubledown1.png" id="doubledown"></div></a>';
				eventdiv.append(s);
			});
			expand();
			return false;
		});
}

var initHandlers = function() {
	
	expand();
	
	
	
}

<!-- MAIN FUNCTION -->
var main = function(){	
	initEvents();
	init();
	initHandlers();
}

$(document).ready(main);