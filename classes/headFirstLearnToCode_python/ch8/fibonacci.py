#CH 8 pg 357 Recursion example. Using the time module to check the speed of our program.

#import Python's time module
import time

def fibonacci(n):
    #set up base case. If n is 0 or 1, we just return that number.
    if n == 0:
        return 0
    elif n == 1:
        return 1
    #Else we return the sum of the two previous Fibonacci numbers in the sequence, by recursively calling fibonacci.   
    else: 
        #In order to find a value for n in fibonacci(n), the computer must find the falue for fibonacci(n-1) + fibonacci(n-2). BUT in order to find a value for fibonacci(n-1) it must find the value for (n-2) and (n-3). In order to find a value for (n-2), it must find a value for (n-3) and (n-4). In order to find the value for any number represented by n, the previous two numbers must also be figured out. Now we have "recursion", a kind of layering of "frames" where in each frame, variables have a meaning for just that frame.
        return fibonacci(n-1) + fibonacci(n-2)        

#Test code: testing the time it takes to run a specified range of numbers in the function.
#A loop that executes fibonacci(3) through fibonacci(10)
for i in range(3, 10):
    start = time.time() #start timer
    result = fibonacci(i) #compute the fibonacci
    end = time.time() #end timer
    duration = end - start #compute duration
    print(i, result, duration) #end results


#for i in range(20, 55, 5): reminder that when using incraments, if you don't have all of the numbers of an incramented section, you can use none of them

