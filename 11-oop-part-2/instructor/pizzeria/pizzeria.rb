require './pizza.rb'

class Pizzeria

  @@total_sales = 0

  def initialize
    @open_for_business = false
    @supplies = 0

    @sales = 0
  end

  def self.total_sales
    return @@total_sales
  end

  def order(toppings)
    if @open_for_business && @supplies > 0
      p = Pizza.new(toppings)
      p.bake
      3.times { p.cut }

      @supplies -= 1

      @sales += 1
      @@total_sales += 1

      return p
    end
  end

  def open
    @open_for_business = true
  end

  def close
    @open_for_business = false
  end

  def restock
    if !@open_for_business
      @supplies += 5
    end
  end

end
