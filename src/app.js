var gui = require('nw.gui');
var win = gui.Window.get();
win.on('new-win-policy', function(frame, url, policy){
    gui.Shell.openExternal(url);
    policy.ignore();
})

// re-add mac's built in menu
if(process.platform === 'darwin'){
    var mb = new gui.Menu({
                type: 'menubar'
            });
    mb.createMacBuiltin('nwWebSkype', {
                hideEdit: false,
            });
    win.menu = mb;
}
var iframe = document.querySelector('iframe');
iframe.onload = function(){
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    iframe.contentDocument.head.appendChild(style);
    style.innerText = "#footer {display: none;}";
}
