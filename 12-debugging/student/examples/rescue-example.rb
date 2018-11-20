require 'pry'

def my_method
  greeting = 'hello'
  person   = 'matz'

  1 / 0 # something bad!

rescue
  binding.pry
end


my_method
