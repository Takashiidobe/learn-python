---
name: Input
date: 2020-03-30T21:40:11-05:00
draft: true
---

# Input

Now for the moment you've been waiting for: Getting User input to make interactive programs.
We're going to make a simple program that takes in someone's name, and then says hello to them. Very simple, but now our program is reacting to what the user says.
We're going to be doing this with the `input` function.

Feel free to try this program out in the REPL below, by clicking the green button.

```python
print("Please enter your name for a greeting, followed by the enter key.")
user_name = input()
greeting = "Hello, "
response = greeting + user_name
print(response)
```

{{< repl >}}https://repl.it/repls/EllipticalWiltedInitializationfile{{< /repl >}}

1. In the program above, we're printing a line that tells the user what to do (very important!),

2. Then we're capturing their input and placing it in a variable called `user_name`.
3. We're going to create a greeting, (which is hello, in our case),
4. We're concatenating the `user_name` to the end of the greeting (so our response is "Hello, {name}"),
5. And then printing it out.

Now I'm going to give you an empty REPL to play around with: I want you to write two programs that do the following:

1. Ask the user for the temperature where they live, and make a dynamic response with that information.
2. Ask the user for their age, and make a dynamic response with their age.

{{< repl >}}{{< /repl >}}

{{< answer >}}
def divide(number1, number2):
  return number1 / number2

print(divide(10, 5))
{{</ answer >}}
