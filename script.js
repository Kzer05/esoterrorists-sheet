function saveNameByInput() {
    const nameInput = document.querySelector("#name-input")
    nameCharacther =  nameInput.value
    localStorage.setItem('name', nameInput.value);
}

function saveNameByVar() {
    const nameInput = document.querySelector("#name-input")
    nameInput.value = nameCharacther
    localStorage.setItem('name', nameCharacther);
}

function loadName() {
    return localStorage.getItem('name') ?? "";
}
function showName() {
    document.querySelector("#name-input").value = nameCharacther
}


function saveSkills() {
    const skillsJSON = JSON.stringify(skills);
    localStorage.setItem('skills', skillsJSON);
}

function loadSkills() {
    const skillsJSON = localStorage.getItem('skills');

    if (skillsJSON) {
        return JSON.parse(skillsJSON);
    } else {
        return {
            academic: [
                { "pt-br": "antropologia", "en-us": "anthropology", value: null },
                { "pt-br": "arqueologia", "en-us": "archaeology", value: null },
                { "pt-br": "arquitetura", "en-us": "architecture", value: null },
                { "pt-br": "história da arte", "en-us": "art-history", value: null },
                { "pt-br": "contabilidade forense", "en-us": "forensic-accounting", value: null },
                { "pt-br": "psicologia forense", "en-us": "forensic-psychology", value: null },
                { "pt-br": "história", "en-us": "history", value: null },
                { "pt-br": "linguagens", "en-us": "languages", value: null },
                { "pt-br": "lei", "en-us": "law", value: null },
                { "pt-br": "linguística", "en-us": "linguistics", value: null },
                { "pt-br": "conhecimento do local", "en-us": "local-knowledge", value: null },
                { "pt-br": "história natural", "en-us": "natural-history", value: null },
                { "pt-br": "estudos do ocultismo", "en-us": "occult-studies", value: null },
                { "pt-br": "patologia", "en-us": "pathology", value: null },
                { "pt-br": "pesquisa", "en-us": "research", value: null },
                { "pt-br": "análise textual", "en-us": "textual-analysis", value: null },
                { "pt-br": "curiosidades", "en-us": "trivia", value: null }
            ],
            interpersonal: [
                { "pt-br": "detector de besteira", "en-us": "bullshit-detector", value: null },
                { "pt-br": "burocracia", "en-us": "bureaucracy", value: null },
                { "pt-br": "conversa policial", "en-us": "cop-talk", value: null },
                { "pt-br": "lisonjeiro", "en-us": "flattery", value: null },
                { "pt-br": "flerte", "en-us": "flirting", value: null },
                { "pt-br": "personificar", "en-us": "impersonate", value: null },
                { "pt-br": "interrogação", "en-us": "interrogation", value: null },
                { "pt-br": "intimidação", "en-us": "intimidation", value: null },
                { "pt-br": "negociação", "en-us": "negotiation", value: null },
                { "pt-br": "resseguro", "en-us": "reassurance", value: null },
                { "pt-br": "linguagem de rua", "en-us": "streetwise", value: null }
            ],
            technical: [
                { "pt-br": "astronomia", "en-us": "astronomy", value: null },
                { "pt-br": "balística", "en-us": "ballistics", value: null },
                { "pt-br": "química", "en-us": "chemistry", value: null },
                { "pt-br": "criptografia", "en-us": "cryptography", value: null },
                { "pt-br": "recuperar dados", "en-us": "data-retrieval", value: null },
                { "pt-br": "análise de documentos", "en-us": "document-analysis", value: null },
                { "pt-br": "vigilância eletrônica", "en-us": "electronic-surveillance", value: null },
                { "pt-br": "coletar evidências", "en-us": "evidence-collection", value: null },
                { "pt-br": "dispositivos explosivos", "en-us": "explosive-devices", value: null },
                { "pt-br": "digitais", "en-us": "fingerprinting", value: null },
                { "pt-br": "antropologia forense", "en-us": "forensic-anthropology", value: null },
                { "pt-br": "entomologia forense", "en-us": "forensic-entomology", value: null },
                { "pt-br": "fotografia", "en-us": "photography", value: null }
            ],
            general: [
                { "pt-br": "atletismo", "en-us": "athletics", value: null },
                { "pt-br": "dirigir", "en-us": "driving", value: null },
                { "pt-br": "roubar", "en-us": "filch", value: null },
                { "pt-br": "vitalidade", "en-us": "health", value: null },
                { "pt-br": "infiltração", "en-us": "infiltration", value: null },
                { "pt-br": "mecânica", "en-us": "mechanics", value: null },
                { "pt-br": "medicina", "en-us": "medic", value: null },
                { "pt-br": "preparado", "en-us": "preparedness", value: null },
                { "pt-br": "briga", "en-us": "scuffling", value: null },
                { "pt-br": "disparo", "en-us": "shooting", value: null },
                { "pt-br": "encolher", "en-us": "shrink", value: null },
                { "pt-br": "estabilidade", "en-us": "stability", value: null },
                { "pt-br": "vigilância", "en-us": "surveillance", value: null }
            ]
        }
    }
}

