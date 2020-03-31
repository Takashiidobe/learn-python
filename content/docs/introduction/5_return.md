---
name: 5. Return
date: 2020-03-30T21:40:11-05:00
draft: false
---

# Return

In this lesson, we're going to learn about the `return` keyword. The `return` keyword "returns" or "answers" back to the caller.

Let's see it in action.

```python
def three():
    return 3
```

Here we've defined a function that returns the number 3. When you call this function, you can think of it as just the number 3. When we run the code in the REPL below, we can see that we get the exact same output in the console.

{{< repl >}}https://repl.it/repls/ClosedAmbitiousExperiment{{< /repl >}}

The output should look something like this:

```bash
> Let's print the number 3.
> 3
> Let's print the function three.
> 3
```

Since the function `three` returns 3, it doesn't matter if we pass the `print` function `3` or `three()`, it behaves exactly the same.

Now it's your turn.

Create a program that will return `5`, and call it using the print function.

{{< answer >}}
def five():
  return 5

print(five())
{{</ answer >}}
