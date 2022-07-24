#include <string>
#include <vector>
using namespace std;

std::vector<std::string> solution(const std::string &s)
{
    vector <string> v;
    string str = s;
    if (s.length() % 2 != 0) { str.push_back('_'); }
    for (int i = 0; i < str.size(); i = i+2)
      {
      string temp;
      temp.push_back(str[i]);
      temp.push_back(str[i+1]);
      v.push_back(temp);
    }
    return v;
}