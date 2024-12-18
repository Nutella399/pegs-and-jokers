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
        return {'hand': ['Joker', 'King', '8', '7', 'Ace']}
    else: 
        return {'hand': ['9', '1', '2', '3', '4']}