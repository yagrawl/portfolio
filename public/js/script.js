function moveTimeline(scroll) {
    var scale = document.getElementById('dotted-line');
    if(scroll > 320) {
        scroll = 320;
        scale.style.strokeDashoffset = (320 - scroll).toString() + 'px';
    } else {
        scale.style.strokeDashoffset = (320 - scroll).toString() + 'px';
    }
}
