//info on animation with javascript: http://www.htmlgoodies.com/beyond/javascript/article.php/3709486/How-to-Create-a-JavaScript-Animation.htm
//info on sourcing images: http://www.w3schools.com/jsref/prop_img_src.asp
//info on event reacting to mouse click: http://www.kirupa.com/html5/javascript_events.htm
//info on mouse click events (detecting mouse coordinates): http://www.kirupa.com/html5/mouse_events_in_javascript.htm

var bread_title = document.getElementById("title1");
bread_title.innerHTML = "You have some bread.";

var instruction = document.getElementById("instruction");
instruction.innerHTML = "Click on Harry the pigeon to feed him.";

//ONLY BECOMES ASSIGNED WHEN GAME OVER
var death = document.getElementById("death");

//GAME OVER MESSAGES
var game_over = ["heart failure.", "the Avian Flu.", "choking on crumbs.", "thirst.", "an existential crisis.", "low grade Wonder Bread.", "mysterious coding errors."]

//PIGEON IMAGES (SOURCES)
var pigeon1 = "http://blog.ocad.ca/wordpress/js13nm/files/2014/10/pigeon_up.png";
var pigeon2 = "http://blog.ocad.ca/wordpress/js13nm/files/2014/10/pigeon_down.png";
var pigeon3 = "http://blog.ocad.ca/wordpress/js13nm/files/2014/10/pigeon_dead.png";

//SET PIGEON IMAGE
var pigeon_image = document.getElementById("pigeon_image");
pigeon_image.src = pigeon1;

var clicks = 0

//SET RANDOM POSITION FOR PIGEON IMAGE
function random_position() {
	pigeon_image.style.top= ((Math.random() * 500) + 200) + "px";
	pigeon_image.style.left= ((Math.random() * 1000) + 150) + "px";
}

function change_image(){
	if (clicks < 10){
		clicks++;
		//TITLE DISAPPEARS AFTER 1ST CLICK
		bread_title.innerHTML = "";
		instruction.innerHTML = "";
		
		var down = setTimeout("anim_down()", 300);
		var up = setTimeout("anim_up()", 500);
		random_position();
		}
	else if (clicks === 10){
		//KILL PIGEON AFTER THIS AMOUNT OF CLICKS
		clicks++;
		pigeon_image.src = pigeon3;
		var death_msg = "Harry has died due to " + game_over[Math.round(((Math.random() * 6) + 0))];
		death.innerHTML = death_msg;
	}
};

function anim_down(){ //ANIMATES DOWN MOVEMENT
	pigeon_image.src = pigeon2;
}

function anim_up(){ //ANIMATES UP MOVEMENT
	pigeon_image.src = pigeon1;
}