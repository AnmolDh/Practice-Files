from ques_model import Question
from data import question_data
from quiz_brain import QuizBrain

ques_bank = []

for ques in question_data:
  ques_bank.append(Question(ques["text"], ques["answer"]))

quiz_brain = QuizBrain(ques_bank)


while quiz_brain.still_has_ques():
  quiz_brain.next_ques()
