class Post < ActiveRecord::Base
  attr_accessible :checked, :description, :title, :created_at, :updated_at
  validates_presence_of :title

end
