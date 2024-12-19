import random

CARDS = ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS', 'KS',
         'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD', 'KD',
         'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC',
         'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH', 'KH']

JOKERS = ['X1', 'X2']

SUITS = {'S': 'SPADES', 'D': 'DIAMONDS', 'H': 'HEARTS', 'C': 'CLUBS', '1': 'BLACK', '2': 'RED'}
VALUES = {'A': 'ACE', 'J': 'JACK', 'Q': 'QUEEN', 'K': 'KING', '0': '10', 'X': 'JOKER'}

class Deck(): 
    deck_count = 1
    stack = []
    player_hands = {}
    discard = []
    

    def new_deck(self, deck_count): 
        if(len(self.stack) == 0):
            cards = CARDS + JOKERS
            for i in range(0,deck_count):
                newCards = []
                for card in cards:
                    newCards.append(card + str(i + 1))
                self.stack = self.stack + newCards[:]
        random.shuffle(self.stack)
    
    def player_draw(self, draw_count, player_id): 
        response = self.draw(draw_count)
        draw_hand = response['draw_hand']
        print("remaining cards: ", response['remaining'])
        if player_id in self.player_hands: 
           self.player_hands[player_id]['hand'] = self.player_hands[player_id]['hand'] + draw_hand
        else: 
           self.player_hands[player_id] = {'hand': draw_hand}

    def player_discard(self, player_id, card_code): 
        if player_id in self.player_hands: 
            cards = self.player_hands[player_id]['hand']
            for i in range(len(cards)):
                if cards[i]['code'] == card_code:
                    self.discard.append(cards[i])
                    print("discard pile: ", len(self.discard))
                    del cards[i]
                    return  
            return {'error': 'this player does not have this card'}   
        else: 
            return {'error': 'this player does not have a hand'}
    
    def draw(self, draw_count): 
        if draw_count > len(self.stack):
            cards = self.stack[0:]
            remaining_req = draw_count - len(self.stack)
            random.shuffle(self.discard)
            self.stack = self.discard
            self.discard = []
            cards = cards + self.stack[0:remaining_req]
            self.stack = self.stack[remaining_req:]
        else: 
            cards = self.stack[0:draw_count]
            self.stack = self.stack[draw_count:]
        
        hand = []
        for card in cards: 
            hand.append(card_to_dict(card))
        return {'draw_hand': hand, 'remaining': len(self.stack)}
         
def card_to_dict(card): 
    value = card[:1]
    suit = card[1:2]
    deck_num = card[2:]

    code = value + suit
    card_dict = {
        'code': code, 
        'image': 'https://deckofcardsapi.com/static/img/{}.png'.format(code),
        'rank': value, 
        'suit': suit
    }

    if(code == 'AD'): 
        card_dict['image'] = 'https://deckofcardsapi.com/static/img/aceDiamonds.png'
    
    card_dict['code'] = card_dict['code'] + deck_num 

    return card_dict