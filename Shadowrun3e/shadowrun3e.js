// Define all tab configurations in a single object
const tabConfigurations = {
    sheet: {
        tabs: ["character", "skills", "magic", "decks", "gear", "combat", "rigger",
            "contacts", "critter-powers", "karma", "cyberware", "vehicle-attr-tab",
            "vehicle-combat-tab", "vehicle-notes-tab", "vehicle-ecm-tab"],
        attribute: "sheetTab"
    },
    gear: {
        tabs: ["gear", "credsticks", "vehiclelist"],
        attribute: "geartab",
        suffix: "-tab"
    },
    magic: {
        tabs: ["astral", "sorcery", "adept", "conjuring", "geas", "totem",
            "initiate", "foci", "spells"],
        attribute: "magictab",
        suffix: "-tab"
    },
    combat: {
        tabs: ["combat", "ranged", "melee", "explosives", "armor", "ammo"],
        attribute: "combattab",
        suffix: "-tab"
    },
    rigger: {
        tabs: ["rcdeck", "subscriber", "rigger"],
        attribute: "riggertab",
        suffix: "-tab"
    },
    ware: {
        tabs: ["cyber", "bio", "nano"],
        attribute: "waretab",
        suffix: "-tab"
    },
    decking: {
        tabs: ["decking", "frame", "cyberdeck", "utilities"],
        attribute: "deckingtab",
        suffix: "-tab"
    }
};

// Single function to handle all tab registrations
const registerTabHandlers = (config) => {
    config.tabs.forEach(tab => {
        const buttonName = config.suffix ? tab + config.suffix : tab;
        on(`clicked:${buttonName}`, () => {
            setAttrs({ [config.attribute]: tab });
        });
    });
};

// Register all tab handlers
Object.values(tabConfigurations).forEach(registerTabHandlers);

// Damage table with improved structure
const DAMAGE_TABLE = {
    PHYSICAL: {
        'None': 0,
        'L': 1,
        'M': 2,
        'S': 3,
        'D': 4
    },
    STUN: {
        'L(stun)': 10,
        'M(stun)': 11,
        'S(stun)': 12,
        'D(stun)': 13
    },
    // Reverse lookup functionality
    getCode(value) {
        const allDamage = { ...this.PHYSICAL, ...this.STUN };
        return Object.entries(allDamage).find(([key, val]) => val === value)?.[0] || 'None';
    }
};

var lang = {}

on("sheet:opened", function () {
    geti18n();
});

const geti18n = function () {
    console.log('calling i18n for roll query');
    lang["blackic"] = getTranslationByKey("black-ic");
    lang["blackiclethal"] = getTranslationByKey("black-ic-lethal");
    lang["blackicnonlethal"] = getTranslationByKey("black-ic-non-lethal");
    lang["cerebropathic"] = getTranslationByKey("cerebropathic");
    lang["psychotropic"] = getTranslationByKey("psychotropic");
    lang["use-reach-modifier"] = getTranslationByKey("use-reach-modifier");
    lang["L"] = getTranslationByKey("light-damage-abbreviation");
    lang["M"] = getTranslationByKey("moderate-damage-abbreviation");
    lang["S"] = getTranslationByKey("serious-damage-abbreviation");
    lang["D"] = getTranslationByKey("deadly-damage-abbreviation");
    lang["L(stun)"] = getTranslationByKey("light-stun-abbreviation");
    lang["M(stun)"] = getTranslationByKey("moderate-stun-abbreviation");
    lang["S(stun)"] = getTranslationByKey("serious-stun-abbreviation");
    lang["D(stun)"] = getTranslationByKey("deadly-stun-abbreviation");
    lang["decker"] = getTranslationByKey("decker");
    lang["evasion"] = getTranslationByKey("evasion");
    lang["sensors"] = getTranslationByKey("sensors");
    lang["masking"] = getTranslationByKey("masking");
    lang["bod"] = getTranslationByKey("bod");
    lang["none"] = getTranslationByKey("none");
    lang["attack"] = getTranslationByKey("attack");
    lang["probe"] = getTranslationByKey("probe");
    lang["compare"] = getTranslationByKey("compare");
    lang["swap-memory"] = getTranslationByKey("swap-memory");
    lang["damage-resistance-test"] = getTranslationByKey("damage-resistance-test");
    lang["maneuver-score"] = getTranslationByKey("maneuver-score");
    lang["accelerate"] = getTranslationByKey("accelerate");
    lang["position"] = getTranslationByKey("position");
    lang["crash"] = getTranslationByKey("crash");
    lang["driving"] = getTranslationByKey("driving");
    lang["drain-damage"] = getTranslationByKey("drain-damage");
    lang["drain-modifiers"] = getTranslationByKey("drain-modifiers");
    lang["cover-modifiers"] = getTranslationByKey("cover-modifiers");
    lang["spirit-focus-dice"] = getTranslationByKey("spirit-focus-dice");
    lang["are-you-the-summoner"] = getTranslationByKey("are-you-the-summoner");
    lang["additional-modifiers"] = getTranslationByKey("additional-modifiers");
    lang["successes-from-hiding-test"] = getTranslationByKey("successes-from-hiding-test");
    lang["urban-setting"] = getTranslationByKey("urban-setting");
    lang["icon"] = getTranslationByKey("icon");
    lang["range"] = getTranslationByKey("range");
    lang["ic-rating"] = getTranslationByKey("ic-rating");
    lang["light-stun"] = getTranslationByKey("light-stun");
    lang["light"] = getTranslationByKey("light");
    lang["moderate"] = getTranslationByKey("moderate");
    lang["moderate-stun"] = getTranslationByKey("moderate-stun");
    lang["serious"] = getTranslationByKey("serious");
    lang["serious-stun"] = getTranslationByKey("serious-stun");
    lang["deadly"] = getTranslationByKey("deadly");
    lang["deadly-stun"] = getTranslationByKey("deadly-stun");
    lang["damage"] = getTranslationByKey("damage");
    lang["wound-level"] = getTranslationByKey("wound-level");
    lang["system-operation-with"] = getTranslationByKey("system-operation-with");
    lang["utility"] = getTranslationByKey("utility");
    lang["utility-test"] = getTranslationByKey("utility-test");
    lang["utility-rating"] = getTranslationByKey("utility-rating");
    lang["yes"] = getTranslationByKey("yes");
    lang["no"] = getTranslationByKey("no");
    lang["miscellaneous-modifiers"] = getTranslationByKey("miscellaneous-modifiers");
    lang["out-of-ammo"] = getTranslationByKey("out-of-ammo");
    lang["simple"] = getTranslationByKey("simple");
    lang["complex"] = getTranslationByKey("complex");
    lang["rounds-already-fired-in-combat-phase"] = getTranslationByKey("rounds-already-fired-in-combat-phase");
    lang["rounds"] = getTranslationByKey("rounds");
    lang["spell-defense"] = getTranslationByKey("spell-defense");
    lang["ally"] = getTranslationByKey("ally");
    lang["resist-spell"] = getTranslationByKey("resist-spell");
    lang["resist-banish"] = getTranslationByKey("resist-banish");
    lang["result"] = getTranslationByKey("result");
    lang["force"] = getTranslationByKey("force");
    lang["dispell"] = getTranslationByKey("dispell");
    lang["force-of-spell"] = getTranslationByKey("force-of-spell");
    lang["modifiers"] = getTranslationByKey("modifiers");
    lang["astral"] = getTranslationByKey("astral");
    lang["attack"] = getTranslationByKey("attack");
    lang["combat"] = getTranslationByKey("combat");
    lang["task-pool"] = getTranslationByKey("task-pool");
    lang["task-pool-dice"] = getTranslationByKey("task-pool-dice");
    lang["modifiers"] = getTranslationByKey("modifiers");
    lang["attacks-msg"] = getTranslationByKey("attacks-msg");
    lang["astral-pool"] = getTranslationByKey("astral-pool");
    lang["astral-pool-dice"] = getTranslationByKey("astral-pool-dice");
    lang["spell-pool"] = getTranslationByKey("spell-pool");
    lang["spell-pool-dice"] = getTranslationByKey("spell-pool-dice");
    lang["spell-pool-dice-for-drain"] = getTranslationByKey("spell-pool-dice-for-drain");
    lang["conjuring-dice-for-drain"] = getTranslationByKey("conjuring-dice-for-drain");
    lang["sorcery-dice"] = getTranslationByKey("sorcery-dice");
    lang["sorcery-dice-for-drain"] = getTranslationByKey("sorcery-dice-for-drain");
    lang["control-pool"] = getTranslationByKey("control-pool");
    lang["control-pool-dice"] = getTranslationByKey("control-pool-dice");
    lang["hacking-pool"] = getTranslationByKey("hacking-pool");
    lang["hacking-pool-dice"] = getTranslationByKey("hacking-pool-dice");
    lang["combat-pool"] = getTranslationByKey("combat-pool");
    lang["combat-pool-dice"] = getTranslationByKey("combat-pool-dice");
    lang["attack-power"] = getTranslationByKey("attack-power");
    lang["attack-type"] = getTranslationByKey("attack-type");
    lang["distance-from-explosive-in-meters"] = getTranslationByKey("distance-from-explosive-in-meters");
    lang["how-many-additional-enemy-vehicles"] = getTranslationByKey("how-many-additional-enemy-vehicles");
    lang["normal"] = getTranslationByKey("normal");
    lang["elemental"] = getTranslationByKey("elemental");
    lang["adps"] = getTranslationByKey("adps");
    lang["half"] = getTranslationByKey("half");
    lang["double"] = getTranslationByKey("double");
    lang["dodge"] = getTranslationByKey("dodge");
    lang["target-number"] = getTranslationByKey("target-number");
    lang["target"] = getTranslationByKey("target");
    lang["spellbocked-msg"] = getTranslationByKey("spellblocked-msg");
    lang["missed-msg"] = getTranslationByKey("missed-msg");
    lang["verification-system-rating"] = getTranslationByKey("verification-system-rating");
    lang["operator"] = getTranslationByKey("operator");
    lang["short"] = getTranslationByKey("short");
    lang["medium"] = getTranslationByKey("medium");
    lang["long"] = getTranslationByKey("long");
    lang["extreme"] = getTranslationByKey("extreme");
    lang["rigger"] = getTranslationByKey("rigger");
    lang["spell-resistance-test"] = getTranslationByKey("spell-resistance-test");
    lang["set-vehicle-operator"] = getTranslationByKey("set-vehicle-operator");
    lang["update-gunnery-and-control-pool"] = getTranslationByKey("update-gunnery-and-control-pool");
    lang["set-decker-for-security-tally"] = getTranslationByKey("set-decker-for-security-tally");
    console.log(lang);
};

console.log('loading rangedweapons stats');
const rangedstats = {
    "Hold-out Pistol": { short: 5, medium: 15, long: 30, extreme: 50, skill: "@{pistols}", wfamily: "Firearms" },
    "Bracer": { short: 5, medium: 15, long: 30, extreme: 50, skill: "@{bracer}", wfamily: "Special" },
    "Gun Cane": { short: 5, medium: 15, long: 30, extreme: 50, skill: "@{guncane}", wfamily: "Special" },
    "Light Pistol": { short: 5, medium: 15, long: 30, extreme: 50, skill: "@{pistols}", wfamily: "Firearms" },
    "Machine Pistol": { short: 5, medium: 15, long: 30, extreme: 50, skill: "@{pistols}", wfamily: "Firearms" },
    "Heavy Pistol": { short: 5, medium: 20, long: 40, extreme: 60, skill: "@{pistols}", wfamily: "Firearms" },
    "Laser Pistol": { short: 5, medium: 20, long: 40, extreme: 60, skill: "@{lasers}", wfamily: "Laser" },
    "SMG": { short: 10, medium: 40, long: 80, extreme: 150, skill: "@{smgs}", wfamily: "Firearms" },
    "Speargun": { short: 10, medium: 40, long: 80, extreme: 150, skill: "@{smgs}", wfamily: "Special" },
    "Taser": { short: 5, medium: 10, long: 12, extreme: 15, skill: "@{pistols}", wfamily: "Special" },
    "Shotgun": { short: 10, medium: 20, long: 50, extreme: 100, skill: "@{shotguns}", wfamily: "Firearms" },
    "Net Gun": { short: 10, medium: 20, long: 50, extreme: 100, skill: "@{shotguns}", wfamily: "Special" },
    "Sporting Rifle": { short: 100, medium: 250, long: 500, extreme: 750, skill: "@{rifles}", wfamily: "Firearms" },
    "Laser Rifle": { short: 100, medium: 250, long: 500, extreme: 750, skill: "@{lasers}", wfamily: "Laser" },
    "Sniper Rifle": { short: 150, medium: 300, long: 700, extreme: 1000, skill: "@{rifles}", wfamily: "Firearms" },
    "Laser Sniper": { short: 150, medium: 300, long: 700, extreme: 1000, skill: "@{lasers}", wfamily: "Laser" },
    "Assault Rifle": { short: 50, medium: 150, long: 350, extreme: 550, skill: "@{assaultrifles}", wfamily: "Firearms" },
    "Light Machine Gun": { short: 75, medium: 200, long: 400, extreme: 800, skill: "@{heavyweapons}", wfamily: "Heavy" },
    "Medium Machine Gun": { short: 80, medium: 250, long: 750, extreme: 1200, skill: "@{heavyweapons}", wfamily: "Heavy" },
    "Heavy Machine Gun": { short: 80, medium: 250, long: 800, extreme: 1500, skill: "@{heavyweapons}", wfamily: "Heavy" },
    "Assault Cannon": { short: 100, medium: 300, long: 900, extreme: 2400, skill: "@{heavyweapons}", wfamily: "Heavy" },
    "Minigun": { short: 75, medium: 200, long: 400, extreme: 800, skill: "@{heavyweapons}", wfamily: "Heavy" },
    "Sling Shot": { short: "mystr", medium: "mystr * 2", long: "mystr * 5", extreme: "mystr * 7", skill: "@{projectiles}", wfamily: "Projectile" },
    "Sling Launcher": { short: "mystr * 3", medium: "mystr * 5", long: "mystr * 20", extreme: "mystr * 30", skill: "@{projectiles}", wfamily: "Projectile" },
    "Bow": { short: "mystr", medium: "mystr * 10", long: "mystr * 30", extreme: "mystr * 60", skill: "@{projectiles}", wfamily: "Projectile" },
    "Light Crossbow": { short: "mystr * 2", medium: "mystr * 8", long: "mystr * 20", extreme: "mystr * 40", skill: "@{projectiles}", wfamily: "Projectile" },
    "Medium Crossbow": { short: "mystr * 3", medium: "mystr * 12", long: "mystr * 30", extreme: "mystr * 50", skill: "@{projectiles}", wfamily: "Projectile" },
    "Heavy Crossbow": { short: "mystr * 5", medium: "mystr * 15", long: "mystr * 40", extreme: "mystr * 60", skill: "@{projectiles}", wfamily: "Projectile" },
    "Thrown Knife": { short: "mystr", medium: "mystr * 3", long: "mystr * 5", extreme: "mystr * 7", skill: "@{throwing}", wfamily: "Throwing" },
    "Shuriken": { short: "mystr", medium: "mystr * 2", long: "mystr  * 5", extreme: "mystr * 7", skill: "@{throwing}", wfamily: "Throwing" },
    "Caltrops": { short: "mystr * 3", medium: "mystr * 5", long: "mystr  * 10", extreme: "mystr * 20", skill: "@{throwing}", wfamily: "Throwing" },
    "Nets": { short: 2, medium: 4, long: 6, extreme: 10, skill: "@{throwing}", wfamily: "Throwing" },

    "Gyrojet (land)": { short: 5, medium: 20, long: 40, extreme: 60, skill: "@{gyrojet}", wfamily: "Special" },
    "Gyrojet (water)": { short: 10, medium: 20, long: 50, extreme: 100, skill: "@{gyrojet}", wfamily: "Special" },
    "Blowgun": { short: 3, medium: 8, long: 12, extreme: 15, skill: "@{blowgun}", wfamily: "Special" },
    "Flamethrower": { short: 10, medium: 20, long: 50, extreme: 100, skill: "@{spray}", wfamily: "Special" },
    "Other": { short: 0, medium: 0, long: 0, extreme: 0, skill: 0, wfamily: "Other" }
}

const rollEscape = {
    chars: {
        '"': '%quot;',
        ',': '%comma;',
        ':': '%colon;',
        '}': '%rcub;',
        '{': '%lcub;',
    },
    escape(str) {
        str = (typeof (str) === 'object') ? JSON.stringify(str) : (typeof (str) === 'string') ? str : null;
        return (str) ? `${str}`.replace(new RegExp(`[${Object.keys(this.chars)}]`, 'g'), (r) => this.chars[r]) : null;
    },
    unescape(str) {
        str = `${str}`.replace(new RegExp(`(${Object.values(this.chars).join('|')})`, 'g'), (r) => Object.entries(this.chars).find(e => e[1] === r)[0]);
        return JSON.parse(str);
    }
};

on('clicked:jackin', function (info) {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    getAttrs(["matrix-status"], function (myval) {
        var sets = {};
        const mstatus = myval["matrix-status"];
        var myroll = "/w gm &{template:info}{{character=@{character_name}}}";
        myroll += (mstatus == "out") ? "{{type=Jack In}}" : "{{type=Jack Out}}";
        myroll += "{{action=" + lang["complex"] + "}}";
        sets["matrix-status"] = (mstatus == "out") ? "in" : "out";
        startRoll(myroll, (results) => {
            setAttrs(sets);
            finishRoll(results.rollId);
        });
    });
});
on("change:repeating_ammunition:ammotype change:repeating_ammunition:ammoload change:repeating_ammunition:ammocount", function () {
    getAttrs(["repeating_ammunition_ammotype", "repeating_ammunition_ammocount", "repeating_ammunition_ammoload"], function (myval) {
        const type = myval["repeating_ammunition_ammotype"];
        const qty = parseInt(myval["repeating_ammunition_ammocount"]);
        const load = parseInt(myval["repeating_ammunition_ammoload"]);
        const aweight = (type in ammomods) ? ammomods[type]["weight"] : .05;
        const atts = {};
        atts["repeating_ammunition_ammoweight"] = Number((qty * aweight).toFixed(2));
        console.log(atts);
        setAttrs(atts);
    });
});

on("change:ammunition-weight change:armor-weight change:weaponfocus-weight change:meleeweapons-weight change:explosives-weight change:rangedweapons-weight change:gear-weight change:weaponfocus-load", function () {
    getAttrs(["ammunition-weight", "armor-weight", "weaponfocus-weight", "weaponfocus-load", "meleeweapons-weight", "explosives-weight", "rangedweapons-weight", "gear-weight"], function (myval) {
        console.log(myval);
        var sets = {};
        let ammo = parseFloat(myval["ammunition-weight"]);
        let armor = parseFloat(myval["armor-weight"]);
        let focus = parseFloat(myval["weaponfocus-weight"]) * parseInt(myval["weaponfocus-load"]);
        let melee = parseFloat(myval["meleeweapons-weight"]);
        let ranged = parseFloat(myval["rangedweapons-weight"]);
        let exp = parseFloat(myval["explosives-weight"]);
        let gear = parseFloat(myval["gear-weight"]);
        console.log(ammo + ":" + armor + ":" + focus + ":" + melee + ":" + ranged + ":" + exp + ":" + gear);
        sets["carrying-weight"] = ammo + armor + focus + melee + ranged + exp + gear;
        sets["melee-weight-final"] = melee + focus;
        console.log(sets);
        setAttrs(sets);
    });

});

on("change:repeating_rangedweapons:type", function () {
    console.log('updating range based on weapon type');
    getAttrs(["repeating_rangedweapons_type", "strength_max"], function (myval) {
        var myatts = {};
        const mytype = myval["repeating_rangedweapons_type"];
        const mystr = parseInt(myval.strength_max)
        console.log('type: ' + mytype);
        myatts["repeating_rangedweapons_short"] = eval(rangedstats[mytype]["short"]);
        myatts["repeating_rangedweapons_medium"] = eval(rangedstats[mytype]["medium"]);
        myatts["repeating_rangedweapons_long"] = eval(rangedstats[mytype]["long"]);
        myatts["repeating_rangedweapons_extreme"] = eval(rangedstats[mytype]["extreme"]);
        myatts["repeating_rangedweapons_wfamily"] = rangedstats[mytype]["wfamily"];
        myatts["repeating_rangedweapons_skill"] = rangedstats[mytype]["skill"];
        console.log(myatts);
        setAttrs(myatts);
    });
});

const matrixtn = { BLUE: { Intruder: 6, Legitimate: 3, secrating: 1, wdmg: 2 }, GREEN: { Intruder: 5, Legitimate: 4, secrating: 2, wdmg: 2 }, ORANGE: { Intruder: 4, Legitimate: 5, secrating: 3, wdmg: 3 }, RED: { Intruder: 3, Legitimate: 6, secrating: 4, wdmg: 3 } };
const matrixsecnumber = { 1: "BLUE", 2: "GREEN", 3: "ORANGE", 4: "RED" };
const attributes = ["body", "quickness", "strength", "charisma", "willpower", "intelligence", "force"];
const quicknesslinked = ["@{blowgun}", "@{bracer}", "@{guncane}", "@{gyrojet}", "@{eyegun}", "@{oralgun}", "@{oralstrike}", "@{pistols}", "@{smgs}", "@{rifles}", "@{assaultrifles}", "@{lasers}", "@{whips}", "@{stealth}", "@{shotguns}"]
const damagetable = {
    "None": 0,
    "L": 1,
    "M": 2,
    "S": 3,
    "D": 4,
    0: "None",
    9: "None",
    1: "L",
    2: "M",
    3: "S",
    4: "D",
    "L(stun)": 10,
    "M(stun)": 11,
    "S(stun)": 12,
    "D(stun)": 13,
    10: "L(stun)",
    11: "M(stun)",
    12: "S(stun)",
    13: "D(stun)"
}
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

on("change:weaponfocus-force", function () {
    atts = [];
    getAttrs(["weaponfocus-force"], function (myval) {
        atts["weaponfocus-show"] = "false";
        if (myval["weaponfocus-force"] > 0) atts["weaponfocus-show"] = "true";
        setAttrs(atts);
    });

});

on('clicked:missed', (info) => {
    if (!("yes" in lang)) geti18n();
    payload = rollEscape.unescape(info["originalRollId"]);
    myroll = "/w gm &{template:info}{{character=" + payload["target"] + "}}{{action=" + lang["missed-msg"] + "}}";
    startRoll(myroll, (results) => {
        finishRoll(results.rollId);
    });
});

on('clicked:spellblocked', (info) => {
    if (!("yes" in lang)) geti18n();
    payload = rollEscape.unescape(info["originalRollId"]);
    myroll = "/w gm &{template:info}{{character=" + payload["target"] + "}}{{action=" + lang["spellblocked-msg"] + "}}";
    startRoll(myroll, (results) => {
        finishRoll(results.rollId);
    });
});

on('clicked:repeating_gear:usegear', (info) => {
    if (!("yes" in lang)) geti18n();
    var atts = [];
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    atts.push(myrepeat.concat("rating"));
    atts.push(myrepeat.concat("quantity"));
    atts.push(myrepeat.concat("type"));
    atts.push(myrepeat.concat("pool"));
    atts.push(myrepeat.concat("name"));
    getAttrs(atts, function (myval) {
        var sets = {};
        let rating = parseInt(myval[myrepeat.concat("rating")]);
        let qty = parseInt(myval[myrepeat.concat("quantity")]);
        let mypool = myval[myrepeat.concat("pool")];
        const poolname = mypool.charAt(0).toUpperCase() + mypool.slice(1);
        const pool = mypool + "pool";
        let myname = myval[myrepeat.concat("name")];
        let mytype = myval[myrepeat.concat("type")];
        calcDice = rating;
        if (mypool != "none") calcDice += " + ?{" + lang[mypool + "-pool-dice"] + "?}";
        var myroll = "&{template:item} {{item=" + myname + "}}{{myname=@{character_name}}}";
        myroll += "{{targetnumber=[[?{" + lang["target-number"] + "?|4}]]}}";
        if (mypool != "none") myroll += "{{poolname=" + lang[mypool + "-pool"] + "}}{{pooldice=[[?{" + lang[mypool + "-pool-dice"] + "?|0}]]}}";
        myroll += "{{rolldice=[[" + calcDice + " ]]}}";
        myroll += "{{result=[[ [[ " + calcDice + " ]]d6>[[?{" + lang["target-number"] + "?}]]!! ]]}}";
        if ((mytype == "onetime") && (qty < 1)) myroll = "/w gm &{template:info}{{character=@{character_name}}}{{action=You are out of  " + myname + "}}";
        console.log(myroll);
        startRoll(myroll, (results) => {
            if (mypool != "none") updatepoolused("taskpool", results.results.pooldice.result);
            if ((mytype == "onetime") && (qty > 0)) {
                sets[myrepeat.concat("quantity")] = qty - 1;
                setAttrs(sets);
            }
            finishRoll(results.rollId);
        });
    });

});
on('clicked:repeating_credsticks:checkcredstick', (info) => {
    if (!("yes" in lang)) geti18n();
    var atts = [];
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    atts.push(myrepeat.concat("rating"));
    atts.push(myrepeat.concat("id"));
    getAttrs(atts, function (myval) {
        let rating = parseInt(myval[myrepeat.concat("rating")]);
        let myid = myval[myrepeat.concat("id")];
        var myroll = "&{template:item} {{item=" + myid + " credstick}}{{myname=@{character_name}}}{{poolname=" + lang["task-pool"] + "}}{{targetnumber=[[?{" + lang["verification-system-rating"] + "?|4}]]}}";
        myroll += "{{pooldice=[[?{" + lang["task-pool-dice"] + "?|0}]]}}{{rolldice=[[" + rating + " + ?{" + lang["task-pool-dice"] + "?} ]]}}";
        myroll += "{{result=[[ [[ " + rating + " + ?{" + lang["task-pool-dice"] + "?} ]]d6>[[?{" + lang["verification-system-rating"] + "?}]]!! ]]}}";
        console.log(myroll);
        startRoll(myroll, (results) => {
            updatepoolused("taskpool", results.results.pooldice.result);
            finishRoll(results.rollId);
        });
    });

});

on('clicked:repeating_skills:skills', (info) => {
    if (!("yes" in lang)) geti18n();
    const attrlist = ["skillname", "skillrating", "pool"];
    var atts = ["character_name"];
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    attrlist.forEach(myatt => {
        atts.push(myrepeat.concat(myatt));
    });
    getAttrs(atts, function (myval) {
        const skill = myval[myrepeat.concat("skillname")];
        const rating = parseInt(myval[myrepeat.concat("skillrating")]);
        const mypool = myval[myrepeat.concat("pool")];
        const poolname = mypool.charAt(0).toUpperCase() + mypool.slice(1);
        const pool = mypool + "pool";
        console.log('start roll for ' + skill);
        var calcDice = rating;
        if (mypool != "none") calcDice += " + ?{" + lang[mypool + "-pool-dice"] + "?}";
        const calcTN = "?{" + lang["target-number"] + "?|4} + @{stun_pen} + @{wound_pen}";
        var myroll = "&{template:skill} {{skill=" + skill + "}}{{myname=" + myval["character_name"] + "}}";
        if (mypool != "none") myroll += "{{pooldice=[[?{" + lang[mypool + "-pool-dice"] + "?|0}]]}}{{poolname=" + lang[mypool + "-pool"] + "}}";
        myroll += "{{targetnumber=[[ " + calcTN + " ]]}}{{rolldice=[[ " + calcDice + " ]]}}";
        myroll += "{{result=[[ [[ " + calcDice + " ]]d6>[[{2,( " + calcTN + " )}kh1]]!!} ]]}}";
        startRoll(myroll, (results) => {
            console.log('R: ' + results);
            if (mypool != "none") updatepoolused(pool, results.results.pooldice.result);
            finishRoll(results.rollId);
        });
    });
});
on('clicked:skilltest', (info) => {
    if (!("yes" in lang)) geti18n();
    var [myskill, mypool] = info["htmlAttributes"]["id"].split(" ");
    var skill = myskill.charAt(0).toUpperCase() + myskill.slice(1);
    var pool = mypool.charAt(0).toUpperCase() + mypool.slice(1);
    console.log('skill: ' + myskill + ' pool: ' + mypool);
    const calcDice = "@{" + myskill + "} + ?{" + lang[mypool + "-pool-dice"] + "?}";
    const calcTN = "?{" + lang["target-number"] + "?|4} + @{stun_pen} + @{wound_pen}";
    var myroll = "&{template:skill} {{myname=@{character_name}}}{{skill=" + skill + "}}{{poolname=" + lang[mypool + "-pool"] + "}}{{pooldice=[[?{" + lang[mypool + "-pool-dice"] + "?|0}]]}}"
    myroll += "{{targetnumber=[[" + calcTN + "]]}}{{rolldice=[[" + calcDice + "]]}}";
    myroll += "{{result= [[ [[" + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!! ]] }}";
    console.log(myroll);
    startRoll(myroll, (results) => {
        updatepoolused(mypool.concat("pool"), results.results.pooldice.result);
        finishRoll(results.rollId);
    });
});

const updatepoolused = function (pool, used) {
    poolused = pool.concat("-used");
    sets = {}
    getAttrs([poolused], function (myval) {
        sets[poolused] = used + parseInt(myval[poolused]);
        console.log(sets);
        setAttrs(sets);
    });
}


on('clicked:repeating_defensiveutils:matrixrepeatingtest clicked:repeating_offensiveutils:matrixrepeatingtest clicked:repeating_deck-utilities:matrixrepeatingtest', (info) => {
    if (!("yes" in lang)) geti18n();
    var atts = [];
    var source = info['sourceAttribute'].split('_');
    const myid = info["htmlAttributes"]["id"]
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    var action;
    var target;
    var calcTN;
    var calcDice;
    var utiltarget;
    const myutil = myrepeat.concat("utility");
    const myrating = myrepeat.concat("rating-final");
    atts.push(myutil, myrating);
    if (myid == "matrixrepeatingexec") utiltarget = myrepeat.concat("target");
    atts.push(utiltarget);
    if (myid == "matrixrepeatingexec") console.log('utiltarget: ' + utiltarget);
    console.log(atts);
    getAttrs(atts, function (myval) {
        console.log(myval);
        const myutilvalue = myval[myutil];
        const myratingvalue = myval[myrating];
        const myutiltarget = myval[utiltarget];
        if (myid == "matrixrepeatingattack") {
            action = "{{action=" + myutilvalue + " Attack}}";
            target = "{{target=@{target|" + lang["target"] + "|token_name}}}";
            calcTN = "@{deck-tn} + @{wound_pen} + @{stun_pen} +@{matrix-penalty} +?{" + lang["miscellaneous-modifiers"] + "|0}";
            calcDice = "@{decking} + ?{" + lang["hacking-pool-dice"] + "}";
        } else if (myid == "matrixrepeatingexec") {
            console.log('utiltarget ' + myutiltarget);
            action = "{{action=" + lang["system-operation-with"] + " " + myutilvalue + " }}";
            target = "{{target=@{target|" + lang["target"] + "|token_name}}}";
            calcTN = myutiltarget + " + floor(@{target|" + lang["target"] + "|matrixalert}/2) + @{wound_pen} + @{stun_pen} +@{matrix-penalty} - " + myratingvalue;
            calcDice = "@{decking} + ?{" + lang["hacking-pool-dice"] + "}";
        } else {
            action = "{{action=" + myutilvalue + " Test}}";
            target = "{{target=?{" + lang["target-number"] + "?|4}}}";
            calcTN = "?{" + lang["target-number"] + "?} + @{wound_pen} + @{stun_pen} + @{matrix-penalty}";
            calcDice = myratingvalue + " + ?{" + lang["hacking-pool-dice"] + "}";
        }
        var myroll = "&{template:matrix}{{myname=@{character_name}}}{{hackingpool=[[?{" + lang["hacking-pool-dice"] + "|0}]]}}";
        myroll += target + action;
        myroll += "{{utilitylevel=" + myratingvalue + "}}"
        myroll += "{{rolldice=[[" + calcDice + "]]}}{{targetnumber=[[" + calcTN + "]]}}";
        myroll += "{{roll= [[ [[ " + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!!]] }}"
        console.log(myroll);
        startRoll(myroll, (results) => {
            updatepoolused("hackingpool", results.results.hackingpool.result);
            finishRoll(results.rollId);
        });
    });


});
on("clicked:setrigger", function (info) {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    const myid = info["htmlAttributes"]["id"]
    var myroll = "/w gm &{template:info}{{character=@{character_name}}}";
    var designator;
    var sets = {};
    getAttrs(["sheettype", "rigger"], function (myval) {
        console.log(myval);
        if ((myid == "refresh-rigger") && (myval["rigger"])) {
            myroll += "{{action=" + lang["update-gunnery-and-control-pool"] + "}}";
            designator = "@{" + myval["rigger"];
        } else if (myval["sheettype"] == "Drone") {
            myroll += "{{action=Set " + lang["rigger"] + "}}";
            designator = "@{target|" + lang["rigger"];
        } else {
            myroll += "{{action=" + lang["set-vehicle-operator"] + "}}";
            designator = "@{target|" + lang["operator"];
        }
        myroll += "{{name=[[0[" + designator + "|character_name}]]]}}";
        myroll += "{{gunnery=[[" + designator + "|gunnery}]]}}";
        myroll += "{{controlpool=[[" + designator + "|controlpool}]]}}";
        console.log(myroll);
        startRoll(myroll, (results) => {
            sets["rigger"] = results.results.name.expression.match(/\[(.*)\]/)[1];
            sets["controlpool"] = results.results.controlpool.result;
            sets["gunnery"] = results.results.gunnery.result;
            console.log(sets);
            finishRoll(results.rollId);
            setAttrs(sets);
        });
    });
});

