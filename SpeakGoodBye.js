(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good Bye"
    bye.Speaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);