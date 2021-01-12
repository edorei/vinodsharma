

window.onload=function(){
    console.log("Hello, welcome to vinodsharma.in")
    document.getElementById('convert').addEventListener('click', function() {
        let fromData = document.getElementById("fromData").value;
        let instruction = document.querySelector('input[name="flexRadioDefault"]:checked').value;
        convertToJoinedString(fromData, ",", instruction);
    });



    function convertToJoinedString(data, token, instruction) {
        let element = document.getElementById("toData");
        if(instruction === 'WQ'){
            element.value = data.split("\n").join()
        }else if(instruction === 'NWQ'){
            element.value = "'" + data.split("\n").join('\',\'')
            element.value = element.value+"'";
        }
        element.select();
        document.execCommand("copy");
    }  
}