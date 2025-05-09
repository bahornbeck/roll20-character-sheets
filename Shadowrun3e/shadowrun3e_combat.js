// copied top level constants, prune before merging with main HTML file
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


// Constants for common values and configurations
const COMBAT_DEFAULTS = {
    PLANE: 'physical',
    POOL: 'combatpool',
    DEFAULT_PENALTY: 4,
    CYBER_PENALTY: 2,
    GYRO_PENALTY: 4
};

const MELEE_ATTRIBUTES = [
    'sheettype', 'character_name', 'strength_max', 'martialarts', 'attackdamage',
    'attackpower', 'reaction_max', 'charisma_max', 'unarmed', 'unarmed-specialized',
    'cyberimplant', 'weaponfocus-equipped', 'weaponfocus-damage', 'gyro-on',
    'armor-quickness-pen', 'unarmed-miscmods', 'weaponfocus-specialized', 'metatype',
    'meleeselected'
];

const REPEATING_ATTRIBUTES = [
    'damage', 'power', 'name', 'skill', 'reach', 'specialized', 'notes', 'tnmods'
];

// Helper functions
const calculateReach = (metatype, baseReach) => 
    metatype === 'Troll' ? baseReach + 1 : baseReach;

const getDefaultSkillConfig = (strMax, cyberImplant) => {
    if (cyberImplant === 0) {
        return {
            skill: strMax,
            penalty: COMBAT_DEFAULTS.DEFAULT_PENALTY,
            pool: 'false',
            message: `{{default=Skill Defaulted to Strength Attribute with +${COMBAT_DEFAULTS.DEFAULT_PENALTY} to hit}}`
        };
    }
    return {
        skill: cyberImplant,
        penalty: COMBAT_DEFAULTS.CYBER_PENALTY,
        message: `{{default=Skill Defaulted to Cyber Implant skill with +${COMBAT_DEFAULTS.CYBER_PENALTY} to hit}}`
    };
};

const buildMeleeRoll = (config, payload) => {
    const {
        myname, pool, calcDice, calcTN, myweapon, myreach,
        defaultmsg = '', gyropenroll = '', mydamage = ''
    } = config;

    let roll = `&{template:melee}{{myname=${myname}}}` +
        `{{target=@{target|${lang["target"]}|token_name}}}` +
        `{{weapondamage=[[0]]}}{{finalwinner=[[0]]}}` +
        `{{weaponpower=[[${config.mypower}]]}}`;

    if (config.armorpen) {
        roll += `{{armorpen=@{armor-quickness-pen}}}`;
    }

    // Add pool dice configuration
    if (pool === COMBAT_DEFAULTS.POOL) {
        roll += `{{pooldice=[[?{${lang["combat-pool-dice"]}|0}]]}}` +
            `{{pooltype=${lang["combat"]}}}`;
    } else if (pool === 'astralpool') {
        roll += `{{pooldice=[[?{${lang["astral-pool-dice"]}|0}]]}}` +
            `{{pooltype=${lang["astral"]}}}`;
    } else {
        roll += `{{pooldice=[[0]]}}`;
    }

    // Add common roll components
    roll += `{{senddata=[[0]]}}` +
        `{{charreach=[[${myreach}]]}}` +
        `{{targetreach=[[@{target|${lang["target"]}|meleereach|max}]]}}` +
        `{{weaponname=${myweapon}}}`;

    // Add reach modifier if needed
    if (config.askreach === 0) {
        roll += `{{reachmod=[[?{${lang["use-reach-modifier"]}?|${lang["yes"]},1|${lang["no"]},0}]]}}` +
            `{{reachbonus=[[(@{target|${lang["target"]}|meleereach|max} - @{meleereach|max} ) * ?{${lang["use-reach-modifier"]}?}]]}}`;
    } else {
        roll += `{{reachmod=[[0]]}}`;
    }

    // Add dice rolls and target number
    roll += `{{rolldice=[[${calcDice}]]}}{{targetnumber=[[${calcTN}]]}}`;

    // Add attack or defense test based on payload
    if (payload === 'none') {
        roll += `{{attacktest=[[ [[${calcDice}]]d6>${calcTN}!! ]]}}` +
            `{{attackmode=Attack}}{{defend=yes}}`;
    } else {
        roll += `{{attacknumber=[[${payload.attacktest}]]}}{{win=[[1]]}}` +
            `{{attacker=${payload.attacker}}}{{defender=${myname}}}` +
            `{{defensetest=[[ [[${calcDice}]]d6>${calcTN}!! ]]}}` +
            `{{attackmode=${payload.defmode === 'regular' ? 'Defend' : 'Full Defense'}}}` +
            (payload.defmode !== 'regular' ? '{{dodge=yes}}' : '');
    }

    return roll + defaultmsg + gyropenroll;
};

