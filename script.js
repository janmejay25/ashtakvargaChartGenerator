  const RASHI_LIST = [ "Aries (1)", "Taurus (2)", "Gemini (3)", "Cancer (4)", "Leo (5)", "Virgo (6)", "Libra (7)", "Scorpio (8)", "Sagittarius (9)", "Capricorn (10)", "Aquarius (11)", "Pisces (12)" ];
        const RASHI_NAMES = ["Ari", "Tau", "Gem", "Can", "Leo", "Vir", "Lib", "Sco", "Sag", "Cap", "Aqu", "Pis"];
        const PLANETS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];
        const PLANET_MAP = { sun: 'Su', moon: 'Mo', mars: 'Ma', mercury: 'Me', jupiter: 'Ju', venus: 'Ve', saturn: 'Sa', rahu: 'Ra', ketu: 'Ke', lagna: 'Lg' };
        const ROW_ORDER = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Lagna'];

        const DEFAULT_POSITIONS = {
            lagna: 11, sun: 1, moon: 10, mars: 11, mercury: 12,
            jupiter: 6, venus: 1, saturn: 3, rahu: 12, ketu: 6
        };
        
        // --- MASTER ASHTAKAVARGA RULES OBJECT ---
        const ALL_ASHTAKAVARGA_RULES = {
            'Sun': { rules: { 'Sun': [1,2,4,7,8,9,10,11], 'Moon': [3,6,10,11], 'Mars': [1,2,4,7,8,9,10,11], 'Mercury': [3,5,6,9,10,11,12], 'Jupiter': [5,6,9,11], 'Venus': [6,7,12], 'Saturn': [1,2,4,7,8,9,10,11], 'Lagna': [3,4,6,10,11,12] }, totals: { 'Sun': 8, 'Moon': 4, 'Mars': 8, 'Mercury': 7, 'Jupiter': 4, 'Venus': 3, 'Saturn': 8, 'Lagna': 6 } },
            'Moon': { rules: { 'Sun': [3,6,7,8,10,11], 'Moon': [1,3,6,7,9,10,11], 'Mars': [2,3,5,6,10,11], 'Mercury': [1,3,4,5,7,8,10,11], 'Jupiter': [1,2,4,7,8,10,11], 'Venus': [3,4,5,7,9,10,11], 'Saturn': [3,5,6,11], 'Lagna': [3,6,10,11] }, totals: { 'Sun': 6, 'Moon': 7, 'Mars': 6, 'Mercury': 8, 'Jupiter': 7, 'Venus': 7, 'Saturn': 4, 'Lagna': 4 } },
            'Mars': { rules: { 'Sun': [1,5,6,10,11], 'Moon': [1,6,11], 'Mars': [1,2,4,7,8,10,11], 'Mercury': [3,5,6,11], 'Jupiter': [6,10,11,12], 'Venus': [6,8,11,12], 'Saturn': [1,4,7,8,9,10,11], 'Lagna': [1,3,6,10,11] }, totals: { 'Sun': 5, 'Moon': 3, 'Mars': 7, 'Mercury': 4, 'Jupiter': 4, 'Venus': 4, 'Saturn': 7, 'Lagna': 5 } },
            'Mercury': { rules: { 'Sun': [5,6,9,11,12], 'Moon': [2,4,6,8,10,11], 'Mars': [1,2,4,7,8,9,10,11], 'Mercury': [1,3,5,6,9,10,11,12], 'Jupiter': [6,8,11,12], 'Venus': [1,2,3,4,5,8,9,11], 'Saturn': [1,2,4,7,8,9,10,11], 'Lagna': [1,2,4,6,8,10,11] }, totals: { 'Sun': 5, 'Moon': 6, 'Mars': 8, 'Mercury': 8, 'Jupiter': 4, 'Venus': 8, 'Saturn': 8, 'Lagna': 7 } },
            'Jupiter': { rules: { 'Sun': [1,2,3,4,7,8,9,10,11], 'Moon': [2,5,7,9,11], 'Mars': [1,2,4,7,8,10,11], 'Mercury': [1,2,4,5,6,9,10,11], 'Jupiter': [1,2,3,4,7,8,10,11], 'Venus': [2,5,6,9,10,11], 'Saturn': [3,5,6,12], 'Lagna': [1,2,4,5,6,7,9,10,11] }, totals: { 'Sun': 9, 'Moon': 5, 'Mars': 7, 'Mercury': 8, 'Jupiter': 8, 'Venus': 6, 'Saturn': 4, 'Lagna': 9 } },
            'Venus': { rules: { 'Sun': [8,11,12], 'Moon': [1,2,3,4,5,8,9,11,12], 'Mars': [3,4,6,9,11,12], 'Mercury': [3,5,6,9,11], 'Jupiter': [5,8,9,10,11], 'Venus': [1,2,3,4,5,8,9,10,11], 'Saturn': [3,4,5,8,9,10,11], 'Lagna': [1,2,3,4,5,8,9,11] }, totals: { 'Sun': 3, 'Moon': 9, 'Mars': 6, 'Mercury': 5, 'Jupiter': 5, 'Venus': 9, 'Saturn': 7, 'Lagna': 8 } },
            'Saturn': { rules: { 'Sun': [1,2,4,7,8,10,11], 'Moon': [3,6,11], 'Mars': [3,5,6,10,11,12], 'Mercury': [6,8,9,10,11,12], 'Jupiter': [5,6,11,12], 'Venus': [6,11,12], 'Saturn': [3,5,6,11], 'Lagna': [1,3,4,6,10,11] }, totals: { 'Sun': 7, 'Moon': 3, 'Mars': 6, 'Mercury': 6, 'Jupiter': 4, 'Venus': 3, 'Saturn': 4, 'Lagna': 6 } }
        };

        const ASHTAKAVARGA_ROW_ORDER = [ 'Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon', 'Lagna' ];
        const RASHI_NAMES_SHORT = [ 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitt', 'Capric', 'Aquar', 'Pisces' ];
        
        const ANSH_KAKSHA = {
            'Saturn':  '00°00\' - 03°45\'', 'Jupiter': '03°45\' - 07°30\'',
            'Mars':    '07°30\' - 11°15\'', 'Sun':     '11°15\' - 15°00\'',
            'Venus':   '15°00\' - 18°45\'', 'Mercury': '18°45\' - 22°30\'',
            'Moon':    '22°30\' - 26°15\'', 'Lagna':   '26°15\' - 30°00\''
        };

        // --- INITIALIZATION ---
        window.onload = () => {
            populateDropdowns();
            setupAshtakavargaButtons();
            document.getElementById('download-report-btn').addEventListener('click', downloadReportPDF);
        };

        function populateDropdowns() {
            const container = document.getElementById('input-container');
            const createSelect = (id, labelText, defaultValue) => {
                const div = document.createElement('div');
                div.innerHTML = `<label for="${id}" class="block text-sm font-medium text-gray-700 mb-1">${labelText}</label>
                                 <select id="${id}" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5">
                                     ${RASHI_LIST.map((r, i) => `<option value="${i + 1}">${r}</option>`).join('')}
                                 </select>`;
                const select = div.querySelector('select');
                select.value = defaultValue;
                return div;
            };
            container.appendChild(createSelect('lagna', 'Lagna (Ascendant)', DEFAULT_POSITIONS.lagna));
            PLANETS.forEach(p => {
                const pId = p.toLowerCase();
                container.appendChild(createSelect(pId, p, DEFAULT_POSITIONS[pId]));
            });
        }
function setupAshtakavargaButtons() {
    const container = document.getElementById('ashtak-buttons');
    container.innerHTML = ''; // Clear previous content

    const dropdownWrapper = document.createElement('div');
    dropdownWrapper.className = 'px-8 relative inline-block text-left';

    // 1. Create the main dropdown button
    const button = document.createElement('button');
    button.id = 'dropdownDefaultButton';
    button.className = "px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    button.type = 'button';

    // Set the button's inner HTML, including a span with an ID for the text
    button.innerHTML = `
        <span id="chart-selector-text">Circular Chakra</span>
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>`;

    // 2. Create the dropdown menu panel
    const dropdownMenu = document.createElement('div');
    dropdownMenu.id = 'dropdown';
    dropdownMenu.className = "z-10 px-8 hidden absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-64 dark:bg-gray-700 ring-1 ring-black ring-opacity-5";

    const list = document.createElement('ul');
    list.className = 'py-2 text-sm text-gray-700 dark:text-gray-200';
    list.setAttribute('aria-labelledby', 'dropdownDefaultButton');

    // Reordered options
    const grahas = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
    const allOptions = [
        { value: 'scc', text: 'Sarva Chancha Chakra' },
        { value: 'circular', text: 'Circular Chakra' },
        { value: 'separator' },
        ...grahas.map(g => ({ value: g, text: `${g} Ashtakavarga` }))
    ];

    // 3. Create the list items
    allOptions.forEach(option => {
        if (option.value === 'separator') {
            const separatorItem = document.createElement('li');
            separatorItem.innerHTML = `<div class="border-t border-gray-200 dark:border-gray-600 my-1"></div>`;
            list.appendChild(separatorItem);
            return;
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white';
        link.textContent = option.text;
        link.dataset.value = option.value;

        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const selectedValue = e.target.dataset.value;
            
            // --- THE FIX IS HERE ---
            // Find the span by its ID and update its text content
            document.getElementById('chart-selector-text').textContent = e.target.textContent;

            // Call the correct function
            if (grahas.includes(selectedValue)) {
                displayAshtakavarga(selectedValue);
            } else if (selectedValue === 'scc') {
                displayAllSarvaChanchaChakras();
            } else if (selectedValue === 'circular') {
                displayCircularChakra();
            }

            // Hide the dropdown
            dropdownMenu.classList.add('hidden');
        });

        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    // 4. Assemble the component
    dropdownMenu.appendChild(list);
    dropdownWrapper.appendChild(button);
    dropdownWrapper.appendChild(dropdownMenu);
    container.appendChild(dropdownWrapper);
    
    // 5. Add logic to show/hide the dropdown
    button.addEventListener('click', (e) => {
        e.stopPropagation(); 
        dropdownMenu.classList.toggle('hidden');
    });

    window.addEventListener('click', () => {
        if (!dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });










     

            // const sccButton = document.createElement('button');
            // sccButton.textContent = 'Sarva Chancha Chakra (Table)';
            // sccButton.className = "w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow";
            // sccButton.addEventListener('click', displayAllSarvaChanchaChakras);
            // container.appendChild(sccButton);
            
            // // Add the new Circular Chakra button
            // const circularButton = document.createElement('button');
            // circularButton.textContent = 'Sarva Chancha Chakra (Circular)';
            // circularButton.className = "w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow";
            // circularButton.addEventListener('click', displayCircularChakra);
            // container.appendChild(circularButton);
        }

        // --- CHART GENERATION LOGIC ---
       // --- CHART GENERATION LOGIC ---
document.getElementById('generate-chart-btn').addEventListener('click', () => {
    const planetPositions = {};
    // Gather all positions from dropdowns
    PLANETS.forEach(p => { 
        planetPositions[p.toLowerCase()] = parseInt(document.getElementById(p.toLowerCase()).value); 
    });
    planetPositions.lagna = parseInt(document.getElementById('lagna').value);

    // Display the main birth chart first
    displayBirthChart(planetPositions);
    
    // Automatically display the default circular chakra chart
    displayCircularChakra(); 
});
        
        function displayBirthChart(planetPositions) {
            document.getElementById('birth-chart-container').classList.remove('hidden');
            drawKundliChart(planetPositions); // Pass positions to the drawing function

            document.getElementById('ashtak-selection-container').classList.remove('hidden');
            document.getElementById('ashtakvarga-container').classList.add('hidden');
            document.getElementById('scc-container').classList.add('hidden');
            document.getElementById('scc-summary-container').classList.add('hidden');
            document.getElementById('circular-chakra-container').classList.add('hidden');
        }
        
        function drawKundliChart(planetPositions) {
            const lagnaRashi = planetPositions.lagna;
            const rashiToHouseMap = {};
            
            for (let house = 1; house <= 12; house++) {
                const rashiInHouse = ((lagnaRashi - 1 + house - 1) % 12) + 1;
                document.getElementById(house + 'rashi').textContent = rashiInHouse;
                rashiToHouseMap[rashiInHouse] = house;
            }

            const planetsInHouse = Array.from({ length: 13 }, () => []);
            planetsInHouse[1].push(PLANET_MAP.lagna);

            for (const planet in planetPositions) {
                if (planet !== 'lagna') {
                    const planetRashi = planetPositions[planet];
                    const targetHouse = rashiToHouseMap[planetRashi];
                    if (targetHouse) {
                        planetsInHouse[targetHouse].push(PLANET_MAP[planet]);
                    }
                }
            }

            for (let house = 1; house <= 12; house++) {
                const houseElement = document.getElementById(house + 'house');
                const planets = planetsInHouse[house];
                houseElement.textContent = ''; 

                if (planets.length > 0) {
                    const x = houseElement.getAttribute('x');
                    const lines = [];
                    for (let i = 0; i < planets.length; i += 2) {
                        lines.push(planets.slice(i, i + 2).join(' '));
                    }
                    lines.forEach((lineText, index) => {
                        const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                        tspan.setAttribute('x', x);
                        if (index > 0) {
                            tspan.setAttribute('dy', '1.2em'); 
                        }
                        tspan.textContent = lineText;
                        houseElement.appendChild(tspan);
                    });
                }
            }
        }

        // --- GENERIC ASHTAKAVARGA LOGIC ---
        function calculateAshtakavarga(planetPositions, grahaName) {
            const { rules, totals } = ALL_ASHTAKAVARGA_RULES[grahaName];
            const calculationGrid = {};
            for (const source in rules) { calculationGrid[source] = Array(12).fill(0); }
            for (const sourcePlanet in rules) {
                const startRashiNum = planetPositions[sourcePlanet.toLowerCase()]; // Use lowercase to match keys
                if (!startRashiNum) { continue; }
                rules[sourcePlanet].forEach(offset => {
                    const targetRashiIndex = (startRashiNum - 1 + offset - 1) % 12;
                    calculationGrid[sourcePlanet][targetRashiIndex] = 1;
                });
            }
            const finalTable = { headers: [...RASHI_NAMES_SHORT, 'Benefic Points'], rows: {}, totalsRow: [], grandTotal: '' };
            ASHTAKAVARGA_ROW_ORDER.forEach(source => { finalTable.rows[source] = [...calculationGrid[source], totals[source]]; });
            finalTable.totalsRow = Array(12).fill(0).map((_, i) => Object.keys(calculationGrid).reduce((sum, source) => sum + calculationGrid[source][i], 0));
            const calculatedGrandTotal = finalTable.totalsRow.reduce((s, c) => s + c, 0);
            const constantGrandTotal = Object.values(totals).reduce((s, c) => s + c, 0);
            finalTable.grandTotal = `${calculatedGrandTotal}/${constantGrandTotal}`;
            return finalTable;
        }

        function displayAshtakavarga(grahaName) {
            const planetPositions = { lagna: parseInt(document.getElementById('lagna').value) };
            PLANETS.filter(p => p !== 'Rahu' && p !== 'Ketu').forEach(p => {
                planetPositions[p.toLowerCase()] = parseInt(document.getElementById(p.toLowerCase()).value);
            });
            const tableData = calculateAshtakavarga(planetPositions, grahaName);
            if (!tableData) return;
            document.getElementById('ashtakvarga-container').classList.remove('hidden');
            document.getElementById('scc-container').classList.add('hidden');
            document.getElementById('scc-summary-container').classList.add('hidden');
            document.getElementById('circular-chakra-container').classList.add('hidden');
            
            document.getElementById('ashtakvarga-title').textContent = `${grahaName} Ashtakavarga`;
            const outputDiv = document.getElementById('ashtakvarga-output');
            let tableHTML = `<table class="w-full min-w-max border-collapse text-sm"><thead><tr>
                                 <th class="table-cell table-header">Ansh Kaksha</th>
                                 <th class="table-cell table-header">Graha</th>`;
            tableData.headers.forEach(header => { tableHTML += `<th class="table-cell table-header">${header}</th>`; });
            tableHTML += `</tr></thead><tbody>`;
            ASHTAKAVARGA_ROW_ORDER.forEach(source => {
                tableHTML += `<tr>
                                    <td class="table-cell">${ANSH_KAKSHA[source]}</td>
                                    <td class="table-cell font-semibold">${source}</td>`;
                tableData.rows[source].forEach(cellData => { tableHTML += `<td class="table-cell">${cellData}</td>`; });
                tableHTML += `</tr>`;
            });
            tableHTML += `<tr class="total-row"><td class="table-cell" colspan="2">Total Bindus</td>`;
            tableData.totalsRow.forEach(total => { tableHTML += `<td class="table-cell">${total}</td>`; });
            tableHTML += `<td class="table-cell grand-total">${tableData.grandTotal}</td></tr>`;
            tableHTML += `</tbody></table>`;
            outputDiv.innerHTML = tableHTML;
        }

        // --- SARVA CHANCHA CHAKRA LOGIC ---
        function calculateSarvaChanchaChakra(planetPositions, grahaName) {
            const lagna = planetPositions.lagna;
            const ashtakavargaData = calculateAshtakavarga(planetPositions, grahaName);
            if (!ashtakavargaData) return null;

            const sccRow = [];
            for (let i = 0; i < 12; i++) {
                const currentRashiIndex = (lagna - 1 + i) % 12;
                ASHTAKAVARGA_ROW_ORDER.forEach(sourceGraha => {
                    const bindu = ashtakavargaData.rows[sourceGraha][currentRashiIndex];
                    sccRow.push(bindu);
                });
            }
            return sccRow;
        }

        function displayAllSarvaChanchaChakras() {
            const planetPositions = {};
             PLANETS.forEach(p => { planetPositions[p.toLowerCase()] = parseInt(document.getElementById(p.toLowerCase()).value); });
            planetPositions.lagna = parseInt(document.getElementById('lagna').value);


            document.getElementById('scc-container').classList.remove('hidden');
            document.getElementById('scc-summary-container').classList.remove('hidden');
            document.getElementById('ashtakvarga-container').classList.add('hidden');
            document.getElementById('circular-chakra-container').classList.add('hidden');


            document.getElementById('scc-title').textContent = `Sarva Chancha Chakra`;
            const outputDiv = document.getElementById('scc-output');

            const sccGrahas = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
            const allSccData = {};
            sccGrahas.forEach(g => {
                allSccData[g] = calculateSarvaChanchaChakra(planetPositions, g);
            });
            
            const lagna = planetPositions.lagna;
            const rashisInOrder = Array.from({length: 12}, (_, i) => RASHI_NAMES_SHORT[(lagna - 1 + i) % 12]);

            // Calculate the final totals row
            const totalsRow = Array(96).fill(0);
            sccGrahas.forEach(grahaName => {
                const dataRow = allSccData[grahaName];
                dataRow.forEach((bindu, i) => {
                    totalsRow[i] += bindu;
                });
            });
            
            // Calculate the grand totals for each house
            const grandTotals = Array(12).fill(0);
            totalsRow.forEach((total, i) => {
                const houseIndex = Math.floor(i / 8);
                grandTotals[houseIndex] += total;
            });

            let tableHTML = `<table class="w-full min-w-max border-collapse text-sm"><thead>`;
            // First header row (Rashi names with house numbers)
            tableHTML += '<tr><th class="table-cell">Graha</th>';
            rashisInOrder.forEach((rashiName, i) => {
                const houseNum = i + 1;
                const suffix = (houseNum === 1) ? 'st' : (houseNum === 2) ? 'nd' : (houseNum === 3) ? 'rd' : 'th';
                tableHTML += `<th colspan="8" class="table-cell scc-header-rashi ${i > 0 ? 'rashi-separator' : ''}">${rashiName} (${houseNum}${suffix} House)</th>`;
            });
            tableHTML += '</tr>';
            // Second header row (repeating Grahas)
            tableHTML += '<tr><th class="table-cell"></th>';
            for (let i=0; i < 12; i++) {
                ASHTAKAVARGA_ROW_ORDER.forEach((graha, j) => {
                    tableHTML += `<th class="table-cell scc-header-graha ${(i > 0 && j === 0) ? 'rashi-separator' : ''}">${graha.substring(0,2)}</th>`;
                });
            }
            tableHTML += '</tr></thead><tbody>';
            
            // Data rows
            sccGrahas.forEach(grahaName => {
                tableHTML += `<tr><td class="table-cell font-bold">${grahaName} Ashtak</td>`;
                const dataRow = allSccData[grahaName];
                dataRow.forEach((bindu, i) => {
                    tableHTML += `<td class="table-cell ${(i > 0 && i % 8 === 0) ? 'rashi-separator' : ''}">${bindu}</td>`;
                });
                tableHTML += `</tr>`;
            });
            
            // Total Row
            tableHTML += `<tr class="total-row"><td class="table-cell font-bold">Total</td>`;
            totalsRow.forEach((total, i) => {
                tableHTML += `<td class="table-cell ${(i > 0 && i % 8 === 0) ? 'rashi-separator' : ''}">${total}</td>`;
            });
            tableHTML += '</tr>';

            // Grand Total Row
            tableHTML += `<tr class="grand-total"><td class="table-cell font-bold">Grand Total</td>`;
            grandTotals.forEach((grandTotal, i) => {
                tableHTML += `<td colspan="8" class="table-cell font-extrabold ${i > 0 ? 'rashi-separator' : ''}">${grandTotal}</td>`;
            });
            tableHTML += '</tr>';

            tableHTML += '</tbody></table>';
            outputDiv.innerHTML = tableHTML;
            
            // Draw the summary Kundli
            drawSccSummaryKundli(grandTotals, lagna);
        }

        function drawSccSummaryKundli(grandTotals, lagna) {
            const container = document.getElementById('scc-summary-output');
            container.innerHTML = ''; // Clear previous table

            const chartWrapper = document.createElement('div');
            chartWrapper.className = 'kundli-chart-container';
            
            const chartDiv = document.createElement('div');
            chartDiv.className = 'kundli-chart';
            chartDiv.innerHTML = `
                <svg width="100%" height="100%">
                    <line x1="0" y1="0" x2="100%" y2="100%" class="kundli-lines" />
                    <line x1="50%" y1="0" x2="0%" y2="50%" class="kundli-lines" />
                    <line x1="100%" y1="50%" x2="50%" y2="0%" class="kundli-lines" />
                    <line x1="0%" y1="50%" x2="50%" y2="100%" class="kundli-lines" />
                    <line x1="50%" y1="100%" x2="100%" y2="50%" class="kundli-lines" />
                    <line x1="100%" y1="0" x2="0" y2="100%" class="kundli-lines" />
                </svg>`;
            
            const svg = chartDiv.querySelector('svg');
            const svgNS = "http://www.w3.org/2000/svg";

            const rashiPositions = [
                { x: "50%", y: "15%" }, { x: "35%", y: "10%" }, { x: "10%", y: "15%" },
                { x: "15%", y: "50%" }, { x: "10%", y: "85%" }, { x: "35%", y: "90%" },
                { x: "50%", y: "85%" }, { x: "65%", y: "90%" }, { x: "90%", y: "85%" },
                { x: "85%", y: "50%" }, { x: "90%", y: "15%" }, { x: "65%", y: "10%" }
            ];
            const houseTextPositions = [
                { x: "50%", y: "25%" }, { x: "25%", y: "5%" }, { x: "10%", y: "25%" },
                { x: "30%", y: "45%" }, { x: "7%", y: "65%" }, { x: "25%", y: "82%" },
                { x: "50%", y: "65%" }, { x: "75%", y: "87%" }, { x: "95%", y: "65%" },
                { x: "70%", y: "45%" }, { x: "90%", y: "25%" }, { x: "75%", y: "5%" }
            ];

            for (let house = 1; house <= 12; house++) {
                const rashiInHouse = ((lagna - 1 + house - 1) % 12) + 1;
                const grandTotalForHouse = grandTotals[house - 1];

                const rashiText = document.createElementNS(svgNS, 'text');
                const rashiPos = rashiPositions[house - 1];
                rashiText.setAttribute('x', rashiPos.x);
                rashiText.setAttribute('y', rashiPos.y);
                rashiText.setAttribute('class', 'rashi');
                rashiText.setAttribute('text-anchor', 'middle');
                rashiText.setAttribute('dominant-baseline', 'middle');
                rashiText.textContent = rashiInHouse;
                svg.appendChild(rashiText);

                const totalPos = houseTextPositions[house - 1];
                
                // Create the circle for the total
                const circle = document.createElementNS(svgNS, 'circle');
                circle.setAttribute('cx', totalPos.x);
                circle.setAttribute('cy', totalPos.y);
                circle.setAttribute('r', '16'); // Radius for the circle
                circle.setAttribute('class', 'summary-circle');
                svg.appendChild(circle);

                // Create the text for the total
                const totalText = document.createElementNS(svgNS, 'text');
                totalText.setAttribute('x', totalPos.x);
                totalText.setAttribute('y', totalPos.y);
                totalText.setAttribute('class', 'summary-total');
                totalText.setAttribute('text-anchor', 'middle');
                totalText.setAttribute('dominant-baseline', 'middle');
                totalText.textContent = grandTotalForHouse;
                svg.appendChild(totalText);
            }
            
            chartWrapper.appendChild(chartDiv);
            container.appendChild(chartWrapper);
        }
        
        // --- NEW CIRCULAR CHAKRA DISPLAY LOGIC ---
        function displayCircularChakra() {
             const planetPositions = {};
             PLANETS.forEach(p => { planetPositions[p.toLowerCase()] = parseInt(document.getElementById(p.toLowerCase()).value); });
            planetPositions.lagna = parseInt(document.getElementById('lagna').value);
            
            // Hide other charts
            document.getElementById('ashtakvarga-container').classList.add('hidden');
            document.getElementById('scc-container').classList.add('hidden');
            document.getElementById('scc-summary-container').classList.add('hidden');
            document.getElementById('circular-chakra-container').classList.remove('hidden');
            
            const container = document.getElementById('circular-chakra-output');
            container.innerHTML = ''; // Clear previous chart

            const sccGrahas = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
            const allSccData = {};
            sccGrahas.forEach(g => {
                allSccData[g] = calculateSarvaChanchaChakra(planetPositions, g);
            });
            const totalsRow = Array(96).fill(0);
            sccGrahas.forEach(grahaName => {
                allSccData[grahaName].forEach((bindu, i) => { totalsRow[i] += bindu; });
            });
              // Calculate the grand totals for each house
            const grandTotals = Array(12).fill(0);
            totalsRow.forEach((total, i) => {
                const houseIndex = Math.floor(i / 8);
                grandTotals[houseIndex] += total;
            });

            const lagna = planetPositions.lagna;
            const rashisInOrder = Array.from({length: 12}, (_, i) => RASHI_NAMES_SHORT[(lagna - 1 + i) % 12]);
            
            // --- SVG Drawing based on provided example ---
            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, 'svg');
            svg.setAttribute('width', '600');
            svg.setAttribute('height', '600');
            svg.setAttribute('viewBox', '0 0 600 600');
            
            const defs = document.createElementNS(svgNS, 'defs');
            svg.appendChild(defs);
            
            const SVG_SIZE = 600;
            const CENTER_X = SVG_SIZE / 2;
            const CENTER_Y = SVG_SIZE / 2;

            const NUM_RINGS = 12; // 1 Planet, 1 Rashi, 1 GT, 8 data, 1 Graha Header
            const NUM_SPOKES = 96;

            const OUTER_RADIUS = 290;
            const INNER_RADIUS_START = 100; // Made smaller for new ring
            const RING_THICKNESS = (OUTER_RADIUS - INNER_RADIUS_START) / NUM_RINGS;

              // 1. Draw Concentric Circles
            for (let i = 0; i <= NUM_RINGS; i++) {
                const r = INNER_RADIUS_START + (i * RING_THICKNESS);
                const circle = document.createElementNS(svgNS, 'circle');
                circle.setAttribute('cx', CENTER_X);
                circle.setAttribute('cy', CENTER_Y);
                circle.setAttribute('r', r);
                circle.classList.add('grid-circle');
                circle.setAttribute('stroke-width', '1');
                circle.setAttribute('stroke', '#ccc');
                // Bolder border for the ring separating the grand total
                if (i === 4 || i === 3 || i === 2 || i ===1 || i === 0) { // --- YOU CAN CHANGE THIS VALUE ---
                    circle.setAttribute('stroke-width', '1');
                    circle.setAttribute('stroke', 'black');
                }
                 if (i === 4 || i === 12 || i === 11) { // --- YOU CAN CHANGE THIS VALUE ---
                    circle.setAttribute('stroke-width', '1');
                    circle.setAttribute('stroke', 'black');
                }
                svg.appendChild(circle);
            }

            // 2. Draw Radial Lines
            for (let i = 0; i < NUM_SPOKES; i++) {
                const angle = (i / NUM_SPOKES) * 2 * Math.PI - (Math.PI / 2); // Start from top
                const startX = CENTER_X + INNER_RADIUS_START * Math.cos(angle);
                const startY = CENTER_Y + INNER_RADIUS_START * Math.sin(angle);
                const endX = CENTER_X + OUTER_RADIUS * Math.cos(angle);
                const endY = CENTER_Y + OUTER_RADIUS * Math.sin(angle);

                const line = document.createElementNS(svgNS, 'line');
                line.setAttribute('x1', startX);
                line.setAttribute('y1', startY);
                line.setAttribute('x2', endX);
                line.setAttribute('y2', endY);
                line.classList.add('grid-line');

                // CORRECTED: Apply styles directly in JS
                if (i % 8 === 0) {
                     // --- YOU CAN CHANGE THIS VALUE ---
                    line.setAttribute('stroke-width', '1'); 
                    line.setAttribute('stroke', 'black');
                } else {
                    line.setAttribute('stroke-width', '1');
                    line.setAttribute('stroke', '#ccc');
                }
                svg.appendChild(line);
            }

            // --- CORRECTED FLIPPED LOGIC V9 ---
            const dataRingOrder = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Total'];
            const planetsInHouses = Array.from({ length: 12 }, () => []);
            const lagnaRashi = planetPositions.lagna;
            for (const planet in planetPositions) {
                if (planet !== 'lagna') {
                    const planetRashi = planetPositions[planet];
                    const houseIndex = (planetRashi - lagnaRashi + 12) % 12;
                    planetsInHouses[houseIndex].push(PLANET_MAP[planet]);
                }
            }
            planetsInHouses[0].push(PLANET_MAP.lagna);


            for (let rIdx = 0; rIdx < NUM_RINGS; rIdx++) {
                // Calculate radius from OUTSIDE to INSIDE
                const currentRadius = OUTER_RADIUS - (rIdx * RING_THICKNESS) - (RING_THICKNESS / 2);

                if (rIdx === 0) { // Outermost ring: Graha source headers
                    const pathRadius = currentRadius;
                    for (let sIdx = 0; sIdx < NUM_SPOKES; sIdx++) {
                        const segmentAngle = (2 * Math.PI) / NUM_SPOKES;
                        const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                        const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                        
                        const pathId = `grahaHeaderPath${sIdx}`;
                        const path = document.createElementNS(svgNS, 'path');
                        path.setAttribute('id', pathId);
                        path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                        path.setAttribute('fill', 'none');
                        defs.appendChild(path);

                        const text = document.createElementNS(svgNS, 'text');
                        const textPath = document.createElementNS(svgNS, 'textPath');
                        textPath.setAttribute('href', `#${pathId}`);
                        textPath.setAttribute('startOffset', '50%');
                        textPath.setAttribute('text-anchor', 'middle');
                        textPath.classList.add('header-text');
                        textPath.style.fontSize = '9px'; 
                        textPath.textContent = ASHTAKAVARGA_ROW_ORDER[sIdx % 8].substring(0, 2);
                        
                        text.appendChild(textPath);
                        svg.appendChild(text);
                    }
                } else if (rIdx > 0 && rIdx < 9) { // Data rings (Sun...Total)
                    const grahaName = dataRingOrder[rIdx-1];
                    const dataRow = (grahaName === 'Total') ? totalsRow : allSccData[grahaName];
                     for (let sIdx = 0; sIdx < NUM_SPOKES; sIdx++) {
                          const midAngle = ((sIdx + 0.5) / NUM_SPOKES) * 2 * Math.PI - (Math.PI / 2);
                          const textX = CENTER_X + currentRadius * Math.cos(midAngle);
                          const textY = CENTER_Y + currentRadius * Math.sin(midAngle);
                          const textElement = document.createElementNS(svgNS, 'text');
                          textElement.setAttribute('x', textX);
                          textElement.setAttribute('y', textY);
                          textElement.classList.add('cell-text');
                          textElement.textContent = dataRow[sIdx];
                          svg.appendChild(textElement);
                    }
                } else if (rIdx === 9) { // Grand Totals
                    const pathRadius = currentRadius;
                    for (let sIdx = 0; sIdx < 12; sIdx++) {
                        const segmentAngle = (2 * Math.PI) / 12;
                        const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                        const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                        
                        const pathId = `grandTotalPath${sIdx}`;
                        const path = document.createElementNS(svgNS, 'path');
                        path.setAttribute('id', pathId);
                        path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                        path.setAttribute('fill', 'none');
                        defs.appendChild(path);

                        const text = document.createElementNS(svgNS, 'text');
                        const textPath = document.createElementNS(svgNS, 'textPath');
                        textPath.setAttribute('href', `#${pathId}`);
                        textPath.setAttribute('startOffset', '50%');
                        textPath.setAttribute('text-anchor', 'middle');
                        textPath.classList.add('grand-total-text');
                        textPath.textContent = grandTotals[sIdx];
                        text.appendChild(textPath);
                        svg.appendChild(text);
                   }
                } else if (rIdx === 10) { // Rashi Names
                     const pathRadius = currentRadius;
                     for (let sIdx = 0; sIdx < 12; sIdx++) {
                          const segmentAngle = (2 * Math.PI) / 12;
                          const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                          const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                          
                          const pathId = `rashiPath${sIdx}`;
                          const path = document.createElementNS(svgNS, 'path');
                          path.setAttribute('id', pathId);
                          path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                          path.setAttribute('fill', 'none');
                          defs.appendChild(path);

                          const text = document.createElementNS(svgNS, 'text');
                          const textPath = document.createElementNS(svgNS, 'textPath');
                          textPath.setAttribute('href', `#${pathId}`);
                          textPath.setAttribute('startOffset', '50%');
                          textPath.setAttribute('text-anchor', 'middle');
                          textPath.classList.add('header-text');
                          textPath.textContent = `${rashisInOrder[sIdx]}`;
                          
                          text.appendChild(textPath);
                          svg.appendChild(text);
                    }
                } else { // Innermost Ring (rIdx === 11): Planet Names
                    const pathRadius = currentRadius;
                     for (let sIdx = 0; sIdx < 12; sIdx++) {
                          const planets = planetsInHouses[sIdx];
                          const segmentAngle = (2 * Math.PI) / 12;
                          const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                          const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                          
                          const pathId = `planetPath${sIdx}`;
                          const path = document.createElementNS(svgNS, 'path');
                          path.setAttribute('id', pathId);
                          path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                          path.setAttribute('fill', 'none');
                          defs.appendChild(path);

                          const text = document.createElementNS(svgNS, 'text');
                          const textPath = document.createElementNS(svgNS, 'textPath');
                          textPath.setAttribute('href', `#${pathId}`);
                          textPath.setAttribute('startOffset', '50%');
                          textPath.setAttribute('text-anchor', 'middle');
                          textPath.classList.add('planet-text');

                          const baseFontSize = 11;
                          let finalFontSize = baseFontSize;
                          if (planets.length > 2) {
                             finalFontSize = Math.max(6, baseFontSize - (planets.length - 2) * 1.5); 
                          }
                          textPath.style.fontSize = finalFontSize + 'px';

                          textPath.textContent = planets.join(' ') || '-';
                          
                          text.appendChild(textPath);
                          svg.appendChild(text);
                    }
                }
            }
            container.appendChild(svg);
        }




        //pdf
        const SCC_GRAHAS = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn']; 
         function calculateAllChartData(planetPositions) {
            const allSccData = {};
            SCC_GRAHAS.forEach(g => {
                const lagna = planetPositions.lagna;
                const ashtakData = calculateAshtakavarga(planetPositions, g);
                const sccRow = [];
                if(ashtakData) {
                    for (let i = 0; i < 12; i++) {
                        const rashiIdx = (lagna - 1 + i) % 12;
                        ASHTAKAVARGA_ROW_ORDER.forEach(source => sccRow.push(ashtakData.rows[source][rashiIdx]));
                    }
                }
                allSccData[g] = sccRow;
            });
            const totalsRow = Array(96).fill(0);
            SCC_GRAHAS.forEach(g => {
                if(allSccData[g] && allSccData[g].length === 96) {
                    allSccData[g].forEach((bindu, i) => totalsRow[i] += bindu);
                }
            });
            const grandTotals = Array(12).fill(0).map((_, i) => totalsRow.slice(i * 8, i * 8 + 8).reduce((a, b) => a + b, 0));
            return { allSccData, totalsRow, grandTotals };
        }

         function drawKundliForPDF(containerId, planetPositions) {
            const container = document.getElementById(containerId);
            container.innerHTML = `<div class="kundli-chart"></div>`;
            const chartDiv = container.querySelector('.kundli-chart');
            const lagnaRashi = planetPositions.lagna;
            const rashiToHouseMap = {};
            for (let house = 1; house <= 12; house++) {
                rashiToHouseMap[((lagnaRashi - 1 + house - 1) % 12) + 1] = house;
            }
            const planetsInHouse = Array.from({ length: 13 }, () => []);
            planetsInHouse[1].push(PLANET_MAP.lagna);
            for (const planet in planetPositions) {
                if (planet !== 'lagna') {
                    const targetHouse = rashiToHouseMap[planetPositions[planet]];
                    if (targetHouse) planetsInHouse[targetHouse].push(PLANET_MAP[planet]);
                }
            }
            let svgHTML = `<svg width="100%" height="100%" viewBox="0 0 440 440">
                <line x1="0" y1="0" x2="440" y2="440" class="kundli-lines" /><line x1="220" y1="0" x2="0" y2="220" class="kundli-lines" /><line x1="440" y1="220" x2="220" y2="0" class="kundli-lines" /><line x1="0" y1="220" x2="220" y2="440" class="kundli-lines" /><line x1="220" y1="440" x2="440" y2="220" class="kundli-lines" /><line x1="440" y1="0" x2="0" y2="440" class="kundli-lines" />`;
            const housePos = [ {x:220,y:110}, {x:110,y:22}, {x:44,y:88}, {x:132,y:198}, {x:31,y:286}, {x:110,y:361}, {x:220,y:286}, {x:330,y:383}, {x:418,y:286}, {x:308,y:198}, {x:396,y:88}, {x:330,y:22} ];
            const rashiPos = [ {x:220,y:66}, {x:154,y:44}, {x:44,y:66}, {x:66,y:220}, {x:44,y:374}, {x:154,y:396}, {x:220,y:374}, {x:286,y:396}, {x:396,y:374}, {x:374,y:220}, {x:396,y:66}, {x:286,y:44} ];
            
            for (let house = 1; house <= 12; house++) {
                const rashiInHouse = ((lagnaRashi - 1 + house - 1) % 12) + 1;
                svgHTML += `<text x="${rashiPos[house - 1].x}" y="${rashiPos[house - 1].y}" class="rashi" text-anchor="middle">${rashiInHouse}</text>`;
                
                const planets = planetsInHouse[house];
                if (planets.length > 0) {
                    const x = housePos[house - 1].x;
                    let y = housePos[house - 1].y;
                    
                    // Create lines of 2 planets each
                    const lines = [];
                    for (let i = 0; i < planets.length; i += 2) {
                        lines.push(planets.slice(i, i + 2).join(' '));
                    }

                    // Adjust starting Y position to center the block of text
                    const yOffset = (lines.length - 1) * 15 / 2;
                    y -= yOffset;

                    lines.forEach((lineText, index) => {
                        const currentY = y + (index * 28); // 28 is the line height
                        svgHTML += `<text x="${x}" y="${currentY}" class="house-text" text-anchor="middle" dominant-baseline="middle">${lineText}</text>`;
                    });
                }
            }
            svgHTML += `</svg>`;
            chartDiv.innerHTML = svgHTML;
        }

        function drawSccSummaryKundliForPDF(containerId, grandTotals, lagna) {
            const container = document.getElementById(containerId);
            container.innerHTML = `<div class="kundli-chart"></div>`;
            const chartDiv = container.querySelector('.kundli-chart');
            let svgHTML = `<svg width="100%" height="100%" viewBox="0 0 440 440">
                <line x1="0" y1="0" x2="440" y2="440" class="kundli-lines" /><line x1="220" y1="0" x2="0" y2="220" class="kundli-lines" /><line x1="440" y1="220" x2="220" y2="0" class="kundli-lines" /><line x1="0" y1="220" x2="220" y2="440" class="kundli-lines" /><line x1="220" y1="440" x2="440" y2="220" class="kundli-lines" /><line x1="440" y1="0" x2="0" y2="440" class="kundli-lines" />`;
            const housePos = [ {x:220,y:110}, {x:110,y:30}, {x:44,y:95}, {x:132,y:198}, {x:31,y:295}, {x:110,y:375}, {x:220,y:286}, {x:330,y:383}, {x:405,y:300}, {x:308,y:210}, {x:396,y:95}, {x:330,y:30} ];
            const rashiPos = [ {x:220,y:66}, {x:154,y:47}, {x:44,y:66}, {x:66,y:220}, {x:44,y:374}, {x:154,y:396}, {x:220,y:374}, {x:286,y:396}, {x:396,y:374}, {x:374,y:220}, {x:396,y:66}, {x:286,y:47} ];
            for (let house = 1; house <= 12; house++) {
                const rashiInHouse = ((lagna - 1 + house - 1) % 12) + 1;
                svgHTML += `<text x="${rashiPos[house - 1].x}" y="${rashiPos[house - 1].y}" class="rashi" text-anchor="middle">${rashiInHouse}</text>`;
                svgHTML += `<circle cx="${housePos[house - 1].x}" cy="${housePos[house - 1].y}" r="26" class="summary-circle" />`;
                svgHTML += `<text x="${housePos[house - 1].x}" y="${housePos[house - 1].y}" class="summary-total" text-anchor="middle" dominant-baseline="central">${grandTotals[house - 1]}</text>`;
            }
            svgHTML += `</svg>`;
            chartDiv.innerHTML = svgHTML;
        }
        


       function generateTableHTML(planet, data) {
    // 1. Changed "planet-title" to show the planet name
    let html = `<div class="mini-container"><div class="planet-title">${planet.toUpperCase()}</div><table class="ashtak-table"><thead><tr><th>Pl</th>`;
    
    // Header for the 12 Rashis
    for(let i=1; i<=12; i++) html += `<th>${i}</th>`;
    html += `<th>T</th></tr></thead><tbody>`;
    
    // 2. IMPORTANT: Use data.rows (not data.table)
    // Also ensure ROW_ORDER matches the keys in your data.rows (e.g., "Saturn", "Sun", etc.)
    ASHTAKAVARGA_ROW_ORDER.forEach(row => {
        const rowData = data.rows[row]; // This was causing the 'Saturn' error
        
        if (rowData) {
            html += `<tr><td class="bg-gray-50 font-bold">${row.substring(0,2)}</td>`;
            // data.rows[row] is already an array [0, 1, 0... points]
            rowData.forEach(v => html += `<td>${v}</td>`);
            html += `</tr>`;
        }
    });
    
    // 3. IMPORTANT: Use data.totalsRow (not data.totals)
    html += `<tr class="total-row"><td>Sum</td>`;
    data.totalsRow.forEach(v => html += `<td>${v}</td>`);
    
    // 4. Use the pre-calculated grandTotal string
    html += `<td>${data.grandTotal}</td></tr></tbody></table></div>`;
    
    return html;
}



        function drawCircularChakraForPDF(containerId, planetPositions, chartData) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            const { allSccData, totalsRow, grandTotals } = chartData;
            const lagna = planetPositions.lagna;
            const rashisInOrder = Array.from({length: 12}, (_, i) => RASHI_NAMES_SHORT[(lagna - 1 + i) % 12]);

            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, 'svg');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.setAttribute('viewBox', '0 0 600 600');
            
            const defs = document.createElementNS(svgNS, 'defs');
            svg.appendChild(defs);
            
            const SVG_SIZE = 600;
            const CENTER_X = SVG_SIZE / 2;
            const CENTER_Y = SVG_SIZE / 2;

            const NUM_RINGS = 12; // 1 Planet, 1 Rashi, 1 GT, 8 data, 1 Graha Header
            const NUM_SPOKES = 96;

            const OUTER_RADIUS = 300;
            const INNER_RADIUS_START = 110; // Made smaller for new ring
            const RING_THICKNESS = (OUTER_RADIUS - INNER_RADIUS_START) / NUM_RINGS;

            // 1. Draw Concentric Circles - COPIED FROM displayCircularChakra
            for (let i = 0; i <= NUM_RINGS; i++) {
                const r = INNER_RADIUS_START + (i * RING_THICKNESS);
                const circle = document.createElementNS(svgNS, 'circle');
                circle.setAttribute('cx', CENTER_X);
                circle.setAttribute('cy', CENTER_Y);
                circle.setAttribute('r', r);
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke-width', '1');
                circle.setAttribute('stroke', '#ccc');
                if (i === 4 || i === 3 || i === 2 || i ===1 || i === 0) {
                    circle.setAttribute('stroke-width', '1');
                    circle.setAttribute('stroke', 'black');
                }
                 if (i === 4 || i === 12 || i === 11) {
                    circle.setAttribute('stroke-width', '1');
                    circle.setAttribute('stroke', 'black');
                }
                svg.appendChild(circle);
            }

            // 2. Draw Radial Lines - COPIED FROM displayCircularChakra
            for (let i = 0; i < NUM_SPOKES; i++) {
                const angle = (i / NUM_SPOKES) * 2 * Math.PI - (Math.PI / 2); // Start from top
                const startX = CENTER_X + INNER_RADIUS_START * Math.cos(angle);
                const startY = CENTER_Y + INNER_RADIUS_START * Math.sin(angle);
                const endX = CENTER_X + OUTER_RADIUS * Math.cos(angle);
                const endY = CENTER_Y + OUTER_RADIUS * Math.sin(angle);

                const line = document.createElementNS(svgNS, 'line');
                line.setAttribute('x1', startX);
                line.setAttribute('y1', startY);
                line.setAttribute('x2', endX);
                line.setAttribute('y2', endY);

                if (i % 8 === 0) {
                    line.setAttribute('stroke-width', '1'); 
                    line.setAttribute('stroke', 'black');
                } else {
                    line.setAttribute('stroke-width', '1');
                    line.setAttribute('stroke', '#ccc');
                }
                svg.appendChild(line);
            }
            
            const dataRingOrder = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Total'];
            const planetsInHouses = Array.from({ length: 12 }, () => []);
            const lagnaRashi = planetPositions.lagna;
            for (const planet in planetPositions) {
                if (planet !== 'lagna') {
                    const houseIndex = (planetPositions[planet] - lagnaRashi + 12) % 12;
                    planetsInHouses[houseIndex].push(PLANET_MAP[planet]);
                }
            }
            planetsInHouses[0].push(PLANET_MAP.lagna);

            // 3. Draw Text - LOGIC ADAPTED FROM displayCircularChakra
            for (let rIdx = 0; rIdx < NUM_RINGS; rIdx++) {
                const currentRadius = OUTER_RADIUS - (rIdx * RING_THICKNESS) - (RING_THICKNESS / 2);

                if (rIdx === 0) { // Outermost ring: Graha source headers
                    const pathRadius = currentRadius;
                    for (let sIdx = 0; sIdx < NUM_SPOKES; sIdx++) {
                        const segmentAngle = (2 * Math.PI) / NUM_SPOKES;
                        const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                        const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                        
                        const pathId = `pdf_grahaHeaderPath${sIdx}`;
                        const path = document.createElementNS(svgNS, 'path');
                        path.setAttribute('id', pathId);
                        path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                        path.setAttribute('fill', 'none');
                        defs.appendChild(path);

                        const text = document.createElementNS(svgNS, 'text');
                        const textPath = document.createElementNS(svgNS, 'textPath');
                        textPath.setAttribute('href', `#${pathId}`);
                        textPath.setAttribute('startOffset', '50%');
                        textPath.setAttribute('text-anchor', 'middle');
                        textPath.setAttribute('class', 'header-text');
                        textPath.style.fontSize = '12px'; 
                        textPath.textContent = ASHTAKAVARGA_ROW_ORDER[sIdx % 8].substring(0, 2);
                        
                        text.appendChild(textPath);
                        svg.appendChild(text);
                    }
                } else if (rIdx > 0 && rIdx < 9) { // Data rings (Sun...Total)
                    const grahaName = dataRingOrder[rIdx-1];
                    const dataRow = (grahaName === 'Total') ? totalsRow : allSccData[grahaName];
                    if(dataRow) {
                        for (let sIdx = 0; sIdx < NUM_SPOKES; sIdx++) {
                            const midAngle = ((sIdx + 0.5) / NUM_SPOKES) * 2 * Math.PI - (Math.PI / 2);
                            const textX = CENTER_X + currentRadius * Math.cos(midAngle);
                            const textY = CENTER_Y + currentRadius * Math.sin(midAngle);
                            const textElement = document.createElementNS(svgNS, 'text');
                            textElement.setAttribute('x', textX);
                            textElement.setAttribute('y', textY);
                            textElement.setAttribute('class', 'cell-text'); // Use class from style
                            textElement.setAttribute('text-anchor', 'middle');
                            textElement.setAttribute('dominant-baseline', 'central');
                            textElement.textContent = dataRow[sIdx];
                            svg.appendChild(textElement);
                        }
                    }
                } else if (rIdx === 9) { // Grand Totals
                    const pathRadius = currentRadius;
                    for (let sIdx = 0; sIdx < 12; sIdx++) {
                        const segmentAngle = (2 * Math.PI) / 12;
                        const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                        const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                        
                        const pathId = `pdf_grandTotalPath${sIdx}`;
                        const path = document.createElementNS(svgNS, 'path');
                        path.setAttribute('id', pathId);
                        path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                        path.setAttribute('fill', 'none');
                        defs.appendChild(path);

                        const text = document.createElementNS(svgNS, 'text');
                        const textPath = document.createElementNS(svgNS, 'textPath');
                        textPath.setAttribute('href', `#${pathId}`);
                        textPath.setAttribute('startOffset', '50%');
                        textPath.setAttribute('text-anchor', 'middle');
                        textPath.setAttribute('class', 'grand-total-text'); // Use class from style
                        textPath.textContent = grandTotals[sIdx];
                        text.appendChild(textPath);
                        svg.appendChild(text);
                   }
                } else if (rIdx === 10) { // Rashi Names
                     const pathRadius = currentRadius;
                     for (let sIdx = 0; sIdx < 12; sIdx++) {
                          const segmentAngle = (2 * Math.PI) / 12;
                          const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                          const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                          
                          const pathId = `pdf_rashiPath${sIdx}`;
                          const path = document.createElementNS(svgNS, 'path');
                          path.setAttribute('id', pathId);
                          path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                          path.setAttribute('fill', 'none');
                          defs.appendChild(path);

                          const text = document.createElementNS(svgNS, 'text');
                          const textPath = document.createElementNS(svgNS, 'textPath');
                          textPath.setAttribute('href', `#${pathId}`);
                          textPath.setAttribute('startOffset', '50%');
                          textPath.setAttribute('text-anchor', 'middle');
                          textPath.setAttribute('class', 'header-text'); // Use class from style
                          textPath.textContent = `${rashisInOrder[sIdx]}`;
                          
                          text.appendChild(textPath);
                          svg.appendChild(text);
                    }
                } else { // Innermost Ring (rIdx === 11): Planet Names
                    const pathRadius = currentRadius;
                     for (let sIdx = 0; sIdx < 12; sIdx++) {
                          const planets = planetsInHouses[sIdx];
                          const segmentAngle = (2 * Math.PI) / 12;
                          const startAngle = (sIdx * segmentAngle) - (Math.PI / 2);
                          const endAngle = ((sIdx + 1) * segmentAngle) - (Math.PI / 2);
                          
                          const pathId = `pdf_planetPath${sIdx}`;
                          const path = document.createElementNS(svgNS, 'path');
                          path.setAttribute('id', pathId);
                          path.setAttribute('d', `M ${CENTER_X + pathRadius * Math.cos(startAngle)} ${CENTER_Y + pathRadius * Math.sin(startAngle)} A ${pathRadius} ${pathRadius} 0 0 1 ${CENTER_X + pathRadius * Math.cos(endAngle)} ${CENTER_Y + pathRadius * Math.sin(endAngle)}`);
                          path.setAttribute('fill', 'none');
                          defs.appendChild(path);

                          const text = document.createElementNS(svgNS, 'text');
                          const textPath = document.createElementNS(svgNS, 'textPath');
                          textPath.setAttribute('href', `#${pathId}`);
                          textPath.setAttribute('startOffset', '50%');
                          textPath.setAttribute('text-anchor', 'middle');
                          textPath.setAttribute('class', 'planet-text');
                           
                          const baseFontSize = 16;
                          let finalFontSize = baseFontSize;
                          if (planets.length > 2) {
                             finalFontSize = Math.max(9, baseFontSize - (planets.length - 2) * 2); 
                          }
                          textPath.style.fontSize = finalFontSize + 'px';

                          textPath.textContent = planets.join(' ') || '-';
                          
                          text.appendChild(textPath);
                          svg.appendChild(text);
                    }
                }
            }
            container.appendChild(svg);
        }

       async function downloadReportPDF() {
            const downloadBtn = document.getElementById('download-report-btn');
            const originalText = downloadBtn.textContent;
            downloadBtn.textContent = 'Generating...';
            downloadBtn.disabled = true;

            try {
                const userName = document.getElementById('user-name').value || 'JSK';
                const planetPositions = { lagna: parseInt(document.getElementById('lagna').value) };
                PLANETS.forEach(p => planetPositions[p.toLowerCase()] = parseInt(document.getElementById(p.toLowerCase()).value));

                document.getElementById('pdf-header-name').textContent = userName;

                const chartData = calculateAllChartData(planetPositions);
                
                drawKundliForPDF('pdf-birth-chart', planetPositions);
                // drawSccSummaryKundliForPDF('pdf-summary-chart', chartData.grandTotals, planetPositions.lagna);
                drawCircularChakraForPDF('pdf-scc-circular', planetPositions, chartData);

                //sun ashtak
                const sunData = calculateAshtakavarga(planetPositions, 'Sun');
                document.getElementById('pdf-sun-table-box').innerHTML = generateTableHTML('Sun', sunData);

                const gridBox = document.getElementById('pdf-planets-grid');
    gridBox.innerHTML = '';
    ["Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"].forEach(p => {
        gridBox.innerHTML += generateTableHTML(p, calculateAshtakavarga(planetPositions, p));
    });
                
                const { jsPDF } = window.jspdf;                
                const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });               

                // doc.save(`${userName.replace(/ /g, '_')}-Ashtak_varga_chart.pdf`);
                const page1 = await html2canvas(document.getElementById('page-1'), { scale: 2 });
                doc.addImage(page1.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, 210, 297);
    
                doc.addPage();
                const page2 = await html2canvas(document.getElementById('page-2'), { scale: 2 });
                doc.addImage(page2.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, 210, 297);

                doc.save(`${userName.replace(/\s+/g, '_')}_ashtakvarga_Report.pdf`);
                downloadBtn.innerHTML = "Download PDF Report";

            } catch (error) {
                console.error("Error generating PDF:", error);
                alert("An error occurred while generating the PDF. Please check the console for details.");
            } finally {
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
            }
        }
