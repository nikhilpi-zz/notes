Template['footer'].helpers({
});

Template['footer'].events({
    'click #note_add': function() {
        var note = Note.add({});
        Router.go('note', note);
    }
});
