/**
* set interval to read localStorage
*/
window.setInterval("update()", 200);

var stylesheets = JSON.parse(localStorage.getItem('stylesheets'));

for (var i = 0; i <= stylesheets.length - 1; i++) {
    var linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'stylsheet');
    linkElement.setAttribute('href', stylesheets[i]);

    document.head.appendChild(linkElement);
}

/**
 * updates the notes
 */
function update() {
    var note            = document.getElementById('note');
    var curr            = document.getElementById('curr-slide');
    var next            = document.getElementById('next-slide');
    note.innerHTML      = 'NOTES:<br/>'+localStorage.getItem('notes');

    var currInner           = 'CURRENT:<br/>'+localStorage.getItem('curr_slide');
    currInner = currInner.replace("<img", "IMG");
    curr.innerHTML      = currInner;
    var nextInner       = 'NEXT:<br/>'+localStorage.getItem('next_slide');
    nextInner = nextInner.replace("<img", "IMG");
    next.innerHTML      = nextInner;
}
