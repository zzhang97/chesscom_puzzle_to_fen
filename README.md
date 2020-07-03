# chesscom_puzzle_to_fen

How to use it

Open a chess.com puzzle in google Chrome. Then open dev tools (F12) and navigate to "console" tab. Paste the content of capture.js into the console. Type "capture_puzzle()" in the console and run it. You should see an URL in the output. This URL points to lichess.org. FEN is embedded in the URL. If you click open (in a new tab) the lichess.org URL, you should see the same board setup as the current chess.com puzzle. Once you navigate to your next puzzle, you can run capture_puzzle() again.
