Template['noteView'].helpers({
});

Template['noteView'].events({
    'keyup .note_title': function(event, template) {
        Note.save(this.id,{
            title: event.currentTarget.value,
            createdAt: new Date()
        });
        Session.update('scrollTop', true);
        Session.set('titleEdited', true);
    },

    'keyup .note_body': function(event, template) {
        var title = this.title || '';

        if (!Session.get('titleEdited') && title.length <20) {
            title = event.currentTarget.value;
        };

        Note.save(this.id,{
            title: title,
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
    },

    'click #note_back': function() {
        Router.go('list');
    }
});

Template['noteView'].onRendered(function() {
    $('textarea').elastic();

    Note.save(this.data.id,{
        newNote: false
    });

    if (this.data && this.data.title.length > 0) {
        Session.set('titleEdited', true);
    }
});