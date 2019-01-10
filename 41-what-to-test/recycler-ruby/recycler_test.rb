require "minitest/autorun"
require_relative "recycler"

class RecyclerTest < Minitest::Test
  def setup
    # arrange
    @recycler = Recycler.new
  end

  def test_is_compostable_returns_true_if_in_food_array
    # act
    # let actual = isCompostable('Spoiled Fruit');
    actual = @recycler.is_compostable?('Spoiled Fruit')

    # assert
    # expect(actual).toEqual(true)
    assert_equal(true, actual)
  end

  def test_is_compostable_returns_false_when_not_in_food_array
    actual = @recycler.is_compostable?('Sandwich Bag')
    assert_equal(false, actual)
  end
end
