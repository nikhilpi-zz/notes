Template['noteView'].helpers({
});

Template['noteView'].events({
    'keyup .note_title': function(event, template) {
        Note.save(this.id,{
            title: event.currentTarget.value,
            createdAt: new Date()
        });
        Session.update('scrollTop', true);
    },

    'keyup .note_body': function(event, template) {
        Note.save(this.id,{
            body: event.currentTarget.value,
            createdAt: new Date()
        });
        Session.update('scrollTop', true);
    }, 

    'click .note_bookmark': function(event, template) {
        Note.save(this.id,{
            bookmark: !this.bookmark,
            createdAt: new Date()
        });

        if (!Session.get('scrollTop') && !this.bookmark){
            Session.update('scrollTop', true);
        }
    }, 

    'click .note_delete': function(event, template) {
        if (confirm("Delete this note?")) {
            Note.remove(this.id);
            Router.go('list');
        }
    }
});

Template['noteView'].onRendered(function() {
    $('textarea').elastic();
});