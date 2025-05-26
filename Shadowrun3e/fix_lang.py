import json
from bs4 import BeautifulSoup
import os

translations = [
    {"key": "blackic", "translationKey": "black-ic", "camelCase": "blackIc"},
    {"key": "blackiclethal", "translationKey": "black-ic-lethal", "camelCase": "blackIcLethal"},
    {"key": "blackicnonlethal", "translationKey": "black-ic-non-lethal", "camelCase": "blackIcNonLethal"},
    {"key": "cerebropathic", "translationKey": "cerebropathic", "camelCase": "cerebropathic"},
    {"key": "psychotropic", "translationKey": "psychotropic", "camelCase": "psychotropic"},
    {"key": "use-reach-modifier", "translationKey": "use-reach-modifier", "camelCase": "useReachModifier"},
    {"key": "L", "translationKey": "light-damage-abbreviation", "camelCase": "lightDamageAbbreviation"},
    {"key": "M", "translationKey": "moderate-damage-abbreviation", "camelCase": "moderateDamageAbbreviation"},
    {"key": "S", "translationKey": "serious-damage-abbreviation", "camelCase": "seriousDamageAbbreviation"},
    {"key": "D", "translationKey": "deadly-damage-abbreviation", "camelCase": "deadlyDamageAbbreviation"},
    {"key": "L(stun)", "translationKey": "light-stun-abbreviation", "camelCase": "lightStunAbbreviation"},
    {"key": "M(stun)", "translationKey": "moderate-stun-abbreviation", "camelCase": "moderateStunAbbreviation"},
    {"key": "S(stun)", "translationKey": "serious-stun-abbreviation", "camelCase": "seriousStunAbbreviation"},
    {"key": "D(stun)", "translationKey": "deadly-stun-abbreviation", "camelCase": "deadlyStunAbbreviation"},
    {"key": "decker", "translationKey": "decker", "camelCase": "decker"},
    {"key": "evasion", "translationKey": "evasion", "camelCase": "evasion"},
    {"key": "sensors", "translationKey": "sensors", "camelCase": "sensors"},
    {"key": "masking", "translationKey": "masking", "camelCase": "masking"},
    {"key": "bod", "translationKey": "bod", "camelCase": "bod"},
    {"key": "none", "translationKey": "none", "camelCase": "none"},
    {"key": "attack", "translationKey": "attack", "camelCase": "attack"},
    {"key": "probe", "translationKey": "probe", "camelCase": "probe"},
    {"key": "compare", "translationKey": "compare", "camelCase": "compare"},
    {"key": "swap-memory", "translationKey": "swap-memory", "camelCase": "swapMemory"},
    {"key": "damage-resistance-test", "translationKey": "damage-resistance-test", "camelCase": "damageResistanceTest"},
    {"key": "maneuver-score", "translationKey": "maneuver-score", "camelCase": "maneuverScore"},
    {"key": "accelerate", "translationKey": "accelerate", "camelCase": "accelerate"},
    {"key": "position", "translationKey": "position", "camelCase": "position"},
    {"key": "crash", "translationKey": "crash", "camelCase": "crash"},
    {"key": "driving", "translationKey": "driving", "camelCase": "driving"},
    {"key": "drain-damage", "translationKey": "drain-damage", "camelCase": "drainDamage"},
    {"key": "drain-modifiers", "translationKey": "drain-modifiers", "camelCase": "drainModifiers"},
    {"key": "cover-modifiers", "translationKey": "cover-modifiers", "camelCase": "coverModifiers"},
    {"key": "spirit-focus-dice", "translationKey": "spirit-focus-dice", "camelCase": "spiritFocusDice"},
    {"key": "are-you-the-summoner", "translationKey": "are-you-the-summoner", "camelCase": "areYouTheSummoner"},
    {"key": "additional-modifiers", "translationKey": "additional-modifiers", "camelCase": "additionalModifiers"},
    {"key": "successes-from-hiding-test", "translationKey": "successes-from-hiding-test", "camelCase": "successesFromHidingTest"},
    {"key": "urban-setting", "translationKey": "urban-setting", "camelCase": "urbanSetting"},
    {"key": "icon", "translationKey": "icon", "camelCase": "icon"},
    {"key": "range", "translationKey": "range", "camelCase": "range"},
    {"key": "ic-rating", "translationKey": "ic-rating", "camelCase": "icRating"},
    {"key": "light-stun", "translationKey": "light-stun", "camelCase": "lightStun"},
    {"key": "light", "translationKey": "light", "camelCase": "light"},
    {"key": "moderate", "translationKey": "moderate", "camelCase": "moderate"},
    {"key": "moderate-stun", "translationKey": "moderate-stun", "camelCase": "moderateStun"},
    {"key": "serious", "translationKey": "serious", "camelCase": "serious"},
    {"key": "serious-stun", "translationKey": "serious-stun", "camelCase": "seriousStun"},
    {"key": "deadly", "translationKey": "deadly", "camelCase": "deadly"},
    {"key": "deadly-stun", "translationKey": "deadly-stun", "camelCase": "deadlyStun"},
    {"key": "damage", "translationKey": "damage", "camelCase": "damage"},
    {"key": "wound-level", "translationKey": "wound-level", "camelCase": "woundLevel"},
    {"key": "system-operation-with", "translationKey": "system-operation-with", "camelCase": "systemOperationWith"},
    {"key": "utility", "translationKey": "utility", "camelCase": "utility"},
    {"key": "utility-test", "translationKey": "utility-test", "camelCase": "utilityTest"},
    {"key": "utility-rating", "translationKey": "utility-rating", "camelCase": "utilityRating"},
    {"key": "yes", "translationKey": "yes", "camelCase": "yes"},
    {"key": "no", "translationKey": "no", "camelCase": "no"},
    {"key": "miscellaneous-modifiers", "translationKey": "miscellaneous-modifiers", "camelCase": "miscellaneousModifiers"},
    {"key": "out-of-ammo", "translationKey": "out-of-ammo", "camelCase": "outOfAmmo"},
    {"key": "simple", "translationKey": "simple", "camelCase": "simple"},
    {"key": "complex", "translationKey": "complex", "camelCase": "complex"},
    {"key": "rounds-already-fired-in-combat-phase", "translationKey": "rounds-already-fired-in-combat-phase", "camelCase": "roundsAlreadyFiredInCombatPhase"},
    {"key": "rounds", "translationKey": "rounds", "camelCase": "rounds"},
    {"key": "spell-defense", "translationKey": "spell-defense", "camelCase": "spellDefense"},
    {"key": "ally", "translationKey": "ally", "camelCase": "ally"},
    {"key": "resist-spell", "translationKey": "resist-spell", "camelCase": "resistSpell"},
    {"key": "resist-banish", "translationKey": "resist-banish", "camelCase": "resistBanish"},
    {"key": "result", "translationKey": "result", "camelCase": "result"},
    {"key": "force", "translationKey": "force", "camelCase": "force"},
    {"key": "dispell", "translationKey": "dispell", "camelCase": "dispell"},
    {"key": "force-of-spell", "translationKey": "force-of-spell", "camelCase": "forceOfSpell"},
    {"key": "modifiers", "translationKey": "modifiers", "camelCase": "modifiers"},
    {"key": "astral", "translationKey": "astral", "camelCase": "astral"},
    {"key": "combat", "translationKey": "combat", "camelCase": "combat"},
    {"key": "task-pool", "translationKey": "task-pool", "camelCase": "taskPool"},
    {"key": "task-pool-dice", "translationKey": "task-pool-dice", "camelCase": "taskPoolDice"},
    {"key": "attacks-msg", "translationKey": "attacks-msg", "camelCase": "attacksMsg"},
    {"key": "astral-pool", "translationKey": "astral-pool", "camelCase": "astralPool"},
    {"key": "astral-pool-dice", "translationKey": "astral-pool-dice", "camelCase": "astralPoolDice"},
    {"key": "spell-pool", "translationKey": "spell-pool", "camelCase": "spellPool"},
    {"key": "spell-pool-dice", "translationKey": "spell-pool-dice", "camelCase": "spellPoolDice"},
    {"key": "spell-pool-dice-for-drain", "translationKey": "spell-pool-dice-for-drain", "camelCase": "spellPoolDiceForDrain"},
    {"key": "conjuring-dice-for-drain", "translationKey": "conjuring-dice-for-drain", "camelCase": "conjuringDiceForDrain"},
    {"key": "sorcery-dice", "translationKey": "sorcery-dice", "camelCase": "sorceryDice"},
    {"key": "sorcery-dice-for-drain", "translationKey": "sorcery-dice-for-drain", "camelCase": "sorceryDiceForDrain"},
    {"key": "control-pool", "translationKey": "control-pool", "camelCase": "controlPool"},
    {"key": "control-pool-dice", "translationKey": "control-pool-dice", "camelCase": "controlPoolDice"},
    {"key": "hacking-pool", "translationKey": "hacking-pool", "camelCase": "hackingPool"},
    {"key": "hacking-pool-dice", "translationKey": "hacking-pool-dice", "camelCase": "hackingPoolDice"},
    {"key": "combat-pool", "translationKey": "combat-pool", "camelCase": "combatPool"},
    {"key": "combat-pool-dice", "translationKey": "combat-pool-dice", "camelCase": "combatPoolDice"},
    {"key": "attack-power", "translationKey": "attack-power", "camelCase": "attackPower"},
    {"key": "attack-type", "translationKey": "attack-type", "camelCase": "attackType"},
    {"key": "distance-from-explosive-in-meters", "translationKey": "distance-from-explosive-in-meters", "camelCase": "distanceFromExplosiveInMeters"},
    {"key": "how-many-additional-enemy-vehicles", "translationKey": "how-many-additional-enemy-vehicles", "camelCase": "howManyAdditionalEnemyVehicles"},
    {"key": "normal", "translationKey": "normal", "camelCase": "normal"},
    {"key": "elemental", "translationKey": "elemental", "camelCase": "elemental"},
    {"key": "adps", "translationKey": "adps", "camelCase": "adps"},
    {"key": "half", "translationKey": "half", "camelCase": "half"},
    {"key": "double", "translationKey": "double", "camelCase": "double"},
    {"key": "dodge", "translationKey": "dodge", "camelCase": "dodge"},
    {"key": "target-number", "translationKey": "target-number", "camelCase": "targetNumber"},
    {"key": "target", "translationKey": "target", "camelCase": "target"},
    {"key": "spellbocked-msg", "translationKey": "spellblocked-msg", "camelCase": "spellblockedMsg"},
    {"key": "missed-msg", "translationKey": "missed-msg", "camelCase": "missedMsg"},
    {"key": "verification-system-rating", "translationKey": "verification-system-rating", "camelCase": "verificationSystemRating"},
    {"key": "operator", "translationKey": "operator", "camelCase": "operator"},
    {"key": "short", "translationKey": "short", "camelCase": "short"},
    {"key": "medium", "translationKey": "medium", "camelCase": "medium"},
    {"key": "long", "translationKey": "long", "camelCase": "long"},
    {"key": "extreme", "translationKey": "extreme", "camelCase": "extreme"},
    {"key": "rigger", "translationKey": "rigger", "camelCase": "rigger"},
    {"key": "spell-resistance-test", "translationKey": "spell-resistance-test", "camelCase": "spellResistanceTest"},
    {"key": "set-vehicle-operator", "translationKey": "set-vehicle-operator", "camelCase": "setVehicleOperator"},
    {"key": "update-gunnery-and-control-pool", "translationKey": "update-gunnery-and-control-pool", "camelCase": "updateGunneryAndControlPool"},
    {"key": "set-decker-for-security-tally", "translationKey": "set-decker-for-security-tally", "camelCase": "setDeckerForSecurityTally"}
]

