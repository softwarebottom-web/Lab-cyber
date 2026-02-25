import { BACKEND_URL, auth } from "./auth-system.js";

// --- LAB SECTOR: NMAP & NETWORK SCAN ---
export async function executeNmap(target) {
    console.log(`[~] Scanning ${target}...`);
    const response = await fetch(`${BACKEND_URL}/tools/nmap?target=${target}`);
    return await response.json();
}

export async function executeNetworkDiscovery() {
    console.log("[~] Mapping Local Network...");
    const response = await fetch(`${BACKEND_URL}/tools/network-discover`);
    return await response.json();
}

// --- RED TEAM: STRIKE COMMAND ---
export async function launchRedStrike(target, method) {
    const user = auth.currentUser;
    if (!user) return "UNAUTHORIZED";

    const response = await fetch(`${BACKEND_URL}/red/launch-operation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            target: target,
            method: method, 
            uid: user.uid
        })
    });
    return await response.json();
}

// --- POLICE BOT: AUTO-REPORT ---
export async function reportToSentinel(reason) {
    const res = await fetch('https://api.ipify.org?format=json');
    const ipData = await res.json();

    await fetch(`${BACKEND_URL}/report-sabotage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            ip: ipData.ip, 
            reason: reason 
        })
    });
    window.location.href = "honeypot.html";
}
