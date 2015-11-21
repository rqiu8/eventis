Router.configure({
    layoutTemplate: 'main'
});

Router.route('/',{
    name: 'home',
    template: 'home'
});
Router.route('/browse/:tag',{
    template: 'tagView',
    data: function(){
        var currentTag = this.params.tag;
        Session.set('fparam',[currentTag])
        return currentTag;
    }
});