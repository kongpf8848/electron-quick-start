// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const path = require('path')
const {app,ipcRenderer} = require('electron')
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  ipcRenderer.send("mainWindowLoaded")
  ipcRenderer.on("resultSent",function(event,result){
     let resultEl=document.getElementById("result");
     console.log(result)
     for(var i=0;i<result.length;i++){
        resultEl.innerHTML+="First Name: "+result[i].FirstName.toString()+"<br/>";
     }
   });
})
