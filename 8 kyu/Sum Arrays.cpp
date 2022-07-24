#include <vector>
using namespace std;

int sum(std::vector<int> nums) {
  double sum = 0;
  if (nums.size() == 0) { return 0; }
  else {
    for (int i = 0; i < nums.size(); i++)
      {
      sum+= nums[i];
    }
  }
  return sum;
}