require_relative 'contact'

clark = Contact.new('Clark', 'Kent',
                    'clark@dailyplanet.com',
                    'Goes into the phone booth often')
clark.save

bruce = Contact.new('Bruce', 'Wayne',
                    'bruce@wayneenterprises.com',
                    "Doesn't smile very much")
bruce.save

diana = Contact.new('Diana', 'Prince',
                    'diana@amazon.com')
diana.save

puts clark.first_name

puts bruce.last_name
puts bruce.notes

puts diana.full_name
puts diana.notes

puts Contact.all.length # 0

puts Contact.all.length # 3

barry = Contact.create('Barry', 'Allen', 'barry@csi.com')
puts barry.full_name
puts Contact.all.length # 4


Contact.create('Dave', 'Wong', '')
Contact.create('Dave', 'Wong', '')
Contact.create('Dave', 'Wong', '')

puts Contact.all.length # 7

c = Contact.find(1005)
