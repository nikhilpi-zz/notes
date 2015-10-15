Template['footer'].helpers({
});

Template['footer'].events({
    'click #note_add': function() {
        var id = Note.add({});
        Router.go('note', {id: id});
    }
});
