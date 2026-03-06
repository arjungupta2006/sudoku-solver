#include <bits/stdc++.h>
using namespace std;

bool valid(vector<vector<int>> &board, int row, int col, int num)
{
    for (int i = 0; i < 9; i++)
    {
        if (board[i][col] == num || board[row][i] == num)
            return false;
        if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == num)
            return false;
    }
    return true;
}

bool solve(vector<vector<int>> &board)
{
    for (int row = 0; row < 9; row++)
    {
        for (int col = 0; col < 9; col++)
        {
            if (board[row][col] == 0)
            {
                for (int num = 1; num <= 9; num++)
                {
                    if (valid(board, row, col, num))
                    {
                        board[row][col] = num;
                        if (solve(board))
                            return true;
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

int main()
{
    vector<vector<int>> board(9, vector<int>(9));

    for (int i = 0; i < 9; i++)
    {
        for (int j = 0; j < 9; j++)
        {
            cin >> board[i][j];
        }
    }

    if (solve(board))
    {
        for (int i = 0; i < 9; i++)
        {
            for (int j = 0; j < 9; j++)
            {
                cout << board[i][j] << " ";
            }
            cout << endl;
        }
    }
    else
    {
        cout << "NO POSSIBLE SOLUTION!" << endl;
    }
    return 0;
}