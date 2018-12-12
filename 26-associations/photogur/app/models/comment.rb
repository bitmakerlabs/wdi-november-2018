class Comment < ApplicationRecord
  belongs_to :picture
  # there is a picture_id FK in your database table

  # now we can do this:
  # Comment.first.picture

  has_many :tags, through: :picture
end
