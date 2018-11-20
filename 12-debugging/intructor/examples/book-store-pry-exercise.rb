# The Book Store earns 1/3 profit for each book sold.
# For some reason, the total profit report is $9 instead of $10
# Use pry to figure out why

class Book

  def initialize(author, title, price, summary)
    @author  = author
    @title   = title
    @price   = price
    @summary = summary
  end

  def title
    @title
  end

  def author
    @title
  end

  def price
    @price
  end

end

class Store

  def initialize
    @total_profit = 0
  end

  def sell(book)
    puts "We just sold #{book.title} by #{book.author}. Cha-ching!"
    book_profit = calc_book_profit(book)
    @total_profit += book_profit
  end

  def calc_book_profit(book)
    book.price / 3
  end

  def report
    puts "Total Profit: #{@total_profit}"
  end

end

store = Store.new

malcolm_x     = Book.new('Manning Marable',  'Malcolm X',         12, 'From acclaimed historian ...')
bossypants    = Book.new('Tina Fey',         'Bossypants',        10, 'Worth it. -Trees')
fifth_witness = Book.new('Michael Connelly', 'The Fifth Witness', 8,  'Another book by Michael ...')

store.sell(malcolm_x)     # profit 4.00 (12 / 3)
store.sell(fifth_witness) # profit 2.67 (8  / 3)
store.sell(bossypants)    # profit 3.33 (10 / 3)

store.report              # total: 10.00
