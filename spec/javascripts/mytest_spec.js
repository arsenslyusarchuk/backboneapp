describe("Post model", function() {

	beforeEach(function() {
	    this.post = new Myapp.Models.Post({
	      title: "New Post",
	      description: "New Post description",
	      checked: "true"  
	    });
	    var collection = {
      		url: "/posts"
    	};
    	this.post.collection = collection;
	});    
	describe("urls", function() {
    
	    describe("when no id is set", function() {
	      it("should return the collection URL", function() {
	        expect(this.post.url()).toEqual("/posts");
	      });
	    });
	    
	    describe("when id is set", function() {
	      it("should return the collection URL and id", function() {
	        this.post.id = 1;
	        expect(this.post.url()).toEqual("/posts/1");
	      });
	    });
    
     });

	describe("when saving", function() {
    
	    beforeEach(function() {
	      this.server = sinon.fakeServer.create();
	      this.responseBody = '{"title":"New Post", "description":"New Post description", "cheked":false, "id": 240}';
	      this.server.respondWith(
	        "POST",
	        "/posts",
	        [
	          200,
	          {"Content-Type": "application/json"},
	          this.responseBody
	        ]
	      );
	      this.eventSpy = jasmine.createSpy();
	    });
	    
	    afterEach(function() {
	      this.server.restore();
	    });
	    
	    it("should not save when title is empty", function() {
	      this.post.bind("error", this.eventSpy);
	      this.post.save({"title": ""});
	      expect(this.eventSpy).toBe(true);	      
	    });
  	}); 
});
 