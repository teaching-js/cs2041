// some sample data
const team  = require('../team.json');
const names = require('../names.json');
const teams = require('../teams.json');

function makeTeamList(teamData, namesData, teamsData) {
    // Take it step by step.
    let { players, team } = teamData;
    const { names } = namesData;
    const { teams } = teamsData;

    // do the first join
    const playerMap = [...players, ...names].reduce((map, current) => {
        const { id, ...rest } = current;
        if (map[id]) {
            map[id] = { ...map[id], ...rest}
        } else {
            map[id] = { ...rest };
        }

        return map;
    }, {});

    const teamName = teams.find(t => t.id === team.id).team
    
    players = Object.values(playerMap)
        .map(({ name, tries }) => ({
            name,
            tries: parseInt(tries)
        }))
        .sort((a, b) => b.tries - a.tries)
        .map((player, index) => `${index + 1}. ${player.name}`);
    
    return [`${teamName}, coached by ${team.coach}`, ...players];
}

console.log(makeTeamList(team, names, teams));

module.exports = makeTeamList;



