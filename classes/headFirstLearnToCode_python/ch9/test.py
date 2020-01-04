def capital_letters(txt):
    capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    counter = 0

    for char in txt:
        if char in capital:
            counter = counter + 1
                
    print(counter)        

capital_letters("SandrA")