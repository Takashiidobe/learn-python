---
name: 6. Arguments
date: 2020-03-30T21:40:11-05:00
draft: false
---

# Arguments

It would be pretty boring if functions could not accept input from the outside world, right? We've already found out that's not the case (we pass data to functions all the time when we use print), so let's learn a bit more about how to do that for our own functions.

To do so, we're going to make our own function that adds one to a number provided by the user. We'll accept an `argument` between the parentheses of the function and give it a name, `number`.

```python
def add_one(number):
  return number + 1
```

We can call our function conveniently and see the result.

{{< repl >}}https://repl.it/repls/WindyJointAmoebas{{< /repl >}}

We should see `6` in the console, since we gave the function the number 5, it will add 1 to 5, and return back 6.

We can have functions accept multiple arguments too. Just separate the arguments with a comma.

We can even make a function that will add two numbers together. We'll accept two arguments, `number1` and `number2`, and then add them together. The arguments have to both be named and separated by a comma.

```python
def add_two_numbers(number1, number2):
  return number1 + number2
```

{{< repl >}}https://repl.it/repls/AstonishingAdoredShell{{< /repl >}}

Now here's your challenge.
Make a function that subtracts two numbers, multiplies two numbers, and divides two numbers.

{{< answer >}}
def subtract(number1, number2):
  return number1 - number2

print(subtract(10, 5))
{{</ answer >}}

{{< answer >}}
def multiply(number1, number2):
  return number1 * number2

print(multiply(10, 5))
{{</ answer >}}

{{< answer >}}
def divide(number1, number2):
  return number1 / number2

print(divide(10, 5))
{{</ answer >}}