const meleecombat = function(mymode, payload) {
    if (!("yes" in lang)) geti18n();
    
    const plane = payload?.plane || COMBAT_DEFAULTS.PLANE;
    const askreach = payload?.reachmode || 0;
    
    // Get all necessary attributes
    const meleeattrs = [...MELEE_ATTRIBUTES];
    
    if (mymode.includes("repeating")) {
        REPEATING_ATTRIBUTES.forEach(myatt => {
            meleeattrs.push(mymode.concat(myatt));
        });
    }

    getAttrs(meleeattrs, function(myval) {
        const config = {
            strMax: parseInt(myval.strength_max),
            attackPower: parseInt(myval.attackpower),
            characterName: myval.character_name,
            sheetType: myval.sheettype,
            plane,
            askreach
        };

        // Calculate gyro penalty
        const gyroPenalty = (myval["gyro-on"] == 1 && mymode !== "astralattack") 
            ? COMBAT_DEFAULTS.GYRO_PENALTY : 0;

        // Set up combat configuration based on mode
        let combatConfig = {};
        
        if (mymode === "astralattack" || plane === "astral") {
            combatConfig = setupAstralCombat(myval);
        } else if (mymode.includes("repeating")) {
            combatConfig = setupRepeatingCombat(myval, mymode);
        } else if (config.sheetType === "Critter" || config.sheetType === "Spirit") {
            combatConfig = setupCritterCombat(myval);
        } else {
            combatConfig = setupUnarmedCombat(myval);
        }

        // Build the roll
        const roll = buildMeleeRoll({
            ...combatConfig,
            gyroPenalty,
            myname: config.characterName
        }, payload);

        // Execute the roll
        startRoll(roll, (results) => {
            handleRollResults(results, payload, combatConfig);
        });
    });
};

// Event handlers
on('clicked:meleedefend', (info) => {
    if (!("yes" in lang)) geti18n();
    
    const payload = rollEscape.unescape(info.originalRollId);
    
    getAttrs(["meleeselected"], function(myval) {
        payload.defmode = "regular";
        const mymode = (myval.meleeselected === "unarmed-equipped") 
            ? "unarmedattack" 
            : myval.meleeselected.slice(0, -12);
        
        meleecombat(mymode, payload);
    });
});

on('clicked:meleedefendfull', (info) => {
    if (!("yes" in lang)) geti18n();
    
    const payload = rollEscape.unescape(info.originalRollId);
    
    getAttrs(["meleeselected"], function(myval) {
        payload.defmode = "full";
        const mymode = (myval.meleeselected === "unarmed-equipped") 
            ? "unarmedattack" 
            : myval.meleeselected.slice(0, -12);
        
        meleecombat(mymode, payload);
    });
});

on('clicked:repeating_meleeweapons:attack', (info) => {
    if (!("yes" in lang)) geti18n();
    
    const source = info.sourceAttribute.split('_');
    const myrepeat = source.slice(0, -1).join('_').concat('_');
    
    meleecombat(myrepeat, "none");
});

on('clicked:melee', (info) => {
    meleecombat(info.htmlAttributes.id, "none");
});

const setupAstralCombat = (myval) => {
    let myskill = '@{astralcombat}';
    let mydamage = 'M';
    let mypower = parseInt(myval["charisma_max"]);
    let myspec = 0;
    let focus = '';
    let force = '';

    // Handle weapon focus if equipped
    if (myval["weaponfocus-equipped"] === "on") {
        myskill = `( ${myskill} + @{weaponfocus-force} )`;
        myspec = myval["weaponfocus-specialized"];
        mydamage = myval["weaponfocus-damage"];
        focus = "{{weaponfocus=@{weaponfocus-name}}}";
        force = "{{focusforce=@{weaponfocus-force}}}";
    }

    return {
        myskill,
        mydamage,
        mypower,
        myspec,
        focus,
        force,
        myweapon: "Astral Attack",
        pool: "astralpool",
        defaultmsg: "",
        defaultpen: 0
    };
};

