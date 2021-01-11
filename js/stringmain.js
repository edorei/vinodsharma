

window.onload=function(){
    console.log("Hello, welcome to vinodsharma.in")
    document.getElementById('convert').addEventListener('click', function() {
        let fromData = document.getElementById("fromData").value;
        convertToJoinedString(fromData, ",");
    });



    function convertToJoinedString(data, token) {
        let element = document.getElementById("toData");
        element.value = data.split("\n").join()
        element.select();
        document.execCommand("copy");
    }  
}