// JavaScript Document
// TurboTides Spinner
// @Richard Qiu

/* Elements */
var events = [];
var desc = "Happy Halloween week everyone,<br><br> And cheers to the past weekend and the magic of Bobby Dodd Football Stadium and our Jackets football team! What. A. Game. <br><br> Anyways, I wanted to check in with you guys and see how things are going, so if I stop and talk about resident conversations, don't worry its just a typical check up and to see how life is going for you all. And its super quick! <br><br>The most important thing about this email though is to tell you about the S'mores night I'm holding for our floor on Thursday at 5pm in the courtyard behind Woodruff South. Come hang out and roast some marshmallows as we celebrate the holiday and just have a good time together. I'll post a flyer to your doors here in a minute, but hopefully I'll see you guys all soon (Thursday)! <br><br>Up with the White and Gold,<br><br>Dylan Anderer ";

var initEvents = function(){
	events.push(["11/15", "All Day","Breathe the Good Air", ["help","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "5","Dolphin Diving", ["pool","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "2","S'mores Night at Woody's", ["yum","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "7","Cookie eating contest", ["baking","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "9","Floor boxing match", ["ring","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "5","Making friends", ["social","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "1","El Macho Streaking Contest", ["cool","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "8","Richard Meet and Greet", ["richard","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "3","Frisbee Game", ["disk","woodruff"], "Woodruff Residence Hall", "7", "#", "Woodruff Residence Hall"]);
events.push(["11/15", "4","Tiddlywinks Tournament", ["coinz","woodruff"], "Woodruff Residence Hall", "3", "#", "Woodruff Residence Hall"]);
}

<!-- INITIALIZATION -->
var init = function(){
	var wrapper = $("#pwrapper #pEventsWrapper");
	
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
						s += '<div id = '+e[3][j]+' class = tag >#'+e[3][j]+'</div>'
					s += '</a>'
				}
				s += '<div id = eventLocation>'+e[4]+'</div>'
				s += '<div id = eventInfo> submitted '+e[5]+' hours ago by <a href = "'+e[6]+'">'+e[7]+'</a></div>'
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
	$( "#pwrapper #pEventsWrapper #eventWrapper #event a #showMore" ).click(function() {
		var eventdiv = $(this).parent().parent();
		eventdiv.attr({
			id: "eventExpanded"
		});
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
		console.log(parent);
		$(this).parent().remove();
		
		collapse();
		return false;
	});
}

var collapse = function() {
	console.log("collapse");
	$( "#pwrapper #pEventsWrapper #eventWrapper #descriptionWrapper a #showMoreExpanded" ).click(function() {
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