# data types

# string
print("Hello"[0])
print("123" + "456")

# integer
print(123 + 456)
print(123_456_789)

# float
print(3.1920)

# boolean
print(True)
print(False)

num_char = len(input("enter your name: "))
print(type(num_char))
new_num_char = str(num_char)
print("your name has " + new_num_char + " characters")

print(100 + int("100"))
print(70 + float("100.5"))

two_digit_number = input("Type a two digit number: ")
first = two_digit_number[0]
second = two_digit_number[1]

print(int(first) + int(second))

print(3 * 3 + 3 / 3 - 3)


height = input("enter your height in m: ")
weight = input("enter your weight in kg: ")
bmi = int(weight) / (float(height) ** 2)
print(int(bmi))

print(round(8 / 3, 2))
print(8 // 3)
result = 4 / 2
result /= 2
print(result)

score = 0
print("your score is " + str(score))
print(f"your score is {score}")


age = input("What is your current age? ")
left = 90 - int(age)
months = left * 12
weeks = left * 52
days = left * 365
print(f"You have {days} days, {weeks} weeks, and {months} months left.")


print("Welcome to the tip calculator")
total = input("What was the total bill? $")
tip = input("What percentage tip would you like to give? 10, 12, or 15? ")
persons = input("How many people to split the bill? ")
per_head = (float(total) * (1 + int(tip) / 100)) / int(persons)
per_head = round(per_head, 2)
print(f"Each person should pay: ${per_head}")

