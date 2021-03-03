console.log("you.js has loaded!");


var phobias = [['Spiders', 'Aracnaphobia is the fear of spiders', 'Aracno', 'creature', 'Spiders are one of the most common fears. If you have arachnophobia, you may be too fearful to kill or trap spiders yourself. When encountering a spider you may flee or even become frozen in place. A popular theory is that humans evolved to have arachnophobia as a survival technique to help us avoid potentially dangerous insects.'],
              ['Snakes', 'Ophidiophobia is the fear of snakes', 'Ophidio', 'creature', 'People with ophidiophobia experience anxiety and/or a physical reaction when being close to or thinking about snakes. This phobia can be caused by having or hearing about negative experiences. It can also be caused by their portrayal in media. A 2013 study also found that we are evolutionarily conditioned to fear snake-like forms.'],
              ['Heights', 'Acrophobia is the fear of heights ', 'Acro', 'situational', 'Many people experience anxiety when looking down from high places. Acrophobia can extend to feelings of discomfort even when seeing a photo of a high place or thinking about something like crossing a bridge. Acrophobia can be caused by traumaitc experiences. Phobias can also develop without a clear cause, genetics and environmental factors may play a role.'],
              ['Dogs', 'Cynophobia is the fear of dogs', 'Cyno', 'creature', 'Fear of dogs is usually caused by a negative experience, especially during childhood. Fear of snakes and spiders is more prevalent, but the average person is much more likely to encounter dogs on a regular basis. This makes the phobia much worse for those who experience it. Thunder and'],
              ['Lightning', 'Astraphobia is the fear of thunder, lightning, and storms', 'Astro', 'environmental', 'Many people with astraphobia seek more shelter or protction from a storm. This may look like hiding under your bed, basement, bathroom, or closet. This phobia is very common in children and even animals too.'],
              ['Injections', 'Trypanophobia is the far of injections or needles', 'Trypano', 'thing', 'Someone who experiences trypanophobia has an extreme fear of injections or needles. This phobia is common in children. It can be caused by general anxiety, negative experiences, sensitivity to pain, and can even be connected to the fear of being restrained.'],
              ['Flying', 'Aviophobia', 'Avi', 'situational', 'People with aviophobia experience an intense fear of/disdain towards flying. People who suffer from this phobia often have physical reactions to the thought or experience of flying. This phobia may stem from related factors such as being in an enclosed space (claustrophobia), fear of crowds (agoraphobia), and/or heights (acrophobia). Social'],
              ['Situations', 'Social Phobia / Anthrophobia ', 'Anthro', 'situational', 'People with Social phobia (also known as Social Anxiety Disorder) experience an irrational fear of being watched, judged, embarrassed, or humiliating themselves. It is believed that this disorder is caused by a combination of genetic and environmental factors. Social Phobia is considered to be one of the most common mental disorders. If you find that you suffer from this, there is a wide variety of therapies and medications used to treat Social Anxiety Disorder. Dirt or'],
              ['Germs', 'Mysophobia', 'Myso', 'thing', 'Someone who experiences mysophobia has a fear of dirt, germs, and contamination. If you suffer from this phobia you may experience shaking, sweating, heart palpitations, or crying when exposed to dirt or bacteria. Mysophobia is thought to be related to obsessive-compulsive disorder. If you experience either, it is important to consult with a mental health professional.'],
              ['Clowns', 'Coulrophobia', 'Coulro', 'creature', 'The fear of clowns is thought to be caused by negative personal expierces or the media portrayal of clowns in horror. Fear of clowns is prevalent in children as the exaggerated facial features and expressions create uncanny human-like figures. Confined'],
              ['Spaces', 'Claustrophobia', 'Claustro', 'situational', 'If you suffer from claustrophobia you may experience anxiety, panic attacks, difficulty breathing, or feeling like the walls are closing in on you. Claustrophobia is one of the most prevalent fears and there are a wide variety of symptoms someone can expierince in response to being enclosed in a small place like a closet, elevator, crawlspace, or even crowds. Many theorize that this phobia is caused by bad childhood experiences or an evolutionary survival mechanism. The'],
              ['Ocean', 'Thalassophobia', 'Thalasso', 'environmental', 'People who suffer from thalassophobia fear what could be lurking under the surface of vast, dark, and deep bodies of water. Common sypmtons include shortness of breath, racing heart, nausea, and a sense of imminent doom when in or near bodies of water. This is different from aquaphobia (the fear of water) and is likely caused by genetic, environmental facotrs, and/or personal experiences. Public'],
              ['Speaking', 'Glossophobia', 'Glosso', 'situational', 'The fear of public speaking is very common, most of the population experiences some anxiety when it comes of public speaking. Glossophoia is related to social phobia and stage fright. In children, it may appear as desperately hoping to not get called on to answers a question. This phobia may drive you to avoid situations where you become the focus of attention. The'],
              ['Dark', 'Nyctophobia', 'Nycto', 'environmental', 'Many people have felt a fear of the dark before in their life. Nyctophobia is not age specific fear. It is also known as scotophobia, achluophobia, and lygophobia. Fear of the dark may be evolutionary as many predators hunt at night. This fear may not be darkness itself but the unknown dangers hidden in it. People wih nyctophobia may expieircne nervousness in any darkened environment, needing to sleep with a nightlight, and physical discomfort when forced to spend time in the']];


