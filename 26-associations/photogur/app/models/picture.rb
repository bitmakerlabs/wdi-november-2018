class Picture < ActiveRecord::Base
  has_many :comments
  # there is a picture_id FK in the comments table

  # now we can do this:
  # Picture.first.comments
end
