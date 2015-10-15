Note = {
    save: function(id, data) {
        updateNote(id, function(note){
            _.extend(note, data);
        });
    },

    add: function(data) {
        var notes = Session.get('notes');
        var id = next_id();

        var note = {
            id: id,
            createdAt: new Date(),
            title: '',
            body: '',
            bookmark: false,
            newNote: true
        }

        _.extend(note, data);
        notes.push(note);
        Session.update('notes',notes);
        return note;
    },

    remove: function(id) {
        var notes = Session.get('notes');
        notes = notes.filter(function(note){ return note.id !== id; });
        Session.update('notes',notes);
    },

    get: function(id) {
        var notes = Session.get('notes');
        for (var i = notes.length - 1; i >= 0; i--) {
            if (notes[i].id === id) {
                return notes[i];
            }
        }; 
    },

    all: function(){
        var notes = Session.get('notes');

        notes = notes.map(function(note){
            if (note.title.length === 0 && !note.newNote) {
                note.title = moment(note.createdAt).format('MM/DD/YY');
            }
            return note;
        })

        Session.update('notes',notes);

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
}



var updateNote = function(id, updateFunction) {
    var notes = Session.get('notes');
    for (var i = notes.length - 1; i >= 0; i--) {
        if (notes[i].id === id) {
            updateFunction(notes[i]);
            break;
        }
    };
    Session.update('notes',notes);
}

var next_id = function() {
    var notes = Session.get('notes');
    return notes[notes.length-1] ? notes[notes.length-1].id + 1 :  0;
}