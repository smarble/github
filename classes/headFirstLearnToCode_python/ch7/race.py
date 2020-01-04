#import the turtle and random Python modules.
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

    print(turtles)        

def race():
    global turtles
    winner = False
    finishline = 590

    #While winner == False
    while not winner: 
        for current_turtle in turtles:
            move = random.randint(0,2)
            current_turtle.forward(move)
            #xcor() is a turtle method that returns the x coordinate
            xcor = current_turtle.xcor()
            if (xcor >= finishline):
                winner = True
                #Use the color() method within the current_turtle object.
                winner_color = current_turtle.color()
                #the color() method returns two values in a list, a pen color and a fill color. We want the pen color so we specify [0].
                print('The winner is', winner_color[0])


setup()
race()
#allows the turtle module to monitor what is going on in the window and shut down when you hit the close button
turtle.mainloop()   


