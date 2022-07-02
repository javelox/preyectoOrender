const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}

function sbClock() {
    var DateString = (new Date()).toString();
    self.status = DateString.substring(0, 3 + DateString.lastIndexOf(':'));
    setTimeout("sbClock()", 200);
}
window.onload = function() { sbClock(); }