const setupRepeatingCombat = (myval, mymode) => {
    const myrepeat = mymode;
    
    return {
        myskill: myval[myrepeat.concat("skill")],
        mydamage: myval[myrepeat.concat("damage")],
        mypower: parseInt(myval[myrepeat.concat("power")]),
        myweapon: myval[myrepeat.concat("name")],
        myspec: myval[myrepeat.concat("specialized")],
        mytnmod: myval[myrepeat.concat("tnmods")],
        myreach: myval["metatype"] === "Troll" 
            ? parseInt(myval[myrepeat.concat("reach")]) + 1 
            : myval[myrepeat.concat("reach")],
        pool: "combatpool",
        defaultmsg: "",
        mynotes: myval[myrepeat.concat("notes")] || ""
    };
};

const setupCritterCombat = (myval) => {
    return {
        myskill: myval["reaction_max"],
        mydamage: myval["attackdamage"],
        mypower: parseInt(myval["attackpower"]),
        myweapon: `${myval["sheettype"]} Attack`,
        pool: "combatpool",
        defaultmsg: "",
        defaultpen: 0
    };
};

const setupUnarmedCombat = (myval) => {
    let config = {
        mydamage: myval["attackdamage"],
        myskill: myval["unarmed"],
        myspec: myval["unarmed-specialized"],
        mytnmod: myval["unarmed-miscmods"],
        myweapon: myval["martialarts"],
        mypower: parseInt(myval["strength_max"]),
        pool: "combatpool",
        defaultmsg: "",
        defaultpen: 0
    };

    // Handle defaulting if no unarmed skill
    if (myval["unarmed"] == 0) {
        if (myval["cyberimplant"] == 0) {
            config = {
                ...config,
                myskill: myval["strength_max"],
                defaultpen: 4,
                pool: "false",
                defaultmsg: "{{default=Skill Defaulted to Strength Attribute with +4 to hit}}"
            };
        } else {
            config = {
                ...config,
                myskill: myval["cyberimplant"],
                defaultpen: 2,
                defaultmsg: "{{default=Skill Defaulted to Cyber Implant skill with +2 to hit}}"
            };
        }
    }

    return config;
};

// Helper function to handle roll results
const handleRollResults = (results, payload, combatConfig) => {
    let defroll = null;
    let finalpower, finaldmg, mywinner, mylooser;
    const reachmodtxt = results.results.reachmod.result === 0 
        ? "Reach Bonus Not Applied" 
        : "Reach Bonus Applied";

    if (payload?.attacktest) {
        defroll = results.results.defensetest.result;
        payload.ammotype = "melee";
        payload.range = "melee";
        payload.meleetn = results.results.targetnumber.result;

        if (payload.attacktest >= defroll) {
            // Attacker wins
            mywinner = payload.attacker;
            mylooser = combatConfig.characterName;
            const delta = Math.floor((payload.attacktest - defroll) / 2);
            
            finaldmg = calculateFinalDamage(delta, payload);
            finalpower = calculateFinalPower(delta, payload);
            
        } else {
            // Defender wins
            mywinner = combatConfig.characterName;
            mylooser = payload.attacker;
            const delta = Math.floor((defroll - payload.attacktest) / 2);

            if (payload.defmode === "regular") {
                finaldmg = calculateFinalDamage(delta, {
                    maxd: payload.dmaxd,
                    damage: combatConfig.mydamage
                });
                finalpower = calculateFinalPower(delta, {
                    power: combatConfig.mypower,
                    maxd: payload.dmaxd
                });
                payload.strength = combatConfig.strMax;
            } else {
                finaldmg = "Attack";
                finalpower = "Parried";
            }
        }

        finishRoll(results.rollId, {
            finalwinner: mylooser,
            reachmod: reachmodtxt,
            weapondamage: finaldmg,
            weaponpower: finalpower,
            senddata: rollEscape.escape(payload)
        });
    } else {
        finishRoll(results.rollId, {
            reachmod: reachmodtxt,
            weapondamage: combatConfig.mydamage,
            senddata: rollEscape.escape(payload)
        });
    }

    // Update pool if needed
    if (combatConfig.pool !== "none") {
        updatepoolused(combatConfig.pool, results.results.pooldice.result);
    }
};


