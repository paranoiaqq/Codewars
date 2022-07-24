using namespace std;
#include <set>

bool is_isogram(std::string str) {
  set <char> s;
  for (int i = 0; i < str.size(); i++)
    {
    if (s.find(str[i]) != s.end()) { return false; }
    else {
      s.insert(toupper(str[i]));
      s.insert(tolower(str[i]));
    }
  }
  return true;
}