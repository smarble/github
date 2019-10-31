#Import the random module
import random

#Set up the winner variable
winner = ''

#The computer randomly chooses rock, paper, scissors by generating a random number from 0 to 2 and then mapping that to a corresponding string.
choices = ['rock', 'paper', 'scissors']

computer_choice = random.choice(choices)

#Get the user's choice with a while loop that prompts again if the user's choice is something other than our three choices
user_choice = ''
while (user_choice != 'rock'and 
    user_choice != 'paper'and 
    user_choice != 'scissors'):
    user_choice = input('rock, paper, or scissors? ')

#Game logic that checks to see if the computer wins and makes the appropriate change to the winner variable.
print('You chose', user_choice, 'and the computer chose', computer_choice)

if computer_choice == user_choice:
    winner = 'Tie'

elif computer_choice == 'paper' and user_choice == 'rock':
    winner = 'Computer'

elif  computer_choice == 'rock' and user_choice == 'scissors':
    winner = 'Computer'  

elif  computer_choice == 'scissors' and user_choice == 'paper':
    winner = 'Computer' 

else: 
    winner = 'User'      

#Announce the winner and the computer's choice
if winner == 'Tie':
    print('We both chose', computer_choice + ', play again.')

else:
    print(winner, 'won. The computer chose', computer_choice + '.')    