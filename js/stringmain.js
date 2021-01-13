

window.onload=function(){
    console.log("vinodsharma.in/ for developer by developer.")
    if(document.getElementById('convert')) {
        document.getElementById('convert').addEventListener('click', function() {
            convertToJoinedString(document.getElementById("fromData").value, ",", document.querySelector('input[name="flexRadioDefault"]:checked').value);
        });
    }
    if(document.getElementById('convertToBase64')) {
        document.getElementById('convertToBase64').addEventListener('click', function() {
            let element = document.getElementById("base64ToData");
            element.value = window.btoa(document.getElementById("base64FromData").value);
            element.select();
            document.execCommand("copy")
        });
    }   

    if(document.getElementById('convertBase64ToString')) {
        document.getElementById('convertBase64ToString').addEventListener('click', function() {
            let element = document.getElementById("base64SataToString");
            element.value = window.atob(document.getElementById("base64Data").value);
            element.select();
            document.execCommand("copy");
        });
    }  

    if(document.getElementById('taskModal')){
        var taskModal = document.getElementById('taskModal')
        taskModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget
        // Extract info from data-bs-* attributes
        var recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = taskModal.querySelector('.modal-title')
        var modalBodyInput = taskModal.querySelector('.modal-body input')

        modalTitle.textContent = 'New message to ' + recipient
        modalBodyInput.value = recipient
    })
    }

    function convertToJoinedString(data, token, instruction) {
        let element = document.getElementById("toData");
        if(instruction === 'WQ'){
            element.value = data.split("\n").join();
        }else if(instruction === 'NWQ'){
            element.value = "'" + data.split("\n").join('\',\'');
            element.value = element.value+"'";
        }
        element.select();
        document.execCommand("copy");
    }  
}