on("clicked:repeating_intruders:settokenname", function (info) {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    const source = info['sourceAttribute'].split('_');
    const sourceattr = source.pop();
    const myrepeat = source.join('_').concat('_');
    const intrudername = myrepeat + "intrudername";
    var sets = {};
    const myroll = "/w gm &{template:info}{{character=@{character_name}}}{{action=" + lang["set-decker-for-security-tally"] + "}}{{target=[[0[@{target|" + lang["icon"] + "|token_name}]]]}}";

    startRoll(myroll, (results) => {
        sets[intrudername] = results.results.target.expression.match(/\[(.*)\]/)[1];
        console.log(sets);
        finishRoll(results.rollId);
        setAttrs(sets);
    });
});

on("change:repeating_intruders:intrudername", function () {
    getAttrs(["repeating_intruders_intrudername"], function (myval) {
        var mydecker = "@{";
        mydecker = mydecker.concat(myval["repeating_intruders_intrudername"]);
        mydecker = mydecker.concat("|");
        setAttrs({ "repeating_intruders_detecttarget": mydecker });
    });
});

on('clicked:matrixdetect', (info) => {
    if (!("yes" in lang)) geti18n();
    sets = {};
    console.log(info);
    const myid = info["htmlAttributes"]["id"];
    const mytitle = info["htmlAttributes"]["title"];
    getAttrs(["matrixsecuritytally"], function (myval) {
        var mytally = parseInt(myval["matrixsecuritytally"]);
        if (myid == "systemdetect") {
            var myroll = "/w gm &{template:matrix}{{target=@{target|" + lang["target"] + "|token_name}}}{{myname=@{character_name}}}{{action=Detection Roll}}";
            myroll += "{{targetnumber=@{target|" + lang["target"] + "|deck-detection-final}}}";
            myroll += "{{rolldice=[[@{matrixsecurityrating}]]}}";
            myroll += "{{roll=[[@{matrixsecurityrating}d6>[[{2,(@{target|" + lang["target"] + "|deck-detection-final})}kh1]]!! ]]}}";
            console.log(myroll);
            startRoll(myroll, (results) => {
                mytally += results.results.roll.result;
                sets["matrixsecuritytally"] = mytally;
                console.log(sets);
                setAttrs(sets);
                finishRoll(results.rollId);
            });
        } else {
            sets["matrixsecuritytally"] = 0;
            setAttrs(sets);
        }
    });
});

on('clicked:repeating_intruders:detect', (info) => {
    if (!("yes" in lang)) geti18n();
    sets = {};
    console.log(info);
    const myid = info["htmlAttributes"]["id"];
    const mytitle = info["htmlAttributes"]["title"];
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    const intruder = myrepeat + "detecttarget"
    const sectally = myrepeat + "securitytally";
    getAttrs([intruder, sectally], function (myval) {
        const mytarget = myval[intruder];
        var mytally = parseInt(myval[sectally]);
        if (myid == "systemdetect") {
            var myroll = "/w gm &{template:matrix}{{target=@{" + intruder + "}character_name}}}{{myname=@{character_name}}}{{action=Detection Roll}}";
            myroll += "{{targetnumber=@{" + intruder + "}deck-detection-final}}}";
            myroll += "{{rolldice=[[@{matrixsecurityrating}]]}}";
            myroll += "{{roll=[[@{matrixsecurityrating}d6>[[{2,(@{" + intruder + "}deck-detection-final})}kh1]]!! ]]}}";
            console.log(myroll);
            startRoll(myroll, (results) => {
                mytally += results.results.roll.result;
                sets[sectally] = mytally;
                console.log(sets);
                setAttrs(sets);
                finishRoll(results.rollId);
            });
        } else {
            sets[sectally] = 0;
            setAttrs(sets);
        }
    });
});

on('clicked:matrixresist clicked:repeating_ic:matrixresist', (info) => {
    if (info['sourceAttribute']) {
        var source = info['sourceAttribute'].split('_');
        var sourceattr = source.pop();
        var myrepeat = source.join('_').concat('_') + "ic-penalty";
        atts.push(myrepeat);
    }
    if (!("yes" in lang)) geti18n();
    var payload, myid, attacktest, wdmg;
    if (info["htmlAttributes"]["id"] != undefined) {
        myid = info["htmlAttributes"]["id"];
    } else if (info["originalRollId"] != undefined) {
        payload = rollEscape.unescape(info["originalRollId"]);
    }
    var calcTN;
    var calcDice;
    var myroll = "&{template:matrix}";
    console.log(info);
    if (payload) {
        console.log(payload);
        power = payload["power"];
        wdmg = payload["wdmg"];
        basetn = payload["basetn"];
        attribute = payload["attribute"];
        const myattr = attribute.split("-")[1];
        attacktype = payload["attacktype"];
        attacktest = payload["attacktest"];
        attacker = payload["attacker"];
        calcDice = "@{deck-bod-final} + ?{" + lang["hacking-pool-dice"] + "|0}";
        calcTN = "?{" + lang["attack-power"] + "?|" + power + "}";
        myroll += "{{finaldamage=[[0]]}}{{attackdmg=[[0]]}}{{payload=[[0]]}}";
        if (iclist["attack"].includes(attacktype)) calcTN += " - @{deckarmor-rating-final}";
        if (iclist["blackic"].includes(attacktype)) {
            myroll += "{{blackic=" + lang[attacktype] + "}}";
            payload["ammotype"] = attacktype;
            payload["wdmg"] = damagetable[wdmg];
            payload["dodge"] = 0;
            payload["range"] = "touch";
        }
        myroll += "{{target=" + attacker + "}}";
        console.log('tst myattr: ' + myattr + ' lang: ' + lang[myattr]);
        myroll += (iclist["debuff"].includes(attacktype)) ? "{{debuff=" + lang[myattr] + "}}" : "{{resist=yes}}";
    } else {
        console.log('no payload');
        calcTN = "?{" + lang["attack-power"] + "?|0} - @{deckarmor-rating-final}";
        calcDice = "@{deck-bod-final} + ?{" + lang["hacking-pool-dice"] + "|0}";
        myroll += "{{target=?{" + lang["attack-power"] + "?|0}}}";
    }
    myroll += "{{action=" + lang["damage-resistance-test"] + "}}";
    myroll += "{{rolldice=[[" + calcDice + "]]}}";
    myroll += "{{targetnumber=[[" + calcTN + "]]}}";
    myroll += "{{utilitylevel=Armor Rating @{deckarmor-rating-final}}}";
    myroll += "{{myname=@{selected|token_name}}}{{hackingpool=[[?{" + lang["hacking-pool-dice"] + "|0}]]}}";
    myroll += "{{roll= [[ [[ " + calcDice + "]]d6>[[ {2,( " + calcTN + ")}kh1 ]]!! ]] }}";
    console.log(myroll);
    startRoll(myroll, (results) => {
        updatepoolused("hackingpool", results.results.hackingpool.result);
        if (payload) {
            const resistroll = results.results.roll.result;
            const delta = attacktest - resistroll;
            console.log('delta: ' + delta);
            console.log('wdmg: ' + wdmg);
            const finaldmg = (iclist["debuff"].includes(attacktype)) ? calcFinalDebuff(delta) : calcFinalDmg(wdmg, delta);
            console.log('final dmg: ' + finaldmg);
            finishRoll(results.rollId,
                {
                    finaldamage: finaldmg,
                    payload: rollEscape.escape(payload),

                });

        }
        else finishRoll(results.rollId);
    });
});

const iclist = {
    blackic: ["blackiclethal", "cerebropathic", "psychotropic", "blackicnonlethal", "deckblackhammer", "deckkilljoy"],
    debuff: ["Crippler", "Ripper"],
    attack: ["Killer", "Blaster", "Sparky", "blackiclethal", "cerebropathic", "psychotropic", "blackicnonlethal", "deckblackhammer", "deckkilljoy"],
    proactive: ["Crippler", "Ripper", "Killer", "Blaster", "Sparky", "Scout", "blackiclethal", "cerebropathic", "psychotropic", "blackicnonlethal", "Trace"],
    reactive: ["Probe", "Scramble", "Tar Baby", "Tar pit", "Data Bomb", "Pavlov"]
};

on('clicked:matrixattack', (info) => {
    if (!("yes" in lang)) geti18n();
    const myid = info["htmlAttributes"]["id"]
    const mytitle = info["htmlAttributes"]["title"]
    console.log(info);
    getAttrs(["deck-systemrating", "character_name", "deckattacklevel"], function (myval) {
        const myammo = (myid == "deckattack") ? myval["deckattacklevel"] : myid;
        var calcTN = "0 + @{wound_pen} + @{stun_pen} + @{matrix-penalty} + ?{" + lang["miscellaneous-modifiers"] + "|0}";
        const systemrating = myval["deck-systemrating"].toUpperCase();
        var calcDice = "@{decking} + ?{" + lang["hacking-pool-dice"] + "|0}"
        var myaction = "{{action=" + mytitle + "}}";
        if (myid == "deckattack") myaction = "{{action=Attack @{deckattacklevel}}}"
        var myroll = "&{template:matrix}"
        myroll += "{{roll=[[[[" + calcDice + "]]d6>[[ {2,( " + calcTN + ")}kh1]]!!]]}}";
        myroll += myaction;
        myroll += "{{senddata=[[0]]}}";
        myroll += "{{wdmg=[[0]]}}";
        myroll += "{{rolldice=[[" + calcDice + "]]}}"
        myroll += "{{targetnumber=[[" + calcTN + "]]}}";
        if (systemrating == "UNKNOWN") myroll += "{{systemrating=[[@{target|Host|matrixsecuritynumber}]]}}";
        else myroll += "{{systemrating=[[" + matrixtn[systemrating]["secrating"] + "]]}}";
        myroll += "{{iconstatus=[[@{target|" + lang["target"] + "|iconstatuscode}]]}}";
        myroll += "{{mytoken=[[0[@{selected|token_name}]]]}}{{target=@{target|" + lang["target"] + "|token_name}}}{{hackingpool=[[?{" + lang["hacking-pool-dice"] + "|0}]]}}";
        myroll += "{{utilitylevel=@{deckattack-rating-final}}}";
        myroll += "{{utilitylevel=[[@{" + myid + "-rating-final}]]}}"
        myroll += "{{hackingpool=[[?{" + lang["hacking-pool-dice"] + "}]]}}"
        myroll += "{{myname=@{selected|token_name}}}";
        console.log(myroll);
        startRoll(myroll, (results) => {
            const mytoken = results.results.mytoken.expression.match(/\[(.*)\]/)[1];
            if (results.results.iconstatus.result == 0) myicon = "Legitimate";
            else myicon = "Intruder";
            var finaltn = results.results.targetnumber.result
            const mysystem = matrixsecnumber[results.results.systemrating.result];
            const myhosttn = matrixtn[mysystem][myicon];
            finaltn += myhosttn;
            console.log('final tn: ' + finaltn);
            const finaldice = (results.results.roll.dice.filter(mydice => mydice >= finaltn)).length;
            console.log('dice : ' + results.results.roll.dice);
            console.log('finaldice : ' + finaldice);
            updatepoolused("hackingpool", results.results.hackingpool.result);
            const mydamage = (myid == "deckattack") ? damagetable[myval["deckattacklevel"]] : matrixtn[mysystem]["wdmg"];
            let payload = {
                ammotype: myammo,
                wdmg: mydamage,
                attacker: mytoken,
                attacktest: finaldice,
                power: results.results.utilitylevel.result,
                attacktype: myammo,
                attribute: "deck-bod-final"
            }
            finishRoll(results.rollId,
                {
                    wdmg: damagetable[mydamage],
                    senddata: rollEscape.escape(payload),
                    targetnumber: finaltn,
                    roll: finaldice,
                    finalroll: finaldice,
                });
        });
    });
});
on('clicked:matrixmedic', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    const myid = info["htmlAttributes"]["id"]
    const mytitle = info["htmlAttributes"]["title"]
    getAttrs(["matrix-damage", "matrix-penalty", "deckmedic-rating-final"], function (myval) {
        const pentn = parseInt(myval["matrix-penalty"]) + 3;
        const dmg = myval["matrix-damage"];
        var medicrating = parseInt(myval["deckmedic-rating-final"]);
        var calcTN = pentn;
        var calcDice = medicrating + " + ?{" + lang["hacking-pool-dice"] + "|0}"
        var myroll = "&{template:matrix}"
        myroll += "{{action=Medic Utility}}"
        myroll += "{{matrixdmg=[[" + dmg + "]]}}";
        myroll += "{{rolldice=[[" + calcDice + "]]}}"
        myroll += "{{targetnumber=[[" + calcTN + "]]}}";
        myroll += "{{myname=@{selected|token_name}}}{{target=" + pentn + "}}";
        myroll += "{{utilitylevel=@{deckmedic-rating-final}}}"
        myroll += "{{roll= [[ [[ " + calcDice + "]]d6>[[ {2,( " + calcTN + ")}kh1 ]]!! ]] }}"
        myroll += "{{hackingpool=[[?{" + lang["hacking-pool-dice"] + "}]]}}"
        console.log(myroll);
        startRoll(myroll, (results) => {
            sets = {};
            updatepoolused("hackingpool", results.results.hackingpool.result);
            medicrating -= 1;
            var finaldmg = dmg - results.results.roll.result;
            finaldmg = (finaldmg < 1) ? 0 : finaldmg;
            sets["matrix-damage"] = finaldmg;
            sets["deckmedic-rating-final"] = medicrating;
            setAttrs(sets);
            finishRoll(results.rollId,
                {
                    matrixdmg: finaldmg,
                });
        });
    });
});

on('clicked:swapmemory clicked:repeating_defensiveutils:swapmemory clicked:repeating_offensiveutils:swapmemory clicked:repeating_deck-utilities:swapmemory', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    var sets = {};
    var atts = [];
    var myatt;
    var myutil;
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    if (info['sourceAttribute']) {
        source = info['sourceAttribute'].split('_');
        var sourceattr = source.pop();
        var myrepeat = source.join('_').concat('_');
        myatt = myrepeat + "rating";

        atts.push(myrepeat + "utility");
    } else {
        myutil = myid.split("-")[0];
        myutil = myutil.slice(4);
        myatt = myid;
    }
    atts.push(myatt);
    const myfinal = myatt + "-final";
    console.log(atts);
    getAttrs(atts, function (myval) {
        console.log('myval');
        console.log(myval);
        sets[myfinal] = parseInt(myval[myatt]);
        if (myutil == null) myutil = myval[myrepeat + "utility"];
        console.log(sets);
        setAttrs(sets);
        myroll = "&{template:info}{{character=@{character_name}}}{{action=" + lang["swap-memory"] + "}}{{type=" + lang["simple"] + "}}{{info1=Reloading Utility " + myutil + " into Memory}}";
        startRoll(myroll, (results) => {
            finishRoll(results.rollId);
        });
    });
});

on('clicked:matrixtest clicked:repeating_ic:matrixtest', (info) => {
    console.log(info);
    if (!("yes" in lang)) geti18n();
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    var atts = ["stun_pen", "wound_pen", "matrix-penalty"];
    atts.push(myid);
    if (info['sourceAttribute']) {
        var source = info['sourceAttribute'].split('_');
        var sourceattr = source.pop();
        var myrepeat = source.join('_').concat('_') + "ic-penalty";
        atts.push(myrepeat);
    }
    getAttrs(atts, function (myval) {
        const wpmatrix = (info['sourceAttribute']) ? parseInt(myval[myrepeat]) : parseInt(myval["matrix-penalty"]) + parseInt(myval["stun_pen"]) + parseInt(myval["wound_pen"]);
        var calcTN = "?{" + lang["target-number"] + "?} + " + wpmatrix;
        var calcDice = parseInt(myval[myid]) + " + ?{" + lang["hacking-pool-dice"] + "}";
        var myroll = "&{template:matrix}{{target=?{" + lang["target-number"] + "?|4}}}{{hackingpool=[[?{" + lang["hacking-pool-dice"] + "|0}]]}}"
        myroll += "{{myname=@{selected|token_name}}}";
        myroll += "{{action=" + mytitle + "}}{{rolldice=[[" + calcDice + "]]}}{{targetnumber=[[" + calcTN + "]]}}";
        myroll += "{{roll= [[ [[ " + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!!]] }}"
        startRoll(myroll, (results) => {
            updatepoolused("hackingpool", results.results.hackingpool.result);
            finishRoll(results.rollId);
        });
    });

});

on('clicked:matrixmaneuvers clicked:repeating_ic:matrixmaneuvers', (info) => {
    atts = ["character_name", "deck-evasion-final", "deck-sensors-final", "decklockon-rating-final", "deckcloak-rating-final", "stun_pen", "wound_pen", "matrix-penalty", "decking"];
    if (info['sourceAttribute']) {
        var source = info['sourceAttribute'].split('_');
        var sourceattr = source.pop();
        var myrepeat = source.join('_').concat('_') + "ic-penalty";
        atts.push(myrepeat);
    }
    if (!("yes" in lang)) geti18n();
    getAttrs(atts, function (myval) {
        const myid = info["htmlAttributes"]["id"]
        var mytitle = info["htmlAttributes"]["title"]
        const evasion = myval["deck-evasion-final"];
        const sensors = myval["deck-sensors-final"];
        const cloak = myval["deckcloak-rating-final"];
        const lockon = myval["decklockon-rating-final"];
        const wpmatrix = (info['sourceAttribute']) ? parseInt(myval[myrepeat]) : parseInt(myval["matrix-penalty"]) + parseInt(myval["stun_pen"]) + parseInt(myval["wound_pen"]);
        const decking = myval["decking"];
        if (info["originalRollId"] != undefined) var payload = rollEscape.unescape(info["originalRollId"]);
        var calcDice = evasion + " + ?{" + lang["hacking-pool-dice"] + "}";
        var calcTN = "@{target|" + lang["target"] + "|deck-sensors-final} + " + wpmatrix + " +?{" + lang["miscellaneous-modifiers"] + "|0} - " + cloak;
        if (payload != null) {
            console.log('payload');
            console.log(payload);
            mytitle = payload["attacktype"];
            calcDice = sensors + " + ?{" + lang["hacking-pool-dice"] + "}";
            calcTN = "@{target|" + lang["target"] + "|deck-evasion-final} + " + wpmatrix + " +?{" + lang["miscellaneous-modifiers"] + "|0} - " + lockon;
        }
        var myroll = "&{template:matrix}";
        if (payload == null) myroll += "{{senddata2=[[0]]}}";
        else myroll += "{{testresult=[[0]]}}{{winner=[[0]]}}";
        myroll += "{{mytoken=[[0[@{selected|token_name}]]]}}";
        myroll += "{{myname=@{selected|token_name}}}";
        myroll += "{{target=@{target|" + lang["target"] + "|token_name}}}{{hackingpool=[[?{" + lang["hacking-pool-dice"] + "|0}]]}}";
        myroll += "{{rolldice=[[" + calcDice + "]]}}{{targetnumber=[[" + calcTN + "]]}}";
        myroll += "{{action=" + mytitle + "}}";
        myroll += "{{targetname=@{target|" + lang["target"] + "|character_name}}}";
        myroll += "{{roll= [[ [[" + calcDice + "]]d6>[[ {2,(" + calcTN + ")}kh1]]!! ]] }}";
        console.log(myroll);
        startRoll(myroll, (results) => {
            const mytoken = results.results.mytoken.expression.match(/\[(.*)\]/)[1];
            updatepoolused("hackingpool", results.results.hackingpool.result);
            if (payload == null) {
                payload = {
                    successes: results.results.roll.result,
                    attacker: mytoken,
                    attacktype: mytitle + " Oppose"
                };
                finishRoll(results.rollId,
                    {
                        senddata2: rollEscape.escape(payload),
                    });
            } else {
                console.log('payload success is ' + payload["successes"]);
                var delta = payload["successes"] - results.results.roll.result;
                console.log('delta is ' + delta);
                const mywinner = (delta > 0) ? payload["attacker"] : (delta < 0) ? mytoken : "none";
                console.log('winner is ' + mywinner);
                delta = (delta < 0) ? (delta * -1) : delta;
                console.log('delta is ' + delta);
                finishRoll(results.rollId,
                    {
                        testresult: delta,
                        winner: mywinner,
                    });
            }
        });
    });
});
on('clicked:adeptpower', (info) => {
    if (!("yes" in lang)) geti18n();
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    const uppermyid = myid.charAt(0).toUpperCase() + myid.slice(1);
    atts = ["rbodymod", "rbodymax", "rquickmod", "rquickmax", "rstrmod", "rstrmax", "body", "strength", "quickness", "adeptbodyboost", "adeptquicknessbost", "adeptstrengthboost"];
    getAttrs(atts, function (myval) {
        var drainlvl;
        const myboost = parseInt(myval["adept" + myid + "boost"]) + parseInt(myval[myid]);
        const mymod = myval["r" + myid + "mod"];
        const mymax = myval["r" + myid + "max"];
        const my2x = mymax * 2;
        if (myboost <= mymod) drainlvl = "L";
        else if (myboost <= mymax) drainlvl = "M";
        else drainlvl = "S";
        console.log('boost: ' + myboost);
        console.log('mod: ' + mymod);
        console.log('max: ' + mymax);
        console.log('2x: ' + my2x);
        console.log('Drain: ' + drainlvl);

        var calcDice = "@{magic}";
        var calcTN = "ceil(@{" + myid + "}/2 )";
        var calcDrainTN = "ceil((@{" + myid + "} + @{adept" + myid + "boost} ) /2 )";
        var calcDrainDice = "@{willpower|max}";

        var myroll = "&{template:adept}";
        myroll += "{{myname=@{selected|token_name}}}";
        myroll += "{{rolldice=[[" + calcDice + "]]}}";
        myroll += "{{targetnumber=[[" + calcTN + "]]}}";
        myroll += "{{targetofspell=@{" + uppermyid + "}}}";
        myroll += "{{spellname=" + uppermyid + " Boost}}";
        myroll += "{{draindamage=[[0]]}}{{powerlevel=@{adept" + myid + "boost}}}";
        myroll += "{{draintest= [[ [[" + calcDrainDice + "]]d6>[[ {2, ( " + calcDrainTN + ")}kh1 ]]!! ]] }}";
        myroll += "{{casttest=[[ [[" + calcDice + "]]d6>[[" + calcTN + "]]!! ]] }}";
        console.log(myroll);
        startRoll(myroll, (results) => {
            finishRoll(results.rollId,
                {
                    draindamage: drainlvl,
                });
        });
    });

});
const refreshphase = function () {
    atts = [];
    atts["rounds-phase"] = 0;
    atts["sorcery-used"] = 0;
    setAttrs(atts);
};

const refreshpools = function () {
    atts = [];
    atts["rounds-phase"] = 0;
    atts["controlpool-used"] = 0;
    atts["hackingpool-used"] = 0;
    atts["astralpool-used"] = 0;
    atts["combatpool-used"] = 0;
    atts["spellpool-used"] = 0;
    atts["sorcery-used"] = 0;
    atts["spelldefensedice-used"] = 0;
    atts["taskpool-used"] = 0;
    setAttrs(atts);
};

on('clicked:repeating_spells:cast', (info) => {
    if (!("yes" in lang)) geti18n();
    var atts = ["character_name", "magic", "spellpool-used", "sorcery-used", "astralstate"];
    var source = info['sourceAttribute'].split('_');
    const myid = info["htmlAttributes"]["id"]
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    const attlist = ["target", "force", "drain", "drainlvl", "name", "description", "damage", "range", "spellcategory", "specialized"];
    attlist.forEach(attr => {
        let myname = myrepeat + attr;
        atts.push(myname);
    });
    console.log(atts);
    getAttrs(atts, function (myval) {
        console.log('vals');
        console.log(myval);
        const magic = myval["magic"];
        const myname = myval["character_name"];
        const plane = (myval["astralstate"] == "astral-projection") ? "astral" : "physical";
        const range = myval[myrepeat + "range"];
        const spellcat = myval[myrepeat + "spellcategory"];
        const specdice = myval[myrepeat + "specialized"];
        const force = myval[myrepeat + "force"];
        const target = myval[myrepeat + "target"];
        const drain = myval[myrepeat + "drain"];
        const spused = parseInt(myval["spellpool-used"]);
        const sorceryused = parseInt(myval["sorcery-used"]);
        var drainlvl = myval[myrepeat + "drainlvl"];
        const name = myval[myrepeat + "name"];
        const description = myval[myrepeat + "description"];
        const damage = myval[myrepeat + "damage"];
        var resistattr, resisttype;
        var targetofspell = target;
        if (target.includes("@{target")) {
            targetofspell = "@{target|" + lang["target"] + "|token_name}";
            resistattr = target.split("|")[2];
        }
        var myroll = "&{template:spell}";
        var calcDice = "?{" + lang["sorcery-dice"] + "?} + ?{" + lang["spell-pool-dice"] + "?} + " + specdice;
        var calcDrainTN = "floor(?{" + lang["force"] + "?}/2) + " + drain + " + ( 2 * @{spellsus} )";
        /* var calcDrainDice="@{willpower|max} + ?{" + lang["sorcery-dice-for-drain"] + "?} + ?{"+ lang["spell-pool-dice-for-drain"] +"?}"; */
        var calcDrainDice = "@{willpower|max}d6!![willpower] + ?{" + lang["sorcery-dice-for-drain"] + "?}d6!![sorcery dice] + ?{" + lang["spell-pool-dice-for-drain"] + "?}d6!![spell pool]";
        var caldDrainDiceTotal = "@{willpower|max}[willpower] + ?{" + lang["sorcery-dice-for-drain"] + "?}[sorcery dice] + ?{" + lang["spell-pool-dice-for-drain"] + "?}[spell pool]";
        myroll += "{{senddata=[[0]]}}";
        myroll += "{{draindamage=[[0]]}}{{finaldrain=[[0]]}}";
        myroll += "{{cast=[[0]]}}{{draintnfinal=[[0]]}}";
        myroll += "{{sorcerydice=[[?{" + lang["sorcery-dice"] + "?|@{spellcasting}} + ?{" + lang["sorcery-dice-for-drain"] + "?|0}]]}}";
        myroll += "{{spellpool=[[?{" + lang["spell-pool-dice"] + "?|0} + ?{" + lang["spell-pool-dice-for-drain"] + "?|0}]]}}";
        myroll += "{{spelldamage=[[" + damage + "]]}}"
        myroll += "{{castforce=[[?{" + lang["force"] + "?|" + force + "}]]}}";
        /* myroll+="{{draintest=[[[[" + calcDrainDice + "]]d6>[[ {2, ( " + calcDrainTN + ")}kh1]]!!]]}}"; */
        myroll += "{{draintest=[[" + calcDrainDice + "]]}}";
        myroll += "{{rolldice=[[" + calcDice + "]]}}";
        myroll += "{{draindice=[[" + caldDrainDiceTotal + "]]}}";
        if (range == "AoE") {
            targetofspell = "AoE";
            if (spellcat == "Elemental") {
                calcTN = "4 + @{rangedTN} + (2*(@{spellstack}+@{spellsus})) +@{spellmisc}";
                myroll += "{{targetnumber=[[" + calcTN + "]] + Cover & Target Movement}}";
                resisttype = "resistroll";
            } else {
                if (resistattr != null) {
                    calcTN = " (2*(@{spellstack}+@{spellsus})) + @{spellmisc} + @{stun_pen} + @{wound_pen} + @{rangedvizTN}";
                    myroll += "{{targetnumber=[[" + calcTN + "]] + Cover & " + resistattr + "}}";
                } else {
                    calcTN = target + " + (2*(@{spellstack}+@{spellsus})) + @{spellmisc} + @{stun_pen} + @{wound_pen} + @{rangedvizTN}";
                    myroll += "{{targetnumber=[[" + calcTN + "]] + Cover}}";
                }
                resisttype = "resistspell";
            }
            myroll += "{{roll=[[ [[" + calcDice + "]]d6>[[" + calcTN + "]]!! ]] }}";
        } else {
            if (spellcat == "Elemental") {
                calcTN = target + " + 4 + @{rangedTN} + (2*(@{spellstack}+@{spellsus})) +@{spellmisc}";
                myroll += "{{targetnumber=[[" + calcTN + "]]}}{{dodge=yes}}";
                resisttype = "resistroll";
            } else {
                calcTN = target + " + (2*(@{spellstack}+@{spellsus})) + @{spellmisc} + @{stun_pen} + @{wound_pen} + @{rangedvizTN} + @{cover}";
                myroll += "{{targetnumber=[[" + calcTN + "]]}}";
                resisttype = "resistspell";
            }
            myroll += "{{targetname=[[0[@{target|" + lang["target"] + "|token_name}]]]}}";
            myroll += "{{casttest=[[ [[" + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!! ]] }}";
        }
        myroll += "{{resisttype2=" + resisttype + "}}";
        myroll += "{{targetofspell=" + targetofspell + "}}";
        myroll += "{{draintn=[[ " + calcDrainTN + "]]}}";
        myroll += "{{spellname=" + name + "}}";
        myroll += "{{description=" + description + "}}";
        myroll += "{{myname=@{character_name}}}";
        if (target.includes("@{target")) {
            console.log('attr split: ' + resistattr);
            if (range != "AoE") {
                myroll += "{{spelldefense=[" + lang["spell-defense"] + "](~selected|spelldefense)}}";
                if (spellcat == "Elemental") myroll += "{{resistspell=[" + lang["resist-spell"] + "](~@{target|" + lang["target"] + "|character_name}|resist-impact-half)}}";
                else if (resistattr == "force") myroll += "{{resistspell=[" + lang["resist-spell"] + "](~@{target|" + lang["target"] + "|character_name}|attrib-force)}}";
                else myroll += "{{resistspell=[" + lang["resist-spell"] + "](~@{target|" + lang["target"] + "|character_name}|attrib-" + resistattr + "-max)}}";

            } else {
                if (spellcat == "Elemental") myroll += "{{resistspell=[" + lang["resist-spell"] + " ](~selected|resist-impact-half)}}"
                else if (resistattr == "force") myroll += "{{resistspell=[" + lang["resist-spell"] + "](~selected|attrib-force)}}"
                else myroll += "{{resistspell=[" + lang["resist-spell"] + "](~selected|resistspell||}}"

            }
        }
        console.log(myroll);
        payload = {
            wdmg: damage,
            rounds: 1,
            ammotype: spellcat.toLowerCase(),
            dodge: 0,
            armortype: "impact",
            plane: plane,
            attacker: myname,
            range: range,
            attribute: resistattr,
            weapon: name
        }
        startRoll(myroll, (results) => {
            atts = [];
            console.log(results.results.spelldamage.result);
            const finaldmg = payload["wdmg"] = damagetable[results.results.spelldamage.result];
            payload["targetnumber"] = results.results.targetnumber.result;
            var draindmg, finalcast;
            var draintn = results.results.draintn.result;
            console.log('draintn before: ' + draintn);
            if (drainlvl.includes("dmglvl")) {
                var dmglvl = parseInt(results.results.spelldamage.result);
                dmglvl = (dmglvl > 4) ? dmglvl - 9 : dmglvl;
                draindmg = eval(drainlvl);
                draindmg = (draindmg < 1) ? 1 : draindmg;
                draintn += (draindmg > 4) ? 2 * (draindmg - 4) : 0;
                console.log('drdmg calc: ' + draindmg);

            } else {
                console.log('drain straight');
                draindmg = parseInt(drainlvl);
                console.log('drdmg stright: ' + damagetable[draindmg]);
            }
            draintn = (draintn <= 2) ? 2 : draintn;
            console.log('draintn after: ' + draintn);
            console.log('drain damage base ' + draindmg);
            var dmgmax = 4;
            var dmgmin = 0;
            if (draindmg > dmgmax) draindmg = dmgmax;
            if (draindmg < dmgmin) draindmg = dmgmin;
            console.log('dmgmin ' + dmgmin + ' dmgmax ' + dmgmax);
            /* set drain damage to stun damage if force of spell is less than magic rating*/
            const finalforce = payload["power"] = results.results.castforce.result
            if ((draindmg < 10) && (finalforce <= magic)) {
                draindmg = draindmg + 9;
                dmgmax = 13;
                dmgmin = 9;
            }
            /* set drain damage to physical damage if force of spell is greater than magic rating*/
            if ((draindmg >= 10) && (finalforce > magic)) {
                draindmg = draindmg - 9;
                dmgmax = 4;
                dmgmin = 0;
            }
            const draintest = results.results.draintest.dice;
            const finaldraintest = (results.results.draintest.dice.filter(mydice => mydice >= draintn)).length;
            var drainstaged = draindmg - Math.floor(finaldraintest / 2);
            console.log(' drain staged ' + drainstaged);
            drainstaged = (drainstaged < dmgmin) ? dmgmin : (drainstaged > dmgmax) ? dmgmax : drainstaged;
            console.log(' drain staged check min/max ' + drainstaged);
            myfinaldrain = damagetable[drainstaged];
            draindmg = damagetable[draindmg];
            console.log('drdmg : ' + draindmg);
            console.log('finaldrain : ' + myfinaldrain);
            console.log('finaldrain test : ' + finaldraintest);
            atts["sorcery-used"] = sorceryused + parseInt(results.results.sorcerydice.result);
            atts["spellpool-used"] = spused + parseInt(results.results.spellpool.result);
            if (range == "AoE") {
                finalcast = payload["attackdice"] = results.results.roll.dice;
                console.log('finalcast ' + finalcast);
                payload["attacktest"] = 0;
                finishRoll(results.rollId,
                    {
                        draintest: finaldraintest,
                        spelldamage: finaldmg,
                        draindamage: draindmg,
                        finaldrain: myfinaldrain,
                        cast: finalcast,
                        draintnfinal: draintn,
                        senddata: rollEscape.escape(payload),
                    });
            } else {
                payload["target"] = results.results.targetname.expression.match(/\[(.*)\]/)[1];
                payload["attacktest"] = results.results.casttest.result;
                payload["attackdice"] = results.results.casttest.dice;
                finishRoll(results.rollId, {
                    senddata: rollEscape.escape(payload),
                    draintest: finaldraintest,
                    spelldamage: finaldmg,
                    finaldrain: myfinaldrain,
                    draindamage: draindmg,
                    draintnfinal: draintn,
                });

            }
            console.log(atts);
            setAttrs(atts);
        });
    });
});

const calcFinalDebuff = function (delta) {
    delta = floor(delta / 2);
    return debuff = (delta <= 0) ? 0 : delta;
};

