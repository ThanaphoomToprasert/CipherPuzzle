// --- Supabase Setup ---
const SUPABASE_URL = 'https://lypvztkgpkmsbcosprgt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cHZ6dGtncGttc2Jjb3Nwcmd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMTEyODQsImV4cCI6MjA3ODY4NzI4NH0.C5Ttfd8M3AZ-aJqzgx3Tzwo7_yvsT72JLnHypAQykrg';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const TRUE_RANDOM_CODES = [
    "1964", "2472", "0034", "1278", "3201", "9238", "5134", "8935", "2745", "5586", "8317", "8631", "0569", "3312", "1152", "2892", "6509", "6816", "0426", "3543", "5782", "6919", "7908", "7481", "5028", "0807", "0160", "5731", "6913", "7907", "5896", "0797", "0091", "8098", "0276", "5883", "4254", "5812", "7377", "2261", "5526", "7456", "6970", "1129", "7373", "1410", "1366", "4120", "7077", "1778", "7547", "6430", "8620", "2712", "8922", "6392", "6461", "3424", "8900", "5825", "5083", "9405", "2374", "1673", "8402", "2589", "9367", "2561", "4796", "2579", "7734", "4762", "7000", "4499", "0410", "1263", "7211", "6266", "0621", "1990", "6115", "1880", "7902", "5787", "5261", "8187", "4654", "0606", "0751", "6898", "9494", "0499", "1541", "1132", "0772", "1726", "6527", "6326", "2709", "8209", "8774", "1628", "6987", "3913", "0929", "9984", "8327", "4269", "3691", "8110", "5077", "5446", "5567", "3098", "9845", "1549", "1089", "1424", "4463", "6557", "7203", "8848", "9239", "0596", "1394", "6985", "4634", "8173", "9292", "9506", "3380", "5477", "6299", "7517", "8137", "8060", "2777", "2431", "3898", "4486", "2639", "4711", "8830", "6653", "1184", "7200", "7983", "4888", "4271", "7440", "9436", "4362", "8728", "4028", "6638", "1959", "0887", "1590", "1788", "6101", "3037", "1114", "4731", "8275", "5298", "3479", "6671", "8858", "1312", "4401", "8763", "9852", "7169", "1266", "4552", "2181", "0233", "7493", "5039", "1967", "9818", "3538", "3549", "9664", "0095", "5565", "4006", "9332", "1572", "3491", "6847", "2930", "7963", "9913", "1470", "0568", "6575", "7832", "5570", "5934", "6116", "3874", "0447", "6152", "1441", "2069", "7113", "6251", "5590", "6011", "0591", "2207", "5834", "3596", "2264", "3573", "5463", "7210", "8309", "1576", "6601", "4494", "4844", "4916", "8361", "1845", "1077", "2474", "2598", "0033", "0968", "4349", "5383", "5394", "3404", "5412", "0979", "7317", "9619", "4127", "7532", "8321", "3338", "2549", "8141", "8878", "3218", "3747", "0084", "9152", "8799", "5703", "7352", "2122", "4246", "3928", "1966", "3480", "2927", "3003", "0577", "4473", "8577", "5921", "3753", "9472", "6420", "2962", "6933", "7059", "4531", "9478", "5284", "1149", "3923", "1660", "5848", "4886", "8139", "8408", "4532", "5974", "3457", "1555", "3220", "8014", "3699", "6339", "6574", "4377", "3674", "0935", "5140", "3733", "8730", "3754", "2018", "7179", "4319", "5288", "6639", "1633", "5923", "2266", "6953", "7208", "7466", "1657", "2857", "7114", "8932", "2254", "5666", "5286", "3497", "0814", "0889", "9408", "8847", "5855", "1917", "3224", "7531", "5548", "0607", "2941", "3656", "2919", "6635", "7687", "3107", "7806", "0747", "4378", "4034", "6230", "2955", "4643", "4300", "6566", "5763", "1677", "5018", "2849", "1228", "4231", "0286", "3544", "2496", "2753", "2263", "4109", "0553", "1210", "8076", "0260", "8988", "0326", "9181", "7427", "3664", "8244", "5655", "2718", "2114", "5136", "4562", "3865", "5326", "2664", "0931", "2775", "0767", "3225", "6553", "9703", "4851", "2232", "7017", "5203", "5788", "9513", "9610", "3779", "4893", "9596", "1542", "7760", "6455", "3423", "0777", "2970", "4229", "4054", "3390", "8360", "6499", "4547", "0696", "7406", "2883", "5480", "1180", "7776", "6994", "4419", "6901", "5539", "6333", "4771", "3141", "4450", "9302", "8613", "5431", "5372", "6834", "5211", "0825", "2457", "0344", "1334", "0457", "9822", "3135", "6975", "5663", "4062", "8943", "1365", "2221", "8248", "7395", "0245", "6365", "0283", "0908", "1434", "6764", "5216", "3495", "1123", "2492", "4698", "7980", "3250", "2149", "0022", "5899", "4000", "5576", "7229", "9780", "3541", "6063", "8348", "2331", "0867", "1768", "7998", "4445", "6059", "3836", "0986", "6196", "6496", "2239", "5696", "6740", "0615", "9371", "7219", "3492", "1076", "2645", "3044", "1502", "3109", "4313", "1138", "0841", "2198", "6466", "1308", "1265", "1798", "1195", "4002", "3264", "5059", "8274", "0398", "9068", "5362", "2552", "8399", "2558", "3151", "3008", "4584", "3671", "3564", "5027", "0545", "7194", "2024", "1695", "0543", "0798", "8732", "4639", "7311", "2652", "1734", "1088", "6321", "7453", "8372", "0541", "0405", "5673", "8737", "8529", "3825", "8278", "8514", "2313", "9576", "5549", "9120", "2340", "9008", "7581", "8638", "4921", "5659", "7548", "7081", "8727", "5036", "0311", "6281", "1702", "2669", "3609", "8116", "7542", "0982", "4633", "6323", "2306", "7604", "2635", "7638", "1079", "2293", "1986", "0883", "2547", "1062", "2641", "6057", "7100", "3829", "9036", "0636", "4775", "9675", "0699", "6680", "8227", "2766", "1280", "7245", "3431", "7704", "6761", "8508", "3934", "0147", "1239", "6049", "3119", "2383", "5759", "2735", "2724", "6215", "4097", "5268", "0227", "5783", "3094", "8889", "1710", "2678", "9721", "2541", "1359", "3853", "3305", "6367", "1027", "6703", "7504", "4441", "4353", "3256", "0421", "2555", "4153", "8556", "3892", "1562", "0053", "1950", "9437", "8695", "2072", "6162", "3884", "6438", "6174", "7332", "4356", "5700", "3561", "9040", "2029", "1762", "1973", "6960", "0394", "0162", "7025", "4011", "4420", "5337", "8815", "4388", "8241", "9853", "6675", "4913", "2104", "6270", "6109", "4413", "8325", "0193", "7439", "5995", "9160", "8591", "8214", "1952", "7341", "8617", "5524", "2494", "6719", "7192", "3879", "8963", "1108", "9784", "0802", "9269", "5643", "4304", "8298", "2661", "9231", "1741", "9948", "7694", "5945", "0222", "4151", "9679", "9598", "0857", "4560", "0730", "4937", "9104", "4404", "5579", "8332", "4614", "8843", "2521", "4873", "0941", "6363", "6640", "6769", "2629", "2683", "0159", "6165", "6347", "7972", "1435", "9938", "0833", "8653", "2987", "8552", "5516", "6878", "6576", "6571", "4956", "3760", "8839", "1368", "3946", "4629", "3529", "6086", "2010", "1679", "4316", "2113", "6900", "3485", "1471", "9149", "1313", "9377", "8903", "1611", "0297", "8836", "3300", "0586", "2405", "8135", "2258", "8709", "8442", "2338", "5598", "7182", "1113", "8403", "5541", "4094", "4275", "8379", "2240", "2442", "2423", "0907", "6448", "8114", "4746", "1699", "5894", "3357", "7327", "9376", "6565", "3996", "9298", "7292", "4715", "7724", "0510", "9947", "4182", "9935", "2640", "2734", "9362", "0874", "4920", "8969", "9317", "7309", "5152", "8954", "5300", "6371", "5962", "2700", "3137", "8145", "8075", "5674", "7277", "7177", "5979", "5458", "6259", "4425", "7468", "2328", "6688", "6290", "7002", "4402", "8919", "0060", "9207", "4476", "0241", "1482", "0172", "1857", "0592", "0632", "6854", "5662", "1043", "9026", "8492", "0706", "7788", "2130", "4218", "3682", "2303", "0138", "8873", "3562", "9502", "4819", "4519", "7771", "5795", "9259", "5165", "4511", "9752", "1418", "8307", "9599", "1574", "6506", "1047", "8874", "3085", "4964", "4632", "9225", "5032", "2822", "6297", "2990", "2197", "8228", "5014", "1844", "1160", "2326", "1058", "7108", "5752", "5088", "9249", "7151", "1654", "7242", "8042", "1211", "3275", "0470", "2432", "3329", "3452", "1329", "9342", "1423", "6444", "8862", "5746", "0142", "5282", "1268", "2535", "4355", "0930", "5430", "9722", "2274", "4798", "4250", "6291", "5942", "7636", "7994", "7422", "4985", "8736", "8915", "2632", "4794", "9593", "3079", "1623", "8517", "6067", "7477", "2038", "1301", "6044", "5614", "4079", "3342", "5218", "5206", "9714", "6491", "6175", "7405", "8855", "3011", "6578", "1018", "2878", "4318", "7716", "7781", "6951", "6849", "4696", "4447", "6984", "7955", "7940", "1924", "6316", "8808", "1057", "9665", "9386", "5878", "3017", "0029", "8343", "4991", "1740", "0796", "4187", "8882", "5898", "4487", "1727", "1898", "8628", "2725", "2110", "9992", "3940", "9393", "6191", "4379", "2733", "9407", "6782", "0429", "8590", "0005", "6497", "0484", "1682", "3863", "7334", "1040", "4833", "2384", "6659", "2327", "7019", "7416", "2835", "0700", "2952", "6328", "3600", "6068", "8671", "4156", "2597", "3848", "8544", "7078", "5634", "1167", "2898", "8304", "0564", "1270", "6914", "1531", "8077", "0989", "4290", 
];
// --- DOM Elements ---
const gameBoard = document.getElementById('game-board');
// ... rest of your file

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const gameBoard = document.getElementById('game-board');
    const keypad = document.getElementById('keypad');
    const statsButton = document.getElementById('stats-button');
    const statsModal = document.getElementById('stats-modal');
    const closeModalButton = document.querySelector('.close-button');
    const newGameButton = document.getElementById('new-game-button');
    const toast = document.getElementById('toast');

    // --- Game State ---
    const MAX_ATTEMPTS = 6;
    const CODE_LENGTH = 4;
    let secretCode = '';
    let currentAttempt = 0;
    let currentGuess = [];
    let gameStatus = 'playing'; // 'playing', 'won', 'lost'

    // --- Statistics State ---
    const STATS_KEY = 'cipherCrackerStats';
    let stats = {
        gamesPlayed: 0,
        gamesWon: 0,
        currentStreak: 0,
        maxStreak: 0,
        guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
    };

    // --- Game Initialization ---
    function initializeGame() {
        // Load stats from localStorage
        loadStats();

        // Start a new round
        startNewRound();
        
        // Update the visual stats display (in the modal)
        updateStatsDisplay();
    }

    function startNewRound() {
        secretCode = generateSecretCode();
        currentAttempt = 0;
        currentGuess = [];
        gameStatus = 'playing';
        
        // Clear game board
        gameBoard.innerHTML = '';
        for (let i = 0; i < MAX_ATTEMPTS; i++) {
            let row = document.createElement('div');
            row.className = 'guess-row';
            for (let j = 0; j < CODE_LENGTH; j++) {
                let tile = document.createElement('div');
                tile.className = 'guess-tile';
                row.appendChild(tile);
            }
            gameBoard.appendChild(row);
        }

        // Reset keypad colors
        document.querySelectorAll('.key').forEach(key => {
            key.classList.remove('green', 'yellow', 'gray');
        });

        console.log(`Secret Code: ${secretCode}`); // For debugging
    }

    function generateSecretCode() {
    // Pick a random index from 0 up to 999
    const randomIndex = Math.floor(Math.random() * TRUE_RANDOM_CODES.length);
    
    // Return the code from your list at that index
    return TRUE_RANDOM_CODES[randomIndex];
}

    // --- Event Listeners ---
    keypad.addEventListener('click', (e) => {
        if (e.target.matches('.key')) {
            handleKeyPress(e.target.dataset.key);
        }
    });

    document.addEventListener('keydown', (e) => {
        let key = e.key;
        if (key >= '0' && key <= '9') {
            handleKeyPress(key);
        } else if (key === 'Enter') {
            handleKeyPress('ENTER');
        } else if (key === 'Backspace') {
            handleKeyPress('BACKSPACE');
        }
    });

    statsButton.addEventListener('click', () => statsModal.style.display = 'block');
    closeModalButton.addEventListener('click', () => statsModal.style.display = 'none');
    newGameButton.addEventListener('click', () => {
        statsModal.style.display = 'none';
        startNewRound();
    });
    window.addEventListener('click', (e) => {
        if (e.target == statsModal) {
            statsModal.style.display = 'none';
        }
    });

    // --- Key Handling ---
    function handleKeyPress(key) {
        if (gameStatus !== 'playing') return;

        if (key === 'ENTER') {
            if (currentGuess.length === CODE_LENGTH) {
                submitGuess();
            } else {
                showToast('Not enough digits');
            }
        } else if (key === 'BACKSPACE') {
            deleteDigit();
        } else if (currentGuess.length < CODE_LENGTH) {
            addDigit(key);
        }
        updateGrid();
    }

    function addDigit(key) {
        currentGuess.push(key);
    }

    function deleteDigit() {
        currentGuess.pop();
    }

    function updateGrid() {
        let row = gameBoard.children[currentAttempt];
        for (let i = 0; i < CODE_LENGTH; i++) {
            let tile = row.children[i];
            tile.textContent = currentGuess[i] || '';
        }
    }

    // --- Guess Logic ---
    function submitGuess() {
        const guess = currentGuess.join('');
        const feedback = checkGuess(guess);
        
        // Update grid with feedback colors
        const row = gameBoard.children[currentAttempt];
        feedback.forEach((color, index) => {
            row.children[index].classList.add(color);
        });

        // Update keypad with feedback colors
        currentGuess.forEach((key, index) => {
            const keyElement = document.querySelector(`.key[data-key="${key}"]`);
            const currentColor = feedback[index];

            // Only upgrade color, don't downgrade (green > yellow > gray)
            if (currentColor === 'green') {
                keyElement.classList.remove('yellow', 'gray');
                keyElement.classList.add('green');
            } else if (currentColor === 'yellow' && !keyElement.classList.contains('green')) {
                keyElement.classList.remove('gray');
                keyElement.classList.add('yellow');
            } else if (!keyElement.classList.contains('green') && !keyElement.classList.contains('yellow')) {
                keyElement.classList.add('gray');
            }
        });
        
        sendAttemptToSupabase({
            guess: guess,
            feedback: feedback, // The array ['green', 'yellow', ...]
            secret_code: secretCode, // The target code
            attempt_number: currentAttempt + 1 // The attempt number
        });

        // Check for win
        if (guess === secretCode) {
            gameStatus = 'won';
            showToast('You Won!');
            updateStats(true, currentAttempt + 1);
            saveStats();
            setTimeout(() => statsModal.style.display = 'block', 1500);
            return;
        }

        // Check for loss
        if (currentAttempt === MAX_ATTEMPTS - 1) {
            gameStatus = 'lost';
            showToast(`You Lost! Code was: ${secretCode}`);
            updateStats(false);
            saveStats();
            setTimeout(() => statsModal.style.display = 'block', 1500);
            return;
        }

        // Move to next attempt
        currentAttempt++;
        currentGuess = [];
    }

    function checkGuess(guess) {
        let codeChars = secretCode.split('');
        let guessChars = guess.split('');
        let feedback = Array(CODE_LENGTH).fill('gray');

        // 1st pass: Check for "green" (correct digit, correct position)
        for (let i = 0; i < CODE_LENGTH; i++) {
            if (guessChars[i] === codeChars[i]) {
                feedback[i] = 'green';
                codeChars[i] = null; // Mark as used
                guessChars[i] = null; // Mark as used
            }
        }

        // 2nd pass: Check for "yellow" (correct digit, wrong position)
        for (let i = 0; i < CODE_LENGTH; i++) {
            if (guessChars[i] !== null) {
                const charIndex = codeChars.indexOf(guessChars[i]);
                if (charIndex !== -1) {
                    feedback[i] = 'yellow';
                    codeChars[charIndex] = null; // Mark as used
                }
            }
        }
        return feedback;
    }

    // --- Statistics Logic ---
    function loadStats() {
        const data = localStorage.getItem(STATS_KEY);
        if (data) {
            stats = JSON.parse(data);
        }
    }

    function saveStats() {
        localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    }

    function updateStats(didWin, attempts) {
        stats.gamesPlayed++;
        if (didWin) {
            stats.gamesWon++;
            stats.currentStreak++;
            stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
            stats.guessDistribution[attempts]++;
        } else {
            stats.currentStreak = 0;
        }
        updateStatsDisplay();
    }

    function updateStatsDisplay() {
        document.getElementById('stats-played').textContent = stats.gamesPlayed;
        document.getElementById('stats-won').textContent = stats.gamesWon;
        document.getElementById('stats-streak').textContent = stats.currentStreak;
        document.getElementById('stats-max-streak').textContent = stats.maxStreak;

        const distContainer = document.getElementById('guess-distribution');
        distContainer.innerHTML = '';
        
        let maxDist = 0;
        for (let i = 1; i <= MAX_ATTEMPTS; i++) {
            if (stats.guessDistribution[i] > maxDist) {
                maxDist = stats.guessDistribution[i];
            }
        }

        for (let i = 1; i <= MAX_ATTEMPTS; i++) {
            const count = stats.guessDistribution[i];
            const percent = maxDist > 0 ? (count / maxDist) * 100 : 0;
            
            const row = document.createElement('div');
            row.className = 'dist-row';
            
            const label = document.createElement('div');
            label.className = 'dist-label';
            label.textContent = i;
            
            const bar = document.createElement('div');
            bar.className = 'dist-bar';
            bar.style.width = `calc(${percent}% + 20px)`; // 20px min width
            bar.textContent = count;

            row.appendChild(label);
            row.appendChild(bar);
            distContainer.appendChild(row);
        }
    }

    // --- Utilities ---
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // --- Start the game ---
    initializeGame();
});

async function sendAttemptToSupabase(data) {
    try {
        const { error } = await supabaseClient // <-- Use the new variable name
            .from('attempts') 
            .insert(data); 

        if (error) {
            console.error("Supabase insert error:", error);
        }

    } catch (error) {
        console.error("Error sending data to Supabase:", error);
    }
}