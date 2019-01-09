require "minitest/autorun"
require_relative "recycler"

class RecyclerTest < Minitest::Test
  def setup
    @recycler = Recycler.new
  end
end