// Helper functions for damage calculations
// Improved damage table structure with clear categories and values
const DAMAGE_TABLE = {
    PHYSICAL: {
        NONE: { value: 0, code: 'N', label: 'None' },
        LIGHT: { value: 1, code: 'L', label: 'Light' },
        MODERATE: { value: 2, code: 'M', label: 'Moderate' },
        SERIOUS: { value: 3, code: 'S', label: 'Serious' },
        DEADLY: { value: 4, code: 'D', label: 'Deadly' }
    },
    STUN: {
        LIGHT: { value: 10, code: 'L', label: 'Light' },
        MODERATE: { value: 11, code: 'M', label: 'Moderate' },
        SERIOUS: { value: 12, code: 'S', label: 'Serious' },
        DEADLY: { value: 13, code: 'D', label: 'Deadly' }
    }
};

// Helper functions for damage calculations
const getDamageType = (damageCode) => {
    // Check if it's a stun damage (values 10-13)
    return damageCode >= 10 ? 'STUN' : 'PHYSICAL';
};

const getDamageLevel = (damageValue, type = 'PHYSICAL') => {
    return Object.entries(DAMAGE_TABLE[type])
        .find(([_, data]) => data.value === damageValue)?.[0] || 'NONE';
};

const getDamageData = (damageCode, type = 'PHYSICAL') => {
    const damageType = type.toUpperCase();
    if (!DAMAGE_TABLE[damageType]) {
        console.warn(`Invalid damage type: ${type}, defaulting to PHYSICAL`);
        damageType = 'PHYSICAL';
    }
    
    const entries = Object.entries(DAMAGE_TABLE[damageType]);
    return entries.find(([_, data]) => data.value === damageCode)?.[1];
};

const increaseDamageLevel = (currentDamage, steps = 1, type = 'PHYSICAL') => {
    const damageType = type.toUpperCase();
    if (!DAMAGE_TABLE[damageType]) {
        console.warn(`Invalid damage type: ${type}, defaulting to PHYSICAL`);
        damageType = 'PHYSICAL';
    }

    const levels = Object.values(DAMAGE_TABLE[damageType]);
    const currentIndex = levels.findIndex(level => level.value === currentDamage);
    
    if (currentIndex === -1) return currentDamage;
    
    const newIndex = Math.min(currentIndex + steps, levels.length - 1);
    return levels[newIndex].value;
};

// Improved calculateFinalDamage function with damage type parameter
const calculateFinalDamage = (delta, config, damageType = 'PHYSICAL') => {
    // Early return for full defense
    if (config.defmode === "full") {
        return "Attack";
    }

    // Normalize damage type
    const normalizedType = damageType.toUpperCase();
    if (!DAMAGE_TABLE[normalizedType]) {
        console.warn(`Invalid damage type: ${damageType}, defaulting to PHYSICAL`);
        normalizedType = 'PHYSICAL';
    }

    // Get the base damage data
    const baseDamageData = getDamageData(config.damage, normalizedType);
    if (!baseDamageData) {
        console.error('Invalid damage code:', config.damage);
        return 'N';
    }

    // Calculate new damage level
    let finalDamage;

    if (delta >= config.maxd) {
        // Maximum damage case
        finalDamage = DAMAGE_TABLE[normalizedType].DEADLY.value;
    } else {
        // Increment damage by delta steps
        finalDamage = increaseDamageLevel(config.damage, delta, normalizedType);
    }

    // Get the final damage code
    const finalDamageData = getDamageData(finalDamage, normalizedType);
    return finalDamageData.code;
};

const calculateFinalPower = (delta, config) => {
    if (config.defmode === "full") return "Parried";

    return (delta >= config.maxd) 
        ? config.power + (delta - config.maxd) 
        : config.power;
};
