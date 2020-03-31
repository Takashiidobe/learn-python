---
name: 4. Functions
date: 2020-03-30T21:40:11-05:00
draft: false
---

# Functions

I'm sure you're wondering about functions since we used one to print to the console.

Functions are a reusable piece of code that can be `invoked` or `called` with parentheses. In between the parentheses, you can provide pieces of data that you want the function to use. These are known as `arguments`, or `args` for short.

That'll probably be a mush until you practice, so let's write our own function that simply prints the result of 1 + 1.

- Functions start out with the `def` keyword. This is a special reserved keyword in python, just like `print`, and stands for `define`. In english, it would like saying "define the function".

```python
def
```

Great. We have one word. Next we're going to write a word to name the function. We'll name the function `two`, since it prints 1 + 1 to the screen.

```python
def two
```

Nice. Now we'll add parentheses and a colon to end. This tells the computer that this is a python function.

```python
def two():
```

Finally, we're going to add a new line, then tab (or add four spaces).
This is how python deliminates blocks, and add our call to `print(1 + 1)`.

```python
def two():
    print(1 + 1)
```

That's it. The function we've defined (two) will now print 2 to the console.

We'll have to call the function in order to use it, so let's go ahead and do that. We call the function by adding a newline (so the function isn't confused) and then write the name of the function we wish to call along with parentheses.

{{< repl >}}https://repl.it/repls/WeightyWellwornTraining{{< /repl >}}

You should see `2` being printed to the right hand side of the REPL.
We've done it!

We'll explore a few more parts of functions in the next sections, but until then, let's do a challenge.

Write a function that subtracts 5 from 2, and prints it to the console.
Call this function three.
You can find the answer down below, under the tab called "subtract".

{{< answer >}}
def three():
  print(5 - 2)

three()
{{</ answer >}}
