// Capture puzzle board into FEN

function capture_dom() {
    const who_to_move = $('.section-heading-title').textContent.split(" ")[0];
    const positions = $$('.piece').map(node => {
        const square_cls = node.classList[1];
        const pos_x = parseInt(square_cls.substr(7, 2));
        const pos_y = parseInt(square_cls.substr(9, 2));
        const piece_image = node.style.backgroundImage;
        const piece_code = piece_image.substr(piece_image.length - 8, 2);
        return { xy: [pos_x, pos_y], piece_code };
    });
    return {who_to_move, positions};
}

function convert_board_to_fen(board) {
    const {who_to_move, positions} = board;
    const grid = new Array(8).fill(null).map(i => new Array(8).fill(null));
    positions.forEach(item => {
        const {xy, piece_code} = item;
        const fen_piece = piece_code.substr(0, 1) == 'w' ? piece_code.substr(1, 1).toUpperCase() : piece_code.substr(1, 1);
        // arranged from rank 8 downto 1, and from file a to h
        grid[8 - xy[1]][xy[0] - 1] = fen_piece;
    });
    const fen_1 = grid.map(rank => {
        var n_space = 0;
        const out = [];
        rank.forEach(cell => {
            if (cell === null) {
                n_space += 1;
            }
            else {
                if (n_space > 0) {
                    out.push(String(n_space));
                }
                out.push(cell);
                n_space = 0;
            }
        });
        if (n_space > 0) {
            out.push(String(n_space));
        }
        return out.join("");
    }).join("/");
    const who = who_to_move.substr(0, 1).toLowerCase();
    return `${fen_1} ${who} - - 0 1`;
}

function capture_puzzle() {
    console.log('https://lichess.org/analysis/' + encodeURI(convert_board_to_fen(capture_dom())));
}
