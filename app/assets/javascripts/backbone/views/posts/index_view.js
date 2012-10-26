var b;

(b = Myapp.Views).Posts || (b.Posts = {});

Myapp.Views.Posts.IndexView = Backbone.View.extend({
	template: JST["backbone/templates/posts/index"],

	events: {
		"submit #new-post": "createPost"	
	},

	initialize: function() {
		this.options.posts.bind('reset', this.render, this);
		this.options.posts.bind('reset', this.addOne, this);
	},

	addAll: function() {
		this.options.posts.each(this.addOne);
	},
	
	addOne: function(post) {
		var view;
    	view = new Myapp.Views.Posts.PostView({model: post});
    	this.$("tbody").append(view.render().el);
	},

	createPost: function(event){
		event.preventDefault();
		this.options.posts.create({title: $("#title").val() , description: $("#description").val() , checked: $("checked").val()});

	},
	render: function() {
		$(this.el).html(this.template());
    	 this.addAll();
    	 return this;
	}

    
});