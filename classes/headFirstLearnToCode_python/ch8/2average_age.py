 #Pg 370 Chapter 8

users = {}
users['Kim'] = {
    'email': 'kim@oreilly.com',
    'gender': 'f',
    'age': 27,
    'friends': ['John', 'Josh']
}

users['John'] = {
    'email': 'john@abc.com',
    'gender': 'm',
    'age': 24,
    'friends': ['Kim', 'Josh']
}

users['Josh'] = {
    'email': 'john@wickedlysmart.com',
    'gender': 'm',
    'age': 32,
    'friends': ['Kim']
}

#function that takes a name and returns the average age for that user's friends
def average_age(name):
    global users
    #make a variable representing the user
    user = users[name]

    #iterate through the user's friends array to add the total ages of all thier friends in a variable named Sum
    #make a variable representing the user's friends (array)
    user_friends = user['friends']
    print(user_friends)
    sum = 0
    for x in user_friends:
        sum = sum + users[x]['age']

    average = sum/len(user_friends)
    print('Average age', average)    

average_age('John')