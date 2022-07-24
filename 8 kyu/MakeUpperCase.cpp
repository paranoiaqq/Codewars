#include <string>
#include <cctype>
using namespace std;

std::string makeUpperCase (const std::string& input_str)
{
  string str = input_str;
  for (int i = 0; i < input_str.length(); i++)
    {
    str[i] = toupper(input_str[i]);
  }
  return str;
}