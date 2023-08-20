class QuizBrain:
  def __init__(self, q_list):
    self.ques_no = 0
    self.ques_list = q_list
    self.score = 0

  def still_has_ques(self):
    if self.ques_no < len(self.ques_list):
      return True
    return False

  def next_ques(self):
    choice = input(
      f"Q{self.ques_no + 1}: {self.ques_list[self.ques_no].text} (True/False)? ")
    self.check_answer(choice, self.ques_list[self.ques_no].answer)
    self.ques_no += 1

  def check_answer(self, user_answer, correct_answer):
    if user_answer.lower() == correct_answer.lower():
      print("RIGHT")
      self.score += 1
    else:
      print("WRONG")
    print(f"correct ans was: {correct_answer}")
    print(self.score)
