function getContent(elementId, filename) {
    console.log(elementId, filename);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById(elementId).innerHTML = xhttp.responseText;
        }    
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}
setTimeout(function() {
    getContent("content", "content.html")
}, 3000);
