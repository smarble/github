#help users choose avatar traits(hair color, eye color, glasses). 
#Via input, ask the user to choose a trait, use a default if they
#hit the return button(empty string''). Example prompt with default: 'What color hair[brown]?'


print('testing 123')
#create a string that acts as a question so we can prompt and get input from the user
def get_attribute (query, default):
    question = query + '[' + default + ']?'
    answer = input(question)
    #check to see if the user chose the default value by hitting the return(empty string'') key.
    if (answer == ''):
        answer = default
    print('You chose', answer)    
    return answer

hair = get_attribute('What hair color', 'brown')
hair_length = get_attribute('What hair legth', 'short')
eye = get_attribute('What eye color', 'blue')
gender = get_attribute('What gender', 'female')
glasses = get_attribute('Has glasses', 'no')
beard = get_attribute('Has beard', 'no')

