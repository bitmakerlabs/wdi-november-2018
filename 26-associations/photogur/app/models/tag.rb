class Tag < ApplicationRecord
  # there is a join table between you and pictures, called pictures_tags
  has_and_belongs_to_many :pictures

  has_many(:comments, {through: :pictures})


end
