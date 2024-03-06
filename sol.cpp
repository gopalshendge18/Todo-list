#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);


/*
 * Complete the 'countMinimumOperations' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY price
 *  2. INTEGER_ARRAY query
 */

vector<long> countMinimumOperations(vector<int> price, vector<int> query) {

vector<long >ans;
map<long,long>temp; long long sum=0;
for(int i=1;i<price.size();i++){
    
    price[i] += price[i-1];
}  

for(auto it:query){
    temp[it]++;
}



                                
for(int i=0;i<query.size();i++){
     
int index= lower_bound(price.begin(),price.end(),query[i])-price.begin();

long ansfr=   abs(price[index]-((index+1) * query[i]));
long x= abs(price[index]-price[price.size()-1]);
long ansbck= abs(x-((price.size()-(index+1)*query[i])));

ans.push_back(ansbck+ ansfr);




}


return ans;

}








int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string price_count_temp;
    getline(cin, price_count_temp);

    int price_count = stoi(ltrim(rtrim(price_count_temp)));

    vector<int> price(price_count);

    for (int i = 0; i < price_count; i++) {
        string price_item_temp;
        getline(cin, price_item_temp);

        int price_item = stoi(ltrim(rtrim(price_item_temp)));

        price[i] = price_item;
    }

    string query_count_temp;
    getline(cin, query_count_temp);

    int query_count = stoi(ltrim(rtrim(query_count_temp)));

    vector<int> query(query_count);

    for (int i = 0; i < query_count; i++) {
        string query_item_temp;
        getline(cin, query_item_temp);

        int query_item = stoi(ltrim(rtrim(query_item_temp)));

        query[i] = query_item;
    }

    vector<long> result = countMinimumOperations(price, query);

    for (size_t i = 0; i < result.size(); i++) {
        fout << result[i];

        if (i != result.size() - 1) {
            fout << "\n";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
