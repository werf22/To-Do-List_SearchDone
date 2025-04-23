# Dokumentácia Vstup

Tags: Productivity, Task Management
AI keywords: Productivity, Task Management
AI summary: Dokumentácia pre formulár "Nový Rýchly Task" obsahuje pokyny na vyplnenie polí ako názov úlohy, rodičovská úloha, portfólio, projekt, sekcia a ďalšie relevantné informácie pre AI, aby efektívne spracovala úlohu a generovala akčné kroky.
Parent item: Vstup (https://www.notion.so/Vstup-1cf75c7df21880e8a92fffdd0f315579?pvs=21)

**Dokumentácia Polí / fields Formulára "Nový Rýchly Task"**

## **Name**

- **Typ:** Štandardné Asana pole (Text)
- **Účel:** Základná identifikácia úlohy. Mal by byť jasný, stručný a začínať akčným slovesom.
- **Pre Teba:** Rýchla orientácia v zozname úloh.
- **Pre AI:** Prvotný a kľúčový text na analýzu kontextu a zámeru úlohy.
- **Ako vyplniť:** [Sloveso] + [Cieľ/Objekt] + [Stručný Kontext]. Napr.: Napísať blog post o Pomodoro technike, Zorganizovať stretnutie s klientom XY, Preskúmať AI nástroje na sumarizáciu.
- **Mapuje sa na Field #2:** Task Name (Asana Štandard - Text)
- **Dokumentácia:** Základný popis úlohy. Mal by byť stručný, výstižný a začať akčným slovesom. AI ho použije ako hlavný vstup pre pochopenie základného zámeru.
- **Ty:** Napíš jasný názov.
- **AI:** Číta názov pre kontext.

## Parent Task

- **Typ:** Text
- Ak viem akej úlohy subtask toto je… tak parent task je hlavná úloha, ktorej úloha ktorú vkladám je podúlohou
1. **Suggested Initial Steps / Subtasks**
    - **Typ:** Custom Field (Multi-line Text)
    - **Účel:** Miesto pre tvoj prvotný nápad, ako by sa dala úloha rozložiť alebo aké by mali byť prvé kroky. Nepovinné.
    - **Pre Teba:** Pomáha ti štruktúrovať myšlienky pri zadávaní komplexnejšej úlohy.
    - **Pre AI:** Vstup pre funkciu "Generovanie Akčných Krokov". AI môže tieto návrhy použiť, rozšíriť alebo ignorovať, ak má lepší plán.
    - **Ako vyplniť:** V bodoch alebo stručných vetách napíš prvé kroky, ktoré ti napadnú. Napr.: 1. Research kľúčové slová. 2. Vytvoriť osnovu. 3. Napísať prvý draft.
    - **Dokumentácia:** Sem môžeš napísať svoje prvé nápady na kroky alebo podúlohy. Je to **vstupný text** pre AI, ktorá potom môže (ak je to jej akcia) vytvoriť skutočné Asana podúlohy (Field #8) alebo štruktúrovaný zoznam krokov v poli Navrhované Kroky / Podúlohy (#19 v plnej databáze).
    - **Ty:** Voliteľne napíš svoje nápady na kroky.
    - **AI:** Číta tento vstup a použije ho pri generovaní finálneho plánu / podúloh.

## **Portfolio**

- **Typ:** Custom Field (Dropdown)
- **Účel:** Primárne zaradenie úlohy do jednej z tvojich hlavných oblastí života/práce. Kľúčové pre vysokú úroveň organizácie.
- **Pre Teba:** Pomáha ti udržať si prehľad na najvyššej úrovni.
- **Pre AI:** Dáva silný počiatočný kontext pre ďalšiu kategorizáciu a spracovanie. Ak nevyplníš, AI sa pokúsi určiť najvhodnejšie.
- **Ako vyplniť:** Vyber jednu z tvojich 13 definovaných kategórií portfólií.
- **Mapuje sa na Field #4:** Portfolio (Custom Field - Dropdown)
- **Dokumentácia:** Tvoje primárne zaradenie úlohy do jednej z 13 hlavných oblastí. Ak vyplníš, AI to rešpektuje. Ak necháš prázdne, AI sa pokúsi určiť najvhodnejšie portfólio a vyplní toto pole.
- **Ty:** Voliteľne vyber portfólio.
- **AI:** Číta tvoj výber alebo analyzuje kontext a vyplní/potvrdí toto pole.

## **Project**

- **Typ:** Štandardné Asana pole (Dropdown - Project Field)
- **Účel:** Zaradenie úlohy do konkrétnej iniciatívy, produktu alebo oblasti zodpovednosti v rámci portfólia. Nevyhnutné pre štruktúru Asany.
- **Pre Teba:** Umožňuje ti vidieť všetky súvisiace úlohy pre daný projekt pohromade.
- **Pre AI:** Poskytuje ďalší dôležitý kontext. Ak AI presúva úlohu, presunie ju do *iného*, vhodnejšieho projektu.
- **Ako vyplniť:** Vyber projekt, kam úloha logicky patrí. **Ak formulár smeruje do GLOBAL INBOX projektu, vyber ten.** AI potom úlohu presunie podľa potreby.
- **Mapuje sa na Field #5:** Project (Asana Štandard - Project Field)
- **Dokumentácia:** Konkrétny projekt, kam úloha patrí. Technicky musí byť úloha pri vytváraní v nejakom projekte (napr. GLOBAL INBOX). Ty môžeš zadať cieľový projekt, inak AI vyberie najvhodnejší na základe portfólia a kontextu a presunie úlohu.
- **Ty:** Vyber GLOBAL INBOX alebo, ak vieš, priamo cieľový projekt.
- **AI:** Číta tvoj výber, overuje/určuje finálny projekt a presúva úlohu.

## **Section**

- **Typ:** Custom Field (Dropdown)
- **Účel:** Návrh tematickej sekcie (podľa tvojej štruktúry projektov), kam by úloha mala byť vizuálne zaradená v rámci cieľového projektu.
- **Pre Teba:** Možnosť ovplyvniť finálne vizuálne umiestnenie úlohy.
- **Pre AI:** Inštrukcia, do ktorej Asana sekcie má úlohu presunúť. Ak necháš prázdne, AI vyberie najvhodnejšiu (napr.  INBOX alebo tematickú sekciu).
- **Ako vyplniť:** Napíš názov existujúcej sekcie v cieľovom projekte (napr.  Marketing,  Tvorba Obsahu).
- **Mapuje sa na Field #6:** Section (Custom Field - Text)
- **Dokumentácia:** Názov tematickej sekcie v cieľovom projekte. AI použije túto informáciu na presun úlohy do správnej Asana sekcie. Ak necháš prázdne, AI vyberie najvhodnejšiu (napr. INBOX cieľového projektu).
- **Ty:** Voliteľne napíš presný názov cieľovej sekcie.
- **AI:** Číta tvoj návrh alebo analyzuje kontext a vyplní toto pole názvom sekcie, kam úlohu presunie.

## **Relatated Areas for AI to Consider**

1. **(Based on this it will categorise it to specific Portfolio, Project, Section, etc.)**
- **Typ:** Custom Field (Text)
- **Účel:** Označenie **ďalších** portfólií, projektov alebo širších oblastí, s ktorými úloha súvisí, okrem tej primárnej. Kľúčové pre cross-vyhľadávanie.
- **Pre Teba:** Pomáha ti vidieť prepojenia medzi rôznymi časťami tvojho systému.
- **Pre AI:** Poskytuje dodatočný kontext pre pochopenie a kategorizáciu.
- **Ako vyplniť:** Vyber jedno alebo viac relevantných portfólií alebo kľúčových projektov, s ktorými úloha súvisí.
- **Dokumentácia:** Označenie súvsiacich portfólií, oblastí, projektov, sekcií apod., s ktorými úloha súvisí. Pomáha AI pochopiť medzioblastné prepojenia.
- **Ty:** Voliteľne vyber ďalšie relevantné portfóliá.
- **AI:** Číta tvoj výber a môže navrhnúť ďalšie na základe analýzy.

## **Potential Dependencies / Related Tasks**

- **Typ:** Custom Field (Multi-line Text / URL)
- **Účel:** Zaznamenať prepojenia na iné úlohy alebo zdroje, ktoré nie sú formálnymi závislosťami v Asane, ale sú dôležité pre kontext.
- **Pre Teba:** Rýchly prístup k súvisiacim informáciám.
- **Pre AI:** Vstup pre identifikáciu skutočných závislostí alebo pre pochopenie širšieho kontextu.
- **Ako vyplniť:** Vlož linky na iné Asana úlohy, relevantné emaily, dokumenty alebo stručne popíš súvislosť.
- **Typ:** Custom Field (Multi-line Text / URL)
- **Účel:** Zaznamenať prepojenia na iné úlohy alebo zdroje, ktoré nie sú formálnymi závislosťami v Asane, ale sú dôležité pre kontext.
- **Pre Teba:** Rýchly prístup k súvisiacim informáciám.
- **Pre AI:** Vstup pre identifikáciu skutočných závislostí alebo pre pochopenie širšieho kontextu.
- **Ako vyplniť:** Vlož linky na iné Asana úlohy, relevantné emaily, dokumenty alebo stručne popíš súvislosť.
- **Ty:** Voliteľne vlož linky alebo popisy.
- **AI:** Číta tento vstup, analyzuje ho a snaží sa nastaviť formálne závislosti a prepojenia.

## **Suggested Initial Steps / Subtasks**

- **Typ:** Custom Field (Multi-line Text)
- **Účel:** Miesto pre tvoj prvotný nápad, ako by sa dala úloha rozložiť alebo aké by mali byť prvé kroky. Nie sú to konečné subtasks, ktoré mám plniť. Len nápad, ktorý ďalej AI zohľadňuje, alebo ak má lepší nápad tak nie. Na základe nich AI lepšie chápe kontext a vie ako subtasks ma vytvoriť pre mňa (čo mám ja spraviť krok po kroku) a aké subtasks vytvoriť pre seba (AI, ako asi bude postupovať aby mi čo najlepšie pomohla). Nepovinné.
- **Pre Teba:** Pomáha ti štruktúrovať myšlienky pri zadávaní komplexnejšej úlohy.
- **Pre AI:** Vstup pre funkciu "Generovanie Akčných Krokov". AI môže tieto návrhy použiť, rozšíriť alebo ignorovať, ak má lepší plán. Ale skôr by ich malo brať v potaz, aj keby ich rozšíri alebo transformuje.
- **Ako vyplniť:** V bodoch alebo stručných vetách napíš prvé kroky, ktoré ti napadnú. Napr.: 1. Research kľúčové slová. 2. Vytvoriť osnovu. 3. Napísať prvý draft.
- **Dokumentácia:** Sem môžeš napísať svoje prvé nápady na kroky alebo podúlohy. Je to **vstupný text** pre AI, ktorá potom môže vytvoriť skutočné Asana podúlohy a štruktúrovaný zoznam krokov v poli Subtasks (for user) a tak isto aj v Subtasks (for AI)
- **Ty:** Voliteľne napíš svoje nápady na kroky.
- **AI:** Číta tento vstup a berie ho ako kontext pre jej ďalśie akcie

## **Related Entity**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Text) identifikuje **hlavnú externú alebo internú osobu, klienta, partnera alebo organizáciu**, ktorej sa úloha priamo týka alebo s ktorou budeš v rámci úlohy primárne interagovať. Dáva AI dôležitý kontext o kľúčovom aktérovi, čo môže ovplyvniť štýl komunikácie, vyhľadávanie špecifických informácií alebo nastavenie ďalších krokov.
- **Ako s tým pracovať (TY):**
    - **Vo Formulári (Voliteľné, ale odporúčané, ak relevantné):** Zadaj **presné meno osoby** alebo **oficiálny názov organizácie**. Ak ide o klienta, uveď jeho meno alebo názov firmy. Ak ide o internú spoluprácu, uveď meno kolegu.
    - **Pri Triedení:** Skontroluj, či je pole vyplnené správne, ak je pre úlohu dôležitá konkrétna entita.
- **Možnosti výberu / Vstup:** Voľný text. Odporúča sa používať konzistentný formát pre ľahšie vyhľadávanie a spracovanie AI (napr. vždy Meno Priezvisko alebo Názov Organizácie s.r.o.).
    - *Príklady:* Peter Novák, WellBe Club, Maťo Grafik, FPU, Agentúra XYZ

## **Task Goal**

- **Typ:** Custom Field (Text)
- **Účel:** Jasná a **merateľná** definícia toho, čo sa má dosiahnuť. Toto je hlavné zadanie pre AI (a pre teba).
- **Pre Teba:** Ujasnenie si, čo vlastne chceš od úlohy.
- **Pre AI:** Primárny vstup pre plánovanie a exekúciu.
- **Ako vyplniť:** Buď čo najkonkrétnejší. Namiesto "Napísať blog" napíš "Napísať prvý draft blogu (800 slov) o X s 3 kľúčovými bodmi a CTA na Y".
- **Mapuje sa na Field #20:** Task Goal (Custom Field - Text)
- **Dokumentácia:** Jasná, merateľná definícia výsledku. **Povinné pre AI.**
- **Ty:** Vyplň čo najpresnejšie.
- **AI:** Používa ako hlavné zadanie

## **Input Data & Context**

- **Typ:** Custom Field (Multi-line Text)
- **Účel:** Poskytnúť AI **všetky potrebné informácie a materiály** na spracovanie úlohy. Toto je "palivo".
- **Pre Teba:** Centrálne miesto na "brain dump" všetkého relevantného k úlohe.
- **Pre AI:** Hlavný zdroj informácií, z ktorých vychádza pri práci.
- **Ako vyplniť:** Použi štruktúru z popisu (Prečo?, Cieľovka?, Zdroje?, Keywords?, Brief?...) a vlož všetky relevantné linky, texty, kľúčové slová a poznámky. Čím viac, tým lepšie (ale štruktúrovane).
- **Mapuje sa na Field #22:** Input Data & Context (Custom Field - Multi-line Text)
- **Dokumentácia:** Hlavné "palivo" pre AI. Obsahuje všetky detaily, linky, brief, kľúčové slová. **Povinné pre AI.** Štruktúra vo formulári ti pomôže vyplniť relevantné aspekty (Prečo, Cieľovka, Zdroje...).
- **Ty:** Vyplň čo najdetailnejšie a najštruktúrovanejšie.
- **AI:** Čerpá odtiaľto všetky potrebné informácie.

## **Desired Output Format**

- **Typ:** Custom Field (Dropdown/Text)
- **Účel:** Špecifikovať, v akej forme má byť finálny výsledok doručený.
- **Pre Teba:** Vieš, čo očakávať.
- **Pre AI:** Jasná inštrukcia, aký typ súboru alebo textu má vygenerovať/dodať.
- **Ako vyplniť:** Vyber z možností alebo stručne popíš požadovaný formát (napr. Markdown súbor, Zoznam v komentári).
- **Mapuje sa na Field #21:**  Desired Output Format (Custom Field - Dropdown/Text)
- **Dokumentácia:** Definuje formát finálneho výsledku od AI. **Povinné pre AI.**
- **Ty:** Vyber z možností alebo stručne popíš.
- **AI:** Riadi sa týmto pri generovaní/ukladaní výsledku.

## **AI Action / Process (Free Text)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field**  (typ voľný text) definuje **primárnu operáciu alebo typ spracovania**, ktorý má AI Agent vykonať na základe poskytnutých vstupov ( Input Data & Context) s cieľom dosiahnuť  Task Goal (Detailed). Je to hlavný "prepínač", ktorý určuje, akú logiku alebo špecializovaný prompt má AI použiť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Povinné):** Vyber **jednu** akciu, ktorá najlepšie vystihuje hlavnú činnosť, ktorú od AI očakávaš.
    - **Pri Triedení:** Over, či je zvolená akcia správna a zodpovedá cieľu a vstupom.
- **Možnosti výberu / Vstup (Voľný Text):**
    - “AI”:AI Chooses (AI zvolí čo je najvhodnejšie spraviť, môže zvoliť viacero vecí)
    - “All” : AI Chooses (AI spraví všetko a rôznorodé úkony aby čo najviac pomohla k naplneniu a zjedodušeniu naplnenia úlohy)
    - “Categorize” : AI fill or refill (replace) all the fields and custom fields for this task with new actualized values
    - Ak napíšem čokoľvek iné, tak to čo napíšem.

## **AI Action / Process (Dropdown)**

- **Typ:** Custom Field (Dropdown)
- **Účel:** Povedať AI, aký **typ operácie** má vykonať. Kľúčové pre smerovanie AI Agenta.
- **Pre Teba:** Jasne definuješ, čo od AI očakávaš.
- **Pre AI:** Hlavný prepínač pre výber správneho postupu alebo LLM promptu.
- **Ako vyplniť:** Vyber jednu hlavnú akciu z preddefinovaného zoznamu (Generuj, Research, Sumarizuj...).
- **Mapuje sa na Field #23:**  AI Action / Process (Custom Field - Dropdown)
- **Dokumentácia:** Určuje hlavnú činnosť, ktorú má AI vykonať. **Povinné pre AI.**
- **Ty:** Vyber najvhodnejšiu akciu.
- **AI:** Používa ako hlavný prepínač pre svoj workflow.

## **Specific Constraints / Instructions**

- **Typ:** Custom Field (Multi-line Text)
- **Účel:** Poskytnúť AI dodatočné, špecifické pravidlá alebo mantinely.
- **Pre Teba:** Zabezpečenie, že AI dodrží dôležité podmienky.
- **Pre AI:** Dôležité vstupy na spresnenie generovania alebo správania.
- **Ako vyplniť:** V bodoch alebo krátkych vetách uveď obmedzenia (napr. Max. 500 slov, Nepoužívaj pasívny rod, Zameraj sa na výhody pre začiatočníkov).
- **Mapuje sa na Field #28:**  Specific Constraints / Instructions (Custom Field - Multi-line Text)
- **Dokumentácia:** Doplnkové pravidlá a mantinely pre AI.
- **Ty:** Voliteľne zadaj špecifické požiadavky.
- **AI:** Zohľadňuje pri spracovaní.

## **AI Behavior on Uncertainty**

- **Typ:** Custom Field (Dropdown)
- **Účel:** Definovať, ako má AI reagovať, ak narazí na problém alebo nejasnosť.
- **Pre Teba:** Nastavenie miery autonómie a potreby tvojej intervencie.
- **Pre AI:** Pravidlo pre riešenie problémových situácií.
- **Ako vyplniť:** Vyber preferovanú možnosť (napr. Pýtaj sa / Čakaj na Mňa pre dôležité úlohy).
- **Mapuje sa na Field #29:** [❓] AI Behavior on Uncertainty (Custom Field - Dropdown)
- **Dokumentácia:** Ako má AI postupovať, ak si nie je istá.
- **Ty:** Voliteľne vyber preferované správanie.
- **AI:** Riadi sa týmto pravidlom.

## **AI Workflow Status**

- **Typ:** Custom Field (Dropdown)
- **Účel:** Sledovanie stavu úlohy v procese spracovania AI. Kľúčové pre automatizáciu a tvoj prehľad.
- **Pre Teba:** Vidíš, v akej fáze je úloha voči AI.
- **Pre AI:** Hlavný ukazovateľ, ktoré úlohy má spracovať a aký je ich aktuálny stav.
- **Ako vyplniť (vo formulári):** Nechaj predvolenú hodnotu 1 - Nová (v Inboxe). Zmena nastane neskôr.
- **Mapuje sa na Field #24:**  AI Workflow Status (Custom Field - Dropdown)
- **Dokumentácia:** Sleduje stav úlohy voči AI.
- **Ty:** Vo formulári nechaj predvolenú hodnotu (1 - Nová (v Inboxe)).
- **AI:** Aktualizuje počas práce.

## **Priority**

- **Typ:** Custom Field (Dropdown)
- **Účel:** Určenie celkovej dôležitosti a poradia úlohy.
- **Pre Teba:** Pomáha ti plánovať, čo robiť skôr.
- **Pre AI:** Ovplyvňuje poradie, v akom spracúva úlohy v stave Pripravená pre AI.
- **Ako vyplniť:** Vyber P0 až P3 podľa dôležitosti. Ak nevyberieš, použi predvolenú (napr. P2).
- **Mapuje sa na Field #12:** [‼️] Priority (Custom Field - Dropdown)
- **Dokumentácia:** Celková dôležitosť úlohy.
- **Ty:** Voliteľne nastav pri vytváraní, inak pri triedení.
- **AI:** Riadi sa touto prioritou.

## **Due Date**

- **Typ:** Štandardné Asana pole (Date)
- **Účel:** Termín, dokedy má byť úloha finálne dokončená (vrátane tvojej práce).
- **Pre Teba:** Plánovanie a sledovanie termínov.
- **Pre AI:** Dôležitý faktor pri prioritizácii a plánovaní krokov.
- **Ako vyplniť:** Zadaj konkrétny dátum, ak existuje.
- **Mapuje sa na Field #13:**  Due Date (Asana Štandard - Date)
- **Dokumentácia:** Finálny termín dokončenia.
- **Ty:** Voliteľne zadaj, ak existuje.
- **AI:** Berie do úvahy pri plánovaní

## **Start Date**

- **Typ:** Štandardné Asana pole (Date)
- **Účel:** Termín, od kedy je možné úlohu začať robiť
- **Pre Teba:** Plánovanie a sledovanie termínov.
- **Pre AI:** Dôležitý faktor pri prioritizácii a plánovaní krokov.
- **Ako vyplniť:** Zadaj konkrétny dátum, ak existuje.
- **Typ:** Štandardné Asana pole (Date)
- **Účel:** Termín, od kedy je možné úlohu začať robiť
- **Pre Teba:** Plánovanie a sledovanie termínov.
- **Pre AI:** Dôležitý faktor pri prioritizácii a plánovaní krokov.
- **Ako vyplniť:** Zadaj konkrétny dátum, ak existuje..

## **Financial Aspect**

- **Typ:** Custom Field (Dropdown/Multi-select)
- **Účel:** Rýchla identifikácia úloh s finančným dopadom.
- **Pre Teba:** Uľahčuje filtrovanie pre finančné plánovanie a reporting.
- **Pre AI:** Môže byť dodatočný kontext (napr. pri generovaní ponuky).
- **Ako vyplniť:** Vyber relevantnú kategóriu (Príjem, Výdavok...) ak úloha priamo súvisí s financiami. Predvolená je Žiadny.
- **Mapuje sa na Field #60:**  Financial Aspect (Custom Field - Dropdown/Multi-select)
- **Dokumentácia:** Označuje súvislosť úlohy s financiami.
- **Ty:** Voliteľne vyber relevantnú kategóriu.
- **AI:** Môže použiť ako dodatočný kontext.