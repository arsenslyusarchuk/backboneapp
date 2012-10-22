require "spec_helper"


describe PostsController do 
	describe "DELETE destroy" do
	let(:post) { FactoryGirl.create :post }	
    it "destroys the requested post" do
      
      expect {
        delete :destroy, {:id => post.to_param}
      }.to change(Post, :count).by(0)
    end
  end
	
end