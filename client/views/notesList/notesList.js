Template['notesList'].helpers({
    'notes': function(){
        var notes = Session.get('notes');
        var favs = notes.filter(function(note){return note.bookmark});
        var notes = notes.filter(function(note){return  !note.bookmark});
        favs.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        notes.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return favs.concat(notes);
    }
});

Template['notesList'].events({

});

Template['notesList'].onRendered(function(){
    if(Session.get('scrollTop')){
        $("html, body").animate({ scrollTop: 0 }, "fast");
        Session.update('scrollTop',false);
    }
    
})
