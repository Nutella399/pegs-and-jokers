from deck import Deck

deck = Deck()
deck.new_deck(4)

player_id_1 = 1
player_id_2 = 2

def test_new_deck(): 
    assert(len(deck.stack) == 216)
    assert('AH1' in deck.stack)
    assert('AH2' in deck.stack)
    assert('AH3' in deck.stack)
    assert('AH4' in deck.stack)

def test_player_draw():
    deck.player_draw(5, player_id_1)
    assert(len(Deck.player_hands[player_id_1]['hand']) == 5)
    deck.player_draw(5, player_id_2)
    assert(len(Deck.player_hands[player_id_2]['hand']) == 5)
    deck.player_draw(1, player_id_1)
    assert(len(Deck.player_hands[player_id_1]['hand']) == 6)

def test_player_discard(): 
    assert(len(Deck.player_hands[player_id_1]['hand']) == 6)
    card = deck.player_hands[player_id_1]['hand'][0]['code']
    error = deck.player_discard(player_id_1, card)
    assert(error is None)
    assert(len(Deck.player_hands[player_id_1]['hand']) == 5)

def test_player_discard_not_in_hand(): 
    card = deck.player_hands[player_id_2]['hand'][0]['code']
    error = deck.player_discard(player_id_1, card)
    assert(error['error'] == 'this player does not have this card')

def test_player_discard_not_in_hand(): 
    card = deck.player_hands[player_id_2]['hand'][0]['code']
    error = deck.player_discard(3, card)
    assert(error['error'] == 'this player does not have a hand')
    

def test_draw_cards_at_empty(): 
    deck.stack = []
    deck.discard = ['AS1']
    
    hand = deck.draw(1)['draw_hand']
    assert(hand[0]['code'] == 'AS1')

def test_draw_when_not_enough(): 
    deck.stack = ['AS2']
    deck.discard = ['AS1']
    
    hand = deck.draw(2)['draw_hand']
    assert(hand[0]['code'] == 'AS2')
    assert(hand[1]['code'] == 'AS1')


    

