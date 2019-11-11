#import the turtle and the random module within Python
import turtle
import random

#same as writing turtles = []
turtles = list() 

def setup():
    global turtles
    startline = -620
    screen = turtle.Screen()
    screen.setup(1290, 720)
    screen.bgpic('pavement.gif')

    turtle_ycor = [-40, -20, 0, 20, 40]
    turtle_color = ['blue', 'red', 'purple', 'brown', 'green']
    for i in range(0, len(turtle_ycor)):
        new_turtle = turtle.Turtle()
        new_turtle.shape('turtle')
        new_turtle.penup()
        new_turtle.setpos(startline, turtle_ycor[i])
        new_turtle.color(turtle_color[i])
        new_turtle.pendown()
        turtles.append(new_turtle)

def race():
    global turtles
    winner = False
    



setup()
#allows the turtle module to monitor what is going on in the window and shut down when you hit the close button
turtle.mainloop()   