const calcFinalDmg = function (dmgstart, resist) {
    const dmgmax = (dmgstart >= 10) ? 13 : 4;
    const dmgmin = (dmgstart >= 10) ? 9 : 0;
    var dmgstaged = dmgstart + floor(resist / 2);
    console.log('dmgstaged: ' + dmgstaged);
    dmgstaged = (dmgstaged > dmgmax) ? dmgmax : (dmgstaged < dmgmin) ? dmgmin : dmgstaged;
    return (damagetable[dmgstaged]);
};

var initiative = function (init, reaction, dmgpen, mytitle, character) {
    if (!("yes" in lang)) geti18n();
    console.log('init ' + init + ' reaction ' + reaction + ' dmgpen ' + dmgpen + ' mytitle ' + mytitle + ' character ' + character);
    penatts = ["stun_pen", "wound_pen", "matrix-penalty", "vehicle-penalty", "rccommand-penalty", "rcsimsense-penalty", "rcsystem-penalty"];
    getAttrs(penatts, function (myval) {
        console.log(init, reaction)
        var myroll = "&{template:init} {{character=" + character + "}}{{type=" + mytitle + "}}"
        myroll += "{{roll=[[" + init + "d6+" + reaction + dmgpen + " &{tracker}]]}}"
        if (myval["matrix-penalty"] >= 10) {
            myroll = "&{template:info}{{character=@{character_name}}}{{action=Initiative}}{{type=" + mytitle + " }}{{info1=@{character_name}'s icon has crashed}}";
        }
        if (myval["vehicle-penalty"] >= 10) {
            myroll = "&{template:info}{{character=@{character_name}}}{{action=Initiative}}{{type=" + mytitle + " }}{{info1=@{character_name} is destroyed }}";
        }
        if ((myval["rccommand-penalty"] >= 10) || (myval["rcsimsense-penalty"] >= 10) || (myval["rcsystem-penalty"] >= 10)) {
            myroll = "&{template:info}{{character=@{character_name}}}{{action=Initiative}}{{type=" + mytitle + " }}{{info1=@{character_name} is disengaged }}";
        }
        console.log(myroll);
        startRoll(myroll, (results) => {
            finishRoll(results.rollId);
        });
    });
};
on('clicked:init-aug', (info) => {
    const myid = info["htmlAttributes"]["id"]
    let init = "@{initiative|max}";
    let reaction = "@{reaction|max}";
    let dmgpen = " -@{wp-char}";
    let character = "@{character_name}";
    let mytitle = "Augmented Initiative Roll";
    initiative(init, reaction, dmgpen, mytitle, character);

});



on('clicked:repeating_ic:init', (info) => {
    if (!("yes" in lang)) geti18n();
    gets = [];
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    const mytitle = info["htmlAttributes"]["title"]
    gets.push(myrepeat.concat("icrating"));
    gets.push(myrepeat.concat("icname"));
    gets.push(myrepeat.concat("ic-penalty"));
    getAttrs(gets, function (myval) {
        var penalty;
        console.log(myval);
        const init = "@{matrixsecuritynumber}";
        const reaction = parseInt(myval[myrepeat.concat("icrating")]);
        const character = myval[myrepeat.concat("icname")];
        var penalty = -1 * parseInt(myval[myrepeat.concat("ic-penalty")]);
        if (penalty == 0) penalty = " + 0 ";
        initiative(init, reaction, penalty, mytitle, character);
    });

});

on('clicked:init', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    var dmgpen = " -@{wp-char}";
    character = "@{character_name}";
    if (myid == "augmentedinit") {
        init = "@{initiative|max}";
        reaction = "@{reaction|max}";
    } else if (myid == "astralinit") {
        init = 1;
        reaction = "@{astralreaction}";
    } else if (myid == "spiritinit") {
        init = "@{initiative}";
        reaction = "@{spirit-initp}";
    } else if (myid == "matrixinit") {
        init = "@{deck-initiative}";
        reaction = "@{deck-reaction-final}";
        var dmgpen = " - ( @{wp-char} + @{matrix-penalty})";
    } else if (myid == "vehicleinit") {
        init = "(@{vehicle-driver}initiative} + @{vehicle-initbonus})";
        reaction = "@{vehicle-driver}reaction} + @{vehicle-reactbonus}";
        var dmgpen = " - (@{vehicle-driver}stun_pen}-@{vehicle-driver}wound_pen} - @{wp-vehicle})";
    } else if (myid == "iceinit") {
        init = "@{deck-initiative}";
        reaction = "@{deck-reaction-final}";
        var dmgpen = " - ( @{wp-char} + @{wp-matrix})";
    } else {
        init = "@{initiative}";
        reaction = "@{reaction}";
    }
    initiative(init, reaction, dmgpen, mytitle, character);
    refreshpools();
});
const getTokenName = async () => {
    const rxGrab = /^0\[(.*)\]\s*$/;
    let myroll = "! {{mytoken=[[0[@{selected|token_name}]]]}}";
    rollresult = await startRoll(myroll),
        tokenname = (rollresult.results.mytoken.expression.match(rxGrab) || [])[1];
    finishRoll(rollresult.rollId);
    console.log('debug getTokenName ' + tokenname);
    return tokenname;
};

const endTurn = async () => {
    const tokenname = await getTokenName();
    console.log('token name ' + tokenname);
    if (!("yes" in lang)) geti18n();
    var myroll = "&{template:init} {{character=" + tokenname + "}}{{type=[[0]]}}"
    var endtypemsg = "End Combat Pass";
    myroll += "{{setinit=[[10 &{tracker:-}]]}}{{initval=[[@{tracker|" + tokenname + "}]]}}"
    console.log(myroll);
    startRoll(myroll, (results) => {
        const initval = results.results.initval.result;
        if (initval <= 10) refreshpools();
        else {
            refreshphase();
            endtypemsg = "End Combat Turn";
        }
        console.log(results.results);
        finishRoll(results.rollId);
    });
};

on('clicked:endturn', (info) => {
    endTurn(info);
});

on('clicked:resistbanish', (info) => {
    if (!("yes" in lang)) geti18n();
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    var calcDice = "@{force}";
    calcTN = "@{target|" + lang["target"] + "|magic}";
    var myroll = "&{template:conjure}{{myname=@{character_name}}}";
    myroll += "{{targetofspell=@{target|" + lang["target"] + "|character_name}}}";
    myroll += "{{spellname=" + lang["resist-banish"] + "}}";
    myroll += "{{rolldice=[[" + calcDice + "]]}}";
    myroll += "{{targetnumber=[[" + calcTN + "]]}}";
    myroll += "{{casttest=[[ [[" + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!! ]] }}";
    console.log(myroll);
    startRoll(myroll, (results) => {
        finishRoll(results.rollId);
    });
});
const floor = function (v) {
    return (v >= 0 || -1) * Math.floor(Math.abs(v));
}

const ammomods = {
    deckblackhammer: { armorname: "'hardening'", armor: "hardening", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    deckkilljoy: { armorname: "'hardening'", armor: "hardening", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 9, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    blackiclethal: { armorname: "'hardening'", armor: "hardening", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    blackicnonlethal: { armorname: "'hardening'", armor: "hardening", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 9, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    cerebropathic: { armorname: "'hardening'", armor: "hardening", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    psychotropic: { armorname: "'hardening'", armor: "hardening", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    d: { armorname: "'impact'", armor: "impact", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    c: { armorname: "'impact'", armor: "impact", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    o: { armorname: "'impact'", armor: "impact", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    elemental: { armorname: "'half impact'", armor: "Math.floor(impact/2)", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    melee: { armorname: "'impact'", armor: "impact", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 0, barrier: 0, knockdown: 0, amsg: "", weight: 0 },
    assualtcannon: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .125 },
    bigd: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 2, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "Choke Rules not Applied", weight: .1 },
    bola: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 1, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 2, amsg: "", weight: .1 },
    arrows: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: 0.01 },
    arrowsexp: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: 0.01 },
    arrowsexpex: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: 0.01 },
    regular: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: 0.05 },
    net: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .5 },
    largenet: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .7 },
    shocklock: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 1, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 2, knockdown: 1, amsg: "", weight: .075 },
    flare: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .1 },
    adps: { armorname: "'half Ballistic'", armor: "Math.floor(ballistic * 0.5)", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 0.5, knockdown: 1, amsg: "", weight: .025 },
    gyrojetplus: { armorname: "'half Ballistic'", armor: "Math.floor(ballistic * 0.5)", av: 1, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 0.5, knockdown: 1, amsg: "", weight: .2 },
    gyrojetplusseeker: { armorname: "'half Ballistic'", armor: "Math.floor(ballistic * 0.5)", av: 1, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 0.5, knockdown: 1, amsg: "", weight: .225 },
    gyrojetseeker: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .2 },
    gyrojet: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .175 },
    explosive: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 1, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .075 },
    explosive2: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 2, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .075 },
    flechette: { armorname: "(ballistic >(2*impact))? 'ballistic' : 'impact';", armor: "(Math.max(ballistic, (impact * 2)))", av: -0.5, power: 0, rpower: 0, dmg: 0, rdmg: "(armoron == 0)? 1 : 0;", recoil: 1, barrier: 2, knockdown: 1, amsg: "Final Damage Level depends on Armor", weight: .05 },
    gel: { armorname: "'impact'", armor: "impact * 2", av: 0, power: -2, rpower: 0, dmg: 9, rdmg: 0, recoil: 1, barrier: 1, knockdown: 2, amsg: "", weight: .025 },
    hammerheads: { armorname: "'impact'", armor: "impact * 2", av: 0, power: -2, rpower: 0, dmg: 9, rdmg: 0, recoil: 1, barrier: 1, knockdown: 2, amsg: "", weight: .01 },
    screamer: { armorname: "'impact'", armor: "impact", av: 0, power: "-1 * (Math.ceil(wpower / 2))", rpower: 0, dmg: 9, rdmg: 0, recoil: 1, barrier: 1, knockdown: 2, amsg: "", weight: .01 },
    stunshell: { armorname: "'impact'", armor: "impact", av: 0, power: 0, rpower: 0, dmg: 9, rdmg: 0, recoil: 1, barrier: 1, knockdown: 2, amsg: "", weight: .05 },
    tracer: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .05 },
    av: { armorname: "'half Ballistic'", armor: "Math.floor(ballistic * 0.5)", av: 1, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 0.5, knockdown: 1, amsg: "", weight: .1 },
    capsule: { armorname: "'impact'", armor: "impact", av: 0, power: -2, rpower: 0, dmg: 9, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .025 },
    glazer: { armorname: "(ballistic > impact)? 'ballistic' : 'impact';", armor: "Math.max((ballistic * 2), (impact * 2))", av: -0.5, power: 2, rpower: 0, dmg: 0, rdmg: "( armoron == 0)? 1 : 0;", recoil: 1, barrier: 2, knockdown: 1, amsg: "Final Damage Level depends on Armor", weight: .05 },
    hic: { armorname: "(ballistic > impact)? 'ballistic' : 'impact';", armor: "Math.max(ballistic,impact)", av: 0, power: "(range==6)? -1 : (range==9)? -1", rpower: 0, dmg: 0, rdmg: 0, recoil: 2, barrier: 1, knockdown: 1, amsg: "", weight: .025 },
    hpoint: { armorname: "'ballistic + Impact'", armor: "ballistic + impact", av: 0, power: 0, rpower: "(armoron == 0)? 3 : 1", dmg: 0, rdmg: 0, recoil: 2, barrier: 1, knockdown: 1, amsg: "Final Power Rating depends on Armor", weight: .05 },
    incendiary: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .075 },
    mercury: { armorname: "(ballistic > impact)? 'ballistic' : 'impact';", armor: "Math.max((ballistic * 2), (impact * 2))", av: -0.5, power: 0, rpower: 0, dmg: 0, rdmg: "( armoron == 0)? 1 : 0;", recoil: 1, barrier: 2, knockdown: 1, amsg: "Final Damage Level depends on Armor", weight: .075 },
    tracker: { armorname: "'ballistic'", armor: "ballistic", av: 0, power: 0, rpower: 0, dmg: 0, rdmg: 0, recoil: 1, barrier: 1, knockdown: 1, amsg: "", weight: .05 }
}

const resistdmg = function (myid, mods) {
    if (!("yes" in lang)) geti18n();
    atts = ["ballistic", "impact", "armor-on", "deck-hardening", "body_max", "willpower_max"];
    getAttrs(atts, function (myval) {
        console.log('myval');
        console.log(myval);
        const ballistic = myval["ballistic"];
        const impact = myval["impact"];
        const armoron = myval["armor-on"];
        const hardening = myval["deck-hardening"];
        const body = parseInt(myval["body_max"]);
        const willpower = parseInt(myval["willpower_max"]);
        var resistattr = body;
        var armorname;
        var wdmg;
        var dmgcode = 0;
        var weapondmg = "none";
        var dodge = 0;
        if (mods == "regular") mods = 1;
        if (mods == "normal") mods = 1;
        if (mods == "double") mods = 2;
        if (mods == "half") mods = 0.5;
        if (typeof mods === 'object' && mods !== null) {
            myroll = "&{template:resistadv}";
            const ammo = mods["ammotype"].toLowerCase();
            weapondmg = mods["wdmg"];
            dodge = mods["dodge"];
            const range = mods["range"];
            const armorval = eval(ammomods[ammo]["armor"]);
            const powermod = eval(ammomods[ammo]["rpower"]);
            const dmgmod = eval(ammomods[ammo]["rdmg"]);
            dmgcode = damagetable[weapondmg] + dmgmod;
            myroll += "{{Power=?{" + lang["attack-power"] + "|" + mods.power + "}}}";
            myroll += "{{wpndmg=" + weapondmg + "}}";
            myroll += "{{attacktest=[[" + mods["attacktest"] + "]]}}";
            myroll += "{{dodge=[[" + mods["dodge"] + "]]}}";
            myroll += "{{AttackType=" + ammo + "}}";
            if (ammo == "deckkilljoy") resistattr = willpower;
            calcTN = "?{" + lang["attack-power"] + "} + " + powermod + " - " + armorval;
            if (mods["blast"]) {
                myroll += "{{distance=[[?{" + lang["distance-from-explosive-in-meters"] + "|0}]]}}"
                myroll += "{{blastredux=[[?{" + lang["distance-from-explosive-in-meters"] + "|0} / " + mods["blast"] + "]]}}"
                calcTN += " - ( ?{" + lang["distance-from-explosive-in-meters"] + "} / " + mods["blast"] + ")";
            }
            myid = eval(ammomods[ammo]["armorname"]);
            console.log('test 1 ' + myid);
            myroll += "{{armorvalue=" + armorval + "}}";
        } else {
            myroll = "&{template:resist}";
            myroll += "{{Power=?{" + lang["attack-power"] + "|4}}}";
            myroll += "{{attacktest=[[0}]]}}";
            myroll += "{{dodge=[[0]]}}";
            myroll += "{{AttackType=" + mods + "}}";
            calcTN = "?{" + lang["attack-power"] + "} - (floor(@{" + myid + "} * " + mods + "))";
            myroll += "{{armorvalue=@{" + myid + "}}}"
        }
        let actionname = myid.charAt(0).toUpperCase() + myid.slice(1);

        var calcDice = resistattr + " + ?{" + lang["combat-pool-dice"] + "}";
        myroll += "{{finaldmg=[[0]]}}{{netresult=[[0]]}}";
        myroll += "{{name=" + actionname + " Armor}}{{character=@{character_name}}}{{combatpool=[[?{" + lang["combat-pool-dice"] + "|0}]]}}";
        myroll += "{{action=" + lang["damage-resistance-test"] + "}}";
        myroll += "{{rolldice=[[" + calcDice + "]]}}";
        myroll += "{{targetnumber=[[" + calcTN + "]]}}";
        myroll += "{{roll= [[ [[" + calcDice + " ]]d6>[[ {2,(" + calcTN + ")}kh1 ]]!! ]]}}";
        console.log(myroll);
        console.log(' unmod weapons code ' + dmgcode);
        startRoll(myroll, (results) => {
            const netresult = results.results.attacktest.result - (results.results.roll.result + dodge);
            console.log('debug netresult ' + netresult);
            const stage = floor(netresult / 2);
            var finaldmg = dmgcode + stage;
            var dmgmax = 4;
            var dmgmin = 0;
            if (dmgcode >= 10) dmgmax = 13;
            if (dmgcode >= 10) dmgmin = 9;
            if (finaldmg > dmgmax) finaldmg = dmgmax;
            if (finaldmg < dmgmin) finaldmg = dmgmin;
            updatepoolused("combatpool", results.results.combatpool.result);
            if (weapondmg != "none") {
                finishRoll(results.rollId, {
                    finaldmg: damagetable[finaldmg],
                    netresult: netresult,
                });
            } else { finishRoll(results.rollId); }
        });
    });
};

on('clicked:resistdmg', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    mods = "?{" + lang["attack-type"] + "|" + lang["normal"] + ",1|" + lang["elemental"] + ",0.5|" + lang["adps"] + ",0.5|" + lang["half"] + ",0.5|" + lang["double"] + ",2}";
    resistdmg(myid, mods);
});

on('clicked:checkaoe', (info) => {
    if (!("yes" in lang)) geti18n();
    const payload = rollEscape.unescape(info.originalRollId);
    const attacktype = payload["ammotype"].toLowerCase();
    const basetn = payload["targetnumber"];
    const attacktest = payload["attacktest"];
    const attackdice = payload["attackdice"];
    const attribute = payload["attribute"] + "_max";
    console.log(payload);
    var myresisttype;
    myroll = "&{template:aoe}{{senddata=[[0]]}}{{resisttype=[[0]]}}";
    getAttrs(["character_name", "targetMove", "body_max", "willpower_max", "intelligence_max", "force"], function (myval) {
        payload["target"] = myval["character_name"];
        if (attacktype == "elemental") {
            myroll += "{{dodge=yes}}";
            calcTN = basetn + " + " + myval["targetMove"] + " + ?{" + lang["cover-modifiers"] + "|0}";
            myresisttype = "resistroll";

        } else {
            calcTN = basetn + " + " + myval[attribute] + " + ?{" + lang["cover-modifiers"] + "|0}";
            myresisttype = "resistspell";
        }
        myroll += "{{targetnumber=[[" + calcTN + "]]}}{{dice=" + attackdice + "}}";
        myroll += "{{attacktest=[[0]]}}{{character=" + myval["character_name"] + "}}{{weapon=" + payload["weapon"] + "}}";
        console.log('calcTN: ' + calcTN);
        var attackresult;
        startRoll(myroll, (results) => {
            finaltn = results.results.targetnumber.result;
            attackresult = payload["attacktest"] = (attackdice.filter(mydice => mydice >= finaltn)).length;
            if (attackresult < 1) {
                attackresult = "MISSED";
                myresisttype = "missed";
            }
            console.log('finaltn: ' + finaltn);
            console.log('attackresult: ' + attackresult);
            console.log('myresisttype: ' + myresisttype);
            finishRoll(results.rollId,
                {
                    resisttype: myresisttype,
                    attacktest: attackresult,
                    senddata: rollEscape.escape(payload),
                });
        });
    });
});

on('clicked:resistspell', (info) => {
    if (!("yes" in lang)) geti18n();
    const payload = rollEscape.unescape(info.originalRollId);
    console.log(payload);
    const attribute = payload["attribute"] + "_max";
    var wdmg = payload["wdmg"];
    var dmgnumber = damagetable[wdmg];
    var dmgmax = 4; dmgmin = 0;
    if (dmgnumber >= 10) dmgmax = 13, dmgmin = 9;
    const attacktest = payload["attacktest"] + "_max";
    if (payload["attacktest"] < 1) missedattack(info);
    else {
        getAttrs(["character_name", "body_max", "willpower_max", "intelligence_max", "force"], function (myval) {
            myroll = "&{template:resistadv}{{character=" + myval["character_name"] + "}}{{target=" + payload["attacker"] + "}}";
            myroll += "{{Power=" + payload["power"] + "}}{{wpndmg=" + payload["wdmg"] + "}}{{name=" + payload["attribute"] + "}}";
            myroll += "{{armorvalue=" + myval[attribute] + "}}";
            myroll += "{{attacktest=[[" + payload["attacktest"] + "]]}}";
            calcDice = parseInt(myval[attribute])
            calcTN = payload["power"];
            myroll += "{{action=" + lang["spell-resistance-test"] + "}}";
            myroll += "{{spelldmg=[[0]]}}{{netresult=[[0]]}}";
            myroll += "{{rolldice=[[" + calcDice + "]]}}";
            myroll += "{{targetnumber=[[" + calcTN + "]]}}";
            myroll += "{{roll= [[ [[" + calcDice + " ]]d6>[[ {2,(" + calcTN + ")}kh1 ]]!! ]]}}";
            console.log(myroll);
            startRoll(myroll, (results) => {
                const mynet = payload["attacktest"] - results.results.roll.result;
                var delta = dmgnumber + floor(mynet / 2);
                delta = (delta > dmgmax) ? dmgmax : delta;
                delta = (delta < dmgmin) ? dmgmin : delta;
                finaldmg = damagetable[delta];
                console.log('finaldmg ' + finaldmg);
                finishRoll(results.rollId, {
                    netresult: mynet,
                    spelldmg: finaldmg,
                });
            });

        });
    }
});

on('clicked:resistroll', (info) => {
    const payload = rollEscape.unescape(info.originalRollId);
    console.log(payload);
    resistdmg(payload["armortype"], payload);
});

const resistmods = ["half", "normal", "double"];
resistmods.forEach(mod => {
    var myball = "resist-ballistic-" + mod;
    var myimpact = "resist-impact-" + mod;
    on(`clicked:${myball}`, (info) => {

        console.log(rollEscape.unescape(info.originalRollId));
        resistdmg("ballistic", mod);
    });

    on(`clicked:${myimpact}`, (info) => {
        console.log(rollEscape.unescape(info.originalRollId));
        resistdmg("impact", mod);
    });
});

on('clicked:resistvehicledmg', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    var calcDice = "@{body|max} +  ?{" + lang["control-pool-dice"] + "}";
    calcTN = "?{" + lang["attack-power"] + "}";
    myroll = "&{template:resist}";
    myroll += "{{name=" + lang["damage-resistance-test"] + "}}{{character=@{character_name}}}{{armorvalue=@{armor}}}{{controlpool=[[?{" + lang["control-pool-dice"] + "|0}]]}}";
    myroll += "{{action=" + lang["damage-resistance-test"] + "}}";
    myroll += "{{rolldice=[[" + calcDice + "]]}}";
    myroll += "{{targetnumber=[[" + calcTN + "]]}}";
    myroll += "{{roll= [[ [[" + calcDice + " ]]d6>[[ {2,(" + calcTN + ")}kh1 ]]!! ]]}}";
    console.log(myroll);
    startRoll(myroll, (results) => {
        updatepoolused("controlpool", results.results.controlpool.result);
        finishRoll(results.rollId);
    });
});


const dodge = function (mods) {
    if (!("yes" in lang)) geti18n();
    myroll = "&{template:resistadv}";
    console.log('debug ' + mods);
    if (typeof mods === 'object' && mods !== null) {
        payload = mods;
        console.log(payload);
        mods = (payload["rounds"]) ? "?{" + lang["modifiers"] + "?|" + Math.floor(payload["rounds"] / 3) + "}" : parseInt(payload["meleetn"] - 4);
        myroll += "{{senddata=[[0]]}}";
    } else payload = { rounds: mods };
    console.log('mods: ' + mods);
    var calcDice = "?{" + lang["combat-pool-dice"] + "}";
    calcTN = "4 + " + mods;
    calcTN += (payload["rounds"]) ? " + @{wp-char}" : "";
    myroll += "{{name=" + lang["dodge"] + "}}{{character=@{character_name}}}"
    myroll += "{{combatpool=[[?{" + lang["combat-pool-dice"] + "|0}]]}}";
    myroll += "{{action=" + lang["dodge"] + "}}";
    myroll += "{{targetnumber=[[" + calcTN + "]]}}";
    myroll += "{{rolldice=[[" + calcDice + "]]}}";
    myroll += "{{roll= [[ [[" + calcDice + " ]]d6>[[ {2,(" + calcTN + ")}kh1 ]]!! ]]}}";
    console.log(myroll);
    startRoll(myroll, (results) => {
        updatepoolused("combatpool", results.results.combatpool.result);
        console.log(payload);
        if (payload) {
            payload["dodge"] = results.results.roll.result;
            finishRoll(results.rollId, { senddata: rollEscape.escape(payload), });
        } else {
            finishRoll(results.rollId);
        }
    });

};

on('clicked:dodge', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    if (info["htmlAttributes"]["id"] != undefined) {
        mods = "?{" + lang["modifiers"] + "?|0}";
    }
    else if (info["originalRollId"] != undefined) {
        mods = rollEscape.unescape(info["originalRollId"]);
    }
    dodge(mods);
});

const conjuring = function (myid, spirittype = "spirit", force = "ask", name = "none") {
    if (!("yes" in lang)) geti18n();
    console.log('spirittype: ' + spirittype);
    const atts = ["charisma_max", "magic-type", "magic", "summoning", "banishing", "spiritcontrol", "character_name"]
    getAttrs(atts, function (myval) {
        if (name == "none") {
            name = (spirittype) ? spirittype : "spirit";
        }
        const mycharisma = myval["charisma_max"];
        const actionname = myid.charAt(0).toUpperCase() + myid.slice(1);
        const calcDrainDice = mycharisma + " + ?{" + lang["conjuring-dice-for-drain"] + "?|0} + ?{" + lang["spirit-focus-dice"] + "}";
        const myskill = parseInt(myval[myid]);
        var calcDrainTN = (force == "ask") ? "?{" + lang["force"] + "?}" : force;
        var calcDice = myskill + " + ?{" + lang["spirit-focus-dice"] + "} + ?{" + lang["are-you-the-summoner"] + "?|" + lang["yes"] + "," + mycharisma + "|" + lang["no"] + ",0}"
        var calcTN;
        if (myid == "summoning") {
            calcDice = myskill + " - ?{" + lang["conjuring-dice-for-drain"] + "?} + ?{" + lang["spirit-focus-dice"] + "}";
            calcTN = (force == "ask") ? "?{" + lang["force"] + "?}" : force;
        } else {
            calcTN = "@{target|" + lang["target"] + "|force}";
        }
        var myroll = "&{template:conjure}{{myname=" + myval["character_name"] + "}}";
        myroll += "{{draindamage=[[0]]}}{{finaldrain=[[0]]}}";
        if (myid == "summoning") {
            if (force == "ask") myroll += "{{spiritforce=[[?{" + lang["force"] + "?|1}]]}}"
            else myroll += "{{spiritforce=[[" + force + "]]}}";
            myroll += "{{spirittype=" + spirittype + "}}";
            myroll += "{{spiritname=" + name + "}}";
        }
        else {
            myroll += "{{spiritforce=[[  @{target|" + lang["target"] + "|force} ]]}}"
            myroll += "{{spirittype=Spirit}}";
        }
        myroll += "{{spellname=" + actionname + "}}{{skill=[[" + myskill + "]]}}";
        myroll += "{{spiritdice=[[?{" + lang["spirit-focus-dice"] + "|0}]]}}";
        myroll += "{{targetnumber=[[" + calcTN + "]]}}";
        if (myid == "summoning") {
            myroll += "{{draintn=[[" + calcDrainTN + "]]}}";
            myroll += "{{draindice=[[" + calcDrainDice + "]]}}";
            myroll += "{{conjuredicedrain=[[?{" + lang["conjuring-dice-for-drain"] + "?}]]}}";
            myroll += "{{conjuredice=[[" + myskill + " - ?{" + lang["conjuring-dice-for-drain"] + "?}]]}}";
            myroll += "{{draintest= [[ [[" + calcDrainDice + "]]d6>[[ {2, ( " + calcDrainTN + ")}kh1 ]]!! ]] }}";
        }
        myroll += "{{rolldice=[[" + calcDice + "]]}}";
        myroll += "{{casttest=[[ [[" + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!! ]] }}";
        if (myid == "banishing") myroll += "{{resist=[" + lang["resist-banish"] + "](~@{target|" + lang["target"] + "|character_name}|resistbanish)}}"
        console.log(myroll);
        startRoll(myroll, (results) => {
            if (myid == "summoning") {
                var dmgmin = 0, dmgmax = 4;
                const spiritforce = results.results.spiritforce.result;
                var basedrain;
                if (spiritforce <= (mycharisma / 2)) basedrain = "L";
                else if (spiritforce <= mycharisma) basedrain = "M";
                else if (spiritforce >= (mycharisma * 1.5)) basedrain = "D";
                else basedrain = "S";
                if (spiritforce <= myval["magic"]) {
                    console.log('set to stun');
                    basedrain = basedrain.concat("(stun)");
                    dmgmin = 9;
                    dmgmax = 13;
                }
                console.log('debug base drain ' + basedrain);
                var dmgnumber = damagetable[basedrain];
                console.log('dmgnumber: ' + dmgnumber);
                const staging = Math.floor(results.results.draintest.result / 2)
                console.log('staging: ' + staging);
                const conjuredicefinal = results.results.skill.result - results.results.conjuredicedrain.result;
                dmgnumber -= staging;
                console.log('debug dmgnumber unmodified: ' + dmgnumber + " dmgmax " + dmgmax + " dmgmin " + dmgmin);
                dmgnumber = (dmgnumber > dmgmax) ? dmgmax : (dmgnumber < dmgmin) ? dmgmin : dmgnumber;
                console.log('debug dmgnumber conjure: ' + dmgnumber);
                const stageddrain = damagetable[dmgnumber];
                console.log('debug finaldrain ' + stageddrain);
                finishRoll(results.rollId, {
                    draindamage: basedrain,
                    finaldrain: stageddrain,
                });
            } else {
                finishRoll(results.rollId, {});
            }
        });
    });

};
const conjurelist = ["spiritcontrol", "summoning", "banishing"];
conjurelist.forEach(action => {
    console.log(action)
    on(`clicked:${action}`, conjuring(action));
});

on('clicked:repeating_conjuring:conjure-spirit', (info) => {
    if (!("yes" in lang)) geti18n();
    var atts = [];
    console.log(info);
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    const myrepeat = source.join('_').concat('_');
    const attributes = ["name", "force", "type"];
    attributes.forEach(attr => {
        atts.push(myrepeat + attr);
    });
    console.log(atts);
    getAttrs(atts, function (myval) {
        console.log(myval);
        var name = myval[myrepeat + "name"];
        if (!name) name = "none";
        const force = parseInt(myval[myrepeat + "force"]);
        const spirittype = myval[myrepeat + "type"];
        console.log('spirit-type: ' + spirittype);
        conjuring("summoning", spirittype, force, name);
    });
});

on('clicked:conjure', (info) => {
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    console.log("clicked conjure: " + myid);
    conjuring(myid);
});

on('clicked:dispell', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log("clicked dispell");
    var calcDice = "?{" + lang["sorcery-dice"] + "?} + ?{" + lang["spell-pool-dice"] + "?}";
    var calcTN = "?{" + lang["force-of-spell"] + "?}";
    var calcDrainTN = "floor( ?{" + lang["force-of-spell"] + "?|0}/2) + ( 2 * @{spellsus} + ?{" + lang["drain-modifiers"] + "?|0})";
    var calcDrainDice = "@{willpower|max} + ?{" + lang["sorcery-dice-for-drain"] + "?} + ?{" + lang["spell-pool-dice-for-drain"] + "?}";
    var myroll = "&{template:spell}";
    myroll += "{{finaldrain=[[0]]}}{{draintnfinal=[[" + calcDrainTN + "]]}}";
    myroll += "{{sorcerydice=[[?{" + lang["sorcery-dice"] + "?|@{spellcasting}} + ?{" + lang["sorcery-dice-for-drain"] + "?|0}]]}}";
    myroll += "{{draindamage=[[?{" + lang["drain-damage"] + "?|" + lang["light"] + ",1|" + lang["moderate"] + ",2|" + lang["serious"] + ",3|" + lang["deadly"] + ",4|";
    myroll += lang["light-stun"] + ",10|" + lang["moderate-stun"] + ",11|" + lang["serious-stun"] + ",12|" + lang["deadly-stun"] + ",13|" + lang["none"] + ",0}]]}}";
    myroll += "{{spellpool=[[?{" + lang["spell-pool-dice"] + "?|0} + ?{" + lang["spell-pool-dice-for-drain"] + "?|0}]]}}";
    myroll += "{{castforce=[[?{" + lang["force-of-spell"] + "?}]]}}";
    myroll += "{{draintest= [[ [[" + calcDrainDice + "]]d6>[[ {2, ( " + calcDrainTN + ")}kh1 ]]!! ]] }}";
    myroll += "{{spellname=" + lang["dispell"] + "}}";
    myroll += "{{rolldice=[[" + calcDice + "]]}}";
    myroll += "{{targetnumber=[[" + calcTN + "]]}}";
    myroll += "{{casttest=[[ [[" + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!! ]] }}";
    myroll += "{{draindice=[[" + calcDrainDice + "]]}}";
    myroll += "{{myname=@{character_name}}}"
    myroll += "{{dispell=yes}}"
    console.log(myroll);
    startRoll(myroll, (results) => {
        updatepoolused("sorcery", results.results.sorcerydice.result);
        updatepoolused("spellpool", results.results.spellpool.result);
        const drainbase = damagetable[results.results.draindamage.result];
        const finaldraintxt = calcFinalDmg(results.results.draindamage.result, (-1 * results.results.draintest.result));
        finishRoll(results.rollId, {
            draindamage: drainbase,
            finaldrain: finaldraintxt,
        });
    });
});

