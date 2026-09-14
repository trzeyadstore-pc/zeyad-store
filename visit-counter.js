// ZEYAD STORE - Visit Counter

const SUPABASE_URL = "https://aiyuhwnqjqeomtzkamyy.supabase.co";

const SUPABASE_KEY = "sb_publishable_YZaRuTMIcewI2tnwnr4VLA_sjUpUfDv";

fetch(`${SUPABASE_URL}/rest/v1/rpc/record_site_visit`, {
    method: "POST",

    headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json"
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`Visit counter error: ${response.status}`);
    }

    console.log("ZEYAD STORE visit recorded.");
})
.catch(error => {
    console.error("Visit counter error:", error);
});