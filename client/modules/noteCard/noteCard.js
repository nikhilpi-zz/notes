Template['noteCard'].helpers({
    'isEditting': function(){
        return Session.get('currentEdit') === this.id;
    }
});

Template['noteCard'].events({
    'click .note_view': function() {
        Session.set('currentEdit', this.id);
    },

    'keyup .note_edit_title': function(event, template) {
        Note.save(this.id,{
            title: event.currentTarget.value
        });
    },

    'keyup .note_edit_body': function(event, template) {
        Note.save(this.id,{
            body: event.currentTarget.value
        });
    },    
});

Template['noteCard'].onRendered(function(){

})