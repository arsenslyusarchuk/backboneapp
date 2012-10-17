Myapp.Views.Posts ||= {}

class Myapp.Views.Posts.IndexView extends Backbone.View
  template: JST["backbone/templates/posts/index"]

  events:
    "submit #new-post": "render"

  initialize: () -> 
    @options.posts.bind('reset', @addAll)


  addAll: () =>
    @options.posts.each(@addOne)

  addOne: (post) =>
    view = new Myapp.Views.Posts.PostView({model : post})
    @$("tbody").append(view.render().el)
    

  render: =>
    $(@el).html(@template(posts: @options.posts.toJSON() ))
    @addAll()

    return this
