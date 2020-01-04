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

#function that takes a name in quotes and finds the average age of all their friends 
def average_age(username):
    #decalare any global variables used
    global users
    #Ask Taylor: is user the key or the value?
    user = users[username]
    print(user)
    print(users['John'])
    friends = user['friends']
    print(username +"'s friends are", user['friends'])

    sum = 0
    
    #Iterate through the friends of the user and add a summ of all their ages.
    for name in friends:
        #note that 'name' is just a string in an array. We need to use that string as a key to access the value.
        friend = users[name]
        sum = sum + friend['age']
        print(sum)
        
    average = sum/len(friends)
    print(name + "'s friends have an average age of", average)


average_age('John')    










    