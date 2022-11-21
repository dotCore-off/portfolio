// Important vars
const BLACKLISTED_KEY_CODES = [38];
const getTerminalInput = document.getElementById('')
let currentTheme = 'cyberdark';
let userInput, terminalOutput;
let determined = 0;

// Available commands
const COMMANDS = {
    help:
        'Available commands: <span class="terminal-code">about</span>, <span class="terminal-code">degree</span>, <span class="terminal-code">hire</span>, <span class="terminal-code">projects</span>, <span class="terminal-code">resume</span>, <span class="terminal-code">socials</span>',
    about:
        "My name is <span class='terminal-code'>Alexis Badel</span>, and I'm a <span class='terminal-code'>20 years old french tech addict</span>.<br> Digging into computer science since 2017, freelancing since 2019 and cat lover since born.<br> Earnt a <span class='terminal-code'>CS degree (networks & sysadmin) in 2021</span>, quite useful for a full-stack and software dev right?",
    degree:
        "My degree <u>doesn't exist anymore</u>, but <a href='https://iut-roanne.univ-st-etienne.fr/fr/formations/b-u-t-BU/b-u-t-BU/b-u-t-reseaux-et-telecommunications-rt-2_13_03_0004_FR.html' target='_blank' class='underline terminal-code'>here's an equivalent one</a> available in the university where I studied",
    hire:
        "<span class='terminal-code'>My commissions are actually <u>closed</u>.</span><br>If you see this website, I most likely applied by myself. <span class='help-msg'>// pls accept me :)</span>",
    projects:
        "Other projects that can't be seen here: <br><span class='terminal-code'>Alternadisc - A free alternative to Discord bots</span> <span class='help-msg'>(open-source soon / TypeScript)</span><br><span class='terminal-code'>Dasher! - A mobile platformer</span> <span class='help-msg'>(Paused / TypeScript / Cocos2d)</span><br><span class='terminal-code'>Brilliant Dashboard - An all-in-one web management tool</span> <span class='help-msg'>(Paused / Laravel)</span>",
    resume: 
        "Here's my resume: <a href='./assets/CV_BADEL_Alexis_2022_FR.pdf' class='underline terminal-code'>Version française</a> | <a href='./assets/CV_BADEL_Alexis_2022_EN' class='underline terminal-code'>English version</a>",
    socials:
        "My social links: <span class='text-primary'><i class='fab fa-instagram'></i> alexdotcore</span> / <span class='directory'><i class='fab fa-twitter'></i> ADotcore</span> / <i class='fab fa-twitch'></i> plydotcore <span class='help-msg'>// I'm not active</span>",
};

const loadTerminalInput = () => {
    // Fetch concerned elements
    userInput = document.getElementById('userInput');
    terminalOutput = document.getElementById('terminalOutput');

    // Bind listeners to page
    document.addEventListener('keydown', backspaceHandler);
    document.addEventListener('keypress', keyPressed);

    // Focus on terminal input by default
    document.getElementById('terminalRealInput').focus();
};

const enteredCommand = function executeCommand(input) {
    // In case nothing is entered
    if (input.length === 0) { return; }
    let output;
    
    // Force user input to lowercase to make it easier
    input = input.toLowerCase();
    output = `<div class="terminal-line-success"><span class="success">➜</span> ${input}</div>`;

    // Test if commands exist and print linked output if so
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line-error">Unknown command: <span class="code">${input}</span></div>`;
    } else {
        output += COMMANDS[input];
    }

    // Styling of the output
    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const keyPressed = function keyEvent(e) {
    const input = userInput.innerHTML;

    // If key is blacklisted
    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    // If user press Enter => Execute the program
    if (e.key === 'Enter') {
        enteredCommand(input);
        userInput.innerHTML = "";
        return;
    }

    userInput.innerHTML = input + e.key;
};

const backspaceHandler = function backspaceKeyEvent(e) {
    // Ignore if pressed key isn't backspace
    if (e.keyCode !== 8 && e.keyCode !== 46) { return; }

    // Remove one char from input
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
};

function sendDiscordToClipboard() {
    const dotUsername = 'dotCore#0001';

    // Copy username using Clipboard API
    navigator.clipboard.writeText(dotUsername).then(function() {
        // Notify user that it went fine
        iziToast.warning({
            title: 'WARNING',
            message: 'Username copied to clipboard!',
        });
    }, function(err) {
        // Notify user in case something went wrong
        iziToast.danger({
            title: 'ERROR',
            message: err,
        });
    });
}

function changeCurrentTheme(type) {
    const page = document.querySelector('html');
    const fetchBody = document.getElementById('mainPage');
    currentTheme = currentTheme == 'cyberpunk' ? 'cyberdark' : 'cyberpunk';
    page.removeAttribute('data-theme');
    page.setAttribute('data-theme', currentTheme);
    fetchBody.classList.toggle('dark');

    iziToast.warning({
        title: 'UPDATE',
        message: `Theme switched to ${currentTheme}!`,
    });

    // TODO: Any way to improve that?
    if (type == 'mobile') {
        const sunIcon = document.getElementById('sunSvg');
        const moonIcon = document.getElementById('moonSvg');
        sunIcon.classList.toggle('swap-on');
        sunIcon.classList.toggle('swap-off');
        moonIcon.classList.toggle('swap-on');
        moonIcon.classList.toggle('swap-off');
    } else {
        const sunIcon = document.getElementById('sunSvgMobile');
        const moonIcon = document.getElementById('moonSvgMobile');
        sunIcon.classList.toggle('swap-on');
        sunIcon.classList.toggle('swap-off');
        moonIcon.classList.toggle('swap-on');
        moonIcon.classList.toggle('swap-off');
    }
}

function whatTheFuck() {
    determined++;
    let msgTitle, msgText;

    switch(determined) {
        case 1: {
            msgTitle = "NOPE.";
            msgText = "That's not even eco-friendly and you don't have my address.";
            break;
        }
        case 2: {
            msgTitle = "UGH.";
            msgText = "Nothing to find here, can you stop?";
            break;
        }
        case 3: {
            msgTitle = "SECURITY TIP";
            msgText = "Use <code>Vroom12345</code> as a password, 100% guaranteed.";
            break;
        }
        case 4: {
            msgTitle = "LIE #1";
            msgText = "Click one more time to win (no bait).";
            break;
        }
        default: {
            msgTitle = "REALLY?";
            msgText = "$20 that you're spam-clicking to find another shitty easter egg, but there's none.";
        }
    }

    if (determined == 5) {
        iziToast.success({
            title: "GAME OVER",
            message: "Wondering why green is associated to positive stuff..",
        });
    } else {
        iziToast.error({
            title: `${msgTitle}`,
            message: `${msgText}`,
        });
    }
}

// Setup some listeners
document.addEventListener('DOMContentLoaded', loadTerminalInput);