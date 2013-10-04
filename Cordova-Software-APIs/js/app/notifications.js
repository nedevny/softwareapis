var app = app || {};

(function(application) {    
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