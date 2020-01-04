#CH 8 pg 357 Recursion example. Using the time module to check the speed of our program.

#import Python's time module
import time

#Dictionary we are going to use as a chache
cache = {}

def fibonacci(n):
    global cache

    #Check to see if n is in a key in the cache dictionary. If yes, we return the value stored for that key.
    if n in cache:
        return cache[n]

    #set up base case. If n is 0 or 1, we store the result in a variable.
    if n == 0:
        result = 0
    elif n == 1:
        result = 1
    #Else we return the sum of the two previous Fibonacci numbers in the sequence, by recursively calling fibonacci.   
    else: 
        #In order to find a value for n in fibonacci(n), the computer must find the falue for fibonacci(n-1) + fibonacci(n-2). BUT in order to find a value for fibonacci(n-1) it must find the value for (n-2) and (n-3). In order to find a value for (n-2), it must find a value for (n-3) and (n-4). In order to find the value for any number represented by n, the previous two numbers must also be figured out. Now we have "recursion", a kind of layering of "frames" where in each frame, variables have a meaning for just that frame.
        #If we end up recursively computing the result, we assign that to the result local variable as well.
        result = fibonacci(n-1) + fibonacci(n-2)       
        #store the result under the key n before we return the result. 
    cache[n] = result
    return result



#Test code: testing the time it takes to run a specified range of numbers in the function.
start = time.time() #start timer
for i in range(0, 100):
    result = fibonacci(i) #compute the fibonacci, store in the result variable
    print(i, result) #print the iteration and the result varible

finish = time.time() #end timer
duration = finish - start #compute duration
print('Computed all in', duration, 'seconds')    



#for i in range(20, 55, 5): reminder that when using incraments, if you don't have all of the numbers of an incramented section, you can use none of them



