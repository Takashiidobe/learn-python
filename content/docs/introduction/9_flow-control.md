---
title: 9 Flow Control
date: 2020-03-30T21:40:11-05:00
draft: true
---

# Flow Control

Now it's time to control the flow with flow control.

Flow Control allows us to tell our programs to do different things based on a specific condition.

Let's start off with a practical example: if it is raining, I will take a walk with an umbrella; if it isn't raining, I will just take a walk.

Logically this can be said like this:

```
if it is raining:
  I will take a walk with my umbrella.
else if it is not raining:
  I will take a walk. 
```

In python, this can be expressed like so.

```python
is_raining = True
if is_raining == True:
  print("I will take a walk with my umbrella.")
elif is_raining == False:
  print("I will take a walk.")
```

In the example above, we first set our variable `is_raining` equal to `True`. This means it is raining.

We then define our flow control block.

If the condition is met (`is_raining` is equal to `True`), then this code block executes.

Since the condition is met, we execute this block, which prints "I will take a walk with my umbrella."

`elif` in python means `else if`, or the next condition. Since we've already matched on one condition (the if branch), we will not execute this part. Thus, this part does not execute. 

In this case, we had only two conditions, either it is raining or it isn't raining. What if we wanted to check more conditions than that? 

Luckily we can, because `if` and `elif` can be used as many times as you want.

Let's see an example with more choices.

```
if the temperature is 71 - 85 degrees:
  I will take a walk with jeans on.
else if the temperature is greater than 85 degrees:
  I will take a walk with shorts on.
else if the temperature is 55 - 70 degrees:
  I will take a walk with a jacket on. 
else:
  I will not take a walk, since it is too cold.    
```

In this case, we have four decisions, and this makes sense.

Let's translate this to python.

```python
temperature = 50
if temperature > 70 and temperature <= 85:
  print("I will take a walk with jeans on.")
elif temperature > 85:
  print("I will take a walk with shorts on.")
elif temperature > 55 and temperature <= 70:
  print("I will take a walk with a jacket on.")
else:
  print("I will not take a walk, since it is too cold.")
```

In this case, we've set the temperature to 50 degrees. If the temperature is 50 degrees, we check if we meet the first conditions. We don't, since the temperature is not greater than 70 degrees and less than or equal to 85 degrees.
We also find that the temperature is not greater than 85 degrees. As well, the temperature is not between 55 degrees and 70 degrees. Thus, we find ourselves at the last branch, which means we won't be taking a walk.

Perfect!

Now I'll leave you two exercises to learn how to use flow control.

First, translate this example into python code.

```
Tell the user to enter their age.
capture their age into a variable called age.
if `age` is less than 10:
  say "You are younger than 10!"
else if `age` is greater than or equal to 10 but less than 20:
  say "You are between 10 and 20."
else if `age is greater than or equal to 20 but less than 30:
  say "You are between 20 and 30"
else:
  say "You are 30 or older."
```

{{< repl >}}{{</ repl >}}


Next, feel free to write any kind of program that uses branching.
Make it fun!

{{< repl >}}{{</ repl >}}
