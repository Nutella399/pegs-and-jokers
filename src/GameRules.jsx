import "./GameRules.css";

const GameRules = ({ closeGuide }) => {
  return (
    <div class="rules-container">
      <table>
        <thead>
          <tr>
            <th>Card Value</th>
            <th>
              Card Usage Description
              <button class="close-button" onClick={() => closeGuide(false)}>
                Close Guide
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ace</td>
            <td>
              Either bring one peg out of Start Area to Come-out hole or move
              one peg forward 1 hole on main track or Home Area
            </td>
          </tr>
          <tr>
            <td>2,3,4,5,6</td>
            <td>
              Move one pef forward, 2,3,4,5,6 holes. The 2 may also be used to
              switch one of a players pegs with a peg of a partner or a peg of
              an opponent
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              Either move one peg forward 7 holes or split 7 between two pegs -
              e.g. move one peg forward 5 and antoher peg forward 2 (both must
              move forward)
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Move one peg backwards 8 holes</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              Either move one peg forward 9 holes or split 9 between two pegs,
              one moving forward and the other backward - e.g. move one peg
              forward 2 and another backward 7
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Move one peg forward 10 holes</td>
          </tr>
          <tr>
            <td>Jack, Queen, King</td>
            <td>
              Either bring one peg out of the Start Area of move one peg forward
              10 holes
            </td>
          </tr>
          <tr>
            <td>Joker</td>
            <td>
              Move one of your pegs (from start area of on main track) to a hole
              on the main track that is occupied by a peg belonging to a partner
              or an opponent. Partners's pegs move to their In Spot, opponents
              pegs move to their Start Area
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameRules;