on('clicked:spelldefense', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log("clicked spelldefense");
    const payload = (info["originalRollId"] != undefined) ? rollEscape.unescape(info["originalRollId"]) : "none";
    var myforce = 0;
    var mytarget = "@{target|" + lang["ally"] + "|token_name}";
    var myroll = "&{template:spell}{{myname=@{character_name}}}{{resisttype=[[0]]}}";
    if (payload != "none") {
        console.log(payload);
        myforce = (payload["power"]) ? payload["power"] : 0;
        mytarget = payload["target"];
        if (payload["ammotype"].toLowerCase() == "elemental") myroll += "{{dodge=yes}}";
        myroll += "{{defensetest=[[0]]}}";
        myroll += "{{senddata=[[0]]}}";
        myroll += "{{attacks=[[" + payload["attacktest"] + "]]}}";
        myresist = (payload["ammotype"].toLowerCase() == "elemental") ? "resistroll" : "resistspell";
    }
    var calcDice = "?{" + lang["sorcery-dice"] + "?} + ?{" + lang["spell-pool-dice"] + "?}";
    var calcTN = "?{" + lang["force-of-spell"] + "?}";
    myroll += "{{sorcerydice=[[?{" + lang["sorcery-dice"] + "?|@{sorcery-defense}}]]}}";
    myroll += "{{castforce=[[?{" + lang["force-of-spell"] + "?|" + myforce + "}]]}}";
    myroll += "{{targetnumber=[[" + calcTN + "]]}}";
    myroll += "{{spellpool=[[?{" + lang["spell-pool-dice"] + "?|@{spellpool-defense}}]]}}";
    myroll += "{{spellname=" + lang["spell-defense"] + "}}";
    myroll += "{{rolldice=[[" + calcDice + "]]}}";
    myroll += "{{targetofspell=" + mytarget + "}}";
    myroll += "{{casttest=[[ [[" + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!! ]] }}";
    console.log(myroll);
    if (payload != "none") {
        startRoll(myroll, (results) => {
            updatepoolused("sorcery", results.results.sorcerydice.result);
            updatepoolused("spellpool", results.results.spellpool.result);
            updatepoolused("spelldefensedice", results.results.sorcerydice.result + results.results.spellpool.result);
            const delta = parseInt(payload["attacktest"]) - results.results.casttest.result;
            console.log(' delta ' + delta);
            var finalattack = delta;
            if (delta < 1) {
                finalattack = "SPELL BLOCKED";
                myresist = "spellblocked"
                payload["attacktest"] = 0;
            } else {
                payload["attacktest"] = finalattack;
            }
            console.log(' result ' + finalattack);
            finishRoll(results.rollId, {
                resisttype: myresist,
                defensetest: finalattack,
                senddata: rollEscape.escape(payload),
            })
        });
    } else {
        startRoll(myroll, (results) => {
            updatepoolused("spellpool", results.results.spellpool.result);
            updatepoolused("spelldefensedice", results.results.sorcerydice.result);
            finishRoll(results.rollId, {})
        });
    }
});


on('clicked:vehicledriving', (info) => {
    if (!("yes" in lang)) geti18n();
    calcTN = "@{handling} + @{vehicle-driver}stun_pen} +@{vehicle-driver}wound_pen} +@{wp-vehicle} - @{driving-test-interface} +@{driving-test-weather} +@{driving-test-terrain} +@{driving-test-size} +?{" + lang["miscellaneous-modifiers"] + "|0}";
    calcDice = "[[@{vehicle-skill-final} + @{driving-test-autonav} + ?{" + lang["control-pool-dice"] + "?}]]"
    var myroll = "&{template:vehicle}{{type=" + lang["driving"] + "}}{{controlpool=[[?{" + lang["control-pool-dice"] + "?|0}]]}}{{character=@{character_name}}}"
    myroll += "{{targetnumber=[[" + calcTN + "]]}}"
    myroll += "{{roll=[[ " + calcDice + "d6>[[{2,(" + calcTN + ")}kh1]]!! ]] }}"
    console.log(myroll);
    var atts = [];
    startRoll(myroll, (results) => {
        updatepoolused("controlpool", results.results.controlpool.result);
        finishRoll(results.rollId, {})
    });
});

on('clicked:vehiclesensor', (info) => {
    if (!("yes" in lang)) geti18n();
    calcTN = "[[{2,(@{target|" + lang["target"] + "|signature} +@{wp-vehicle} +@{sensor-test-los}  +@{sensor-test-weather} +@{sensor-test-terrain} +@{vehicle-urban} +?{" + lang["miscellaneous-modifiers"] + "|0})}kh1]]";
    calcDice = "[[@{sensors-rating}]]";
    calcDiceECD = "[[@{ecd-rating} * @{ecd-enabled} ]]";
    var myroll = "&{template:vehicle}{{type=Sensor Test}}{{character=@{character_name}}}";
    myroll += "{{targetnumber=" + calcTN + "}}"
    myroll += "{{roll=[[ " + calcDice + "d6>" + calcTN + "!! ]] }}"
    myroll += "{{ecd=[[ " + calcDiceECD + "d6>" + calcTN + "!! ]] }}"
    console.log(myroll);
    var atts = [];
    startRoll(myroll, (results) => {
        finishRoll(results.rollId, {})
    });
});

on('clicked:vehicleposition', (info) => {
    if (!("yes" in lang)) geti18n();
    calcTN = "[[{2,(@{handling} + @{speed-exceeding} +  @{driving-position-terrain} - @{vehicle-actionbonus} + (@{vehicle-autonav} * @{autonav}) + @{vehicle-driver}stun_pen} +@{vehicle-driver}wound_pen} + @{wp-vehicle} )}kh1]]";
    calcDice = "[[@{vehicle-skill-final} + ?{" + lang["control-pool-dice"] + "?}]]"
    var myroll = "&{template:vehicle}{{type=" + lang["position"] + "}}{{controlpool=[[?{" + lang["control-pool-dice"] + "?|0}]]}}{{character=@{character_name}}}"
    myroll += "{{targetnumber=" + calcTN + "}}{{position=[[0]]}}"
    myroll += "{{roll=[[ " + calcDice + "d6>" + calcTN + "!! ]] }}"
    console.log(myroll);
    var atts = [];
    getAttrs(["maneuver-score"], function (myval) {
        startRoll(myroll, (results) => {
            const newscore = parseInt(myval["maneuver-score"]) + results.results.roll.result;
            atts["maneuver-score"] = newscore;
            console.log('new man score: ' + atts["maneuver-score"]);
            updatepoolused("controlpool", results.results.controlpool.result);
            finishRoll(results.rollId, {
                position: newscore,
            })
            setAttrs(atts);
        });
    });
});
on('clicked:vehiclecrash', (info) => {
    if (!("yes" in lang)) geti18n();
    calcTN = "[[{2,(@{handling} + @{driving-crash-terrain} + @{vehicle-driver}stun_pen} +@{vehicle-driver}wound_pen} +@{wp-vehicle} )}kh1]]"
    calcDice = "[[@{vehicle-skill-final} + ?{" + lang["control-pool-dice"] + "?} + (@{vehicle-autonav} * @{autonav})]]"
    var myroll = "&{template:vehicle}{{type=" + lang["crash"] + "}}{{controlpool=[[?{" + lang["control-pool-dice"] + "?|0}]]}}{{character=@{character_name}}}"
    myroll += "{{targetnumber=" + calcTN + "}}{{speed=[[@{speed-current}]]}}{{reaction=[[@{vehicle-driver}reaction|max}]]}}"
    myroll += "{{roll=[[ " + calcDice + "d6>" + calcTN + "!! ]] }}"
    console.log(myroll);
    var atts = [];
    startRoll(myroll, (results) => {
        const speed = results.results.speed.result
        const reaction = results.results.reaction.result
        console.log('speed: ' + speed);
        console.log('reaction: ' + reaction);
        var speedmod = 0;
        if (speed <= (reaction * 20)) speedmod = 0;
        else if (speed <= (reaction * 30)) speedmod = 1;
        else if (speed <= (reaction * 40)) speedmod = 2;
        else speedmod = 4;
        console.log('final: ' + speedmod);
        var finaltn = results.results.targetnumber.result + speedmod;
        if (finaltn < 2) finaltn = 2;
        const finaldice = (results.results.roll.dice.filter(mydice => mydice >= finaltn)).length;
        updatepoolused("controlpool", results.results.controlpool.result);
        finishRoll(results.rollId,
            {
                targetnumber: finaltn,
                roll: finaldice,
            });
    });
});
on('clicked:vehicleaction', (info) => {
    if (!("yes" in lang)) geti18n();
    var myaction = info["htmlAttributes"]["id"];
    var myterrain = "driving-ab-terrain";
    var myaction = myaction.charAt(0).toUpperCase() + myaction.slice(1);
    var autonav = "@{autonav}";
    var vcr = "@{vehicle-actionbonus}";
    var miscmods = "?{" + lang["how-many-additional-enemy-vehicles"] + "?";
    var speeding = 1;
    var vmbelow10 = 4;
    var vmbelow00 = 2;
    var baseTN = "@{handling}";
    var calcDice = "[[@{vehicle-skill-final} + ?{" + lang["control-pool-dice"] + "?}]]";
    if (myaction == "Ram") {
        myterrain = "driving-ram-terrain";
        autonav = "(@{autonav} + 2)";
        enemies = 0;
    }
    else if (myaction == "Hide") {
        myterrain = "driving-hide-terrain";
        vmbelow10 = 6;
        vmbelow00 = 3;
        speeding = 2;
    }
    else if (myaction == "Relocate") {
        myterrain = "driving-relocate-terrain";
        miscmods = "?{" + lang["successes-from-hiding-test"] + "?";
        speeding = 2;
        vcr = 0;
        autonav = "( @{autonav} * -1)";
        calcDice = "[[@{sensors-rating} + ?{" + lang["control-pool-dice"] + "?}]]";
        baseTN = "@{target|" + lang["target"] + "|signature}";
    }
    var vmsmod = 0;
    var calcTN = "[[{2,(" + baseTN + " + " + miscmods + "} + ( @{speed-exceeding} * " + speeding + ") +  @{" + myterrain + "} - " + vcr + " + (@{vehicle-autonav} * "
    calcTN += autonav + ") + @{vehicle-driver}stun_pen} +@{vehicle-driver}wound_pen} +@{wp-vehicle} )}kh1]]"
    var myroll = "&{template:vehicle} {{type=" + lang["accelerate"] + "}}{{controlpool=[[?{" + lang["control-pool-dice"] + "?|0}]]}} {{character=@{character_name}}} {{miscmods=" + miscmods + "|0}}}"
    myroll += "{{rolldice=" + calcDice + "}}"
    myroll += "{{target=vs. @{target|" + lang["target"] + "|token_name}}}{{type=" + myaction + "}}"
    myroll += "{{targetnumber=" + calcTN + "}}"
    myroll += "{{delta=[[@{maneuver-score} - @{target|" + lang["target"] + "|maneuver-score} ]]}}"
    myroll += "{{roll=[[ " + calcDice + "d6>" + calcTN + "!! ]] }}"
    console.log(myroll);
    startRoll(myroll, (results) => {
        console.log(results);
        console.log(results.results.roll.dice);
        if (results.results.delta.result >= 11) vmsmod = -4;
        else if (results.results.delta.result > 1) vmsmod = -2;
        else if (results.results.delta.result == 0) vmsmod = 0;
        else if (results.results.delta.result >= -10) vmsmod = vmbelow00;
        else if (results.results.delta.result < -10) vmsmod = vmbelow10;
        else vmsmod = 0;
        console.log(vmsmod);
        var finaltn = results.results.targetnumber.result + vmsmod;
        if (finaltn < 2) finaltn = 2;
        console.log(results.results.roll.dice);
        const finaldice = (results.results.roll.dice.filter(mydice => mydice >= finaltn)).length;
        updatepoolused("controlpool", results.results.controlpool.result);
        finishRoll(results.rollId,
            {
                targetnumber: finaltn,
                roll: finaldice,
            });
    });
});


const rollattribute = function (attrib) {
    if (!("yes" in lang)) geti18n();
    console.log(attrib);
    var mymode = "";
    var mybase = attrib.toUpperCase();
    if (attrib.includes("max")) {
        mymode = "Augmented";
        mybase = attrib.split("|")[0].toUpperCase();
    }
    console.log(attrib);
    const attroll = "&{template:attribute} {{character=@{character_name}}}{{Attribute=" + mybase + " " + mymode + "}} {{targetnumber=[[?{" + lang["target-number"] + "?|4}]]}}{{combatpool= [[?{" + lang["combat-pool-dice"] + "?|0}]]}}{{result= [[ [[@{" + attrib + "} + ?{" + lang["combat-pool-dice"] + "?}]]d6>[[{2,(?{" + lang["target-number"] + "?} + @{stun_pen} + @{wound_pen})}kh1]]!! ]] }}"
    startRoll(attroll, (results) => {
        console.log(results.results.combatpool.result)
        finishRoll(results.rollId);
    });
};

attributes.forEach(myatt => {
    var myevent = "attrib-" + myatt;
    var myeventmax = "attrib-" + myatt + "-max";
    var myattmax = myatt + "|max";
    on(`clicked:${myevent}`, (info) => {
        console.log('running ' + myatt);
        rollattribute(myatt);
    });

    on(`clicked:${myeventmax}`, (info) => {
        console.log('running ' + myattmax);
        rollattribute(myattmax);
    });
});


on('clicked:attrib', (info) => {
    console.log(info);
    var attrib = info["htmlAttributes"]["id"];
    rollattribute(attrib);
});

on('clicked:ewarfare', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    var mytype = info["htmlAttributes"]["id"]
    var mytitle = info["htmlAttributes"]["title"]
    const mymap = {
        sonar: { dice: "sonar-rating", target: "signature", notes: "" },
        ecmjamming: { dice: "ecm-fluxmod", target: "sensors-rating", notes: "Roll Oposition test for @{target|" + lang["target"] + "|token_name}" },
        ecmopposition: { dice: "sensors-fluxmod", target: "ecm-rating", notes: "Compare net successes with @{target|" + lang["target"] + "|token_name}" },
        eccmcounter: { dice: "eccm-fluxmod", target: "ecm-rating", notes: "Roll Oposition test for @{target|" + lang["target"] + "|token_name}" },
        eccmopposition: { dice: "ecm-fluxmod", target: "eccm-rating", notes: "Compare net successes with @{target|" + lang["target"] + "|token_name}" }
    };
    var calcDice = "@{" + mymap[mytype]["dice"] + "}";
    calcTN = "@{target|" + lang["target"] + "|" + mymap[mytype]["target"] + "}";
    if (mytype == "sonar") calcTN += " +@{wp-vehicle} +@{sensor-test-los}  +@{sensor-test-weather} +@{sensor-test-terrain} +@{vehicle-urban}";
    calcTN += "+?{" + lang["miscellaneous-modifiers"] + "|0}";
    myroll = "&{template:vehicle}{{type=" + mytitle + "}}{{character=@{character_name}}}{{target=@{target|" + lang["target"] + "|token_name}}}";
    myroll += "{{rolldice=[[" + calcDice + "]]}}{{targetnumber=[[" + calcTN + "]]}}";
    myroll += "{{roll=[[ [[ " + calcDice + "]]d6>[[{2,(" + calcTN + ")}kh1]]!!]]}}";
    myroll += "{{notes=" + mymap[mytype]["notes"] + "}}";
    console.log(myroll);
    startRoll(myroll, (results) => {
        finishRoll(results.rollId);
    });

});

on('clicked:maneuever', (info) => {
    if (!("yes" in lang)) geti18n();
    var mytype = info["htmlAttributes"]["id"]
    if (mytype == "generate") {
        var manroll = "&{template:vehicle} {{type=" + lang["maneuver-score"] + "}} {{character=@{character_name}}}{{controlpool=[[?{" + lang["control-pool-dice"] + "?|0}]]}} {{roll=[[ [[@{vehicle-skill-final} + ?{" + lang["control-pool-dice"] + "?}]]d6KH1 + @{terrain-points} + @{speed-points} + @{vehicle-points}  ]] }}"
        startRoll(manroll, (results) => {
            updatepoolused("controlpool", results.results.controlpool.result);
            console.log('results: ' + results.results.roll.result)
            finishRoll(results.rollId);
            setAttrs({ "maneuver-score": results.results.roll.result });
        });
    } else {
        var manroll = "&{template:vehicle} {{type=" + lang["compare"] + " " + lang["maneuver-score"] + "}} {{character=@{character_name}}} {{target=@{target|" + lang["target"] + "|character_name}}} {{charscore=[[@{maneuver-score}]]}} {{targetscore=[[@{target|" + lang["target"] + "|maneuver-score}]]}} {{roll=[[@{maneuver-score} - @{target|" + lang["target"] + "|maneuver-score} ]]}} "
        startRoll(manroll, (results) => {
            finishRoll(results.rollId);
        });
    }

});
on('clicked:repeating_rangedweapons:reload', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log("reloading");
    var setatts = {};
    var atts = [];
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    var acttype = "complex";
    var myroll;
    atts.push(myrepeat.concat("ammo"));
    atts.push(myrepeat.concat("reloadmethod"));
    atts.push(myrepeat.concat("ammoremain"));
    atts.push(myrepeat.concat("name"));
    atts.push(myrepeat.concat("reloads"));
    atts.push("quickness_max");
    console.log(atts);
    getAttrs(atts, function (myval) {
        console.log('myval');
        console.log(myval);
        const max = parseInt(myval[myrepeat.concat("ammo")]);
        const myweapon = myval[myrepeat.concat("name")];
        const myreload = myval[myrepeat.concat("reloadmethod")];
        const remain = parseInt(myval[myrepeat.concat("ammoremain")]);
        const maxload = max - remain
        const quick = parseInt(myval["quickness_max"]);
        var myreloads = myval[myrepeat.concat("reloads")];
        var rounds = max;
        var reloadaction = "Complex";
        var ammoused = 1;
        var reloadtxt = rounds + " rounds with a " + myreload;
        if (myreload == "clip") acttype = "simple";
        if ((myreload == "cylinder") || (myreload == "magazine") || (myreload == "break")) {
            if (quick > maxload) {
                console.log('loading max');
                ammoused = maxload;
            } else {
                console.log('too many');
                ammoused = quick;
            }
            if (ammoused > myreloads) ammoused = myreloads;
            rounds = ammoused + remain;
            reloadtxt = ammoused + " rounds into " + myreload;
        }
        const reloadsleft = myreloads - ammoused;
        if (myreloads < 1) {
            console.log('out of ammo');
            ammoused = 0;
            myroll = "/w gm &{template:info}{{character=@{character_name}}}{{action=Reload: " + myweapon + "}}{{type=" + lang[acttype] + "}}{{info1=" + lang["out-of-ammo"] + " }}";
        } else {
            console.log('ammo okay');
            myroll = "/w gm &{template:info}{{character=@{character_name}}}{{action=Reload: " + myweapon + "}}{{type=" + lang[acttype] + "}}{{info1=Loaded " + reloadtxt + "}}";
            if ((myreload == "cylinder") || (myreload == "magazine") || (myreload == "break")) {
                myroll += "{{info2=" + reloadsleft + " Spare Rounds Remaining}}";
            } else {
                myroll += "{{info2=" + reloadsleft + " Spare " + myreload + "s Remaining}}";
            }
        }
        console.log(myroll);
        setatts[myrepeat.concat("ammoremain")] = rounds;
        setatts[myrepeat.concat("reloads")] = reloadsleft;
        setAttrs(setatts);
        startRoll(myroll, (results) => {
            finishRoll(results.rollId);
        });
    });
});
on('clicked:repeating_rangedweapons:shownotes', (info) => {
    if (!("yes" in lang)) geti18n();
    var source = info['sourceAttribute'];
    console.log('attribute is ' + source);
    getAttrs([source], function (myval) {
        console.log('attribute value is ' + myval[source]);
        if (myval[source] == "show") {
            setAttrs({ [source]: "hide" });
        } else {
            setAttrs({ [source]: "show" });
        }
    });
});
on('clicked:repeating_rangedweapons:showmore clicked:repeating_explosives:showmore', (info) => {
    if (!("yes" in lang)) geti18n();
    var source = info['sourceAttribute'];
    console.log('attribute is ' + source);
    getAttrs([source], function (myval) {
        console.log('attribute value is ' + myval[source]);
        if (myval[source] == "show") {
            setAttrs({ [source]: "hide" });
        } else {
            setAttrs({ [source]: "show" });
        }
    });
});
on('clicked:repeating_rangedweapons:rangedattack', (info) => {
    if (!("yes" in lang)) geti18n();
    var setatts = {};
    var atts = ["sensors-rating", "combatpool-used", "controlpool-used", "gyro-on", "armor-quickness-pen", "rounds-phase", "character_name", "move"];
    var recoilx = 1;
    var rounds = 1;
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    var mymode = info["htmlAttributes"]["id"]
    const weaponattrs = ["damage", "power", "name", "skill", "wfamily", "specialized", "targeting", "recoilcomp", "gyro", "ammotype", "ammoremain", "sa", "ss", "bf", "fa", "tnmods", "firemode"];
    weaponattrs.forEach(myatt => {
        atts.push(myrepeat.concat(myatt));
    });
    getAttrs(atts, function (myval) {
        if ((myval[myrepeat.concat("wfamily")] == "Heavy") && ((mymode != "vehiclesensor") || (mymode != "vehicleranged"))) recoilx = 2;
        var vehiclesensors = 0, armorpen = 0, armorpenroll = "", pool, mypool, poolname, dmgmin = 0, dmgmax = 4, finalrounds;
        if (myval["sensors-rating"]) vehiclesensors = myval["sensors-rating"];
        const move = parseInt(myval["move"]);
        const tnmods = myval[myrepeat.concat("tnmods")];
        const myname = myval["character_name"];
        const myweapon = myval[myrepeat.concat("name")];
        const combatused = parseInt(myval["combatpool-used"]);
        const controlused = parseInt(myval["controlpool-used"]);
        var wdmg = myval[myrepeat.concat("damage")];
        const ammoremain = myval[myrepeat.concat("ammoremain")];
        const ammotype = myval[myrepeat.concat("ammotype")].toLowerCase();
        const targetaim = parseInt(myval[myrepeat.concat("targeting")]);
        const myskill = myval[myrepeat.concat("skill")];
        var gyro = myval[myrepeat.concat("gyro")];
        if (myval["gyro-on"] == 0) gyro = 0;
        const firemode = myval[myrepeat.concat("firemode")];
        console.log('original wdmg is ' + damagetable[wdmg]);
        console.log('ammo modifier for wdmg is ' + ammomods[ammotype]["dmg"]);
        var dmgnumber = (ammotype in ammomods) ? damagetable[wdmg] + ammomods[ammotype]["dmg"] : damagetable[wdmg];
        console.log('final wdmg is ' + dmgnumber)
        if (dmgnumber >= 10) dmgmax = 13, dmgmin = 9;
        var wpower = myval[myrepeat.concat("power")];
        var ammoleft = myval[myrepeat.concat("ammoremain")];
        const prevrounds = myval["rounds-phase"];
        var recoilcomp = myval[myrepeat.concat("recoilcomp")];
        if ((firemode == "bf") && (ammoleft <= 3)) rounds = "?{" + lang["rounds"] + "|" + ammoleft + "}";
        else if ((firemode == "bf") && (ammoleft > 3)) rounds = "?{" + lang["rounds"] + "|3}";
        else if ((firemode == "fa") && (ammoleft <= 10)) rounds = "?{" + lang["rounds"] + "|" + ammoleft + "}";
        else if ((firemode == "fa") && (ammoleft > 10)) rounds = "?{" + lang["rounds"] + "|" + (10 - prevrounds) + "}";
        var recoil = "";
        if ((firemode == "bf") || (firemode == "fa")) {
            recoil = "{0,(" + recoilx + " * (( ?{" + lang["rounds-already-fired-in-combat-phase"] + "|" + prevrounds + "} +  ?{" + lang["rounds"] + "} ) - (" + recoilcomp + " + " + gyro + ")))}kh1";
        } else if (firemode == "sa") {
            recoil = "{0,(" + recoilx + " * ( ?{" + lang["rounds-already-fired-in-combat-phase"] + "|" + prevrounds + "}  - (" + recoilcomp + " + " + gyro + ")))}kh1";
        } else {
            recoil = 0;
        }
        if (ammoleft <= 0) {
            roll = "&{template:info}{{character=@{character_name}}}{{action=" + lang["attack"] + ": " + myweapon + "}}{{type=" + lang["simple"] + "}}{{info1=" + lang["out-of-ammo"] + " }}";
            startRoll(roll, (results) => {
                finishRoll(results.rollId, {});
            });
        } else {
            specialized = myval[myrepeat.concat("specialized")] || 0
            if (quicknesslinked.includes(myskill)) {
                armorpen = myval["armor-quickness-pen"];
                armorpenroll = "{{armorpen=@{armor-quickness-pen}}}";
            }
            var calcTN = "[[ "
            if (mymode == "vehiclesensor") {
                calcTN += "@{sensor-gunnery-tn}  + @{vehicle-driver}wp-char} + @{wp-vehicle}"
                poolname = "Control";
                pool = "controlpool";
                mypool = "control"

            } else if (mymode == "vehicleranged") {
                const gyrobonus = ((move - myval[myrepeat.concat("gyro")]) < 0) ? move : myval[myrepeat.concat("gyro")];
                console.log('vehicle ranged')
                console.log('move ' + move + ' gyro ' + myval[myrepeat.concat("gyro")] + ' gyrobonus ' + gyrobonus)
                calcTN += " ?{" + lang["range"] + "} + @{rangedTN} + @{target|" + lang["target"] + "|targetMove} + " + targetaim + " + @{wp-vehicle} - " + gyrobonus;
                poolname = "Control";
                pool = "controlpool";
                mypool = "control"
            } else {
                calcTN += " ?{" + lang["range"] + "} + @{rangedTN} + @{target|" + lang["target"] + "|targetMove} + " + targetaim + " + " + armorpen;
                poolname = "Combat";
                pool = "combatpool";
                mypool = "combat"
            }

            calcTN += " + ?{" + lang["miscellaneous-modifiers"] + "|" + tnmods + "} + " + recoil;
            calcTN += " ]]"

            var calcDice = "[[ " + myskill + " + " + specialized + " + ?{" + lang[mypool + "-pool-dice"] + "|0}"
            if (mymode == "vehiclesensor") calcDice += " + " + Math.floor(vehiclesensors / 2)
            calcDice += " ]]"


            var roll = "&{template:attack}{{myname=@{character_name}}}{{target=@{target|" + lang["target"] + "|token_name}}}";
            roll += "{{rounds=[[" + rounds + "]]}}{{range=[[?{" + lang["range"] + "|" + lang["short"] + ",4|" + lang["medium"] + ",5|" + lang["long"] + ",6|" + lang["extreme"] + ",9}]]}}";

            roll += "{{targetnumber=" + calcTN + " }}{{rolldice=" + calcDice + "}}";
            roll += "{{weaponname=" + myweapon + "}}{{weapondamage=[[" + dmgnumber + "]]}}{{weaponpower=[[" + wpower + "]]}}";
            roll += "{{" + pool + "=[[?{" + lang[mypool + "-pool-dice"] + "}]]}}{{weaponname=" + myweapon + "}}{{ammotype=" + ammotype + "}}";
            roll += "{{attacktest=[[ " + calcDice + "d6>[[ {2, " + calcTN + "}kh1 ]]!! ]] }}";
            if (mymode == "rangedattack") {
                roll += "{{dodge=[Dodge](~@{target|" + lang["target"] + "|token_name}|dodge)}}";
                roll += "{{senddata=[[0]]}}"
            }
            roll += armorpenroll;
            roll += "{{rangedmods=@{rangedTN}}}";
            roll += "{{movemods=[[{0,( @{move} - " + gyro + ") }kh1]]}}";
            roll += "{{targetmods=" + targetaim + "}}";
            if (ammomods[ammotype]["amsg"] != null) roll += "{{info=" + ammomods[ammotype]["amsg"] + "}}";
            console.log(roll);
            startRoll(roll, (results) => {
                var poolresults;
                var finaldamage;
                setatts["rounds-phase"] = results.results.rounds.result + prevrounds;
                const myrounds = results.results.rounds.result;
                if (mymode == "rangedattack") poolresults = results.results.combatpool.result + combatused;
                else poolresults = results.results.controlpool.result + controlused;
                finalrounds = myrounds;
                if (myrounds > ammoleft) finalrounds = parseInt(ammoleft);
                if (finalrounds > 1) {
                    mythird = Math.floor(finalrounds / 3);
                    wpower = (ammotype == "tracer") ? parseInt(wpower) + (finalrounds - mythird) : parseInt(wpower) + finalrounds;
                    dmgnumber = dmgnumber + mythird;
                }
                wpower = parseInt(wpower) + eval(ammomods[ammotype]["power"]);
                /* dmgnumber=dmgnumber + ammomods[ammotype]["dmg"]; */
                if (dmgnumber > dmgmax) dmgnumber = dmgmax;
                if (dmgnumber < dmgmin) dmgnumber = dmgmin;
                console.log('dmgnumber' + dmgnumber);
                console.log('finaldamage' + finaldamage);
                finaldamage = damagetable[dmgnumber];
                let payload = {
                    attacker: myname,
                    weapon: myweapon,
                    armortype: "ballistic",
                    range: results.results.range.result,
                    wdmg: finaldamage,
                    rounds: results.results.rounds.result,
                    dodge: 0,
                    attacktest: results.results.attacktest.result,
                    power: wpower,
                    ammotype: ammotype.toLowerCase(),
                }
                finishRoll(results.rollId,
                    {
                        weapondamage: finaldamage,
                        weaponpower: wpower,
                        rounds: finalrounds,
                        senddata: rollEscape.escape(payload),

                    })
                setatts[myrepeat.concat("ammoremain")] = ammoremain - finalrounds;
                setatts[pool.concat("-used")] = poolresults;
                setAttrs(setatts);
            });
        }
    });
});

