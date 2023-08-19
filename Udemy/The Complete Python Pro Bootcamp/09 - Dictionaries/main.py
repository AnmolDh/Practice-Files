me = {
    "name": "Anmol",
    "age": 19,
    123: "hi"
}

# retrive items
print(me["age"])
print(me[123])

# adding new items
me["city"] = "Chandigarh"
print(me)

# create empty dictionary
empty = {}

# wipe an existing dictionary
# me = {}

# edit existing item
me["name"] = "Anmol Dhiman"

# loop through dictionary
for key in me:
  print(f"{key}: {me[key]}")


student_scores = {
    "Harry": 81,
    "Ron": 78,
    "Hermione": 99,
    "Draco": 74,
    "Neville": 62,
}
student_grades = {}
for student in student_scores:
  score = student_scores[student]
  if score > 90:
    student_grades[student] = "Outstanding"
  elif score > 80:
    student_grades[student] = "Exceeds Expectations"
  elif score > 70:
    student_grades[student] = "Acceptable"
  else:
    student_grades[student] = "Fail"
print(student_grades)


# nesting
capitals = {
    "France": "Paris",
    "Germany": "Berlin"
}

# nest list in dictionary
travel_log = {
    "France": ["Paris", "Lille"],
    "Germany": ["Berlin", "Hamburg", "Stuttgart"]
}

# nest dictionary in dictionary
travel_log_dic = {
    "France": {
        "cities_visited": ["Paris", "Lille"],
        "total_visits": 12
    },
    "Germany": {
        "citied_visited": ["Berlin", "Hamburg", "Stuttgart"],
        "total_visits": 9
    }
}

# nest dictionary in list
travel_log_list = [
    {
        "country": "France",
        "cities_visited": ["Paris", "Lille"],
        "total_visits": 12
    },
    {
        "country": "Germany",
        "citied_visited": ["Berlin", "Hamburg", "Stuttgart"],
        "total_visits": 9
    }
]


travel_log = [
    {
        "country": "France",
        "visits": 12,
        "cities": ["Paris", "Lille", "Dijon"]
    },
    {
        "country": "Germany",
        "visits": 5,
        "cities": ["Berlin", "Hamburg", "Stuttgart"]
    },
]


def add_new_country(co, v, ci):
  travel_log.append({
      "country": co,
      "visits": v,
      "cities": ci
  })


add_new_country("Russia", 2, ["Moscow", "Saint Petersburg"])
print(travel_log)
