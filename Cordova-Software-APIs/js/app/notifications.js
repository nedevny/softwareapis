var app = app || {};

(function(application){
    application.notifications = {
        init:function(){
            alert("initialized");
        },
        close: function(){
            alert("closed");            
        }
    };
    
}(app));