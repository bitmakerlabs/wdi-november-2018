class Recycler
  @@food = ['Spoiled Vegetable','Spoiled Fruit','Moldy Bread']
  @@plastic = ['Soda Bottle','Yoghurt Cup','Shampoo Bottle',
    'Sandwich Bag','Milk Bag']
  @@metal = ['Soda Can','Cat Food Tin','Paint Can','Aluminum Tray']
  @@glass = ['Glass Bottle','Jar']
  @@paper = ['Newspaper','Birthday Card','Toilet Paper Roll']
  @@garbage = ['Old Shoes','Black Plastic','Coffee Cup','Frayed Cable',
    'Cassette','VHS Tape']

  @@junk = @@food + @@plastic + @@metal + @@glass + @@paper + @@garbage

  def initialize
    @material = {
      garbage: 0, compost: 0, metal: 0, glass: 0, paper: 0, plastic: 0
    }
  end

  def get_random_junk(num = nil)
    if num
      random_junk = []
      num.times { random_junk << @@junk.sample }
      return random_junk
    else
      return @@junk.sample
    end
  end

  def is_compostable?(item)
    return @@food.include?(item)
  end

  def is_recyclable?(item)
    return (@@metal + @@glass + @@paper + @@plastic).include?(item)
  end

  def is_garbage?(item)
    return !is_compostable?(item) && !is_recyclable?(item)
  end

  def compost(items)
    compostable = items.select{|item| is_compostable?(item)}
    non_compostable = items.select{|item| !is_compostable?(item)}

    if compostable.length > 0 && non_compostable.length == 0
      @material[:compost] += compostable.length
      return true
    else
      return false
    end
  end

  def recycle(items)
    recyclable = items.select{|item| is_recyclable?(item)}
    non_recyclable = items.select{|item| !is_recyclable?(item)}

    if recyclable.length > 0 && non_recyclable.length == 0
      @material[:plastic] += recyclable.select{|item| @@plastic.include?(item)}.length
      @material[:metal] += recyclable.select{|item| @@metal.include?(item)}.length
      @material[:glass] += recyclable.select{|item| @@glass.include?(item)}.length
      @material[:paper] += recyclable.select{|item| @@paper.include?(item)}.length

      return true
    else
      return false
    end
  end

  def toss(items)
    @material[:garbage] += items.length
  end

  def sort_junk(items)
    compost(items.select{|item| is_compostable?(item)})
    recycle(items.select{|item| is_recyclable?(item)})
    toss(items.select{|item| is_garbage?(item)})
    return true
  end

  def get_material
    return @material
  end

  def empty_material
    @material = {
      garbage: 0, compost: 0, metal: 0, glass: 0, paper: 0, plastic: 0
    }
  end
end
