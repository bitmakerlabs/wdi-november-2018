require 'awesome_print'

class Book

  def initialize(author, title, summary)
    @author  = author
    @title   = title
    @summary = summary
  end

end

books = []
books << Book.new('Michael Connelly',   'Another book by Michael Con', 'The Fifth Witness')
books << Book.new('Manning Marable',    'From acclaimed historian Ma', 'Malcolm X')
books << Book.new('Tina Fey',           'Worth it. -Trees',            'Bossypants')

puts "ap books:"
puts

ap books

puts
puts
puts


puts "ap books, raw: true:"
puts
ap books, raw: true
