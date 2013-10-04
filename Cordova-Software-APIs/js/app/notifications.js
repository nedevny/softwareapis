var app = app || {};
(function(application) {    
        var alert = navigator.notification.alert;
        var confirm = navigator.notification.confirm;
        var prompt = navigator.notification.prompt;
        var beep = navigator.notification.beep;
        var vibrate = navigator.notification.vibrate;
    
        application.notifications = {
            init:function() {
            },
            close: function() {            
            },
            alert: function() {
                navigator.notification.alert("Alert!");
            },
            confirm: function() {
                navigator.notification.confirm("Alert!");
            },
            prompt:function() {
                var result = navigator.notification.prompt("Are you sure?");
                navigator.notification.alert(result);
            },
            beep: function() {
                beep(3);
            },
            vibrate: function() {
                navigator.notification.vibrate(2000);
            }
        };
    }(app));
});