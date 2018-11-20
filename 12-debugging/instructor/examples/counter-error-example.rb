class Counter

  def initialize
    puts 'Setting count to 0'
    @count = 0
  end

  def add_one
    puts 'adding one to count'
    @count += 1
  end

  def subtract_one
    puts 'subtracting one from count'
    @count -= 1
  end

  def final
    puts "Final Count:"
    puts @count
  end

end

counter = Counter.new
counter.add_one
counter.add_one
counter.subtact_one
counter.final