def get_camel_case_keys():
    return [item["camelCase"] for item in translations]

def update_html_i18n():
    # Create a translation dictionary for easier lookup
    translation_map = {item["key"]: item["camelCase"] for item in translations}
    
    # Read the HTML file
    try:
        with open('shadowrun3e.html', 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
    except FileNotFoundError:
        print("Error: shadowrun3e.html not found in current directory")
        return
    
    # Find all elements with data-i18n attribute
    elements_with_i18n = soup.find_all(attrs={"data-i18n": True})
    
    # Counter for tracking changes
    changes_made = 0
    
    # Process each element
    for element in elements_with_i18n:
        current_key = element['data-i18n']
        if current_key in translation_map:
            element['data-i18n'] = translation_map[current_key]
            changes_made += 1
    
    # Create backup of original file
    """
    if os.path.exists('shadowrun3e.html'):
        os.rename('shadowrun3e.html', 'shadowrun3e.html.backup')
    """
    # Write the modified HTML
    with open('new.shadowrun3e.html', 'w', encoding='utf-8') as file:
        file.write(str(soup))
    
    return changes_made

if __name__ == "__main__":
    # Get array of camelCase keys
    camel_case_keys = get_camel_case_keys()
    
    # Print total number of translations
    print(f"Total translations available: {len(camel_case_keys)}")
    
    # Update HTML file
    changes = update_html_i18n()
    
    if changes is not None:
        print(f"\nUpdated {changes} data-i18n attributes in the HTML file")
        print("Original file backed up as shadowrun3e.html.backup")
    
