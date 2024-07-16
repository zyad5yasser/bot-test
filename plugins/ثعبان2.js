import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

const games = {};

const ladders = { 3: 22, 5: 8, 11: 26, 20: 29 };
const snakes = { 27: 1, 21: 9, 17: 4, 19: 7 };
const winningPosition = 30;

const drawBoard = (positions) => {
    try {
        const canvas = createCanvas(600, 600);
        const ctx = canvas.getContext('2d');
        const boardSize = 10;
        const cellSize = 60;

        // رسم الشبكة وترقيم المربعات
        const colors = ['red', 'green', 'blue', 'yellow'];
        ctx.lineWidth = 2;
        ctx.font = '20px Arial';

        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const number = boardSize * boardSize - (i * boardSize + j);
                const color = colors[(i + j) % colors.length];
                ctx.fillStyle = color;
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
                ctx.strokeStyle = 'black';
                ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
                ctx.fillStyle = 'black';
                ctx.fillText(number.toString(), j * cellSize + cellSize / 2 - 10, i * cellSize + cellSize / 2 + 10);
            }
        }

        // رسم السلالم
        ctx.strokeStyle = 'green';
        for (let start in ladders) {
            let end = ladders[start];
            drawShape(ctx, start, end, boardSize, cellSize, '🪜');
        }

        // رسم الثعابين
        ctx.strokeStyle = 'red';
        for (let start in snakes) {
            let end = snakes[start];
            drawShape(ctx, start, end, boardSize, cellSize, '🐍');
        }

        // رسم اللاعبين
        const playerColors = ['blue', 'yellow', 'purple', 'orange'];
        let i = 0;
        for (let player in positions) {
            let pos = positions[player];
            ctx.fillStyle = playerColors[i % playerColors.length];
            ctx.beginPath();
            ctx.arc((pos % boardSize) * cellSize + cellSize / 2, Math.floor(pos / boardSize) * cellSize + cellSize / 2, cellSize / 4, 0, Math.PI * 2);
            ctx.fill();
            i++;
        }

        // حفظ الصورة
        const buffer = canvas.toBuffer('image/png');
        writeFileSync('/mnt/data/board.png', buffer);
        console.log('Board image created and saved.');
    } catch (error) {
        console.error('Error in drawBoard function:', error);
    }
};

const drawShape = (ctx, start, end, boardSize, cellSize, symbol) => {
    ctx.beginPath();
    ctx.moveTo((start % boardSize) * cellSize + cellSize / 2, Math.floor(start / boardSize) * cellSize + cellSize / 2);
    ctx.lineTo((end % boardSize) * cellSize + cellSize / 2, Math.floor(end / boardSize) * cellSize + cellSize / 2);
    ctx.stroke();
    ctx.fillText(symbol, (end % boardSize) * cellSize - 10, Math.floor(end / boardSize) * cellSize + 10);
};