const meleecombat = function (mymode, payload) {
    if (!("yes" in lang)) geti18n();
    console.log(payload);
    var plane = (payload["plane"]) ? payload["plane"] : "physical";
    const askreach = (payload["reachmode"]) ? payload["reachmode"] : 0;
    var atts = [];
    console.log(mymode);
    var myfocus = 0;
    var focus = "";
    var force = "";
    var mydamage, myskill, myweapon, mypower, defroll;
    var pool = "combatpool";
    var defaultmsg = " ";
    var defaultpen = 0;
    var myspec = 0;
    const repeatatts = ["damage", "power", "name", "skill", "reach", "specialized", "notes", "tnmods"];
    var meleeattrs = ["sheettype", "character_name", "strength_max", "martialarts", "attackdamage", "attackpower", "reaction_max", "charisma_max", "unarmed", "unarmed-specialized", "cyberimplant", "weaponfocus-equipped", "weaponfocus-damage", "gyro-on", "armor-quickness-pen", "unarmed-miscmods", "weaponfocus-specialized", "metatype", "meleeselected"];
    if (mymode.includes("repeating")) {
        console.log('using repeating');
        repeatatts.forEach(myatt => {
            meleeattrs.push(mymode.concat(myatt));
        });
    };
    console.log('ask reach ' + askreach);
    getAttrs(meleeattrs, function (myval) {
        const strmax = parseInt(myval["strength_max"]);
        const attackdamage = myval["attackdamage"];
        const attackpower = parseInt(myval["attackpower"]);
        const myname = myval["character_name"];
        const sheettype = myval["sheettype"];
        var mynotes = "";
        var myspec = 0;
        var mytnmod = 0;
        var myreach = "@{meleereach|max}";
        var gyropenroll = "";
        var gyropen = 0;
        if ((myval["gyro-on"] == 1) && (mymode != "astralattack")) {
            gyropen = 4;
            gyropenroll = "{{gyropen=" + gyropen + "}}";
        } if ((mymode == "astralattack") || (plane == "astral")) {
            ;
            pool = "astralpool";
            plane = "astral";
            myweapon = "Astral Attack";
            var myskill = "@{astralcombat}";
            var mydamage = "M"
            if (myval["weaponfocus-equipped"] == "on") {
                myskill = "( " + myskill + " +  @{weaponfocus-force} )"
                myspec = myval["weaponfocus-specialized"];
                mydamage = myval["weaponfocus-damage"];
            }
            mypower = parseInt(myval["charisma_max"]);
            focus = "{{weaponfocus=@{weaponfocus-name}}}"
            force = "{{focusforce=@{weaponfocus-force}}}"
        }
        else if (mymode.includes("repeating")) {
            myrepeat = mymode;
            console.log('repeating melee');
            mynotes = myval[myrepeat.concat("mynotes")];
            myweapon = myval[myrepeat.concat("name")];
            mydamage = myval[myrepeat.concat("damage")];
            mypower = parseInt(myval[myrepeat.concat("power")]);
            myskill = myval[myrepeat.concat("skill")];
            myspec = myval[myrepeat.concat("specialized")];
            mytnmod = myval[myrepeat.concat("tnmods")];
            if (myval["metatype"] == "Troll") myreach = myval[myrepeat.concat("reach")] + 1;
            else myreach = myval[myrepeat.concat("reach")];
        } else if ((sheettype == "Critter") || (sheettype == "Spirit")) {
            myskill = myval["reaction_max"];
            mydamage = myval["attackdamage"];
            mypower = parseInt(myval["attackpower"]);
            myweapon = sheettype + " Attack";
        } else {
            console.log('unarmed melee');
            mydamage = attackdamage;
            myskill = myval["unarmed"];
            myspec = myval["unarmed-specialized"];
            mytnmod = myval["unarmed-miscmods"];
            myweapon = myval["martialarts"];
            mypower = strmax;
            if (myval["unarmed"] == 0) {
                console.log('unarmed is 0');
                if (myval["cyberimplant"] == 0) {
                    myskill = strmax;
                    defaultpen = 4;
                    pool = "false";
                    var defaultmsg = "{{default=Skill Defaulted to Strength Attribute with +" + defaultpen + " to hit}}";
                } else {
                    myskill = myval["cyberimplant"];
                    defaultpen = 2;
                    var defaultmsg = "{{default=Skill Defaulted to Cyber Implant skill with +" + defaultpen + " to hit}}";
                }
            }
        }
        var calcTN = "4 + @{meleeTN} + " + mytnmod + " + " + defaultpen + " + " + gyropen;
        if (askreach == 0) calcTN += " + ( ( @{target|" + lang["target"] + "|meleereach|max} - " + myreach + " ) * ?{" + lang["use-reach-modifier"] + "?} )";
        var calcDice = myskill + " + " + myspec;
        var myroll = "&{template:melee}{{myname=" + myname + "}}{{target=@{target|" + lang["target"] + "|token_name}}}{{weapondamage=[[0]]}}{{finalwinner=[[0]]}}{{weaponpower=[[" + mypower + "]]}}"
        if (quicknesslinked.includes(myskill)) {
            console.log('quick pen');
            armorpen = myval["armor-quickness-pen"];
            console.log(armorpen);
            myroll += "{{armorpen=@{armor-quickness-pen}}}";
        }
        console.log('pool name is ' + pool);
        if (pool == "combatpool") {
            calcDice += " + ?{" + lang["combat-pool-dice"] + "}"
            myroll += "{{pooldice=[[?{" + lang["combat-pool-dice"] + "|0}]]}}"
            myroll += "{{pooltype=" + lang["combat"] + "}}";
        } else if (pool == "astralpool") {
            calcDice += " + ?{" + lang["astral-pool-dice"] + "}"
            myroll += "{{pooldice=[[?{" + lang["astral-pool-dice"] + "|0}]]}}"
            myroll += "{{pooltype=" + lang["astral"] + "}}";
        } else {
            myroll += "{{pooldice=[[0]]}}"
        }
        myroll += "{{senddata=[[0]]}}";
        myroll += "{{charreach=[[" + myreach + "]]}}{{targetreach=[[@{target|" + lang["target"] + "|meleereach|max}]]}}"
        myroll += "{{weaponname=" + myweapon + "}}"
        myroll += (askreach == 0) ? "{{reachmod=[[?{" + lang["use-reach-modifier"] + "?|" + lang["yes"] + ",1|" + lang["no"] + ",0}]]}}{{reachbonus=[[(@{target|" + lang["target"] + "|meleereach|max} - @{meleereach|max} ) * ?{" + lang["use-reach-modifier"] + "?}]]}}" : "{{reachmod=[[0]]}}";
        myroll += "{{rolldice=[[" + calcDice + "]]}}{{targetnumber=[[" + calcTN + "]]}}"
        if (payload == "none") {
            myroll += "{{attacktest=[[ [[" + calcDice + "]]d6>[[ {2,[[ " + calcTN + "]]}kh1]]!!  ]] }}"
            myroll += "{{attackmode=Attack}}{{defend=yes}}";
            payload = {
                dodge: 0,
                weapon: myweapon,
                armortype: "impact",
                attacker: myname,
                strength: strmax,
                power: mypower,
                wdmg: mydamage,
                plane: plane,
                maxd: 4 - damagetable[mydamage]
            };
        } else {
            myroll += "{{attacknumber=[[" + payload["attacktest"] + "]]}}{{win=[[1]]}}{{attacker=" + payload["attacker"] + "}}{{defender=" + myname + "}}";
            myroll += "{{defensetest=[[ [[" + calcDice + "]]d6>[[ {2,[[ " + calcTN + "]]}kh1]]!!  ]] }}";
            myroll += (payload["defmode"] == "regular") ? "{{attackmode=Defend}}" : "{{attackmode=Full Defense}}{{dodge=yes}}";
            payload["dmaxd"] = 4 - damagetable[mydamage];
        }
        myroll += defaultmsg;
        myroll += gyropenroll;
        console.log('wdmg ' + mydamage);
        console.log(myroll);
        startRoll(myroll, (results) => {
            var delta, finalpower, finaldmg, mywinner, mylooser;
            var reachmodtxt = "Reach Bonus Applied";
            if (results.results.reachmod.result == 0) reachmodtxt = "Reach Bonus Not Applied";
            payload["reachmode"] = results.results.reachmod.result;
            if (payload["attacktest"]) {
                console.log('defense run');
                defroll = results.results.defensetest.result;
                payload["ammotype"] = "melee";
                payload["range"] = "melee";
                payload["meleetn"] = results.results.targetnumber.result;
                if (payload["attacktest"] >= defroll) {
                    mywinner = payload["attacker"];
                    mylooser = myname;
                    delta = Math.floor((payload["attacktest"] - defroll) / 2);
                    payload["wdmg"] = finaldmg = damagetable[(delta >= payload["maxd"]) ? 4 : damagetable[payload["wdmg"]] + delta];
                    payload["power"] = finalpower = (delta >= payload["maxd"]) ? payload["power"] + (delta - payload["maxd"]) : payload["power"];
                    console.log('attacker wins');
                } else {
                    console.log('defender wins');
                    mywinner = myname;
                    mylooser = payload["attacker"];
                    delta = Math.floor((defroll - payload["attacktest"]) / 2);
                    payload["weapon"] = myweapon;
                    if (payload["defmode"] == "regular") {
                        payload["wdmg"] = finaldmg = damagetable[(delta >= payload["dmaxd"]) ? 4 : damagetable[mydamage] + delta];
                        payload["power"] = finalpower = (delta >= payload["dmaxd"]) ? mypower + (delta - payload["dmaxd"]) : mypower;
                        payload["strength"] = strmax;
                    } else {
                        console.log('full defense mode');
                        payload["wdmg"] = "Attack";
                        payload["power"] = "Parried";
                    }
                }
                payload["attacktest"] = 0;
            } else {
                console.log('attack run');
                payload["attacktest"] = results.results.attacktest.result;
            }
            console.log(payload);
            if (defroll != null) {
                console.log('finish dmg ' + finaldmg + ' power ' + finalpower + ' winner: ' + typeof mywinner + ' looser: ' + mylooser);
                let testmsg = 'brad';
                finishRoll(results.rollId, {
                    finalwinner: mylooser,
                    reachmod: reachmodtxt,
                    weapondamage: mydamage,
                    weapondamage: finaldmg,
                    weaponpower: finalpower,
                    senddata: rollEscape.escape(payload),
                });
            } else {
                finishRoll(results.rollId, {
                    reachmod: reachmodtxt,
                    weapondamage: mydamage,
                    senddata: rollEscape.escape(payload),
                });

            }
            if (pool != "none") updatepoolused(pool, results.results.pooldice.result);

        });
    });
};
on('clicked:meleedefend', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    payload = rollEscape.unescape(info["originalRollId"]);
    getAttrs(["meleeselected"], function (myval) {
        payload["defmode"] = "regular";
        const mselect = myval["meleeselected"];
        mymode = (mselect == "unarmed-equipped") ? "unarmedattack" : mselect.slice(0, -12);
        meleecombat(mymode, payload);
    });
});
on('clicked:meleedefendfull', (info) => {
    if (!("yes" in lang)) geti18n();
    console.log(info);
    payload = rollEscape.unescape(info["originalRollId"]);
    getAttrs(["meleeselected"], function (myval) {
        payload["defmode"] = "full";
        const mselect = myval["meleeselected"];
        mymode = (mselect == "unarmed-equipped") ? "unarmedattack" : mselect.slice(0, -12);
        meleecombat(mymode, payload);
    });
});

on('clicked:repeating_meleeweapons:attack', (info) => {
    if (!("yes" in lang)) geti18n();
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    payload = "none";
    meleecombat(myrepeat, payload);
});
on('clicked:melee', (info) => {
    payload = "none";
    const mymode = info["htmlAttributes"]["id"];
    meleecombat(mymode, payload);
});

on('clicked:repeating_explosives:rangedattack', (info) => {
    if (!("yes" in lang)) geti18n();
    var setatts = {};
    var scatter = "";
    var atts = ["combatpool-used", "controlpool-used", "character_name"];
    var rounds = 1;
    var expint = 0;
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    var mymode = info["htmlAttributes"]["id"]
    const scatimg = "https://raw.githubusercontent.com/bahornbeck/img/master/images/scatterdiagram";
    const weaponattrs = ["damage", "power", "name", "exptype", "ammoremain", "skill", "wfamily", "specialized", "targeting", "recoilcomp", "gyro", "ammo", "scatter", "blast", "scatterredux", "missleint", "tnmods"];
    weaponattrs.forEach(myatt => {
        atts.push(myrepeat.concat(myatt));
    });
    getAttrs(atts, function (myval) {
        const combatused = parseInt(myval["combatpool-used"]);
        const controlused = parseInt(myval["controlpool-used"]);
        const myname = myval["character_name"];
        const myweapon = myval[myrepeat.concat("name")];
        const wdmg = myval[myrepeat.concat("damage")];
        const [grenadeshape, grenadetype] = myval[myrepeat.concat("exptype")].split(":");
        const wpower = myval[myrepeat.concat("power")];
        const ammoremain = myval[myrepeat.concat("ammoremain")];
        const gyro = myval[myrepeat.concat("gyro")];
        const targetaim = parseInt(myval[myrepeat.concat("targeting")]);
        const tnmods = myval[myrepeat.concat("tnmods")];
        var dmgnumber = damagetable[wdmg];
        var range = "{{range=[[?{" + lang["range"] + "|" + lang["short"] + ",4|" + lang["medium"] + ",5|" + lang["long"] + ",6|" + lang["extreme"] + ",9}]]}}";
        var missleintel = 0;
        var calcTN;
        if (mymode == "sensorexp") {
            range = "";
            missleintel = myval[myrepeat.concat("missleint")] || 0;
            expint = "{{expint=[[" + missleintel + "]]}}"
            calcTN = "[[ @{target|" + lang["target"] + "|signature} + ?{" + lang["urban-setting"] + "?|" + lang["yes"] + ",2|" + lang["no"] + ",0} + @{wp-char}";
            poolname = "Combat";
            pool = "combatpool";
            mypool = "combat";
        } else if (mymode == "vehicle-sensorexp") {
            range = "";
            missleintel = myval[myrepeat.concat("missleint")] || 0;
            expint = "{{expint=[[" + missleintel + "]]}}"
            calcTN = "[[ @{target|" + lang["target"] + "|signature} + ?{" + lang["urban-setting"] + "?|" + lang["yes"] + ",2|" + lang["no"] + ",0} + @{wp-vehicle} + @{gunnery-test-los}";
            poolname = "Control";
            pool = "controlpool";
            mypool = "control";
        } else if (mymode == "vehicle-explosive") {
            calcTN = "[[ ?{" + lang["range"] + "} + @{rangedTN} + @{target|" + lang["target"] + "|targetMove} + {0,( @{move} - " + gyro + ") }kh1 + " + targetaim + " + @{wp-vehicle}";
            poolname = "Control";
            pool = "controlpool";
            mypool = "control";
        } else {
            poolname = "Combat";
            pool = "combatpool";
            mypool = "combat";
            calcTN = "[[ ?{" + lang["range"] + "} + @{rangedTN} + @{target|" + lang["target"] + "|targetMove} + {0,( @{move} - " + gyro + ") }kh1 + " + targetaim + " + @{wp-char}";
        }
        let direction = getRandomInt(1, 7);
        const myskill = myval[myrepeat.concat("skill")];
        const myscat = myval[myrepeat.concat("scatter")];
        const myblast = myval[myrepeat.concat("blast")];
        const myredux = myval[myrepeat.concat("scatterredux")];
        const specialized = myval[myrepeat.concat("specialized")] || 0;
        if (ammoremain <= 0) {
            roll = "&{template:info}{{character=@{character_name}}}{{action=Attack: " + myweapon + "}}{{type=" + lang["simple"] + "}}{{info1=Out of Explosives }}";
            startRoll(roll, (results) => {
                finishRoll(results.rollId, {});
            });
        } else {
            var calcDice = "[[ " + myskill + " + " + specialized + " + ?{" + lang[mypool + "-pool-dice"] + "|0} + " + missleintel + " ]]"
            calcTN += " + ?{" + lang["miscellaneous-modifiers"] + "|" + tnmods + "} ]]"
            var roll = "&{template:explosive}{{mytoken=@{selected|token_id}}}{{myname=@{character_name}}}{{target=@{target|" + lang["target"] + "|token_name}}}{{targettoken=@{target|" + lang["target"] + "|token_id}}}" + range
            roll += "{{rolldice=" + calcDice + "}}{{targetnumber=[[{2,( " + calcTN + ")}kh1]]}}";
            roll += "{{weapondamage=" + wdmg + "}}{{senddata=[[0]]}}";
            roll += "{{weaponpower=" + wpower + "}}" + expint;
            if ((mymode == "vehicle-explosive") || (mymode == "vehicle-sensorexp")) roll += "{{controlpool=[[?{" + lang["control-pool-dice"] + "|0}]]}}";
            else roll += "{{combatpool=[[?{" + lang["combat-pool-dice"] + "|0}]]}}";
            roll += "{{weaponname=" + myval[myrepeat.concat("name")] + "}}";
            roll += "{{attacktest=[[ " + calcDice + "d6>[[ {2, ( " + calcTN + ")}kh1 ]]!! ]] }}";
            roll += "{{scatdir=[[1d6]]}}{{scatter=[[" + myscat + "d6]]}}{{blastradius=" + myblast;
            roll += "}}{{scatterredux=" + myredux + "}}{{scatdirnumber=[[" + direction;
            roll += "]]}}{{scatdir=" + scatimg + direction + ".png}}";
            roll += "{{expresist=yes}}";
            console.log(roll);
            startRoll(roll, (results) => {
                var myscatter = results.results.scatter.result;
                const mysuccess = results.results.attacktest.result;
                console.log('start scatter: ' + myscatter);
                console.log('successes: ' + mysuccess);
                myscatter = myscatter - (mysuccess * myredux) - missleintel;
                console.log('myscatter ' + myscatter);
                if (myscatter < 0) myscatter = 0;
                let payload = {
                    attacker: myname,
                    weapon: myweapon,
                    armortype: "impact",
                    wdmg: wdmg,
                    rounds: 1,
                    dodge: 0,
                    attacktest: results.results.attacktest.result,
                    power: wpower,
                    scatter: myscat,
                    blast: myblast,
                    ammotype: grenadetype.toLowerCase(),
                }
                if ((mymode == "sensorexp") || (mymode == "vehicle-sensorexp")) payload["range"] = "sensor";
                else payload["range"] = results.results.range.result;
                finishRoll(results.rollId,
                    {
                        scatter: myscatter,
                        senddata: rollEscape.escape(payload),
                    }
                );
                if ((mymode == "vehicle-explosive") || (mymode == "vehicle-sensorexp")) setatts["controlpool-used"] = results.results.controlpool.result + controlused;
                else setatts["combatpool-used"] = results.results.combatpool.result + combatused;
                setatts[myrepeat.concat("ammoremain")] = ammoremain - 1;
                setAttrs(setatts);
            });
        }
    });
});


const matrixattrs = {
    props: ["security", "access", "control", "index", "files", "slave"],
    attadd: "matrix", attappend: "rating"
}

const otherattrs = ["sheettype", "vcr", "initiategrade", "totem", "totemenv", "totemadv", "totemdisadv"];
const weaponfocus = {
    props: ["name", "reach", "conceal", "skill", "force", "power", "damage", "specialized", "tnmods", "notes"],
    attadd: "weaponfocus-"
};
const adeptpowers = { attadd: "adept", props: ["cost", "notes", ""], list: ["improvedreflexes", "bodyboost", "strengthboost", "quicknessboost", "painres"] };
const deckutils = {
    list: ["specialutils", "defensiveutils", "offensiveutils"],
    specialutils: ["sleaze", "track"], defensiveutils: ["armor", "cloak", "lockon", "medic"], offensiveutils: ["attack", "blackhammer", "killjoy", "slow"],
    props: ["-rating", "-notes", ""], attadd: "deck"
};

const otherskills = ["computers"];
const loadattributes = ["body", "quickness", "strength", "charisma", "willpower", "intelligence", "perception", "reaction", "initiative"];
const critteratts = ["perception", "attacks", "force", "reach"];
const weaponskills = ["clubs", "assaultrifles", "cyberimplant", "edged", "gunnery", "heavyweapons", "lasers", "launchers", "pistols", "poles", "projectiles", "rifles", "shotguns", "smgs", "whips", "throwing", "demolitions", "underwatercombat", "unarmed"]
const magicskills = ["sorcery", "spellcasting", "spelldefense", "dispelling", "astralcombat", "ritualsorcery", "conjuring", "summoning", "banishing", "spiritcontrol", "aurareading", "areadauras", "areadsignatures", "areadsorcery"]
const sorceryspec = ["spellcasting", "spelldefense", "dispelling", "astralcombat", "ritualsorcery"];
const conjuringspec = ["summoning", "banishing", "spiritcontrol"];
const auraspec = ["aurareading", "areadauras", "areadsignatures", "areadsorcery"];
const deckspec = ["hardware", "decking", "programming"];
const vehiclespec = {
    props: ["vehicle-type", "vehicle-size", "handling-street", "handling-offroad", "speed-rating", "acceleration", "body", "armor", "signature", "autonav", "pilot", "firmpoints", "hardpoints", "seating", "entry", "fuel", "economy", "cargo", "load", "vehicle-skill", "gunnery", "ivis-pool", "totalcost", "driver", "rigger"],
    attmap: { "vehicle-type": "type", "vehicle-size": "size", "handling-street": "street", "handling-offroad": "offroad", "speed-rating": "speed" }
};
const decklist = ["mpcp", "bod", "evasion", "masking", "sensors"];
const deckopts = ["name", "hardening", "activemem", "storagemem", "response", "iccm", "offlinestorage"];
const poollist = ["combatpool-mods", "spellpool-mods", "spellpool-mods", "hackingpool-mods", "controlpool-mods", "astralpool-mods", "taskpool"];
const rcdeck = {
    props: ["ewarfare", "rcdeck-rating", "eccm-rating", "rcdeck-decryption-rating", "rcdeck-encryption-rating", "rcdeck-pem-rating"],
    attmap: { 'rcdeck-rating': "rating", 'eccm-rating': "eccm", 'rcdeck-decryption-rating': "decryption", 'rcdeck-encryption-rating': "encryption", 'rcdeck-pem-rating': "pem" }
};
const repeatprops = {
    armor: {
        props: ["armorname", "ballistic", "impact", "slot", "weight", "load"],
        attmap: { armorname: "name" }
    },
    skills: {
        props: ["skillname", "skillrating", "pool"],
        attmap: { skillname: "name", skillrating: "rating" }
    },
    edges: {
        props: ["name", "rating"]
    },
    flaws: {
        props: ["name", "rating"]
    },
    adeptpowers: {
        props: ["adeptpower", "powerrating", "powernotes", "powercost"],
        attmap: { adeptpower: "name", powerrating: "rating", powercost: "cost", powernotes: "notes" }
    },
    spells: {
        props: ["name", "spellcategory", "specialized", "force", "foci", "range", "target", "damage", "duration", "drain", "drainlvl", "description"]
    },
    geas: {
        props: ["type", "notes"],
        attadd: "geas"
    },
    conjuring: {
        props: ["name", "type", "force", "fetish", "expendable"]
    },
    foci: {
        props: ["type", "category", "force", "qty"]
    },
    metamagic: {
        props: ["name", "notes"],
        attadd: "metamagic"
    },
    cyberware: {
        props: ["name", "rating", "essence", "notes"],
        attadd: "cyberware-"
    },
    nanotech: {
        props: ["name", "rating", "essence", "notes"],
        attadd: "nanotech-"
    },
    bioware: {
        props: ["name", "rating", "index", "notes"],
        attadd: "bioware-"
    },
    rangedweapons: {
        props: ["name", "type", "conceal", "power", "ammo", "damage", "specialized", "tnmods", "recoilcomp", "gyro", "targeting", "reloadmethod", "notes", "weight", "load", "ammoweight"]
    },
    meleeweapons: {
        props: ["name", "skill", "conceal", "reach", "power", "damage", "specialized", "tnmods", "notes", "weight", "load"]
    },
    explosives: {
        props: ["name", "type", "conceal", "power", "damage", "missleint", "specialized", "tnmods", "recoilcomp", "gyro", "targeting", "rangefinder", "notes", "weight", "load", "ammoremain"],
        attmap: { exptype: "type" }
    },
    ammunition: {
        props: ["type", "count", "weight", "notes", "load"],
        attadd: "ammo"
    },
    security: {
        props: ["step", "event"]
    },
    ic: {
        props: ["name", "rating", "type", "targettest", "notes"],
        attadd: "ic"
    },
    contacts: {
        props: ["name", "contacttype", "contactdetail"],
        attmap: { contacttype: "type", contactdetail: "detail" }
    },
    lifestyles: {
        props: ["lifestyle", "cost", "months-paid", "address", "description", "edgesflaws"],
    },
    'critter-powers': {
        props: ["name", "description"]
    },
    'critter-weaknesses': {
        props: ["name", "description"]
    },
    karma: {
        props: ["purchase", "cost", "date", "notes"]
    },
    gear: {
        props: ["name", "rating", "weight", "conceal", "type", "quantity", "pool", "load"]
    },
    credsticks: {
        props: ["type", "id", "rating", "balance", "notes"]
    },
    drones: {
        props: ["name", "model", "type", "cost", "notes"]
    },
    vehicles: {
        props: ["name", "model", "cost", "notes"]
    },
    offensiveutils: {
        props: ["utility", "rating", "multiplier", "size", "utilitynotes"],
        attmap: { utilitynotes: "notes" }
    },
    defensiveutils: {
        props: ["utility", "rating", "multiplier", "size", "utilitynotes"],
        attmap: { utilitynotes: "notes" }
    },
    'deck-utilities': {
        props: ["utility", "rating", "target", "multiplier", "size", "notes"]
    }
};


for (const [key, val] of Object.entries(repeatprops)) {
    var onevent = "sheet:opened remove:repeating_" + key + " ";
    repeatprops[key]["props"].forEach(prop => {
        if ("attadd" in repeatprops[key]) prop = repeatprops[key]["attadd"] + prop;
        onevent += "change:repeating_" + key + ":" + prop + " ";
    });
    onevent = onevent.substring(0, onevent.length - 1);
    on(onevent, function () {
        const jsonatt = key + "-json";
        exportRepeat(key);
    });
}

const exportRepeat = function (key) {
    const calcweight = ["gear", "rangedweapons", "meleeweapons", "armor"];
    const jsonatt = key + "-json";
    var sets = {}
    var mylist = [];
    getSectionIDs(key, function (idarray) {
        var gets = [];
        idarray.forEach((m, id) => {
            repeatprops[key]["props"].forEach(prop => {
                prop = ("attadd" in repeatprops[key]) ? repeatprops[key]["attadd"] + prop : prop;
                gets.push("repeating_" + key + "_" + m + "_" + prop)
            });
        });
        getAttrs(gets, function (myval) {
            var weight = 0;
            var nuyen = 0;
            console.log('debug ' + key);
            console.log(myval);
            idarray.forEach((m, id) => {
                myobj = {};
                repeatprops[key]["props"].forEach(prop => {
                    myprop = ("attadd" in repeatprops[key]) ? repeatprops[key]["attadd"] + prop : prop;
                    if ("attmap" in repeatprops[key]) {
                        prop = (prop in repeatprops[key]["attmap"]) ? repeatprops[key]["attmap"][prop] : prop;
                    }
                    myobj[prop] = myval["repeating_" + key + "_" + m + "_" + myprop];
                });
                if (calcweight.includes(key)) weight += parseFloat(myval["repeating_" + key + "_" + m + "_weight"]) * parseInt(myval["repeating_" + key + "_" + m + "_load"]);
                if (key == "ammunition") weight += parseFloat(myval["repeating_" + key + "_" + m + "_ammoweight"]) * parseInt(myval["repeating_" + key + "_" + m + "_ammoload"]);
                if (key == "rangedweapons") weight += parseFloat(myval["repeating_" + key + "_" + m + "_ammoweight"]);
                if (key == "explosives") {
                    console.log('explosives weight');
                    weight += (parseFloat(myval["repeating_" + key + "_" + m + "_weight"]) * parseInt(myval["repeating_" + key + "_" + m + "_ammoremain"]) * parseInt(myval["repeating_" + key + "_" + m + "_load"]));
                };
                if (key == "credsticks") nuyen += parseFloat(myval["repeating_" + key + "_" + m + "_balance"]);
                mylist.push(myobj);
            });
            const myout = JSON.stringify(mylist);
            sets[jsonatt] = myout;
            let wkey = key + "-weight";
            weight = Number((weight).toFixed(2));
            nuyen = Number((nuyen).toFixed(2));
            if ((calcweight.includes(key)) || (key == "explosives") || (key == "ammunition")) sets[wkey] = weight;
            if ((calcweight.includes(key)) || (key == "explosives") || (key == "ammunition")) console.log('calc weight ' + key);
            if (key == "credsticks") sets["nuyen"] = nuyen;
            console.log(sets);
            setAttrs(sets);
        });
    });

}

on("clicked:jsonimport-char", function () {
    getAttrs(["jsonnpc"], function (myval) {
        npc = JSON.parse(myval["jsonnpc"]);
        console.log(npc);
        loadCharacter(npc);
    });
});
on("clicked:jsonexport-char", function () {
    getAttrs(["sheettype"], function (myval) {
        exportCharacter(myval["sheettype"]);
    });
});

const exportCharacter = function (sheet) {
    var cyberdeck = [];
    var adeptlist = [];
    var utillist = [];
    var longlist = [];
    var atts = [];
    var matrixlist = [];
    if (sheet == "Matrix") {
        atts.push("matrixcode", "matrixobject", "parentgrid", "sheettype");
        matrixattrs.props.forEach(myatt => {
            matrixlist.push(matrixattrs.attadd + myatt + matrixattrs.attappend);
            atts.push(matrixattrs.attadd + myatt + matrixattrs.attappend);
        });
    } else {
        longlist = longlist.concat(loadattributes);
        longlist = longlist.concat(poollist);
        longlist = longlist.concat(otherattrs);
        longlist = longlist.concat(vehiclespec.props);
        longlist = longlist.concat(rcdeck.props);
        longlist.forEach(myatt => {
            atts.push(myatt);
            atts.push(myatt + "-mods");
        });
        atts = atts.concat(critteratts);
        atts = atts.concat(magicskills);
        atts = atts.concat(weaponskills);
        atts = atts.concat(deckspec);
        decklist.forEach(myatt => {
            atts.push("deck-" + myatt + "-max");
            cyberdeck.push("deck-" + myatt + "-max");
        });
        deckopts.forEach(opt => {
            atts.push("deck-" + opt);
            cyberdeck.push("deck-" + opt);
        });
        weaponfocus.props.forEach(prop => {
            atts.push(weaponfocus.attadd + prop);
        });
        adeptpowers["list"].forEach(power => {
            adeptpowers["props"].forEach(prop => {
                atts.push(adeptpowers.attadd + power + prop);
                adeptlist.push(adeptpowers.attadd + power + prop);
            });
        });
        deckutils["list"].forEach(util => {
            deckutils[util].forEach(u => {
                deckutils["props"].forEach(p => {
                    let myatt = deckutils.attadd + u + p;
                    atts.push(myatt);
                    utillist.push(myatt);
                });
            });
        });
    }
    getAttrs(atts, function (myval) {
        var skillsother = [];
        var adeptother = [];
        var offensiveother = [];
        var defensiveother = [];
        const jsonout = {
            vehicle: {},
            rcdeck: {},
            cyberdeck: {},
            weaponfocus: {},
            skills: [],
            securitysheaf: [],
            adeptpowers: [],
            offensiveutils: [],
            defensiveutils: [],
            specialutils: []
        };
        console.log(myval);
        for (const [key, val] of Object.entries(myval)) {
            var obj = {};
            if ((magicskills.includes(key)) || (otherskills.includes(key)) || (weaponskills.includes(key)) || (deckspec.includes(key))) {
                obj["name"] = key;
                obj["rating"] = val;
                if (val != 0) skillsother.push(obj);
            } else if (adeptlist.includes(key)) {
                continue;
            } else if (utillist.includes(key)) {
                continue;
            } else if (cyberdeck.includes(key)) {
                if (val != 0) jsonout["cyberdeck"][key] = val;
            } else if (key.startsWith(weaponfocus.attadd)) {
                if (myval["weaponfocus-force"] != 0) jsonout["weaponfocus"][key.replace(weaponfocus.attadd, "")] = val;
            } else if (otherattrs.includes(key)) {
                if (val != 0) jsonout[key] = val;
            } else if (vehiclespec.props.includes(key)) {
                if ((myval["sheettype"] == "Drone" || myval["sheettype"] == "Vehicle")) {
                    let mykey = (key in vehiclespec.attmap) ? vehiclespec.attmap[key] : key;
                    jsonout["vehicle"][mykey] = val;
                }
            } else if (rcdeck.props.includes(key)) {
                if (val != 0) {
                    let mykey = (key in rcdeck.attmap) ? rcdeck.attmap[key] : key;
                    jsonout["rcdeck"][mykey] = val;
                };
            } else if (key == "matrixcode") jsonout["code"] = val;
            else if (matrixlist.includes(key)) jsonout[(key.replace(matrixattrs.attadd, "")).replace(matrixattrs.attappend, "")] = val;
            else if (val != 0) jsonout[key] = val;

        };
        jsonatts = []
        for (const [key, val] of Object.entries(repeatprops)) {
            jsonatts.push(key + "-json");
        };
        getAttrs(jsonatts, function (v) {
            console.log('v');
            console.log(v);
            for (const [key, val] of Object.entries(repeatprops)) {
                const jv = key + "-json";
                console.log(jv);
                const okey = (key == "security") ? "securitysheaf" : key;
                if (jv in v) jsonout[okey] = JSON.parse(v[key + "-json"]);
            }
            if ("skills" in jsonout) jsonout["skills"] = jsonout["skills"].concat(skillsother);
            else jsonout["skills"] = skillsother;

            if ("adeptpowers" in jsonout) {
                jsonout["adeptpowers"] = jsonout["adeptpowers"].concat(adeptother);
            }
            console.log('starting adept out')
            adeptpowers["list"].forEach(power => {
                const obj = {};
                obj["name"] = power;
                console.log(adeptpowers.attadd + power);
                console.log(myval[adeptpowers.attadd + power]);
                obj["rating"] = myval[adeptpowers.attadd + power];
                obj["cost"] = myval[adeptpowers.attadd + power + "-cost"];
                obj["notes"] = myval[adeptpowers.attadd + power + "-notes"];
                if (myval[adeptpowers.attadd + power] > 0) jsonout["adeptpowers"].push(obj);
            });
            console.log('starting deck util out')
            deckutils["list"].forEach(util => {
                deckutils[util].forEach(u => {
                    const obj = {};
                    let rating = deckutils.attadd + u + "-rating";
                    let notes = deckutils.attadd + u + "-notes";
                    obj["utility"] = u;
                    obj["rating"] = myval[rating];
                    obj["notes"] = myval[notes];
                    if (myval[rating] > 0) jsonout[util].push(obj);
                });
            });
            for (const [key, val] of Object.entries(repeatprops)) {
                if (key == "security") {
                    if (jsonout["securitysheaf"].length === 0) delete jsonout["securitysheaf"]
                } else {
                    if (jsonout[key].length === 0) delete jsonout[key]
                }
            };
            if (jsonout.specialutils.length === 0) delete jsonout.specialutils;
            if (Object.keys(jsonout.cyberdeck).length === 0) delete jsonout.cyberdeck;
            if (Object.keys(jsonout.weaponfocus).length === 0) delete jsonout.weaponfocus;
            if (Object.keys(jsonout.vehicle).length === 0) delete jsonout.vehicle;
            if (Object.keys(jsonout.rcdeck).length === 0) delete jsonout.rcdeck;
            console.log(jsonout);
            myout = JSON.stringify(jsonout);
            setAttrs({ jsonout: myout });
        });
    });


};

