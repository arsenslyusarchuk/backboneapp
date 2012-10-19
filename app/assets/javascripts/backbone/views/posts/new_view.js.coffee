Myapp.Views.Posts ||= {}

class Myapp.Views.Posts.NewView extends Backbone.View
  template: JST["backbone/templates/posts/new"]

  events:
    "submit #new-post": "save"
  constructor: (options) ->
    super(options)
    @model = new @collection.model()
    @model.bind("change:errors", () =>
      this.validate()
    )
  save: (e) ->
    e.preventDefault()
    e.stopPropagation()
    
    @collection.create(@model.toJSON(),
      success: (post) =>
        @model = post 
        window.location.hash = "/"

      error: (post, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    this.$("form").backboneLink(@model)
    return this