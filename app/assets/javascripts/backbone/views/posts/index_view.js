var b;

(b = Myapp.Views).Posts || (b.Posts = {});

Myapp.Views.Posts.IndexView = Backbone.View.extend({
	template: JST["backbone/templates/posts/index"],

	events: {
		"submit #new-post": "render"	
	},

	initialize: function() {
		this.options.posts.bind('reset', this.addAll);
	},

	addAll: function() {
		this.options.posts.each(this.addOne);
	},
	
	addOne: function(post) {
		var view;
    	view = new Myapp.Views.Posts.PostView({model: post});
    	this.$("tbody").append(view.render().el);
	},

	render: function() {
		$(this.el).html(this.template({posts: this.options.posts.toJSON()}));
    	 this.addAll();
    	 return this;
	}

    
});