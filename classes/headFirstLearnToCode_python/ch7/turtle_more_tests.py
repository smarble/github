#turtle colors: yellow, gold, orange, red, maroon, violet, magenta, purple, navy, blue, skyblue, cyan, turquoise, lightgreen, green, darkgreen, chocolate, brown, black, gray, white.
import turtle

#Turtle() creates a new turtle
slowpoke = turtle.Turtle()
#sets the turtle's shape attribute to be 'turtle'
slowpoke.shape('turtle')
slowpoke.color('blue')

pokey = turtle.Turtle()
pokey.shape('turtle')
pokey.color('red')

def make_star (turtle):
    for i in range(5):
        turtle.forward(100)
        turtle.right(144)

def make_circles (turtle):
    for i in range(1):
        turtle.pencolor('green')
        turtle.penup()
        turtle.setposition(-120, 0)
        turtle.pendown()
        turtle.circle(50)

        turtle.pencolor('gold')
        turtle.penup()
        turtle.setposition(120, 0)
        turtle.pendown()
        turtle.circle(50)

def make_shape (turtle, sides):
    angle = 360/sides
    for i in range(0,sides):
        turtle.pencolor('magenta')
        turtle.forward(100)
        turtle.right(angle)



make_star(slowpoke)
make_circles(pokey)
make_shape(slowpoke, 3) 
slowpoke.setposition(-120, 100)
make_shape(slowpoke, 12) 



#allows the turtle module to monitor what is going on in the window and shut down when you hit the close button
turtle.mainloop()