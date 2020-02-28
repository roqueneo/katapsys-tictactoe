import React from 'react'
import Cell from './Cell'

const Board = () => {

    const cells = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

    return (
        <div className="board">
            {
                cells.map(_ => <Cell/>)
            }
        </div>
    );
}

export default Board