const loadCharacter = function (npc) {
    getAttrs(["jsonnpc"], function (myval) {
        var atts = {};
        repeatskills = [];
        npc = JSON.parse(myval["jsonnpc"]);
        console.log(npc);
        const skills = ("skills" in npc) ? npc["skills"] : [];
        const pools = ("pools" in npc) ? npc["pools"] : [];
        atts["essense"] = ("essense" in npc) ? npc["essense"] : 6;
        atts["metatype"] = ("metatype" in npc) ? npc["metatype"] : "Human";
        if ("character_name" in npc) atts["character_name"] = npc["character_name"];
        if ("type" in npc) atts["sheettype"] = npc["type"];
        if ("vcr" in npc) atts["vcr"] = npc["vcr"];
        if ("magic" in npc) atts["magic"] = npc["magic"];
        const sheettype = ("sheettype" in npc) ? npc.sheettype : "Character";
        if (sheettype == "Matrix") {
            console.log('loading matrix');
            atts["sheettype"] = sheettype;
            atts["matrixobject"] = ("matrixobject" in npc) ? npc["matrixobject"] : "Host";
            atts["matrixcode"] = ("code" in npc) ? npc["code"] : "GREEN";
            if ("ic" in npc) {
                npc.ic.forEach(repeat => {
                    var newrowid = generateRowID();
                    repeatprops.ic.props.forEach(prop => {
                        myprop = prop;
                        prop = repeatprops.ic.attadd + prop;
                        atts["repeating_ic_" + newrowid + "_" + prop] = repeat[myprop];
                    });
                });
            }
            if ("securitysheaf" in npc) {
                npc.securitysheaf.forEach(repeat => {
                    var newrowid = generateRowID();
                    repeatprops.security.props.forEach(prop => {
                        myprop = prop;
                        atts["repeating_security_" + newrowid + "_" + prop] = repeat[myprop];
                    });
                });
            }
            matrixattrs.props.forEach(attr => {
                if (attr in npc) atts[matrixattrs.attadd + attr + matrixattrs.attappend] = npc[attr];
            });

        } else {
            console.log('loading attributes');
            loadattributes.forEach(myatt => {
                let max = myatt.concat("_max");
                let mod = myatt.concat("-mods");
                if (npc[myatt]) atts[myatt] = npc[myatt];
                if (npc[mod]) atts[mod] = npc[mod];
                if (npc[max]) atts[mod] = npc[max] - npc[myatt];
                if (npc[max] == 'initiative_max') console.log('initme' + npc[max]);
            });
            console.log('loading pools');
            poollist.forEach(myatt => {
                if (npc[myatt]) atts[myatt] = npc[myatt];
            });
            console.log('loading critter attributes');
            critteratts.forEach(myatt => {
                if (npc[myatt]) {
                    if (myatt == "attacks") {
                        myattack = npc[myatt].split('');
                        atts["attackdamage"] = myattack.pop();
                        atts["attackpower"] = parseInt(myattack.join(''));
                    } else if (myatt = "reach") {
                        atts["meleereach"] = npc[myatt];
                    } else {
                        atts[myatt] = npc[myatt];
                    }
                }
            });


            console.log('loading skills');
            skills.forEach(skill => {
                let myskill = skill["name"].toLowerCase();
                if (weaponskills.includes(myskill)) {

                    atts[myskill] = skill["rating"];
                } else if (magicskills.includes(myskill)) {
                    if (sorceryspec.includes(myskill)) atts["sorcery-spec-switch"] = 1;
                    if (conjuringspec.includes(myskill)) atts["conjuring-spec-switch"] = 1;
                    if (auraspec.includes(myskill)) atts["auraread-spec-switch"] = 1;
                    atts[myskill] = skill["rating"];
                } else if (atts[myskill] == "decking") {
                    atts[myskill] = skill["rating"];
                } else if (deckspec.includes(myskill)) {
                    atts["deck-spec-switch"] = 1;
                    atts[myskill] = skill["rating"];
                } else {
                    repeatskills.push(skill);

                }
            });
            console.log('loading misc attributes');
            otherattrs.forEach(miscatt => {
                if (miscatt in npc) atts[miscatt] = npc[miscatt];
            });
            console.log('loading adept powers');
            if ("adeptpowers" in npc) {
                for (i = npc["adeptpowers"].length - 1; i >= 0; i -= 1) {
                    if (adeptpowers["list"].includes(npc["adeptpowers"][i]["name"])) {
                        console.log('found non repeating power ' + npc["adeptpowers"][i]["name"]);
                        atts[adeptpowers.attadd + npc["adeptpowers"][i]["name"]] = npc["adeptpowers"][i]["rating"];
                        npc["adeptpowers"].splice(i, 1);
                    };
                };
            };

            console.log('loading rcdeck');
            if ("rcdeck" in npc) {
                rcdeck.props.forEach(prop => {
                    let mykey = (prop in rcdeck.attmap) ? rcdeck.attmap[prop] : prop;
                    if (mykey in npc["rcdeck"]) atts[prop] = npc["rcdeck"][mykey];
                })
            };
            console.log('loading vehicle');
            if ("vehicle" in npc) {
                vehiclespec.props.forEach(prop => {
                    let mykey = (prop in vehiclespec.attmap) ? vehiclespec.attmap[prop] : prop;
                    if (mykey in npc["vehicle"]) atts[prop] = npc["vehicle"][mykey];
                })
            };
            console.log('loading cyberdeck');
            if ("cyberdeck" in npc) {
                for (const [key, val] of Object.entries(npc.cyberdeck)) {
                    atts[key] = val;
                }
            };
            console.log('loading weaponfocus');
            if ("weaponfocus" in npc) {
                for (const [key, val] of Object.entries(npc.weaponfocus)) {
                    atts[key] = val;
                }
            };
            deckutils["list"].forEach(util => {
                console.log('loading deck utils ' + util);
                if (npc[util]) {
                    for (i = npc[util].length - 1; i >= 0; i -= 1) {
                        console.log('u ' + npc[util][i]["utility"]);
                        if (deckutils[util].includes(npc[util][i]["utility"])) {
                            ;
                            console.log('found non repeating utility ' + npc[util][i]["utility"]);
                            atts[deckutils.attadd + npc[util][i]["utility"]] = npc[util][i]["rating"];
                            npc[util].splice(i, 1);
                        }
                    };
                }
            });
            console.log('loading repeat skills');
            npc["skills"] = repeatskills;
            for (const [key, val] of Object.entries(repeatprops)) {
                if (key in npc) {
                    console.log('loading ' + key);
                    npc[key].forEach(repeat => {
                        var newrowid = generateRowID();
                        repeatprops[key]["props"].forEach(prop => {
                            myprop = prop;
                            prop = ("attadd" in repeatprops[key]) ? repeatprops[key]["attadd"] + prop : prop;
                            if ("attmap" in repeatprops[key]) {
                                myprop = (prop in repeatprops[key]["attmap"]) ? repeatprops[key]["attmap"][prop] : prop;
                            }
                            atts["repeating_" + key + "_" + newrowid + "_" + prop] = repeat[myprop];
                        });
                    });
                }

            };
        }
        console.log('before atts');
        console.log(atts);
        Object.keys(atts).forEach(key => atts[key] === undefined && delete atts[key])
        console.log('final atts');
        console.log(atts);
        setAttrs(atts);
    });

};


const switchbuttons1 = ["securitysheaf", "astralattributes", "sorceryskills", "spells", "adeptpowers", "magicinitiate", "foci", "geas", "totem", "combatskills", "cyberware", "deckingskills", "bioware", "gear", "contacts"];
const switchbuttons2 = ["gunnery", "deck-utilities-", "deck-skills-", "deck-cyberdeck-", "drones-skills-", "drones-models-", "vehicle-skills-", "drone-list-", "ic-", "rc-deck-"];
const switchbuttons = switchbuttons1.concat(switchbuttons2)
switchbuttons.forEach(button => {
    let mybutton = button.concat('switch');
    on(`clicked:${mybutton}`, function () {
        console.log(mybutton)
        getAttrs([mybutton], function (myval) {
            if (myval[mybutton] == "show") {
                setAttrs({ [mybutton]: "hide" });
            } else {
                setAttrs({ [mybutton]: "show" });
            }
        });

    });
});

on("clicked:show-hide", (info) => {
    const myid = info["htmlAttributes"]["id"]
    console.log('clicked ' + myid);
    getAttrs([myid], function (myval) {
        if (myval[myid] == "show") setAttrs({ [myid]: "hide" });
        else setAttrs({ [myid]: "show" });
    });
});

const vehicleskills = ["bike", "car", "hovercraft", "motorboat", "sailboat", "submarine", "wingedaircraft", "tracks", "semiballistic", "lta", "rotor", "ship", "vectoredthrust", "mecharm", "suborbital", "walkers"];
let vchangelist = "";
let vonprefix = " change:";
let vonsuffix = "-specialize";
let vattrs = [];
vehicleskills.forEach(skill => {
    let myvonchange = vonprefix.concat(skill.concat(vonsuffix));
    vchangelist += myvonchange;
});
on(vchangelist, function (eventinfo) {
    var mybase = eventinfo["sourceAttribute"].split("-")[0]
    var myspec = eventinfo["sourceAttribute"];
    var myremote = mybase.concat("-remote")
    vattrs.push(mybase);
    vattrs.push(myspec);
    console.log(vattrs);
    getAttrs(vattrs, function (myval) {
        if (myval[myspec] == 0) {
            console.log('setting ' + myremote + ' to ' + myval[mybase]);
            setAttrs({ [myremote]: myval[mybase] });
        }
    });
});

const deckutilrepeat = ["deck-utilities", "offensiveutils", "defensiveutils"]
const utilitylist = ["decksleaze", "decktrack", "deckarmor", "deckcloak", "deckmedic", "decklockon", "deckattack", "deckblackhammer", "deckkilljoy", "deckslow"];
let changelist = "change:deckattack-multiplier";
let onprefix = " change:";
let onsuffix = "-rating";
utilitylist.forEach(util => {
    let myonchange = onprefix.concat(util);
    myonchange = myonchange.concat("-rating");
    changelist += myonchange;
});
console.log('changelist');
console.log(changelist);
on(changelist, function (eventinfo) {
    let myutil = eventinfo["sourceAttribute"].split("-")[0];
    var myrating = myutil.concat("-rating");
    var mymulti = myutil.concat("-multiplier");
    var mysize = myutil.concat("-size");
    getAttrs([myrating, mymulti], function (myval) {
        let r = parseInt(myval[myrating]);
        let m = parseInt(myval[mymulti]);
        let s = (r * r) * m;
        setAttrs({ [mysize]: s });
    });
});

const personalist = ["deck-mpcp", "deck-bod", "deck-evasion", "deck-sensors", "deck-masking", "deck-detection"];
let pchangelist = "sheet:opened change:deck-realityfilter change:deck-icsuppresspool change:deck-icsuppressed";
let ponprefix = " change:";
var pgetatts = ["deck-realityfilter", "deck-icsuppressed", "deck-icsuppresspool", "hackingpool-used"];
personalist.forEach(p => {
    pchangelist += ponprefix.concat(p.concat("-max"));
    pchangelist += ponprefix.concat(p.concat("-mods"));
    pgetatts.push(p.concat("-max"));
    pgetatts.push(p.concat("-mods"));
});
on(pchangelist, function () {
    console.log('deck-mpcp change');
    getAttrs(pgetatts, function (myval) {
        sets = {};
        console.log(myval);
        console.log(myval["deck-realityfilter"]);
        var hp = parseInt(myval["hackingpool"]);
        var hackpool = hp || 0;
        var mysuppress = parseInt(myval["deck-icsuppressed"]);
        sets["deck-mpcp-final"] = parseInt(myval["deck-mpcp-max"]) + parseInt(myval["deck-mpcp-mods"]) - parseInt(myval["deck-realityfilter"]);
        sets["deck-bod-final"] = parseInt(myval["deck-bod-max"]) + parseInt(myval["deck-bod-mods"]);
        sets["deck-sensors-final"] = parseInt(myval["deck-sensors-max"]) + parseInt(myval["deck-sensors-mods"]);
        sets["deck-evasion-final"] = parseInt(myval["deck-evasion-max"]) + parseInt(myval["deck-evasion-mods"]);
        sets["deck-masking-final"] = parseInt(myval["deck-masking-max"]) + parseInt(myval["deck-masking-mods"]);
        if (myval["deck-icsuppresspool"] == 1) {
            sets["hackingpool-icsuppress"] = mysuppress;
            sets["deck-detection-final"] = parseInt(myval["deck-detection-max"]) + parseInt(myval["deck-detection-mods"]);
        } else {
            sets["deck-detection-final"] = parseInt(myval["deck-detection-max"]) + parseInt(myval["deck-detection-mods"]) - mysuppress;
        }
        console.log(sets);
        setAttrs(sets);
    });



});

on("change:frame-initiative change:frame-core", function () {
    getAttrs(["frame-initiative", "frame-core"], function (myval) {

        var mycore = parseInt(myval["frame-core"]);
        var myinit = parseInt(myval["frame-initiative"] + 1);
        setAttrs({ "deck-mpcp-max": mycore, "deck-reaction-final": mycore, "deck-initiative": myinit });
    });

});
var utilsizechange;
const cprefix = " change:repeating_";
deckutilrepeat.forEach(p => {
    utilsizechange += cprefix.concat(p.concat(":multiplier"));
    utilsizechange += cprefix.concat(p.concat(":size"));
    utilsizechange += cprefix.concat(p.concat(":rating"));
});
on(utilsizechange, function (info) {
    console.log(info);
    getAttrs(["repeating_deck-utilities_rating", "repeating_deck-utilities_multiplier"], function (myval) {
        let r = parseInt(myval["repeating_deck-utilities_rating"]);
        let m = parseInt(myval["repeating_deck-utilities_multiplier"]);
        let s = (r * r) * m;
        let myattr = "repeating_deck-utilities_size";
        setAttrs({ [myattr]: s });
    });
});


on("change:matrixsecurityrating", function () {
    console.log('change of sec rating');
    const atlist = ["deck-bod-max", "deck-evasion-max", "deck-masking-max", "deck-sensors-max", "deck-mpcp-max", "deck-detection-max", "decking"];
    getAttrs(["matrixsecurityrating"], function (myval) {
        sets = {};
        let sr = parseInt(myval["matrixsecurityrating"]);
        atlist.forEach(at => {
            sets[at] = sr;
        });
        sets["matrix-iconstatus"] = (sr > 0) ? "Legitimate" : "Intruder";
        console.log(sets);
        setAttrs(sets);
    });
});

var deckchangelist;
utilitylist.forEach(p => {
    deckchangelist += ponprefix.concat(p.concat("-loaded"));
    deckchangelist += ponprefix.concat(p.concat("-size"));
    deckchangelist += ponprefix.concat(p.concat("-rating"));
});
deckutilrepeat.forEach(p => {
    const utilatts = ["loaded", "size", "rating"];
    deckchangelist += " change:repeating_" + p + ":loaded";
    deckchangelist += " change:repeating_" + p + ":size";
    deckchangelist += " change:repeating_" + p + ":rating";

});
on(deckchangelist, function (info) {
    var myatts = ["deck-utilitypayload", "deck-activemem", "deck-util-size-loaded", "deck-util-rating-loaded"];
    console.log(info);
    myold = info["previousValue"];
    mynew = info["newValue"];
    var myattrib;
    var myrepeat;
    var mybase;
    var mysizeattr;
    var myloadattr;
    var myratingattr;
    if (info["sourceAttribute"].includes("repeating_")) {
        mybase = info["sourceAttribute"].split("_");
        myattrib = mybase.pop();
        myrepeat = mybase.join('_');
        mysizeattr = myrepeat.concat("_size");
        myloadattr = myrepeat.concat("_loaded");
        myratingattr = myrepeat.concat("_rating");
        myratingfinal = myrepeat.concat("_rating-final");
    } else {
        mybase = info["sourceAttribute"].split("-");
        myattrib = mybase.pop();
        myrepeat = mybase;
        mysizeattr = myrepeat + "-size";
        myloadattr = myrepeat + "-loaded";
        myratingattr = myrepeat + "-rating";
        myratingfinal = myrepeat + "-rating-final";
    }
    myatts.push(mysizeattr, myloadattr, myratingattr,);
    console.log('myatt: ' + myattrib);
    console.log('myrepeat: ' + myrepeat);
    console.log(myatts);

    if (myattrib.includes("loaded")) console.log('change load');
    if (myattrib.includes("rating")) console.log('change rating');
    if (myattrib.includes("size")) console.log('change size');
    getAttrs(myatts, function (myval) {
        var newsize;
        var newratings;
        setatts = [];
        const currentsize = parseInt(myval["deck-util-size-loaded"]);
        const currentrat = parseInt(myval["deck-util-rating-loaded"]);
        if (myattrib == "loaded") {
            if (myval[myloadattr] == 1) {
                console.log('loading utility ' + myrepeat);
                newsize = currentsize + parseInt(myval[mysizeattr]);
                newratings = currentrat + parseInt(myval[myratingattr]);
                setatts[myratingfinal] = parseInt(myval[myratingattr]);
            } else {
                console.log('un-loading utility ' + myrepeat);
                newsize = currentsize - parseInt(myval[mysizeattr]);
                newratings = currentrat - parseInt(myval[myratingattr]);
                setatts[myratingfinal] = 0;
            }
        } else if (myattrib == "size") {
            if (myval[myloadattr] == 1) {
                newsize = currentsize + (parseInt(myval[mysizeattr]) - parseInt(myold));
                console.log('change of size ' + myrepeat + ' from: ' + myold + ' to: ' + myval[mysizeattr]);
            }
        } else if (myattrib == "rating") {
            if (myval[myloadattr] == 1) {
                newratings = currentrat + (parseInt(myval[myratingattr]) - parseInt(myold));
                console.log('change of rating ' + myrepeat + ' from: ' + myold + ' to: ' + myval[myratingattr]);
            }
        } else {
            console.log('invalid event');
        }
        console.log('debug size' + newsize);
        console.log('debug rating' + newratings);
        if (newsize != null) setatts["deck-util-size-loaded"] = newsize;
        if (newratings != null) setatts["deck-util-rating-loaded"] = newratings;

        console.log('setatts');
        console.log(setatts);
        setAttrs(setatts);
    });

});

on("change:deck-systemrating change:matrix-iconstatus change:deck-activemem change:deck-utilitypayload change:deck-util-size-loaded change:deck-util-rating-loaded", function () {
    getatts = ["deck-systemrating", "matrix-iconstatus", "deck-activemem", "deck-utilitypayload", "deck-util-size-loaded", "deck-util-rating-loaded"];
    getAttrs(getatts, function (myval) {
        let myoverloaded = 0;
        let myratingoload = 0;
        if (parseInt(myval["deck-util-size-loaded"]) > parseInt(myval["deck-activemem"])) {
            myoverloaded = 1;
        }
        if (parseInt(myval["deck-util-rating-loaded"]) > parseInt(myval["deck-utilitypayload"])) {
            myratingoload = 1;
        }
        console.log('load:' + myoverloaded);
        setAttrs({ "deck-mem-overloaded": myoverloaded, "deck-util-overloaded": myratingoload });
    });
});

on("sheet:opened change:deck-systemrating change:matrix-iconstatus change:matrixsecurityrating", function () {
    getAttrs(["deck-systemrating", "matrix-iconstatus", "matrixsecurityrating"], function (myval) {
        sets = {};
        var mytn = 0;
        const rating = myval["deck-systemrating"].toUpperCase();
        const icon = myval["matrix-iconstatus"];
        const secrat = myval["matrixsecurityrating"];
        if (rating != "UNKNOWN") sets["deck-tn"] = matrixtn[rating][icon];
        console.log('debug sec rat ' + secrat);
        sets["iconstatuscode"] = (icon == "Legitimate") ? 0 : (secrat > 0) ? 0 : 1;
        console.log(sets)
        setAttrs(sets);
    });
});

on("change:matrixcode", function () {
    console.log('matrixsecuritynumber')
    getAttrs(["matrixcode"], function (myvar) {
        const rating = myvar["matrixcode"].toUpperCase();
        sets = {};
        sets["matrixsecuritynumber"] = matrixtn[rating]["secrating"];
        console.log(sets)
        setAttrs(sets);
    });
});


on("change:deckattacklevel", function () {
    const multipliers = { L: 2, M: 3, S: 4, D: 5 };
    getAttrs(["deckattacklevel"], function (myval) {
        const mylevel = myval["deckattacklevel"];
        console.log('test level: ' + multipliers[mylevel]);
        setAttrs({ "deckattack-multiplier": multipliers[mylevel] });
    });
});

on('clicked:repeating_ic:combat', (info) => {
    if (!("yes" in lang)) geti18n();
    const mytitle = info["htmlAttributes"]["title"]
    const myid = info["htmlAttributes"]["id"]
    gets = ["matrixcode"];
    var source = info['sourceAttribute'].split('_');
    var sourceattr = source.pop();
    var myrepeat = source.join('_').concat('_');
    gets.push(myrepeat.concat("icrating"));
    gets.push(myrepeat.concat("ictargettest"));
    gets.push(myrepeat.concat("icname"));
    gets.push(myrepeat.concat("ictype"));
    gets.push(myrepeat.concat("ic-penalty"));
    gets.push(myrepeat.concat("matrix-iconstatus"));
    getAttrs(gets, function (myval) {
        var myroll;
        var myatt = "@{target|" + lang["target"] + "|deck-evasion-final}";
        const name = myval[myrepeat.concat("icname")];
        const ictype = myval[myrepeat.concat("ictype")];
        const penalty = parseInt(myval[myrepeat.concat("ic-penalty")]);
        const targeticon = myval[myrepeat.concat("matrix-iconstatus")];
        var icmode = "proactive";
        if (iclist["reactive"].includes(ictype)) icmode = "reactive";
        const code = myval["matrixcode"].toUpperCase();
        const rating = parseInt(myval[myrepeat.concat("icrating")]);
        var ictest = myval[myrepeat.concat("ictargettest")];
        var targetatt = "bod";
        if ((icmode == "proactive") && (ictest.includes("target"))) targetatt = ictest.split("-")[1];
        const attacktn = matrixtn[code][targeticon];
        var senddata = "{{senddata=[[0]]}}";
        var action = lang["attack"];
        if (icmode == "proactive") {
            myroll = "&{template:matrix}{{myname=" + name + "}}";
            myroll += "{{iconstatus=[[@{target|" + lang["decker"] + "|iconstatuscode}]]}}";
            myroll += "{{attack=yes}}";
            ictest = 0;
        } else {
            myroll = "/w gm &{template:matrix}{{myname=" + name + "}}";
            myroll += "{{basic=yes}}";
            myroll += "{{sensor=[[[[@{target|" + lang["decker"] + "|deck-sensors-final}]]d6>[[" + rating + " + @{target|" + lang["decker"] + "|matrix-penalty} ]]!!]]}}";
            ictest = "?{" + lang["utility-rating"] + "?|6}";
        }
        const payload = {
            wdmg: matrixtn[code]["wdmg"],
            attacker: name,
            power: rating,
            attribute: "deck-" + targetatt + "-final",
            attacktype: ictype
        };
        var target = "{{target=@{target|" + lang["target"] + "|token_name}}}";
        if (mytitle == "Evade Detection") myatt = "@{target|" + lang["target"] + "|deck-sensors-final}";
        if (mytitle == "IC Resist") myatt = "?{" + lang["attack-power"] + "?|2}";
        if (mytitle == "IC Resist") target = "{{target=" + name + "}}";
        if (mytitle == "IC Execute") {
            myatt = ictest;
            target = "{{target=@{target|" + lang["decker"] + "|token_name}}}";
        }
        var calcTN = myatt + " +?{" + lang["miscellaneous-modifiers"] + "|0} + " + penalty;
        var calcDice = "@{matrixsecurityrating}"
        if ((ictype == "Probe") || (ictype == "Scramble")) calcDice = rating;
        myroll += target;
        myroll += "{{rolldice=[[" + calcDice + "]]}}{{targetnumber=[[" + calcTN + "]]}}";
        myroll += "{{basetn=[[" + myatt + "]]}}";
        myroll += "{{action=" + action + "}}"
        myroll += "{{roll= [[ [[" + calcDice + "]]d6>[[ {2,(" + calcTN + ")}kh1]]!! ]] }}"
        if (icmode == "proactive") {
            myroll += "{{wdmg=[[" + matrixtn[code]["wdmg"] + "]]}}";
            myroll += senddata;
        }
        if (ictype == "Probe") {
            myroll += "{{target=@{target|" + lang["decker"] + "|token_name}}}";
            myroll += "{{targetnumber=[[@{target|" + lang["decker"] + "|deck-detection-final}]]}}";
            myroll += "{{action=" + lang["probe"] + "}}";
            myroll += "{{basetn=[[0]]}}";
            myroll += "{{rolldice=[[ " + rating + "]]}}";
            myroll += "{{roll=[[[[" + rating + " ]]d6>[[ @{target|" + lang["decker"] + "|deck-detection-final} + " + penalty + "]]!!]]}}";
        }
        if ((ictype == "Tar Baby") || (ictype == "Tar pit")) {
            myroll += "{{target=@{target|" + lang["decker"] + "|token_name}}}";
            myroll += "{{targetnumber=[[?{" + lang["utility-rating"] + "?|4}]]}}";
            myroll += "{{action=" + name + " Test}}";
            myroll += "{{basetn=[[0]]}}";
            myroll += "{{rolldice=[[ " + rating + "]]}}";
            myroll += "{{roll=[[[[" + rating + " ]]d6>[[?{" + lang["utility-rating"] + "?} + " + penalty + "]]!!]]}}";
            myroll += "{{oppose=[[[[?{" + lang["utility-rating"] + "?}]]d6>[[" + rating + " @{target|" + lang["decker"] + "|matrix-penalty}]]!!]]}}";
        }
        console.log(myroll);
        const finalwdmg = (iclist["attack"].includes(ictype)) ? damagetable[matrixtn[code]["wdmg"]] : "";
        console.log('finalwdmg: ' + finalwdmg);
        startRoll(myroll, (results) => {
            if (icmode == "proactive") {
                let iconstat = results.results.iconstatus.result;
                const iconstatus = (results.results.iconstatus.result == 0) ? "Legitimate" : "Intruder";
                const finaltn = results.results.targetnumber.result + matrixtn[code][iconstatus];
                const finaldice = (results.results.roll.dice.filter(mydice => mydice >= finaltn)).length;
                console.log('final tn ' + finaltn);
                console.log('dice : ' + results.results.roll.dice);
                console.log('finaldice : ' + finaldice);
                payload["basetn"] = finaltn;
                payload["attacktest"] = finaldice;
                finishRoll(results.rollId,
                    {
                        wdmg: finalwdmg,
                        targetnumber: finaltn,
                        roll: finaldice,
                        senddata: rollEscape.escape(payload),
                    });
            } else {
                payload["basetn"] = results.results.basetn.result;
                payload["attacktest"] = results.results.roll.result;
                finishRoll(results.rollId,
                    {
                        wdmg: finalwdmg,
                        senddata: rollEscape.escape(payload),
                    });
            }
        });
    });

});

on("clicked:deck-utilities-unloadall", function () {
    utilatts = [];
    utilrepeatatts = [];
    offenserepeatatts = [];
    defenserepeatatts = [];
    utilitylist.forEach(util => {
        let myattr = util.concat("-loaded");
        utilatts[myattr] = 0;
    });
    console.log('utilatts');
    console.log(utilatts);
    setAttrs(utilatts);
    /* setAttrs(utilatts); */
    deckutilrepeat.forEach(rsection => {
        getSectionIDs(rsection, function (idarray) {
            console.log(rsection);
            var myatts = [];
            idarray.forEach((m, id) => {
                let myrepeat = "repeating_" + rsection + "_" + m + "_loaded";;
                myatts[myrepeat] = 0;
            });
            console.log(rsection);
            console.log(myatts);
            setAttrs(myatts);
        });
    });
    var finalatts = [];
    finalatts["deck-util-size-loaded"] = 0;
    finalatts["deck-util-rating-loaded"] = 0;
    setAttrs(finalatts);

});


on("sheet:opened change:eccm-fluxmod change:rcdeck-fluxmod", function () {
    getAttrs(["eccm-fluxmod", "rcdeck-fluxmod"], function (myval) {
        const mysystems = ["eccm", "rcdeck"];
        myset = {};
        var myrange = 0;
        mysystems.forEach(mysys => {
            let mod = mysys.concat("-fluxmod");
            let range = mysys.concat("-range");
            let myflux = (myval[mod])
            if (myflux == 0) myrange = .25;
            if (myflux == 1) myrange = 1;
            if (myflux == 2) myrange = 2;
            if (myflux == 3) myrange = 4;
            if (myflux == 4) myrange = 6;
            if (myflux == 5) myrange = 9;
            if (myflux == 6) myrange = 12;
            if (myflux == 7) myrange = 16;
            if (myflux == 8) myrange = 20;
            if (myflux == 9) myrange = 25;
            if (myflux >= 10) myrange = (2 * myflux) + 10;
            myset[range] = myrange;
        });
        setAttrs(myset);

    });
});

on("change:sensors-rating change:body change:sonar-rating change:ecm-rating change:eccm-rating change:ed-rating change:ecd-rating", function () {
    getAttrs(["sensors-rating", "body", "sonar-rating", "ecm-rating", "eccm-rating", "ed-rating", "ecd-rating"], function (myval) {
        var sensorflux = Math.ceil(parseInt(myval["sensors-rating"]) * 1.5);
        var sensormax = sensorflux + Math.floor(parseInt(myval["body"]) / 2);
        var sonarflux = Math.ceil(parseInt(myval["sonar-rating"]) * 1.5);
        var sonarmax = sonarflux + Math.floor(parseInt(myval["body"]) / 2);
        var ecmflux = Math.ceil(parseInt(myval["ecm-rating"]) * 1.5);
        var ecmmax = ecmflux + Math.floor(parseInt(myval["body"]) / 2);
        var eccmflux = Math.ceil(parseInt(myval["eccm-rating"]) * 1.5);
        var eccmmax = eccmflux + Math.floor(parseInt(myval["body"]) / 2);
        var edflux = Math.ceil(parseInt(myval["ed-rating"]) * 1.5);
        var edmax = edflux + Math.floor(parseInt(myval["body"]) / 2);
        var ecdflux = Math.ceil(parseInt(myval["ecd-rating"]) * 1.5);
        var ecdmax = ecdflux + Math.floor(parseInt(myval["body"]) / 2);
        setAttrs({ "sensors-flux": sensorflux, "sensors-fluxmax": sensormax, "ecm-flux": ecmflux, "ecm-fluxmax": ecmmax, "eccm-flux": eccmflux, "eccm-fluxmax": eccmmax, "ed-flux": edflux, "ed-fluxmax": edmax, "ecd-flux": ecdflux, "ecd-fluxmax": ecdmax, "sonar-flux": sonarflux, "sonar-fluxmax": sonarmax, "sensors-fluxmod": sensorflux, "sonar-fluxmod": sonarflux, "ecm-fluxmod": ecmflux, "eccm-fluxmod": eccmflux, "ed-fluxmod": edflux, "ecd-fluxmod": ecdflux });
    });
});

on("sheet:opened change:sensors-fluxmod change:sonar-fluxmod change:ecm-fluxmod change:eccm-fluxmod change:ed-fluxmod change:ecd-fluxmod change:body change:ecd-enabled", function () {
    getAttrs(["sensors-fluxmod", "sonar-fluxmod", "ecm-fluxmod", "eccm-fluxmod", "ed-fluxmod", "ecd-fluxmod", "sensors-flux", "sonar-flux", "ecm-flux", "eccm-flux", "ed-flux", "ecd-flux", "body", "ecd-enabled"], function (myval) {
        var overload = 0;
        var sensor = Math.max(0, myval["sensors-fluxmod"] - myval["sensors-flux"]);
        var sonar = Math.max(0, myval["sonar-fluxmod"] - myval["sonar-flux"]);
        var ecm = Math.max(0, myval["ecm-fluxmod"] - myval["ecm-flux"]);
        var eccm = Math.max(0, myval["eccm-fluxmod"] - myval["eccm-flux"]);
        var ed = Math.max(0, myval["ed-fluxmod"] - myval["ed-flux"]);
        var ecd = Math.max(0, myval["ecd-fluxmod"] - myval["ecd-flux"]);
        var total = sensor + sonar + ecm + eccm + ed + ecd;
        var maxflux = parseInt(myval["body"]) - parseInt(myval["ecd-enabled"]);
        if (total > maxflux) overload = 1;
        setAttrs({ "vehicle-fluxtotal": total, "vehicle-flux-max": maxflux, "vehicle-flux-overload": overload });
    });
});

on("change:vehicle-autonav change:autonav", function () {
    getAttrs(["vehicle-autonav", "autonav"], function (myval) {
        var autonav = 0;
        if (myval["vehicle-autonav"] == "0") autonav = 0;
        if (myval["vehicle-autonav"] == "1") autonav = myval["autonav"];
        setAttrs({ "driving-test-autonav": autonav });
    });
});
on("change:vehicle-offroad change:handling-street change:handling-offroad", function () {
    getAttrs(["vehicle-offroad", "handling-street", "handling-offroad"], function (myval) {
        var handling = 0;
        if (myval["vehicle-offroad"] == "0") handling = myval["handling-street"];
        if (myval["vehicle-offroad"] == "1") handling = myval["handling-offroad"];
        console.log('handling set to ' + handling);
        setAttrs({ "handling": handling });
    });
});

on("change:vehicle-size", function () {
    getAttrs(["vehicle-size"], function (myval) {
        var size = 0;
        if (myval["vehicle-size"] == "Large") size = 2;
        if (myval["vehicle-size"] == "Extra-Large") size = 3;
        setAttrs({ "driving-test-size": size });
    });
});

on("change:rigger", function () {
    getAttrs(["rigger"], function (myval) {
        var mydriver = "@{";
        mydriver = mydriver.concat(myval["rigger"]);
        mydriver = mydriver.concat("|");
        setAttrs({ "vehicle-driver": mydriver });
    });
});

on("sheet:opened change:vehicle-urban change:gunnery-test-los", function () {
    getAttrs(["vehicle-urban", "gunnery-test-los"], function (myval) {
        var sensorgun = (myval["vehicle-urban"] * 2) + myval["gunnery-test-los"];
        console.log('sensor gunnery tn mods' + sensorgun);
        setAttrs({ "sensor-gunnery-tn": sensorgun });
    });
});

on("change:speed-current change:speed-rating change:vehicle-penalty", function () {
    getAttrs(["speed-current", "speed-rating", "vehicle-penalty"], function (myval) {
        let speed = parseInt(myval["speed-current"]);
        let speedrating = parseInt(myval["speed-rating"]);
        var kph = Math.ceil(speedrating * 1.2);
        var sp = Math.floor(speed / 10);
        var exceed = 0;
        if (myval["vehicle-penalty"] == "2") speedrating = Math.ceil(speedrating * 0.75);
        if (myval["vehicle-penalty"] == "3") speedrating = Math.ceil(speedrating * 0.50);
        if (speed > speedrating) {
            exceed = 1;
        } else {
            exceed = 0;
        }
        let maxspeed = speedrating * 1.5;
        setAttrs({ "speed-points": sp, "speed-kph": kph, "speed-exceeding": exceed, "speed-max": maxspeed });
    });
});

on("sheet:opened change:vehicle-skill change:gunnery change:drone_mode change:pilot", function () {
    getAttrs(["gunnery", "pilot", "drone_mode", "vehicle-skill"], function (myval) {
        var mygunnery = myval["gunnery"];
        var myskill = myval["vehicle-skill"];
        if (myval["drone_mode"] == "secondary") {
            mygunnery = myval["pilot"];
            myskill = myval["pilot"];
        }
        console.log('setting weapon skill to gunnery');
        setAttrs({ "weaponskill": mygunnery, "vehicle-skill-final": myskill });
    });
});

on("sheet:opened change:rcdeck-intrusion-mods change:ewarfare", function () {
    getAttrs(["rcdeck-intrusion-mods", "ewarfare"], function (myval) {
        let myfinal = parseInt(myval["rcdeck-intrusion-mods"]) + parseInt(myval["ewarfare"]);
        setAttrs({ "rcdeck-intrusion-factor": myfinal });
    });
});

on("change:sensor-los", function () {
    const sensorlosmods = {
        direct: { sensor: -1, gunnery: -3 },
        interupted: { sensor: 0, gunnery: 0 }
    };
    getAttrs(["sensor-los"], function (myval) {
        var sets = {};
        const los = myval["sensor-los"].toLowerCase();
        console.log('los is: ' + los);
        sets["sensor-test-los"] = sensorlosmods[los]["sensor"];
        sets["gunnery-test-los"] = sensorlosmods[los]["gunnery"];
        console.log(sets);
        setAttrs(sets);
    });
});

