
// adding number in an array 

if (lenFilled === lenArray)

  double the size of A

for (j = lenFilled - 1; j >= i; j--)

  A[j + 1] = A[j]

A[i] = v

lenFilled++


//removing number of an array by chosing an Index 

if empty, do nothing

remove A[i]

for (j = i + 1; j < lenFilled; j++)

  A[j - 1] = A[j]

lenFilled--


//bubble sort

do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true; ++swapCounter

while swapped


// selection sort

repeat (numOfElements - 1) times

  set the first unsorted element as the minimum

  for each of the unsorted elements

    if element < currentMinimum

      set element as new minimum

  swap minimum with first unsorted position
  

  // merge sort (most useful sort)

  split each element into partitions of size 1

recursively merge adjacent partitions

  for i = leftPartIdx to rightPartIdx

    if leftPartHeadValue <= rightPartHeadValue

      copy leftPartHeadValue

    else: copy rightPartHeadValue; Increase InvIdx

copy elements back to original array


// i tested other sorting as well like quick sort and insert sort

//i have tested and tried aswel linked list , binary heap , hash table, and binary search tree but i have no idea about others structures !!
