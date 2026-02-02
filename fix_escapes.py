#!/usr/bin/env python3
import re
import os

files = [
    'src/data/subjects/csharp-advanced/oops-concepts.ts',
    'src/data/subjects/csharp-advanced/net-core.ts',
    'src/data/subjects/csharp-advanced/collections.ts'
]

os.chdir('e:\\interview-prep')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_len = len(content)
    
    # Define specific replacements for patterns
    replacements = [
        (r'\$"Processing \${amount} via Stripe\"', r'$"Processing {amount} via Stripe"'),
        (r'\$"Processing \${amount} via PayPal\"', r'$"Processing {amount} via PayPal"'),
        (r'\$"\${name} is working\"', r'$"{name} is working"'),
        (r'\$"\${name} is managing \${teamSize} people\"', r'$"{name} is managing {teamSize} people"'),
        (r'\$"Managing \${teamSize} contractors\"', r'$"Managing {teamSize} contractors"'),
        (r'\$"Recording: \${description}`', r'$"Recording: {description}"'),
        (r'\$"Charge: \${amount}`', r'$"Charge: {amount}"'),
        (r'\$"Recording in bank ledger: \${description}`', r'$"Recording in bank ledger: {description}"'),
        (r'\$"Shifting to \${gear}`', r'$"Shifting to {gear}"'),
        (r'\$"\[LOG\] \${message}`', r'$"[LOG] {message}"'),
        (r'\$"Account \${accountNumber} created\"', r'$"Account {accountNumber} created"'),
        (r'\$"Person created: \${name}, Age \${age}`', r'$"Person created: {name}, Age {age}"'),
        (r'\$"Animal constructor: \${name}`', r'$"Animal constructor: {name}"'),
        (r'\$"Dog constructor: \${breed}`', r'$"Dog constructor: {breed}"'),
    ]
    
    # Apply all replacements
    for old, new in replacements:
        content = content.replace(old, new)
    
    # General cleanup for any remaining patterns
    # Fix pattern: \$"text \${var}" -> $"text {var}"  (with escaped quote at end)
    content = re.sub(r'\\\$"([^"]*?)\\\$\{([^}]+?)\}\\"', r'$"\1{\2}"', content)
    
    # Fix pattern: \$"text \${var}` -> $"text {var}" (with backtick at end)
    content = re.sub(r'\\\$"([^"]*?)\\\$\{([^}]+?)\}`', r'$"\1{\2}"', content)
    
    # Fix remaining \${ -> {
    content = content.replace('\\${', '{')
    
    # Fix remaining \$ -> $
    content = content.replace('\\$', '$')
    
    # Remove all backticks that are escaped or trailing
    content = content.replace('`', '')
    
    # Fix escaped quotes that shouldn't be escaped
    content = content.replace('\\"', '"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'Fixed {filepath} ({original_len} -> {len(content)} bytes)')

print('Done!')
