import turtle

#Turtle() creates a new turtle
slowpoke = turtle.Turtle()
#sets the turtle's shape attribute to be 'turtle'
slowpoke.shape('turtle')
slowpoke.color('blue')


pokey = turtle.Turtle()
pokey.shape('turtle')
pokey.color('red')

def make_square(the_turtle):
    '''Function that draws a square'''
    #Repeat 4 times
    for i in range(0,4):
        #move turtle forward 100 units
        the_turtle.forward(100)
        the_turtle.right(90)

def make_spiral(the_turtle):
    '''Function that draws a spiral'''

    for i in range(0,36):
        #move turtle forward 100 units
        make_square(the_turtle)
        the_turtle.right(10)

make_spiral(slowpoke)
pokey.right(5)
make_spiral(pokey)

#allows the turtle module to monitor what is going on in the window and shut down when you hit the close button
turtle.mainloop()


