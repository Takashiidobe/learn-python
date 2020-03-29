#!/usr/bin/env python3

from sys import argv

name = argv[1].split('/')[-1]
menu = argv[1].split('/')[-2].title()
name = name.split('.')[0]

title = name.split('_')[1]
title = title[0].upper() + title[1:]

name = name.replace('_', '. ')
name = ''.join(name.split(' ')[0] + ' ' + name.split(' ')
               [1][0].upper() + name.split(' ')[1][1:])

generated = f"""---
name: {name}
menu: {menu}
---

import Answer from '../components/Answer.jsx'
import Repl from '../components/Repl.jsx'

# {title}
"""

with open(argv[1] + '.mdx', 'w+') as out:
    out.write(generated)
