function requestGet() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:8000/test-file/file.txt', false);
    req.send(null);
    if (req.status == 200){
        //console.log(req.responseText);
        document.getElementById("demo").innerHTML = req.responseText;
    }
}

function requestGetAsin() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:8000/test-file/file.txt', true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if (req.status == 200)
                document.getElementById("demo").innerHTML = req.responseText;
            else
                document.getElementById("demo").innerHTML ="Error loading page\n";
        }
    };
    req.send(null);
}