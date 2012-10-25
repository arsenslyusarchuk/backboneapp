require "spec_helper"


describe PostsController do 
	def valid_attributes
    	{'title' => 'Factory Post title', 'description' => 'Factory Post description'}
  	end
	describe "DELETE destroy" do
		
		#let(:post) { FactoryGirl.create :post }
    	
		#before(:all) do
    		#@post = FactoryGirl.create :post
    		#let(:post) { FactoryGirl.create :post }
  		#end	
	    it "destroys the requested post" do
	      #post = Post.create! valid_attributes
	      post = FactoryGirl.create(:post)
	      #p Post.count
	      #delete :destroy, {:id => post.to_param}
	      #p Post.count
	      expect {
	        delete :destroy, {:id => post.to_param}
	      }.to change(Post, :count).by(-1)
	      #p Post.count
	    end
  	end

  	describe "GET index" do
  		#let(:post) { FactoryGirl.create :post  }
	    it "assigns all posts as @posts" do
	      #post = Post.create! valid_attributes
	      post = FactoryGirl.create(:post)
	      post = Post.all
	      get :index, {}
	      assigns(:posts).should eq(post)
	    end
  	end
	
end