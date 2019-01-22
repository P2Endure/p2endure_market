    var spawn = require('child_process').spawn,
    child    = spawn('C:\\EnergyPlusV9-0-1\\EP-Launch.exe', ["C:/Windows/System32/Drivers/etc/hosts"]);
    
    child.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    });
    
    child.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
    });
    
    child.on('close', function (code) {
    console.log('child process exited with code ' + code);
    });


