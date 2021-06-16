Explanation of the algorithm with the help of Java:
The task requires that the sum of any two numbers n is NOT evenly divisible by k. To solve this challenge in a reasonable time we need to know a few things about remainders.

For example, when we divide the number n = 7 by the divisor k = 4, we get a remainder of 3. When we divide the number n = 9 by k = 4, we get a remainder of 1. We can see a correlation here: If the sum of two remainders is equal to the divisor k, then the sum of the two corresponding numbers is evenly divisible by the divisor k.

We now know that we cannot leave 7 and 9 together in the set, since their sum 16 divided by k = 4 yields a remainder of zero. Therefore, we must choose one of the two numbers, either 7 or 9. This applies to all numbers whose remainders add up to k.

The task constraints specify that the initial numbers are distinct. However, this does not count for the remainders. We can leave as many numbers with the same remainder in the set as we like (with two exceptions, which we will investigate in a moment). No pairs can be built with them whose sum is evenly divisible by k.

Let's take [3, 7, 11] as an example. They all have a remainder of 3 at k = 4 and there is no combination that would be evenly divisible by 4. The complementary remainder of 3 to k = 4 is 1. Therefore, any number with a remainder of 1, for example n = 5, makes this set invalid.

So if a set with [3, 7, 11, 1] was given, we would have to decide which numbers to take: either [3, 7, 11]or [1]. Since we don't deal with the numbers directly, we search for complementary remainders and choose the one that most often occurs and add its frequency to our maximum amount of valid numbers.

We now focus on the two special cases. The first one is, where the remainder is exactly k/2, so remainder and complementary remainder are identical. This can only happen when k is even. For example let's take [6, 10, 14] and k = 4. Each of the numbers yields 2 as remainder. As we can clearly see, each sum of any combination is divisible by k evenly. As a consequence, of all the numbers whose remainder is exactly k/2, we may add only one to the subset.

The second special case occurs when the remainder is 0. It doesn't matter whether k is even or odd. Let's take for example [7, 14, 21], where k = 7. Each of these numbers yields a remainder of 0, and each sum of any combination is divisible by k evenly. This means that at most one of them can be added to the set. The same goes for [4, 12, 16] with k = 4.

Let's now create an initial set from the values above: [3, 7, 11, 1, 6, 10, 14, 4, 12, 16] with k = 4. According to what we have just concluded, the maximum number of valid values in the set must be 5. We now want to prove this by implementing a proper algorithm.

The first step is to determine how often each remainder occurs. A map can be used for this. However, since we deal with a time-critical situation, we use an array to store the counts. Its index specifies the value of the remainder. So we create an array with the length of k and fill it. k itself will never appear as a remainder.

int[] countByRemainder = new int[k];

for (int num : s)
   countByRemainder[num % k] += 1;
Now we are ready to start counting valid values. We start by looking for the complementary remainders and sum up the count of occurrences from the one that occurs the most. In doing so, we skip both the remainder with the value of 0 by starting at an index of 1 and the one with the value of k/2, done by the if-statement. These edge cases will be treated afterwards.

for (int i = 1; i <= k / 2; i++)
   if (i != k / 2.0)
       subsetMaxSize += Math.max(countByRemainder[i], countByRemainder[k - i]);
Now we consider the first edge case. Since this only occurs when k is even, we check this and if so, we add 1 to the counter in case index position k/2 has a value greater 0.

if (k % 2 == 0)
   sizeOfSubset += Math.min(countByRemainder[k / 2], 1);
And now to the last border case. If we find a value greater 0 at index 0 we count forward one last time by one.

return sizeOfSubset + Math.min(countByRemainder[0], 1);
And thus we get a result of 5 valid values that meet the requirements. Cheers.

Once again, the complete algorithm put together:

public static int nonDivisibleSubset(int k, List<Integer> s) {
   int[] countByRemainder = new int[k];

   for (int num : s)
       countByRemainder[num % k] += 1;

   int sizeOfSubset = 0;

   for (int i = 1; i <= k >> 1; i++)
       if (k != i << 1)
           sizeOfSubset += Math.max(countByRemainder[i], countByRemainder[k - i]);

   if ((k & 1) == 0)
       sizeOfSubset += Math.min(countByRemainder[k >> 1], 1);

   return sizeOfSubset + Math.min(countByRemainder[0], 1);
}