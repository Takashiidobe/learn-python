---
name: Data Types
date: 2020-03-30T21:40:11-05:00
draft: false
---

# Data Types

There are three main data types summarized below.

| Data Type              | Examples                                      |
|------------------------|-----------------------------------------------|
| Integers               | -1000, -1, 0, 1, 1000                         |
| Floating-point numbers | -1.25, -1.0, 0.0, float('inf'), float('-inf') |
| Strings                | 'a', 'Hello!', '11', '10 + 10', 'Twenty'      |

Integers represent whole number integers. Fractions are not allowed.

-1, 0, 1 are all integers.

Floating point numbers represent numbers with decimals. 5.5 is an example.

2 / 3 turns into an integer.

Strings
A string is anything that is enclosed within `'` or `"`.

"hello", 'hello', '0', "0", '2 + 2', "2 + 2" are all strings.

String concatenation is done with the `+` operator:

```python
> 'Alice' + 'Bob'
'AliceBob'
```

You can also multiply strings together with the `*` operator:

```python
> 'Alice' * 5
'AliceAliceAliceAliceAlice'
```

You cannot add a String and an Integer, however:

```python
> 'Alice' + 42
TypeError: Can't convert 'int' object to str implicitly
```

You also cannot multiply a string by a float:

```python
> 'Alice' * 5.0
TypeError: can't multiply sequence by non-int of type 'float'
```

Feel free to play with the operators and data types you've learned before moving on.

{{< repl >}}{{< /repl >}}
