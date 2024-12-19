import time
from deck import Deck

from flask import Flask

app = Flask(__name__)

deck = Deck()

#move this function to a call when we press start game we generate the deck 
#probably where we get the hand for all players as well 
deck.new_deck(2)

@app.route('/time')
def get_current_time(): 
    time_arr = time.localtime()
    parsed_time = "{}-{}-{} {}:{}:{}".format(time_arr[0], time_arr[1], 
                                             time_arr[2], time_arr[3], 
                                             time_arr[4], time_arr[5])
    return {'time': parsed_time}

#probably need to limit over here that a user can only have 5 cards 
@app.route('/hand/<int:player_id>', methods=['GET'])
def getHand(player_id):
    deck.player_draw(5, player_id)
    hand = deck.player_hands[player_id]
    return hand

#make sure the limit works for this as well probably needs to happen on the deck file
@app.route('/deck/<int:player_id>', methods=['GET'])
def drawCard(player_id):
    deck.player_draw(1, player_id)
    hand = deck.player_hands[player_id]
    return hand

@app.route('/deck/<int:player_id>/code/<string:card_code>', methods=['GET'])
def discardCard(player_id,card_code):
    deck.player_discard(1, card_code)
    hand = deck.player_hands[player_id]
    return hand