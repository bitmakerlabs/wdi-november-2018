def name_method

  output = []

  names = ['dave', 'ben', 'victoria', 'marina', 'malcolm' , 'nils']

  names.each do |name|
    output << name.reverse
  end

  return output

end

def better_name_method
            # x
  names = ['dave', 'ben', 'victoria', 'marina', 'malcolm' , 'nils']

  # temp = ['evad', 'neb', 'airotciv' ,'aniram' ,'mloclam' ,'slin' ]
  names.map do |name| # name = 'ben'
    name.reverse # neb
  end

end
  # ['evad', 'neb', 'airotciv' ,'aniram' ,'mloclam' ,'slin' ]
# puts better_name_method




# def long_names_that_start_with_m
#   names = ['dave', 'ben', 'victoria', 'marina', 'malcolm' , 'nils', 'max']

#   names.select do |name|
#     result = name.length >= 6 && name[0] == 'm'
#     puts "#{name}, #{result}"
#     result
#   end

# end

# puts long_names_that_start_with_m


bears = {
  'Cheer'      => 'fires an uzi at',
  'Funshine'   => 'jabs forward with a sword impaling',
  'Love-a-lot' => 'throws a grenade at',
  'Grumpy'     => 'shoots a poison tipped arrow at'
}

puts bears.keys.class
bears.keys.each do |bear|
  puts "#{bear} is lovely"
end

