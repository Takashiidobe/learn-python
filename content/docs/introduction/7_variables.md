---
name: Variables
date: 2020-03-30T21:40:11-05:00
draft: false
---

# Variables

Variables are like a name for data. Just like how we use names for people, we can use variables to refer to data. If that's a bit abstract, let's jump into some examples.

We declare a variable by using a word (that's not a reserved keyword, like def), an equals sign, and then what we want the variable to represent.

```python
five = 5
hello = 'hello'
decimal = 5.0
```

Variables just have a few simple rules, and conventions. In python, variables can have underscores, dashes, and any letter of the alphabet, either lowercase or uppercase. Variables can have numbers in them, just not as the first character. Spaces and other characters are not allowed.

Here are some incorrect variables. These will cause Python to complain.

```python
5 = 5
.hello = 'hello'
?two = 2
```

By convention, variables start with a lowercase letter, and instead of spaces, we use an underscore to connect words in a variable. (This is called snake casing, because your words kind of look like snakes).

```python
multi_word_variable = 5
```

Also by convention, variables that are considered constant (unchanging) are written in screaming snake case, which is the same as snake case, just with all the letters uppercased.

```python
FIFTY_TWO = 52
```

We can do more than even assign data to variables. We can assign variables to variables, and assign the result of functions to variables as well.

Here we've assigned the number 5 to the variable 5, and then assigned that to six. the variable six now refers to whatever five refers to, which is 5.

```python
five = 5
six = five
```

We can also assign the output of a function to a variable.
In the function below, five is now the result of `num()`, which is 10.

```python
def num():
    return 10

five = num()
```

We can set variables equal to a function with parameters too. Here, we're setting the variable `ten` equal to the result of the `add` function that takes in 5 and 5.

```python
def add(number1, number2):
    return number1 + number2

ten = add(5, 5)
```

We can do a lot of things with variables. We can even do operations on variables too.

Below, we'll declare a variable and add to it.
we'll set the variable `five` to the number 5, the variable `six` to the number 6, and the variable `twelve` to the result of `five` + `six` + the number 1.

```python
five = 5
six = 6
twelve = five + six + 1
```

Feel free to practice the concepts you've learned before moving on to the next section.

{{< repl >}}{{< /repl >}}
