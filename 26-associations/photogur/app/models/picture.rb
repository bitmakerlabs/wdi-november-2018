class Picture < ActiveRecord::Base
  # there is a picture_id FK in the comments table
  has_many :comments
  # there is a join table between you and tags, called pictures_tags
  has_and_belongs_to_many :tags


  # now we can do this:
  # Picture.first.comments
  # Picture.first.tags
end
