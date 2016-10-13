function requestGet() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:8000/test-file/file.txt', false);
    req.send(null);
    if (req.status == 200){
        //console.log(req.responseText);
        document.getElementById("demo").innerHTML = req.responseText;
    }
}