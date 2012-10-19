class Myapp.Routers.PostsRouter extends Backbone.Router
  initialize: (options) ->
    @posts = new Myapp.Collections.PostsCollection()
    @posts.reset options.posts

  routes:
    "new"      : "newPost"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newPost: ->
    @view = new Myapp.Views.Posts.NewView(collection: @posts)
    $("#new_post").html(@view.render().el)

  index: ->
    @view = new Myapp.Views.Posts.IndexView(posts: @posts)
    $("#posts").html(@view.render().el)
    $("#new_post").html(@view.render())
    
    
  show: (id) ->
    post = @posts.get(id)

    @view = new Myapp.Views.Posts.ShowView(model: post)
    $("#posts").html(@view.render().el)

  edit: (id) ->
    post = @posts.get(id)

    @view = new Myapp.Views.Posts.EditView(model: post)
    $("#edit_post").html(@view.render().el)
