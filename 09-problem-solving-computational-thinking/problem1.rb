# Problem: Get the total sum of a list of numbers
# 1 2 5 11 1

# go through the numbers adding them one by one to a total
# display total

# numbers = [1,2,5,11,1]
# total = 0
# for each number in numbers {
#  total = total + number
#}
# print total

numbers = [1,2,5,11,1]
total = 0
numbers.each do |number|
  total = total + number
end
puts total



