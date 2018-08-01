let nayan={
    lang:'hindi',
    speak:function() {
        console.log(this.lang)
    }
}

nayan.speak();

let speakFunc=bind(nayan);
speakFunc.speak();
