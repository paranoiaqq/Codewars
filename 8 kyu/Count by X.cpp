#include <vector>
using namespace std;

std::vector<int> countBy(int x,int n){
  vector <int> v;
  for (int i = 1; i < n+1; i++)
    {
      v.push_back(x * i);
  }
  return v;
}