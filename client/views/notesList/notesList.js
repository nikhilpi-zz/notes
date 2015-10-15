Template['notesList'].helpers({
    'notes': function(){
        return Note.all();
    }
});

Template['notesList'].events({

});

Template['notesList'].onRendered(function(){
    if(Session.get('scrollTop')){
        $("html, body").animate({ scrollTop: 0 }, "fast");
        Session.update('scrollTop',false);
    }
    Session.set('titleEdited', false);
})
