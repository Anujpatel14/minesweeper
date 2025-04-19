const { useState, useEffect } = React;

function Minesweeper() {
    const [boardSize, setBoardSize] = useState(8);
    const [board, setBoard] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [mines, setMines] = useState([]);
    const [revealed, setRevealed] = useState(new Set());
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const initializeBoard = () => {
        const newBoard = Array(boardSize).fill().map(() => Array(boardSize).fill(0));
        const newMines = [];
        const numMines = Math.floor(boardSize * boardSize * 0.15); // 15% of cells are mines

        // Place mines randomly
        while (newMines.length < numMines) {
            const x = Math.floor(Math.random() * boardSize);
            const y = Math.floor(Math.random() * boardSize);
            if (!newMines.some(mine => mine.x === x && mine.y === y)) {
                newMines.push({ x, y });
                newBoard[y][x] = -1; // -1 represents a mine
            }
        }

        // Calculate numbers
        for (let y = 0; y < boardSize; y++) {
            for (let x = 0; x < boardSize; x++) {
                if (newBoard[y][x] !== -1) {
                    let count = 0;
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            const newX = x + dx;
                            const newY = y + dy;
                            if (newX >= 0 && newX < boardSize && newY >= 0 && newY < boardSize) {
                                if (newBoard[newY][newX] === -1) count++;
                            }
                        }
                    }
                    newBoard[y][x] = count;
                }
            }
        }

        setBoard(newBoard);
        setMines(newMines);
        setRevealed(new Set());
        setGameOver(false);
        setGameWon(false);
        setStartTime(new Date());
        setEndTime(null);
    };

    useEffect(() => {
        initializeBoard();
    }, [boardSize]);

    const handleCellClick = (x, y) => {
        if (gameOver || revealed.has(`${x},${y}`)) return;
        
        const newRevealed = new Set(revealed);
        newRevealed.add(`${x},${y}`);
        setRevealed(newRevealed);

        if (board[y][x] === -1) {
            setGameOver(true);
            setEndTime(new Date());
            return;
        }

        // Check for win condition
        const totalCells = boardSize * boardSize;
        const totalMines = mines.length;
        if (newRevealed.size === totalCells - totalMines) {
            setGameWon(true);
            setEndTime(new Date());
        }
    };

    const getGameDuration = () => {
        if (!startTime || !endTime) return 0;
        return Math.floor((endTime - startTime) / 1000);
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
                <h1 className="text-2xl font-bold mb-4">Minesweeper</h1>
                <div className="flex gap-4 mb-4">
                    <button 
                        onClick={() => setBoardSize(8)}
                        className={`px-4 py-2 rounded ${boardSize === 8 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        8x8
                    </button>
                    <button 
                        onClick={() => setBoardSize(9)}
                        className={`px-4 py-2 rounded ${boardSize === 9 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        9x9
                    </button>
                    <button 
                        onClick={() => setBoardSize(16)}
                        className={`px-4 py-2 rounded ${boardSize === 16 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        16x16
                    </button>
                </div>
                <button 
                    onClick={initializeBoard}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    New Game
                </button>
            </div>

            {(gameOver || gameWon) && (
                <div className="mb-4 p-4 rounded bg-gray-100">
                    <h2 className="text-xl font-bold mb-2">
                        {gameWon ? 'Congratulations! You won!' : 'Game Over!'}
                    </h2>
                    <p>Time: {getGameDuration()} seconds</p>
                    <p>Mines: {mines.length}</p>
                    <p>Cells revealed: {revealed.size}</p>
                </div>
            )}

            <div className="grid" style={{ gridTemplateColumns: `repeat(${boardSize}, 30px)` }}>
                {board.map((row, y) => 
                    row.map((cell, x) => (
                        <div
                            key={`${x}-${y}`}
                            className={`cell ${revealed.has(`${x},${y}`) ? 'revealed' : ''} ${
                                gameOver && cell === -1 ? 'mine' : ''
                            }`}
                            onClick={() => handleCellClick(x, y)}
                        >
                            {revealed.has(`${x},${y}`) && cell > 0 && cell}
                            {gameOver && cell === -1 && '💣'}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

ReactDOM.render(<Minesweeper />, document.getElementById('root')); 