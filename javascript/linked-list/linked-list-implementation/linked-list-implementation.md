# Singly Linked List

This challenge will cover the implementation of a singly linked linked list.

## Challenge

Features of this challenge include:

**Node**

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

**Linked List**

- Create a Linked List class

- Within your Linked List class, include a head property.

  - Upon instantiation, an empty Linked List should be created.

- The class should contain the following methods:

  - insert

    - Arguments: value

    - Returns: nothing

    - Adds a new node with that value to the head of the list with an O(1) Time performance.

- includes

  -Arguments: value

  -Returns: Boolean

    - Indicates whether that value exists as a Node’s value somewhere within the list.

- to string

  -Arguments: none

  -Returns: a string representing all the values in the Linked List, formatted as:

``` javascript
  "{ a } -> { b } -> { c } -> NULL"
```

## Approach & Efficiency

Some approaches I had to maximize the efficiency of the code are as follows:

- Ascribe to the single responsibility principle

In terms of functionality, this implementation challenge should prove the following:

- Can successfully instantiate an empty linked list

- Can properly insert into the linked list

- The head property will properly point to the first node in the linked list

- Can properly insert multiple nodes into the linked list

- Will return true when finding a value within the linked list that exists

- Will return false when searching for a value in the linked list that does not exist

- Can properly return a collection of all the values that exist in the linked list

## API

None available for this challenge.
