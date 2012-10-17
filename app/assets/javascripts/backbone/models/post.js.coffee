class Myapp.Models.Post extends Backbone.Model
  paramRoot: 'post'

  defaults:
    title: null
    description: null
    checked: null

class Myapp.Collections.PostsCollection extends Backbone.Collection
  model: Myapp.Models.Post
  url: '/posts'
