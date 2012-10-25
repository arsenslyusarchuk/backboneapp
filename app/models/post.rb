class Post < ActiveRecord::Base
  attr_accessible :checked, :description, :title, :created_at, :updated_at
  validates :title, :presence => true
  validates :description, :presence => true
end
