Template['notesList'].helpers({
    'notes': function(){
        return Note.all();
    }
});

Template['notesList'].events({
    'click #note_add': function() {
        $('#note_add').addClass('hidden');
        var note = Note.add({});
        Router.go('note', note);
    },
});

Template['notesRow'].events({
    'click .note_row a': function() {
        $('#note_add').addClass('hidden');
    },
});


Template['notesList'].onRendered(function(){
    if(Session.get('scrollTop')){
        $("html, body").animate({ scrollTop: 0 }, "fast");
        Session.update('scrollTop',false);
    }
    Session.set('titleEdited', false);
    $('#note_add').removeClass('hidden');
})
