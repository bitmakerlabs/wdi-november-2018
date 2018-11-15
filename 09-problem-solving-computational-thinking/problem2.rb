# Problem: Pig Latin
# Pig Latin
 # "apple" => "appleay"
 # "plum" => "umplay"
 # grape => apegray
 # Natalie => atalieNay

# method to translate an english word into pig Latin
# detect if first letter is consonant or vowel
# vowel is the easy case: just concatenate string with ay
# if it is a consonant move first letters to the end of the word
   # until the word starts with a vowel and then concatenate string with "ay"

# def method english_to_pig_latin(word)
  # letters = word.to_array_of_characters # eg "apple" -> ["a","p","p","l","e"]
  # while letters[0].is_consonant {
      # word.push(first_letter)
      # word.remove(first_letter)
  # }
  # word.concat("ay")
  # convert back to string
  # return word
# end

def piggy_latin(word)
  letters = word.chars
  while consonant?(letters[0])
    letters.push(letters[0])
    letters.shift # remove first letter
  end
  letters << "ay"
  return letters.join
end

def consonant?(letter)
  vowels = ['a','e','i','o','u','A','E','I','O','U']
  return !vowels.include?(letter)
end

puts piggy_latin("Plum")

# def method is_consonant(letter)
# vowels = [a e i o u A E I O U]
  # return letter.is_not_one_of_these(vowels)
# end








