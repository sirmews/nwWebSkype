var gui = require('nw.gui');
var win = gui.Window.get();
var util = require('util');
var fs = require('fs');
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
    readStylesheets();
    setStylesheet(iframe.contentDocument);
}

function setStylesheet(element){
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    element.head.appendChild(style);
    style.innerText = "#footer {display: none;}";
}

function readStylesheets(){
    var dir='./themes/';
    var css = '';
    fs.readdir(dir, function(err, files){
        if(err){
            throw err;
        }
        files.forEach(function(file){
            //console.log(util.inspect(file));
            // asynchronous event
            
            fs.readFile(dir + file, 'utf-8', function(err, data){
                if(err){
                    throw err;
                }
                console.log(util.inspect('data'));
                console.log(util.inspect(data));
                css += data;
                console.log(util.inspect('css after data'));
                console.log(util.inspect(css));
            })

            console.log(util.inspect('after read file css:'));
            console.log(util.inspect(css));
        })
        console.log(util.inspect('css at the end'));
        console.log(util.inspect(css));
    })
}
