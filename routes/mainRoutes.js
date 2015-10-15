// Home Route
Router.route('/', {
  name: 'list',
  action: function () {
    this.render('notesList');
    SEO.set({ title: 'Notes - ' + Meteor.App.NAME });
  }
});

Router.route('/:id', {
  name: 'note',
  data: function(){
    return Note.get(parseInt(this.params.id));
  },
  action: function () {
    this.render('noteView');
    SEO.set({ title: 'Note - ' + Meteor.App.NAME });
  }
});

