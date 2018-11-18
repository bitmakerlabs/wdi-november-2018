# use exit! to escape from this loop

require 'pry'

100.times do
  puts 'hello, world!'
  binding.pry
end