//This is the code that takes selected fears and generates a cool unique phobia name from it!
//Written by Kai Turner.


//-------- setting up select tags with stuff from data array above
var fear1 = "#firstFear";
var fear2 = "#secondFear";
var fear3 = "#thirdFear";

$("#getFears").click(function() {runRoot()});

populate(fear1);
populate(fear2);
populate(fear3);

//fills the select tag with options from the array
function populate(location) {
  for (let i=0; i < phobias.length; i++) {
    appendOption(i, location);
  }
}
function appendOption(arrX, location) {
  let fearName = phobias[arrX][0];
  //console.log(fearName);
  $(location).append('<option value=' + arrX + '>' + fearName + '</option>'); //arrX for the value
}

//------

//runs the whole operation, called by button.
function runRoot() {
  let rootArr = getFears();
  //console.log(rootArr);
  let finalRoot = generatePhobia(rootArr);
  $("#outputP").html("Your personalized phobia is: " + finalRoot + "! Very cool.");
  //need to add additional information about each root pulled from the data arrays and put together with its own code. future add.
}

//grabs 3 fears from HTML select tag and parses them. Not future proofed :(
function getFears() {
  let firstFearID = $("#firstFear option:selected").val();
  let secondFearID = $("#secondFear option:selected").val();
  let thirdFearID = $("#thirdFear option:selected").val();

  let root1 = getRoot(firstFearID);
  let root2 = getRoot(secondFearID);
  let root3 = getRoot(thirdFearID);

  //pulls the root value for each fear from the data array, returns an array with all pulled roots, can work with any number of roots selected. (future proofed)
  function getRoot(fearID) {
    let fearInt = parseInt(fearID);
    return phobias[fearInt][2];
  }
  let returnArr = [root1,root2,root3];
  //console.log(returnArr);
  return returnArr;
}

//puts the phobia string together, takes an array of roots. future proofed!
function generatePhobia(arr) {
  let finalRoot = "";
  //console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    finalRoot += arr[i];
  }
  finalRoot += "Phobia!";
  return finalRoot;
}


//psudo code:

//display selected fears from last page.

//grab fears from whatever place.
//print fears in individual elements within a div.
//use CSS styling to make them pretty..
//Maybe use the drag and drop code to arrange them in a nice order.


//phobia string concatinator

//decare storage array which holds information about the phobia objects
//extract the latin roots from each selected fear objet, in order as specified above.
//assemble output string based on fear roots
//display output string in a P element int he output div..
