var b;

(b = Myapp.Views).Posts || (b.Posts = {});

Myapp.Views.Posts.NewView = Backbone.View.extend({
	template: JST["backbone/templates/posts/new"],

	events: {
		"submit #new-post" : "save"
	},

	initialize: function(options) {
		//call(options);
		this.model = new this.collection.model();
		
	},
	save: function(e) {
		var attribute, errors, message, messages, i, len;
		e.preventDefault();
    	e.stopPropagation();
    	this.collection.create(this.model.toJSON(), {
    		success: function(post) {
    			this.model = post;
        		window.location.hash = "/";
    		},
    		error: function(post, jqXHR) {
    			if (jqXHR.status == 422) {
    			  post.set({errors: $.parseJSON(jqXHR.responseText)});
    			  var message = post.get("errors");
    			  $(message).each(function(){
    			  	alert(this);
    			  });
    			  post.destroy();
    			}
    			
    		}
    	});
	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
	    this.$("form").backboneLink(this.model);
	    return this;
	}
});

