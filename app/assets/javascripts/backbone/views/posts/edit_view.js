//if (!Myapp.Views.Posts)  Myapp.Views.Posts = {};
var b;

(b = Myapp.Views).Posts || (b.Posts = {});

Myapp.Views.Posts.EditView = Backbone.View.extend({
	template : JST["backbone/templates/posts/edit"],

	events: {
		"submit #edit-post" : "update"
	},

	initialize: function() {
		this.render();
	},

	update: function(e) {
		e.preventDefault();
    	e.stopPropagation();
    	this.model.save(null, {
      		success: function(post) {
        		this.model = post;
        		window.location.hash = "/";
      		}
    	});
	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
	    this.$("form").backboneLink(this.model);
	    return this;
	}
});