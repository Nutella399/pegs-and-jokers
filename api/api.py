import time
from deck import Deck

from flask import Flask

app = Flask(__name__)

deck = Deck(2)

@app.route('/time')
def get_current_time(): 
    time_arr = time.localtime()
    parsed_time = "{}-{}-{} {}:{}:{}".format(time_arr[0], time_arr[1], 
                                             time_arr[2], time_arr[3], 
                                             time_arr[4], time_arr[5])
    return {'time': parsed_time}

@app.route('/hand/<int:player_id>', methods=['GET'])
def getHand(player_id):
    #when I move to different states this probably doesn't need to be here
    #deck.player_draw(6, player_id)
    if(deck.player_hands[player_id]):
        hand = deck.player_hands[player_id]
        return hand
    else:
        return []

@app.route('/discard', methods=['GET'])
def peekTopDiscardCard():
    response = deck.peekToDicardCard()
    print(response)
    top_card = response[0]['image']
    return {'card' : top_card}

@app.route('/deck', methods=['GET'])
def peekDeckNextCard():
    response = deck.peekTopCard()
    print(response)
    next_card = response['image']
    return {'card' : next_card}

@app.route('/deck/<int:player_id>', methods=['GET'])
def drawCard(player_id):
    error = deck.player_draw(1, player_id)
    if(error): 
        print(error)
    hand = deck.player_hands[player_id]
    return hand

@app.route('/deck/<int:player_id>/code/<string:card_code>', methods=['GET'])
def discardCard(player_id,card_code):
    error = deck.player_discard(1, card_code)
    if(error): 
        print(error)
    hand = deck.player_hands[player_id]
    return hand