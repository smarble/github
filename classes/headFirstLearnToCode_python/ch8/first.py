def is_palendrome(word): #1
    if len(word) <= 1: #2
        return True

    else: #3
        first = word[0]
        last = word[-1]
        middle = word[1:-1]
        if first == last: #4
            return is_palendrome(middle) #5
            #value = is_palendrome(middle)
            #return value
            #This is illustrating the point that is_palendrome(middle) is called and run BEFORE the value is returned. That means we never get to the return statement until we work our way back down the stack.
        else: 
            return False

is_palendrome('kayak')