var skills = loadSkills();
console.log(loadSkills())

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function generateHTML(language, hideNoneValue) {
    let html = '';
    for (const category in skills) {
        html += `<div class="card">
                    <h2 class="title">${category.toUpperCase()}</h2>`;
        for (const skill of skills[category]) {
            const skillName = capitalizeFirstLetter(skill[language]).replace(/-/g, " ");

            if (hideNoneValue && (skill.value == null || (skill.value[0] == 0 && (!skill.value[1] || skill.value[1] == 0)) || skill.value[1] == 0)) continue

            if (category != "general") {
                if (!skill.value) {
                    skill.value = [0]
                }
                var value = `<input id="current-${skill['en-us']}" value="${skill.value[0]}" type="number" onchange="changeSkillValue('${category}','${skill['en-us']}', 'current')">`
            }
            else {
                if (!skill.value) {
                    skill.value = [0, 0]
                }
                var value = `<input id="current-${skill['en-us']}" value="${skill.value[0]}" type="number" onchange="changeSkillValue('${category}','${skill['en-us']}', 'current')"> / <input id="max-${skill['en-us']}" value="${skill.value[1]}" type="number" onchange="changeSkillValue('${category}','${skill['en-us']}','max')"/>`
            }

            html += `<div class="skill">
                        <p>${skillName}</p>
                        <div class="values">${value}</div>
                    </div>`;
        }
        html += `</div>`;
    }
    return html;
}

function changeSkillValue(category, englishNameSkill, type) {
    console.log(category)
    for (const skill of skills[category]) {
        if (skill["en-us"] == englishNameSkill) {
            newValue = document.querySelector("#" + type + "-" + englishNameSkill).value
            if (type == "current") {
                skill.value[0] = newValue
            }
            else {
                skill.value[1] = newValue
            }
        }
    }

    saveSkills()
}


function changeLanguage() {
    language = language != "pt-br" ? "pt-br" : "en-us"
    statsElement.innerHTML = generateHTML(language, hideNoneValue);
}
function changeHideNoneValue() {
    hideNoneValue = !hideNoneValue
    statsElement.innerHTML = generateHTML(language, hideNoneValue);
}


function downloadJSON(jsonData, filename) {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadSkills() {
    const jsonData = JSON.stringify(skills);
    const filename = name + '.json';
    downloadJSON(jsonData, filename);
}

const fileInput = document.getElementById('file-input');

fileInput.onchange = function (event) {
    const file = event.target.files[0];
    if (!file) {
        alert('Nenhum arquivo selecionado.');
        return;
    }
    handleFile(file);
};

function handleFile() {
    const file = fileInput.files[0];

    if (!file) {
        alert('Selecione um arquivo JSON.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const jsonData = event.target.result;
        try {
            skills = JSON.parse(jsonData);
            console.log('JSON carregado com sucesso!');
            console.log(skills);
            saveSkills()

            nameCharacther = file.name.split('.').slice(0, -1).join('.');

            saveNameByVar()
            statsElement.innerHTML = generateHTML(language, hideNoneValue);

        } catch (error) {
            console.error('Erro ao carregar JSON:', error);
            alert('Erro ao carregar JSON. Verifique se o arquivo é válido.');
        }
    };
    reader.readAsText(file);
}

function loadDataSkills() {
    fileInput.click()
}

var language = 'pt-br';
var hideNoneValue = false;

var nameCharacther = loadName()

const statsElement = document.querySelector('#stats');

statsElement.innerHTML = generateHTML(language, hideNoneValue);
showName()