const handler = async (m, { conn, command, args }) => {
    const chatId = m.chat;
    const roomName = args[0];
    const playerId = m.sender;

    console.log(`Received command: ${command}, Room: ${roomName}, Player: ${playerId}`);

    if (command === 'ابدأ_سلم_وثعبان') {
        if (!roomName) {
            console.log('Room name is not specified.');
            return await conn.reply(chatId, "يرجى تحديد اسم الغرفة.", m);
        }
        if (!games[roomName]) {
            games[roomName] = {
                players: [playerId],
                playerPositions: { [playerId]: 0 },
                currentPlayerIndex: 0
            };
            console.log(`Room ${roomName} created by player ${playerId}`);
            await conn.reply(chatId, `🎲 تم إنشاء غرفة "${roomName}"! انضم اللاعب 1. استخدم الأمر 'انضم_سلم_وثعبان ${roomName}' للانضمام.`, m);
        } else {
            console.log('Game is already in progress.');
            return await conn.reply(chatId, "اللعبة قيد التشغيل بالفعل!", m);
        }
    }

    if (command === 'انضم_سلم_وثعبان') {
        if (!roomName) {
            console.log('Room name is not specified.');
            return await conn.reply(chatId, "يرجى تحديد اسم الغرفة.", m);
        }
        if (!games[roomName]) {
            console.log('Game has not started yet.');
            return await conn.reply(chatId, "لم تبدأ اللعبة بعد! استخدم الأمر 'ابدأ_سلم_وثعبان' لبدء اللعبة.", m);
        }
        if (games[roomName].players.includes(playerId)) {
            console.log('Player already joined.');
            return await conn.reply(chatId, "أنت منضم بالفعل لهذه اللعبة!", m);
        }
        if (games[roomName].players.length < 2) {
            games[roomName].players.push(playerId);
            games[roomName].playerPositions[playerId] = 0;
            console.log(`Player ${playerId} joined room ${roomName}.`);
            await conn.reply(chatId, `🎲 انضم اللاعب ${games[roomName].players.length} إلى غرفة "${roomName}".`, m);

            if (games[roomName].players.length === 2) {
                console.log(`Room ${roomName} is now full.`);
                await conn.reply(chatId, `🎲 اكتمل عدد اللاعبين في غرفة "${roomName}"! دور اللاعب 1 (استخدم الأمر 'رمي_النرد ${roomName}' لتحريك النرد).`, m);
            }
        } else {
            console.log('Cannot join, either game not started or room is full.');
            await conn.reply(chatId, "لا يمكن الانضمام، إما أن اللعبة لم تبدأ بعد أو اكتمل عدد اللاعبين.", m);
        }
    }

    if (command === 'رمي_النرد') {
        if (!roomName) {
            console.log('Room name is not specified.');
            return await conn.reply(chatId, "يرجى تحديد اسم الغرفة.", m);
        }
        if (!games[roomName]) {
            console.log('Game has not started yet.');
            return await conn.reply(chatId, "لم تبدأ اللعبة بعد! استخدم الأمر 'ابدأ_سلم_وثعبان' لبدء اللعبة.", m);
        }

        const game = games[roomName];
        const currentPlayer = game.players[game.currentPlayerIndex];

        if (currentPlayer !== playerId) {
            console.log(`Not the player's turn. Current player: ${currentPlayer}, Command issued by: ${playerId}`);
            return await conn.reply(chatId, `ليس دورك! إنه دور اللاعب ${game.currentPlayerIndex + 1}.`, m);
        }

        const diceRoll = Math.floor(Math.random() * 6) + 1;
        let newPosition = game.playerPositions[currentPlayer] + diceRoll;
        let message = `🎲 @${currentPlayer.split('@')[0]} رمى النرد وحصل على ${diceRoll} وتحرك إلى المربع ${newPosition}`;

        if (ladders[newPosition]) {
            newPosition = ladders[newPosition];
            message += ` وصعد السلم إلى المربع ${newPosition} 🪜`;
        } else if (snakes[newPosition]) {
            newPosition = snakes[newPosition];
            message += ` ونزل بالثعبان إلى المربع ${newPosition} 🐍`;
        }

        game.playerPositions[currentPlayer] = newPosition;

        // رسم الشبكة
        console.log(`Drawing board for positions: ${JSON.stringify(game.playerPositions)}`);
        drawBoard(game.playerPositions);
        console.log('Sending board image.');
        await conn.sendMessage(chatId, { text: message, mentions: game.players }, { quoted: m });
        await conn.sendFile(chatId, '/tmp/board.png', 'board.png', '', m);

        if (newPosition >= winningPosition) {
            message += `\n🏁 @${currentPlayer.split('@')[0]} فاز! 🎉`;
            await conn.sendMessage(chatId, { text: message, mentions: game.players }, { quoted: m });
            delete games[roomName];
            return;
        }

        game.currentPlayerIndex = (game.currentPlayerIndex + 1) % game.players.length;
        const nextPlayer = game.players[game.currentPlayerIndex];
        console.log(`Next turn: Player ${nextPlayer}`);
        await conn.sendMessage(chatId, { text: `🎲 دور @${nextPlayer.split('@')[0]}، استخدم الأمر 'رمي_النرد ${roomName}' لتحريك النرد.`, mentions: [nextPlayer] }, { quoted: m });
    }
};

handler.help = ['ابدأ_سلم_وثعبان', 'انضم_سلم_وثعبان', 'رمي_النرد'];
handler.tags = ['game'];
handler.command = /^(ابدأ_سلم_وثعبان|انضم_سلم_وثعبان|رمي_النرد)$/i;

export default handler;
