export const codingChallenges = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    testCases: [
      { input: '[2,7,11,15], target = 9', output: '[0,1]' },
      { input: '[3,2,4], target = 6', output: '[1,2]' }
    ],
    starterCode: 'function twoSum(nums, target) {\n  // Your code here\n}',
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
  },
  {
    id: '2',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
    testCases: [
      { input: '121', output: 'true' },
      { input: '-121', output: 'false' }
    ],
    starterCode: 'function isPalindrome(x) {\n  // Your code here\n}',
    solution: `function isPalindrome(x) {
  if (x < 0) return false;
  return x === Number(x.toString().split('').reverse().join(''));
}`
  },
  // Add 13 more challenges with similar structure
];