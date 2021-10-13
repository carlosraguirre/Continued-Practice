#  1. Start with an array of numbers and create a new array with each number times 3.
#     For example, [1, 2, 3] becomes [3, 6, 9].

# numbers = [4,5,6]
# new_numbers = []

# numbers.each do |number|
#   new_numbers << number * 3
# end

# p new_numbers

numbers = [4,5,6]
new_numbers = []
index = 0

while index < numbers.length
  new_numbers << numbers[index] * 3
  index += 1
end

p new_numbers


#  2. Start with an array of strings and create a new array with each string upcased.
#     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

# array = ["hello", "goodbye"]
# new_array = []

# array.each do |word|
#   new_array << word.upcase
# end

# p new_array

words = ["hello", "goodbye"]
new_array = []
index = 0

while index < words.length
  word = words[index]
  new_array << word.upcase
  index += 1
end

p new_array


#  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

hashes = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
new_array = []
index = 0

while index < hashes.length
  new_array << hashes[index][:name]
  index += 1
end

p new_array



#  4. Start with an array of numbers and create a new array with each number plus 7.
#     For example, [1, 2, 3] becomes [8, 9, 10].


numbers = [1, 2, 3]
new_numbers = []
index = 0

while index < numbers.length
  number = numbers[index]
  new_numbers << number + 7
  index += 1
end

p new_numbers

#  5. Start with an array of strings and create a new array with each string's length.
#     For example, ["hello", "goodbye"] becomes [5, 7].


words = ["hello", "goodbye"]
words_length = []
index = 0

while index < words.length
  word = words[index]
  words_length << word.length
  index += 1
end

p words_length



#  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

hashes = [{name: "Alice", age: 30}, {name: "Blane", age: 26}]
ages = []
index = 0

while index < hashes.length
  ages << hashes[index][:age]
  index += 1
end

p ages

#  7. Start with an array of numbers and create a new array with each number divided by 2.
#     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

numbers = [10, 20, 30]
divided = []
index = 0

while index < numbers.length
  divided << numbers[index] / 2
  index += 1
end

p divided

#  8. Start with an array of strings and create a new array with each string's first letter only.
#     For example, ["hello", "goodbye"] becomes ["h", "g"].

words = ["hello", "elephant", "lego", "pancakes"]
message = []
index = 0

while index < words.length
  # word = words[index]
  message << words[index][0]
  index += 1
end

p message

# 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
#     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].


hashes = [{name: "Alice", age: 30}, {name: "Blane", age: 26}]
twice_the_age= []
index = 0

while index < hashes.length
  age = hashes[index][:age]
  twice_the_age << age * 2
  index += 1
end

p twice_the_age


# 10. Start with an array of numbers and create a new array with each number converted into a string.
#     For example, [1, 2, 3] becomes ["1", "2", "3"].

numbers = [5, 10, 25, 61]
number_strings = []
index = 0

while index < numbers.length
  number_strings << numbers[index].to_s
  index += 1
end

p number_strings