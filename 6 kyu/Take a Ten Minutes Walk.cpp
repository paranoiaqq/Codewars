#include <vector>
using namespace std;

bool isValidWalk(std::vector<char> walk) {
  vector <int> v(4, 0);
  if (walk.size() != 10) { return false; }
  else{
    for (unsigned long i = 0; i < walk.size(); i++)
      {
      switch (walk[i]){
          case 'n':
            v[0]++;
            break;
          case 's':
            v[1]++;
            break;
          case 'w':
            v[2]++;
            break;
          case 'e':
            v[3]++;
            break;
      }
    }
    if ((v[0] == v[1]) and (v[2] == v[3])) { return true; }
  }
  return false;
}