on("change:vehicle-type", function () {
    getAttrs(["vehicle-type"], function (myval) {
        var vp = 0;
        if (myval["vehicle-type"] == "Car/Pickup Truck") vp = 0;
        if (myval["vehicle-type"] == "Fighter Jet") vp = 20;
        if (myval["vehicle-type"] == "Heavy Truck") vp = -5;
        if (myval["vehicle-type"] == "Helicopter") vp = 5;
        if (myval["vehicle-type"] == "Hovercraft") vp = 2;
        if (myval["vehicle-type"] == "HSCT/Suborbital") vp = -15;
        if (myval["vehicle-type"] == "Large Airplane") vp = -5;
        if (myval["vehicle-type"] == "LAV/T-bird") vp = 10;
        if (myval["vehicle-type"] == "Limousine/Light Truck/Van") vp = -3;
        if (myval["vehicle-type"] == "LTA/Zeppelin") vp = -10;
        if (myval["vehicle-type"] == "Motorcycle") vp = 5;
        if (myval["vehicle-type"] == "Racing Boat") vp = 5;
        if (myval["vehicle-type"] == "Semiballistic") vp = -25;
        if (myval["vehicle-type"] == "Small Airplane") vp = 0;
        if (myval["vehicle-type"] == "Small Motorboat") vp = 0;
        if (myval["vehicle-type"] == "Sports Car") vp = 3;
        if (myval["vehicle-type"] == "Tracked Vehicle") vp = -3;
        if (myval["vehicle-type"] == "Tractor Trailer") vp = -7;
        if (myval["vehicle-type"] == "Train/Monorail") vp = -10;
        if (myval["vehicle-type"] == "Ultra-light Aircraft") vp = 10;
        if (myval["vehicle-type"] == "Yacht") vp = -10;
        setAttrs({ "vehicle-points": vp });
    });
});

on("sheet:opened change:vcr", function () {
    getAttrs(["reaction", "vcr"], function (myval) {
        let myr = parseInt(myval["reaction"]) + (2 * parseInt(myval["vcr"]));
        let myi = 1 + parseInt(myval["vcr"]);
        setAttrs({ "vcr-reaction": myr, "vcr-initiative": myi });
    });
});

on("sheet:opened change:vehicle-interface", function () {
    getAttrs(["vehicle-interface"], function (myval) {
        const vi = myval["vehicle-interface"];
        var sets = {};
        const interfaces = {
            none: { react: 0, init: 0, action: 0, driving: 0 },
            datajack: { react: 1, init: 0, action: 0, driving: 1 },
            vcr: { react: "(@{vehicle-driver}vcr} * 2)", init: "@{vehicle-driver}vcr}", action: "(@{vehicle-driver}vcr} * 2)", driving: "@{vehicle-driver}vcr}" }
        };
        console.log('interfaces test: ' + interfaces[vi]["react"]);
        sets["vehicle-reactbonus"] = interfaces[vi]["react"]
        sets["vehicle-initbonus"] = interfaces[vi]["init"];
        sets["vehicle-actionbonus"] = interfaces[vi]["action"];
        sets["driving-test-interface"] = interfaces[vi]["driving"];
        console.log(sets);
        setAttrs(sets)
    });
});

on("sheet:opened change:weather", function () {
    getAttrs(["weather"], function (myval) {
        var sets = {};
        const weather = myval["weather"].toLowerCase();
        const weathermod = {
            normal: { driving: 0, sensor: 0 },
            bad: { driving: 2, sensor: 1 },
            terrible: { driving: 4, sensor: 1 },
            windy: { driving: 2, sensor: 0 },
            snow: { driving: 2, sensor: 1 },
            rain: { driving: 2, sensor: 1 },
            fog: { driving: 2, sensor: 1 },
            smog: { driving: 2, sensor: 1 },
            "heavy wind": { driving: 4, sensor: 0 },
            "thunderstorm": { driving: 4, sensor: 1 }
        };
        sets["driving-test-weather"] = weathermod[weather]["driving"];
        sets["sensor-test-weather"] = weathermod[weather]["sensor"];
        console.log(sets);
        setAttrs(sets);
    });
});

on("change:terrain", function () {
    sets = {};
    const terrainmods = {
        open: { driving: -1, sensor: 0, terrainpoints: 0, accelerate: -1, position: -1, ram: -1, hide: 4, relocate: -3, crash: -1, gunnery: 0 },
        normal: { driving: 0, sensor: 0, terrainpoints: -2, accelerate: 0, position: 0, ram: 0, hide: 2, relocate: -1, crash: 0, gunnery: 0 },
        restricted: { driving: 1, sensor: 0, terrainpoints: -4, accelerate: 1, position: 1, ram: 1, hide: 0, relocate: 0, crash: 2, gunnery: 2 },
        tight: { driving: 3, sensor: 1, terrainpoints: -10, accelerate: 3, position: 3, ram: 2, hide: -2, relocate: 3, crash: 4, gunnery: 3 }
    };
    getAttrs(["terrain"], function (myval) {
        const terrain = myval["terrain"].toLowerCase();
        sets["driving-test-terrain"] = terrainmods[terrain]["driving"];
        sets["sensor-test-terrain"] = terrainmods[terrain]["sensor"];
        sets["driving-ab-terrain"] = terrainmods[terrain]["accelerate"];
        sets["driving-position-terrain"] = terrainmods[terrain]["position"];
        sets["driving-ram-terrain"] = terrainmods[terrain]["ram"];
        sets["driving-hide-terrain"] = terrainmods[terrain]["hide"];
        sets["driving-relocate-terrain"] = terrainmods[terrain]["relocate"];
        sets["driving-crash-terrain"] = terrainmods[terrain]["crash"];
        sets["terrain-points"] = terrainmods[terrain]["terrainpoints"];
        sets["terrain-manual-gunnery"] = terrainmods[terrain]["gunnery"];
        console.log(sets);
        setAttrs(sets);
    });
});

on("clicked:vehicleset", function () {
    getAttrs(["vehicle-rapid-attributes"], function (myval) {
        const [hand, speed, accel, body, armor, sig, auto, pilot, sensor, cargo, load] = myval["vehicle-rapid-attributes"].split(" ")
        var [on, off] = hand.split("/");
        if (off == null) off = on;
        setAttrs({ "handling-street": on, "handling-offroad": off, "speed-rating": speed, "acceleration": accel, "body": body, "armor": armor, "signature": sig, "autonav": auto, "pilot": pilot, "sensors-rating": sensor, "cargo": cargo, "load": load });
        console.log('on is ' + on + ' off is ' + off)
    });

});


on("clicked:matrixsystemset", function () {
    getAttrs(["matrixsystemset"], function (myval) {
        setmatrixsystem(myval["matrixsystemset"]);
    });
});

var setmatrixsystem = function (rating) {
    console.log(rating);
    atts = [];
    const [mycode, myrating] = rating.split("-")
    console.log('mycode:' + mycode + ' myrating ' + myrating);
    let finalcode = mycode.toUpperCase()
    const [system, access, control, index, files, slave] = myrating.split("/")
    atts["character_name"] = rating;
    atts["matrixcode"] = finalcode;
    atts["matrixsecurityrating"] = system;
    atts["matrixcontrolrating"] = control;
    atts["matrixaccessrating"] = access;
    atts["matrixindexrating"] = index;
    atts["matrixfilesrating"] = files;
    atts["matrixslaverating"] = slave;
    console.log(atts);
    setAttrs(atts);
};

on("sheet:opened changed:api-newsheet", function () {
    getAttrs(["first_time"], function (myval) {
        if (myval.first_time != "false") {
            console.log('running firstime');
            updateWoundPenalty();
            updateStunPenalty();
            updatepools();
            updatePenalty("vehicle");
            updatePenalty("rccommand");
            updatePenalty("rcsystem");
            updatePenalty("rcsimsense");
            updatePenalty("matrix");
            setupdefaults();
            setattributelimits("Human")
            setAttrs({ first_time: "false" });
        }
    });
});

on("sheet:opened change:sorcery-spec-switch change:conjuring-spec-switch change:auraread-spec-switch change:sorcery change:conjuring change:aurareading", function () {
    getAttrs(["sorcery-spec-switch", "conjuring-spec-switch", "auraread-spec-switch", "sorcery", "conjuring", "aurareading"], function (myval) {
        if (parseInt(myval["sorcery-spec-switch"]) == 0) {
            setAttrs({ spellcasting: parseInt(myval.sorcery), spelldefense: parseInt(myval.sorcery), dispelling: parseInt(myval.sorcery), astralcombat: parseInt(myval.sorcery), ritualsorcery: parseInt(myval.sorcery) });
        }
        if (parseInt(myval["conjuring-spec-switch"]) == 0) {
            setAttrs({ summoning: parseInt(myval.conjuring), banishing: parseInt(myval.conjuring), spiritcontrol: parseInt(myval.conjuring) });
        }
        if (parseInt(myval["auraread-spec-switch"]) == 0) {
            setAttrs({ areadauras: parseInt(myval.aurareading), areadsignatures: parseInt(myval.aurareading), areadsorcery: parseInt(myval.aurareading), areadconjuring: parseInt(myval.aurareading) });
        }
    });
});


on("change:deck-spec-switch change:computer", function () {
    getAttrs(["deck-spec-switch", "computer"], function (myval) {
        console.log(myval);
        if (parseInt(myval["deck-spec-switch"]) == 0) {
            console.log('not specialized')
            setAttrs({ hardware: parseInt(myval.computer), decking: parseInt(myval.computer), programming: parseInt(myval.computer) });
        }
    });
});

const visionmods = {
    elf: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    dryad: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    nightone: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    wakyambi: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    ork: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    satyr: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    oni: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    hobgoblin: { normal: 0, fulldark: 8, minlight: 2, partiallight: 0, glare: 2, mist: 0, lightsmoke: 2, fullsmoke: 4, thermalsmoke: 4 },
    troll: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    minotaur: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    giant: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    fomori: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    dwarf: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    gnome: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    menehune: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    human: { normal: 0, fulldark: 8, minlight: 6, partiallight: 2, glare: 2, mist: 2, lightsmoke: 4, fullsmoke: 6, thermalsmoke: 4 },
    ogre: { normal: 0, fulldark: 8, minlight: 6, partiallight: 2, glare: 2, mist: 2, lightsmoke: 4, fullsmoke: 6, thermalsmoke: 4 },
    cyclops: { normal: 0, fulldark: 8, minlight: 6, partiallight: 2, glare: 2, mist: 2, lightsmoke: 4, fullsmoke: 6, thermalsmoke: 4 },
    koborokuru: { normal: 0, fulldark: 2, minlight: 2, partiallight: 1, glare: 2, mist: 0, lightsmoke: 0, fullsmoke: 0, thermalsmoke: 6 },
    lowlight: { normal: 0, fulldark: 8, minlight: 4, partiallight: 1, glare: 4, mist: 2, lightsmoke: 4, fullsmoke: 6, thermalsmoke: 4 },
    thermal: { normal: 0, fulldark: 4, minlight: 4, partiallight: 2, glare: 4, mist: 0, lightsmoke: 0, fullsmoke: 1, thermalsmoke: 8 },
    cybernetic: { normal: 0, fulldark: 8, minlight: 6, partiallight: 2, glare: 2, mist: 2, lightsmoke: 4, fullsmoke: 6, thermalsmoke: 4 },
    ultrasound: { normal: 0, fulldark: 4, minlight: 3, partiallight: 1, glare: 1, mist: 1, lightsmoke: 2, fullsmoke: 3, thermalsmoke: 2 }
};

on("change:metatype change:visionenhancement change:visibility", function () {
    getAttrs(["metatype", "visionenhancement", "visibility"], function (myval) {
        sets = {};
        const metatype = myval["metatype"].toLowerCase();
        const vision = myval["visionenhancement"].toLowerCase();
        const visattr = myval["visibility"];
        const visibility = (visattr == 0) ? "normal" : visattr.match(/{(.*)}/)[1];
        const rangedvizmods = (vision != "none") ? visionmods[vision][visibility] : visionmods[metatype][visibility];
        const meleevizmods = (rangedvizmods != 8) ? Math.floor(rangedvizmods / 2) : 8;
        sets["rangedvizTN"] = rangedvizmods;
        sets["meleevizTN"] = meleevizmods;
        console.log(sets);
        setAttrs(sets);
    });
});

on("change:metatype", function () {
    getAttrs(["metatype"], function (myval) {
        console.log(myval.metatype)
        setattributelimits(myval.metatype);
    });
});

on("change:body change:body-mods", function () {
    getAttrs(["body", "body-mods"], function (myval) {
        let final_body = parseInt(myval.body) + parseInt(myval["body-mods"])
        setAttrs({ body_max: final_body, bodymax: final_body })
    });
});
on("change:intelligence change:intelligence-mods", function () {
    getAttrs(["intelligence", "intelligence-mods"], function (myval) {
        let final_int = parseInt(myval.intelligence) + parseInt(myval["intelligence-mods"])
        setAttrs({ intelligence_max: final_int, intmax: final_int })
    });
});
on("change:willpower change:willpower-mods", function () {
    getAttrs(["willpower", "willpower-mods"], function (myval) {
        let final_will = parseInt(myval.willpower) + parseInt(myval["willpower-mods"])
        setAttrs({ willpower_max: final_will, willmax: final_will })
    });
});
on("change:charisma change:charisma-mods", function () {
    getAttrs(["charisma", "charisma-mods"], function (myval) {
        let final_char = parseInt(myval.charisma) + parseInt(myval["charisma-mods"])
        setAttrs({ charisma_max: final_char, charmax: final_char })
    });
});
on("change:quickness change:quickness-mods", function () {
    getAttrs(["quickness", "quickness-mods"], function (myval) {
        let final_quickness = parseInt(myval.quickness) + parseInt(myval["quickness-mods"])
        setAttrs({ quickness_max: final_quickness, agilitymax: final_quickness })
    });
});
on("change:strength change:strength-mods", function () {
    getAttrs(["strength", "strength-mods"], function (myval) {
        let final_str = parseInt(myval.strength) + parseInt(myval["strength-mods"])
        setAttrs({ strength_max: final_str, strmax: final_str })
    });
});

on("change:meleereach change:metatype", function () {
    getAttrs(["meleereach", "metatype"], function (myval) {
        var meleemods = 0;
        if (myval["metatype"] == "Troll") meleemods = 1;
        const meleemax = parseInt(myval["meleereach"]) + meleemods;
        setAttrs({ meleereach_max: meleemax });
    });
});

on("change:repeating_rangedweapons:reloadmethod change:repeating_rangedweapons:reloads change:repeating_rangedweapons:ammotype change:repeating_rangedweapons:ammoremain change:repeating_rangedweapons:ammo change:repeating_rangedweapons:type change:repeating_rangedweapons:weight change:repeating_rangedweapons:load", function (eventinfo) {
    getAttrs(["repeating_rangedweapons_reloadmethod", "repeating_rangedweapons_reloads", "repeating_rangedweapons_ammotype", "repeating_rangedweapons_ammoremain", "repeating_rangedweapons_ammo", "repeating_rangedweapons_type", "repeating_rangedweapons_weight", "repeating_rangedweapons_load"], function (myval) {
        console.log(myval);
        const sets = {};
        const wtype = myval["repeating_rangedweapons_type"];
        const myload = myval["repeating_rangedweapons_load"];
        const single = ["break", "magazine", "cylinder"];
        const multi = ["clip", "belt", "speed-loader"];
        const arrows = ["Bow", "Heavy Crossbow", "Light Crossbow", "Medium Crossbow"];
        const individual = ["Nets", "Shuriken", "Thrown Knife", "Caltrops"];
        const method = myval["repeating_rangedweapons_reloadmethod"];
        const reloads = parseInt(myval["repeating_rangedweapons_reloads"]);
        const type = myval["repeating_rangedweapons_ammotype"];
        const remaining = parseInt(myval["repeating_rangedweapons_ammoremain"]);
        const baseweight = parseFloat(myval["repeating_rangedweapons_weight"]);
        const max = parseInt(myval["repeating_rangedweapons_ammo"]);
        let reloadtotal = (single.includes(method)) ? reloads : reloads * max;
        var aweight = (arrows.includes(wtype)) ? .01 : (wtype == "Assault Cannon") ? .125 : (wtype == "Speargun") ? 1 : (type in ammomods) ? ammomods[type]["weight"] : .1;
        if (wtype == "Net Gun") {
            aweight = (type == "regular") ? 5 : (type in ammomods) ? ammomods[type]["weight"] : 5;
        }
        if ((wtype == "Gyrojet (land)") || (wtype == "Gyrojet (water)")) {
            aweight = (type == "regular") ? .175 : (type in ammomods) ? ammomods[type]["weight"] : .175;
        }

        console.log('aweight ' + aweight);
        var finalweight = (individual.includes(wtype)) ? remaining * baseweight : Number(((aweight * (remaining + reloadtotal))).toFixed(2));
        sets["repeating_rangedweapons_ammoweight"] = (individual.includes(wtype)) ? myload * remaining * baseweight : Number((myload * aweight * (remaining + reloadtotal)).toFixed(2));
        console.log(sets);
        setAttrs(sets);
    });
});

on("change:repeating_rangedweapons:firemode", function (eventinfo) {
    getAttrs(["repeating_rangedweapons_firemode", "repeating_rangedweapons_name", "repeating_rangedweapons_targeting"], function (myval) {
        const firemode = myval["repeating_rangedweapons_firemode"];
        const weapon = myval["repeating_rangedweapons_name"];
        const targeting = myval["repeating_rangedweapons_targeting"];
        var myroll = "/w gm &{template:info}{{character=@{character_name}}}{{type=Switched Weapon " + weapon + " to " + firemode + " firing mode }}";
        if (targeting == -2) myroll += "{{action=Free}}";
        else myroll += "{{action=" + lang["simple"] + "}}";
        startRoll(myroll, (results) => {
            finishRoll(results.rollId);
        });
    });
});
on("change:repeating_rangedweapons:primary-ranged-equipped change:repeating_rangedweapons:secondary-ranged-equipped", function (eventinfo) {
    const myweapon = eventinfo.sourceAttribute
    console.log(myweapon);
    setatts = [];
    var mybase = myweapon.split("_");
    var myattr = mybase.pop();
    const myrepeat = mybase.join('_');
    const r1equipped = myrepeat.concat("_primary-ranged-equipped");
    const r2equipped = myrepeat.concat("_secondary-ranged-equipped");
    getatts = [myweapon, r1equipped, r2equipped, "rangedselected", "ranged2selected"]
    getAttrs(getatts, function (myval) {
        console.log('myatt ' + myattr);
        console.log('values');
        console.log(myval);
        const lastused = myval["rangedselected"];
        const lastused2 = myval["ranged2selected"];
        if (myval[myweapon] == "on") {
            if (myattr == "primary-ranged-equipped") {
                console.log('in ranged1');
                if (myval[r2equipped] == "on") {
                    console.log('equipeed as secondary');
                    setatts[r2equipped] = 0;
                }
                setatts["rangedselected"] = myweapon;
                setatts[lastused] = 0;
            } else if (myattr == "secondary-ranged-equipped") {
                console.log('in ranged2');
                if (myval[r1equipped] == "on") {
                    console.log('equipeed as primary');
                    setatts[r1equipped] = 0;
                }
                setatts["ranged2selected"] = myweapon;
                setatts[lastused2] = 0;
                setatts["dualwield"] = 2;
            } else {
                console.log('wrong event for ' + myattr);
            }
            console.log(setatts);
        } else if (myval[myweapon] == 0) {
            console.log(' weapon unselected');
            if ((myattr == "primary-ranged-equipped") && (lastused == myweapon)) {
                setatts["rangedselected"] = "None";
            } else if ((myattr == "secondary-ranged-equipped") && (lastused2 == myweapon)) {
                setatts["ranged2selected"] = "None";
                setatts["dualwield"] = 0;
            }
        }
        setAttrs(setatts);
    });
});

on("change:repeating_meleeweapons:meleeequiped change:repeating_meleeweapons:2ndmeleeequiped change:unarmed-equipped change:weaponfocus-equipped", function (eventinfo) {
    const myweapon = eventinfo.sourceAttribute
    console.log(myweapon);
    setatts = [];
    var getatts = ["meleeselected"]
    if (myweapon == "unarmed-equipped") {
        console.log('defualt unarmed');
        getatts.push("unarmed-equipped");
        getAttrs(getatts, function (myval) {
            const ue = myval["unarmed-equipped"];
            console.log('ue: ' + ue);
            const m1 = myval["meleeselected"];
            if (ue == "on") {
                if (m1 != "unarmed-equipped") setatts[m1] = 0;
                setatts["meleeselected"] = "unarmed-equipped";
                setatts["meleereach"] = 0;
                setAttrs(setatts);
            }
        });
    } else if (myweapon == "weaponfocus-equipped") {
        console.log('weaponfocus');
        getatts.push("weaponfocus-equipped");
        getatts.push("weaponfocus-reach");
        getAttrs(getatts, function (myval) {
            const ue = myval["weaponfocus-equipped"];
            console.log('ue: ' + ue);
            const m1 = myval["meleeselected"];
            if (ue == "on") {
                if (m1 != "weaponfocus-equipped") setatts[m1] = 0;
                setatts["meleeselected"] = "weaponfocus-equipped";
                setatts["meleereach"] = myval["weaponfocus-reach"];
                setAttrs(setatts);
            }
        });

    } else {
        var mybase = myweapon.split("_");
        var myattr = mybase.pop();
        const myrepeat = mybase.join('_');
        const reach = myrepeat.concat("_reach");
        const m1equipped = myrepeat.concat("_meleeequiped");
        getatts.push(myweapon, reach, m1equipped);
        getAttrs(getatts, function (myval) {
            console.log('myatt ' + myattr);
            console.log('values');
            console.log(myval);
            const lastused = myval["meleeselected"];
            if (myval[myweapon] == "on") {
                if (myattr == "meleeequiped") {
                    console.log('in melee1');
                    setatts["meleeselected"] = myweapon;
                    setatts[lastused] = 0;
                    setatts["meleereach"] = myval[reach];
                } else {
                    console.log('wrong event for ' + myattr);
                }
                console.log(setatts);
            } else if (myval[myweapon] == 0) {
                console.log(' weapon unselected');
                if ((myattr == "meleeequiped") && (lastused == myweapon)) {
                    setatts["meleereach"] = 0;
                    setatts["meleeselected"] = "unarmed-equipped";
                    setatts["unarmed-equipped"] = "on";
                }
            }
            setAttrs(setatts);
        });
    }
});

on("change: change:repeating_meleeweapons:reach", function (eventinfo) {
    getAttrs(["repeating_meleeweapons_reach", "repeating_meleeweapons_meleeequiped"], function (myval) {
        if (myval.repeating_meleeweapons_meleeequiped == "on") {
            setAttrs({ meleereach: myval.repeating_meleeweapons_reach });
        }
    });
});

on("change:dermal-armor change:repeating_armor:equipped change:repeating_armor:ballistic change:repeating_armor:impact", function (eventinfo) {
    var sets = {};
    var ballistic = 0;
    var impact = 0;
    var armorval = { "body-bal": [0, 0], "body-im": [0, 0], "helmet-bal": [0], "helmet-im": [0], "shield-bal": [0], "shield-im": [0], "ware-bal": [0], "ware-im": [0], "gyro-bal": [0], "gyro-im": [0], "magic-bal": [0], "magic-im": [0] };
    fields = ["equipped", "ballistic", "impact", "slot"];
    getSectionIDs("repeating_armor", idArray => {
        var attrArray = idArray.reduce((m, id) => [...m, ...(fields.map(field => `repeating_armor_${id}_${field}`))], []);
        attrArray.push("quickness_max", "dermal-armor");
        getAttrs(attrArray, function (myval) {
            console.log('myval');
            console.log(myval);
            console.log(idArray);
            const myquick = parseInt(myval["quickness_max"]);
            const mydermal = parseInt(myval["dermal-armor"]);
            idArray.forEach(m => {
                if (myval["repeating_armor_" + m + "_equipped"] == "on") {
                    let bal = myval["repeating_armor_" + m + "_slot"] + "-bal";
                    let imp = myval["repeating_armor_" + m + "_slot"] + "-im";
                    armorval[bal].push(parseInt(myval["repeating_armor_" + m + "_ballistic"]));
                    armorval[imp].push(parseInt(myval["repeating_armor_" + m + "_impact"]));
                }
            });
            console.log(armorval);
            let shield_bal = Math.max(...armorval["shield-bal"]);
            let shield_im = Math.max(...armorval["shield-im"]);
            let gyro_bal = Math.max(...armorval["gyro-bal"]);
            let gyro_im = Math.max(...armorval["gyro-im"]);
            let helmet_bal = Math.max(...armorval["helmet-bal"]);
            let helmet_im = Math.max(...armorval["helmet-im"]);
            let ware_bal = armorval["ware-bal"].reduce((a, b) => a + b, 0);
            let ware_im = armorval["ware-im"].reduce((a, b) => a + b, 0);
            let magic_bal = Math.max(...armorval["magic-bal"]);
            let magic_im = Math.max(...armorval["magic-im"]);
            armorval["body-bal"].sort();
            armorval["body-im"].sort();
            let body_bal = armorval["body-bal"].pop() + Math.floor(armorval["body-bal"].pop() / 2);
            let body_im = armorval["body-im"].pop() + Math.floor(armorval["body-im"].pop() / 2);
            ballistic = body_bal + shield_bal + helmet_bal;
            impact = body_im + shield_im + helmet_im;
            let ballover = ballistic - myquick;
            let impactover = impact - myquick;
            if (ballover < 0) ballover = 0;
            if (impactover < 0) impactover = 0;
            let combatpen = -1 * (Math.floor((ballover + impactover) / 2));
            if (gyro_bal > 0) sets["gyro-on"] = 1;
            else sets["gyro-on"] = 0;
            if (((ballistic + impact) >= 1) || (mydermal == 1)) sets["armor-on"] = 1;
            else sets["armor-on"] = 0;
            sets["ballistic"] = ballistic + ware_bal + gyro_bal + magic_bal;
            sets["impact"] = impact + ware_im + gyro_im + magic_im;;
            sets["armor-quickness-pen"] = ballover;
            sets["armor-combatpool-pen"] = combatpen;
            console.log(sets);
            setAttrs(sets);

        });
    });
});


on("sheet:opened change:rangedvizTN change:meleevizTN change:cover change:move change:dualwield change:calledshot change:aim change:enemies change:friends change:meleetargets change:position change:misccombatmods change:stun_pen change:wound_pen change:manualgunneryTN change:rangedselected change:gryo-on", function () {
    updateRangeTNs();
    updateMeleeTNs();
});

on("change:gunnerymotion change:gunneryspeed change:gunnerymaneuver change:gunneryvehicledmg change:gunnerymount change:gunneryterrain change:gunnerytargettype", function () {
    updateManualGunneryTNs();
});

on("sheet:opened change:perception change:strength change:magic change:deck-mpcp-final change:willpower change:intelligence change:quickness change:charisma change:body change:frametype change:reaction change:vcr", function () {
    updatepools();
});

on("change:stun change:adeptpainres", function () {
    updateStunPenalty();
});

on("change:wounds change:adeptpainres", function () {
    updateWoundPenalty();
});

on("change:repeating_ic:ictype", function (eventinfo) {
    if (!("yes" in lang)) geti18n();
    console.log(eventinfo);
    var mybase = eventinfo["sourceAttribute"].split("_");
    var myattr = mybase.pop();
    const myrepeat = mybase.join('_');
    sets = {};
    const ictype = myrepeat + "_ictype"
    const ictarget = myrepeat + "_ictargettest"
    gets = [ictype];
    console.log(gets);
    attackic = ["Killer", "Blaster", "Sparky", "blackiclethal", "Scout", "cerebropathic", "psychotropic", "blackicnonlethal"]
    getAttrs(gets, function (myval) {
        console.log(gets);
        const mytype = myval[ictype];
        console.log(mytype);
        if (mytype == "Probe") sets[ictarget] = "@{target|" + lang["decker"] + "|deck-detection-final}";
        else if (attackic.includes(mytype)) sets[ictarget] = "Attack";
        else if ((mytype == "Tar Baby") || (mytype == "Tar pit")) sets[ictarget] = "?{" + lang["utility-rating"] + "?|4}";
        console.log(sets);
        setAttrs(sets);
    });
});

on("change:matrix-damage change:rccommand-damage change:rcsimsense-damage change:rcsystem-damage change:vehicle-damage change:repeating_ic:ic-damage", function (eventinfo) {
    let myattribute = ""
    console.log(eventinfo);
    if (eventinfo["sourceAttribute"].startsWith("repeating")) {
        console.log("found");
        myattribute = eventinfo["sourceAttribute"].split("-").slice(0, -1).join('-');
    } else {
        console.log("not");
        myattribute = eventinfo["sourceAttribute"].split("-")[0];
    }
    updatePenalty(myattribute);

});

on("change:sheettype", function () {
    getAttrs(["sheettype"], function (myval) {
        var myatts = {};
        const mysheet = myval["sheettype"];
        if ((mysheet == "Vehicle") || (mysheet == "Drone")) {
            myatts["sheettab"] = "vehicle-attr-tab";
        } else {
            myatts["sheettab"] = "character";
        }
        if ((mysheet == "Critter") || (mysheet == "Spirit")) myatts["gunneryswitch"] = "hide";
        if (mysheet == "Matrix") {
            myatts["iconstatuscode"] = 0;
            myatts["matrix-iconstatus"] = "Legitimate";
        }

        setAttrs(myatts);
    });
});

on("change:metatype change:quickness change:acceleration change:handling-street change:speed", function () {
    console.log('setting running and walking rates');
    getAttrs(["quickness_max", "metatype", "sheettype", "speed", "handling-street", "acceleration"], function (myval) {
        const atts = {};
        const vehicles = ["Vehicle", "Drone"];
        const metatype = myval["metatype"];
        const sheettype = myval["sheettype"];
        console.log('sheet type is: ' + myval["sheettype"]);
        atts["walk"] = mywalk = (vehicles.includes(sheettype)) ? myval["acceleration"] : parseInt(myval["quickness_max"]);
        atts["run"] = (vehicles.includes(sheettype)) ? Math.floor(parseInt(myval["speed"]) / parseInt(myval["handling-street"])) : mywalk * racemaximum[metatype]["run"];
        console.log(atts);
        setAttrs(atts);
    });
});


on("change:deck-dni change:intelligence_max change:reaction change:deck-asist change:deck-response change:deck-realityfilter", function () {
    getAttrs(["deck-dni", "intelligence_max", "reaction", "deck-response", "deck-asist", "deck-realityfilter"], function (myval) {
        var dnibonus = 0;
        var response = 0;
        var initiative = 1;
        if ((myval["deck-dni"] == "1") && (myval["deck-asist"] == "1")) {
            dnibonus = myval["intelligence_max"] + 2;
        } else if ((myval["deck-dni"] == "1") && (myval["deck-asist"] == "0")) {
            dnibonus = myval["intelligence_max"];
        } else {
            dnibonus = myval["reaction"];
        }
        if (myval["deck-asist"] == "1") {
            response = (dnibonus + (parseInt(myval["deck-response"]) * 2) + (parseInt(myval["deck-realityfilter"]) * 2));
            initiative += (parseInt(myval["deck-response"]) + parseInt(myval["deck-realityfilter"]));
        } else {
            response = dnibonus;
        }

        console.log('reaction:' + response);
        console.log('initiative:' + initiative);
        setAttrs({ "deck-reaction-final": response, "deck-initiative": initiative });
    });
});

on("change:spelldefense", function () {
    getAttrs(["sorcery", "spelldefense"], function (myval) {
        spd = parseInt(myval["spelldefense"]) - parseInt(myval["sorcery"]);
        if (spd < 0) spd = 0;
        setAttrs({ spelldefmin: spd });
    });
});

on("change:sorcery-defense change:spellpool-defense change:sorcery-used change:spellpool-used change:spelldefmin", function () {
    getAttrs(["sorcery-defense", "spellpool", "sorcery", "spellpool-defense", "spellpool-used", "sorcery-used", "spelldefmin"], function (myval) {
        atts = [];
        console.log('updating defense dice');
        var poolover = 0;
        var sorceryover = 0;
        let sorcery = parseInt(myval["sorcery"]);
        let pool = parseInt(myval["spellpool"]);
        let spd = parseInt(myval["spelldefmin"]);
        let md = parseInt(myval["spellpool-defense"]);
        let sd = parseInt(myval["sorcery-defense"]);
        let mpu = parseInt(myval["spellpool-used"]);
        let su = parseInt(myval["sorcery-used"]);
        let sorcerytotal = sd + su;
        let pooltotal = md + mpu;
        if (sorcerytotal > sorcery) sorceryover = 1;
        if (pooltotal > pool) poolover = 1;
        atts["sorcery-over"] = sorceryover;
        atts["spellpool-over"] = poolover;
        atts["spelldefensedice"] = spd + md + sd;
        atts["sorcery-used-total"] = sd + su;
        atts["spellpool-used-total"] = md + mpu;
        console.log(atts);
        setAttrs(atts);
    });

});

on("sheet:opened change:deck-masking-final change:decksleaze-rating-final", function () {
    getAttrs(["deck-masking-final", "decksleaze-rating-final"], function (myval) {
        console.log(myval["deck-masking-final"]);
        let mymask = parseInt(myval["deck-masking-final"]) || 0;
        let mysleaze = parseInt(myval["decksleaze-rating-final"]) || 0;
        let mydf = Math.ceil((mymask + mysleaze) / 2);
        setAttrs({ "deck-detection-max": mydf });
    });
});

on("sheet:opened change:reaction change:reaction-mods change:initiative-mods", function () {
    getAttrs(["reaction", "reaction-mods", "initiative-mods", "initiative"], function (myval) {
        myatts = {};
        myatts["reaction_max"] = parseInt(myval["reaction-mods"]) + parseInt(myval["reaction"]);
        myatts["initiative_max"] = parseInt(myval["initiative-mods"]) + parseInt(myval["initiative"]);
        setAttrs(myatts);
        console.log(myatts);
    });
});

