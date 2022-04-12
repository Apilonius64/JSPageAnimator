//Include this file in your html head tag

var links;

function insert(content){
    var insertobj = document.getElementsByTagName("body")[0];
    insertobj.innerHTML = content;
    var scripts = insertobj.getElementsByTagName("script");
    for(var i=0;i<scripts.length;i++){
        if(scripts[i].src = ""){
            eval(scripts[i].innerHTML);
        }
        else {
            var ntag = document.createElement("script");
            ntag.src = scripts[i].src;
            document.getElementsByTagName("head")[0].appendChild(ntag);
        }
    }
}

function prepare(){
    console.log('preparing ajax ...');
    links = document.getElementsByTagName('a');
    for(var i = 0;i < links.length;i++){
        if(links[i].dataset.enableajax != "off"){
            (function(){
                console.log(links[i].href);
                var buf = links[i].href;
                links[i].addEventListener('click', function(){ajax(buf)}, false);
                links[i].href = 'javascript: void(0)';
            }())
        }
    }
}
function animate(objs, duraction, state){
    for(var i=0;i<objs.length;i++){
        objs[i].style.animation = objs[i].dataset.animation + "-" + state + " " + duraction;
    }
}

function ajax(url, push_state = true){
    var url;
    var insert_at = document.getElementsByTagName("body")[0]
    var parser = new DOMParser;
    var animated_objects = document.getElementsByClassName("animated");
    animate(animated_objects, "0.4s", "out");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        insert(parser.parseFromString(this.responseText, "text/html").getElementsByTagName("body")[0].innerHTML);
        animate(animated_objects, "1s", "in");
        prepare();
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    if(push_state){
        window.history.pushState(url, url, url);
    }
}

window.onpopstate = function(event) {
    ajax(document.location.toString(), false);
};

window.onload = prepare;
