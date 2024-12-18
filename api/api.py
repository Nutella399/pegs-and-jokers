import time
from datetime import datetime

from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time(): 
    time_arr = time.localtime()
    parsed_time = "{}-{}-{} {}:{}:{}".format(time_arr[0], time_arr[1], 
                                             time_arr[2], time_arr[3], 
                                             time_arr[4], time_arr[5])
    return {'time': parsed_time}

@app.route('/hand/<int:user_id>', methods=['GET'])
def getHand(user_id):
    if(user_id == 1):
        return {'hand': [{'Suit': 'Diamonds', 'Rank': 'Joker'}, 
                         {'Suit': 'Diamonds', 'Rank': 'King'}, 
                         {'Suit': 'Diamonds', 'Rank': '7'},
                         {'Suit': 'Diamonds', 'Rank': '8'},
                         {'Suit': 'Diamonds', 'Rank': 'Ace'}]}
    else:
       return {'hand': [{'Suit': 'Diamonds', 'Rank': '9'}, 
                         {'Suit': 'Diamonds', 'Rank': '1'}, 
                         {'Suit': 'Diamonds', 'Rank': '2'},
                         {'Suit': 'Diamonds', 'Rank': '3'},
                         {'Suit': 'Diamonds', 'Rank': '4'}]}
    
    