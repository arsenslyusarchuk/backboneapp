Myapp.Models.Post = Backbone.Model.extend({
	urlRoot: "posts",
	defaults: {
        title: null,
    	description: null,
    	checked: false
    }
});

Myapp.Collections.PostsCollection = Backbone.Collection.extend({
	model: Myapp.Models.Post,
  	url: '/posts'
});