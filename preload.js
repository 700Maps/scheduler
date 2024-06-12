const {ipcRenderer} = require('electron')
console.log("preload script run")

document.addEventListener("DOMContentLoaded", function() {
    if (document.title == "Scheduler") {
        document.getElementById("editor").addEventListener('click', () => {
            ipcRenderer.send("openEditor")
        })

        document.getElementById("update").addEventListener('click', () => {
            location.reload()
        })
    }

    if (document.title == "Editor") {}
})