console.log('loading explosive ranges');
const explosiveranges = {
    "Regular": { min: 0, short: "mystr * 3", "medium": "mystr * 5", long: "mystr * 10", extreme: "mystr * 20", scatter: 1, scatterredux: 2, skill: "@{throwing}" },
    "Aerodynamic": { min: 0, short: "mystr * 3", "medium": "mystr * 5", long: "mystr * 20", extreme: "mystr * 30", scatter: 2, scatterredux: 4, skill: "@{throwing}" },
    "Launcher": { min: 5, short: 50, medium: 100, long: 150, extreme: 300, scatter: 3, scatterredux: 4, skill: "@{launchers}" },
    "Other": { min: 0, short: 0, medium: 0, long: 0, extreme: 0, scatter: 0, scatterredux: 0, skill: "@{throwing}" },
    "O": { power: 10, damage: "S", blast: 1 },
    "D": { power: 10, damage: "S", blast: 0.5 },
    "C": { power: 12, damage: "M(stun)", blast: 1 }

};

on("change:strength_max", function () {
    getSectionIDs("explosives", function (idarray) {
        idarray.forEach((m, id) => {
            var myrepeat = "repeating_explosives_" + m;
            console.log('myrepeat: ' + myrepeat);
            updaeteexplosives(myrepeat);
        });
    });


});

on("change:hackingpool-icsuppress change:hackingpool-used change:hackingpool change:controlpool change:controlpool-used change:combatpool change:combatpool-used change:taskpool change:taskpool-used change:astralpool change:astralpool-used", function () {
    getAttrs(["hackingpool-used", "hackingpool-icsuppress", "hackingpool", "controlpool", "controlpool-used", "combatpool", "combatpool-used", "taskpool", "taskpool-used", "astralpool", "astralpool-used"], function (myval) {
        sets = { "hackingpool-over": 0, "controlpool-over": 0, "combatpool-over": 0, "astralpool-over": 0, "taskpool-over": 0 };
        hackusedic = parseInt(myval["hackingpool-icsuppress"]);
        hackused = parseInt(myval["hackingpool-used"]);
        hackpool = parseInt(myval["hackingpool"]);
        hackpoolfinal = hackused + hackusedic;
        sets["hackingpool-used-total"] = hackpoolfinal;
        controlused = parseInt(myval["controlpool-used"]);
        controlpool = parseInt(myval["controlpool"]);
        combatused = parseInt(myval["combatpool-used"]);
        combatpool = parseInt(myval["combatpool"]);
        taskused = parseInt(myval["taskpool-used"]);
        taskpool = parseInt(myval["taskpool"]);
        astralused = parseInt(myval["astralpool-used"]);
        astralpool = parseInt(myval["astralpool"]);
        console.log(myval);
        console.log('cu: ' + combatused);
        console.log('cp: ' + combatpool);
        if (taskused > taskpool) sets["taskpool-over"] = 1;
        if (astralused > astralpool) sets["astralpool-over"] = 1;
        if (combatused > combatpool) sets["combatpool-over"] = 1;
        if (controlused > controlpool) sets["controlpool-over"] = 1;
        if (hackpoolfinal > hackpool) sets["hackingpool-over"] = 1;
        console.log(sets);
        setAttrs(sets);
    });
});


on("change:repeating_explosives:exptype", function (eventinfo) {
    console.log(eventinfo)
    var mybase = eventinfo["sourceAttribute"].split("_");
    var myattr = mybase.pop();
    const myrepeat = mybase.join('_');
    console.log('mybase: ' + mybase + ' repeat: ' + myrepeat);
    updaeteexplosives(myrepeat);
})
var updaeteexplosives = function (repeatingattr) {
    const exptype = repeatingattr.concat("_exptype");
    var mygetatts = [exptype]
    mygetatts.push("strength_max");
    getAttrs(mygetatts, function (myval) {
        console.log(myval);
        console.log(exptype);
        console.log(repeatingattr);
        const mystr = parseInt(myval.strength_max)
        const etype = myval[exptype].split(":")
        console.log(etype)
        var atts = {};
        /* strenght based calcs */
        console.log('strenght is ' + mystr);
        atts[repeatingattr.concat("_min")] = explosiveranges[etype[0]]["min"];
        atts[repeatingattr.concat("_skill")] = explosiveranges[etype[0]]["skill"];
        atts[repeatingattr.concat("_short")] = eval(explosiveranges[etype[0]]["short"]);
        atts[repeatingattr.concat("_medium")] = eval(explosiveranges[etype[0]]["medium"]);
        atts[repeatingattr.concat("_long")] = eval(explosiveranges[etype[0]]["long"]);
        atts[repeatingattr.concat("_extreme")] = eval(explosiveranges[etype[0]]["extreme"]);
        atts[repeatingattr.concat("_scatter")] = explosiveranges[etype[0]]["scatter"];
        atts[repeatingattr.concat("_scatterredux")] = explosiveranges[etype[0]]["scatterredux"];
        atts[repeatingattr.concat("_power")] = explosiveranges[etype[1]]["power"];
        atts[repeatingattr.concat("_damage")] = explosiveranges[etype[1]]["damage"];
        atts[repeatingattr.concat("_blast")] = explosiveranges[etype[1]]["blast"];
        console.log('setting repeating explosive atts: ');
        console.log(atts);
        setAttrs(atts);
    });
};

on("sheet:opened change:combatpool-mods change:armor-combatpool-pen change:combatpool-base change:spellpool-mods change:spellpool-base change:hackingpool-mods change:hackingpool-base change:controlpool-mods change:controlpool-base change:astralpool-mods change:astralpool-base change:gyro-on", function () {
    sets = {};
    atts = ["combatpool-mods", "combatpool-base", "armor-combatpool-pen", "spellpool-mods", "spellpool-base", "hackingpool-mods", "hackingpool-base", "controlpool-mods", "controlpool-base", "astralpool-mods", "astralpool-base", "gyro-on"]
    getAttrs(atts, function (myval) {
        console.log('pool setup atts');
        console.log(myval);
        if (myval["gyro-on"] == 1) sets["combatpool"] = Math.floor((parseInt(myval["combatpool-mods"]) + parseInt(myval["combatpool-base"]) + parseInt(myval["armor-combatpool-pen"])) / 2);
        else sets["combatpool"] = parseInt(myval["combatpool-mods"]) + parseInt(myval["combatpool-base"]) + parseInt(myval["armor-combatpool-pen"]);
        sets["spellpool"] = parseInt(myval["spellpool-mods"]) + parseInt(myval["spellpool-base"]);
        sets["hackingpool"] = parseInt(myval["hackingpool-mods"]) + parseInt(myval["hackingpool-base"]);
        sets["controlpool"] = parseInt(myval["controlpool-mods"]) + parseInt(myval["controlpool-base"]);
        sets["hackingpool"] = parseInt(myval["hackingpool-mods"]) + parseInt(myval["hackingpool-base"]);
        sets["astralpool"] = parseInt(myval["astralpool-mods"]) + parseInt(myval["astralpool-base"]);
        setAttrs(sets);
        console.log(sets);
    });
});


var updatepools = function () {
    getAttrs(["strength_max", "magic", "deck-mpcp-final", "perception", "willpower_max", "intelligence_max", "quickness_max", "charisma_max", "body_max", "frametype", "reaction", "vcr", "sheettype"], function (myval) {
        var myatts = {}
        var myvcr = parseInt(myval.vcr);
        var myperception = parseInt(myval.perception) || 0;
        var myreact = parseInt(myval.reaction);
        var mymagic = parseInt(myval.magic);
        var mympcp = parseInt(myval["deck-mpcp-final"]);
        var myagil = parseInt(myval.quickness_max);
        var mystr = parseInt(myval.strength_max);
        var mywill = parseInt(myval.willpower_max);
        var myint = parseInt(myval.intelligence_max);
        var mychar = parseInt(myval.charisma_max);
        var mybody = parseInt(myval.body_max);
        console.log('combat pool agil ' + myagil + ' int ' + Math.max(myint, myperception) + ' will ' + mywill);
        myatts["combatpool-base"] = Math.floor((myagil + Math.max(myint, myperception) + mywill) / 2);

        if (myval.sheettype != "Spirit") myatts["reaction"] = Math.floor((myagil + myint) / 2);
        if (mymagic > 0) {
            console.log("magic is not 0");
            myatts["spellpool-base"] = Math.floor((mymagic + myint + mywill) / 3);
            myatts["astralpool-base"] = Math.floor((mychar + mywill + myint) / 2);
            myatts["astralreaction"] = (20 + myval.intelligence_max);
        } else if (myval.sheettype == "Spirit") {
            myatts["spellpool-base"] = 0;
            myatts["astralpool-base"] = 0;
        } else {
            myatts["spellpool-base"] = 0;
            myatts["astralpool-base"] = 0;
            myatts["astralreaction"] = 0;
        }
        if (mympcp > 0) {
            myatts["hackingpool-base"] = Math.floor((mympcp + myint) / 3);
        } else {
            myatts["hackingpool-base"] = 0;
        }
        if (myval.frametype == "Smart Frame") {
            myatts["hackingpool-base"] = 0;
        }
        if (myvcr > 0) {
            myatts["controlpool-base"] = myreact + (2 * myvcr);
        } else {
            myatts["controlpool-base"] = 0;
        }
        console.log('setting update pool');
        console.log(myatts);
        setAttrs(myatts);
    });
};

var setupdefaults = function () {
    setAttrs({ targetMove: -1, charisma_max: 1, strength_max: 1, willpower_max: 1, body_max: 1, quickness_max: 1, intelligence_max: 1, attr_rangedTN: 0, attr_meleeTN: 0, attr_misccombatmods: 0, signature: 4 })
};

var updatePenalty = function (attribute) {
    console.log('calculating penalty for ' + attribute)
    let myatt = attribute.concat("-damage");
    let mypen = attribute.concat("-penalty");
    getAttrs([myatt], function (myval) {
        sets = {};
        console.log('dmg ' + myval[myatt]);
        console.log('pen ' + mypen);
        var penalty = 0;
        var dmg = parseInt(myval[myatt]);
        if (dmg > 10) penalty = 4;
        else if (dmg > 5) penalty = 3;
        else if (dmg > 2) penalty = 2;
        else if (dmg > 0) penalty = 1;
        sets[mypen] = penalty;
        console.log(sets);
        setAttrs(sets);
    });
};

var updateWoundPenalty = function () {
    getAttrs(["wounds", "adeptpainres"], function (v) {
        var penalty = 0;
        var wounds = parseInt(v.wounds);
        var res = parseInt(v.adeptpainres);
        if (wounds > res) {
            if (wounds > 10) penalty = 4;
            else if (wounds > 5) penalty = 3;
            else if (wounds > 2) penalty = 2;
            else if (wounds > 0) penalty = 1;
        }
        setAttrs({ "wound_pen": penalty });
    });
};

var updateStunPenalty = function () {
    getAttrs(["stun", "adeptpainres"], function (v) {
        var penalty = 0;
        var stun = parseInt(v.stun);
        var res = parseInt(v.adeptpainres);
        if (stun > res) {
            if (stun > 10) penalty = 100;
            else if (stun > 5) penalty = 3;
            else if (stun > 2) penalty = 2;
            else if (stun > 0) penalty = 1;
        }
        setAttrs({ "stun_pen": penalty });
    });
};
console.log('loading racial maxes');
const racemaximum = {
    "Human": { B: 6, Q: 6, S: 6, C: 6, I: 6, W: 6, Bm: 9, Qm: 9, Sm: 9, Cm: 9, Im: 9, Wm: 9, run: 3 },
    "Elf": { B: 6, Q: 7, S: 6, C: 8, I: 6, W: 6, Bm: 9, Qm: 11, Sm: 9, Cm: 12, Im: 9, Wm: 9, run: 3 },
    "Dwarf": { B: 7, Q: 6, S: 8, C: 6, I: 6, W: 7, Bm: 11, Qm: 9, Sm: 12, Cm: 9, Im: 9, Wm: 11, run: 2 },
    "Ork": { B: 9, Q: 6, S: 8, C: 5, I: 5, W: 6, Bm: 14, Qm: 9, Sm: 12, Cm: 8, Im: 8, Wm: 9, run: 3 },
    "Troll": { B: 11, Q: 5, S: 10, C: 4, I: 4, W: 6, Bm: 17, Qm: 8, Sm: 15, Cm: 6, Im: 6, Wm: 9, run: 3 },
    "Cyclops": { B: 11, Q: 5, S: 12, C: 4, I: 4, W: 6, Bm: 17, Qm: 8, Sm: 18, Cm: 6, Im: 6, Wm: 9, run: 3 },
    "Fomori": { B: 10, Q: 5, S: 9, C: 6, I: 4, W: 6, Bm: 15, Qm: 8, Sm: 14, Cm: 9, Im: 6, Wm: 9, run: 3 },
    "Giant": { B: 11, Q: 5, S: 11, C: 4, I: 4, W: 6, Bm: 17, Qm: 8, Sm: 17, Cm: 6, Im: 6, Wm: 9, run: 3 },
    "Minotaur": { B: 10, Q: 5, S: 9, C: 5, I: 5, W: 6, Bm: 15, Qm: 8, Sm: 14, Cm: 8, Im: 8, Wm: 9, run: 3 },
    "Hobgoblin": { B: 8, Q: 6, S: 8, C: 5, I: 6, W: 6, Bm: 12, Qm: 9, Sm: 12, Cm: 8, Im: 9, Wm: 9, run: 3 },
    "Oni": { B: 8, Q: 6, S: 8, C: 5, I: 5, W: 7, Bm: 12, Qm: 9, Sm: 12, Cm: 8, Im: 8, Wm: 11, run: 3 },
    "Ogre": { B: 9, Q: 6, S: 8, C: 6, I: 5, W: 6, Bm: 14, Qm: 9, Sm: 12, Cm: 9, Im: 8, Wm: 9, run: 3 },
    "Satyr": { B: 9, Q: 5, S: 8, C: 5, I: 5, W: 7, Bm: 14, Qm: 8, Sm: 12, Cm: 8, Im: 8, Wm: 11, run: 4 },
    "Menehune": { B: 8, Q: 6, S: 7, C: 6, I: 6, W: 7, Bm: 12, Qm: 9, Sm: 11, Cm: 9, Im: 9, Wm: 11, run: 2 },
    "Koborokuru": { B: 7, Q: 6, S: 8, C: 6, I: 6, W: 7, Bm: 11, Qm: 9, Sm: 12, Cm: 9, Im: 9, Wm: 11, run: 3 },
    "Gnome": { B: 7, Q: 6, S: 7, C: 6, I: 6, W: 8, Bm: 11, Qm: 9, Sm: 11, Cm: 9, Im: 9, Wm: 12, run: 2 },
    "Wakyambi": { B: 6, Q: 6, S: 6, C: 8, I: 6, W: 7, Bm: 9, Qm: 9, Sm: 9, Cm: 12, Im: 9, Wm: 11, run: 3 },
    "Nightone": { B: 6, Q: 8, S: 6, C: 8, I: 6, W: 6, Bm: 9, Qm: 12, Sm: 9, Cm: 12, Im: 9, Wm: 9, run: 3 },
    "Dryad": { B: 5, Q: 7, S: 5, C: 9, I: 6, W: 6, Bm: 8, Qm: 11, Sm: 8, Cm: 14, Im: 9, Wm: 9, run: 3 }
};

var setattributelimits = function (metatype) {
    console.log("setting racial limits based on metatype: " + metatype)
    var atts = {};
    atts["rbodymod"] = racemaximum[metatype]["B"];
    atts["rbodymax"] = racemaximum[metatype]["Bm"];
    atts["rquickmod"] = racemaximum[metatype]["Q"];
    atts["rquickmax"] = racemaximum[metatype]["Qm"];
    atts["rstrmod"] = racemaximum[metatype]["S"];
    atts["rstrmax"] = racemaximum[metatype]["Sm"];
    atts["rchamod"] = racemaximum[metatype]["C"];
    atts["rchamax"] = racemaximum[metatype]["Cm"];
    atts["rintmod"] = racemaximum[metatype]["I"];
    atts["rintmax"] = racemaximum[metatype]["Im"];
    atts["rwillmod"] = racemaximum[metatype]["W"];
    atts["rwillmax"] = racemaximum[metatype]["Wm"];
    console.log(atts);
    setAttrs(atts);
};

var updateMeleeTNs = function () {
    getAttrs(["meleevizTN", "cover", "move", "dualwield", "calledshot", "aim", "enemies", "friends", "meleetargets", "position", "misccombatmods", "stun_pen", "wound_pen"], function (myval) {
        console.log("updateMeleeTN")
        console.log(myval);
        targetNumberMelee = parseInt(myval.calledshot) + parseInt(myval.meleevizTN) + parseInt(myval.enemies) - parseInt(myval.friends) + parseInt(myval.misccombatmods) + (2 * parseInt(myval.meleetargets)) - parseInt(myval.position) + parseInt(myval.stun_pen) + parseInt(myval.wound_pen);
        console.log('meleeTN ' + targetNumberMelee)
        setAttrs({ meleeTN: targetNumberMelee });
    });
};

var updateRangeTNs = function () {
    getAttrs(["rangedvizTN", "cover", "move", "dualwield", "calledshot", "aim", "enemies", "friends", "meleetargets", "position", "misccombatmods", "stun_pen", "wound_pen", "manualgunneryTN", "rangedselected", "gyro-on", "sheettype"], function (myval) {
        console.log(myval);
        moreatts = ["rangedselected"];
        const gyroon = parseInt(myval["gyro-on"]);
        const sheettype = myval["sheettype"];
        var rselect = "None";
        if ((myval["rangedselected"] != "None") && (myval["gyro-on"] == 1)) {
            let mybase = myval["rangedselected"].split("_");
            const myattr = mybase.pop();
            const myrepeat = mybase.join('_');
            rselect = myrepeat + "_gyro";
            moreatts.push(rselect);
        }
        getAttrs(moreatts, function (mygyro) {
            const gyro = (rselect == "None") ? 0 : parseInt(mygyro[rselect]) * gyroon;
            console.log('gyro val ' + gyro);
            var sets = {};
            console.log('updating ranged tn');
            const move = parseInt(myval.move);
            const called = parseInt(myval.calledshot);
            const viz = parseInt(myval.rangedvizTN);
            const cover = parseInt(myval.cover);
            const dual = parseInt(myval.dualwield);
            const enemies = parseInt(myval.enemies);
            const aim = parseInt(myval.aim);
            const misc = parseInt(myval.misccombatmods);
            const stun = parseInt(myval.stun_pen);
            const wound = parseInt(myval.wound_pen);
            const gunnery = parseInt(myval.manualgunneryTN);
            const movepen = ((move - gyro) < 0) ? 0 : move - gyro;
            console.log('movepen ' + movepen);
            targetNumberRange = called + viz + cover + dual + (2 * enemies) - aim + misc + stun + wound + gunnery + movepen;
            mytargetMove = (move == 0) ? -1 : (move == 4) ? 2 : (move == 6) ? 2 : 0;
            sets["rangedTN"] = targetNumberRange;
            sets["targetMove"] = mytargetMove;
            console.log(sets);
            setAttrs(sets);
        });

    });
};

var updateManualGunneryTNs = function () {
    getAttrs(["gunnerymotion", "gunneryspeed", "gunnerymaneuver", "gunneryvehicledmg", "gunnerymount", "gunneryterrain", "gunnerytargettype"], function (myval) {
        console.log("updateGunneryTN")
        targetNumberGunnery = parseInt(myval.gunnerymotion) + parseInt(myval.gunneryspeed) + parseInt(myval.gunnerymaneuver) + parseInt(myval.gunneryvehicledmg) + parseInt(myval.gunnerymount) + parseInt(myval.gunneryterrain) + parseInt(myval.gunnerytargettype)
        console.log(targetNumberGunnery)
        setAttrs({ manualgunneryTN: targetNumberGunnery });

    });
};

on("change:repeating_spells:range change:repeating_spells:spellcategory", function (myval) {
    if (!("yes" in lang)) geti18n();
    getAttrs(["repeating_spells_spellcategory", "repeating_spells_range"], function (myval) {
        const spellcategory = myval["repeating_spells_spellcategory"];
        const range = myval["repeating_spells_range"];
        console.log(spellcategory)
        console.log(range)
        atts = [];
        if (spellcategory == "Elemental") {
            atts["repeating_spells_target"] = "@{target|" + lang["target"] + "|targetMove}";
            console.log(atts);
            setAttrs(atts);
        }
    });
});



const spirits = {
    "watcher":
    {
        B: "(F)", Q: "(F)", S: "(F)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F)",
        astral_init: "(F + 20)", init: 0, attackpower: "(F)", attackdmg: "L(stun)", reach: 0,
        powers: ["Air Cover", "Alarm", "Attack Dog", "Bug", "Courier", "Irritant"]
    },
    "airelemental":
    {
        B: "( F - 2 )", Q: "(( F + 3)*4)", S: "( F - 3)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 2)",
        astral_init: "(F + 20)", init: "(F + 12)", attackpower: 0, attackdmg: "L", reach: 0,
        powers: ["Engulf", "Materialization", "Movement", "Noxious Breath", "Psychokinesis"],
        weaknesses: ["airtight seals", "Vulnerability (Earth)"]
    },
    "earthelemental":
    {
        B: "( F + 4 )", Q: "((F - 2) * 2)", S: "( F + 4)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 2)",
        astral_init: "(F + 20 )", init: "(F + 8 )", attackpower: "(F+4)", attackdmg: "S", reach: 0,
        powers: ["Engulf", "Materialization", "Movement"],
        weaknesses: ["Vulnerability (Air)"]
    },
    "fireelemental":
    {
        B: "( F + 1 )", Q: "((F + 2) * 3)", S: "( F - 2)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 1)",
        astral_init: "(F + 20 )", init: "(F + 11 )", attackpower: "(F-2)", attackdmg: "M", reach: 1,
        powers: ["Engulf", "Flame Aura", "Guard", "Materialization", "Innate Spell (Flamethrower)"],
        weaknesses: ["Vulnerability (Water)"]
    },
    "waterelemental":
    {
        B: "( F + 2 )", Q: "(F * 2)", S: "(F)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 1)",
        astral_init: "(F + 20 )", init: "(F + 11 )", attackpower: "(F)", attackdmg: "S(stun)", reach: 0,
        powers: ["Engulf", "Materialization", "Movement"],
        weaknesses: ["Vulnerability (Fire)"]
    },
    "cityspirit": {
        B: "( F + 1 )", Q: "((F + 2) * 3)", S: "(F - 2 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 1)",
        astral_init: "(F + 20 )", init: "(F + 11 )", attackpower: "(F - 2)", attackdmg: "M", reach: 0,
        powers: ["Accident", "Concealment", "Confusion", "Fear", "Guard", "Materialization", "Search"]
    },
    "fieldspirit": {
        B: "( F + 1 )", Q: "((F + 2) * 3)", S: "(F - 2 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 1)",
        astral_init: "(F + 20 )", init: "(F + 11 )", attackpower: "(F - 2)", attackdmg: "M", reach: 0,
        powers: ["Accident", "Concealment", "Guard", "Materialization", "Search"]
    },
    "hearthspirit": {
        B: "( F + 1 )", Q: "((F + 2) * 3)", S: "(F - 2 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 1)",
        astral_init: "(F + 20 )", init: "(F + 11 )", attackpower: "(F - 2)", attackdmg: "M", reach: 0,
        powers: ["Accident", "Concealment", "Confusion", "Guard"]
    },

    "desertspirit": {
        B: "( F + 4 )", Q: "((F - 2) * 2)", S: "(F + 4 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 2)",
        astral_init: "(F + 20 )", init: "(F + 8 )", attackpower: "(F + 4)", attackdmg: "S", reach: 0,
        powers: ["Concealment", "Guard", "Materialization", "Movement", "Search"]
    },
    "forestspirit": {
        B: "( F + 4 )", Q: "((F - 2) * 2)", S: "(F + 4 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 2)",
        astral_init: "(F + 20 )", init: "(F + 8 )", attackpower: "(F + 4)", attackdmg: "S", reach: 0,
        powers: ["Accident", "Concealment", "Confusion", "Fear", "Guard", "Materialization"]
    },
    "mountainspirit": {
        B: "( F + 4 )", Q: "((F - 2) * 2)", S: "(F + 4 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 2)",
        astral_init: "(F + 20 )", init: "(F + 8 )", attackpower: "(F + 4)", attackdmg: "S", reach: 0,
        powers: ["Accident", "Concealment", "Guard", "Materialization", "Movement", "Search"]
    },
    "prairiespirit": {
        B: "( F + 4 )", Q: "((F - 2) * 2)", S: "(F + 4 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 2)",
        astral_init: "(F + 20 )", init: "(F + 8 )", attackpower: "(F + 4)", attackdmg: "S", reach: 0,
        powers: ["Accident", "Concealment", "Guard", "Materialization", "Movement", "Search"]
    },
    "mistspirit": {
        B: "( F - 2 )", Q: "((F + 3) * 4)", S: "(F - 3 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 2)",
        astral_init: "(F + 20 )", init: "(F + 12 )", attackpower: "(F - 3)", attackdmg: "M(stun)", reach: 0,
        powers: ["Accident", "Concealment", "Confusion", "Guard", "Materialization", "Movement"]
    },
    "stormspirit": {
        B: "( F - 2 )", Q: "((F + 3) * 4)", S: "(F - 3 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 2)",
        astral_init: "(F + 20 )", init: "(F + 12 )", attackpower: "(F - 3)", attackdmg: "M(stun)", reach: 0,
        powers: ["Concealment", "Confusion", "Fear", "Materialization", "Innate Spell (Lightning Bolt)"]
    },
    "windspirit": {
        B: "( F - 2 )", Q: "((F + 3) * 4)", S: "(F - 3 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 2)",
        astral_init: "(F + 20 )", init: "(F + 12 )", attackpower: 0, attackdmg: "L", reach: 0,
        powers: ["Accident", "Confusion", "Guard", "Materialization", "Movement", "Search"]
    },
    "lakespirit": {
        B: "( F + 2 )", Q: "(F * 2)", S: "(F)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 1)",
        astral_init: "(F + 20 )", init: "(F + 9 )", attackpower: "(F)", attackdmg: "S(stun)", reach: 0,
        powers: ["Accident", "Engulf", "Fear", "Guard", "Materialization", "Movement", "Search"]
    },
    "riverspirit": {
        B: "( F + 2 )", Q: "(F * 2)", S: "(F)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 1)",
        astral_init: "(F + 20 )", init: "(F + 9 )", attackpower: "(F)", attackdmg: "S(stun)", reach: 0,
        powers: ["Accident", "Concealment", "Engulf", "Fear", "Guard", "Materialization", "Movement", "Search"]
    },
    "seaspirit": {
        B: "( F + 2 )", Q: "(F * 2)", S: "(F)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 1)",
        astral_init: "(F + 20 )", init: "(F + 9 )", attackpower: "(F)", attackdmg: "S(stun)", reach: 0,
        powers: ["Accident", "Concealment", "Confusion", "Engulf", "Fear", "Guard", "Materialization", "Movement", "Search"]
    },

    "gnome": {
        B: "( F + 4 )", Q: "((F - 2) * 2)", S: "(F + 4 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F - 2)",
        astral_init: "(F + 20 )", init: "(F + 8 )", attackpower: "(F + 4)", attackdmg: "S", reach: 1,
        powers: ["Concealment", "Engulf", "Fear", "Guard", "Materialization", "Magical Guard"],
        weaknesses: ["Vulnerability (Air)"]
    },
    "manitous": {
        B: "( F + 3 )", Q: "(F * 2)", S: "(F + 1 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F)",
        astral_init: "(F + 20 )", init: "(F + 10 )", attackpower: "(F + 3)", attackdmg: "S", reach: 1,
        powers: ["Accident", "Concealment", "Confusion", "Engulf", "Fear", "Guard", "Materialization", "Magical Guard"]
    },
    "salamander": {
        B: "( F + 1 )", Q: "(( F + 2) * 3)", S: "(F - 2 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 1)",
        astral_init: "(F + 20 )", init: "(F + 10 )", attackpower: "(F - 2)", attackdmg: "M", reach: 0,
        powers: ["Engulf", "Flame Aura", "Immunity (Fire)", "Guard", "Materialization", "Innate Spell (Flamethrower)", "Magical Guard", "Psychokinesis"],
        weaknesses: ["Vulnerability (Water)"]
    },
    "sylph": {
        B: "( F - 2 )", Q: "(( F + 3) * 4)", S: "(F - 3 )", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F + 2)",
        astral_init: "(F + 20 )", init: "(F + 12 )", attackpower: "(F - 3)", attackdmg: "M(stun)", reach: 0,
        powers: ["Concealment", "Confusion", "Engulf", "Guard", "Materialization", "Magical Guard", "Movement", "Psychokinesis"],
        weaknesses: ["Vulnerability (Earth)"]
    },
    "ancestor": {
        B: "( F + 2 )", Q: "(F * 3)", S: "(F + 1)", C: "(F)", I: "(F)", W: "(F)", E: "(F)", R: "(F)",
        astral_init: "(F + 20 )", init: "(F + 10 )", attackpower: "(F + 1)", attackdmg: "M(stun)", reach: 0,
        powers: ["Accident", "Divination", "Guard", "Materialization", "Search"]
    }
}
const spiritatts = ["body", "quickness", "strength", "charisma", "willpower", "intelligence", "perception", "reaction", "initiative", "attacks", "force", "reach"];

on("change:spirit-type change:force", function () {
    getAttrs(["spirit-type", "sheettype", "force"], function (myval) {
        var atts = {};
        const sheettype = myval["sheettype"];
        const spirittype = myval["spirit-type"];
        const F = parseInt(myval["force"]);
        if (sheettype != "Spirit") {
            console.log('not a spirit');
        } else {
            console.log('setting spirit attributes based on type and force');
            if (spirittype == "Watcher") {
                atts["initiative"] = 0;
                atts["initiative-mods"] = 1;
            } else {
                atts["initiative"] = 1;
                atts["initiative-mods"] = 0;
            }
            atts["body"] = eval(spirits[spirittype]["B"]);
            atts["quickness"] = eval(spirits[spirittype]["Q"]);
            atts["strength"] = eval(spirits[spirittype]["S"]);
            atts["charisma"] = eval(spirits[spirittype]["C"]);
            atts["intelligence"] = eval(spirits[spirittype]["I"]);
            atts["perception"] = eval(spirits[spirittype]["I"]);
            atts["willpower"] = eval(spirits[spirittype]["W"]);
            atts["essence"] = eval(spirits[spirittype]["E"]);
            atts["reaction"] = eval(spirits[spirittype]["R"]);
            atts["spirit-initp"] = eval(spirits[spirittype]["init"]);
            atts["astralreaction"] = eval(spirits[spirittype]["astral_init"]);
            atts["attackpower"] = eval(spirits[spirittype]["attackpower"]);
            atts["attackdamage"] = spirits[spirittype]["attackdmg"];
            atts["ballistic"] = F * 2;
            atts["impact"] = F * 2;

            const powers = spirits[spirittype]["powers"];
            console.log(atts);
            getSectionIDs("critter-powers", function (idarray) {
                idarray.forEach(id => {
                    removeRepeatingRow("repeating_critter-powers_" + id);
                });
            });
            getSectionIDs("critter-weaknesses", function (idarray) {
                idarray.forEach(id => {
                    removeRepeatingRow("repeating_critter-weaknesses_" + id);
                });
            });
            if (spirits[spirittype]["weaknesses"]) {
                const weaknesses = spirits[spirittype]["weaknesses"];
                weaknesses.forEach(weak => {
                    var newrowid = generateRowID();
                    atts["repeating_critter-weaknesses_" + newrowid + "_name"] = weak;
                });
            };
            if (spirits[spirittype]["powers"]) {
                const powers = spirits[spirittype]["powers"];
                powers.forEach(power => {
                    var newrowid = generateRowID();
                    atts["repeating_critter-powers_" + newrowid + "_name"] = power;
                });
            };
            console.log('setting atts ');
            console.log(JSON.stringify(atts));
            setAttrs(atts);

        }

    });
})

on("remove:repeating_foci change:repeating_foci", function (eventinfo) {
    const attribs = ["category", "force", "type"];
    console.log(eventinfo);
    mytrigger = eventinfo["triggerName"];
    console.log('mytrigger ' + mytrigger);
    atts = [];

    if (mytrigger == "remove:repeating_foci") {
        myrepeat = eventinfo["sourceAttribute"];
        myattrib = "remove";
    } else {
        mybase = eventinfo["sourceAttribute"].split("_");
        myattrib = mybase.pop();
        myrepeat = mybase.join('_');
    }
    if (myattrib == "remove") {
        let cat = eventinfo["removedInfo"][myrepeat.concat("_category")];
        let type = eventinfo["removedInfo"][myrepeat.concat("_type")];
        if (type == "power") atts["power-focus"] = 0;
        else if (type == "spirit") atts[cat] = 0;
        else if (type == "expendable") atts["exp-" + cat] = 0;
        else if (type == "reusable") atts["reusable-" + cat] = 0;
        else return;
        console.log(atts);
        setAttrs(atts);
    } else if (myattrib != "qty") {
        gets = [];
        gets.push(myrepeat.concat("_category"));
        gets.push(myrepeat.concat("_force"));
        gets.push(myrepeat.concat("_type"));
        getAttrs(gets, function (myval) {
            let cat = myval[myrepeat.concat("_category")];
            let force = myval[myrepeat.concat("_force")];
            let type = myval[myrepeat.concat("_type")];
            if (type == "Power Focus") {
                atts["power-focus"] = force
            } else if (type == "Spirit Focus") {
                atts[cat] = force;
            } else if (type == "Expendable") {
                if (cat == "none") return;
                var myatt = "exp-" + cat;
                atts[myatt] = force;

            } else if (type == "Reusable") {
                if (cat == "none") return;
                var myatt = "reusable-" + cat;
                atts[myatt] = force;
            } else {
                console.log('skipping');
            }

            console.log(atts);
            setAttrs(atts);
        });



    }

});

$20('.header .tab-button').on('click', (e) => {
    const tab = e.htmlAttributes['data-tab'];
    $20('div[data-tab]').removeClass('active');
    $20(`div[data-tab=${tab}]`).addClass('active');
});