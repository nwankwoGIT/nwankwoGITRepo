My name is Anthony Nwankwo and this is the Readme.md file for my GitHub,
which is a markdown document. It contains the latest update to files in
my project portfolio. The project is about providing a technical
computing platform for users interesting in learning three frontline
programming languages and leveraging such skills in generating technical
solutions in various scientific fields.

Tutorials in R:
===============

Development of the R Language was primarily motivated by the need to
develop a programming language that offers high productivity within the
shortest possible time. The language has since expanded from handling
statiscal analysis to data science which had been dominated by the
Python Language. R is holding its own in data filtering and
visualization. We shall start with looking at a simple example:

### R as a mathematical Calculator

    x <- 4    # define a variable x, and assign a value to it
    y <- 5    # define a variable y, and assign a value to it
    z <- x*y  # perform a multiplication and assign the result to variable z
    cat(z)    # print out the result to the console

    20

    x <- 4    
    y <- 5    
    z <- x^y  # x raised to power of y 
    cat(z)    # print out the result to the console

    1024

    x <- 4              
    y <- 5              
    z <- sqrt(x^2+y^2)  # Pythagoras theorem
    cat(z)              # print out the result to the console

    6.403124

### Handling Arrays in R

    x <- 1:10           # array 1 to 10
    cat(1)              # first element - R indexing starts at 1

    1

    y <- c(1,2,3,4,5,6,7,8,9.1,10) 
    z <- x == y         # all TRUE except the 9th item 
    cat(z)              # print out the result to the console

    TRUE TRUE TRUE TRUE TRUE TRUE TRUE TRUE FALSE TRUE
