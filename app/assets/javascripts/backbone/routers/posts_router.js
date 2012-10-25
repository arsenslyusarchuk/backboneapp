Myapp.Routers.PostsRouter = Backbone.Router.extend({
    routes: {
       "new"      : "newPost",
       ":id/edit" : "edit",
       ":id"      : "show",
       ".*"       : "index" 
    },

    initialize: function(options) {
        this.posts = new Myapp.Collections.PostsCollection({
          el: $("#posts")
        });
        return this.posts.reset(options.posts);
    },

    newPost: function() {
        this.view = new Myapp.Views.Posts.NewView({collection: this.posts});
        return $("#new_post").html(this.view.render().el);
    },

    index: function() {
        this.view = new Myapp.Views.Posts.IndexView({posts: this.posts});
        $("#posts").html(this.view.render().el);
        $("#new_post").html(this.view.render());
        $("#edit_post").html(this.view.render());
    },

    show: function(id) {
        var post;
        post = this.posts.get(id);
        this.view = new Myapp.Views.Posts.ShowView({model: post});
        return $("#posts").html(this.view.render().el);
    },

    edit: function(id) {
        var post;
        post = this.posts.get(id);
        this.view = new Myapp.Views.Posts.EditView({model: post});
        $("#edit_post").html(this.view.render().el);
    }
});


