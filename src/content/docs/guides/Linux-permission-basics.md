---
title: Permissions in Linux with chmod
sidebar:
    hidden: false
has_children: false
parent: General Guides
pagefind: true
last_modified_date: 2024-01-30
---



In Linux, file permissions are crucial for maintaining the security and integrity of your system. The `chmod` command allows you to modify these permissions. This guide will walk you through the basics of using `chmod` to manage file permissions.

> [!WARNING] Warning
> Modifying file permissions wields great power in Linux. Missteps can lead to destructive commands executing without hesitation.

## Understanding File Permissions

Linux uses a three-part permission system: read (`r`), write (`w`), and execute (`x`). These permissions are assigned to three entities: the owner of the file, the group associated with the file, and others (everyone else).

- `r` (read): Allows reading or viewing the file.
- `w` (write): Allows modifying or deleting the file.
- `x` (execute): Allows executing the file if it's a script or binary.

Each file has a 9-character permission string, representing read, write, and execute permissions for the owner, group, and others. For example, `rw-r--r--` means the owner has read and write permissions, while the group and others have only read permissions.

## Using `chmod` Command

The `chmod` command follows the syntax:

```bash
chmod [options] mode file
```

- `options`: Additional parameters for the `chmod` command.
- `mode`: The permissions to be set, expressed in the octal or symbolic notation
- `file`: The file or directory whose permissions you want to modify.

### Octal Notation

In octal notation, each permission has a numeric value:

- `4` for read (`r`).
- `2` for write (`w`).
- `1` for execute (`x`).

To set permissions, add the values for the desired permissions. For example:

- `chmod 644 file.txt` gives read and write permissions to the owner and read-only permissions to the group and others.

### Symbolic Notation

In symbolic notation, you use letters and symbols to represent permissions. The syntax is:

```bash
chmod [who] operator permission file
```

- `who`: Represents the user type (`u` for owner, `g` for group, `o` for others, `a` for all).
- `operator`: Specifies whether to add (`+`), remove (`-`), or set (`=`) permissions.
- `permission`: The permission to be added, removed, or set.

For example:

- `chmod u+x file.txt` adds execute permission for the owner.

## Examples

1. Give read, write, and execute permissions to the owner, and read-only permissions to the group and others:

```bash
chmod 755 script.sh
```

2. Add write permission for the group:

```bash
chmod g+w file.txt
```

3. Set read-only permissions for others:

```bash
chmod o=r file.txt
```



This guide covers the basics of using `chmod` in Linux. Experiment with different permissions to meet your specific needs.