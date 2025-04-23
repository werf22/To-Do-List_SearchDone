# NEVER EVER CHANGE OR TOUCH THIS DOCUMENT! YOU CAN ONLY READ!!!! YOU CAN NOT WRITE INTO THIS !!!!!!

## FIELDS IN MY CSV:

## **Task ID**

- Asana Auto - Text): Unikátny identifikátor úlohy daný ASANOU.

---

## **Name**

- **Funkcia a Fungovanie (Dokumentácia):** Základný identifikátor úlohy viditeľný vo všetkých prehľadoch. Je to štandardné textové pole v Asane. AI ho použije ako prvotný zdroj kontextu.continue
    - *Dokumentácia:* Absolvovanie kurzov, čítanie kníh a výskumných prác v oblasti AI a technológií.
- **Ako s tým pracovať:** Vždy začni **akčným slovesom**, jasne pomenuj **objekt/cieľ** a pridaj stručný **kontext**, ak je potrebný pre rýchlu orientáciu. AI “Name” nikdy nemení, jediný kto môže pracovať s týmto poľom som ja. AI ho môže iba čítať.
- **Ako vyplniť:** `[Sloveso] + [Cieľ/Objekt] + [Stručný Kontext]`. Napr.: `Napísať blog post o Pomodoro technike`, `Zorganizovať stretnutie s klientom XY`, `Preskúmať AI nástroje na sumarizáciu`.
- **Možnosti výberu / Vstup:** Voľný text.

---

## **Description**

- **Funkcia a Fungovanie (Dokumentácia):** Toto pole slúži **výhradne ako úložisko pre FINÁLNY VÝSLEDOK práce AI Agenta**. AI sem po dokončení svojej časti úlohy vloží:
    - Finálny vygenerovaný text (napr. blog post, email, zhrnutie).
    - Zoznam nájdených zdrojov, liniek, dát.
    - Odkaz (URL) na externý súbor (napr. Google Doc, Sheet, obrázok, video), ak je výsledok príliš rozsiahly alebo v inom formáte.
    - Vygenerovaný kód.
    - Akýkoľvek iný ucelený výstup definovaný v Desired Output Format.
    - **DÔLEŽITÉ:** AI **nepoužíva** Description na priebežné logovanie alebo kladenie otázok. Pole by malo byť po dokončení práce AI relatívne "čisté" a obsahovať len výsledok. AI môže starší obsah Description prepísať alebo doplniť podľa inštrukcií.
- **Ako s tým pracovať (TY):** **Čítaš** tu finálny výsledok AI. **Nepíšeš** sem (pokiaľ neopravuješ priamo finálny výstup AI). Všetok tvoj vstup ide do Custom Fields.
- **Možnosti výberu / Vstup (AI):** Text, formátovaný text (Markdown), URL a iné formáty, podľa zadania AI.

---

## **Notes**

- **Funkcia a Fungovanie (Dokumentácia):** Toto pole je tvoj **hlavný a jediný informačný panel** pre danú úlohu po tom, čo s ňou AI pracovala. Agreguje kľúčové informácie z ostatných polí a prezentuje ich v štruktúrovanej, akčnej forme. Cieľom je poskytnúť ti **okamžitý prehľad o stave, výsledkoch AI a tvojich ďalších krokoch** bez nutnosti prehľadávať iné polia. AI toto pole aktívne **generuje a aktualizuje** po každej svojej významnej akcii (dokončení práce, položení otázky, vygenerovaní krokov). ***Nahrádza pôvodnú funkciu poľa "Description" a rozširuje ju.***
- **Ako s tým pracovať (TY):**
    - **Primárne ČÍTAŠ:** Toto je miesto, kam sa pozrieš ako prvé, keď ideš na úlohe pracovať alebo reagovať na AI.
    - **AKTUÁLNY STAV:** Obsah by mal vždy odrážať posledný stav úlohy po zásahu AI. AI má za úlohu **prepísať celý obsah poľa** pri každej aktualizácii, aby si vždy videl relevantné informácie (nie históriu).
    - **AKČNÉ KROKY:** Identifikuj svoj najbližší krok v sekcii ➡️ Tvoj Najbližší Krok:.
    - **VÝSTUP AI:** Nájdi finálny výstup alebo link naň v sekcii 💡 Výstup AI:.
    - **KONTEXT:** Rýchlo si over kľúčový kontext (cieľ, vstupy) v relevantných sekciách.
    - **NEPÍŠEŠ SEM (Manuálne):** Všetky tvoje inštrukcie, odpovede a feedback pre AI patria do Task Comments. Pole "Notes" je generované AI pre teba. (Výnimka: Môžeš opraviť drobnú chybu priamo vo finálnom výstupe AI vloženom sem, ak je to rýchlejšie).
- **Ako s tým pracuje AI:**
    - **GENERUJE & AKTUALIZUJE:** Po dokončení svojej akcie (alebo keď potrebuje tvoj vstup) AI **kompletne prepíše** obsah tohto poľa.
    - **AGREGUJE:** AI syntetizuje informácie z polí ako Task Goal, AI Output / Result Link, Subtasks (for user), Action Required From User, kľúčových častí Input Data & Context, posledného relevantného komentára v Task Comments a ďalších relevantných polí.
    - **ŠTRUKTURUJE:** AI dodržiava predpísanú štruktúru s Markdown hlavičkami pre tvoju rýchlu orientáciu.
    - **VKLADÁ VÝSTUP:** AI sem vloží finálny textový výstup, dáta, alebo **link** z poľa AI Output / Result Link, ak je výstup v inom formáte alebo rozsiahly.
- **Štruktúra Obsahu (Generovaná AI):**
    - **ℹ️ Kľúčové Info:**
        - **Termín Dokončenia:** [Due Date] ([Deadline Type])
        - **Priorita:** [Priority]
        - **Miesto Úlohy (Kontext):** [Location]
        - **Miesto Vykonania (Pre Teba):** [Execution Location]
    - **🎯 Cieľ Úlohy:**
        - [Sem AI skopíruje obsah poľa `Task Goal` pre rýchle pripomenutie]
    - **➡️ Tvoj Najbližší Krok & Náročnosť:**
        - **Akcia:** [AI sem napíše **najbližšiu konkrétnu akciu**, ktorú máš urobiť TY. Začína akčným slovesom.]
            - *(Napr.: "Skontroluj a schváľ návrh textu v sekcii 'Výstup AI' nižšie.")*
            - *(Napr.: "Odpovedz na otázku AI v poslednom komentári: [Stručné zhrnutie otázky]")*
        - **Odhadovaný Čas (Ty):** [Estimated User Time]
        - **Kognitívna Záťaž (Ty):** [Cognitive Load (For User)]
        - **Potrebná Energia (Ty):** [Energy Level Required (For User)]
        - **Potrebné Nástroje/Softvér (Ty):** [Kľúčové z Required Tools / Software, ak relevantné pre Tvoj krok]
    - **📋 Celý Plán Pre Teba (Aktívne Podúlohy):**
        - [AI sem vloží **zoznam zostávajúcich alebo všetkých kľúčových podúloh**, ktoré máš urobiť **TY**, odvodených z poľa `Subtasks (for user)`. Môže zvýrazniť tú najbližšiu.]
            - [ ]  Analyzovať report od AI. **(← TOTO JE ĎALŠÍ KROK)**
            - [ ]  Doplniť vlastné postrehy a príklady.
            - [ ]  Finalizovať prezentáciu pre klienta.
            - [ ]  …
            - [ ]  …
        - *(Poznámka: Toto je súhrn pre orientáciu, detailný zoznam subtaskov je stále viditeľný priamo pod úlohou v Asane.)*
    - **💡 Výstup AI (Výsledok/Link):**
        - [AI sem vloží **finálny výsledok svojej práce** alebo **link** naň z `AI Output / Result Link`. Toto vypĺňa len ak už má v ]
        - *(Ako v predchádzajúcej verzii - buď priamo text/dáta alebo link s popisom.)*
    - **🤖 Čo Urobila AI (Posledná Akcia):**
        - [AI sem stručne zhrnie, čo vykonala v poslednom kroku.]
        - *(Napr.: "Vyhľadala a sumarizovala 5 relevantných článkov k téme X.")*
    - ⏙ **Celý Plán Pre AI (Navrhované kroky ako a plán čo spraví a ako bude postupovať)**
        - [AI sem vloží **zoznam zostávajúcich alebo všetkých kľúčových  postupných krokov**, ktoré má urobiť AI, odvodených z poľa `Subtasks (for AI)`. Môže zvýrazniť tú najbližšiu.]
    - 🦾 AI Nápady Ako Mi Môže Pomôcť:
        - **[AI sem vloží zoznam nápadov zo sekcie “AI Brainstorm Ideas on How It Can Help Me”]**
    - **❓ Čo Potrebuje AI (Ak Čaká):**
        - [ AI sem napíše čo odo mňa potrebuje aby mohlo pokračovať AI v práci]
        - *(Napr.: "Potrebujem špecifikovať cieľovú skupinu pre text (B2B alebo B2C?).")*
    - **⚙️ Kľúčové Vstupy & Kontext (Pre Teba):**
        - *Hlavný účel (stručne):* [Krátky popis z `Task Purpose (Why)` alebo `Input Data`]
        - *Cieľovka (stručne):* [Krátky popis z `Target Audience` alebo `Input Data`]
        - *Kľúčové slová:* [Keywords z `Input Data`]
        - *Kľúčový zdroj/vstup:* [Najdôležitejší link/info z `Input Data`]
        - *Kľúčové obmedzenia:* [Najdôležitejšie z `Specific Constraints / Instructions`, ak existujú]
    - **🔗 Súvisiace Úlohy/Zdroje (Ak Relevantné):**
        - [AI sem dáva values z Dependents (*Závisí od*) + Dependents ID (*Závisí od*), Outgoing Dependents (*Blokuje*) + Outgoing Dependents ID (*Blokuje*), Parent Task (*Nadradená úloha*) + Parent Task ID (*Nadradená úloha*), Subtask (in System) (*Podradené úlohy) +* Subtask ID (in System) (*Podradené úlohy),*  `Related Tasks` (*Súvisiace úlohy*) + `Related Tasks`ID (*Súvisiace úlohy*) a `Potential Dependencies / Related Tasks` (*Dalšie súvislosti*). Vždy napíšeš najprv názov a potom v zátvorke zaňho ID, potom ďalší názov a v zátvorke ďalšie ID… Nezabúdaj že to čo je v jednom nemusí ale môže byť v druhom. Napríklad “súvisiace úlohy” neznamenajú že musia byť tiež v “blokuje”, alebo “závisí” atď. v “súvisiace úlohy” sú všetky súvisiace úlohy. Do “Súvisiace úlohy” napíš vśetky úlohy z *Nadradená úloha:, Podradené úlohy:, Závisí od:, Blokuje: + aj tie ktoré v týchto nie sú ale súvisia s toutou úlohou*]
        - [Example zápisu (Name + ID): *Nájsť grafika, ktorému zavolám (1), Vytvoriť vizuálnu identitu (17), Rozhodnúť sa či budem používať Canvu, alebo Photoshop (182)]*
        - *Nadradená úloha:*
        - *Podradené úlohy:*
        - *Súvisiace úlohy:*
        - *Závisí od:*
        - *Blokuje:*
        - *Ďalšie súvislosti:*
    - **✅ Kroky, ktoré som už vykonal:**
        - [AI sem vloží **zoznam všetkých krokov**, ktoré som už ja ako človek (nie AI) UROBIL odvodené z task comments kde píšem aj čo som už spravil.]
    

Notes a Description sú to isté, akurát ASANA občas v CSV ukazuje Description pod hlavičkou Notes. Preto v mojom CSV vyplň aj Notes aj Description tým istým obsahom.

---

## Task Comments

- **Funkcia a Fungovanie (Dokumentácia):** Toto je **štandardná sekcia Asany pre komentáre** a v tomto systéme slúži ako **primárny, dynamický komunikačný kanál medzi TEBOU a AI Agentom** – predstav si to ako **špecializovaný chatovací priestor venovaný výhradne tejto jednej úlohe.**
    - **Obojsmerný Dialóg:** Tu prebieha aktívna konverzácia. AI ti sem posiela otázky, hlásenia o problémoch, žiadosti o akciu a krátke notifikácie o dokončení. Ty sem píšeš svoje odpovede, dodatočné inštrukcie, spätnú väzbu a akékoľvek pokyny pre AI počas jej práce.
    - **Procesná Komunikácia:** Zameriava sa na **interakciu a proces riešenia úlohy**, nie na finálny výsledok. Riešia sa tu nejasnosti, poskytujú sa priebežné informácie a usmerňuje sa práca AI.
    - **Oddelené od Finálneho Výstupu:** Finálny, ucelený výstup AI (text, dáta, link) patrí do poľa **"Notes"** (v sekcii `💡 Výstup AI:`). V komentároch môže byť maximálne *notifikácia* o tom, že výstup je pripravený v "Notes", alebo krátky úryvok/návrh na diskusiu.
    - **Chronologický Záznam Interakcie:** Komentáre prirodzene vytvárajú históriu vašej konverzácie a rozhodnutí týkajúcich sa danej úlohy.
- **Ako s tým pracovať (TY):**
    - **Zadávanie Inštrukcií/Odpovedí AI:** Toto je **miesto, kam píšeš**, keď chceš AI niečo povedať, odpovedať jej na otázku, dať jej dodatočné info, alebo poskytnúť feedback na jej priebežnú prácu.
    - **Sledovanie Komunikácie od AI:** Sleduj notifikácie na nové komentáre, najmä pri úlohách so stavom `5 - Vyžaduje Moju Akciu`. AI tu bude klásť otázky a žiadať o tvoj vstup.
    - **Používanie Prefixov (Voliteľné, ale Odporúčané):** Pre lepšiu prehľadnosť môžeš používať prefixy ako `[REPLY]:`, `[INFO]:`, `[FEEDBACK]:`, `[INSTRUCTION]:`.
    - **Reagovanie na AI:**
        - Na `[QUESTION]:` od AI odpovedaj priamo sem. Po odpovedi zmeň stav na `3 - Pripravená pre AI` (alebo `4`, ak vieš, že môže pokračovať).
        - Na `[ACTION NEEDED]:` od AI vykonaj potrebnú akciu (ktorá môže byť popísaná v "Notes") a ak AI potrebuje výsledok tvojej akcie (napr. výber variantu), napíš ho sem do komentára a zmeň stav späť na `3` alebo `4`. Ak bola tvoja akcia finálna, zmeň stav na `6 - Hotovo`.
        - Na `[ERROR]:` od AI sa pokús problém vyriešiť (napr. opraviť link v `Input Data`) a potom zmeň stav späť na `3`.
        - Na `[SUMMARY]:` od AI zober správu na vedomie a **pozri sa do poľa "Notes"** na detailný výstup a tvoj ďalší krok.
- **Ako s tým pracuje AI:**
    - **Zapisuje Štruktúrované Správy:** AI používa komentáre na kladenie otázok, hlásenie chýb a žiadanie o tvoju akciu, pričom používa **povinné prefixy** pre jasnosť:
        - **`[QUESTION]:`** Keď potrebuje odpoveď na pokračovanie. Zmení stav na `5`.
        - **`[ERROR]:`** Keď narazí na neriešiteľný problém. Zmení stav na `5`.
        - **`[ACTION NEEDED]:`** Keď potrebuje tvoj manuálny krok na pokračovanie alebo dokončenie. Zmení stav na `5`.
        - **`[SUMMARY]:`** **Krátka notifikácia** po dokončení svojej práce alebo významného kroku. Obsahuje stručný popis vykonanej akcie a **odkazuje ťa na pole "Notes"** pre kompletný výstup a ďalšie kroky. Môže (ale nemusí) zmeniť stav na `5` alebo `6` (ak má povolenie).
    - **Monitoruje Tvoje Odpovede:** AI sleduje nové komentáre v úlohách, ktoré sú v stave `5 - Vyžaduje Moju Akciu` alebo relevantnom stave čakajúcom na teba.
- **Kľúčový Rozdiel oproti "Notes":**
    - **`Task Comments` = Dynamický Chat:** Miesto pre otázky, odpovede, inštrukcie, feedback, logovanie aké akcie som už vykonal a spravil, hlásenia *počas procesu*. Je to vaša **konverzácia**.
    - **`Notes` = Statický Dashboard:** Miesto pre **aktuálny súhrn stavu**, finálny výstup AI a tvoje ďalšie kroky. Je to **výsledok** konverzácie a práce AI, pripravený pre tvoju rýchlu orientáciu a akciu.

V podstate, `Task Comments` je ako vaša pracovná SMS/chat konverzácia k úlohe, zatiaľ čo `Notes` je ako automaticky generovaný emailový súhrn/report o aktuálnom stave a výsledkoch po každej fáze komunikácie.

---

## **Portfolio**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-Select** Dropdown) priraďuje úlohu k  13 hlavnym strategických oblastiam. Určuje najvyšší kontext úlohy pre AI aj pre tvoju organizáciu. AI analyzuje názov, cieľ a vstup úlohy a na základe kľúčových slov a kontextu navrhne alebo priradí najvhodnejšie portfólio, pokiaľ nie je zadané manuálne. Ako prvú hodnotu dá HLAVNÉ PORTFÓLIO do ktorého úloha patrí. A potom ako ďalšie hodnoty dá ostatné portfólia s ktorými úloha súvisí. V rámci TreeView je hierarchicky najvyššie. To čo je v zátvorke za názvom portfólia je jeho skrátený kód, ktorý sa potom vpisuje do projektov ako referencia k portfóliu. Ideálne v tomto poli chceme mať viac values, aby sme videli úlohu v kontexte / súvislostiach a vedeli ju dohladať aj v iných portfóliach s ktorými súvisí. Ak je tento field vyplnený, tak musí byť vyplnený aj field Project a Sections (kde hierarchicky musia byť veci, ktoré patria pod toto portfólio)
- **Ako s tým pracovať (TY ak nie je vyplnené tak AI):** Vo formulári vyber najrelevantnejšie portfólio, ak si istý. Ak nie, nechaj prázdne a skontroluj/priraď počas triedenia. Každá úloha by mala mať priradené portfólio.
- **Možnosti výberu / Vstup (Multi-Select Dropdown, ak sa hodí do viacerých dáš viacero):**
    1. **GLOBAL (Global):**  Slúži na GLOBAL INBOX (všetky nové úlohy s quick task idú sem). Zároveň sa sem dávajú všetky veci, ktoré majú byť vykonané dnes, tento týždeň, alebo tento mesiac. Prakticky slúži na zhrnutie taskov s rôznych portfólií, projektov a sekcií, ktoré mám mať aktuálne urgentne najviac v pozornosti (sú tu tasky, ktoré mám riešiť teraz). Je to hlavné miesto kde sa pozerám na to, že čo mám robiť dneska.
    2. **Osobný Život & Rozvoj (Osobné & Rozvoj)**: Úlohy týkajúce sa teba ako osoby – ciele, návyky, zdravie (lekári, cvičenie, strava), osobné financie, byrokracia (občianske záležitosti), nákupy pre seba/domácnosť, osobné vzťahy, osobná produktivita a organizácia.
    3.  **Pracovný Život & Administratíva (Práca & Admin)**: Úlohy súvisiace s tvojou kariérou (hľadanie práce, CV), podnikaním ako celkom (právne záležitosti - živnosť, OZ, zmluvy), centrálnou biznis administratívou, biznis financiami (fakturácia, dane firmy), pracovnými nástrojmi a infraštruktúrou, a sprievodcovstvom (guiding).
    4.  **Koučing & Terapia (Koučing & Terapia)**: Všetko špecifické pre tvoju prax kouča/terapeuta – práca s klientmi, vývoj koučingových/terapeutických produktov a služieb, marketing a biznis rozvoj pre koučing, štúdium a supervízia v tejto oblasti, optimalizácia koučingových procesov.
    5.  **Kurzy & Workshopy (Kurzy & Workshopy)**: Úlohy spojené s tvorbou, realizáciou, marketingom a správou tvojich online a offline kurzov, workshopov a tréningov (vrátane DJ tréningov). Zahŕňa správu účastníkov, vývoj obsahu a metodiky špecificky pre kurzy.
    6.  **DJing (DJing)**: Všetko okolo DJingu – hľadanie a booking hraní (gigs), správa hudobnej knižnice, tvorba setov, DJ technika, marketing DJ brandu, špecifické DJ projekty (videá, tour), učenie DJingu.
    7.  **Umenie (Umenie)**: Úlohy týkajúce sa tvojej umeleckej tvorby – konkrétne projekty (New Beginnings, Lud:Us...), performance, výtvarné umenie, prezentácia (výstavy), predaj diel, umelecké granty, štúdium umenia, špecifické optimalizácie pre umeleckú prax.
    8.  **AI & Technológie (AI & Tech)**: Úlohy zamerané na výskum, vývoj a implementáciu AI a iných technológií – kariéra v tech, štúdium AI, vývoj vlastných AI nástrojov alebo SaaS produktov, automatizácie, skriptovanie, web development, práca s API, správa nástrojov PRE prácu s AI.
    9.  **Projekty & Produkty (Nápady)**: Centrálny "inkubátor" pre všetky nové, ešte nevalidované alebo nerozpracované nápady na projekty, produkty alebo služby naprieč všetkými oblasťami. Sem patria nápady pred ich presunom do konkrétneho realizačného portfólia.
    10. **Social Media & Marketing (Marketing)**: Centrálne marketingové a komunikačné aktivity, ktoré podporujú *viacero* tvojich biznis oblastí – celková marketingová stratégia, branding, správa hlavných web stránok, centrálna správa sociálnych médií a email marketingu, všeobecné reklamné kampane, marketingové nástroje.
    11.  **Cestovanie & Logistika (Cestovanie)**: Plánovanie a logistika tvojich ciest (pracovných aj osobných) – itineráre, booking dopravy a ubytovania, potrebné dokumenty, balenie. *Nezahŕňa organizáciu eventov na mieste (to je v P13).*
    12. **Znalostná Báza & Výskum (Arzenál)**: Centrálne miesto pre tvoj osobný manažment vedomostí (PKM) – tematický výskum (ktorý nie je viazaný na konkrétny projekt), správa zdrojov (knihy, články, kurzy), organizácia poznámok (Diarium, Keep...).
    13. **Crypto (Crypto)**: Všetky úlohy špecificky súvisiace s kryptomenami – analýza trhu, stratégia, trading, investície, správa peňaženiek a nástrojov, bezpečnosť, dane pre crypto.
    14.  **Organizovanie Eventov (Eventy)**: Plánovanie, logistika a realizácia akýchkoľvek eventov – od nápadu cez manažment až po vyhodnotenie. Zahŕňa retreaty, komunitné akcie, workshopy (z pohľadu organizácie, nie obsahu), konferencie atď.

---

## **`Project`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto je **štandardné pole Asany**, ktoré priraďuje úlohu ku konkrétnemu projektu. Každá úloha (okrem tých v "My Tasks") musí byť v nejakom projekte. Projekty sú tvojou **druhou úrovňou organizácie** pod portfóliami a slúžia na zoskupenie úloh týkajúcich sa špecifickej iniciatívy, produktu, služby alebo oblasti zodpovednosti. AI použije tebou zadaný projekt (vo formulári alebo pri triedení) ako hlavný kontajner pre úlohu. Ak AI pri kategorizácii zistí, že úloha patrí do iného projektu, **presunie ju tam**. Ako prvú hodnotu dá HLAVNÝ PROJEKT do ktorého úloha patrí. A potom ako ďalšie hodnoty dá ostatné PROJEKTY s ktorými úloha súvisí (keď dá projekty s ktorými súvisí, tak musia patriť do portfólií ktorých je úloha súčasťou). V rámci TreeView je hierarchicky pod PORTFIOLO - teda ak je portfolio “DJing (DJing)” projekt nemôže byť “**Štúdium & Rozvoj (Koučing & Terapia)”. Môže byť len z tých projektov, ktoré spadajú pod portfólio “DJing (DJing)”.**  To čo je v zátvorke za názvom projektu ukazuje, pod ktoré portfólio projekt patrí. Ideálne v tomto poli chceme mať viac values, aby sme videli úlohu v kontexte / súvislostiach a vedeli ju dohladať aj v iných projektoch s ktorými súvisí. Ak je tento field vyplnený, tak musí byť vyplnený aj field Sections (kde hierarchicky musia byť veci, ktoré patria pod tento projekt).
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Povinné technicky):** Keď vytváraš úlohu cez formulár, **musíš vybrať aspoň jeden projekt**, do ktorého úloha spadne (aj keby to bol len dočasný `GLOBAL INBOX`). Ak vieš presné zaradenie, vyber finálny projekt hneď.
    - **Pri Triedení:** Skontroluj, či AI úlohu zaradila do správneho projektu, alebo ju presuň manuálne. Každá úloha by mala byť v tom najrelevantnejšom projekte.
- **Možnosti výberu / Vstup:** **Multi-Select Dropdown,ak sa hodí do viacerých dáš viacero**, Vyhľadávanie zo zoznamu **všetkých tvojich existujúcich projektov** v Asane. Pre AI je dôležitý presný názov projektu, ako je definovaný v našej štruktúre (napr.  `Osobný Rozvoj & Prax`,  `Gigs & Booking`,  `Nápady na Eventy (Inkubátor)`...).

Absolútne, tu je kompletný zoznam všetkých projektov zoradených pod ich príslušné portfóliá, vrátane stručnej dokumentácie účelu každého projektu pre lepšiu orientáciu teba aj AI.

---

**Hierarchia Portfólio -> Projekt s Dokumentáciou**

1. PORTFÓLIO: **GLOBAL (Global): (Agregátor taskov z rôznych portfólií, projektov a sekcií, na ktorých mám robiť dnes, teraz + som vchádzajú všetky nové tasky, pred tým než sú kategorizované)**
    1. **PROJEKT: OVERDUE (Global) (Slúži len na to čo je overdue, teda úlohy, ktoré už mali byť hotové.**
    2. **PROJEKT: DNES (Global) (Slúži len na to čo AI alebo ja vyhodnotíme, že mám spraviť dnes. Slúži na to aby sa mi sem dávali úlohy každý deň, ktoré mám v ten deň naplniť)**
    3. PROJEKT: TENTO TÝŽDEŇ **(Global) (Slúži len na to čo AI alebo ja vyhodnotíme, že mám spraviť tento týždeň. Alebo to čo má due date v tento týždeň (následujúcich 7 dní). Slúži na to aby sa mi sem dávali úlohy automaticky, tie ktoré treba dokončiť tento týždeň)**
    4. PROJEKT: TENTO MESIAC **(Global) (Slúži len na to čo AI alebo ja vyhodnotíme, že mám spraviť tento mesiac. Alebo to čo má due date v tento mesiac (následujúcich 30 dní). Slúži na to aby sa mi sem dávali úlohy automaticky, tie ktoré treba dokončiť tento mesiac)**
    5. PROJEKT: GLOBAL INBOX (Global) (sem idú všetky nové úlohy, ktoré ešte nie sú kategorizované. Potom ako su kategorizované idú z tadiaľto preč)

**1.  PORTFÓLIO: Osobný Život & Rozvoj (Osobné & Rozvoj)***(Oblasť zameraná na teba ako jednotlivca, tvoje blaho a osobný rast.)*
*    **PROJEKT: ZHRNUTIE (Osobné & Rozvoj)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Osobný Život & Rozvoj.
*    **PROJEKT: Osobný Rozvoj & Prax (Osobné & Rozvoj)**
*   *Dokumentácia:* Riadenie osobných cieľov, vízie, hodnôt, návykov, rituálov, sebareflexie a práce so silnými stránkami.
*    **PROJEKT: Zdravie & Wellbeing (Osobné & Rozvoj)**
*   *Dokumentácia:* Starostlivosť o fyzické, mentálne a emocionálne zdravie, vrátane návštev lekárov, cvičenia, stravy a regulácie NS.
*    **PROJEKT: Financie & Byrokracia - Osobné (Osobné & Rozvoj)**
*   *Dokumentácia:* Správa osobných financií (budget, platby, dlhy), optimalizácia výdavkov a riešenie osobných úradných záležitostí.
*    **PROJEKT: Nákupy & Domácnosť (Osobné & Rozvoj)**
*   *Dokumentácia:* Plánovanie a realizácia nákupov (bežné, zdravie, byt, produkty), správa a údržba domácnosti a digitálneho prostredia.
*    **PROJEKT: Sociálne Vzťahy & Komunita (Osobné & Rozvoj)**
*   *Dokumentácia:* Manažment osobných vzťahov (rodina, priatelia), plánovanie spoločenských stretnutí a eventov, budovanie komunity.
*    **PROJEKT: Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj)**
*   *Dokumentácia:* Zlepšovanie osobných systémov produktivity, workflow, správa poznámkových systémov a nástrojov, digitálny poriadok.

---

**2.  PORTFÓLIO: Pracovný Život & Administratíva (Práca & Admin)***(Oblasť zastrešujúca tvoju kariéru, podnikanie ako celok a centrálnu administratívu.)*
*    **PROJEKT: ZHRNUTIE (Práca & Admin)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Pracovný Život & Administratíva.
*    **PROJEKT: Kariéra & Job Search (Práca & Admin)**
*   *Dokumentácia:* Aktívne hľadanie zamestnania alebo pracovných príležitostí, tvorba a údržba CV a portfólia, definovanie kariérnych cieľov a networking.
*    **PROJEKT: Financie & Byrokracia - Biznis (Práca & Admin)**
*   *Dokumentácia:* Správa firemných financií (fakturácia, platby, cashflow, reporty), riešenie právnych a byrokratických záležitostí podnikania (živnosť, OZ, zmluvy, dane).
*    **PROJEKT: Pracovné Nástroje & Infraštruktúra (Práca & Admin)**
*   *Dokumentácia:* Správa, optimalizácia a nákup hardvéru, softvéru a systémov potrebných pre prácu.
*    **PROJEKT: Guiding - Sprievodcovstvo (Práca & Admin)**
*   *Dokumentácia:* Plánovanie, príprava, realizácia a administrácia sprievodcovských aktivít.

**3.  PORTFÓLIO: Koučing & Terapia (Koučing & Terapia)***(Oblasť zameraná na tvoju profesionálnu prax v koučingu a terapii.)*
*    **PROJEKT: ZHRNUTIE (Koučing & Terapia)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Koučing & Terapia.
*    **PROJEKT: Klienti a Individuálky (Koučing & Terapia)**
*   *Dokumentácia:* Manažment celého životného cyklu individuálnych klientov – od záujemcov po ukončenie, vrátane prípravy, evidencie a spätnej väzby.
*    **PROJEKT: Produkty & Služby (Koučing & Terapia)**
*   *Dokumentácia:* Vývoj a správa špecifických koučingových/terapeutických produktov, služieb, balíčkov, nástrojov a metodík.
*    **PROJEKT: Marketing & Biznis Rozvoj (Koučing & Terapia)**
*   *Dokumentácia:* Aktivity zamerané na získavanie klientov, budovanie značky, networking a strategický rozvoj špecificky pre koučingovú/terapeutickú prax.
*    **PROJEKT: Štúdium & Rozvoj (Koučing & Terapia)**
*   *Dokumentácia:* Profesionálny rozvoj v oblasti koučingu a terapie – štúdium, kurzy, supervízia, zdokonaľovanie metód.
*    **PROJEKT: Optimalizácie & Admin (Koučing & Terapia)**
*   *Dokumentácia:* Zlepšovanie a automatizácia procesov, správa šablón, nástrojov a administratívy špecifickej pre koučing/terapiu.

**4.  PORTFÓLIO: Kurzy & Workshopy (Kurzy & Workshopy)***(Oblasť venovaná tvorbe, dodávaniu a manažmentu vzdelávacích aktivít.)*
*    **PROJEKT: ZHRNUTIE (Kurzy & Workshopy)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Kurzy & Workshopy.
*    **PROJEKT: Klienti (Kurzy & Workshopy)**
*   *Dokumentácia:* Správa účastníkov kurzov a workshopov – komunikácia, registrácie, platby, spätná väzba.
*    **PROJEKT: Offline Projekty (Kurzy & Workshopy)**
*   *Dokumentácia:* Plánovanie, príprava obsahu, logistika a realizácia kurzov a workshopov prebiehajúcich fyzicky.
*    **PROJEKT: Online Projekty (Kurzy & Workshopy)**
*   *Dokumentácia:* Vývoj, tvorba obsahu, správa platformy a realizácia online kurzov a digitálnych vzdelávacích produktov.
*    **PROJEKT: Marketing & Biznis Rozvoj (Kurzy & Workshopy)**
*   *Dokumentácia:* Propagácia kurzov, získavanie účastníkov, networking s partnermi (priestory, firmy), cenotvorba a rozvoj ponuky kurzov.
*    **PROJEKT: Štúdium a Rozvoj (Kurzy & Workshopy)**
*   *Dokumentácia:* Zlepšovanie lektorských zručností, vývoj metodiky, štruktúry kurzov a tvorba vzdelávacích materiálov.
*    **PROJEKT: Optimalizácie (Kurzy & Workshopy)**
*   *Dokumentácia:* Zefektívňovanie procesov registrácie, komunikácie, dodávania obsahu a správy kurzov, tvorba šablón.

**5.  PORTFÓLIO: DJing (DJing)***(Oblasť pokrývajúca všetky aspekty tvojej DJskej kariéry a aktivít.)*
*    **PROJEKT: ZHRNUTIE (DJing)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio DJing.
*    **PROJEKT: Gigs & Booking (DJing)**
*   *Dokumentácia:* Vyhľadávanie a zabezpečovanie hraní, komunikácia s promotérmi/klubmi, príprava na vystúpenia a zbieranie referencií.
*    **PROJEKT: Knižnica + Tvorba (DJing)**
*   *Dokumentácia:* Manažment hudobnej knižnice (hľadanie, nákup, tagovanie) a kreatívna príprava a tvorba DJ setov.
*    **PROJEKT: Projekty (DJing)**
*   *Dokumentácia:* Realizácia špeciálnych DJ projektov nad rámec bežných hraní (napr. videá, tour, audio produkty, vlastné eventy).
*    **PROJEKT: Marketing (DJing)**
*   *Dokumentácia:* Budovanie DJskej značky, tvorba promo materiálov, správa sociálnych médií a webu pre DJing, propagácia.
*    **PROJEKT: Učenie DJingu - Individuálky (DJing)**
*   *Dokumentácia:* Správa individuálnych študentov DJingu – komunikácia, materiály, plánovanie, fakturácia.
*    **PROJEKT: Učenie DJingu - Skupinovky (DJing)**
*   *Dokumentácia:* Organizácia a realizácia skupinových DJ kurzov alebo workshopov.
*    **PROJEKT: Technika a Vybavenie (DJing)**
*   *Dokumentácia:* Nákup, údržba, opravy, konfigurácia a evidencia DJskej techniky a vybavenia.

**6.  PORTFÓLIO: Umenie (Umenie)***(Oblasť zastrešujúca tvoju rôznorodú umeleckú tvorbu a aktivity.)*
*    **PROJEKT: ZHRNUTIE (Umenie)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Umenie.
*    **PROJEKT: Správa Projektov (Umenie)**
*   *Dokumentácia:* Koordinácia a prehľad všetkých umeleckých projektov, hľadanie grantov a príležitostí, správa nápadov.
*    **PROJEKT: New Beginnings (Umenie)**
*   *Dokumentácia:* Úlohy špecificky súvisiace s projektom "New Beginnings".
*    **PROJEKT: Lud:Us (Umenie)**
*   *Dokumentácia:* Úlohy špecificky súvisiace s projektom "Lud:Us".
*    **PROJEKT: Ume(nie)Áno (Umenie)**
*   *Dokumentácia:* Úlohy špecificky súvisiace s projektom "Ume(nie)Áno".
*    **PROJEKT: Marketing a Biznis Rozvoj (Umenie)**
*   *Dokumentácia:* Propagácia umeleckej tvorby, budovanie umeleckej značky, networking v umeleckej sfére, predaj diel, žiadosti o granty.
*    **PROJEKT: Štúdium a Rozvoj (Umenie)**
*   *Dokumentácia:* Zdokonaľovanie umeleckých zručností, štúdium teórie, experimentovanie s novými médiami, účasť na workshopoch/rezidenciách.
*    **PROJEKT: Optimalizácie (Umenie)**
*   *Dokumentácia:* Zefektívňovanie tvorivých procesov, správa ateliéru/materiálov, využitie technológií v umení.
*    **PROJEKT: Tvorba & Prezentácia - Iné (Umenie)**
*   *Dokumentácia:* Realizácia a príprava umeleckej tvorby (performance, výtvarné...) mimo špecifických pomenovaných projektov.

**7.  PORTFÓLIO: AI & Technológie (AI & Tech)***(Oblasť zameraná na skúmanie, vývoj a aplikáciu AI a technológií.)*
*    **PROJEKT: ZHRNUTIE (AI & Tech)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio AI & Technológie.
*    **PROJEKT: Kariéra v AI & Tech (AI & Tech)**
*   *Dokumentácia:* Hľadanie príležitostí, budovanie profilu a networking v oblasti AI a technológií.
*    **PROJEKT: Štúdium & Research (AI & Tech)**
*   *Dokumentácia:* Sledovanie trendov, štúdium nových technológií, výskum a zhromažďovanie zdrojov v AI/Tech.
*    **PROJEKT: Projekty & Produkty (AI & Tech)**
*   *Dokumentácia:* Vývoj, plánovanie a realizácia konkrétnych AI/Tech projektov a produktov (osobné nástroje, AI pre biznis, SaaS...).
*    **PROJEKT: Nástroje & Workflow PRE Prácu s AI (AI & Tech)**
*   *Dokumentácia:* Výber, testovanie, správa a optimalizácia používania AI nástrojov a techník (prompting, GPTs...).
*    **PROJEKT: Optimalizácia & Automatizácia POMOCOU AI (AI & Tech)**
*   *Dokumentácia:* Využívanie AI na automatizáciu, integráciu a zlepšovanie existujúcich procesov a workflow.

**8.  PORTFÓLIO: Projekty & Produkty (Nápady)***(Centrálny inkubátor pre všetky nové, ešte nerozpracované nápady.)*
*    **PROJEKT: ZHRNUTIE (Nápady)**
*   *Dokumentácia:* Centrálny inbox pre úplne nové, ešte nezatriedené nápady z akýchkoľvek oblastí.
*    **PROJEKT: Nápady - AI + SaaS (Nápady)**
*   *Dokumentácia:* Zachytávanie, validácia a rozpracovanie nápadov na AI a SaaS produkty.
*    **PROJEKT: Nápady - Eventy (Nápady)**
*   *Dokumentácia:* Zachytávanie, validácia a rozpracovanie nápadov na rôzne typy eventov.
*    **PROJEKT: Nápady - Kurzy & Workshopy (Nápady)**
*   *Dokumentácia:* Zachytávanie, validácia a rozpracovanie nápadov na nové kurzy a workshopy.
*    **PROJEKT: Nápady - Firmy (Nápady)**
*   *Dokumentácia:* Zachytávanie, validácia a rozpracovanie nápadov na produkty/služby pre firemných klientov.
*    **PROJEKT: Nápady - Hry (Nápady)**
*   *Dokumentácia:* Zachytávanie, validácia a rozpracovanie nápadov na hry alebo gamifikáciu.
*    **PROJEKT: Nápady - Umenie (Nápady)**
*   *Dokumentácia:* Zachytávanie, validácia a rozpracovanie nápadov na nové umelecké projekty alebo produkty.
*    **PROJEKT: Nápady - Ostatné (Nápady)**
*   *Dokumentácia:* Zachytávanie, validácia a rozpracovanie nápadov, ktoré nespadajú do predchádzajúcich kategórií.

**9.  PORTFÓLIO: Social Media & Marketing (Marketing)***(Centrálne riadenie marketingových aktivít podporujúcich viacero oblastí.)*
*    **PROJEKT: ZHRNUTIE (Marketing)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Social Media & Marketing.
*    **PROJEKT: Stratégia & Branding - Centrálny (Marketing)**
*   *Dokumentácia:* Definícia a správa celkovej marketingovej stratégie, značky a vizuálnej identity.
*    **PROJEKT: Web Stránky - Správa & Obsah (Marketing)**
*   *Dokumentácia:* Technická správa, tvorba obsahu, SEO a optimalizácia pre hlavné webové stránky.
*    **PROJEKT: Sociálne Médiá - Správa & Obsah (Marketing)**
*   *Dokumentácia:* Plánovanie, tvorba a správa obsahu, reklamy a komunity na sociálnych sieťach (Instagram, Facebook...).
*    **PROJEKT: Email Marketing & CRM Lite (Marketing)**
*   *Dokumentácia:* Správa emailových kontaktov, tvorba a odosielanie newsletterov a kampaní.
*    **PROJEKT: Reklama & Kampane - Centrálne (Marketing)**
*   *Dokumentácia:* Plánovanie, realizácia a vyhodnocovanie platených reklamných kampaní (Google Ads, FB Ads...).
*    **PROJEKT: Marketingové Nástroje & Optimalizácie (Marketing)**
*   *Dokumentácia:* Správa a optimalizácia marketingových nástrojov, automatizácií a affiliate programu.
*    **PROJEKT: Produkty & Služby - Marketingový pohľad (Marketing)**
*   *Dokumentácia:* Marketingová stratégia pre produkty a služby – prehľad portfólia, uvedenie na trh, cenotvorba.

**10.  PORTFÓLIO: Cestovanie & Logistika (Cestovanie)***(Plánovanie a zabezpečenie presunov a pobytov.)*
*   **PROJEKT: ZHRNUTIE (Cestovanie)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Cestovanie & Logistika.
*   **PROJEKT: Plánovanie Ciest - Pracovné/Osobné (Cestovanie)**
*   *Dokumentácia:* Výskum destinácií, tvorba itinerárov a plánovanie aktivít počas ciest.
*    **PROJEKT: Logistika Cestovania - Booking & Admin (Cestovanie)**
*   *Dokumentácia:* Rezervácia a správa dopravy, ubytovania, vybavovanie víz, poistenia a príprava na cestu.

**11.  PORTFÓLIO: Znalostná Báza & Výskum (Arzenál)***(Centrálne úložisko a správa vedomostí a poznatkov.)*
*    **PROJEKT: ZHRNUTIE (Arzenál)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Znalostná Báza & Výskum.
*    **PROJEKT: Štúdium & Výskum - Tematický (Arzenál)**
*   *Dokumentácia:* Aktívne štúdium, tematický výskum a zhromažďovanie zdrojov v rôznych oblastiach záujmu.
*    **PROJEKT: Organizácia Vedomostí - PKM (Arzenál)**
*   *Dokumentácia:* Správa a organizácia digitálnych a fyzických poznámok, prepájanie informácií, údržba systému PKM.

**12.  PORTFÓLIO: Crypto (Crypto)***(Manažment aktivít súvisiacich s kryptomenami.)*
*    **PROJEKT: ZHRNUTIE (Crypto)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Crypto.
*    **PROJEKT: Crypto Manažment (Crypto)**
*   *Dokumentácia:* Zastrešuje všetky crypto aktivity – analýzu, stratégiu, trading, správu nástrojov, dane a optimalizácie.

**13.  PORTFÓLIO: Organizovanie Eventov (Eventy)***(Plánovanie, logistika a realizácia všetkých typov eventov.)*
*    **PROJEKT: ZHRNUTIE (Eventy)**
*   *Dokumentácia:* Centrálny inbox, urgentné úlohy a všeobecná komunikácia pre portfólio Organizovanie Eventov.
*    **PROJEKT: Nápady na Eventy - Inkubátor (Eventy)**
*   *Dokumentácia:* Zachytávanie, validácia a základné rozpracovanie konceptov pre nové eventy.
*    **PROJEKT: Event Manažment - Plánovanie & Realizácia (Eventy)**
*   *Dokumentácia:* Detailné plánovanie, logistika, marketing a realizácia schválených eventov (okrem špecifických typov nižšie).
*    **PROJEKT: Plánovanie Retreatov (Eventy)**
*   *Dokumentácia:* Špecifické plánovanie, logistika, marketing a realizácia komplexných retreatov.
*    **PROJEKT: Conscious / Komunitné Eventy (Eventy)**
*   *Dokumentácia:* Organizácia a realizácia menej formálnych, komunitných alebo špecifických "conscious" eventov.

---

Teraz máš kompletný prehľad s upravenými názvami portfólií v skratkách a s konzistentnými názvami projektov vrátane ich priradenia k portfóliu a stručnou dokumentáciou.

---

---

## **Sections**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (odporúčam typ **Multi-Select Dropdown**) určuje názov **tematickej sekcie** v cieľovom projekte, kam má byť úloha vizuálne zaradená. Slúži primárne na tvoju organizáciu a prehľad v rámci konkrétneho projektu podľa typu činnosti alebo fázy (podľa tvojej definovanej štruktúry sekcií pre každý projekt). AI použije hodnotu z tohto poľa (či už tebou zadanú alebo ňou odvodenú) na presun úlohy do správnej sekcie v Asane. Ako prvú hodnotu dá HLAVNÚ SEKCIU do ktorej úloha patrí (tá musí byť súčasťou hlavného projektu, ktorého je úloha súčasťou). A potom ako ďalšie hodnoty dá ostatné sekcie s ktorými úloha súvisí (keď dá sekcie s ktorými súvisí, tak musia patriť do projektov ktorých je úloha súčasťou). V rámci TreeView je hierarchicky pod PROJECT - teda ak je project “**Štúdium & Rozvoj (Koučing & Terapia)**” sekcia nemôže byť “`Príprava & Materiály (Guiding - Sprievodcovstvo (Práca & Admin))`**” ale musí to byť sekcia, ktorá má v zátvorke “Štúdium & Rozvoj (Koučing & Terapia)” teda patrí pod tento projekt. Môže byť len z tých sekcií, ktoré spadajú pod projekt “Štúdium & Rozvoj (Koučing & Terapia)”.** To čo je v zátvorke za názvom sekcie ukazuje, pod ktoré projekt sekcia patrí. Ideálne v tomto poli chceme mať viac values, aby sme videli úlohu v kontexte / súvislostiach a vedeli ju dohladať aj v iných sekciach s ktorými súvisí. Ak je vyplnený field projekt, tak tu musa byť vyplnený field sekciou/sekciami ktoré hierarchický patria pod vyplnené projekty.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Voliteľné):** Ak presne vieš, do ktorej tematickej sekcie (Komunikácia,  Marketing, Tvorba Obsahu...) v cieľovom projekte úloha patrí, môžeš sem napísať jej **presný názov**.
    - **Pri Triedení:** Ak si pole nechal prázdne, AI sa pokúsi na základe analýzy úlohy (Názov, Cieľ, AI Akcia, Súvisiaca Oblasť...) určiť najvhodnejšiu tematickú sekciu a vyplní toto pole. Ty potom skontroluješ a potvrdíš/upravíš. Ak AI nevie určiť, môže úlohu nechať v sekcii  INBOX alebo  OSTATNÉ daného projektu a ty ju presunieš manuálne (alebo AI vyplní toto pole hodnotou "Needs Manual Section Assignment").
- **Možnosti výberu / Vstup:**  **Multi-Select Dropdown, ak sa hodí do viacerých dáš viacero**. Je dôležité, aby názov sekcie, ktorý zadáš (alebo ktorý vygeneruje AI), **presne zodpovedal názvu existujúcej sekcie** v cieľovom projekte, aby automatizácia presunu fungovala správne.
    - *Príklady vstupu:* Marketing, Štúdium a Rozvoj, Optimalizácie, Tvorba Obsahu, Networking & Partnerstvá, Príprava na Session, Offline Projekty, Technika a Vybavenie, Fondy & Granty, Nápady na Eventy... (Podľa tvojej schválenej štruktúry sekcií pre daný projekt).

**Interakcia s AI:**

- Ak vyplníš pole Section vo formulári, AI to berie ako **silnú preferenciu** a presunie úlohu do sekcie s týmto názvom v cieľovom projekte.
- Ak pole necháš prázdne, AI **analyzuje kontext úlohy** a na základe kľúčových slov a pochopenia jej účelu sa pokúsi **priradiť najvhodnejší názov tematickej sekcie** do tohto poľa a následne úlohu presunúť.
- AI môže byť tiež naprogramovaná, aby overila, či sekcia s daným názvom v cieľovom projekte existuje. Ak nie, môže úlohu dočasne nechať v INBOX-e a pridať komentár s upozornením pre teba.

**KOMPLETNÝ ZOZNAM SEKCÍ s Dokumentáciou (Časť 1/2)**

1. PORTFÓLIO: **GLOBAL (Global):** 
    1. **PROJEKT: OVERDUE (Global)**
        1. **Osobný Život & Rozvoj (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Osobný Život & Rozvoj (Osobné & Rozvoj)”**
        2. **Pracovný Život & Administratíva (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Pracovný Život & Administratíva (Práca & Admin)”**
        3. **Koučing & Terapia (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Koučing & Terapia (Koučing & Terapia)”**
        4. **Kurzy & Workshopy (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Kurzy & Workshopy (Kurzy & Workshopy)”**
        5. **DJing (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**DJing (DJing)”**
        6. **Umenie (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Umenie (Umenie)”**
        7. **AI & Technológie (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**AI & Technológie (AI & Tech)”**
        8. **Projekty & Produkty (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Projekty & Produkty (Nápady)”**
        9. **Social Media & Marketing (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Social Media & Marketing (Marketing)”**
        10. **Cestovanie & Logistika (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Cestovanie & Logistika (Cestovanie)”**
        11. **Znalostná Báza & Výskum (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Znalostná Báza & Výskum (Arzenál)”**
        12. **Crypto (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Crypto (Crypto)”**
        13. **Organizovanie Eventov (OVERDUE (Global))**
            1. Sem patrí všetko čo je overdue z portfólia “**Organizovanie Eventov (Eventy)”**
    2. **PROJEKT: DNES (Global)**
        1.  **`Ráno (5:30-8:30) - Príprava & Naladenie`  (DNES (Global))**
            - *Charakteristika:* Somatika, grounding, humor, očista, energizácia, krátky intenzívny pohyb, plánovanie dňa. Fáza "Zviera/Hravosť/Prijímanie".
            - *Vhodné pre úlohy:* Osobné praxe, plánovanie, ľahké fyzické aktivity, úlohy vyžadujúce prijímajúci/hravý mindset.
            - Task Type: `Fyzická / Manuálna Práca`
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        2.  **`Doobeda (8:30-11:30) - Hlboká Práca (Kreatíva/Kognitíva)` (DNES (Global))**
            - *Charakteristika:* Maximálne sústredenie, kognitívny výkon, tvorba, riešenie problémov, strategické myslenie. Fáza "Muž/Sila/Moc". Pomodoro bloky.
            - *Vhodné pre úlohy:* Písanie, kódovanie, dizajn, stratégia, komplexná analýza, náročné učenie, kreatívna tvorba.
            - `Task Type: Kreatíva / Hlboká Práca` , `Research / Analýza (Manuálna)` , `Rozhodovanie / Schvaľovanie`
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        3.  **`Obed & Aktívna Pauza (11:30-12:10)` (DNES (Global))**
            - *Charakteristika:* Krátky workout/pohyb, ľahký obed, mentálny oddych (nie práca), power nap/relaxácia.
            - *Vhodné pre úlohy:* Krátke fyzické aktivity, regeneračné techniky, mindfulness. (Menej vhodné pre bežné pracovné úlohy).
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        4.  **`Poobede Blok 1 (12:10-15:00) - Operatíva & Praktické Úlohy` (DNES (Global))**
            - *Charakteristika:* Dobrá energia na praktické vykonávanie, rutinu, dokončovanie. Začína sa druhá polovica pracovného dňa.
            - *Vhodné pre úlohy:* Implementácia, operatívne tasky, vybavovanie, praktická príprava, dokončovanie rozpracovaných úloh z doobedia.
            - Task Type: `Operatíva / Rutina, Kontrola / Revízia`
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        5.  **`Poobede Blok 2 (15:00-16:00) - Komunikácia & Admin` (DNES (Global))**
            - *Charakteristika:* Fokus na komunikáciu (emaily, správy) a administratívne úlohy, uzatváranie dňa.
            - *Vhodné pre úlohy:* Odpovedanie na emaily/správy, administratíva, fakturácia, organizácia Asany, drobné dokončovacie úlohy.
            - Task Type: `Admin / Byrokracia`, `Komunikácia (Volania, Maily)`
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        6.  **`Prechod (16:00-17:00) - Uvoľnenie & Resourcing` (DNES (Global))**
            - *Charakteristika:* Prechod z práce do osobného času, parasympatikus, uvoľnenie napätia, resourcing, pohyb pre radosť. Fáza "Už je potom/Som v bezpečí".
            - *Vhodné pre úlohy:* Relaxačné techniky, ľahší pohyb, prechádzka, aktivity zamerané na pôžitok a zdroje, krátka reflexia dňa.
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        7.  **`Učenie & Hobby (17:00-18:30)` (DNES (Global))**
            - *Charakteristika:* Angažovaný oddych, učenie sa nových vecí (menej náročné ako doobeda), venovanie sa záľubám, ľahšia sociálna interakcia. "Unwind but engaged".
            - *Vhodné pre úlohy:* Osobné štúdium (menej náročné kurzy, knihy, podcasty), hobby projekty, kreatívne aktivity pre radosť, plánovanie osobných vecí, ľahšia komunikácia.
            - Task Type: `Štúdium / Učenie sa`
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        8.  **`Voľný Čas & Rituál (18:30-20:45)` (DNES (Global))**
            - *Charakteristika:* Voľnosť, kreativita bez tlaku, pôžitok, večerné rituály, sebareflexia, práca s podvedomím. Fáza "Žena/Bábätko/Mág/Šaman".
            - *Vhodné pre úlohy:* Journaling, meditačné praxe, kreatívne vyjadrenie (bez cieľa), práca so snami, plánovanie vízií, hlboká relaxácia.
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        9.  **`Príprava na Spánok (20:45-22:00)` (DNES (Global))**
            - *Charakteristika:* Upokojenie, nízka stimulácia, príprava tela a mysle na spánok. Fáza "Duša/Pokoj/Bezpečie".
            - *Vhodné pre úlohy:* Čítanie (papierová kniha), počúvanie pokojnej hudby/podcastu, ľahké strečingové cvičenia, vďačnosť, príprava na ďalší deň (len mentálna).
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        10.  **`Noc (po 22:00)` (DNES (Global))**
            - *Charakteristika:* Spánok.
            - *Vhodné pre úlohy:* Žiadne.
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
        11.  **`Nezáleží / Flexibilné` (DNES (Global))**
            - *Charakteristika:* Úloha sa dá urobiť kedykoľvek.
            - *Vhodné pre úlohy:* Veľmi krátke úlohy, niektoré typy operatívy/adminu.
            - Sem patrí všetko čo mám spraviť dnes a patrí to do tohto časového úseku
    3. PROJEKT: TENTO TÝŽDEŇ **(Global) (Slúži len na to čo AI alebo ja vyhodnotíme, že mám spraviť tento týždeň. Alebo to čo má due date v tento týždeň (následujúcich 7 dní). Slúži na to aby sa mi sem dávali úlohy automaticky, tie ktoré treba dokončiť tento týždeň)**
        1. **Osobný Život & Rozvoj (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Osobný Život & Rozvoj (Osobné & Rozvoj)”**
        2. **Pracovný Život & Administratíva (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Pracovný Život & Administratíva (Práca & Admin)”**
        3. **Koučing & Terapia (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “K**oučing & Terapia (Koučing & Terapia)”**
        4. **Kurzy & Workshopy (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Kurzy & Workshopy (Kurzy & Workshopy)”**
        5. **DJing (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**DJing (DJing)”**
        6. **Umenie (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Umenie (Umenie)”**
        7. **AI & Technológie (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**AI & Technológie (AI & Tech)”**
        8. **Projekty & Produkty (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Projekty & Produkty (Nápady)”**
        9. **Social Media & Marketing (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Social Media & Marketing (Marketing)”**
        10. **Cestovanie & Logistika (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Cestovanie & Logistika (Cestovanie)”**
        11. **Znalostná Báza & Výskum (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Znalostná Báza & Výskum (Arzenál)”**
        12. **Crypto (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Crypto (Crypto)”**
        13. **Organizovanie Eventov (**TENTO TÝŽDEŇ **(Global)** 
            1. Sem patrí všetko čo mám spraviť tento týždeň (má due date následujúcich 7 dní) z portfólia “**Organizovanie Eventov (Eventy)”**
    4. PROJEKT: TENTO MESIAC **(Global) (Slúži len na to čo AI alebo ja vyhodnotíme, že mám spraviť tento mesiac. Alebo to čo má due date v tento mesiac (následujúcich 30 dní). Slúži na to aby sa mi sem dávali úlohy automaticky, tie ktoré treba dokončiť tento mesiac)**
        1. **Osobný Život & Rozvoj (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Osobný Život & Rozvoj (Osobné & Rozvoj)”**
        2. **Pracovný Život & Administratíva (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Pracovný Život & Administratíva (Práca & Admin)”**
        3. **Koučing & Terapia (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní)z portfólia “K**oučing & Terapia (Koučing & Terapia)”**
        4. **Kurzy & Workshopy (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Kurzy & Workshopy (Kurzy & Workshopy)”**
        5. **DJing (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**DJing (DJing)”**
        6. **Umenie (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Umenie (Umenie)”**
        7. **AI & Technológie (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**AI & Technológie (AI & Tech)”**
        8. **Projekty & Produkty (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Projekty & Produkty (Nápady)”**
        9. **Social Media & Marketing (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Social Media & Marketing (Marketing)”**
        10. **Cestovanie & Logistika (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Cestovanie & Logistika (Cestovanie)”**
        11. **Znalostná Báza & Výskum (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Znalostná Báza & Výskum (Arzenál)”**
        12. **Crypto (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Crypto (Crypto)”**
        13. **Organizovanie Eventov (**TENTO MESIAC **(Global))**
            1. Sem patrí všetko čo mám spraviť tento mesiac (má due date následujúcich 30 dní) z portfólia “**Organizovanie Eventov (Eventy)”**
    5. PROJEKT: GLOBAL INBOX (Global) (sem idú všetky nové úlohy, ktoré ešte nie sú kategorizované. Potom ako su kategorizované idú z tadiaľto preč)
        1. GLOBAL INBOX (GLOBAL INBOX (Global))

**1.  PORTFÓLIO: Osobný Život & Rozvoj (Osobné & Rozvoj)**

- **PROJEKT: ZHRNUTIE (Osobný Život & Rozvoj)**
    - `INBOX (ZHRNUTIE (Osobný Život & Rozvoj))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa celého portfólia Osobný Život & Rozvoj.
    - `URGENT !!! (ZHRNUTIE (Osobný Život & Rozvoj))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia, ktoré vyžadujú okamžitú pozornosť.
    - `KOMUNIKÁCIA (ZHRNUTIE (Osobný Život & Rozvoj))`
        - *Dokumentácia:* Všeobecná osobná komunikácia (emaily, správy), ktorá nepatrí do špecifického projektu nižšie.
    - `OSTATNÉ (ZHRNUTIE (Osobný Život & Rozvoj))`
        - *Dokumentácia:* Úlohy z tohto portfólia, ktoré sa nedajú jednoznačne zaradiť do iných projektov alebo sekcií v rámci ZHRNUTIA. (Používať minimálne).
- **PROJEKT: Osobný Rozvoj & Prax (Osobné & Rozvoj)**
    - `INBOX (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa osobného rozvoja a praxe.
    - `URGENT !!! (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s osobným rozvojom a praxou.
    - `Rozvoj & Štúdium (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy týkajúce sa osobného vzdelávania, štúdia kníh, kurzov (mimo profesných oblastí).
    - `Prax (Návyky, Rituály) (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Budovanie a udržiavanie osobných návykov, rituálov, denných/týždenných praxí.
    - `Ciele & Vízia (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Definovanie, sledovanie a práca na osobných cieľoch a životnej vízii (vrátane Vision Board).
    - `Reflexia (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy zamerané na sebareflexiu, písanie denníka, analýzu pocitov a myšlienok.
    - `Sebahodnota (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Aktivity a úlohy zamerané na posilňovanie sebahodnoty a sebadôvery.
    - `Mentálne Zdravie & Regulácia (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy súvisiace s praktikami pre mentálnu pohodu a reguláciu NS (meditácia, grounding - ak nie sú súčasťou Praxe).
    - `Ostatné (Osobný Rozvoj & Prax (Osobné & Rozvoj))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Osobného Rozvoja & Praxe. (Používať minimálne).
- **PROJEKT: Zdravie & Wellbeing (Osobné & Rozvoj)**
    - `INBOX (Zdravie & Wellbeing (Osobné & Rozvoj))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa zdravia a wellbeing.
    - `URGENT !!! (Zdravie & Wellbeing (Osobné & Rozvoj))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so zdravím a wellbeing.
    - `Lekári & Terapie (Zdravie & Wellbeing (Osobné & Rozvoj))`
        - *Dokumentácia:* Plánovanie, realizácia a sledovanie návštev lekárov, terapeutov, vyšetrení, operácií.
    - `Pohyb & Cvičenie (Zdravie & Wellbeing (Osobné & Rozvoj))`
        - *Dokumentácia:* Plánovanie a vykonávanie fyzických aktivít, cvičení, rehabilitácie.
    - `Strava & Doplnky (Zdravie & Wellbeing (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy týkajúce sa plánovania stravy, receptov, nákupu a užívania doplnkov výživy.
    - `Ostatné (Zdravie & Wellbeing (Osobné & Rozvoj))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Zdravia & Wellbeing. (Používať minimálne).
- **PROJEKT: Financie & Byrokracia - Osobné (Osobné & Rozvoj)**
    - `INBOX (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa osobných financií a byrokracie.
    - `URGENT !!! (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s osobnými financiami a byrokraciou.
    - `Byrokracia (Úrady, Doklady) (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Vybavovanie osobných dokladov, komunikácia s úradmi, riešenie občianskych záležitostí (ZŤP...).
    - `Platby & Účty (osobné) (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Realizácia a sledovanie osobných platieb, správa bankových účtov.
    - `Subscribe / Unsubscribe (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Správa osobných predplatných (zrušenie, zmena).
    - `Optimalizácia Výdavkov (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Analýza a úlohy zamerané na zníženie osobných výdavkov.
    - `Budget & Prehľad (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Tvorba, sledovanie a vyhodnocovanie osobného rozpočtu a finančných prehľadov.
    - `Ostatné (Financie & Byrokracia - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Osobných Financií & Byrokracie. (Používať minimálne).
- **PROJEKT: Nákupy & Domácnosť (Osobné & Rozvoj)**
    - `INBOX (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa nákupov a domácnosti.
    - `URGENT !!! (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s nákupmi a domácnosťou.
    - `Nákupný Zoznam (Všeobecne) (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Priebežný zoznam vecí na nákup (potraviny, drogéria...).
    - `Kúpiť: Bežný život (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Konkrétne úlohy na nákup vecí bežnej potreby (oblečenie, kozmetika...).
    - `Kúpiť: Zdravie (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Konkrétne úlohy na nákup liekov, doplnkov, zdravotníckych pomôcok.
    - `Kúpiť: Byt (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Konkrétne úlohy na nákup vybavenia, nábytku, dekorácií do bytu.
    - `Kúpiť: Produkty (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Konkrétne úlohy na nákup techniky, kníh, nástrojov (osobných aj pracovných, ak nemajú vlastný projekt).
    - `Údržba: Byt (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy týkajúce sa opráv, údržby a upratovania bytu/domu.
    - `Údržba: Digital (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy týkajúce sa digitálneho upratovania (PC, mobil, cloud), zálohovania.
    - `Údržba: Ostatné (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Iné úlohy údržby (auto, bicykel...).
    - `Ostatné (Nákupy & Domácnosť (Osobné & Rozvoj))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Nákupov & Domácnosti. (Používať minimálne).
- **PROJEKT: Sociálne Vzťahy & Komunita (Osobné & Rozvoj)**
    - `INBOX (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa sociálnych vzťahov a komunity.
    - `URGENT !!! (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so sociálnymi vzťahmi a komunitou.
    - `Komunikácia (Odpovedať) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy týkajúce sa odpovedania na osobné správy, emaily, udržiavania kontaktu.
    - `Stretnutia (Plánovanie) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Dohadovanie a plánovanie stretnutí s priateľmi, rodinou.
    - `Eventy (Plánovanie) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Plánovanie účasti na osobných/spoločenských eventoch (nie ich organizácia).
    - `Nápady na Aktivity (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Nápady na spoločné aktivity s blízkymi.
    - `Komunita & Networking (Osobné) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Budovanie a udržiavanie vzťahov v rámci osobných komunít a sietí.
    - `Ostatné (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Sociálnych Vzťahov & Komunity. (Používať minimálne).
- **PROJEKT: Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj)**
    - `INBOX (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa osobnej produktivity a optimalizácie.
    - `URGENT !!! (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s osobnou produktivitou a optimalizáciou.
    - `Optimalizácie (Systémy, Automatizácie, Workflows) (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Návrh, implementácia a vylepšovanie osobných systémov produktivity (Asana, GTD, Pomodoro...).
    - `Poznámkové Systémy (Správa a Údržba) (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Organizácia a údržba osobných poznámkových aplikácií (Diarium, Keep, Notion...).
    - `Nástroje Produktivity (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Výskum, testovanie a implementácia nových nástrojov a aplikácií pre osobnú produktivitu.
    - `Digitálny Poriadok (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Úlohy súvisiace s organizáciou osobných digitálnych súborov a dát.
    - `Ostatné (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Osobnej Produktivity & Optimalizácie. (Používať minimálne).

**2.  PORTFÓLIO: Pracovný Život & Administratíva (Práca & Admin)**

- **PROJEKT: ZHRNUTIE (Práca & Admin)**
    - `INBOX (ZHRNUTIE (Práca & Admin))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa celého portfólia Pracovný Život & Admin.
    - `URGENT !!! (ZHRNUTIE (Práca & Admin))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia, ktoré vyžadujú okamžitú pozornosť.
    - `KOMUNIKÁCIA (ZHRNUTIE (Práca & Admin))`
        - *Dokumentácia:* Všeobecná pracovná komunikácia (emaily, správy), ktorá nepatrí do špecifického projektu nižšie.
    - `OSTATNÉ (ZHRNUTIE (Práca & Admin))`
        - *Dokumentácia:* Úlohy z tohto portfólia, ktoré sa nedajú jednoznačne zaradiť do iných projektov alebo sekcií v rámci ZHRNUTIA. (Používať minimálne).
- **PROJEKT: Kariéra & Job Search (Práca & Admin)**
    - `INBOX (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa kariéry a hľadania práce.
    - `URGENT !!! (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s kariérou a hľadaním práce.
    - `Komunikácia (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Komunikácia súvisiaca s hľadaním práce, pohovormi, networkingom.
    - `Aktívne Hľadanie (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Prehľadávanie pracovných portálov, posielanie žiadostí.
    - `CV & Portfólio (Príprava) (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Tvorba, aktualizácia a prispôsobovanie CV, motivačných listov a portfólia.
    - `Pracovné Ciele & Stratégia (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Definovanie kariérnych cieľov, plánovanie profesného smerovania.
    - `Networking & Partnerstvá (Profesný) (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Budovanie a udržiavanie profesionálnych kontaktov relevantných pre kariéru.
    - `Ostatné (Kariéra & Job Search (Práca & Admin))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Kariéry & Job Search. (Používať minimálne).
- **PROJEKT: Financie & Byrokracia - Biznis (Práca & Admin)**
    - `INBOX (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa firemných financií a byrokracie.
    - `URGENT !!! (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s firemnými financiami a byrokraciou.
    - `Komunikácia (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Komunikácia s účtovníkom, bankou, úradmi ohľadom firemných financií a byrokracie.
    - `Byrokracia (Živnosť, OZ, Zmluvy) (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Zakladanie, správa a administratíva právnych foriem podnikania, príprava a správa zmlúv.
    - `Financie: Na Vystavenie / Prijatie (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Úlohy súvisiace s prípravou a evidenciou vystavených a prijatých faktúr.
    - `Financie: Platby / Odoslanie (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Realizácia a sledovanie firemných platieb (dodávateľom, odvody...).
    - `Financie: Prehľady & Reporty (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Tvorba a analýza finančných reportov, cashflow.
    - `Dane & Odvody (Biznis) (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Príprava podkladov a riešenie daňových a odvodových povinností.
    - `Ostatné (Financie & Byrokracia - Biznis (Práca & Admin))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Firemných Financií & Byrokracie. (Používať minimálne).
- **PROJEKT: Pracovné Nástroje & Infraštruktúra (Práca & Admin)**
    - `INBOX (Pracovné Nástroje & Infraštruktúra (Práca & Admin))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa pracovných nástrojov a infraštruktúry.
    - `URGENT !!! (Pracovné Nástroje & Infraštruktúra (Práca & Admin))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s pracovnými nástrojmi a infraštruktúrou.
    - `Optimalizácie (Systémy, Automatizácie, Workflows) (Pracovné Nástroje & Infraštruktúra (Práca & Admin))`
        - *Dokumentácia:* Zlepšovanie pracovných postupov a systémov pomocou nástrojov.
    - `Nástroje Produktivity (Pracovné Nástroje & Infraštruktúra (Práca & Admin))`
        - *Dokumentácia:* Správa licencií, účtov a nastavení pracovných nástrojov (Asana, GSuite...).
    - `Hardware & Software (Správa) (Pracovné Nástroje & Infraštruktúra (Práca & Admin))`
        - *Dokumentácia:* Údržba, aktualizácie, nákup a riešenie problémov s pracovným hardvérom a softvérom.
    - `Ostatné (Pracovné Nástroje & Infraštruktúra (Práca & Admin))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Pracovných Nástrojov & Infraštruktúry. (Používať minimálne).
- **PROJEKT: Guiding - Sprievodcovstvo (Práca & Admin)**
    - `INBOX (Guiding - Sprievodcovstvo (Práca & Admin))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa guidingu.
    - `URGENT !!! (Guiding - Sprievodcovstvo (Práca & Admin))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s guidingom.
    - `Komunikácia (Guiding) (Guiding - Sprievodcovstvo (Práca & Admin))`
        - *Dokumentácia:* Komunikácia s klientmi alebo agentúrami ohľadom guidingu.
    - `Networking & Partnerstvá (Guiding) (Guiding - Sprievodcovstvo (Práca & Admin))`
        - *Dokumentácia:* Nadväzovanie spoluprác v oblasti guidingu.
    - `Príprava & Materiály (Guiding - Sprievodcovstvo (Práca & Admin))`
        - *Dokumentácia:* Štúdium trás, príprava textov, máp a iných materiálov pre sprevádzanie.
    - `Logistika & Booking (Guiding) (Guiding - Sprievodcovstvo (Práca & Admin))`
        - *Dokumentácia:* Plánovanie trás, rezervácie, zabezpečenie dopravy a inej logistiky pre guiding.
    - `Ostatné (Guiding - Sprievodcovstvo (Práca & Admin))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Guidingu. (Používať minimálne).

**3.  PORTFÓLIO: Koučing & Terapia (Koučing & Terapia)**

- **PROJEKT: ZHRNUTIE (Koučing & Terapia)**
    - `INBOX (ZHRNUTIE (Koučing & Terapia))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa celého portfólia Koučing & Terapia.
    - `URGENT !!! (ZHRNUTIE (Koučing & Terapia))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia, ktoré vyžadujú okamžitú pozornosť.
    - `KOMUNIKÁCIA (ZHRNUTIE (Koučing & Terapia))`
        - *Dokumentácia:* Všeobecná komunikácia v oblasti koučingu/terapie, ktorá nepatrí do špecifického projektu nižšie.
    - `OSTATNÉ (ZHRNUTIE (Koučing & Terapia))`
        - *Dokumentácia:* Úlohy z tohto portfólia, ktoré sa nedajú jednoznačne zaradiť do iných projektov alebo sekcií v rámci ZHRNUTIA. (Používať minimálne).
- **PROJEKT: Klienti a Individuálky (Koučing & Terapia)**
    - `INBOX (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa individuálnych klientov.
    - `URGENT !!! (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s individuálnymi klientmi.
    - `Komunikácia (Klienti & Leads) (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Odpovedanie záujemcom, plánovanie konzultácií, bežná komunikácia s existujúcimi klientmi.
    - `Príprava na Session (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Preštudovanie poznámok, príprava cvičení a štruktúry na nadchádzajúcu session s klientom.
    - `Aktívni Klienti (Evidencia) (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Vedenie záznamov zo sessions, sledovanie pokroku, správa klientskych dát aktívnych klientov.
    - `Potenciálni Klienti (Leads) (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Správa kontaktov na záujemcov, follow-up, evidencia úvodných konzultácií.
    - `Pauza Klienti (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Evidencia klientov, ktorí majú dočasne prerušenú spoluprácu.
    - `Ukončení Klienti (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Evidencia ukončených spoluprác, záverečné zhrnutia, archivácia.
    - `Referencie & Spätná väzba (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Žiadanie, zbieranie a spracovanie referencií a spätnej väzby od individuálnych klientov.
    - `Ostatné (Klienti a Individuálky (Koučing & Terapia))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa individuálnych klientov. (Používať minimálne).
- **PROJEKT: Produkty & Služby (Koučing & Terapia)**
    - `INBOX (Produkty & Služby (Koučing & Terapia))`
        - *Dokumentácia:* Vstupné miesto pre nové nápady a úlohy týkajúce sa produktov a služieb v koučingu/terapii.
    - `URGENT !!! (Produkty & Služby (Koučing & Terapia))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s vývojom alebo správou produktov/služieb.
    - `Online Produkty & Služby (Vývoj) (Produkty & Služby (Koučing & Terapia))`
        - *Dokumentácia:* Tvorba a vývoj digitálnych produktov (nahrávky, online programy, appky) špecifických pre koučing/terapiu.
    - `Offline Produkty & Služby (Vývoj) (Produkty & Služby (Koučing & Terapia))`
        - *Dokumentácia:* Tvorba a vývoj fyzických produktov (karty, pracovné zošity) alebo špecifických offline služieb/balíčkov pre koučing/terapiu.
    - `Nástroje & Metodiky (Vývoj) (Produkty & Služby (Koučing & Terapia))`
        - *Dokumentácia:* Vývoj, adaptácia a testovanie nových koučingových/terapeutických nástrojov (figúrky, hry), techník a metodík.
    - `Ostatné (Produkty & Služby (Koučing & Terapia))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa produktov a služieb. (Používať minimálne).
- **PROJEKT: Marketing & Biznis Rozvoj (Koučing & Terapia)**
    - `INBOX (Marketing & Biznis Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Vstupné miesto pre nové marketingové a biznis rozvojové úlohy pre koučing/terapiu.
    - `URGENT !!! (Marketing & Biznis Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Urgentné marketingové alebo biznis rozvojové úlohy.
    - `Marketing (Aktivity, Kampane) (Marketing & Biznis Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Plánovanie a realizácia marketingových aktivít (SocMedia, Blog, Reklama) špecifických pre túto oblasť.
    - `Networking & Partnerstvá (B2B, Referraly) (Marketing & Biznis Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Budovanie vzťahov s potenciálnymi partnermi (firmy, iní terapeuti, platformy), správa referral programu.
    - `Business Rozvoj (Stratégia, Niche) (Marketing & Biznis Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Definovanie stratégie rastu praxe, špecializácie (niche), prieskum relevantného trhu.
    - `Monetizácia & Cenotvorba (Marketing & Biznis Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Nastavenie a úprava cien, balíčkov služieb, hľadanie spôsobov monetizácie.
    - `Ostatné (Marketing & Biznis Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Nezaradené marketingové a biznis rozvojové úlohy. (Používať minimálne).
- **PROJEKT: Štúdium & Rozvoj (Koučing & Terapia)**
    - `INBOX (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa štúdia a rozvoja v koučingu/terapii.
    - `URGENT !!! (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so štúdiom alebo profesným rozvojom.
    - `Knihy & Podcasty & Články (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Čítanie, počúvanie a spracovanie odborných zdrojov relevantných pre koučing a terapiu.
    - `Offline - Kurzy & Workshopy (Účasť) (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Účasť a spracovanie poznatkov z fyzických kurzov, workshopov a výcvikov v odbore.
    - `Online - Kurzy & Webináre (Účasť) (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Účasť a spracovanie poznatkov z online kurzov a webinárov v odbore.
    - `Zdokonaľovanie Metód (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Prehlbovanie znalostí a praxe v konkrétnych terapeutických/koučovacích metódach a prístupoch.
    - `Supervízia & Intervízia (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Plánovanie, účasť a spracovanie výstupov zo supervíznych/intervíznych stretnutí.
    - `Ostatné (Štúdium & Rozvoj (Koučing & Terapia))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa štúdia a rozvoja. (Používať minimálne).
- **PROJEKT: Optimalizácie & Admin (Koučing & Terapia)**
    - `INBOX (Optimalizácie & Admin (Koučing & Terapia))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa optimalizácie a administratívy v koučingu/terapii.
    - `URGENT !!! (Optimalizácie & Admin (Koučing & Terapia))`
        - *Dokumentácia:* Urgentné optimalizačné alebo administratívne úlohy.
    - `Optimalizácie (Systémy, Automatizácie, Workflows) (Optimalizácie & Admin (Koučing & Terapia))`
        - *Dokumentácia:* Návrh a implementácia zlepšení v procesoch (napr. automatizácia po session, systém na zápisky, AI pre supervíziu).
    - `Nástroje Produktivity (Koučing) (Optimalizácie & Admin (Koučing & Terapia))`
        - *Dokumentácia:* Výber, nastavenie a používanie špecifických nástrojov pre koučingovú prax (nahrávanie, CRM, scheduling...).
    - `Šablóny & Dokumenty (Optimalizácie & Admin (Koučing & Terapia))`
        - *Dokumentácia:* Tvorba a údržba šablón pre klientov (zmluvy, pracovné listy, emaily...).
    - `Štruktúry Sessions (Optimalizácie & Admin (Koučing & Terapia))`
        - *Dokumentácia:* Vytváranie a zdokonaľovanie štruktúr, plánov a checklistov pre jednotlivé sessions.
    - `Ostatné (Optimalizácie & Admin (Koučing & Terapia))`
        - *Dokumentácia:* Nezaradené optimalizačné a administratívne úlohy. (Používať minimálne).

**4.  PORTFÓLIO: Kurzy & Workshopy (Kurzy & Workshopy)**

- **PROJEKT: ZHRNUTIE (Kurzy & Workshopy)**
    - `INBOX (ZHRNUTIE (Kurzy & Workshopy))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa celého portfólia Kurzy & Workshopy.
    - `URGENT !!! (ZHRNUTIE (Kurzy & Workshopy))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia, ktoré vyžadujú okamžitú pozornosť.
    - `KOMUNIKÁCIA (ZHRNUTIE (Kurzy & Workshopy))`
        - *Dokumentácia:* Všeobecná komunikácia v oblasti kurzov, ktorá nepatrí do špecifického projektu nižšie.
    - `OSTATNÉ (ZHRNUTIE (Kurzy & Workshopy))`
        - *Dokumentácia:* Úlohy z tohto portfólia, ktoré sa nedajú jednoznačne zaradiť do iných projektov alebo sekcií v rámci ZHRNUTIA. (Používať minimálne).
- **PROJEKT: Klienti (Kurzy & Workshopy)**
    - `INBOX (Klienti (Kurzy & Workshopy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa účastníkov kurzov a workshopov.
    - `URGENT !!! (Klienti (Kurzy & Workshopy))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s účastníkmi.
    - `Komunikácia (Účastníci & Záujemcovia) (Klienti (Kurzy & Workshopy))`
        - *Dokumentácia:* Správa komunikácie s potenciálnymi a existujúcimi účastníkmi kurzov/workshopov.
    - `Registrácie & Správa Účastníkov (Klienti (Kurzy & Workshopy))`
        - *Dokumentácia:* Evidencia prihlášok, spravovanie zoznamov účastníkov, posielanie praktických informácií.
    - `Spätná Väzba & Referencie (Klienti (Kurzy & Workshopy))`
        - *Dokumentácia:* Zber a vyhodnocovanie spätnej väzby a referencií od účastníkov kurzov/workshopov.
    - `Fakturácia & Platby (Účastníci) (Klienti (Kurzy & Workshopy))`
        - *Dokumentácia:* Vystavovanie faktúr a sledovanie platieb od účastníkov kurzov/workshopov.
    - `Ostatné (Klienti (Kurzy & Workshopy))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa účastníkov. (Používať minimálne).
- **PROJEKT: Offline Projekty (Kurzy & Workshopy)**
    - `INBOX (Offline Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa offline kurzov a workshopov.
    - `URGENT !!! (Offline Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s offline kurzami a workshopmi.
    - `Nápady & Koncepty (Offline) (Offline Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Vývoj nových tém a formátov pre offline kurzy a workshopy.
    - `Plánovanie & Logistika (Miesto, Čas) (Offline Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Výber a rezervácia priestorov, plánovanie termínov, zabezpečenie techniky a materiálu pre offline eventy.
    - `Realizácia & Facilitácia (Prebiehajúce/Nadchádzajúce) (Offline Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Úlohy súvisiace s priamym vedením, facilitáciou a realizáciou offline kurzov/workshopov.
    - `Príprava Obsahu (Offline Špecifické) (Offline Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Tvorba prezentácií, pracovných listov, cvičení a iných materiálov špecifických pre offline formát.
    - `Ostatné (Offline Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa offline kurzov/workshopov. (Používať minimálne).
- **PROJEKT: Online Projekty (Kurzy & Workshopy)**
    - `INBOX (Online Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa online kurzov a digitálnych vzdelávacích produktov.
    - `URGENT !!! (Online Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s online kurzami.
    - `Nápady & Koncepty (Online) (Online Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Vývoj nových tém, formátov a štruktúr pre online kurzy a digitálne produkty (nahrávky, meditácie...).
    - `Tvorba Obsahu (Video, Text, Audio) (Online Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Natáčanie a strih videí, písanie textov, nahrávanie a editácia audia pre online kurzy.
    - `Vývoj Platformy & Technológie (Online Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Výber, nastavenie, správa a údržba online platformy (LMS, web), integrácie, technické zabezpečenie.
    - `Realizácia & Správa (Prebiehajúce/Dostupné) (Online Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Správa prebiehajúcich online kurzov, aktualizácia obsahu, technická podpora pre účastníkov.
    - `Ostatné (Online Projekty (Kurzy & Workshopy))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa online kurzov/produktov. (Používať minimálne).
- **PROJEKT: Marketing & Biznis Rozvoj (Kurzy & Workshopy)**
    - `INBOX (Marketing & Biznis Rozvoj (Kurzy))`
        - *Dokumentácia:* Vstupné miesto pre nové marketingové a biznis rozvojové úlohy pre kurzy/workshopy.
    - `URGENT !!! (Marketing & Biznis Rozvoj (Kurzy))`
        - *Dokumentácia:* Urgentné marketingové alebo biznis rozvojové úlohy pre kurzy.
    - `Marketing (Propagácia, Kampane) (Marketing & Biznis Rozvoj (Kurzy))`
        - *Dokumentácia:* Tvorba a realizácia marketingových kampaní pre propagáciu kurzov a workshopov (SocMedia, Email, Ads...).
    - `Networking & Partnerstvá (Priestory, Spolupráce) (Marketing & Biznis Rozvoj (Kurzy))`
        - *Dokumentácia:* Hľadanie a dohadovanie spoluprác s priestormi, firmami (pre firemné workshopy), inými lektormi, platformami.
    - `Business Rozvoj (Nové Formáty, Cenník) (Marketing & Biznis Rozvoj (Kurzy))`
        - *Dokumentácia:* Analýza trhu, vývoj nových formátov kurzov (napr. pre ZŠ), stratégia rastu, cenotvorba kurzov/workshopov.
    - `Predaj & Konverzie (Marketing & Biznis Rozvoj (Kurzy))`
        - *Dokumentácia:* Optimalizácia predajného procesu kurzov (landing pages, formuláre), sledovanie a zlepšovanie konverzií.
    - `Ostatné (Marketing & Biznis Rozvoj (Kurzy))`
        - *Dokumentácia:* Nezaradené marketingové a biznis rozvojové úlohy pre kurzy. (Používať minimálne).
- **PROJEKT: Štúdium a Rozvoj (Kurzy & Workshopy)**
    - `INBOX (Štúdium a Rozvoj (Kurzy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa rozvoja v oblasti vedenia kurzov a workshopov.
    - `URGENT !!! (Štúdium a Rozvoj (Kurzy))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so štúdiom alebo rozvojom lektorských zručností.
    - `Štúdium - kurzy, workshopy, výcviky, knihy (Štúdium a Rozvoj (Kurzy))`
        - *Dokumentácia:* Vzdelávanie v oblasti lektorských zručností, facilitácie, pedagogiky dospelých, online výučby, nových tém pre kurzy.
    - `Vývoj Metodológie & Štruktúry Kurzov (Štúdium a Rozvoj (Kurzy))`
        - *Dokumentácia:* Tvorba, testovanie a zdokonaľovanie vlastných metodických postupov, štruktúr kurzov a lekcií.
    - `Zdroje & Materiály (Štúdium a Rozvoj (Kurzy))`
        - *Dokumentácia:* Tvorba a správa knižnice cvičení, techník, zdrojov a materiálov pre rôzne typy kurzov.
    - `Ostatné (Štúdium a Rozvoj (Kurzy))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa štúdia a rozvoja pre kurzy. (Používať minimálne).
- **PROJEKT: Optimalizácie (Kurzy & Workshopy)**
    - `INBOX (Optimalizácie (Kurzy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa optimalizácie procesov kurzov a workshopov.
    - `URGENT !!! (Optimalizácie (Kurzy))`
        - *Dokumentácia:* Urgentné optimalizačné úlohy pre kurzy.
    - `Optimalizácie (Systémy, Automatizácie, Workflows) (Optimalizácie (Kurzy))`
        - *Dokumentácia:* Zefektívňovanie procesov (napr. registrácia, automatické emaily, správa spätnej väzby, nahrávanie offline lekcií).
    - `Nástroje Produktivity (Optimalizácie (Kurzy))`
        - *Dokumentácia:* Výber, implementácia a optimalizácia používania nástrojov na správu kurzov (LMS, email marketing, platobné brány...).
    - `Šablóny & Štruktúry sessions (Optimalizácie (Kurzy))`
        - *Dokumentácia:* Tvorba a údržba opakovane použiteľných šablón pre emaily účastníkom, prezentácie, štruktúry lekcií.
    - `Zlepšovanie Materiálov & Obsahu (Optimalizácie (Kurzy))`
        - *Dokumentácia:* Pravidelná revízia a aktualizácia exxistujúcich kurzových materiálov na základe spätnej väzby a nových poznatkov.
    - `Ostatné (Optimalizácie (Kurzy))`
        - *Dokumentácia:* Nezaradené optimalizačné úlohy pre kurzy. (Používať minimálne).

**5.  PORTFÓLIO: DJing (DJing)**

- **PROJEKT: ZHRNUTIE (DJing)**
    - `INBOX (ZHRNUTIE (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa celého portfólia DJing.
    - `URGENT !!! (ZHRNUTIE (DJing))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia, ktoré vyžadujú okamžitú pozornosť.
    - `KOMUNIKÁCIA (ZHRNUTIE (DJing))`
        - *Dokumentácia:* Všeobecná komunikácia v oblasti DJingu, ktorá nepatrí do špecifického projektu nižšie.
    - `OSTATNÉ (ZHRNUTIE (DJing))`
        - *Dokumentácia:* Úlohy z tohto portfólia, ktoré sa nedajú jednoznačne zaradiť do iných projektov alebo sekcií v rámci ZHRNUTIA. (Používať minimálne).
- **PROJEKT: Gigs & Booking (DJing)**
    - `INBOX (Gigs & Booking (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy a príležitosti týkajúce sa hraní.
    - `URGENT !!! (Gigs & Booking (DJing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s blížiacimi sa gigmi alebo bookingom.
    - `Komunikácia (Booking, Eventy) (Gigs & Booking (DJing))`
        - *Dokumentácia:* Komunikácia s promotérmi, klubmi, organizátormi eventov ohľadom podmienok, techniky, zmlúv.
    - `Networking & Partnerstvá (DJ) (Gigs & Booking (DJing))`
        - *Dokumentácia:* Budovanie vzťahov v hudobnej scéne (iní DJs, promotéri, majitelia klubov), hľadanie spoluprác na eventoch.
    - `Search (Príležitosti) (Gigs & Booking (DJing))`
        - *Dokumentácia:* Aktívne vyhľadávanie festivalov, klubov, eventov, parties (Ecstatic Dance, conscious, komerčné...), kde by sa dalo hrať.
    - `Oslovenie a ponuky (Gigs & Booking (DJing))`
        - *Dokumentácia:* Príprava a cielené rozosielanie ponúk na hranie, demo setov, press kitov.
    - `Potvrdené Gigs (Príprava) (Gigs & Booking (DJing))`
        - *Dokumentácia:* Všetky úlohy súvisiace s prípravou na konkrétne potvrdené hranie (technický rider, cestovný plán, špecifická príprava setu, komunikácia pred eventom).
    - `Referencie (Gigs & Booking (DJing))`
        - *Dokumentácia:* Žiadanie a zbieranie spätnej väzby a referencií po odohraných akciách.
    - `Ostatné (Gigs & Booking (DJing))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Gigs & Booking. (Používať minimálne).
- **PROJEKT: Knižnica + Tvorba (DJing)**
    - `INBOX (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa hudobnej knižnice a tvorby setov.
    - `URGENT !!! (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s hudbou alebo tvorbou (napr. príprava setu na poslednú chvíľu).
    - `Search (Nová Hudba, Žánre) (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Aktívne hľadanie a objavovanie novej hudby (online obchody, promo pooly, SoundCloud, Spotify...), sledovanie trendov a žánrov.
    - `Nákup & Download (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Nákup hudby (Beatport, Bandcamp...), sťahovanie promo trackov, správa stiahnutých súborov.
    - `Tag & Organize (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Analýza trackov (BPM, kľúč), tagovanie (žáner, nálada, energia...), organizácia knižnice v DJ softvéri (Rekordbox, Serato...).
    - `Príprava Konceptu (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Premýšľanie nad dramaturgiou, flowom a konceptom setu pre konkrétnu príležitosť alebo nahrávku.
    - `Tvorba Setu (Mix, Nahrávanie) (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Samotný proces mixovania trackov, nahrávanie setu, prípadná postprodukcia a finalizácia.
    - `Ostatné (Knižnica + Tvorba (DJing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa knižnice a tvorby setov. (Používať minimálne).
- **PROJEKT: Projekty (DJing)**
    - `INBOX (Projekty (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové nápady a úlohy týkajúce sa špeciálnych DJ projektov.
    - `URGENT !!! (Projekty (DJing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so špeciálnymi DJ projektmi.
    - `Networking & Partnerstvá (Projekty (DJing))`
        - *Dokumentácia:* Hľadanie a komunikácia s partnermi pre realizáciu projektov (kameramani, promotéri tour...).
    - `Nápady na Projekty (Video, Tour, Audio...) (Projekty (DJing))`
        - *Dokumentácia:* Brainstorming, konceptualizácia a plánovanie špeciálnych projektov (Cercle-style video, DJ tour, sety s guidingom, eventové koncepty).
    - `Prebiehajúce projekty (Projekty (DJing))`
        - *Dokumentácia:* Manažment úloh, koordinácia a realizácia aktívnych špeciálnych DJ projektov.
    - `Ostatné (Projekty (DJing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa špeciálnych DJ projektov. (Používať minimálne).
- **PROJEKT: Marketing (DJing)**
    - `INBOX (Marketing (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové marketingové úlohy špecifické pre DJing.
    - `URGENT !!! (Marketing (DJing))`
        - *Dokumentácia:* Urgentné marketingové úlohy pre DJing.
    - `Stratégia & Branding (DJ) (Marketing (DJing))`
        - *Dokumentácia:* Definovanie a budovanie osobnej DJskej značky, positioning, cieľové publikum.
    - `Tvorba Marketingových Materiálov (Marketing (DJing))`
        - *Dokumentácia:* Príprava press kitu, bio, promo fotiek, videí, riders.
    - `Správa Sociálnych Médií (DJ) (Marketing (DJing))`
        - *Dokumentácia:* Tvorba a publikovanie obsahu na relevantných platformách (SoundCloud, Mixcloud, Instagram...), komunikácia s fanúšikmi.
    - `Reklama & Promovanie (DJ) (Marketing (DJing))`
        - *Dokumentácia:* Platená aj organická propagácia setov, hraní, značky, eventov.
    - `Ostatné (Marketing (DJing))`
        - *Dokumentácia:* Nezaradené marketingové úlohy pre DJing. (Používať minimálne).
- **PROJEKT: Učenie DJingu - Individuálky (DJing)**
    - `INBOX (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa individuálneho učenia DJingu.
    - `URGENT !!! (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s individuálnymi študentmi.
    - `Komunikácia (Záujemcovia, Študenti) (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Komunikácia s potenciálnymi a existujúcimi individuálnymi študentmi.
    - `Aktívni Klienti (Evidencia) (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Vedenie záznamov o pokroku a obsahu lekcií aktívnych študentov.
    - `Potenciálni Klienti (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Správa záujemcov o individuálne lekcie.
    - `Pauza Klienti (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Evidencia študentov s prerušenými lekciami.
    - `Ukončení klienti (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Evidencia bývalých študentov.
    - `Príprava & Materiály (Individuálne) (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Príprava obsahu a materiálov pre konkrétne individuálne lekcie.
    - `Plánovanie & Scheduling (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Dohadovanie a plánovanie termínov individuálnych lekcií.
    - `Fakturácia & Platby (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Vystavovanie faktúr a sledovanie platieb za individuálne lekcie.
    - `Ostatné (Učenie DJingu - Individuálky (DJing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa individuálneho učenia DJingu. (Používať minimálne).
- **PROJEKT: Učenie DJingu - Skupinovky (DJing)**
    - `INBOX (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa skupinového učenia DJingu.
    - `URGENT !!! (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so skupinovými kurzami.
    - `Komunikácia (Záujemcovia, Skupiny) (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Komunikácia s potenciálnymi účastníkmi a prihlásenými skupinami.
    - `Aktívni Klienti (Evidencia) (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Vedenie záznamov o prebiehajúcich skupinových kurzoch.
    - `Potenciálni Klienti (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Správa záujemcov o skupinové kurzy.
    - `Pauza Klienti (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Evidencia prerušených skupinových kurzov (ak relevantné).
    - `Ukončení klienti (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Evidencia ukončených skupinových kurzov.
    - `Príprava & Materiály (Skupinové) (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Tvorba osnovy, prezentácií, cvičení a materiálov pre skupinové kurzy.
    - `Plánovanie & Logistika (Miesto, Termíny) (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Zabezpečenie priestorov, techniky, plánovanie termínov skupinových kurzov.
    - `Fakturácia & Registrácia (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Správa registrácií, fakturácia a sledovanie platieb za skupinové kurzy.
    - `Marketing (Skupinových Kurzov) (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Propagácia a získavanie účastníkov pre skupinové DJ kurzy.
    - `Ostatné (Učenie DJingu - Skupinovky (DJing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa skupinového učenia DJingu. (Používať minimálne).
- **PROJEKT: Technika a Vybavenie (DJing)**
    - `INBOX (Technika a Vybavenie (DJing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa DJ techniky.
    - `URGENT !!! (Technika a Vybavenie (DJing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s technikou (napr. oprava pred gigom).
    - `Nákupný Zoznam (DJ Technika) (Technika a Vybavenie (DJing))`
        - *Dokumentácia:* Priebežný zoznam potrebnej techniky a príslušenstva na nákup (káble, ihly, softvér...).
    - `Údržba & Opravy (Technika a Vybavenie (DJing))`
        - *Dokumentácia:* Plánovanie a realizácia pravidelnej údržby a opráv existujúceho DJ vybavenia.
    - `Setup & Konfigurácia (Technika a Vybavenie (DJing))`
        - *Dokumentácia:* Nastavovanie DJ softvéru, mapovanie MIDI kontrolérov, konfigurácia zvukového reťazca.
    - `Zoznam Vybavenia (Inventory) (Technika a Vybavenie (DJing))`
        - *Dokumentácia:* Vedenie aktuálneho prehľadu o vlastnenom DJ vybavení a jeho stave.
    - `Ostatné (Technika a Vybavenie (DJing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa DJ techniky. (Používať minimálne).

**6.  PORTFÓLIO: Umenie (Umenie)**

- **PROJEKT: ZHRNUTIE (Umenie)**
    - `INBOX (ZHRNUTIE (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa celého portfólia Umenie.
    - `URGENT !!! (ZHRNUTIE (Umenie))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia, ktoré vyžadujú okamžitú pozornosť.
    - `KOMUNIKÁCIA (ZHRNUTIE (Umenie))`
        - *Dokumentácia:* Všeobecná komunikácia v oblasti umenia, ktorá nepatrí do špecifického projektu nižšie.
    - `OSTATNÉ (ZHRNUTIE (Umenie))`
        - *Dokumentácia:* Úlohy z tohto portfólia, ktoré sa nedajú jednoznačne zaradiť do iných projektov alebo sekcií v rámci ZHRNUTIA. (Používať minimálne).
- **PROJEKT: Správa Projektov (Umenie)**
    - `INBOX (Správa Projektov (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre úlohy týkajúce sa koordinácie a správy umeleckých projektov.
    - `URGENT !!! (Správa Projektov (Umenie))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so správou umeleckých projektov.
    - `Komunikácia (Všeobecná - Umenie) (Správa Projektov (Umenie))`
        - *Dokumentácia:* Koordinácia komunikácie naprieč rôznymi umeleckými projektmi.
    - `Fondy & Granty (Prehľad, Hľadanie) (Správa Projektov (Umenie))`
        - *Dokumentácia:* Sledovanie grantových výziev, prehľad možností financovania pre umenie.
    - `Nápady (Nové Projekty) (Správa Projektov (Umenie))`
        - *Dokumentácia:* Zachytávanie prvotných nápadov na nové umelecké projekty (pred presunom do Nápady Portfólia alebo špecifického projektu).
    - `Ponuky (Projekty na zváženie) (Správa Projektov (Umenie))`
        - *Dokumentácia:* Evidencia a zvažovanie externých ponúk na umelecké projekty alebo spolupráce.
    - `Aktuálne (Projekty - Koordinácia) (Správa Projektov (Umenie))`
        - *Dokumentácia:* Vysokúrovňová koordinácia a sledovanie stavu všetkých aktívnych umeleckých projektov.
    - `Ostatné (Správa Projektov (Umenie))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa správy umeleckých projektov. (Používať minimálne).
- **PROJEKT: New Beginnings (Umenie)**
    - `INBOX (New Beginnings (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy špecifické pre projekt New Beginnings.
    - `URGENT !!! (New Beginnings (Umenie))`
        - *Dokumentácia:* Urgentné úlohy pre projekt New Beginnings.
    - `Komunikácia (Projekt) (New Beginnings (Umenie))`
        - *Dokumentácia:* Komunikácia s tímom, partnermi, účastníkmi projektu New Beginnings.
    - `Partnerstvá (Projekt) (New Beginnings (Umenie))`
        - *Dokumentácia:* Budovanie a udržiavanie partnerstiev pre projekt New Beginnings.
    - `Výskum (Autor) (New Beginnings (Umenie))`
        - *Dokumentácia:* Výskumná časť projektu New Beginnings.
    - `Tvorba (New Beginnings (Umenie))`
        - *Dokumentácia:* Kreatívna a realizačná časť projektu New Beginnings.
    - `Prezentácia & Event (New Beginnings (Umenie))`
        - *Dokumentácia:* Plánovanie a realizácia verejnej prezentácie alebo eventu projektu.
    - `Admin & Logistika (New Beginnings (Umenie))`
        - *Dokumentácia:* Administratívne a logistické úlohy špecifické pre tento projekt.
    - `Ostatné (New Beginnings (Umenie))`
        - *Dokumentácia:* Nezaradené úlohy v rámci projektu New Beginnings. (Používať minimálne).
- **PROJEKT: Lud:Us (Umenie)**
    - `INBOX (Lud:Us (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy špecifické pre projekt Lud:Us.
    - `URGENT !!! (Lud:Us (Umenie))`
        - *Dokumentácia:* Urgentné úlohy pre projekt Lud:Us.
    - `Komunikácia (Projekt) (Lud:Us (Umenie))`
        - *Dokumentácia:* Komunikácia s tímom, partnermi, školami, záujemcami o Lud:Us.
    - `Partnerstvá (Školy...) (Lud:Us (Umenie))`
        - *Dokumentácia:* Nadväzovanie a udržiavanie spoluprác so školami a inými inštitúciami.
    - `Výskum (Lud:Us (Umenie))`
        - *Dokumentácia:* Výskumná časť projektu Lud:Us (napr. vplyv na deti).
    - `Tvorba(Karty, App, LP - Autor) (Lud:Us (Umenie))`
        - *Dokumentácia:* Vývoj a tvorba komponentov projektu Lud:Us (karty, aplikácia, lecture performance).
    - `Prezentácia & Event (Lud:Us (Umenie))`
        - *Dokumentácia:* Plánovanie a realizácia prezentácií alebo workshopov Lud:Us.
    - `Marketing & Predaj (Lud:Us) (Lud:Us (Umenie))`
        - *Dokumentácia:* Propagácia a predaj produktov/služieb Lud:Us.
    - `Admin & Logistika (Lud:Us (Umenie))`
        - *Dokumentácia:* Administratívne a logistické úlohy špecifické pre tento projekt.
    - `Ostatné (Lud:Us (Umenie))`
        - *Dokumentácia:* Nezaradené úlohy v rámci projektu Lud:Us. (Používať minimálne).
- **PROJEKT: Ume(nie)Áno (Umenie)**
    - `INBOX (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy špecifické pre projekt Ume(nie)Áno.
    - `URGENT !!! (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Urgentné úlohy pre projekt Ume(nie)Áno.
    - `Komunikácia (Projekt) (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Komunikácia súvisiaca s projektom Ume(nie)Áno.
    - `Partnerstvá (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Budovanie partnerstiev pre projekt Ume(nie)Áno.
    - `Výskum (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Výskumná činnosť v rámci projektu.
    - `Tvorba (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Kreatívna a realizačná časť projektu.
    - `Prezentácia & Event (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Plánovanie a realizácia prezentácií alebo eventov projektu.
    - `Marketing & Predaj (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Propagácia a prípadný predaj výstupov projektu.
    - `Admin & Logistika (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Administratívne a logistické úlohy projektu.
    - `Ostatné (Ume(nie)Áno (Umenie))`
        - *Dokumentácia:* Nezaradené úlohy v rámci projektu Ume(nie)Áno. (Používať minimálne).
- **PROJEKT: Marketing a Biznis Rozvoj (Umenie)**
    - `INBOX (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre nové marketingové a biznis rozvojové úlohy pre umenie.
    - `URGENT !!! (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Urgentné marketingové alebo biznis rozvojové úlohy pre umenie.
    - `Komunikácia (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Komunikácia s galériami, kurátormi, médiami, potenciálnymi kupcami, sponzormi.
    - `Portfólio & CV (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Tvorba a aktualizácia umeleckého portfólia a životopisu pre marketingové účely.
    - `Marketing (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Plánovanie a realizácia propagácie výstav, diel, projektov (online aj offline).
    - `Networking & Partnerstvá (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Budovanie vzťahov v umeleckej komunite, s inštitúciami, sponzormi.
    - `Business Rozvoj (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Stratégia predaja umeleckých diel, hľadanie nových príležitostí, prieskum trhu s umením.
    - `Monetizácia (Granty - Príprava Podkladov) (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Príprava a podávanie žiadostí o granty, sponzoring, správa predaja diel.
    - `Ostatné (Marketing a Biznis Rozvoj (Umenie))`
        - *Dokumentácia:* Nezaradené marketingové a biznis rozvojové úlohy pre umenie. (Používať minimálne).
- **PROJEKT: Štúdium a Rozvoj (Umenie)**
    - `INBOX (Štúdium a Rozvoj (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa štúdia a rozvoja v oblasti umenia.
    - `URGENT !!! (Štúdium a Rozvoj (Umenie))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so štúdiom alebo umeleckým rozvojom.
    - `Štúdium Online (Štúdium a Rozvoj (Umenie))`
        - *Dokumentácia:* Online kurzy, webináre, štúdium teórie umenia, sledovanie iných umelcov a trendov online.
    - `Štúdium Offline (Štúdium a Rozvoj (Umenie))`
        - *Dokumentácia:* Účasť na workshopoch, kurzoch, rezidenciách, návštevy galérií, výstav, performance.
    - `Rozvoj Zručností (Performance, Iné) (Štúdium a Rozvoj (Umenie))`
        - *Dokumentácia:* Praktický tréning, experimentovanie s novými technikami, materiálmi a médiami.
    - `Ostatné (Štúdium a Rozvoj (Umenie))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa štúdia a rozvoja v umení. (Používať minimálne).
- **PROJEKT: Optimalizácie (Umenie)**
    - `INBOX (Optimalizácie (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa optimalizácie v umeleckej praxi.
    - `URGENT !!! (Optimalizácie (Umenie))`
        - *Dokumentácia:* Urgentné optimalizačné úlohy pre umenie.
    - `Optimalizácie (Systémy, Automatizácie, Workflows) (Optimalizácie (Umenie))`
        - *Dokumentácia:* Zefektívňovanie tvorivého procesu, organizácia práce v ateliéri, manažment projektov.
    - `Nástroje Produktivity (Optimalizácie (Umenie))`
        - *Dokumentácia:* Využitie digitálnych (napr. na dokumentáciu, portfólio) alebo fyzických nástrojov na podporu tvorby a manažmentu.
    - `Šablóny & Štruktúry (Optimalizácie (Umenie))`
        - *Dokumentácia:* Tvorba šablón pre projektové návrhy, žiadosti o granty, portfóliá, komunikáciu.
    - `Zlepšovanie Materiálov & Obsahu (Optimalizácie (Umenie))`
        - *Dokumentácia:* Systémy pre archiváciu, dokumentáciu a správu umeleckých diel a súvisiacich materiálov.
    - `Ostatné (Optimalizácie (Umenie))`
        - *Dokumentácia:* Nezaradené optimalizačné úlohy pre umenie. (Používať minimálne).
- **PROJEKT: Tvorba & Prezentácia - Iné (Umenie)**
    - `INBOX (Tvorba & Prezentácia - Iné (Umenie))`
        - *Dokumentácia:* Vstupné miesto pre úlohy týkajúce sa tvorby a prezentácie mimo hlavných projektov.
    - `URGENT !!! (Tvorba & Prezentácia - Iné (Umenie))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s touto tvorbou alebo jej prezentáciou.
    - `Tvorba (Performance, Maľba, Iné) (Tvorba & Prezentácia - Iné (Umenie))`
        - *Dokumentácia:* Samotný proces tvorby diel alebo performance, ktoré nespadajú pod špecifické projekty ako New Beginnings alebo Lud:Us.
    - `Príprava na Vystúpenia / Výstavy (Tvorba & Prezentácia - Iné (Umenie))`
        - *Dokumentácia:* Logistická a obsahová príprava na prezentáciu tejto konkrétnej tvorby.
    - `Prezentácia (Realizácia) (Tvorba & Prezentácia - Iné (Umenie))`
        - *Dokumentácia:* Úlohy súvisiace s priebehom výstavy alebo vystúpenia tejto tvorby.
    - `Ostatné (Tvorba & Prezentácia - Iné (Umenie))`
        - *Dokumentácia:* Nezaradené úlohy v rámci tejto tvorby a prezentácie. (Používať minimálne)

**7.  PORTFÓLIO: AI & Technológie (AI & Tech)**

- **PROJEKT: ZHRNUTIE (AI & Tech)**
    - `INBOX (ZHRNUTIE (AI & Tech))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa celého portfólia AI & Technológie.
    - `URGENT !!! (ZHRNUTIE (AI & Tech))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia, ktoré vyžadujú okamžitú pozornosť.
    - `KOMUNIKÁCIA (ZHRNUTIE (AI & Tech))`
        - *Dokumentácia:* Všeobecná komunikácia v oblasti AI a technológií, ktorá nepatrí do špecifického projektu nižšie.
    - `OSTATNÉ (ZHRNUTIE (AI & Tech))`
        - *Dokumentácia:* Úlohy z tohto portfólia, ktoré sa nedajú jednoznačne zaradiť do iných projektov alebo sekcií v rámci ZHRNUTIA. (Používať minimálne).
- **PROJEKT: Kariéra v AI & Tech (AI & Tech)**
    - `INBOX (Kariéra v AI & Tech (AI & Tech))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa kariéry v AI a technológiách.
    - `URGENT !!! (Kariéra v AI & Tech (AI & Tech))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s kariérou v AI/Tech.
    - `Job Search (AI/Tech) (Kariéra v AI & Tech (AI & Tech))`
        - *Dokumentácia:* Hľadanie pracovných ponúk, stáží alebo projektov v oblasti AI a technológií.
    - `CV & Portfolio (AI/Tech) (Kariéra v AI & Tech (AI & Tech))`
        - *Dokumentácia:* Tvorba a aktualizácia životopisu a portfólia zameraného na AI/Tech zručnosti a projekty.
    - `Spolupráce & Partnerstvá (AI/Tech) (Kariéra v AI & Tech (AI & Tech))`
        - *Dokumentácia:* Networking a budovanie vzťahov v AI/Tech komunite, hľadanie spoluprác.
    - `Granty & Funding (AI/Tech) (Kariéra v AI & Tech (AI & Tech))`
        - *Dokumentácia:* Hľadanie a žiadanie o granty alebo financovanie pre AI/Tech projekty.
    - `Ostatné (Kariéra v AI & Tech (AI & Tech))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Kariéry v AI & Tech. (Používať minimálne).
- **PROJEKT: Štúdium & Research (AI & Tech)**
    - `INBOX (Štúdium & Research (AI & Tech))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa štúdia a výskumu v AI/Tech.
    - `URGENT !!! (Štúdium & Research (AI & Tech))`
        - *Dokumentácia:* Urgentné študijné alebo výskumné úlohy v AI/Tech.
    - `Aktívne Štúdium (Kurzy, Knihy, Výskumy) (Štúdium & Research (AI & Tech))`
    - `Research (Trendy, Nové Technológie) (Štúdium & Research (AI & Tech))`
        - *Dokumentácia:* Sledovanie aktuálnych trendov, nových nástrojov, platforiem a prístupov v AI a technológiách.
    - `Nápady na Výskum / Témy (Štúdium & Research (AI & Tech))`
        - *Dokumentácia:* Zachytávanie otázok a tém pre hlbší výskum v AI/Tech.
    - `Zdroje & Materiály (Linky, Papers...) (Štúdium & Research (AI & Tech))`
        - *Dokumentácia:* Evidencia a správa odkazov na zaujímavé články, štúdie, dokumentácie.
    - `Ostatné (Štúdium & Research (AI & Tech))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Štúdia & Research v AI & Tech. (Používať minimálne).
- **PROJEKT: Projekty & Produkty (AI & Tech)**
    - `INBOX (Nové AI/Tech Nápady & Projekty) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Vstupné miesto pre nové konkrétne projektové alebo produktové nápady v AI/Tech.
    - `URGENT !!! (AI/Tech Projekty) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s vývojom AI/Tech projektov/produktov.
    - `Osobné AI Nástroje (Vývoj) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Úlohy súvisiace s vývojom AI nástrojov pre tvoje osobné použitie (AI Duplikát, AI Manažér...).
    - `AI pre Biznis (Vývoj) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Úlohy súvisiace s vývojom AI riešení na podporu tvojich biznis aktivít (pre Koučing, Kurzy...).
    - `SaaS & Komerčné Produkty (Vývoj) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Úlohy súvisiace s vývojom AI/Tech produktov určených na predaj alebo ako SaaS.
    - `Automatizácie & Skripty (Vývoj) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Úlohy súvisiace s tvorbou konkrétnych automatizačných skriptov a riešení.
    - `Web Aplikácie & Kód (Vývoj) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Úlohy súvisiace s vývojom webových aplikácií, kódovaním (frontend, backend...).
    - `Experimenty & Open Source (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Úlohy pre menšie technologické experimenty, testovanie knižníc, príspevky do open source.
    - `Nápady na Zváženie (Roztriedené) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Nápady špecifické pre AI/Tech, ktoré prešli prvotným triedením, ale čakajú na detailnejšie plánovanie alebo realizáciu.
    - `Hotovo / Archív (AI/Tech Projekty) (Projekty & Produkty (AI & Tech))`
        - *Dokumentácia:* Miesto pre dokončené alebo archivované AI/Tech projekty.
- **PROJEKT: Nástroje & Workflow PRE Prácu s AI (AI & Tech)**
    - `INBOX (Nástroje & Workflow PRE Prácu s AI (AI & Tech))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa nástrojov a workflow *pre* prácu s AI.
    - `URGENT !!! (Nástroje & Workflow PRE Prácu s AI (AI & Tech))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s AI nástrojmi a workflow.
    - `Nástroje (Výber, Testovanie, Správa - GPTs, Platformy...) (Nástroje & Workflow PRE Prácu s AI (AI & Tech))`
        - *Dokumentácia:* Výber, hodnotenie, testovanie a správa AI nástrojov (LLM, generátory obrazu/audia/videa, platformy...).
    - `Workflows (Efektívny Prompting, Chainovanie...) (Nástroje & Workflow PRE Prácu s AI (AI & Tech))`
        - *Dokumentácia:* Vývoj, testovanie a dokumentovanie efektívnych postupov a workflow pre prácu s AI (napr. techniky promptingu).
    - `Optimalizácia Používania AI (Best Practices) (Nástroje & Workflow PRE Prácu s AI (AI & Tech))`
        - *Dokumentácia:* Zlepšovanie efektivity, kvality a nákladovosti pri práci s AI, zdieľanie osvedčených postupov.
    - `Experimenty s Nástrojmi a Technikami (Nástroje & Workflow PRE Prácu s AI (AI & Tech))`
        - *Dokumentácia:* Skúšanie nových možností AI nástrojov, techník promptingu, integrácií.
    - `Ostatné (Nástroje & Workflow PRE Prácu s AI (AI & Tech))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa nástrojov a workflow pre prácu s AI. (Používať minimálne).
- **PROJEKT: Optimalizácia & Automatizácia POMOCOU AI (AI & Tech)**
    - `INBOX (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Vstupné miesto pre nové nápady a úlohy na využitie AI na optimalizáciu a automatizáciu.
    - `URGENT !!! (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s AI automatizáciou.
    - `Automatizácie (Make.com + AI, Skripty...) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Návrh, implementácia a správa automatizácií, ktoré využívajú AI (napr. AI Task Triage, Action Plan Generation).
    - `Integrácie (Prepojenie AI s inými nástrojmi) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Nastavenie a údržba prepojení medzi AI a Asanou, emailom, kalendárom, a inými nástrojmi.
    - `Workflows (AI-Enhanced Procesy) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Návrh a implementácia pracovných postupov, kde AI aktívne asistuje alebo vykonáva časti procesu.
    - `Knižnica Promptov (Pre Opakované Úlohy) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Tvorba, testovanie a správa knižnice efektívnych a opakovane použiteľných promptov pre rôzne AI úlohy.
    - `Analýza Dát Pomocou AI (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Využitie AI na analýzu dát z Asany (napr. produktivita, vzorce) alebo iných zdrojov.
    - `Ostatné (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa využitia AI na optimalizáciu a automatizáciu. (Používať minimálne).

**8.  PORTFÓLIO: Projekty & Produkty (Nápady)**

- **PROJEKT: ZHRNUTIE (Nápady)**
    - `INBOX (ZHRNUTIE (Nápady))`
        - *Dokumentácia:* Centrálny inbox pre úplne nové, ešte nezatriedené nápady z akýchkoľvek oblastí pred ich presunom do špecifického "Nápady - ..." projektu.
    - `URGENT !!! (ZHRNUTIE (Nápady))`
        - *Dokumentácia:* Nápady vyžadujúce veľmi rýchle prvotné posúdenie alebo rozhodnutie.
    - `KOMUNIKÁCIA (ZHRNUTIE (Nápady))`
        - *Dokumentácia:* Komunikácia týkajúca sa viacerých nápadov alebo procesu správy nápadov.
    - `OSTATNÉ (ZHRNUTIE (Nápady))`
        - *Dokumentácia:* Úlohy súvisiace so správou nápadov, ktoré nepatria inde.
- **PROJEKT: Nápady - AI + SaaS (Nápady)**
    - `INBOX (Nové AI/SaaS nápady) (Nápady - AI + SaaS (Nápady))`
        - *Dokumentácia:* Zachytávanie nových nápadov špecificky pre AI a SaaS produkty/služby.
    - `URGENT !!! (Validácia AI/SaaS) (Nápady - AI + SaaS (Nápady))`
        - *Dokumentácia:* Nápady na AI/SaaS vyžadujúce rýchlu validáciu alebo rozhodnutie.
    - `Na Zváženie / Validácia (Nápady - AI + SaaS (Nápady))`
        - *Dokumentácia:* Nápady na AI/SaaS vo fáze prieskumu trhu, technickej uskutočniteľnosti, spätnej väzby.
    - `Rozpracované Koncepty (Nápady - AI + SaaS (Nápady))`
        - *Dokumentácia:* Nápady na AI/SaaS, ktoré sa aktívne rozpracovávajú (biznis model, MVP špecifikácia...).
    - `Zaparkované / Archív (Nápady - AI + SaaS (Nápady))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už realizované nápady na AI/SaaS.
- **PROJEKT: Nápady - Eventy (Nápady)**
    - `INBOX (Nové nápady na eventy) (Nápady - Eventy (Nápady))`
        - *Dokumentácia:* Zachytávanie nových nápadov na akékoľvek eventy (workshopy, retreaty, párty...).
    - `URGENT !!! (Validácia eventov) (Nápady - Eventy (Nápady))`
        - *Dokumentácia:* Nápady na eventy vyžadujúce rýchlu validáciu alebo rozhodnutie.
    - `Na Zváženie / Validácia (Nápady - Eventy (Nápady))`
        - *Dokumentácia:* Nápady na eventy vo fáze prieskumu záujmu, hľadania miesta, odhadu nákladov.
    - `Rozpracované Koncepty (Nápady - Eventy (Nápady))`
        - *Dokumentácia:* Nápady na eventy, ktoré sa aktívne rozpracovávajú (program, cieľovka, budget...).
    - `Zaparkované / Archív (Nápady - Eventy (Nápady))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už realizované nápady na eventy.
- **PROJEKT: Nápady - Kurzy & Workshopy (Nápady)**
    - `INBOX (Nové nápady na kurzy) (Nápady - Kurzy & Workshopy (Nápady))`
        - *Dokumentácia:* Zachytávanie nových nápadov na kurzy a workshopy (online aj offline).
    - `URGENT !!! (Validácia kurzov) (Nápady - Kurzy & Workshopy (Nápady))`
        - *Dokumentácia:* Nápady na kurzy vyžadujúce rýchlu validáciu alebo rozhodnutie.
    - `Na Zváženie / Validácia (Nápady - Kurzy & Workshopy (Nápady))`
        - *Dokumentácia:* Nápady na kurzy vo fáze prieskumu záujmu, definovania obsahu, cieľovky.
    - `Rozpracované Koncepty (Nápady - Kurzy & Workshopy (Nápady))`
        - *Dokumentácia:* Nápady na kurzy, ktoré sa aktívne rozpracovávajú (osnova, kľúčové cvičenia, formát...).
    - `Zaparkované / Archív (Nápady - Kurzy & Workshopy (Nápady))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už realizované nápady na kurzy.
- **PROJEKT: Nápady - Firmy (Nápady)**
    - `INBOX (Nové nápady pre firmy) (Nápady - Firmy (Nápady))`
        - *Dokumentácia:* Zachytávanie nových nápadov na produkty, služby alebo teambuildingy pre firemných klientov.
    - `URGENT !!! (Validácia pre firmy) (Nápady - Firmy (Nápady))`
        - *Dokumentácia:* Nápady pre firmy vyžadujúce rýchlu validáciu alebo rozhodnutie.
    - `Na Zváženie / Validácia (Nápady - Firmy (Nápady))`
        - *Dokumentácia:* Nápady pre firmy vo fáze prieskumu potrieb firiem, konkurencie, cenotvorby.
    - `Rozpracované Koncepty (Nápady - Firmy (Nápady))`
        - *Dokumentácia:* Nápady pre firmy, ktoré sa aktívne rozpracovávajú (návrh programu, ponuka...).
    - `Zaparkované / Archív (Nápady - Firmy (Nápady))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už realizované nápady pre firmy.
- **PROJEKT: Nápady - Hry (Nápady)**
    - `INBOX (Nové nápady na hry) (Nápady - Hry (Nápady))`
        - *Dokumentácia:* Zachytávanie nových nápadov na hry (stolové, digitálne, LARP) alebo gamifikáciu.
    - `URGENT !!! (Validácia hier) (Nápady - Hry (Nápady))`
        - *Dokumentácia:* Nápady na hry vyžadujúce rýchlu validáciu alebo rozhodnutie.
    - `Na Zváženie / Validácia (Nápady - Hry (Nápady))`
        - *Dokumentácia:* Nápady na hry vo fáze prieskumu mechaník, cieľovky, uskutočniteľnosti.
    - `Rozpracované Koncepty (Nápady - Hry (Nápady))`
        - *Dokumentácia:* Nápady na hry, ktoré sa aktívne rozpracovávajú (pravidlá, prototyp...).
    - `Zaparkované / Archív (Nápady - Hry (Nápady))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už realizované nápady na hry.
- **PROJEKT: Nápady - Umenie (Nápady)**
    - `INBOX (Nové nápady na umenie) (Nápady - Umenie (Nápady))`
        - *Dokumentácia:* Zachytávanie nových nápadov na umelecké projekty, performance, diela.
    - `URGENT !!! (Validácia umenia) (Nápady - Umenie (Nápady))`
        - *Dokumentácia:* Nápady na umenie vyžadujúce rýchlu validáciu alebo rozhodnutie.
    - `Na Zváženie / Validácia (Nápady - Umenie (Nápady))`
        - *Dokumentácia:* Nápady na umenie vo fáze prieskumu konceptu, materiálov, možností prezentácie.
    - `Rozpracované Koncepty (Nápady - Umenie (Nápady))`
        - *Dokumentácia:* Nápady na umenie, ktoré sa aktívne rozpracovávajú (skice, návrhy, plány...).
    - `Zaparkované / Archív (Nápady - Umenie (Nápady))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už realizované nápady na umenie.
- **PROJEKT: Nápady - Ostatné (Nápady)**
    - `INBOX (Nové ostatné nápady) (Nápady - Ostatné (Nápady))`
        - *Dokumentácia:* Zachytávanie všetkých ostatných nápadov, ktoré nespadajú do predchádzajúcich kategórií.
    - `URGENT !!! (Validácia ostatných) (Nápady - Ostatné (Nápady))`
        - *Dokumentácia:* Ostatné nápady vyžadujúce rýchlu validáciu alebo rozhodnutie.
    - `Na Zváženie / Validácia (Nápady - Ostatné (Nápady))`
        - *Dokumentácia:* Ostatné nápady vo fáze prieskumu a validácie.
    - `Rozpracované Koncepty (Nápady - Ostatné (Nápady))`
        - *Dokumentácia:* Ostatné nápady, ktoré sa aktívne rozpracovávajú.
    - `Zaparkované / Archív (Nápady - Ostatné (Nápady))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už realizované ostatné nápady.

**9.  PORTFÓLIO: Social Media & Marketing (Marketing)**

- **PROJEKT: ZHRNUTIE (Marketing)**
    - `INBOX (ZHRNUTIE (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené marketingové úlohy.
    - `URGENT !!! (ZHRNUTIE (Marketing))`
        - *Dokumentácia:* Urgentné marketingové úlohy vyžadujúce okamžitú akciu.
    - `KOMUNIKÁCIA (ZHRNUTIE (Marketing))`
        - *Dokumentácia:* Všeobecná marketingová komunikácia (interná, s partnermi...).
    - `OSTATNÉ (ZHRNUTIE (Marketing))`
        - *Dokumentácia:* Nezaradené marketingové úlohy. (Používať minimálne).
- **PROJEKT: Stratégia & Branding - Centrálny (Marketing)**
    - `INBOX (Stratégia & Branding - Centrálny (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre úlohy týkajúce sa marketingovej stratégie a brandingu.
    - `URGENT !!! (Stratégia & Branding - Centrálny (Marketing))`
        - *Dokumentácia:* Urgentné strategické alebo brandingové úlohy.
    - `Stratégia (Celková) (Stratégia & Branding - Centrálny (Marketing))`
        - *Dokumentácia:* Definovanie, revízia a sledovanie celkovej marketingovej stratégie, cieľov, KPI.
    - `Brand & Vizuálna Identita (Stratégia & Branding - Centrálny (Marketing))`
        - *Dokumentácia:* Tvorba, správa a konzistentné používanie loga, farieb, fontov, tónu komunikácie naprieč všetkými kanálmi.
    - `Cieľové Skupiny (Stratégia & Branding - Centrálny (Marketing))`
        - *Dokumentácia:* Definovanie, analýza a aktualizácia persón cieľových skupín.
    - `Ostatné (Stratégia & Branding - Centrálny (Marketing))`
        - *Dokumentácia:* Nezaradené strategické a brandingové úlohy. (Používať minimálne).
- **PROJEKT: Web Stránky - Správa & Obsah (Marketing)**
    - `INBOX (Web Stránky - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa webových stránok.
    - `URGENT !!! (Web Stránky - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s webom (napr. oprava chyby).
    - `Obsah & SEO (Web Stránky - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Tvorba, aktualizácia a optimalizácia textov, blogov, landing pages pre používateľov a vyhľadávače.
    - `Dizajn & UX (Web Stránky - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Návrh, testovanie a vylepšovanie vizuálu, štruktúry a používateľského zážitku webových stránok.
    - `Technická Správa (Web Stránky - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Správa hostingu, domén, certifikátov, pluginov, záloh, zabezpečenia a rýchlosti webu.
    - `Analytika & Optimalizácie (Web Stránky - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Sledovanie návštevnosti (Google Analytics), konverzií, správania používateľov, A/B testovanie a optimalizácia webu.
    - `Ostatné (Web Stránky - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa webových stránok. (Používať minimálne).
- **PROJEKT: Sociálne Médiá - Správa & Obsah (Marketing)**
    - `INBOX (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa sociálnych médií.
    - `URGENT !!! (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Urgentné úlohy na sociálnych sieťach (napr. reakcia na krízu, časovo obmedzená kampaň).
    - `Plán Obsahu (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Tvorba a správa redakčného kalendára, plánovanie tém a formátov.
    - `Tvorba Obsahu (Grafika, Video, Text) (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Príprava a tvorba konkrétnych postov, stories, reels, videí, grafiky pre Instagram, Facebook, atď.
    - `Správa Kanálov & Komunita (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Publikovanie obsahu podľa plánu, odpovedanie na komentáre a správy, interakcia s komunitou.
    - `Reklama (SocMedia) (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Nastavenie, správa a optimalizácia platených reklamných kampaní na sociálnych sieťach.
    - `Analytika (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Sledovanie a vyhodnocovanie dosahu, engagementu, rastu followerov a iných metrík.
    - `Ostatné (Sociálne Médiá - Správa & Obsah (Marketing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa sociálnych médií. (Používať minimálne).
- **PROJEKT: Email Marketing & CRM Lite (Marketing)**
    - `INBOX (Email Marketing & CRM Lite (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa email marketingu a správy kontaktov.
    - `URGENT !!! (Email Marketing & CRM Lite (Marketing))`
        - *Dokumentácia:* Urgentné úlohy v email marketingu (napr. odoslanie dôležitej kampane).
    - `Správa Kontaktov (Email Marketing & CRM Lite (Marketing))`
        - *Dokumentácia:* Zber emailov (formuláre, QR kódy), import/export, čistenie databázy, segmentácia kontaktov.
    - `Tvorba Kampaní (Email Marketing & CRM Lite (Marketing))`
        - *Dokumentácia:* Písanie textov, tvorba dizajnu/šablón a nastavenie newsletterov a emailových kampaní.
    - `Automatizácia (Email Marketing & CRM Lite (Marketing))`
        - *Dokumentácia:* Nastavenie a správa automatizovaných emailových sekvencií (welcome, follow-up...).
    - `Analytika (Email Marketing & CRM Lite (Marketing))`
        - *Dokumentácia:* Sledovanie a vyhodnocovanie metrík emailových kampaní (open rate, click rate, unsubscribes...).
    - `Ostatné (Email Marketing & CRM Lite (Marketing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa email marketingu. (Používať minimálne).
- **PROJEKT: Reklama & Kampane - Centrálne (Marketing)**
    - `INBOX (Reklama & Kampane - Centrálne (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa platených reklamných kampaní (mimo SocMedia).
    - `URGENT !!! (Reklama & Kampane - Centrálne (Marketing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s platenými kampaňami.
    - `Tvorba Reklamných Materiálov (Reklama & Kampane - Centrálne (Marketing))`
        - *Dokumentácia:* Tvorba vizuálov (bannery), textov, videí pre Google Ads, a iné reklamné platformy.
    - `Správa Kampaní (FB/Google Ads) (Reklama & Kampane - Centrálne (Marketing))`
        - *Dokumentácia:* Nastavenie cieľenia, kľúčových slov, spustenie, monitoring a úpravy platených kampaní.
    - `Budget & Optimalizácia (Reklama & Kampane - Centrálne (Marketing))`
        - *Dokumentácia:* Správa reklamného rozpočtu, sledovanie CPA/ROAS, A/B testovanie a optimalizácia kampaní.
    - `Vyhodnotenie (Reklama & Kampane - Centrálne (Marketing))`
        - *Dokumentácia:* Pravidelná analýza výkonnosti reklamných kampaní a reporting výsledkov.
    - `Ostatné (Reklama & Kampane - Centrálne (Marketing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa centrálnych reklamných kampaní. (Používať minimálne).
- **PROJEKT: Marketingové Nástroje & Optimalizácie (Marketing)**
    - `INBOX (Marketingové Nástroje & Optimalizácie (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa marketingových nástrojov a optimalizácií.
    - `URGENT !!! (Marketingové Nástroje & Optimalizácie (Marketing))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s marketingovými nástrojmi alebo optimalizáciou.
    - `Optimalizácie Procesov (Marketingové Nástroje & Optimalizácie (Marketing))`
        - *Dokumentácia:* Hľadanie a implementácia spôsobov, ako zefektívniť marketingové workflow (napr. schvaľovanie obsahu).
    - `Automatizácia Marketingu (Marketingové Nástroje & Optimalizácie (Marketing))`
        - *Dokumentácia:* Nastavenie automatizácií pre marketingové úlohy (napr. zdieľanie obsahu medzi platformami, reporting).
    - `Affiliate & Partnerstvá (Nástroje) (Marketingové Nástroje & Optimalizácie (Marketing))`
        - *Dokumentácia:* Výber, implementácia a správa platformy pre affiliate marketing, sledovanie výkonnosti partnerov.
    - `Ostatné (Marketingové Nástroje & Optimalizácie (Marketing))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa marketingových nástrojov a optimalizácií. (Používať minimálne).
- **PROJEKT: Produkty & Služby - Marketingový pohľad (Marketing)**
    - `INBOX (Produkty & Služby - Marketingový pohľad (Marketing))`
        - *Dokumentácia:* Vstupné miesto pre marketingové úlohy súvisiace s konkrétnymi produktami/službami.
    - `URGENT !!! (Produkty & Služby - Marketingový pohľad (Marketing))`
        - *Dokumentácia:* Urgentné marketingové úlohy pre produkty/služby.
    - `Produktové Portfólio (Prehľad) (Produkty & Služby - Marketingový pohľad (Marketing))`
        - *Dokumentácia:* Udržiavanie aktuálneho prehľadu ponúkaných produktov a služieb a ich marketingových materiálov.
    - `Uvedenie na Trh (Go-to-Market) (Produkty & Služby - Marketingový pohľad (Marketing))`
        - *Dokumentácia:* Plánovanie a exekúcia marketingovej stratégie pre uvedenie nových produktov alebo služieb.
    - `Cenotvorba & Balíčky (Produkty & Služby - Marketingový pohľad (Marketing))`
        - *Dokumentácia:* Analýza cien, tvorba cenových stratégií, balíčkov a špeciálnych ponúk z marketingového hľadiska.
    - `Ostatné (Produkty & Služby - Marketingový pohľad (Marketing))`
        - *Dokumentácia:* Nezaradené marketingové úlohy týkajúce sa produktov/služieb. (Používať minimálne).

**10.  PORTFÓLIO: Cestovanie & Logistika (Cestovanie)**

- **PROJEKT: ZHRNUTIE (Cestovanie)**
    - `INBOX (ZHRNUTIE (Cestovanie))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa cestovania a logistiky.
    - `URGENT !!! (ZHRNUTIE (Cestovanie))`
        - *Dokumentácia:* Urgentné cestovateľské alebo logistické úlohy.
    - `KOMUNIKÁCIA (ZHRNUTIE (Cestovanie))`
        - *Dokumentácia:* Všeobecná komunikácia súvisiaca s cestovaním.
    - `OSTATNÉ (ZHRNUTIE (Cestovanie))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa cestovania. (Používať minimálne).
- **PROJEKT: Plánovanie Ciest - Pracovné/Osobné (Cestovanie)**
    - `INBOX (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa plánovania ciest.
    - `URGENT !!! (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))`
        - *Dokumentácia:* Urgentné úlohy pri plánovaní ciest.
    - `Nápady (Destinácie) (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))`
        - *Dokumentácia:* Zbieranie inšpirácie, research a ukladanie nápadov na budúce cesty a destinácie.
    - `Plánovanie Itinerárov (Konkrétne cesty) (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))`
        - *Dokumentácia:* Detailné plánovanie programu, harmonogramu, trás a aktivít pre konkrétne nadchádzajúce cesty.
    - `Kontakty & Miesta (Počas Cesty) (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))`
        - *Dokumentácia:* Zisťovanie, ukladanie a kontaktovanie ľudí alebo miest v plánovaných destináciách.
    - `Ostatné (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa plánovania ciest. (Používať minimálne).
- **PROJEKT: Logistika Cestovania - Booking & Admin (Cestovanie)**
    - `INBOX (Logistika Cestovania - Booking & Admin (Cestovanie))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa logistiky a administratívy cestovania.
    - `URGENT !!! (Logistika Cestovania - Booking & Admin (Cestovanie))`
        - *Dokumentácia:* Urgentné logistické úlohy (napr. last minute booking).
    - `Doprava (Booking) (Logistika Cestovania - Booking & Admin (Cestovanie))`
        - *Dokumentácia:* Vyhľadávanie, porovnávanie a rezervácia leteniek, vlakov, autobusov, prenájmu áut.
    - `Ubytovanie (Booking) (Logistika Cestovania - Booking & Admin (Cestovanie))`
        - *Dokumentácia:* Vyhľadávanie, porovnávanie a rezervácia hotelov, Airbnb, hostelov a iného ubytovania.
    - `Dokumenty & Poistenie (Logistika Cestovania - Booking & Admin (Cestovanie))`
        - *Dokumentácia:* Vybavovanie víz, kontrola platnosti pasu, vodičského preukazu, zabezpečenie cestovného poistenia.
    - `Balenie & Príprava (Logistika Cestovania - Booking & Admin (Cestovanie))`
        - *Dokumentácia:* Tvorba baliacich zoznamov, nákup potrebných vecí, fyzická príprava na cestu.
    - `Ostatné (Logistika Cestovania - Booking & Admin (Cestovanie))`
        - *Dokumentácia:* Nezaradené logistické a administratívne úlohy súvisiace s cestovaním. (Používať minimálne).

**11.  PORTFÓLIO: Znalostná Báza & Výskum (Arzenál)**

- **PROJEKT: ZHRNUTIE (Arzenál)**
    - `INBOX (ZHRNUTIE (Arzenál))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa znalostnej bázy a výskumu.
    - `URGENT !!! (ZHRNUTIE (Arzenál))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so správou znalostí alebo výskumom.
    - `KOMUNIKÁCIA (ZHRNUTIE (Arzenál))`
        - *Dokumentácia:* Komunikácia týkajúca sa zdieľania znalostí, výskumných spoluprác.
    - `OSTATNÉ (ZHRNUTIE (Arzenál))`
        - *Dokumentácia:* Nezaradené úlohy v rámci tohto portfólia. (Používať minimálne).
- **PROJEKT: Štúdium & Výskum - Tematický (Arzenál)**
    - `INBOX (Štúdium & Výskum - Tematický (Arzenál))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa tematického štúdia a výskumu.
    - `URGENT !!! (Štúdium & Výskum - Tematický (Arzenál))`
        - *Dokumentácia:* Urgentné študijné alebo výskumné úlohy.
    - `Aktívny Výskum / Štúdium (Štúdium & Výskum - Tematický (Arzenál))`
        - *Dokumentácia:* Úlohy spojené s aktívnym vyhľadávaním, čítaním, počúvaním a spracovaním informácií k určitej téme (napr. somatika, AI, marketing...).
    - `Nápady na Výskum (Štúdium & Výskum - Tematický (Arzenál))`
        - *Dokumentácia:* Zachytávanie tém, otázok a hypotéz pre budúci hlbší výskum alebo štúdium.
    - `Zdroje (Knihy, Kurzy...) (Štúdium & Výskum - Tematický (Arzenál))`
        - *Dokumentácia:* Evidencia a správa zdrojov informácií – zoznam kníh na prečítanie, kurzov na absolvovanie, článkov na preštudovanie.
    - `Ostatné (Štúdium & Výskum - Tematický (Arzenál))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa tematického štúdia a výskumu. (Používať minimálne).
- **PROJEKT: Organizácia Vedomostí - PKM (Arzenál)**
    - `INBOX (Organizácia Vedomostí - PKM (Arzenál))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa organizácie vedomostí.
    - `URGENT !!! (Organizácia Vedomostí - PKM (Arzenál))`
        - *Dokumentácia:* Urgentné úlohy súvisiace so správou poznatkov.
    - `Spracovanie Poznámok (Organizácia Vedomostí - PKM (Arzenál))`
        - *Dokumentácia:* Úlohy ako prepisovanie, sumarizácia, tagovanie, formátovanie a ukladanie poznámok zo zdrojov (knihy, kurzy, meetingy...).
    - `Prepojenie & Syntéza (Organizácia Vedomostí - PKM (Arzenál))`
        - *Dokumentácia:* Aktívne vytváranie prepojení medzi poznámkami, hľadanie súvislostí, syntéza informácií do nových celkov (napr. príprava podkladov pre článok).
    - `Správa Nástrojov (Diarium, Keep...) (Organizácia Vedomostí - PKM (Arzenál))`
        - *Dokumentácia:* Nastavenie, konfigurácia, údržba a optimalizácia používania nástrojov na správu poznatkov (Diarium, Keep, Notion, Obsidian...).
    - `Review & Údržba (Organizácia Vedomostí - PKM (Arzenál))`
        - *Dokumentácia:* Pravidelná revízia existujúcich poznámok, odstraňovanie duplikátov, aktualizácia informácií, zlepšovanie štruktúry PKM.
    - `Ostatné (Organizácia Vedomostí - PKM (Arzenál))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa organizácie vedomostí. (Používať minimálne).

**12.  PORTFÓLIO: Crypto (Crypto)**

- **PROJEKT: ZHRNUTIE (Crypto)**
    - `INBOX (ZHRNUTIE (Crypto))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy týkajúce sa kryptomien.
    - `URGENT !!! (ZHRNUTIE (Crypto))`
        - *Dokumentácia:* Urgentné úlohy v oblasti kryptomien.
    - `KOMUNIKÁCIA (ZHRNUTIE (Crypto))`
        - *Dokumentácia:* Všeobecná komunikácia súvisiaca s kryptomenami (komunita, podpora...).
    - `OSTATNÉ (ZHRNUTIE (Crypto))`
        - *Dokumentácia:* Nezaradené úlohy v rámci portfólia Crypto. (Používať minimálne).
- **PROJEKT: Crypto Manažment (Crypto)**
    - `INBOX (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Vstupné miesto pre všetky konkrétne úlohy týkajúce sa manažmentu kryptomien.
    - `URGENT !!! (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Urgentné úlohy v manažmente kryptomien (napr. reakcia na trhové udalosti).
    - `Komunikácia (Crypto) (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Špecifická komunikácia s burzami, podporou peňaženiek, daňovými poradcami pre crypto.
    - `Analýza & Stratégia (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Sledovanie trhu, analýza kryptomien a projektov, definovanie a revízia investičnej/tradingovej stratégie.
    - `Trading & Investície (Záznamy) (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Realizácia nákupov, predajov, obchodov, stakingu, yield farmingu a ich detailná evidencia.
    - `Nástroje & Peňaženky (Správa) (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Nastavenie, bezpečná správa a údržba hardvérových a softvérových peňaženiek, účtov na burzách, analytických nástrojov (napr. portfolio trackery).
    - `Optimalizácie (Procesy, Boty) (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Nastavenie, testovanie a správa tradingových botov (napr. TrashPanda), automatizácia alertov a reportingu.
    - `Admin & Dane (Crypto) (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Príprava podkladov pre daňové priznanie z kryptomien, sledovanie lokálnych regulácií, reporting.
    - `Ostatné (Crypto Manažment (Crypto))`
        - *Dokumentácia:* Nezaradené úlohy v rámci Crypto Manažmentu. (Používať minimálne).

**13.  PORTFÓLIO: Organizovanie Eventov (Eventy)**

- **PROJEKT: ZHRNUTIE (Eventy)**
    - `INBOX (ZHRNUTIE (Eventy))`
        - *Dokumentácia:* Vstupné miesto pre nové, nezaradené úlohy alebo všeobecné otázky týkajúce sa organizácie eventov.
    - `URGENT !!! (ZHRNUTIE (Eventy))`
        - *Dokumentácia:* Najnaliehavejšie úlohy z celého portfólia organizácie eventov.
    - `KOMUNIKÁCIA (ZHRNUTIE (Eventy))`
        - *Dokumentácia:* Všeobecná komunikácia súvisiaca s organizáciou eventov, ktorá nepatrí ku konkrétnemu eventu/projektu.
    - `OSTATNÉ (ZHRNUTIE (Eventy))`
        - *Dokumentácia:* Nezaradené úlohy v rámci portfólia Eventy. (Používať minimálne).
- **PROJEKT: Nápady na Eventy - Inkubátor (Eventy)**
    - `INBOX (Nové nápady na eventy - všetky typy) (Nápady na Eventy - Inkubátor (Eventy))`
        - *Dokumentácia:* Zachytávanie prvotných nápadov na akékoľvek eventy.
    - `URGENT !!! (Validácia / Rýchle rozhodnutie) (Nápady na Eventy - Inkubátor (Eventy))`
        - *Dokumentácia:* Nápady na eventy, ktoré vyžadujú okamžité posúdenie alebo rozhodnutie.
    - `Na Zváženie / Validácia Konceptu (Nápady na Eventy - Inkubátor (Eventy))`
        - *Dokumentácia:* Nápady vo fáze prieskumu záujmu, uskutočniteľnosti, hľadania potenciálnych partnerov.
    - `Rozpracované Koncepty (Program, Cieľovka, Miesto...) (Nápady na Eventy - Inkubátor (Eventy))`
        - *Dokumentácia:* Nápady, ktoré sa aktívne rozpracovávajú do detailnejšieho konceptu (hrubý program, definícia cieľovky, možné miesta...).
    - `Hrubý Odhad Budgetu & Životaschopnosť (Nápady na Eventy - Inkubátor (Eventy))`
        - *Dokumentácia:* Prvotný odhad nákladov a potenciálnych príjmov, posúdenie finančnej realizovateľnosti.
    - `Zaparkované / Archív (Nápady na eventy) (Nápady na Eventy - Inkubátor (Eventy))`
        - *Dokumentácia:* Odložené, zamietnuté alebo už presunuté do realizačnej fázy nápady na eventy.
- **PROJEKT: Event Manažment - Plánovanie & Realizácia (Eventy)**
    - `INBOX (Nové úlohy pre schválené eventy) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa konkrétnych, už schválených eventov (ktoré nemajú vlastný projekt).
    - `URGENT !!! (Úlohy pre eventy) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s plánovaním alebo realizáciou eventov.
    - `Komunikácia (Partneri, Účastníci, Dodávatelia) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Manažment komunikácie so všetkými zainteresovanými stranami eventu.
    - `Detailné Plánovanie (Program, Harmonogram) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Tvorba detailného programu, časového harmonogramu, scenára eventu.
    - `Logistika (Miesto, Technika, Catering...) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Zabezpečenie miesta konania, technického vybavenia, cateringu, personálu a ďalšej logistiky.
    - `Marketing & Promovanie (Realizácia) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Exekúcia marketingového plánu pre event (tvorba materiálov, spustenie reklám, komunikácia...).
    - `Realizácia & Koordinácia (Na mieste) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Úlohy spojené s priamou koordináciou a manažmentom eventu počas jeho konania.
    - `Spätná Väzba & Vyhodnotenie (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Zber spätnej väzby od účastníkov, analýza úspešnosti eventu, záverečné reporty.
    - `Budget & Fakturácia (Eventov) (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Detailné sledovanie rozpočtu, spracovanie faktúr od dodávateľov, prípadná fakturácia partnerom/účastníkom.
    - `Ostatné (Event Manažment - Plánovanie & Realizácia (Eventy))`
        - *Dokumentácia:* Nezaradené úlohy v rámci manažmentu eventov. (Používať minimálne).
- **PROJEKT: Plánovanie Retreatov (Eventy)**
    - `INBOX (Úlohy pre schválené retreaty) (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy špecifické pre plánovanie a realizáciu retreatov.
    - `URGENT !!! (Retreaty) (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s retreatmi.
    - `Detailný Koncept & Program (Retreat) (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Tvorba detailného programu, harmonogramu, obsahu a zážitkovej mapy retreatu.
    - `Miesto & Logistika (Výber, Booking) (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Výber, obhliadka a rezervácia lokality, zabezpečenie ubytovania, stravy, dopravy pre retreat.
    - `Partneri & Tím (Retreat) (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Výber a koordinácia lektorov, facilitátorov, pomocného personálu pre retreat.
    - `Marketing & Účastníci (Realizácia) (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Marketingová kampaň, správa registrácií a komunikácia s účastníkmi špecificky pre retreat.
    - `Budget & Financovanie (Detailné) (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Detailné plánovanie a sledovanie rozpočtu, cenotvorba, riešenie platieb pre retreat.
    - `Realizácia & Spätná Väzba (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Koordinácia priebehu retreatu, zber a vyhodnotenie spätnej väzby.
    - `Ostatné (Plánovanie Retreatov (Eventy))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa plánovania retreatov. (Používať minimálne).
- **PROJEKT: Conscious / Komunitné Eventy (Eventy)**
    - `INBOX (Úlohy pre schválené komunitné eventy) (Conscious / Komunitné Eventy (Eventy))`
        - *Dokumentácia:* Vstupné miesto pre nové úlohy týkajúce sa conscious/komunitných eventov.
    - `URGENT !!! (Komunitné Eventy) (Conscious / Komunitné Eventy (Eventy))`
        - *Dokumentácia:* Urgentné úlohy súvisiace s týmito eventmi.
    - `Koncept & Program (Detailné) (Conscious / Komunitné Eventy (Eventy))`
        - *Dokumentácia:* Tvorba zámeru, programu, playlistu (ak relevantné) pre tieto špecifické eventy.
    - `Miesto & Technika (Conscious / Komunitné Eventy (Eventy))`
        - *Dokumentácia:* Zabezpečenie vhodného priestoru, zvukovej a svetelnej techniky.
    - `Komunita & Pozvánky (Conscious / Komunitné Eventy (Eventy))`
        - *Dokumentácia:* Komunikácia s komunitou, šírenie pozvánok, správa účastníkov.
    - `Realizácia & Atmosféra (Conscious / Komunitné Eventy (Eventy))`
        - *Dokumentácia:* Príprava priestoru, facilitácia, držanie priestoru a atmosféry počas eventu.
    - `Ostatné (Conscious / Komunitné Eventy (Eventy))`
        - *Dokumentácia:* Nezaradené úlohy týkajúce sa conscious/komunitných eventov. (Používať minimálne)

---

---

## **Parent Task**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Text) obsahuje **čitateľný názov** rodičovskej úlohy, ak aktuálna úloha je podúlohou. Slúži primárne pre **tvoju rýchlu orientáciu** a pre AI ako dodatočný kontext k Parent Task ID. AI Agent toto pole vyplní automaticky (alebo by malo byť vyplnené Asanou pri exporte, ak to podporuje) v momente, keď identifikuje alebo vytvorí podúlohu. Tu musí byť úplne presný názov, ktorý má Parent Task vo field “Name”. Môžu sem ísť len úlohy, ktoré už sú v mojej databáze úloh. Nikdy nevymýšlaš nové (ešte neexistujúce). Sem ide iba názov úlohy bez ID
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Toto pole **nevyplňuješ manuálne**. Malo by sa vyplniť automaticky systémom alebo AI Agentom, keď sa vytvorí vzťah podúlohy. Slúži ti len na čítanie pre rýchly kontext.
- **Možnosti výberu / Vstup:** Text (názov rodičovskej úlohy).
    - *Príklad:* Ak máš úlohu Napísať prvý draft blogu ako podúlohu k Napísať blog post o Pomodoro, toto pole by obsahovalo "Napísať blog post o Pomodoro".

---

## **`Parent Task ID`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto pole (v Asane reprezentované prepojením, v CSV exporte ako **unikátne ID** rodičovskej úlohy) jednoznačne identifikuje nadradenú úlohu, ak aktuálna úloha je podúlohou. Je to **kľúčové pre systém a AI** na presné mapovanie hierarchie úloh, najmä pri práci s dátami mimo Asany (CSV, API). AI Agent toto pole vyplní automaticky (alebo Asana pri exporte), keď vytvorí alebo identifikuje podúlohu. Tu musí ísť presný “Task ID”, ktorý má Parent Task vo fielde “Task ID”. Sem ide iba ID bez názvu úlohy.
- Dávaš sem Task ID (to je to isté čo má samotná úloha ako Task ID… nejde o žiadny iný typ ID)
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Toto pole **nevyplňuješ ani neupravuješ manuálne**. Je to systémový identifikátor. Používa sa interne na prepojenie úloh.
- **Možnosti výberu / Vstup:** Unikátne ID úlohy z Asany. Tu musí ísť presný “Task ID”, ktorý má Parent Task vo fielde “Task ID”.

---

## **Subtasks (for user)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto pole (v Asane reprezentované ako zoznam prepojených úloh pod hlavnou úlohou, v CSV exporte často ako zoznam ID podúloh oddelených čiarkou alebo v samostatných riadkoch) obsahuje **zoznam všetkých priamych podúloh**, ktoré patria pod aktuálnu (rodičovskú) úlohu. Definuje **rozklad práce** na menšie kroky. AI Agent bude toto pole primárne **zapisovať** (generovať podúlohy) a môže ho aj **čítať**, aby videl existujúci plán alebo stav dokončenia krokov. Do tohto poľa sa zapisujú všetky podúlohy, ktoré musím urobiť k tomu aby som splnil hlavnú úlohu.
- **Pravidlo:** Musí ich byť 5 až 7. Nie menej, nie viac.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári:** Zadávanie podúloh **nie je priamo vo formulári** pre hlavnú úlohu. Namiesto toho použiješ pole  Suggested Initial Steps / Subtasks na napísanie návrhov.
    - **Priamo v Asane:** Môžeš manuálne pridávať podúlohy k existujúcej úlohe.
    - **Kontrola AI:** Keď AI vygeneruje podúlohy (na základe akcie Vytvor Kroky/Podúlohy), ty ich skontroluješ, prípadne upravíš alebo doplníš priamo v Asane pod hlavnou úlohou.
- **Možnosti výberu / Vstup:**
    - **Pre Teba (Manuálne):** V Asane klikneš na "Add subtask" pod rodičovskou úlohou.
    - **Pre AI (Zápis):** AI použije Asana API na vytvorenie nových úloh a ich priradenie ako podúloh k aktuálnej úlohe.
    - **Pre AI (Čítanie):** AI môže získať zoznam ID a názvov existujúcich podúloh, aby videla aktuálny plán alebo progres.
- Format:
    - Voľný text, formátovaný ako číslovaný zoznam pod sebou (po každom bode je nový riadok, tak aby to fungovalo aj v CSV, nie /n).
        - “1. …
        2. …
        3. …
        4. …
        …”

**V skratke:** Subtasks reprezentujú výsledok rozdelenia hlavnej úlohy na kroky. Tento rozklad buď urobíš ty manuálne v Asane, alebo ho (ideálne) automaticky vygeneruje AI na základe tvojho zadania.

---

## **Subtasks (for AI)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (odporúčaný typ **Multi-line Text**) slúži výhradne na zaznamenanie **plánovaných krokov AI Agenta** pri spracovaní danej úlohy. Definuje interný **rozklad práce AI** na menšie, logické celky. Na rozdiel od poľa "Subtasks (for user)", toto pole neobsahuje kroky, ktoré máš vykonať ty (user), ale poskytuje transparentnosť do procesu, ktorý AI plánuje, aby dosiahlo Task Goal. Nie je to detailný technický log ako AI Agent Status Log, ale skôr zoznam hlavných činností AI relevantných pre danú úlohu.
- **Ako s tým pracovať (TY & AI):**
    - **TY:** Primárne **čítaš** toto pole, aby si pochopil, aký postup AI zvolila alebo plánuje zvoliť. **Nepíšeš** sem. Tvoj vstup pre AI ide do iných polí (Input Data & Context, Specific Constraints / Instructions, atď.).
    - **AI:** **Zapisuje** do tohto poľa. AI sem typicky vloží zoznam svojich plánovaných krokov po analýze vstupných dát a pred začatím samotnej exekúcie (napr. keď je AI Workflow Status 3 - Pripravená pre AI alebo na začiatku stavu 4 - AI Agent Pracuje). AI môže tento zoznam aktualizovať, ak sa jej plán počas práce zmení, alebo doplniť o potvrdenie vykonaných krokov. AI tu nevytvára prepojiteľné Asana podúlohy (na to slúži Parent Task), ale len textový zoznam.
- **Možnosti výberu / Vstup:**
    - **Pre Teba (Čítanie):** Čítaš textový zoznam krokov AI.
    - **Pre AI (Zápis):** Voľný text, formátovaný ako číslovaný zoznam pod sebou (po každom bode je nový riadok, tak aby to fungovalo aj v CSV, nie /n).
        - *Príklady:*
            1. Analyzovať Input Data & Context pre kľúčové požiadavky.
            2. Vyhľadať relevantné zdroje na webe pomocou kľúčových slov X, Y, Z.
            3. Sumarizovať nájdené informácie.
            4. Vygenerovať prvý návrh textu podľa Desired Output Format a Desired Style / Tone.
            5. Uložiť finálny výstup do poľa Notes.
            6. Pridať komentár s [SUMMARY] a nastaviť AI Workflow Status na 5 - Vyžaduje Moju Akciu.

---

## **Subtasks (in System)**

- **Funkcia a Fungovanie (Dokumentácia):** Tu sú vypísané všetky úlohy (Name úloh), ktoré majú túto úlohu vo fielde “Parent Task” a “Parent Task ID”.
- Môžu tú byť len úlohy, ktoré už existujú v mojej databáze úloh, alebo sú neskôr vytvorené v systéme ako samostatné úlohy so všetkými fields a sú podúlohami tejto úlohy.
- Vypĺňa AI, alebo automaticky.

---

## **Subtasks ID (in System)**

- **Funkcia a Fungovanie (Dokumentácia):** Ak je vyplnené pole/field “**Subtasks (in System)**”, sem patria Task ID’s všetkých úloh, ktoré sú napísané v poli **Subtasks (in System)** (musia ísť za sebou v tom istom poradí ako sú napísané v poli “**Subtasks (in System)**”
- Vypĺňa AI, alebo automaticky.

---

## **AI Brainstorm Ideas on How It Can Help Me:**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-line Text**) slúži ako dedikovaný priestor, kam AI Agent **aktívne navrhuje konkrétne spôsoby, ako ti môže pomôcť** s dokončením alebo zjednodušením danej úlohy. Nejde o hlavnú akciu definovanú v AI Action / Process, ale o **dodatočné, kontextuálne relevantné nápady na asistenciu**, ktoré AI vygeneruje na základe analýzy cieľa, vstupov a tvojich navrhnutých krokov. Cieľom je inšpirovať ťa, ponúknuť možné skratky, navrhnúť ďalšie delegovateľné činnosti alebo pomôcť prekonať potenciálne prekážky. AI by malo vygenerovať 10 konkrétnych nápadov.
- **Pravidlo:** Musí ich byť 10. Nie menej, nie viac.
- **Ako s tým pracovať (TY & AI):**
    - **TY:** Primárne **čítaš** toto pole pre inšpiráciu a nové nápady. Ak ťa niektorý návrh AI zaujme, môžeš naň reagovať:
        - Pridaním nového komentára do Task Comments s inštrukciou pre AI, aby vykonala navrhnutú akciu.
        - Úpravou poľa AI Action / Process, ak sa rozhodneš, že navrhnutá pomoc je dôležitejšia ako pôvodná akcia.
        - Vytvorením nových Subtasks (for user) alebo Subtasks (for AI), ak návrh predstavuje nový krok v pláne.
        - Zohľadnením nápadov pri ďalšom manuálnom postupe.
        - **Nepíšeš** sem priamo (pole generuje AI).
    - **AI:** **Zapisuje** do tohto poľa. Po prvotnej analýze úlohy AI vygeneruje zoznam 5-10 konkrétnych, akčných nápadov relevantných pre danú úlohu. AI sa zameriava na činnosti, ktoré môže vykonať *ona sama*, aby ti uľahčila prácu.
- **Ako vyplniť (AI):** AI vloží zoznam (číslovaný) 10 stručných, jasných a akčných návrhov, pod sebou (po každom bode je nový riadok, tak aby to fungovalo aj v CSV, nie /n). Každý návrh by mal ideálne začínať slovesom z pohľadu AI.
    - *Príklady (pre úlohu "Napísať blog post o Pomodoro technike"):*
        1. Vyhľadať 5 najnovších štúdií o efektivite Pomodoro techniky.
        2. Navrhnúť 3 alternatívne nadpisy pre blog post.
        3. Vytvoriť osnovu článku s kľúčovými sekciami.
        4. Nájsť vhodné obrázky alebo ilustrácie k téme Pomodoro.
        5. Zhrnúť hlavné princípy Pomodoro techniky do stručných bodov.
        6. Pripraviť koncept krátkeho príspevku na sociálne médiá na propagáciu blogu.
        7. Preložiť finálny text do angličtiny.
        8. Skontrolovať text na gramatické a štylistické chyby.
        9. Navrhnúť relevantné interné prelinkovania na tvojom webe.
        10. Analyzovať kľúčové slová pre SEO optimalizáciu článku.
        11. Vygenerovať script, ktorý mi pripomenie, že mám vytvoriť Pomodoro techniku
- **Možnosti výberu / Vstup (AI):** Multi-line Text (Generovaný AI ako zoznam).
- **Kľúčové Rozdiely:**
    - **AI Action / Process:** Hlavná, tebou explicitne vyžiadaná akcia AI.
    - **AI Brainstorm Ideas...:** *Dodatočné, proaktívne návrhy* AI na ďalšiu pomoc, nad rámec hlavnej akcie.
    - **Subtasks (for AI):** Interný plán AI na vykonanie *hlavnej* akcie.
    - **Subtasks (for user):** Kroky, ktoré máš urobiť *ty*.
    - **Action Required From User:** Konkrétny krok, ktorý *musíš* urobiť, aby AI mohla pokračovať alebo aby bola úloha dokončená.

---

## **Dependents**

- **Funkcia a Fungovanie (Dokumentácia):** Toto pole (v Asane reprezentované ako prepojenie "blocking", v CSV exporte typicky ako zoznam ID úloh, ktoré musia byť dokončené ako prvé) špecifikuje **úlohy, ktoré musia byť dokončené PREDTÝM, ako sa môže začať pracovať na tejto úlohe**. Definuje sekvenčný tok práce a predchádza začatiu práce na úlohe, pre ktorú nie sú splnené predpoklady. AI Agent toto pole **číta** (aby vedel, či už môže začať pracovať) a môže ho aj **zapisovať/navrhovať** (ak identifikuje logickú nadväznosť medzi úlohami).  Tá úloha ktorá je napísaná v tomto fielde, musí mať spätne vo svojom Outgoing Dependents fielde napísanú túto úlohu. Môžu sem ísť len úlohy, ktoré už sú v mojej databáze úloh. Nikdy nevymýšlaš nové (ešte neexistujúce). Sem ide iba názov úlohy, bez ID.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári:** Môžeš uviesť potenciálne závislosti v poli  `Potential Dependencies / Related Tasks`.
    - **Priamo v Asane:** Môžeš manuálne nastaviť závislosti medzi úlohami ("Mark as dependent on").
    - **Pri Triedení / Plánovaní:** Skontroluješ, či AI správne identifikovala závislosti, alebo ich nastavíš manuálne, ak je to potrebné pre správny tok práce.
- **Možnosti výberu / Vstup:**
    - **Pre Teba (Manuálne):** V Asane vyberieš úlohu a označíš ju ako závislú na inej úlohe/úlohách.
    - **Pre AI (Zápis/Návrh):** AI môže analyzovať tvoj vstup (napr. z `Potential Dependencies...` poľa alebo z popisu krokov) alebo logiku projektu a **navrhnúť** nastavenie závislosti. Môže ju aj priamo nastaviť cez API.
    - **Pre AI (Čítanie):** Predtým, ako AI zmení stav úlohy na `4 - AI Agent Pracuje`, **musí skontrolovať**, či všetky úlohy uvedené v `Dependents` sú už dokončené. Ak nie, úloha zostáva v stave `3 - Pripravená pre AI` (alebo inom čakajúcom stave).

**V skratke:** `Dependents` definujú, na čo táto úloha čaká. Je to kľúčové pre správne poradie vykonávania úloh a AI sa tým musí riadiť. Ty môžeš závislosti naznačiť vo formulári alebo ich nastaviť manuálne, AI ich môže navrhnúť alebo automaticky nastaviť a hlavne ich musí rešpektovať pred začatím práce.

---

## **Dependents ID**

- **Funkcia a Fungovanie (Dokumentácia):** Ak je vyplnené pole/field “Dependents”, sem patria Task ID’s všetkých úloh, ktoré sú napísané v poli Dependents (musia ísť za sebou v tom istom poradí ako sú napísané v poli “Dependents”. Sem ide iba ID bez názvu úlohy.
- Dávaš sem Task ID (to je to isté čo má samotná úloha ako Task ID… neje o žiadny iný typ ID)
- Vypĺňa AI, alebo automaticky.

---

## **Outgoing Dependents**

- **Funkcia a Fungovanie (Dokumentácia):** Toto pole (v Asane reprezentované ako prepojenie "blocking", v CSV exporte typicky ako zoznam ID úloh, ktoré čakajú na túto) špecifikuje **úlohy, ktoré môžu začať až POTOM, ako je táto úloha dokončená**. Definuje, ktoré ďalšie kroky sú odblokované dokončením aktuálnej úlohy. AI Agent toto pole **číta** (aby vedel, aký dopad má dokončenie úlohy) a môže ho aj **zapisovať/navrhovať** (pri identifikácii nadväzností). Tá úloha ktorá je napísaná v tomto fielde, musí mať spätne vo svojom Dependents fielde napísanú túto úlohu. Môžu sem ísť len úlohy, ktoré už sú v mojej databáze úloh. Nikdy nevymýšlaš nové (ešte neexistujúce). Sem ide iba názov úlohy, bez ID.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári:** Môžeš uviesť potenciálne nadväzujúce úlohy v poli `Potential Dependencies / Related Tasks`.
    - **Priamo v Asane:** Môžeš manuálne nastaviť závislosti pre iné úlohy tak, že budú čakať na dokončenie tejto ("Mark [inú úlohu] as dependent on [túto úlohu]").
    - **Pri Triedení / Plánovaní:** Skontroluješ, či AI správne identifikovala nadväznosti, alebo ich nastavíš manuálne.
- **Možnosti výberu / Vstup:**
    - **Pre Teba (Manuálne):** Nastavenie závislosti inej úlohy na tejto úlohe.
    - **Pre AI (Zápis/Návrh):** Podobne ako pri `Dependents`, AI môže analyzovať kontext a navrhnúť alebo nastaviť, ktoré iné úlohy by mali čakať na dokončenie tejto.
    - **Pre AI (Čítanie):** Keď AI dokončí úlohu a zmení jej stav na `6 - Hotovo`, môže automaticky **skontrolovať `Dependents`** a prípadne zmeniť stav týchto nadväzujúcich úloh (napr. z `Čaká na závislosť` na `Pripravená pre AI` alebo `Nová`), čím sa spustí ďalší krok workflow.

**V skratke:** Outgoing`Dependents` ukazujú, čo všetko je odblokované dokončením tejto úlohy. Pre AI je to dôležitá informácia na automatické posúvanie workflow ďalej. Ty ich môžeš naznačiť alebo nastaviť manuálne, AI ich môže identifikovať a hlavne využiť pri dokončení úlohy na spustenie ďalších krokov.

---

## **Outgoing Dependents ID**

- **Funkcia a Fungovanie (Dokumentácia):** Ak je vyplnené pole/field “Outgoing Dependents”, sem patria Task ID’s všetkých úloh, ktoré sú napísané v poli Outgoing Dependents (musia ísť za sebou v tom istom poradí ako sú napísané v poli “Outgoing Dependents”. Sem ide iba ID bez názvu úlohy.
- Dávaš sem Task ID (to je to isté čo má samotná úloha ako Task ID… neje o žiadny iný typ ID)
- Vypĺňa AI, alebo automaticky.

---

## **`Tags`**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole umožňujúce priradiť k úlohe viacero **flexibilných, textových štítkov (tagov)**. Slúžia na **doplnkovú kategorizáciu a kontextualizáciu** naprieč projektami a portfóliami, najmä pre témy, nástroje, stavy, kontexty alebo špecifické kľúčové slová, ktoré nie sú pokryté štruktúrovanými Custom Fields. AI Agent ich môže **čítať** pre získanie dodatočného kontextu a hlavne ich bude **navrhovať a pridávať** počas procesu kategorizácie.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári:** Nezadávasť priamo (nie je štandardnou súčasťou formulárov).
    - **Pri Triedení:** Skontroluješ tagy navrhnuté AI. Môžeš pridať alebo odobrať tagy manuálne pre lepšiu organizáciu alebo špecifický kontext, ktorý AI nezachytila (napr. `#Priorita:RýchlyVýsledok`, `#Vplyv:Nabíjajúce`). Používaj **konzistentne** tagy z našej definovanej databázy.
- **Možnosti výberu / Vstup:**   **Multi-Select Dropdown**. Výber alebo vytvorenie textových štítkov. Odporúča sa používať preddefinovanú štruktúru s prefixmi (napr. `#Typ:Kreatíva`, `#Téma:Somatika`, `#Nástroj:ChatGPT`, `#Kontext:Mobil`). AI bude navrhovať tagy z tohto zoznamu.

Všetky tagy: 

"

**A. Typ Práce / Aktivity (Čo robím?) - ROZŠÍRENÁ DATABÁZA**

#Typ:Kreatíva

**1. Kreatíva & Tvorba** 
*   `#Typ:Kreatíva/Brainstorming` 
*   `#Typ:Kreatíva/Brainstorming/Individuálny`
*   `#Typ:Kreatíva/Brainstorming/Tímový`
*   `#Typ:Kreatíva/Brainstorming/MindMapping`
*   `#Typ:Kreatíva/Konceptualizácia` 
*   `#Typ:Kreatíva/Konceptualizácia/VíziaProjektu`
*   `#Typ:Kreatíva/Konceptualizácia/DefinovanieProblému`
*   `#Typ:Kreatíva/Konceptualizácia/NávrhRiešenia`
*   `#Typ:Kreatíva/Písanie` 
*   `#Typ:Kreatíva/Písanie/Copywriting`  (Reklamné, Predajné)
*   `#Typ:Kreatíva/Písanie/ContentWriting`  (Blogy, Články, Web)
*   `#Typ:Kreatíva/Písanie/CreativeWriting`  (Príbehy, Poézia)
*   `#Typ:Kreatíva/Písanie/Script`  (Video, Podcast, Workshop, Divadlo)
*   `#Typ:Kreatíva/Písanie/SocMediaPríspevok` 
*   `#Typ:Kreatíva/Písanie/EmailNewsletter` 
*   `#Typ:Kreatíva/Písanie/Technické`  (Dokumentácia, Návody, API Docs)
*   `#Typ:Kreatíva/Písanie/Akademické`  (Výskumné práce, Abstrakty)
*   `#Typ:Kreatíva/Písanie/Kniha`  (Písanie, Editácia)
*   `#Typ:Kreatíva/Písanie/Žurnalistika` (Písanie denníka, Reflexie)
*   `#Typ:Kreatíva/Písanie/Preklad` 
*   `#Typ:Kreatíva/Písanie/KorektúraEditácia`
*   `#Typ:Kreatíva/Písanie/GrantováŽiadosť` 
*   `#Typ:Kreatíva/Písanie/TvorbaPonuky` 
*   `#Typ:Kreatíva/Dizajn` 
*   `#Typ:Kreatíva/Dizajn/Grafický`  (Logá, Posty, Brožúry, Bannery)
*   `#Typ:Kreatíva/Dizajn/Web`  (Layout, Vizuál webu)
*   `#Typ:Kreatíva/Dizajn/UI-UX`  (Návrh rozhrania, User flow)
*   `#Typ:Kreatíva/Dizajn/Prezentácia`  (Slidy, Vizualizácie)
*   `#Typ:Kreatíva/Dizajn/Šablóny`  (Dokumenty, SocMedia, Emaily)
*   `#Typ:Kreatíva/Dizajn/Infografika` 
*   `#Typ:Kreatíva/Dizajn/Ilustrácia` 
*   `#Typ:Kreatíva/Dizajn/Animácia` 
*   `#Typ:Kreatíva/Dizajn/3DModelovanie` 
*   `#Typ:Kreatíva/Dizajn/ExperienceDesign`  (Návrh zážitku - event, kurz)
*   `#Typ:Kreatíva/TvorbaObsahu` 
*   `#Typ:Kreatíva/TvorbaObsahu/VideoNatáčanie` 
*   `#Typ:Kreatíva/TvorbaObsahu/VideoStrih` 
*   `#Typ:Kreatíva/TvorbaObsahu/VideoPostprodukcia`  (Farby, Efekty)
*   `#Typ:Kreatíva/TvorbaObsahu/AudioNahrávanie` 
*   `#Typ:Kreatíva/TvorbaObsahu/AudioEditácia` 
*   `#Typ:Kreatíva/TvorbaObsahu/AudioMixMastering` 
*   `#Typ:Kreatíva/TvorbaObsahu/Fotografovanie` 
*   `#Typ:Kreatíva/TvorbaObsahu/FotoEditácia` 
*   `#Typ:Kreatíva/TvorbaObsahu/PodcastProdukcia` 
*   `#Typ:Kreatíva/TvorbaObsahu/Livestreaming` 
*   `#Typ:Kreatíva/Hudba` 
*   `#Typ:Kreatíva/Hudba/MixovanieDJ` 
*   `#Typ:Kreatíva/Hudba/PrípravaSetuDJ` 
*   `#Typ:Kreatíva/Hudba/ProdukciaBeatmaking` 
*   `#Typ:Kreatíva/Hudba/Kompozícia`
*   `#Typ:Kreatíva/Hudba/Aranžovanie`
*   `#Typ:Kreatíva/Hudba/SoundDesign`
*   `#Typ:Kreatíva/Umenie` 
*   `#Typ:Kreatíva/Umenie/PerformancePríprava` 
*   `#Typ:Kreatíva/Umenie/PerformanceRealizácia` 
*   `#Typ:Kreatíva/Umenie/Choreografia` 
*   `#Typ:Kreatíva/Umenie/MaľbaKresba` 
*   `#Typ:Kreatíva/Umenie/SochaObjekt`
*   `#Typ:Kreatíva/Umenie/Inštalácia` 
*   `#Typ:Kreatíva/Umenie/DigitálneUmenie` 
*   `#Typ:Kreatíva/Vývoj` 
*   `#Typ:Kreatíva/Vývoj/Frontend`
*   `#Typ:Kreatíva/Vývoj/Backend`
*   `#Typ:Kreatíva/Vývoj/Fullstack`
*   `#Typ:Kreatíva/Vývoj/MobilnáApp` 
*   `#Typ:Kreatíva/Vývoj/WebApp` 
*   `#Typ:Kreatíva/Vývoj/NoCode-LowCode`  (Bubble, Webflow)
*   `#Typ:Kreatíva/Vývoj/SkriptovanieAutomatizácia` 
*   `#Typ:Kreatíva/Vývoj/DatabázaNávrh` 
*   `#Typ:Kreatíva/Vývoj/APIDizajnIntegrácia` 
*   `#Typ:Kreatíva/Vývoj/Debugging` 
*   `#Typ:Kreatíva/Vývoj/CodeReview` 
*   `#Typ:Kreatíva/HraDizajn` 
*   `#Typ:Kreatíva/HraDizajn/Koncept`
*   `#Typ:Kreatíva/HraDizajn/Mechaniky`
*   `#Typ:Kreatíva/HraDizajn/LevelDizajn`
*   `#Typ:Kreatíva/HraDizajn/Narativ`
*   `#Typ:Kreatíva/HraDizajn/Playtesting`
*   `#Typ:Kreatíva/ProduktDizajn`  (Návrh fyzického alebo digitálneho produktu)
*   `#Typ:Kreatíva/KurikulumDizajn`  (Návrh osnovy kurzu/workshopu)

#Typ:Operatíva

**2. Operatíva & Vykonávanie** ⚙️
*   `#Typ:Operatíva/VykonávaniePostupu` ▶️
*   `#Typ:Operatíva/RutinnáÚdržba` 🔄 (Pravidelná kontrola, aktualizácia)
*   `#Typ:Operatíva/PrípravaMateriálov` 🛠️ (Tlač, kopírovanie, kompletizácia)
*   `#Typ:Operatíva/PrípravaPriestoru` 🧹 (Upratanie, nachystanie na event/session)
*   `#Typ:Operatíva/NastavenieTechniky` 🔩 (PC, audio, video, software)
*   `#Typ:Operatíva/PublikovanieObsahu` 🚀 (Nahratie na web, soc. médiá)
*   `#Typ:Operatíva/AktualizáciaDát` 🆙 (Web, CRM, zoznamy)
*   `#Typ:Operatíva/ImplementáciaSystému` 🏗️ (Zavedenie krokov podľa plánu)
*   `#Typ:Operatíva/TestovanieFunkčnosti` 🧪 (Preklikanie webu, appky)
*   `#Typ:Operatíva/SpracovanieDátManual` 🔢 (Prepisovanie, vkladanie)
*   `#Typ:Operatíva/SpracovanieObjednávky` 📦
*   `#Typ:Operatíva/ZadávaniePríkazovAI` 🤖 (Vkladanie promptov, kontrola výstupov AI)
*   `#Typ:Operatíva/Moderovanie` 🛡️ (Správa komentárov, fóra)
*   `#Typ:Operatíva/Transkripcia` 📝 (Prepis audia/videa)

#Typ:Admin

**3. Administratíva & Organizácia** 📋
*   `#Typ:Admin/ByrokraciaÚrady` 🏛️
*   `#Typ:Admin/FakturáciaVystavovanie` 📤
*   `#Typ:Admin/FakturáciaPrijímanie` 📥
*   `#Typ:Admin/PlatbyOdosielanie` 💸
*   `#Typ:Admin/PlatbyPrijímanieKontrola` 💰
*   `#Typ:Admin/BudgetingPlánovanie` 🧾
*   `#Typ:Admin/BudgetingSledovanie` 👀
*   `#Typ:Admin/PlánovanieČasové` 🗓️ (Gantt, Míľniky)
*   `#Typ:Admin/PlánovanieZdrojov` 🧑‍💻 (Ľudia, miestnosti, vybavenie)
*   `#Typ:Admin/OrganizáciaSúborov` 🗂️ (PC, Cloud)
*   `#Typ:Admin/OrganizáciaEmailov` 📧 (Triedenie, štítky, filtre)
*   `#Typ:Admin/OrganizáciaAsana` ✨ (Triedenie úloh, údržba štruktúry)
*   `#Typ:Admin/ReportingTvorba` 📊
*   `#Typ:Admin/ReportingAnalýza` 📈
*   `#Typ:Admin/EvidenciaZáznamov` 📝 (Klienti, účastníci, majetok)
*   `#Typ:Admin/ArchiváciaDigitálna` 🗄️
*   `#Typ:Admin/ArchiváciaFyzická` 📦
*   `#Typ:Admin/ObjednávanieNákup` 🛒 (Proces od výberu po objednanie)
*   `#Typ:Admin/LogistikaPlánovanie` 🚚 (Trasy, harmonogramy)
*   `#Typ:Admin/LogistikaKoordinácia` 📞 (Dohadovanie s dopravcami, skladmi)
*   `#Typ:Admin/PrávneZáležitosti` ⚖️ (Revízia zmlúv, GDPR, licencie)
*   `#Typ:Admin/HR` 🧑‍💼 (Nábor, zmluvy - ak relevantné)
*   `#Typ:Admin/SprávaProjektu` 🏗️ (Celková koordinácia, status reporty)

#Typ:Komunikácia

**4. Komunikácia & Interakcia** 💬
*   `#Typ:Komunikácia/EmailPísanie`
*   `#Typ:Komunikácia/EmailOdpovedanie`
*   `#Typ:Komunikácia/EmailTriedenie`
*   `#Typ:Komunikácia/TelefonátAktívny` 📞➡️
*   `#Typ:Komunikácia/TelefonátPasívny` 📞⬅️
*   `#Typ:Komunikácia/MeetingOnline` 💻
*   `#Typ:Komunikácia/MeetingOffline` 🧑‍🤝‍🧑
*   `#Typ:Komunikácia/MeetingPríprava` 📝
*   `#Typ:Komunikácia/MeetingZápis` ✍️
*   `#Typ:Komunikácia/OdpovedanieSocMedia` 📱
*   `#Typ:Komunikácia/OdpovedanieChat` 💬
*   `#Typ:Komunikácia/NetworkingAktívny` 🤝 (Oslovovanie)
*   `#Typ:Komunikácia/NetworkingPasívny` ✨ (Účasť na eventoch)
*   `#Typ:Komunikácia/PrezentovaniePrednášanie` 🎤
*   `#Typ:Komunikácia/FacilitáciaWorkshop` ✨
*   `#Typ:Komunikácia/FacilitáciaDiskusia` 🗣️
*   `#Typ:Komunikácia/FeedbackPoskytovanie` 👍
*   `#Typ:Komunikácia/FeedbackPrijímanie` 👂
*   `#Typ:Komunikácia/VyjednávanieRokovanie` ⚖️
*   `#Typ:Komunikácia/PodporaKlienta` 💁‍♀️ (Helpdesk, riešenie problémov)
*   `#Typ:Komunikácia/KrízováKomunikácia` 🔥
*   `#Typ:Komunikácia/InternáTímová` 👥

#Typ:Research

**5. Research & Analýza** 🔍
*   `#Typ:Research/PrieskumTrhuKvalitatívny` 🗣️ (Rozhovory, focus groups)
*   `#Typ:Research/PrieskumTrhuKvantitatívny` 📊 (Dotazníky, štatistiky)
*   `#Typ:Research/AnalýzaKonkurencie` 🧐
*   `#Typ:Research/HľadanieInfoOnline` 🌐
*   `#Typ:Research/HľadanieInfoOffline` 📚 (Knižnice, archívy)
*   `#Typ:Research/HľadanieZdrojov` 📄 (Citácie, podklady)
*   `#Typ:Research/AnalýzaDátŠtatistická` 📈
*   `#Typ:Research/AnalýzaDátKvalitatívna` 🤔 (Interpretácia textov, rozhovorov)
*   `#Typ:Research/ValidáciaHypotéz` ✔️❌
*   `#Typ:Research/ValidáciaNápadov`💡
*   `#Typ:Research/PrieskumPoužívateľovUX` 👥
*   `#Typ:Research/MonitoringMédiíSocSietí` 📡
*   `#Typ:Research/MonitoringTrendov` ✨
*   `#Typ:Research/SWOTAnalýza` 💪외부🤔⚠️
*   `#Typ:Research/ForenznáAnalýza` 🕵️ (Ak relevantné)

#Typ:Štúdium

**6. Štúdium & Rozvoj** 📚
*   `#Typ:Štúdium/KurzOnlineSledovanie` 💻▶️
*   `#Typ:Štúdium/KurzOnlineÚlohy` 💻✍️
*   `#Typ:Štúdium/KurzOfflineÚčasť` 🎓
*   `#Typ:Štúdium/KnihaČítanie` 📖
*   `#Typ:Štúdium/KnihaPoznámky` 📝
*   `#Typ:Štúdium/ČlánokBlogČítanie` 📰
*   `#Typ:Štúdium/VideoPodcastPočúvanieSledovanie` 🎧
*   `#Typ:Štúdium/PraxNácvik` 🧘 (Opakovanie, dril)
*   `#Typ:Štúdium/AplikáciaTeórie` 💡➡️🛠️
*   `#Typ:Štúdium/ReflexiaUčenia` 🤔
*   `#Typ:Štúdium/MentoringAktívny` 🧑‍🏫 (Pýtanie sa otázok)
*   `#Typ:Štúdium/SupervíziaPasívna` 👂 (Počúvanie rád)
*   `#Typ:Štúdium/PeerLearning` 🧑‍🤝‍🧑 (Učenie sa s kolegami)
*   `#Typ:Štúdium/VýučbaUčenieIných` 👨‍🏫

#Typ:FyzickáPráca

**7. Fyzická Práca & Pohyb** 💪
*   `#Typ:FyzickáPráca/ManuálnaOprava` 🔧
*   `#Typ:FyzickáPráca/ManuálnaMontáž` 🔩
*   `#Typ:FyzickáPráca/ManuálnaBalenie` 📦
*   `#Typ:FyzickáPráca/PohybCvičenie` 🤸
*   `#Typ:FyzickáPráca/PohybTanec` 💃
*   `#Typ:FyzickáPráca/PohybŠport` ⚽
*   `#Typ:FyzickáPráca/TransportAutom` 🚗
*   `#Typ:FyzickáPráca/TransportMHD` 🚌
*   `#Typ:FyzickáPráca/TransportBicykelChôdza` 🚲🚶
*   `#Typ:FyzickáPráca/NaMiesteEvent` 🎉
*   `#Typ:FyzickáPráca/NaMiesteNákup` 🛒
*   `#Typ:FyzickáPráca/NaMiesteVybavovanie` 🏃
*   `#Typ:FyzickáPráca/ÚdržbaUpratovanie` 🧹
*   `#Typ:FyzickáPráca/ÚdržbaZáhrada` 🌱 (Ak relevantné)
*   `#Typ:FyzickáPráca/PrípravaJedla` 🍳 (Ak je súčasťou práce/projektu)

**8. Ostatné Špecifické Typy** ✨
*   `#Typ:RozhodovanieStrategické` 🤔⬆️
*   `#Typ:RozhodovanieTaktické` 🤔➡️
*   `#Typ:KontrolaKvality` ✔️
*   `#Typ:Revízia` 👀
*   `#Typ:Schvaľovanie` 👍
*   `#Typ:ČakanieNaInput` ⏳📥 (Pasívne čakanie na podklady)
*   `#Typ:ČakanieNaVýsledok` ⏳📤 (Pasívne čakanie na dokončenie inej úlohy/procesu)
*   `#Typ:OddychRegenerácia` ⏸️ (Ak si plánuješ aj prestávky ako úlohy)

_____________

**B. Oblasť / Doména (Čoho sa to týka?) - ROZŠÍRENÁ DATABÁZA**

**1. Osobný Život & Rozvoj** 👤
*   `#Oblasť:OsobnýRozvoj` ✨
*   `#Oblasť:OsobnýRozvoj/CieleVízia` 🎯
*   `#Oblasť:OsobnýRozvoj/NávykyRituály` 🔄
*   `#Oblasť:OsobnýRozvoj/Sebareflexia` 🤔
*   `#Oblasť:OsobnýRozvoj/SilnéStránky` 💪 (napr. CliftonStrengths)
*   `#Oblasť:OsobnýRozvoj/HodnotyPrincípy` ❤️
*   `#Oblasť:OsobnýRozvoj/Mindset` 🧠
*   `#Oblasť:OsobnýRozvoj/MotiváciaDisciplína` 🔥
*   `#Oblasť:Zdravie` ❤️
*   `#Oblasť:Zdravie/Fyzické` 💪
*   `#Oblasť:Zdravie/Mentálne` 🧠 (Nálada, Stres, Úzkosť)
*   `#Oblasť:Zdravie/Emocionálne` 😊😢
*   `#Oblasť:Zdravie/PohybCvičenie` 🤸
*   `#Oblasť:Zdravie/StravaVýživa` 🍎
*   `#Oblasť:Zdravie/SpánokRegenerácia` 😴
*   `#Oblasť:Zdravie/LekáriTerapie` 🩺
*   `#Oblasť:Zdravie/Prevencia`🛡️
*   `#Oblasť:FinancieOsobné` 💸
*   `#Oblasť:FinancieOsobné/Budgeting` 💰
*   `#Oblasť:FinancieOsobné/PlatbyÚčty` 💳
*   `#Oblasť:FinancieOsobné/SporenieInvestície` 🌱
*   `#Oblasť:FinancieOsobné/DlhyPohľadávky` 🧾
*   `#Oblasť:FinancieOsobné/Optimalizácia` 📉
*   `#Oblasť:ByrokraciaOsobná` 🏛️ (Úrady, Doklady, Poistenie...)
*   `#Oblasť:Domácnosť` 🏠
*   `#Oblasť:Domácnosť/Nákupy` 🛒
*   `#Oblasť:Domácnosť/ÚdržbaOpravy` 🔧
*   `#Oblasť:Domácnosť/OrganizáciaUpratovanie` 🧹
*   `#Oblasť:Vzťahy` 🤝
*   `#Oblasť:Vzťahy/Rodina` 👨‍👩‍👧‍👦
*   `#Oblasť:Vzťahy/Partnerstvo` ❤️
*   `#Oblasť:Vzťahy/Priatelia` 🤗
*   `#Oblasť:Vzťahy/Komunita` 🌐
*   `#Oblasť:ProduktivitaOrganizácia` ⚙️ (Manažment času, systémov)
*   `#Oblasť:ZáľubyVoľnýČas` 🏖️

**2. Pracovný Život & Podnikanie** 📈
*   `#Oblasť:PrácaAdminVšeobecne` 📊 (Celková administrácia práce/biznisu)
*   `#Oblasť:Kariéra` 🚀
*   `#Oblasť:Kariéra/HľadaniePráce` 🔍
*   `#Oblasť:Kariéra/RozvojProfesný` 🧑‍💻
*   `#Oblasť:Kariéra/NetworkingProfesný` 🤝
*   `#Oblasť:Kariéra/CVPortfolio` 📄
*   `#Oblasť:Podnikanie` 🏢
*   `#Oblasť:Podnikanie/Stratégia` 🧭
*   `#Oblasť:Podnikanie/BiznisModel` 💰
*   `#Oblasť:Podnikanie/RozvojBiznisu` 🌱
*   `#Oblasť:Podnikanie/PrávneZáležitosti` ⚖️ (Živnosť, OZ, Zmluvy)
*   `#Oblasť:Podnikanie/Operatíva` ⚙️
*   `#Oblasť:FinancieBiznis` 💶
*   `#Oblasť:FinancieBiznis/Fakturácia` 🧾
*   `#Oblasť:FinancieBiznis/Cashflow` 🌊
*   `#Oblasť:FinancieBiznis/ÚčtovníctvoDane` 📊
*   `#Oblasť:FinancieBiznis/InvestícieBiznis` 🏦
*   `#Oblasť:FinancieBiznis/Cenotvorba` 🏷️
*   `#Oblasť:Klienti` 👥 (Všeobecne o klientoch, ak to nepatrí pod špecifickú službu)
*   `#Oblasť:Klienti/Akvizícia` 👋
*   `#Oblasť:Klienti/Manažment`  CRM
*   `#Oblasť:Klienti/Komunikácia` 💬
*   `#Oblasť:Klienti/Feedback` ⭐
*   `#Oblasť:TímSpolupracovníci` 🧑‍🤝‍🧑 (Ak máš tím alebo externých spolupracovníkov)
*   `#Oblasť:PracovnéNástroje` 🛠️ (Softvér, Hardvér špecifický pre prácu)

**3. Koučing & Terapia** 🧠
*   `#Oblasť:Koučing` 🎯
*   `#Oblasť:Koučing/Individuálny` 👤
*   `#Oblasť:Koučing/Tímový` 👥
*   `#Oblasť:Koučing/Biznis` 📈
*   `#Oblasť:Koučing/Life` ✨
*   `#Oblasť:Koučing/Somatický` 💪
*   `#Oblasť:Terapia` 🛋️
*   `#Oblasť:Terapia/Somatická` (Ak odlišuješ od koučingu)
*   `#Oblasť:Terapia/Expresívna` 🎨
*   `#Oblasť:Terapia/Skupinová` 🧑‍🤝‍🧑
*   `#Oblasť:KoučingTerapia/Klienti` (Úlohy priamo súvisiace s klientmi v tejto oblasti)
*   `#Oblasť:KoučingTerapia/Metodológia` (TGROW, TITAN, SE...)
*   `#Oblasť:KoučingTerapia/Nástroje` (Karty, Figúrky, Dotazníky...)
*   `#Oblasť:KoučingTerapia/SupervíziaMentoring`
*   `#Oblasť:KoučingTerapia/VývojSlužieb`
*   `#Oblasť:KoučingTerapia/EtikaPrax`

**4. Kurzy & Workshopy** 🎓
*   `#Oblasť:KurzyWorkshopy/Online` 💻
*   `#Oblasť:KurzyWorkshopy/Offline` 🏢
*   `#Oblasť:KurzyWorkshopy/ObsahTvorba` ✍️
*   `#Oblasť:KurzyWorkshopy/MetodikaDizajn` 🎓
*   `#Oblasť:KurzyWorkshopy/PlatformaTechnológia` 🛠️
*   `#Oblasť:KurzyWorkshopy/ÚčastníciSpráva` 👥
*   `#Oblasť:KurzyWorkshopy/MarketingPredaj` 📢
*   `#Oblasť:KurzyWorkshopy/LogistikaAdmin` 🧾
*   `#Oblasť:KurzyWorkshopy/DJTréning` 🎧 (Špecifický typ kurzu)
*   `#Oblasť:KurzyWorkshopy/Firemné` 🏢 (Špecifický typ kurzu)

**5. DJing** 🎧
*   `#Oblasť:DJing/GigsBooking` 🚀
*   `#Oblasť:DJing/HudbaKnižnica` 🎶
*   `#Oblasť:DJing/TvorbaSetov` 🎹
*   `#Oblasť:DJing/TechnikaVybavenie` 🎛️
*   `#Oblasť:DJing/MarketingBrand` 📢
*   `#Oblasť:DJing/UčenieTréningy` 🎓
*   `#Oblasť:DJing/ProjektyŠpeciálne` 💡 (Tour, Video...)
*   `#Oblasť:DJing/EcstaticDanceŠpecifické` ✨

**6. Umenie** 🎨
*   `#Oblasť:Umenie/Performance` 🎭
*   `#Oblasť:Umenie/Výtvarné` 🖌️ (Maľba, Kresba...)
*   `#Oblasť:Umenie/Digitálne` 💻
*   `#Oblasť:Umenie/Interaktívne` ✨
*   `#Oblasť:Umenie/ProjektyKonkrétne` (Napr. `#Oblasť:Umenie/LudUs`)
*   `#Oblasť:Umenie/VýskumTeória` 📚
*   `#Oblasť:Umenie/PrezentáciaVýstavy` 🖼️
*   `#Oblasť:Umenie/PredajGranty` 💰
*   `#Oblasť:Umenie/Spolupráce` 🤝

**7. AI & Technológie** 🤖
*   `#Oblasť:AI`
*   `#Oblasť:AI/LLM` (GPT, Claude...)
*   `#Oblasť:AI/GeneratívneUmenie` 🎨🤖
*   `#Oblasť:AI/Automatizácia` ⚙️🤖
*   `#Oblasť:AI/AnalýzaDát` 📊🤖
*   `#Oblasť:AI/VývojNástrojov` 🛠️🤖
*   `#Oblasť:AI/EtikaBezpečnosť` 🤔🛡️
*   `#Oblasť:Technológie/VývojSoftvéru` </>
*   `#Oblasť:Technológie/WebDevelopment` 🌐
*   `#Oblasť:Technológie/AppDevelopment` 📱
*   `#Oblasť:Technológie/NoCodeLowCode` 🧩
*   `#Oblasť:Technológie/Infraštruktúra` ☁️ (Hosting, Servery)
*   `#Oblasť:Technológie/Hardvér` 💻 (PC, Mobil, Gadgety)
*   `#Oblasť:Technológie/IntegrácieAPI` 🔗

**8. Nápady & Inovácie** 💡
*   `#Oblasť:Nápady/Validácia` 🤔
*   `#Oblasť:Nápady/Prototypovanie` 🧪
*   `#Oblasť:Nápady/BiznisModel` 💰
*   `#Oblasť:Nápady/PodľaKategórie` (Napr. `#Oblasť:Nápady/AI`, `#Oblasť:Nápady/Eventy`)

**9. Social Media & Marketing** 📢
*   `#Oblasť:Marketing/StratégiaBranding` 🎯
*   `#Oblasť:Marketing/Web` 🌐
*   `#Oblasť:Marketing/SocMedia` 📱
*   `#Oblasť:Marketing/SocMedia/Instagram`
*   `#Oblasť:Marketing/SocMedia/Facebook`
*   `#Oblasť:Marketing/SocMedia/YouTube`
*   `#Oblasť:Marketing/SocMedia/LinkedIn`
*   `#Oblasť:Marketing/Email` 📧
*   `#Oblasť:Marketing/Reklama` 💸 (PPC, Ads)
*   `#Oblasť:Marketing/Obsah` ✍️🎬 (Content Marketing)
*   `#Oblasť:Marketing/SEO` 🔍
*   `#Oblasť:Marketing/Analytika` 📊
*   `#Oblasť:Marketing/PR` ✨
*   `#Oblasť:Marketing/Affiliate` 🔗
*   `#Oblasť:Marketing/Komunita` 🤝 (Community Management)

**10. Cestovanie & Logistika** ✈️
*   `#Oblasť:Cestovanie/Plánovanie` 🗺️
*   `#Oblasť:Cestovanie/Booking` 🎫 (Letenky, Ubytko)
*   `#Oblasť:Cestovanie/LogistikaNaMieste` 📍
*   `#Oblasť:Cestovanie/Pracovné` 🧑‍💻✈️
*   `#Oblasť:Cestovanie/Osobné` 🏖️✈️
*   `#Oblasť:Cestovanie/Retreaty` ✨✈️ (Špecifické pre logistiku retreatov)

**11. Znalostná Báza & Výskum** 📚
*   `#Oblasť:Výskum/Tematický` (Napr. `#Oblasť:Výskum/Somatika`, `#Oblasť:Výskum/AI`)
*   `#Oblasť:Výskum/PKM` 🧠 (Personal Knowledge Management)
*   `#Oblasť:Výskum/OrganizáciaPoznámok` 🗄️
*   `#Oblasť:Výskum/Zdroje` 📖 (Správa kníh, článkov...)

**12. Crypto** 💰
*   `#Oblasť:Crypto/AnalýzaStratégia` 📊
*   `#Oblasť:Crypto/TradingInvestície` 💸
*   `#Oblasť:Crypto/NástrojePeňaženky` 🛠️
*   `#Oblasť:Crypto/DeFiStaking` 🌱
*   `#Oblasť:Crypto/AdminDane` 🧾
*   `#Oblasť:Crypto/Bezpečnosť` 🔒

**13. Organizovanie Eventov** 🎉
*   `#Oblasť:Eventy/Plánovanie` 🗓️
*   `#Oblasť:Eventy/Logistika` 📍
*   `#Oblasť:Eventy/MarketingPromovanie` 📢
*   `#Oblasť:Eventy/RealizáciaKoordinácia` 🚀
*   `#Oblasť:Eventy/BudgetFakturácia` 💰
*   `#Oblasť:Eventy/RetreatyŠpecifické` ✨ (Organizačné aspekty)
*   `#Oblasť:Eventy/KomunitnéŠpecifické` 🕺 (Organizačné aspekty)

________________

**C. Téma / Špecifický Predmet (Konkrétnejšie o čom?) - ROZŠÍRENÁ DATABÁZA**

**1. Somatika, Telo & Pohyb**
*   `#Téma:Somatika` (Všeobecne)
*   `#Téma:SomaticExperiencing` (Peter Levine)
*   `#Téma:SomaticCoaching`
*   `#Téma:SomaticMovement`
*   `#Téma:Embodiment`
*   `#Téma:BodyMindCentering` (BMC)
*   `#Téma:Feldenkrais`
*   `#Téma:AlexanderTechnique`
*   `#Téma:BodyMindTherapy`
*   `#Téma:Interocepcia` (Vnímanie vnútorného stavu tela)
*   `#Téma:Propriocepcia` (Vnímanie polohy tela)
*   `#Téma:PohybováInteligencia`
*   `#Téma:NeuroplasticitaPohyb`

**2. Nervový Systém & Regulácia**
*   `#Téma:NervovýSystém` (Všeobecne)
*   `#Téma:PolyvagalTheory` (Stephen Porges)
*   `#Téma:AutonómnyNS` (ANS)
*   `#Téma:Sympatikus` (Fight/Flight)
*   `#Téma:Parasympatikus` (Rest/Digest)
*   `#Téma:Parasympatikus/VentrálnyVágus` (Social Engagement)
*   `#Téma:Parasympatikus/DorzálnyVágus` (Shutdown)
*   `#Téma:ReguláciaNS` (Self-Regulation)
*   `#Téma:Koregulácia` (Co-Regulation)
*   `#Téma:VagusNerve`
*   `#Téma:VagusNerve/Cvičenia`
*   `#Téma:StresResponse`
*   `#Téma:Trauma` (Pozor, citlivá téma - používať uvážene)
*   `#Téma:Trauma/Vývojová`
*   `#Téma:Trauma/Šoková`
*   `#Téma:TraumaInformedApproach`
*   `#Téma:Grounding` (Uzemnenie)
*   `#Téma:Orienting` (Orientácia v priestore)
*   `#Téma:Titration` (Postupné spracovanie)
*   `#Téma:Pendulation` (Striedanie zdrojov a záťaže)
*   `#Téma:Resourcing` (Hľadanie zdrojov)
*   `#Téma:WindowOfTolerance` (Okno tolerancie)

**3. Tanec & Expresívne Umenia**
*   `#Téma:Tanec` (Všeobecne)
*   `#Téma:EcstaticDance`
*   `#Téma:ContactImprovisation` (CI)
*   `#Téma:AuthenticMovement`
*   `#Téma:5Rhythms` (Gabrielle Roth)
*   `#Téma:MovementMedicine`
*   `#Téma:SomaticDance`
*   `#Téma:TherapeuticDance`
*   `#Téma:Improvizácia` (Pohybová, Divadelná)
*   `#Téma:ExpresívneUmenia` (Všeobecne)
*   `#Téma:Arteterapia`
*   `#Téma:Muzikoterapia`
*   `#Téma:Dramaterapia`
*   `#Téma:PohybováTerapia` (DMT)

**4. Psychológia, Koučing & Terapia (Koncepty)**
*   `#Téma:Mindfulness`
*   `#Téma:Meditácia`
*   `#Téma:Meditácia/Vedená`
*   `#Téma:Meditácia/Pohybová`
*   `#Téma:Psychoterapia` (Všeobecne)
*   `#Téma:KoučingMetódy` (TGROW, GROW, OSKAR...)
*   `#Téma:TerapiaMetódy` (Gestalt, CBT, Psychoanalýza...)
*   `#Téma:VnútornýKritik`
*   `#Téma:Hranice`
*   `#Téma:EmocionálnaRegulácia`
*   `#Téma:Úzkosť`
*   `#Téma:Depresia`
*   `#Téma:StresManagement`
*   `#Téma:Vyhorenie` (Burnout)
*   `#Téma:Reziliencia`
*   `#Téma:SebahodnotaSebavedomie`
*   `#Téma:MotiváciaCiele`
*   `#Téma:NávykyZmenaSprávania`
*   `#Téma:Komunikácia`
*   `#Téma:Komunikácia/Nenásilná` (NVC)
*   `#Téma:Komunikácia/Asertivita`
*   `#Téma:KonfliktRiešenie`
*   `#Téma:VzťahyDynamika`
*   `#Téma:AttachmentTheory` (Teória väzby)
*   `#Téma:TranspersonálnaPsych`
*   `#Téma:Archetypy` (Jung...)
*   `#Téma:Šamanizmus` (Ak relevantné)
*   `#Téma:Psychadelika` (Ak relevantné pre výskum/štúdium)
*   `#Téma:CliftonStrengths` (Ideation, Input, Learner...)

**5. AI & Technológie (Koncepty & Nástroje)**
*   `#Téma:AI/LLM` (Veľké jazykové modely)
*   `#Téma:AI/NLP` (Spracovanie prirodzeného jazyka)
*   `#Téma:AI/ComputerVision`
*   `#Téma:AI/MachineLearning`
*   `#Téma:AI/DeepLearning`
*   `#Téma:AI/PromptEngineering`
*   `#Téma:AI/Agenti` (Autonómni)
*   `#Téma:AI/GeneratívneModely`
*   `#Téma:AI/EtikaBias`
*   `#Téma:Technológie/Cloud` (AWS, Azure, GCP)
*   `#Téma:Technológie/API`
*   `#Téma:Technológie/Databázy` (SQL, NoSQL)
*   `#Téma:Technológie/WebDevFrameworks` (React, Vue, Angular...)
*   `#Téma:Technológie/NoCodeLowCodePlatformy` (Bubble, Make, Zapier...)
*   `#Téma:Technológie/Verzionovanie` (Git, Github)
*   `#Téma:Technológie/CyberSecurity`

**6. Biznis, Marketing & Produktivita (Koncepty)**
*   `#Téma:Biznis/StratégiaPlánovanie`
*   `#Téma:Biznis/MarketingFunnel`
*   `#Téma:Biznis/PredajnéTechniky`
*   `#Téma:Biznis/ProduktManažment`
*   `#Téma:Biznis/ProjektManažment` (Agile, Scrum, Waterfall...)
*   `#Téma:Biznis/LeanStartup`
*   `#Téma:Biznis/FinančnéModelovanie`
*   `#Téma:Biznis/PrávoPrePodnikateľov`
*   `#Téma:Marketing/ContentMarketing`
*   `#Téma:Marketing/SocialMediaMarketing`
*   `#Téma:Marketing/EmailMarketing`
*   `#Téma:Marketing/SEO-SEM`
*   `#Téma:Marketing/PPC`
*   `#Téma:Marketing/Branding`
*   `#Téma:Marketing/AnalytikaMeranie`
*   `#Téma:Produktivita/GTD` (Getting Things Done)
*   `#Téma:Produktivita/Pomodoro`
*   `#Téma:Produktivita/TimeBlocking`
*   `#Téma:Produktivita/DeepWork`
*   `#Téma:Produktivita/MinimalizmusDigital`
*   `#Téma:Produktivita/PKM` (Zettelkasten, PARA...)

**7. Špecifické Projekty, Eventy, Miesta**
*   `#Téma:Projekt/NewBeginnings`
*   `#Téma:Projekt/LudUs`
*   `#Téma:Projekt/UmenieAno`
*   `#Téma:Projekt/AI_Duplikat`
*   `#Téma:Projekt/AI_Manazer`
*   `#Téma:Event/TEDx`
*   `#Téma:Event/AnimaMundi`
*   `#Téma:Event/Ecstatica`
*   `#Téma:Event/SkenarKlinika`
*   `#Téma:Event/ImpulzTanz`
*   `#Téma:Event/WorkshopPraha`
*   `#Téma:Event/Retreat2025`
*   `#Téma:Miesto/Nitra`
*   `#Téma:Miesto/Bratislava`
*   `#Téma:Miesto/Praha`
*   `#Téma:Miesto/Berlin`
*   `#Téma:Miesto/Holandsko`
*   `#Téma:Miesto/Turecko`
*   `#Téma:Miesto/KohPhangan`
*   `#Téma:Organizácia/WellBeClub`
*   `#Téma:Organizácia/SOGA`
*   `#Téma:Organizácia/FPU` (Fond na podporu umenia)
*   `#Téma:Organizácia/ErasmusPlus`

**8. Ostatné Relevantné Témy**
*   `#Téma:Gamifikácia` 🎲
*   `#Téma:Storytelling` 📖
*   `#Téma:Hry` (Stolové, RPG, Video...)
*   `#Téma:LARP`
*   `#Téma:Outdoor` 🌲
*   `#Téma:Príroda` 🌳
*   `#Téma:CestovanieTyp` (Backpacking, Luxusné...)
*   `#Téma:ExtrémneŠporty` 🏄
*   `#Téma:KomunitaBudovanie` 🤝
*   `#Téma:VzdelávanieDospelých`
*   `#Téma:Prevencia` (Šikana, Vyhorenie...)
*   `#Téma:Integrácia` (Sociálna, Kultúrna...)
*   `#Téma:OsobnéFinancie` (Investovanie, Sporenie - detailnejšie)
*   `#Téma:CryptoMeny` (Bitcoin, Ethereum...)
*   `#Téma:NFT`
*   `#Téma:Metaverse`

________________________________

**D. Nástroj / Platforma (S čím pracujem?) - ROZŠÍRENÁ DATABÁZA**

**1. Softvér na Produktivitu & Organizáciu** ⚙️
*   `#Nástroj:Asana` ✨ (Primárny nástroj)
*   `#Nástroj:GoogleWorkspace` (Gmail, Calendar, Drive, Docs, Sheets, Slides)
*   `#Nástroj:Google/Gmail` 📧
*   `#Nástroj:Google/Calendar` 📅
*   `#Nástroj:Google/Drive` ☁️
*   `#Nástroj:Google/Docs` 📄
*   `#Nástroj:Google/Sheets` 📊
*   `#Nástroj:Google/Slides` 🖥️
*   `#Nástroj:Google/Forms` 📝
*   `#Nástroj:Google/Keep` 📌
*   `#Nástroj:Microsoft365` (Outlook, Calendar, OneDrive, Word, Excel, PowerPoint)
*   `#Nástroj:Microsoft/Outlook` 📧
*   `#Nástroj:Microsoft/Word` 📄
*   `#Nástroj:Microsoft/Excel` 📊
*   `#Nástroj:Microsoft/PowerPoint` 🖥️
*   `#Nástroj:Microsoft/OneDrive` ☁️
*   `#Nástroj:Notion`  Notion Icon
*   `#Nástroj:Evernote` Elephant Icon
*   `#Nástroj:Obsidian` Obsidian Icon (Ak používaš)
*   `#Nástroj:Diarium` 📔
*   `#Nástroj:MindMeister` / `#Nástroj:Xmind` / `#Nástroj:MindNode` 🧠 (Mind mapping)
*   `#Nástroj:TogglTrack` / `#Nástroj:Clockify` ⏱️ (Sledovanie času)
*   `#Nástroj:PomodoroApp` 🍅 (Focus Timer)
*   `#Nástroj:PasswordManager` 🔑 (1Password, Bitwarden...)

**2. AI & Automatizačné Nástroje** 🤖
*   `#Nástroj:ChatGPT` (OpenAI)
*   `#Nástroj:ChatGPT/GPT4`
*   `#Nástroj:ChatGPT/GPT4o`
*   `#Nástroj:ChatGPT/CustomGPT`
*   `#Nástroj:ClaudeAI` (Anthropic)
*   `#Nástroj:GoogleGemini` (Google AI)
*   `#Nástroj:Midjourney` 🎨🤖 (Generovanie obrazu)
*   `#Nástroj:StableDiffusion` 🎨🤖 (Generovanie obrazu - lokálne/iné)
*   `#Nástroj:Dall-E` 🎨🤖 (OpenAI - generovanie obrazu)
*   `#Nástroj:Whisper` 🎙️➡️📝 (OpenAI - Transkripcia)
*   `#Nástroj:MakeCom` 🔗🤖 (Automatizácia)
*   `#Nástroj:Zapier` 🔗🤖 (Automatizácia)
*   `#Nástroj:IFTTT` 🔗🤖 (Automatizácia)
*   `#Nástroj:AppleShortcuts` 📱⚙️ (Automatizácia na Apple zariadeniach)
*   `#Nástroj:KeyboardMaestro` ⌨️⚙️ (Automatizácia na Macu)
*   `#Nástroj:WebScraper` 🕷️ (Nástroje na extrakciu dát z webu)
*   `#Nástroj:AI_WritingAssistant` (Grammarly, Jasper, [Copy.ai](http://copy.ai/)...)
*   `#Nástroj:AI_VideoGenerator` (Synthesia, HeyGen, RunwayML...)
*   `#Nástroj:AI_AudioGenerator` (ElevenLabs, Murf...)
*   `#Nástroj:AI_CodeAssistant` (GitHub Copilot, Tabnine...)

**3. Komunikačné Nástroje** 💬
*   `#Nástroj:Slack`
*   `#Nástroj:MicrosoftTeams`
*   `#Nástroj:Discord`
*   `#Nástroj:WhatsApp`
*   `#Nástroj:Telegram`
*   `#Nástroj:Signal`
*   `#Nástroj:Zoom` 📹
*   `#Nástroj:GoogleMeet` 📹
*   `#Nástroj:Whereby` 📹

**4. Marketing & Sociálne Médiá** 📢
*   `#Nástroj:Instagram` 📸
*   `#Nástroj:Facebook` 👍
*   `#Nástroj:Facebook/AdsManager` 💸
*   `#Nástroj:YouTube` ▶️
*   `#Nástroj:LinkedIn` 💼
*   `#Nástroj:TikTok` 🎵
*   `#Nástroj:Pinterest` 📌
*   `#Nástroj:X` (Twitter) 🐦
*   `#Nástroj:Mailchimp` 🐒📧 (Email Marketing)
*   `#Nástroj:Brevo` (Sendinblue) 📧
*   `#Nástroj:ActiveCampaign` 📧
*   `#Nástroj:GoogleAnalytics` 📊
*   `#Nástroj:GoogleSearchConsole` 🔍
*   `#Nástroj:SEMrush` / `#Nástroj:Ahrefs` 📈 (SEO nástroje)
*   `#Nástroj:Buffer` / `#Nástroj:Hootsuite` / `#Nástroj:Later` 🗓️ (Správa soc. médií)
*   `#Nástroj:Canva` ✨ (Grafický dizajn)
*   `#Nástroj:AdobeExpress` ✨
*   `#Nástroj:Figma` 🎨 (Dizajn UI/UX, grafika)
*   `#Nástroj:Webflow` / `#Nástroj:Wix` / `#Nástroj:Squarespace` 🌐 (Web platformy)
*   `#Nástroj:WordPress` 🌐
*   `#Nástroj:Hotjar` / `#Nástroj:Clarity` 🔥 (Analýza správania na webe)

**5. Kreatívne & Dizajnérske Nástroje** 🎨🎬
*   `#Nástroj:AdobeCreativeCloud`
*   `#Nástroj:Adobe/Photoshop`
*   `#Nástroj:Adobe/Illustrator`
*   `#Nástroj:Adobe/InDesign`
*   `#Nástroj:Adobe/PremierePro` 🎬
*   `#Nástroj:Adobe/AfterEffects` ✨
*   `#Nástroj:Adobe/Audition` 🎧
*   `#Nástroj:Adobe/Lightroom` 📸
*   `#Nástroj:FinalCutPro` 🎬 (Apple Video Editor)
*   `#Nástroj:DaVinciResolve` 🎬🎨 (Video Editor & Color Grading)
*   `#Nástroj:CapCut` 📱🎬 (Mobilný/Desktop Video Editor)
*   `#Nástroj:Procreate` 🖌️ (Kreslenie na iPade)
*   `#Nástroj:Blender` 🧊 (3D Grafika)

**6. DJing & Hudobné Nástroje** 🎧🎶
*   `#Nástroj:Rekordbox` (Pioneer DJ)
*   `#Nástroj:Serato`
*   `#Nástroj:Traktor` (Native Instruments)
*   `#Nástroj:AbletonLive` 🎹 (DAW - Digital Audio Workstation)
*   `#Nástroj:LogicPro` 🎹 (DAW)
*   `#Nástroj:FLStudio` 🎹 (DAW)
*   `#Nástroj:Beatport` 🎵🛒
*   `#Nástroj:Beatsource` 🎵🛒
*   `#Nástroj:SoundCloud` ☁️🎵
*   `#Nástroj:Spotify` 🎧🎵 (Na prieskum, nie DJing)
*   `#Nástroj:Shazam` / `#Nástroj:SoundHound` 🤔🎵 (Identifikácia hudby)
*   `#Nástroj:MixedInKey` 🔑🎵 (Analýza tóniny)

**7. Vývojárske Nástroje** </>
*   `#Nástroj:VSCode` (Editor kódu)
*   `#Nástroj:SublimeText` (Editor kódu)
*   `#Nástroj:Git` 🌿
*   `#Nástroj:GitHub` / `#Nástroj:GitLab` / `#Nástroj:Bitbucket` 存放库
*   `#Nástroj:Docker` 🐳
*   `#Nástroj:Terminal` / `#Nástroj:CommandLine` 命令行
*   `#Nástroj:Postman` 📬 (Testovanie API)
*   `#Nástroj:BrowserDevTools` 🛠️🌐 (Vývojárske nástroje prehliadača)
*   `#Nástroj:Bubble` 🧩 (No-code platforma)
*   `(Špecifické jazyky/frameworky)` `#Nástroj:Python`, `#Nástroj:JavaScript`, `#Nástroj:React`...

**8. Hardvér** 💻📱🖱️
*   `#Nástroj:MacBook`
*   `#Nástroj:iPad`
*   `#Nástroj:iPhone`
*   `#Nástroj:AppleWatch`
*   `#Nástroj:ExternýMonitor`
*   `#Nástroj:Mikrofón` 🎙️
*   `#Nástroj:Kamera` 📷 / `#Nástroj:Webkamera` 📹
*   `#Nástroj:DJController` / `#Nástroj:Mixpult` / `#Nástroj:Gramofóny` 🎛️
*   `#Nástroj:Slúchadlá` 🎧
*   `#Nástroj:Reproduktory` 🔊
*   `#Nástroj:Tlačiareň` / `#Nástroj:Skener` 🖨️
*   `#Nástroj:HardDiskExterný` 💾

**9. Platformy & Ekosystémy** ☁️
*   `#Platforma:Apple` 
*   `#Platforma:Google`
*   `#Platforma:Microsoft`
*   `#Platforma:AWS`
*   `#Platforma:Vercel` / `#Platforma:Netlify` (Deployment)

**10. Ostatné Špecifické** ✨
*   `#Nástroj:Kalendár` 📅 (Všeobecne, ak nezáleží na platforme)
*   `#Nástroj:TabuľkovýProcesor` 📊 (Excel, Sheets, Numbers)
*   `#Nástroj:TextovýEditor` 📄 (Word, Docs, Pages)
*   `#Nástroj:PrezentačnýNástroj` 🖥️ (PowerPoint, Slides, Keynote)
*   `#Nástroj:PísacíStroj`  typewriter (Metafora pre čisté písanie bez rozptyľovania)
*   `#Nástroj:PapierPero` 📝✍️

______________

**E. Stav / Fáza - ROZŠÍRENÁ DATABÁZA**

**1. Počiatočné Fázy & Príprava**
*   `#Stav:Nápad` 💡 (Úplne nový, nespracovaný nápad)
*   `#Stav:Inbox` 📥 (Čaká na prvotné triedenie a spracovanie)
*   `#Stav:NaValidáciu` 🤔❓ (Potreba overiť životaschopnosť, dopyt)
*   `#Stav:Prieskum` 🔍 (Aktívne prebieha zisťovanie informácií)
*   `#Stav:Plánovanie` 📝 (Tvorba plánu, osnovy, harmonogramu)
*   `#Stav:Konceptualizácia` 🤔✍️ (Detailné rozpracovanie myšlienky)
*   `#Stav:PrípravaZdrojov` 🛠️📄 (Zhromažďovanie materiálov, dát, nástrojov)
*   `#Stav:ČakáNaSchválenie` 👍❓ (Potreba potvrdenia od niekoho iného / od teba)

**2. Fázy Realizácie & Tvorby**
*   `#Stav:TvorbaVerzia1` ✍️1️⃣ (Pracuje sa na prvom drafte / verzii)
*   `#Stav:TvorbaObsahu` ✍️🎬 (Aktívna tvorba textu, videa, grafiky...)
*   `#Stav:VývojKódovanie` </>🛠️ (Aktívne programovanie, nastavovanie)
*   `#Stav:Implementácia` 🏗️⚙️ (Zavádzanie do praxe, nasadzovanie)
*   `#Stav:RealizáciaEventu` 🎉🚀 (Práve prebieha event / príprava na mieste)
*   `#Stav:Nahrávanie` 🎙️🎥 (Proces nahrávania audia / videa)
*   `#Stav:EditáciaPostprodukcia` ✂️✨ (Strih, úprava, vylepšovanie)
*   `#Stav:Prebieha` ▶️ (Všeobecný tag pre úlohu v procese)

**3. Fázy Kontroly & Spätnej Väzby**
*   `#Stav:NaRevíziu` 👀 (Pripravené na kontrolu tebou alebo niekým iným)
*   `#Stav:ČakáNaFeedback` 🤔💬 (Odoslané na pripomienkovanie)
*   `#Stav:SpracovanieFeedbacku` 📝👂 (Zapracovávanie pripomienok)
*   `#Stav:Testovanie` 🧪 (Overovanie funkčnosti, kvality)
*   `#Stav:KontrolaKvality` ✔️ (Finálne overenie pred dokončením)

**4. Blokovanie & Čakanie**
*   `#Stav:Blokované` 🚧 (Nedá sa pokračovať kvôli externej prekážke)
*   `#Stav:Blokované/ChýbaInfo` ❓
*   `#Stav:Blokované/Závislosť` 🔗 (Čaká na inú úlohu)
*   `#Stav:Blokované/TechnickýProblém` 🐞
*   `#Stav:ČakáNaOsobu` 👤⏳ (@ČakáNa:Meno - tag je tu vhodnejší)
*   `#Stav:ČakáNaAI` 🤖⏳ (Ak AI dlho pracuje alebo je problém)
*   `#Stav:Pozastavené` ⏸️ (Vedome dočasne zastavené)

**5. Finálne Fázy & Uzavretie**
*   `#Stav:NaPublikovanie` 🚀❓ (Pripravené na zverejnenie)
*   `#Stav:NaOdovzdanie` 📤 (Pripravené na odoslanie klientovi/partnerovi)
*   `#Stav:NaFakturáciu` 💶❓ (Práca dokončená, treba vystaviť faktúru)
*   `#Stav:HotovoČakáArchiváciu` ✅➡️🗄️ (Dokončené, ale ešte nie je upratané/archivované)
*   `#Stav:Hotovo` ✅ (Menej potrebné ako tag, lepšie použiť Asana status alebo Custom Field)
*   `#Stav:Zrušené` ❌
*   `#Stav:Zaparkované` 🅿️ (Odložené na neurčito)

**6. Špecifické AI Workflow Stavy (Ak chceš duplikovať/doplniť Custom Field)**
*   `#Stav:AI/Pripravená` 🤖👍
*   `#Stav:AI/Pracuje` 🤖⚙️
*   `#Stav:AI/VyžadujeAkciu` 🤖✋
*   `#Stav:AI/GenerujeKroky` 🤖📝
*   `#Stav:AI/Chyba` 🤖🔥

__________________

**F. Kontext / Miesto (Kde to môžem robiť?) - ROZŠÍRENÁ DATABÁZA**

**1. Podľa Zariadenia / Nástroja** 💻📱
*   `#Kontext:PC` 🖥️ (Vyžaduje počítač - Mac/Windows)
*   `#Kontext:PC/StabilnýInternet` 🌐 (Vyžaduje kvalitné pripojenie)
*   `#Kontext:PC/ŠpecifickýSoftvér` 💾 (Vyžaduje konkrétnu aplikáciu nainštalovanú na PC)
*   `#Kontext:Mobil` 📱 (Dá sa urobiť na smartfóne)
*   `#Kontext:Mobil/iOS` 
*   `#Kontext:Mobil/Android`  Android Icon
*   `#Kontext:Tablet` (iPad) 📝 (Špecificky pre úlohy optimalizované pre tablet)
*   `#Kontext:Hodinky` ⌚ (Ak máš úlohy pre smart hodinky)
*   `#Kontext:PapierPero` 📝✍️ (Vyžaduje alebo je vhodné robiť na papieri)
*   `#Kontext:BezZariadenia`🧘 (Napr. premýšľanie, meditácia, pohyb)

**2. Podľa Lokality / Prostredia** 🏠🌳🏢
*   `#Kontext:Domov` 🏠
*   `#Kontext:Domov/Pracovňa` 🧑‍💻 (Vyžaduje tiché pracovné miesto doma)
*   `#Kontext:Domov/Kuchyňa` 🍳 (Ak súvisí s varením/prípravou)
*   `#Kontext:Domov/OddychováZóna`🛋️ (Relaxačné aktivity)
*   `#Kontext:Kancelária` 🏢 (Ak máš externú kanceláriu/coworking)
*   `#Kontext:Vonku` 🌳
*   `#Kontext:Vonku/Príroda` 🌲🏞️
*   `#Kontext:Vonku/Mesto` 🏙️
*   `#Kontext:Vonku/Kaviareň` ☕
*   `#Kontext:NaCestách` 🚗🚆✈️ (Úlohy vhodné robiť počas presunov)
*   `#Kontext:NaCestách/Offline` 📵 (Nevyžaduje internet)
*   `#Kontext:VerejnéMiesto` 🏛️ (Knižnica, úrad...)
*   `#Kontext:ŠpecifickéMiesto` 📍
*   `#Kontext:Miesto/Nitra`
*   `#Kontext:Miesto/Bratislava`
*   `#Kontext:Miesto/Praha`
*   `#Kontext:Miesto/Berlin`
*   `#Kontext:Miesto/WellBeClub`
*   `#Kontext:Miesto/Telocvičňa`
*   `#Kontext:Miesto/Ateliér`
*   ...(Ďalšie relevantné konkrétne miesta)

**3. Podľa Mentálneho / Energetického Stavu** 🧠⚡
*   `#Kontext:HlbokáPráca` 🧠 (Vyžaduje plné sústredenie, bez vyrušovania)
*   `#Kontext:NízkaEnergia` 🥱 (Jednoduché, rutinné úlohy)
*   `#Kontext:VysokáEnergia` 🔥 (Náročné, kreatívne, dôležité úlohy)
*   `#Kontext:KreatívnaNálada` 🎨💡
*   `#Kontext:AnalytickáNálada` 📊📈
*   `#Kontext:SociálnaNálada` 🗣️🤝 (Vhodné na komunikáciu, networking)
*   `#Kontext:PoČastiach` 🧩 (Úloha sa dá robiť v krátkych intervaloch)
*   `#Kontext:KrátkaPrestávka` ☕ (Úloha vhodná na vyplnenie krátkej pauzy)

**4. Podľa Času / Trvania** ⏱️ (Alternatíva/Doplnok ku Custom Field)
*   `#Kontext:Rýchlovka` ⚡ (< 15 min)
*   `#Kontext:KrátkaÚloha` (< 1 hod)
*   `#Kontext:StrednáÚloha` (1-4 hod)
*   `#Kontext:DlháÚloha` (4+ hod)
*   `#Kontext:PočasDňa` ☀️
*   `#Kontext:Večer` 🌙
*   `#Kontext:Víkend` 🏖️

**5. Podľa Dostupnosti Iných Faktorov** 🔗
*   `#Kontext:VyžadujeInternet` 🌐
*   `#Kontext:OfflineMožné` 📵
*   `#Kontext:VyžadujeTicho` 🤫
*   `#Kontext:HlukNevadí` 🎶
*   `#Kontext:VyžadujeSpoluprácu` 🧑‍🤝‍🧑 (Nedá sa urobiť samostatne v danom momente)
*   `#Kontext:VyžadujeMateriály` 📄🛠️ (Potreba fyzických podkladov, nástrojov)

_______________________

**G. Spolupráca / Osoba (S kým / Pre koho?) - ROZŠÍRENÁ DATABÁZA**

**1. Stav Spolupráce / Čakanie** ⏳👤
*   `#ČakáNa:MenoPriezvisko` / `#ČakáNa:Prezývka` (Napr. `#ČakáNa:MaťoG`, `#ČakáNa:ZuzkaK`) - **Kľúčový tag pre sledovanie závislostí!**
*   `#ČakáNa:Klient` (Všeobecne, ak nemáš tag pre konkrétneho klienta)
*   `#ČakáNa:Partner` (Obchodný partner, spolupracujúca organizácia)
*   `#ČakáNa:Dodávateľ`
*   `#ČakáNa:Schválenie` 👍❓ (Čaká na formálne potvrdenie od kohokoľvek)
*   `#ČakáNa:Feedback` 🤔💬 (Čaká na pripomienky)
*   `#ČakáNa:Informácie` ❓ℹ️ (Čaká na dodanie potrebných dát)
*   `#ČakáNa:AI` 🤖⏳ (Ak sleduješ, kedy AI pracuje alebo ak sa zasekla)

**2. Typ Spolupráce / Úloha Osoby** 🤝🧑‍💻
*   `#Spolupráca:MenoPriezvisko` / `#Spolupráca:Prezývka` (Označuje, že na úlohe spolupracuješ s touto osobou)
*   `#Spolupráca:TímováÚloha` 🧑‍🤝‍🧑 (Vyžaduje prácu viacerých ľudí)
*   `#Spolupráca:Externista` 🧑‍🔧 (Práca s freelancerom, externým dodávateľom)
*   `#Spolupráca:Partnerstvo` 🤝🏢 (Úloha v rámci formálneho partnerstva)
*   `#Delegované:MenoPriezvisko` / `#Delegované:Prezývka` (Ak by si delegoval úlohy iným ľuďom)
*   `#Delegované:AI` 🤖➡️ (Označuje úlohu, ktorú má primárne vykonať AI Agent - môže byť alternatíva ku Custom Fieldu)
*   `#NaKontrolu:MenoPriezvisko` / `#NaKontrolu:Prezývka` (Úloha, ktorú má skontrolovať konkrétna osoba)
*   `#KonzultáciaPotrebná:MenoPriezvisko` / `#KonzultáciaPotrebná:Prezývka` 🤔💬 (Pred pokračovaním sa potrebuješ poradiť)

**3. Cieľová Osoba / Skupina** 🎯👥
*   `#Pre:Klienta` (Úloha, ktorej výsledok je priamo pre klienta)
*   `#Pre:Klienta/MenoPriezvisko` / `#Pre:Klienta/Firma` (Špecifikácia klienta)
*   `#Pre:ÚčastníkovKurzu` 🎓👥
*   `#Pre:Komunitu` 🌐🤝
*   `#Pre:Partnera` 🤝🏢
*   `#Pre:Tím` 🧑‍🤝‍🧑 (Ak máš interný tím)
*   `#Pre:Verejnosť`📢 (Výstup určený pre širokú verejnosť)
*   `#Pre:Mňa`👤 (Úloha primárne pre tvoj osobný rozvoj, systém...)

**4. Špecifické Mená / Entity (Príklady)**
*   `#Osoba:MaťoGrafik`
*   `#Osoba:FredoErasmus`
*   `#Osoba:JanaRegulova`
*   `#Osoba:ZuzkaSpolupraca`
*   `#Osoba:BenPeniaze`
*   `#Osoba:SilviaKluce`
*   `#Osoba:AnjaBinance`
*   `#Osoba:TristanDJ`
*   `#Organizácia:SkenarTerapia`
*   `#Organizácia:WellBeClub`
*   `#Organizácia:AMAEN`
*   `#Organizácia:FPU`
*   `#Organizácia:SOGA`
*   ...(Doplň si konkrétne mená a organizácie, s ktorými často interaguješ)

__________________________

**H. Časový Horizont / Priorita - ROZŠÍRENÁ DATABÁZA**

**1. Priorita & Dôležitosť (Subjektívne / Doplnkové)**
*   `#Priorita:Najvyššia` 🔥 (Absolútne musí byť urobené ako prvé)
*   `#Priorita:KľúčováÚloha` ⭐ (Významný dopad na projekt/cieľ)
*   `#Priorita:RýchlyVýsledok`⚡ (Malá úloha s rýchlym a viditeľným efektom)
*   `#Priorita:BlokujeIných` 🔗👤 (Dokončenie tejto úlohy odblokuje prácu iných)
*   `#Priorita:PrípravaNaEvent` 🎉 (Súvisí s blížiacim sa eventom)
*   `#Priorita:PrevenciaProblému` 🛡️ (Dôležité urobiť, aby sa predišlo problémom neskôr)
*   `#Priorita:NízkaAleNutná` ✅ (Nie dôležité, ale musí sa urobiť)

**2. Časový Rámec / Deadline (Flexibilnejšie označenie)**
*   `#Čas:Dnes` ☀️ (Chcem/Musím to urobiť dnes)
*   `#Čas:TentoTýždeň` 🗓️ (Cieľ na aktuálny týždeň)
*   `#Čas:BudúciTýždeň` ➡️🗓️
*   `#Čas:TentoMesiac` 🌕
*   `#Čas:BudúciMesiac` ➡️🌕
*   `#Čas:TentoKvartál` Q
*   `#Čas:TentoRok` 📅
*   `#Čas:DeadlinePevný` ❗📅 (Zdôraznenie pevného termínu)
*   `#Čas:DeadlineFlexibilný` ~📅 (Orientačný termín)
*   `#Čas:BezDeadlinu` ♾️ (Úloha bez konkrétneho termínu)
*   `#Čas:Priebežne` 🔄 (Úloha, ktorá sa robí priebežne, nemá koniec)
*   `#Čas:Sezónne` 🌱☀️🍂❄️ (Viazané na ročné obdobie)

**3. Odhad Trvania (Alternatíva ku Custom Field pre rýchle označenie)**
*   `#ČasTrvanie:Mikro` (< 5 min) ⚡
*   `#ČasTrvanie:Krátke` (5-30 min) ⏱️
*   `#ČasTrvanie:Stredné` (30 min - 2 hod) ⏳
*   `#ČasTrvanie:Dlhé` (2-8 hod) 🕰️
*   `#ČasTrvanie:VeľmiDlhé` (8+ hod / Viac dní) 🗓️

**4. Frekvencia / Opakovanie (Ak nepoužívaš opakujúce sa úlohy Asany)**
*   `#Frekvencia:Denne`
*   `#Frekvencia:Týždenne`
*   `#Frekvencia:DvaTýždne`
*   `#Frekvencia:Mesačne`
*   `#Frekvencia:Kvartálne`
*   `#Frekvencia:Ročne`
*   `#Frekvencia:Nepravidelne`

**5. Fáza Dňa (Pre plánovanie podľa energie)**
*   `#FázaDňa:Ráno` 🌅 (Vhodné robiť ráno)
*   `#FázaDňa:Doobeda` ☀️
*   `#FázaDňa:Poobede` 🌇
*   `#FázaDňa:Večer` 🌙
*   `#FázaDňa:Noc` 🌃 (Ak pracuješ v noci)

______________________

**I. Zdroj Úlohy (Odkiaľ?) - ROZŠÍRENÁ DATABÁZA** 📥

**1. Komunikácia (Externá / Interná)** 💬
*   `#Zdroj:Email` 📧
*   `#Zdroj:Email/KonkrétnaOsoba` (Môžeš doplniť meno, ak je dôležité)
*   `#Zdroj:Email/Klient`
*   `#Zdroj:Email/Partner`
*   `#Zdroj:Email/NewsletterInšpirácia`
*   `#Zdroj:Meeting` 🧑‍🤝‍🧑
*   `#Zdroj:Meeting/Zápis` (Vzniklo zo zápisu zo stretnutia)
*   `#Zdroj:Meeting/KonkrétnyEvent` (Napr. `#Zdroj:Meeting/TýždennýReview`)
*   `#Zdroj:Telefonát` 📞
*   `#Zdroj:ChatSpráva` 💬 (Slack, WhatsApp, Messenger...)
*   `#Zdroj:SociálneMédiá` 📱 (Komentár, správa, inšpirácia)
*   `#Zdroj:OsobnýRozhovor` 🗣️

**2. Vlastné Nápady & Plánovanie** 🤔💡
*   `#Zdroj:VlastnýNápad`💡 ( spontánna myšlienka)
*   `#Zdroj:Brainstorming` 🧠 (Výsledok cieleného brainstormingu)
*   `#Zdroj:Reflexia` 🤔✍️ (Vyplynulo zo sebareflexie, denníka)
*   `#Zdroj:TýždennýReview` 🗓️✔️ (Úloha vznikla počas týždenného plánovania/revízie)
*   `#Zdroj:StrategickéPlánovanie` 🧭 (Vyplynulo z dlhodobého plánovania)
*   `#Zdroj:CieľProjektu` 🎯 (Priamo nadväzuje na definovaný cieľ projektu/portfólia)
*   `#Zdroj:RutinaNávyk` 🔄 (Pravidelná úloha definovaná systémom/návykom)

**3. Požiadavky & Externé Vstupy** 📩
*   `#Zdroj:PožiadavkaKlienta` 👥 (Priama požiadavka od klienta)
*   `#Zdroj:PožiadavkaPartnera` 🤝
*   `#Zdroj:PožiadavkaSpolupracovníka` 🧑‍💻
*   `#Zdroj:Feedback` ⭐👂 (Vzniklo na základe spätnej väzby)
*   `#Zdroj:Formulár` 📝 (Úloha vytvorená cez Asana formulár)
*   `#Zdroj:VerejnáVýzva` 📢 (Open Call, grantová výzva)
*   `#Zdroj:LegislatívaZmena` ⚖️ (Nutnosť reagovať na zmenu predpisov)

**4. Inšpirácia & Spotreba Obsahu** 📚🎧
*   `#Zdroj:Kniha` 📖
*   `#Zdroj:ČlánokBlog` 📰
*   `#Zdroj:Podcast` 🎧
*   `#Zdroj:VideoPrednáška` 🎬
*   `#Zdroj:KurzWorkshop` 🎓 (Úloha z kurzu, na ktorom si bol)
*   `#Zdroj:KonferenciaEvent` 🎉 (Inšpirácia alebo úloha z eventu)
*   `#Zdroj:KonkurenciaInšpirácia` 👀

**5. Systémové & Automatizované Zdroje** ⚙️🤖
*   `#Zdroj:AsanaRule` ✨ (Úloha vytvorená Asana pravidlom)
*   `#Zdroj:ZapierMake` 🔗 (Úloha vytvorená cez externú automatizáciu)
*   `#Zdroj:AI_AgentNávrh` 🤖💡 (Úloha navrhnutá tvojím AI agentom)
*   `#Zdroj:SystémováNotifikácia` 🔔 (Napr. pripomienka expirácie, potreba aktualizácie)
*   `#Zdroj:Template` 📄 (Úloha vznikla z preddefinovanej šablóny)

**6. Ostatné / Špecifické**
*   `#Zdroj:NáhodnýObjav` ✨ serendipity
*   `#Zdroj:ProblémChyba` 🔥🐞 (Úloha vznikla ako reakcia na problém)
*   `#Zdroj:PredchádzajúcaÚloha` 🔗 (Nadväzuje priamo na dokončenú úlohu)
*   `#Zdroj:DelegovanéOdoMňa` 👤➡️ (Ak sleduješ, čo si delegoval iným)

__________

**J. Finančný Aspekt (Peniaze?) - ROZŠÍRENÁ DATABÁZA v2** 💰

**1. Typ Finančnej Transakcie / Aktivity**
*   `#Fin:Príjem` 🟢📈 (Všeobecne)
*   `#Fin:Príjem/PriamyPredaj` 🛒
*   `#Fin:Príjem/FakturáciaKlient` 🧾➡️
*   `#Fin:Príjem/PrijatáPlatba` ✅💰
*   `#Fin:Príjem/Affiliate` 🔗💰
*   `#Fin:Príjem/GrantDotácia` 🏛️💰
*   `#Fin:Príjem/Pasívny` 🏖️💰
*   `#Fin:Príjem/DividendyÚroky` 🌱💰
*   `#Fin:Výdavok` 🔴📉 (Všeobecne)
*   `#Fin:Výdavok/NákupTovarSlužba` 🛒🧑‍🔧🔴
*   `#Fin:Výdavok/SoftwarePredplatné` 💻🔄🔴
*   `#Fin:Výdavok/Hardvér` 🖥️🔴
*   `#Fin:Výdavok/ReklamaMarketing` 📢🔴
*   `#Fin:Výdavok/Cestovné` ✈️🔴
*   `#Fin:Výdavok/Prevádzkové` 🏢💡🔴 (Nájem, Energie...)
*   `#Fin:Výdavok/MzdyOdmeny` 🧑‍🤝‍🧑🔴
*   `#Fin:Výdavok/PoplatkyBankové` 🏦🔴
*   `#Fin:Výdavok/DaneOdvody` 📊🔴
*   `#Fin:Výdavok/VráteniePeniazí` ↩️🔴
*   `#Fin:Investícia` 🌱🏦 (Všeobecne)
*   `#Fin:Investícia/DoSebe` 🎓🌱
*   `#Fin:Investícia/DoBiznisu` 🚀🌱
*   `#Fin:Investícia/Finančná` 💎📈 (Crypto, Akcie...)
*   `#Fin:PresunPeniazí` ↔️💰 (Medzi účtami, vklad...)

**2. Odhadovaná Veľkosť Finančného Dopadu (Hrubý Odhad)**
*   `#FinVeľkosť:Mikro` (< 50 €)
*   `#FinVeľkosť:Malá` (50 - 250 €)
*   `#FinVeľkosť:Stredná` (250 - 1000 €)
*   `#FinVeľkosť:Veľká` (1000 - 5000 €)
*   `#FinVeľkosť:XL` (> 5000 €)
*   `#FinVeľkosť:Variabilná` ❓ (Suma nie je pevná alebo známa)

**3. Časový Horizont Realizácie / Návratnosti (Odhad)**
*   `#FinČas:Okamžite` ⚡ (Platba kartou, okamžitý príjem)
*   `#FinČas:Krátkodobý` (< 1 mesiac) 🗓️ (Napr. splatnosť faktúry 14 dní)
*   `#FinČas:Strednodobý` (1 - 6 mesiacov) ⏳
*   `#FinČas:Dlhodobý` (6+ mesiacov) 🕰️
*   `#FinČas:Pravidelný` 🔄 (Mesačné predplatné, pravidelný príjem)
*   `#FinČas:Neurčitý` ❓ (Nevie sa presne, kedy platba prebehne/investícia sa vráti)

**4. Status Platby / Fakturácie (Ak relevantné)**
*   `#FinStatus:ČakáNaPlatbu` ⏳🧾 (Faktúra vystavená, čaká sa na úhradu)
*   `#FinStatus:Zaplatené` ✅💰
*   `#FinStatus:PoTermíne` ❗⏳
*   `#FinStatus:NaFakturáciu` 📝➡️🧾 (Práca hotová, treba vystaviť faktúru)
*   `#FinStatus:NaZaplatenie` 💳➡️ (Čaká na odoslanie platby z tvojej strany)

**5. Ostatné Finančné Aspekty**
*   `#Fin:Budgeting` 📝💰
*   `#Fin:CashflowRelevantné` 🌊💰 (Úloha má významný vplyv na cashflow)
*   `#Fin:DaňovoRelevantné` 📊🏛️ (Treba zohľadniť pri daniach)
*   `#Fin:VyžadujeSchválenie` 👍❓💰 (Výdavok/investícia potrebuje schválenie)

_____________

**K. Metodológia / Prístup (Ako?) - ROZŠÍRENÁ DATABÁZA** 🧭

**1. Projektový Manažment & Workflow** 🏗️🌊
*   `#Metóda:Agile` 🔄
*   `#Metóda:Agile/Scrum` (Sprinty, Daily...)
*   `#Metóda:Agile/Kanban` (Vizuálny tok, WIP limity)
*   `#Metóda:Waterfall`  sequential flow icon (Tradičný sekvenčný prístup)
*   `#Metóda:Lean` 🌱 (Minimalizácia plytvania, MVP)
*   `#Metóda:GTD` (Getting Things Done - D. Allen) 📥✔️ (Inbox, Spracovanie, Organizácia...)
*   `#Metóda:Zettelkasten` 🗄️ (Metóda prepojených poznámok)
*   `#Metóda:PARA` (Projects, Areas, Resources, Archives - Tiago Forte) 🗂️
*   `#Metóda:EisenhowerMatrix` ❗➕ (Prioritizácia Urgentné/Dôležité)
*   `#Metóda:OKR` (Objectives and Key Results) 🎯

**2. Kreatívne & Dizajnové Prístupy** 🎨💡
*   `#Metóda:DesignThinking` 🤔💭 empathetic design icon (Empatia, Definícia, Ideácia, Prototyp, Test)
*   `#Metóda:DoubleDiamond` 💎 (Discover, Define, Develop, Deliver)
*   `#Metóda:BrainstormingTechniky` 💡 (Napr. Brainwriting, Reverse Brainstorming...)
*   `#Metóda:Prototypovanie` 🧪
*   `#Metóda:Prototypovanie/LowFidelity` (Papier, Wireframes)
*   `#Metóda:Prototypovanie/HighFidelity` (Interaktívne mockupy)
*   `#Metóda:UserCenteredDesign` 👥 (Dizajn zameraný na používateľa)
*   `#Metóda:Storytelling` 📖 (Využitie príbehu v komunikácii, dizajne)
*   `#Metóda:GamifikáciaPrístup` 🎲 (Aplikácia herných prvkov)
*   `#Metóda:ImprovizáciaPrístup` ✨ (Využitie improvizačných techník)

**3. Terapeutické & Koučovacie Prístupy** 🧠❤️
*   `#Metóda:Koučing/GROW` (Goal, Reality, Options, Will)
*   `#Metóda:Koučing/TGROW` (Topic, Goal, Reality, Options, Will)
*   `#Metóda:Koučing/OSKAR` (Outcome, Scaling, Know-how, Affirm, Review)
*   `#Metóda:Koučing/SolutionFocused` ✨ (Zameraný na riešenia)
*   `#Metóda:Koučing/Systemický` 🕸️
*   `#Metóda:Terapia/SomaticExperiencingPrístup` (Práca s telesnými pocitmi)
*   `#Metóda:Terapia/GestaltPrístup` (Tu a teraz, uvedomenie)
*   `#Metóda:Terapia/MindfulnessBased` (MBSR, MBCT) 🧘
*   `#Metóda:Terapia/ExpresívneTerapiePrístup` 🎨🎭🎵💃
*   `#Metóda:Terapia/InternalFamilySystems` (IFS - Práca s časťami) 👨‍👩‍👧‍👦
*   `#Metóda:Terapia/AttachmentBased` ❤️ (Zameraný na vzťahovú väzbu)
*   `#Metóda:Terapia/TraumaInformedCare` (Prístup zohľadňujúci traumu)

**4. Výskumné & Analytické Metódy** 🔍📊
*   `#Metóda:Výskum/Kvalitatívny` 🗣️ (Rozhovory, Pozorovanie, Prípadové štúdie)
*   `#Metóda:Výskum/Kvantitatívny` 🔢 (Dotazníky, Experimenty, Štatistika)
*   `#Metóda:Výskum/Zmiešaný` 🗣️➕🔢
*   `#Metóda:Výskum/DeskResearch` 📚💻 (Sekundárny výskum)
*   `#Metóda:Analýza/SWOT` 💪외부🤔⚠️
*   `#Metóda:Analýza/PESTEL` (Politické, Ekonomické, Sociálne...)
*   `#Metóda:Analýza/Konkurenčná` 🧐
*   `#Metóda:Analýza/Obsahová` 📝 (Analýza textov, komunikácie)
*   `#Metóda:Analýza/Štatistická` 📈

**5. Spôsob Práce & Realizácie** 🏃💨
*   `#Metóda:Prístup/Experimentálny` 🧪 (Skúšanie, testovanie hypotéz)
*   `#Metóda:Prístup/Iteratívny` 🔄 (Postupné vylepšovanie v cykloch)
*   `#Metóda:Prístup/Intuitívny` ✨ (Nasledovanie intuície, pocitu)
*   `#Metóda:Prístup/Štruktúrovaný` 🧱 (Jasne definované kroky, postup)
*   `#Metóda:Prístup/Kolaboratívny` 🧑‍🤝‍🧑 (Spoločná práca s ostatnými)
*   `#Metóda:Prístup/Samostatný` 👤
*   `#Metóda:Prístup/HĺbkováPráca` 🧠 (Sústredená práca bez vyrušovania)
*   `#Metóda:Prístup/Multitasking` 🤹 (Neodporúča sa, ale ak je nutné)
*   `#Metóda:Prístup/Batching` 🧺 (Zoskupovanie podobných úloh)
*   `#Metóda:Prístup/Timeboxing` ⏳ (Vyhradenie pevného času na úlohu)

**6. AI Špecifické Prístupy** 🤖🧭
*   `#Metóda:AI/PromptChaining` 🔗 (Výstup jednej AI ide do ďalšej)
*   `#Metóda:AI/FewShotLearning` (Poskytnutie pár príkladov AI)
*   `#Metóda:AI/ZeroShotLearning` (Žiadne príklady pre AI)
*   `#Metóda:AI/FineTuning` ⚙️🤖 (Trénovanie modelu na vlastných dátach)
*   `#Metóda:AI/RAG` (Retrieval-Augmented Generation) 📚➡️🤖 (AI používa externú bázu znalostí)
*   `#Metóda:AI/HumanInTheLoop` 👤✔️🤖 (Kombinácia AI a ľudskej kontroly/úpravy)

____________________

**L. Energetický / Emocionálny Vplyv (Pocit?) - ROZŠÍRENÁ DATABÁZA** ❤️‍🔥 / 🥶

**1. Energetický Vplyv (Ako ma to ovplyvňuje fyzicky/mentálne?)** ⚡🔋
*   `#Vplyv:Energia/Nabíjajúce` 🔥 (Cítim sa po tom plný energie, motivovaný)
*   `#Vplyv:Energia/Vyčerpávajúce` 🥶 (Cítim sa unavený, vyšťavený)
*   `#Vplyv:Energia/Neutrálne` 😐 (Nemá výrazný vplyv na energiu)
*   `#Vplyv:Energia/FlowState` ✨🌊 (Úplné ponorenie, strata pojmu o čase)
*   `#Vplyv:Energia/Rozptyľujúce` 🤯 (Ťažko sa sústrediť, veľa prerušení)
*   `#Vplyv:Energia/Stimulujúce` ✨💡 (Podnecuje myslenie, kreativitu)
*   `#Vplyv:Energia/Upokojujúce` 🧘‍♀️ (Pomáha mi spomaliť, uvoľniť sa)
*   `#Vplyv:Energia/VyžadujePrípravu` ☕ (Potrebujem sa na to mentálne/fyzicky naladiť)
*   `#Vplyv:Energia/RýchlyDopamín` ⚡🎯 (Krátkodobé uspokojenie, rýchle dokončenie)
*   `#Vplyv:Energia/DlhodobéUspokojenie` 🌱😊 (Pomalší proces, ale hlbší pocit zmyslu)

**2. Emocionálny Vplyv (Aké pocity to vo mne vyvoláva?)** 😊😢😠
*   `#Vplyv:Emócie/RadosťZábava` 😄🎉 (Baví ma to, teším sa na to)
*   `#Vplyv:Emócie/FrustráciaNuda` 😩🙄 (Otravné, nezáživné, zaseknem sa)
*   `#Vplyv:Emócie/ZvedavosťZáujem` 🤔🧐 (Chcem sa o tom dozvedieť viac)
*   `#Vplyv:Emócie/ObavyÚzkosť` 😟😥 (Mám z toho stres, bojím sa výsledku)
*   `#Vplyv:Emócie/HnevPodráždenie` 😠😤
*   `#Vplyv:Emócie/HrdosťUspokojenie` 😊🏆 (Som na seba hrdý, cítim zadosťučinenie)
*   `#Vplyv:Emócie/SmútokSkleslosť` 😔
*   `#Vplyv:Emócie/InšpiráciaNadšenie` ✨🤩
*   `#Vplyv:Emócie/PocitZmysluplnosti` ❤️🙏
*   `#Vplyv:Emócie/PocitPreťaženia` 🤯🥵 (Cítim sa zahltený množstvom alebo zložitosťou)
*   `#Vplyv:Emócie/PocitKompetencie` 💪😎 (Cítim, že mi to ide, som v tom dobrý)
*   `#Vplyv:Emócie/PocitNeistoty` 🤔❓ (Neviem, či to robím správne)

**3. Vplyv na Motiváciu & Angažovanosť** 🔥📉
*   `#Vplyv:Motivácia/Prokrastinujem` 🐢 (Mám tendenciu to odkladať)
*   `#Vplyv:Motivácia/ChcemToRobiť` 🔥➡️ (Priťahuje ma to, chcem sa do toho pustiť)
*   `#Vplyv:Motivácia/ŤažkýŠtart` 🧗 (Ťažko sa mi začína, ale potom to ide)
*   `#Vplyv:Motivácia/VyžadujeDisciplínu` 💪🏋️ (Musím sa do toho vedome nútiť)
*   `#Vplyv:Motivácia/UdržateľnéDlhodobo` 🌱 (Dokážem pri tom vydržať)
*   `#Vplyv:Motivácia/RýchloOmrzí` 📉 (Po čase ma to prestane baviť)

**4. Vzťah k Úlohe (Celkový Postoj)** ❤️💔
*   `#Vzťah:MilujemTo` ❤️‍🔥
*   `#Vzťah:MámToRád` 😊
*   `#Vzťah:Neutrálny` 😐
*   `#Vzťah:NemámToRád` 😒
*   `#Vzťah:NeznášamTo` 💔
*   `#Vzťah:JeToVýzva`🧗 (Vnímam to ako pozitívnu výzvu)
*   `#Vzťah:JeToPovinnosť`  Pflicht icon (Robím to, lebo musím)

__________________________

---

## **Priority**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown s farebným odlíšením) definuje **celkovú dôležitosť a urgenciu** úlohy v rámci všetkých tvojich aktivít. Je to kľúčový parameter pre tvoje denné a týždenné plánovanie a zároveň riadi poradie, v akom AI spracúva úlohy pripravené vo fronte.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Voliteľné):** Môžeš nastaviť prioritu hneď pri vytváraní úlohy, ak je zrejmá.
    - **Pri Triedení (Kľúčové!):** Pre každú úlohu (ktorá nie je len drobnosť) by si mal vedome nastaviť prioritu. Úlohy v sekcii  URGENT !!! by mali mať P0. Pravidelne (napr. pri týždennom review) prehodnocuj priority úloh.
- **Možnosti výberu / Vstup:** Dropdown:
    - P0 - NOW  (Musí sa riešiť okamžite teraz hneď, blokuje ostatné) - Due Date Dnes
    - P1 - Critical  (Musí sa riešiť idéalne dnes, blokuje ostatné okrem P0 - NOW ) - Due Date Následovne 3 dni
    - P2 - High  (Vysoká dôležitosť, riešiť čo najskôr / tento týždeň) - Due Date Následovne 3 až 7 dní
    - P3 - Medium  (Štandardná dôležitosť, riešiť podľa plánu) (Môže byť predvolená) - Due Date Následovných 7 až 30 dní
    - P4 - Low  (Nízka dôležitosť, robiť, keď je čas / odložiť) - Due Date Mesiac a viac
- **Aktualizovanie**: AI automaticky aktualizuje dôležitosť podľa toho ako ďaleko je Due Date danej úlohy

---

## **Due Date**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole typu **Dátum**, ktoré označuje **finálny termín, dokedy má byť celá úloha (vrátane tvojej prípadnej práce po AI) dokončená**. Slúži na plánovanie, prioritizáciu a sledovanie termínov. AI Agent toto pole **číta** a používa ho ako kľúčový faktor pri plánovaní svojej práce a pri urgentnosti spracovania úlohy.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Voliteľné):** Zadaj dátum, ak existuje pevný alebo želaný termín dokončenia celej úlohy.
    - **Pri Triedení:** Ak si nezadal vo formulári, doplň Due Date, ak je relevantný. Buď **realistický** – zohľadni čas potrebný pre AI aj pre tvoju prácu. Pravidelne (pri týždennom review) kontroluj a upravuj Due Dates podľa aktuálnej situácie.
    - **Používaj s  Deadline Type:** Kombinuj s Custom Field  Deadline Type (Hard/Soft/None) pre lepšie rozlíšenie typu termínu.
- **Možnosti výberu / Vstup:** Dátum (prípadne aj čas, ak je to potrebné).

**Interakcia s AI:**

- AI **číta** Due Date a porovnáva ho s aktuálnym dátumom a odhadovaným časom potrebným na spracovanie.
- Spolu s poľom  Priority a  AI Processing Priority (ak ho používaš) to ovplyvňuje, ako rýchlo AI úlohu zoberie zo stavu 3 - Pripravená pre AI.
- AI môže v komentári ([SUMMARY] alebo [ACTION NEEDED]) uviesť odhadovaný čas dokončenia svojej časti práce vo vzťahu k celkovému Due Date.
- AI môže byť naprogramovaná, aby **upozornila** (napr. komentárom alebo zmenou priority), ak zistí, že pravdepodobne nestihne dokončiť svoju časť práce včas vzhľadom na Due Date a odhadovanú náročnosť.

---

## **`Start Date`**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole typu **Dátum**, ktoré označuje **plánovaný alebo najskorší možný dátum, kedy sa môže začať pracovať na úlohe**. Používa sa v kombinácii s `Due Date` na definovanie časového rozsahu úlohy, najmä pre vizualizáciu v Timeline alebo Calendar view a pre plánovanie zdrojov. AI Agent toto pole **číta**, aby vedel, či už je vhodné začať pracovať (najmä ak má úloha závislosti alebo je viazaná na externé udalosti).
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári:** Zvyčajne **nezadávaš**. Vyplň len v špecifických prípadoch, ak úloha naozaj nemôže začať skôr (napr. čaká na skončenie iného projektu, na dodanie materiálu k určitému dátumu).
    - **Pri Triedení / Plánovaní:** Môžeš doplniť Start Date, ak chceš presnejšie naplánovať časový priebeh úloh, najmä pri použití Timeline view. AI môže Start Date navrhnúť na základe dokončenia závislých úloh.
- **Možnosti výberu / Vstup:** Dátum.

**Interakcia s AI:**

- AI **číta** Start Date. Ak je Start Date v budúcnosti, AI **nezačne** pracovať na úlohe (aj keby bola v stave `3 - Pripravená pre AI`) skôr, ako tento dátum nastane.
- AI môže automaticky nastaviť Start Date pre nadväzujúce úlohy (`Dependents`) na dátum nasledujúci po `Due Date` úlohy, od ktorej závisia.
- Vo väčšine prípadov pre tvoj workflow s AI Agentom bude dôležitejší `Due Date` a `Priority`. `Start Date` použiješ skôr pre manuálne plánovanie alebo pre úlohy s pevným začiatkom.

---

## **`Deadline Type`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) bližšie špecifikuje **povahu termínu** nastaveného v poli  `Due Date`. Pomáha tebe aj AI pochopiť flexibilitu alebo kritickosť daného termínu.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Pri zadávaní alebo triedení úlohy, ak nastavuješ `Due Date`, vyber aj zodpovedajúci `Deadline Type`, aby bolo jasné, ako striktne treba termín dodržať.
- **Možnosti výberu / Vstup (Dropdown):**
    - `Hard Deadline` : Pevný, neposunuteľný termín. Jeho nedodržanie má negatívne dôsledky (napr. termín podania grantu, odovzdanie klientovi so zmluvnou pokutou). AI by mala takéto úlohy prioritizovať.
    - `Soft Deadline / Target` : Orientačný, želaný termín dokončenia. Mierne posunutie je akceptovateľné, ale ideálne ho dodržať.
    - `No Deadline / Ongoing` : Úloha nemá konkrétny konečný termín alebo ide o priebežnú aktivitu.

---

## **`Recurrence / Frequency`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (Dropdown) označuje, či a ako často sa úloha opakuje. Používa sa v prípadoch, keď nechceš alebo nemôžeš použiť natívnu funkciu opakovania úloh v Asane (napr. ak sa termín ďalšieho opakovania určuje až po dokončení). AI môže toto pole prečítať a navrhnúť vytvorenie ďalšej inštancie úlohy po jej dokončení.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Ak ide o opakujúcu sa úlohu neriadenú Asanou, vyber frekvenciu. Po dokončení úlohy manuálne vytvoríš novú alebo (v budúcnosti) požiadaš AI, aby ju vytvorila na základe tohto poľa. AI môže pri analýze názvu (napr. "Týždenný report") navrhnúť vyplnenie tohto poľa.
- **Možnosti výberu / Vstup (Dropdown):**
    - `Neopakuje sa` (Predvolené)
    - `Denne`
    - `Týždenne`
    - `Každé 2 týždne`
    - `Mesačne`
    - `Kvartálne`
    - `Polročne`
    - `Ročne`
    - `Nepravidelne / Podľa potreby`
    - `Iné (Popíš v Description/Input)`

---

## **`Created At`**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole (Timestamp), ktoré **automaticky zaznamenáva presný dátum a čas**, kedy bola úloha vytvorená v systéme. Nedá sa manuálne meniť.
- **Ako s tým pracovať (TY):** Len na čítanie. Užitočné pre sledovanie "veku" úloh, analýzu doby spracovania alebo filtrovanie úloh vytvorených v určitom období.
- **Možnosti výberu / Vstup:** Automaticky vyplnené Asanou.

---

## **`Completed At`**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole (Timestamp), ktoré **automaticky zaznamenáva presný dátum a čas**, kedy bola úloha označená ako dokončená. Nedá sa manuálne meniť (okrem opätovného otvorenia a dokončenia úlohy).
- **Ako s tým pracovať (TY):** Len na čítanie. Kľúčové pre sledovanie výkonnosti, analýzu dokončených úloh v čase, reporting.
- **Možnosti výberu / Vstup:** Automaticky vyplnené Asanou pri označení úlohy za dokončenú.

---

## **`Last Modified At`**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole (Timestamp), ktoré **automaticky zaznamenáva presný dátum a čas poslednej úpravy** úlohy (zmena názvu, popisu, custom fieldov, komentár...). Nedá sa manuálne meniť.
- **Ako s tým pracovať (TY):** Len na čítanie. Užitočné na triedenie úloh podľa poslednej aktivity, sledovanie, či sa na úlohe pracuje, alebo identifikáciu "mŕtvych" úloh. AI Agent by mal po každej svojej úprave úlohy aktualizovať toto pole.
- **Možnosti výberu / Vstup:** Automaticky vyplnené Asanou pri každej zmene úlohy.

---

## **`Task Goal`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Text) obsahuje **jasnú, stručnú a ideálne merateľnú definíciu toho, čo je požadovaným výsledkom** alebo dokončeným stavom úlohy. Je to **základné zadanie** pre AI Agenta aj pre teba. Vždy sa pýtaj: “Čo má byť výsledkom na konci?”
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Povinné):** Vždy vyplň toto pole. Zamysli sa, ako vyzerá "hotovo". Buď konkrétny. Namiesto všeobecných fráz použi akčné výsledky.
    - **Pri Triedení:** Over, či je cieľ stále relevantný a dostatočne jasný pre AI aj pre teba.
- **Možnosti výberu / Vstup:** Voľný text.
    - *Príklady:* `Vygenerovaný zoznam 10 relevantných článkov o AI v terapii s krátkymi anotáciami.`, `Funkčný prototyp webovej stránky pre nový kurz nasadený na testovacom prostredí.`, `Odoslaný email s ponukou spolupráce pre 5 vybraných firiem.`, `Prečítaná kniha X a vytvorené kľúčové poznámky v Obsidian.`

---

## **Input Data & Context**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-line Text) slúži ako **hlavný kontajner pre všetky informácie, materiály a špecifiká**, ktoré AI Agent potrebuje na spracovanie úlohy. Je to "palivo" pre AI. AI musí byť schopná parsovať informácie z tejto štruktúry.
- **Ako s tým pracovať (TY):**
    - **Vo Formulári (Povinné):** Toto pole **musíš** vyplniť čo najdetailnejšie. Ideálne **použi preddefinovanú štruktúru s otázkami/sekciami** priamo v popise poľa formulára alebo si ju skopíruj a vyplň relevantné časti.
    - **Pri Triedení:** Skontroluj, či sú vstupné dáta kompletné a aktuálne predtým, ako nastavíš stav na Pripravená pre AI.
- **Možnosti výberu / Vstup:** Voľný text, ale **dôrazne odporúčaná štruktúra:**
    - **Prečo? (Účel/Motivácia):**
    [Sem napíš hlbší zámer úlohy, jej dôležitosť]
        - Aký hlavný problém táto úloha rieši?
        - Prečo je dôležitá (pre mňa, projekt, klienta)?
        - Aký je želaný dlhodobý dopad?
    - **Cieľovka? (Publikum):**
    [Popíš, pre koho je výsledok, ich potreby, očakávania]
        - Pre koho presne je výsledok? (Popis persóny)
        - Vekový rozsah:
        - Počet (ak relevantné, napr. pri evente):
        - Záujmy / Hodnoty:
        - Úroveň znalostí / Skúsenosti (v danej oblasti):
        - Potreby / Bolesti, ktoré má výsledok riešiť:
        - Očakávania od výsledku:
        - Jazyk / Lokalita:
    - **Miesto? (Ak relevantné):**
    [Uveď konkrétne miesto alebo kontext lokality]
        - Kde sa úloha vykonáva (fyzicky/virtuálne)?
        - Má výstup súvis s konkrétnym miestom?
    - **Nástroje? (Preferované/Potrebné):**
    [Vymenuj špecifický softvér, hardvér alebo platformy]
        - Aký konkrétny softvér/hardvér má AI použiť (ak vieš)?
        - S akými nástrojmi to budem používať ja?
        - Existujú nejaké licenčné obmedzenia nástrojov?
    - **Kontext/Brief? (Ďalšie Info):**
    [Doplň akékoľvek ďalšie dôležité pozadie, špecifiká]
        - História úlohy / Predchádzajúce pokusy:
        - Širší kontext projektu / Situácia:
        - Špecifické požiadavky, ktoré sa inam nezmestili:
        - Implicitné očakávania (ktoré by AI nemusela vedieť):
    - **Kroky (Návrh pre AI)?:**
    [Ak máš predstavu o postupe, napíš kroky sem]
        - Ak mám predstavu o postupe, aké kroky by som navrhol?
        - Existuje nejaký osvedčený postup / checklist?
    - **Zdroje (Linky/Dokumenty):**
    [Vlož všetky relevantné URL, odkazy na súbory]
        - Linky na weby, články, videá:
        - Odkazy na Google Docs, Sheets, Slides, PDF...:
        - Odkazy na iné Asana úlohy / projekty:
        - Odkazy na relevantné emaily / konverzácie:
    - **Keywords (Kľúčové slová):**
    [Vymenuj 3-7 najdôležitejších pojmov]
    - **Ostatné:**
    [Čokoľvek iné relevantné]

---

## **`Desired Output Format` (from AI)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (ideálne **Multi-Select Dropdown** pre konzistenciu, s možnosťou "Iné (Popíš)") špecifikuje **formát a štruktúru**, v ktorej má AI Agent dodať finálny výsledok úlohy. Je to kľúčová inštrukcia pre AI, aby vedela, ako má svoje zistenia alebo výtvory "zabaliť".
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Povinné):** Vyber najvhodnejší formát z ponúkaných možností. Ak potrebuješ niečo špecifické, vyber "Iné" a stručne to popíš v poli  `Specific Constraints / Instructions`.
    - **Pri Triedení:** Skontroluj, či je zvolený formát stále správny a zrozumiteľný pre AI.
- **Možnosti výberu / Vstup (Multi-Select Dropdown):**
    - Free (AI zvolí aký output bude najvhodnejší)
    - Voľný text
    - `Google Doc` (Pre dlhšie texty, reporty)
    - `Google Sheet` (Pre tabuľkové dáta, zoznamy)
    - `Google Slides` (Pre návrhy prezentácií)
    - `Markdown Súbor (.md)` (Pre text s formátovaním, kód)
    - `Čistý Text Súbor (.txt)`
    - `CSV Súbor (.csv)` (Pre štruktúrované dáta)
    - `JSON Dáta` (Pre strojové spracovanie)
    - `Zoznam Liniek (v komentári/dokumente)`
    - `Email Draft (v Gmaili)` (AI pripraví koncept emailu)
    - `Asana Podúlohy` (AI vytvorí kroky ako podúlohy)
    - `Obrázok PNG`
    - `Obrázok JPG`
    - `SVG Súbor`
    - `Audio Súbor MP3`
    - `Audio Súbor WAV`
    - `Video Súbor MP4`
    - `Prezentácia PPTX`
    - `Kód Súbor (.py, .js, .html...)`
    - `Aktualizácia Custom Field(ov)` (AI priamo upraví iné polia úlohy)
    - `Žiadny Priamy Výstup (Len zmena stavu)` (Napr. pri kontrolných úlohách)
    - `Iné (Popíš v Constraints)`

---

## **`AI Action / Process (Free Text)`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field**  (typ voľný text) definuje **primárnu operáciu alebo typ spracovania**, ktorý má AI Agent vykonať na základe poskytnutých vstupov ( `Input Data & Context`) s cieľom dosiahnuť  `Task Goal (Detailed)`. Je to hlavný "prepínač", ktorý určuje, akú logiku alebo špecializovaný prompt má AI použiť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Povinné):** Vyber **jednu** akciu, ktorá najlepšie vystihuje hlavnú činnosť, ktorú od AI očakávaš.
    - **Pri Triedení:** Over, či je zvolená akcia správna a zodpovedá cieľu a vstupom.
- **Možnosti výberu / Vstup (Voľný Text):**
    - “AI”`:`AI Chooses (AI zvolí čo je najvhodnejšie spraviť, môže zvoliť viacero vecí)
    - “All” : AI Chooses (AI spraví všetko a rôznorodé úkony aby čo najviac pomohla k naplneniu a zjedodušeniu naplnenia úlohy)
    - “Categorize” : AI fill or refill (replace) all the fields and custom fields for this task with new actualized values
    - Ak napíšem čokoľvek iné, tak to čo napíšem.

---

## **`AI Action / Process (Dropdown)`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-Select Dropdown**) definuje **primárnu operáciu alebo typ spracovania**, ktorý má AI Agent vykonať na základe poskytnutých vstupov ( `Input Data & Context`) s cieľom dosiahnuť  `Task Goal (Detailed)`. Je to hlavný "prepínač", ktorý určuje, akú logiku alebo špecializovaný prompt má AI použiť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Povinné):** Vyber **jednu** akciu, ktorá najlepšie vystihuje hlavnú činnosť, ktorú od AI očakávaš.
    - **Pri Triedení:** Over, či je zvolená akcia správna a zodpovedá cieľu a vstupom.
- **Možnosti výberu / Vstup (Multi-Select Dropdown):**
    - Free`:`AI Chooses (AI zvolí čo je najvhodnejšie spraviť)
    - All : AI Chooses (AI spraví všetko a rôznorodé úkony aby čo najviac pomohla k naplneniu a zjedodušeniu naplnenia úlohy)
    - Custom : I write custom prompt (Ja napíšem custom prompt, čo od AI chcem)
    - Categorize : AI fill all the fields and custom fields for this task
    
    **Generovanie Textu & Obsahu:**
    
    - `Generate: Draft Text` (Vytvor prvý návrh textu - blog, email, popis...)
    - `Generate: Final Text` (Vytvor finálnu verziu textu)
    - `Generate: Multiple Text Options` (Vytvor N variantov textu - počet v  `Number of Variations`)
    - `Generate: Content Ideas` (Navrhni nápady na obsah - témy, nadpisy...)
    - `Generate: Content Outline / Structure` (Vytvor osnovu pre článok, kurz, workshop...)
    - `Generate: Social Media Post(s)` (Vytvor text pre soc. médiá - špecifikuj platformu v Input)
    - `Generate: Email / Newsletter Draft` (Vytvor koncept emailu)
    - `Generate: Script (Video/Podcast/...)` (Vytvor scenár)
    - `Generate: Presentation Content` (Vytvor obsah pre slidy prezentácie)
    - `Generate: Creative Writing (Story, Poem...)`
    - `Generate: Q&A / FAQ` (Vytvor otázky a odpovede k téme)
    - `Generate: Persona Description` (Vytvor popis cieľovej persóny)
    - `Generate: Product Description` (Vytvor popis produktu/služby)
    - `Generate: Ad Copy` (Vytvor text pre reklamu)
    
    **Spracovanie Textu & Dát:**
    
    - `Process: Summarize Text/Document` (Zhrň poskytnutý text/link)
    - `Process: Extract Key Information` (Vytiahni kľúčové body/dáta z textu)
    - `Process: Translate Text` (Prelož text do cieľového jazyka)
    - `Process: Proofread / Edit Text` (Skontroluj gramatiku, štylistiku)
    - `Process: Rephrase / Rewrite Text` (Preformuluj text iným štýlom/tónom)
    - `Process: Format Text (Markdown/HTML...)` (Aplikuj formátovanie)
    - `Process: Analyze Sentiment` (Urči sentiment textu - pozitívny/negatívny/neutrálny)
    - `Process: Categorize / Tag Text/Data` (Priraď kategórie alebo tagy k vstupu)
    - `Process: Convert Data Format` (Napr. JSON na CSV, text na zoznam)
    
    **Research & Analýza:**
    
    - `Research: Find Information / Sources` (Vyhľadaj info/články/štúdie k téme)
    - `Research: Competitor Analysis` (Analyzuj konkurenciu)
    - `Research: Market Analysis` (Analyzuj trh, trendy)
    - `Research: Find Contacts / Leads` (Nájdi emailové adresy, profily...)
    - `Research: Fact-Check Information` (Over fakty v texte)
    - `Analyze: Data Analysis (Basic)` (Vykonaj základnú analýzu dát - priemer, min/max...)
    - `Analyze: Identify Patterns / Trends` (Nájdi vzory v dátach/texte)
    - `Analyze: Compare Options / Products` (Porovnaj A vs. B na základe kritérií)
    
    **Plánovanie & Organizácia:**
    
    - `Plan: Create Action Steps / Subtasks` (Navrhni alebo vytvor kroky/podúlohy v Asane)
    - `Plan: Create Project Outline / Plan` (Navrhni štruktúru projektu)
    - `Plan: Create Meeting Agenda` (Navrhni program stretnutia)
    - `Organize: Categorize Asana Task` (Priraď Portfólio, Projekt, Sekciu, Tagy - *primárne pre triedenie*)
    - `Organize: Identify Dependencies` (Navrhni závislosti medzi úlohami)
    
    **Multimédiá & Kód:**
    
    - `Generate: Image Prompt` (Navrhni prompt pre generátor obrázkov)
    - `Generate: Image (via API)` (Vytvor obrázok pomocou pripojeného API - Midjourney, DALL-E...)
    - `Process: Transcribe Audio/Video` (Preveď reč na text)
    - `Generate: Code Snippet` (Vytvor krátky kód v špecifikovanom jazyku)
    - `Process: Debug Code` (Pokús sa nájsť chyby v kóde)
    - `Process: Explain Code` (Vysvetli, čo daný kód robí)
    - `Process: Convert Code Language` (Prelož kód do iného jazyka)
    
    **Interakcia & Simulácia:**
    
    - `Interact: Simulate Conversation / Role-play` (Simuluj rozhovor, interview...)
    - `Interact: Answer Questions` (Odpovedz na otázky položené v Input)
    - `Interact: Brainstorm Ideas with Me` (Použi AI ako partnera na brainstorming v komentároch)
    
    **Žiadna AI Akcia:**
    
    - `No AI Action (Manual Task / Categorization Only)` (Označenie, že AI nemá nič aktívne robiť, len prípadne zakategorizovať)

---

## **`AI Workflow Status`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown, ideálne s farebným odlíšením) sleduje **aktuálnu fázu úlohy v procese spracovania AI Agentom**. Je to **hlavný ukazovateľ** pre teba aj pre automatizačné skripty, v akom stave sa úloha nachádza a kto je "na ťahu". Zmeny tohto stavu môžu spúšťať ďalšie automatizácie.
- **Ako s tým pracovať (TY & AI):**
    - **TY:** Manuálne meníš stav, keď pripravuješ úlohu pre AI (`1 -> 3`), keď AI niečo potrebuje a ty si to dodal (`5 -> 3` alebo `5 -> 4`), alebo keď dokončíš svoju časť (`5 -> 6`). Tiež môžeš úlohu zaparkovať (`> 7`).
    - **AI:** Automaticky mení stav cez API, keď začne pracovať (`3 -> 4`), keď potrebuje tvoj vstup (`4 -> 5`), alebo keď dokončí svoju prácu (`4 -> 6` alebo `4 -> 5`).
- **Možnosti výberu / Vstup (Dropdown):**
    1. **`1 - Nová (v Inboxe)`** 
        - *Popis:* Predvolený stav pre všetky novo vytvorené úlohy (cez formulár alebo manuálne). Úloha čaká na tvoje prvotné triedenie a spracovanie (priradenie Portfólia, Projektu, Sekcie, vyplnenie kľúčových polí).
        - *Kto nastavuje:* Automaticky pri vytvorení / Ty pri manuálnom vytvorení.
        - *Ďalší krok:* Ty spracuješ úlohu.
    2. **`2 - Čaká na Info / Rozhodnutie (Ja)`** 
        - *Popis:* Ty si úlohu už videl, ale ešte nie je pripravená pre AI. Chýbajú ti nejaké informácie, potrebuješ niečo rozmyslieť, alebo AI požiadala o upresnenie a čaká na tvoju odpoveď.
        - *Kto nastavuje:* Ty (ak nemôžeš hneď pripraviť pre AI) / AI (ak potrebuje viac info po úvodnej analýze alebo položí otázku).
        - *Ďalší krok:* Ty doplníš informácie / rozhodneš / odpovieš AI.
    3. **`3 - Pripravená pre AI`** 
        - *Popis:* Ty si úlohu skontroloval, všetky potrebné vstupy (`Cieľ`, `Vstup`, `Akcia`...) sú vyplnené a úloha je pripravená na spracovanie AI Agentom. **Toto je hlavný trigger pre AI!**
        - *Kto nastavuje:* Ty (po spracovaní a overení vstupov).
        - *Ďalší krok:* Automatizácia (skript/Zapier/Make) zoberie úlohu a pošle ju AI Agentovi.
    4. **`4 - AI Agent Pracuje`** 
        - *Popis:* AI Agent úlohu prijal a aktívne na nej pracuje (analyzuje, generuje, vyhľadáva...).
        - *Kto nastavuje:* AI (cez API) / Ty manuálne (hneď po exporte/odoslaní AI).
        - *Ďalší krok:* AI pracuje; ty môžeš sledovať  `AI Agent Status Log` alebo komentáre.
    5. **`5 - Vyžaduje Moju Akciu / Dokončenie`** 
        - *Popis:* AI dokončila svoju časť, ale potrebuje tvoj manuálny zásah: kontrolu výstupu, rozhodnutie, doplnenie kreatívnej časti, finálne schválenie alebo odpoveď na otázku. Výstup AI je pripravený v `Description` alebo na linku v  `Výstup AI`. Podrobnosti sú v poslednom komentári od AI.
        - *Kto nastavuje:* AI (cez API).
        - *Ďalší krok:* Ty vykonáš potrebnú akciu.
    6. **`6 - Hotovo`** 
        - *Popis:* Úloha je kompletne dokončená (buď plne AI, alebo po tvojom finálnom zásahu).
        - *Kto nastavuje:* Ty (po dokončení svojej časti alebo kontrole AI výstupu) / AI (ak mala povolenie na autonómne dokončenie a bola si istá výsledkom).
        - *Ďalší krok:* Žiadny (úloha je uzavretá, môže byť archivovaná).
    7. **`7 - Zaparkované / Zrušené`** 
        - *Popis:* Úloha sa nebude realizovať alebo je odložená na neurčito. AI Agent by mal úlohy v tomto stave ignorovať.
        - *Kto nastavuje:* Ty.
        - *Ďalší krok:* Žiadny (úloha je mimo aktívneho workflow).

**Vizualizácia a Použitie:**

- Použi **farebné odlíšenie** pre jednotlivé stavy v Asane pre rýchlu vizuálnu orientáciu.
- Vytvor si **uložené filtre/pohľady** v Asane pre každý dôležitý stav (najmä `2`, `3`, `5`), aby si mal prehľad, čo čaká na teba, čo na AI a kde je potrebná tvoja akcia.
- **Automatizácia:** Zmeny tohto stavu sú kľúčovými triggermi pre tvoje automatizačné workflow (napr. Zmena na `3` spustí export/API volanie, zmena na `5` ti môže poslať notifikáciu).

---

## **Allow Autonomous Execution (for AI)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (Dropdown) explicitne určuje, či dáváš AI Agentovi povolenie pokúsiť sa **úlohu kompletne dokončiť sám**, alebo či má vždy nechať finálny krok alebo schválenie na tebe. Je to dôležitý bezpečnostný a kontrolný mechanizmus.
- **Ako s tým pracovať (TY):**
    - **Vo Formulári / Pri Triedení:** Zváž povahu úlohy. Ak ide o rutinnú úlohu s jasným výstupom (napr. sumarizácia, preklad, základný research), môžeš povoliť autonómnu exekúciu. Ak ide o kreatívnu prácu, strategické rozhodnutie alebo výstup pre klienta, je bezpečnejšie zvoliť "Nie" alebo "Len Pripraviť".
- **Možnosti výberu / Vstup (Dropdown):**
    - Áno (Pokús sa dokončiť): AI sa pokúsi úlohu dokončiť a nastaviť stav na 6 - Hotovo.
    - Nie (Len Pripraviť / Vyžaduje Moju Akciu) (Predvolené): AI urobí maximum práce, ale finálny krok/schválenie nechá na tebe a nastaví stav na 5 - Vyžaduje Moju Akciu.
    - Len Kategorizuj a Generuj Kroky/Plán: AI má iba vyplniť všetky fields tasku a naplánovať úlohu (vytvoriť podúlohy) a potom nastaviť stav na 5 - Vyžaduje Moju Akciu.

---

## **Number of Variations (If Applicable)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Number) špecifikuje, **koľko rôznych variantov alebo návrhov** má AI vygenerovať, ak je to relevantné pre danú AI Action / Process (napr. Generate: Multiple Text Options, Generate: Content Ideas).
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Ak chceš viacero návrhov (napr. 3 verzie nadpisu, 2 varianty emailu), zadaj sem požadované číslo (napr. 3). Ak chceš len jednu finálnu verziu (alebo ak pole nie je relevantné pre danú AI Akciu), nechaj prázdne alebo 1.
- **Možnosti výberu / Vstup:** Číslo (integer), napr. 1, 2, 3, 5...

---

## **Desired Style / Tone (for AI)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (**Multi-Select Dropdown**) definuje **požadovaný štýl, tón a celkové vyznenie** textového alebo kreatívneho výstupu AI. Pomáha AI prispôsobiť komunikáciu cieľovej skupine alebo účelu.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Vyber jeden alebo viac štýlov, ktoré najlepšie zodpovedajú požiadavkám úlohy. Ak nevyberieš, AI použije neutrálny alebo predvolený štýl.
- **Možnosti výberu / Vstup (Príklady Multi-Select Dropdown):** Formálny, Neformálny, Profesionálny, Kreatívny, Hravý, Empatický, Priamy/Stručný, Detailný/Vysvetľujúci, Presvedčivý, Technický, Inšpiratívny, Neutrálny, Ako Ja (Experimentálne).

---

## **Specific Constraints / Instructions (for AI)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-line Text) slúži ako **doplnkový kontajner pre akékoľvek špecifické pravidlá, mantinely, inštrukcie alebo negatívne obmedzenia pre AI**, ktoré nie sú pokryté inými poľami a ktoré musí AI pri práci zohľadniť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** V bodoch alebo krátkych vetách sem napíš dôležité pokyny. Buď čo najjasnejší a najkonkrétnejší.
- **Možnosti výberu / Vstup:** Voľný text.
    - *Príklady:* Max. dĺžka: 300 slov., Zdroj: Použi iba poskytnutý link [URL]., Vyvaruj sa: Odborný žargón, pasívny rod., Zahrň: Spomeň našu novú funkciu X., Formátovanie: Použi Markdown nadpisy H2 a odrážky., Cieľovka špecifiká: Zameraj sa na výhody pre malých podnikateľov.

---

## **AI Behavior on Uncertainty**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) inštruuje AI Agenta, **ako má postupovať, ak narazí na nejasnosť**, chýbajúce informácie alebo situáciu, ktorú nevie jednoznačne vyriešiť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Vyber preferované správanie. Pre kritické úlohy alebo úlohy s vysokou mierou nejednoznačnosti je vhodnejšie Pýtaj sa / Čakaj na Mňa. Pre rutinné úlohy môže byť prijateľné Rozhodni Najlepšie Sama.
- **Možnosti výberu / Vstup (Dropdown):**
    - Pýtaj sa / Čakaj na Mňa (Predvolené): AI položí otázku do komentára a zmení stav na 5 - Vyžaduje Moju Akciu.
    - Rozhodni Najlepšie Sama: AI urobí najlepší možný odhad a pokračuje v práci (riziko chyby).
    - Buď Konzervatívna: AI zvolí najbezpečnejšiu možnosť alebo vynechá problematickú časť.
    - Buď Kreatívna/Odvážna: AI môže skúsiť experimentálne alebo menej štandardné riešenie.

---

## **AI Creativity Level**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) umožňuje nastaviť **mieru kreativity alebo "odviazanosti"**, ktorú má AI použiť pri generovaní obsahu alebo riešení problému. Ovplyvňuje parameter "temperature" alebo podobné nastavenia v LLM.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Vyber úroveň podľa povahy úlohy. Pre faktické zhrnutia alebo technické úlohy zvoľ Nízku/Faktickú. Pre brainstorming alebo marketingové texty môžeš zvoliť Strednú alebo Vysokú.
- **Možnosti výberu / Vstup (Dropdown):**
    - Nízka / Faktická (Presné, konzervatívne, menej originálne)
    - Stredná (Vyvážená) (Kombinácia presnosti a kreativity - predvolené)
    - Vysoká / Experimentálna (Originálne, nečakané nápady, vyššie riziko nezmyslov)

---

## **AI Processing Priority**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) určuje **prioritu úlohy špecificky pre frontu AI Agenta**. Líši sa od celkovej priority úlohy ([‼️] Priority), aj keď môže byť od nej odvodená. Umožňuje ti ovplyvniť, ktoré úlohy má AI spracovať skôr, nezávisle od ich celkovej dôležitosti pre teba.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Zvyčajne môžeš nechať odvodiť od [‼️] Priority (napr. P0/P1 -> Vysoká, P2 -> Normálna, P3 -> Nízka). Manuálne nastav, len ak chceš, aby AI spracovala menej dôležitú úlohu skôr (napr. rýchly research pre meeting), alebo naopak, dôležitú úlohu nechala na neskôr (napr. komplexnú analýzu).
- **Možnosti výberu / Vstup (Dropdown):**
    - Vysoká (Spracuj čo najskôr)
    - Normálna (Predvolená)
    - Nízka (Keď bude čas)

---

## **AI Agent Status Log**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-line Text, ideálne nastavené ako "Append-only" cez API, ak to Asana umožňuje, inak AI pridáva na koniec) slúži na **záznam kľúčových krokov a stavov** počas spracovania úlohy AI Agentom. Je to detailnejší technický log než konverzácia v komentároch.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Len na čítanie, najmä pri riešení problémov alebo pre pochopenie, čo presne AI robila. Nemusíš ho sledovať pri každej úlohe.
- **Možnosti výberu / Vstup (AI): VOLNY TEXT** AI sem pridáva krátke, časovo označené záznamy.
    - *Príklad:*
        
        [2024-09-15 10:05:10] Task Received. Analyzing input.
        
        [2024-09-15 10:05:35] Calling OpenAI API for draft generation.
        
        [2024-09-15 10:06:15] Draft received. Formatting output.
        
        [2024-09-15 10:06:30] Output saved to Description. Status updated to 'Requires User Action'.
        

---

## **AI Output / Result Link**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ URL alebo Text) obsahuje **priamy odkaz na finálny výstup AI**, ak nie je vhodný na vloženie priamo do Description (napr. Google Doc, Sheet, obrázok, video, priečinok so súbormi).
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Kliknutím na odkaz získaš prístup k výsledku práce AI.
- **Možnosti výberu / Vstup (AI): VOLNY TEXT** AI sem vloží URL adresu finálneho výstupu uloženého na externom úložisku (napr. Google Drive, Dropbox, S3...).

---

## **Action Required From User**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Text) stručne sumarizuje, **aký konkrétny krok alebo rozhodnutie AI očakáva od teba aby si spravil na to aby AI mohlo pokračovať so svojou prácou v rámci tasku**, keď nastaví stav na 5 - Vyžaduje Moju Akciu. Je to rýchly prehľad toho, čo treba urobiť z tvojej strany aby AI mohlo pokračovať v práci.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Prečítaj si toto pole pre rýchlu orientáciu, keď filtruješ úlohy vyžadujúce tvoju akciu. Detailné inštrukcie hľadaj v poslednom komentári od AI.
- **Možnosti výberu / Vstup (AI): VOLNY TEXT** AI sem vloží krátky text.
    - *Príklady:* Skontroluj a schváľ text v Description., Vyber finálnu verziu z návrhov., Odpovedz na otázku v komentári., Doplň chýbajúce vstupné dáta., Vykonaj manuálny krok X (popis v komentári).

---

## **Related Portfolios**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-select Dropdown**) umožňuje explicitne označiť **ďalšie portfóliá** (okrem primárneho  Portfolio), s ktorými má aktuálna úloha významný kontextový súvis. Slúži na pokročilé filtrovanie a pochopenie medzioblastných presahov. AI môže toto pole navrhnúť na základe analýzy kontextu. Value ktoré dá do tohto field MUSÍ dať aj do field “Portfolio”, hneď za PRIMÁRNE portfolio. Ideálne v tomto poli chceme mať viac values, aby sme videli úlohu v kontexte / súvislostiach a vedeli ju dohladať aj v iných portfóliach s ktorými súvisí.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Vo formulári alebo pri triedení vyber jedno alebo viac ďalších portfólií, ktoré sú pre úlohu relevantné.
- **Možnosti výberu / Vstup (Multi-select Dropdown):** Zoznam všetkých tvojich 13 portfólií.

---

## **Related Projects**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-select Dropdown**) umožňuje explicitne označiť **ďalšie konkrétne projekty** (okrem primárneho Project), s ktorými úloha súvisí. Umožňuje sledovať závislosti alebo synergie medzi špecifickými iniciatívami. AI môže toto pole navrhnúť. Value ktoré dá do tohto field MUSÍ dať aj do field “Project”, hneď za PRIMÁRNY project.  Môže vyberať len z projektov, ktoré patria k portfóliam, ktoré zvolil v RELATED PORTFOLIOS field (ide to hierarchicky). Ideálne v tomto poli chceme mať viac values, aby sme videli úlohu v kontexte / súvislostiach a vedeli ju dohladať aj v iných projektoch s ktorými súvisí.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Vyber jeden alebo viac ďalších projektov, ktoré s úlohou priamo súvisia.
- **Možnosti výberu / Vstup (Multi-select Dropdown):** Zoznam **všetkých** tvojich projektov naprieč portfóliami. Môže vyberať len z projektov, ktoré patria k portfóliam, ktoré zvolil v RELATED PORTFOLIOS field (ide to hierarchicky)

---

## **Related Sections**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-select Dropdown**) umožňuje označiť **tematické sekcie** (aj z iných projektov), ktoré sú pre kontext úlohy dôležité. Pomáha pochopiť typ činnosti alebo fázu v širšom kontexte. AI môže toto pole navrhnúť. Value ktoré dá do tohto field MUSÍ dať aj do field “Sections”, hneď za PRIMÁRNY section.  Môže vyberať len zo sekcií, ktoré patria k projektom, ktoré zvolil v RELATED PROJECTS field (ide to hierarchicky). Ideálne v tomto poli chceme mať viac values, aby sme videli úlohu v kontexte / súvislostiach a vedeli ju dohladať aj v iných sekciach s ktorými súvisí.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Zadaj názvy relevantných sekcií (napr. Marketing, Vývoj Obsahu, FinancieBiznis), ktoré poskytujú dodatočný kontext.
- **Možnosti výberu / Vstup (Multi-select Dropdown):** Zoznam **všetkých tvojich typických názvov sekcií**. Môže vyberať len zo sekcií, ktoré patria k projektom, ktoré zvolil v RELATED PROJECTS field (ide to hierarchicky)

---

## **Related Tasks**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-Select Dropdown** alebo **URL**) slúži na zaznamenanie odkazov alebo ID **iných konkrétnych Asana úloh**, ktoré sú relevantné pre kontext, ale nie sú priamou závislosťou (Dependency/Dependent). Môžu to byť napr. predchádzajúce verzie, inšpiratívne úlohy, paralelné úlohy. Môžu sem ísť len úlohy, ktoré už sú v mojej databáze úloh. Nikdy nevymýšlaš nové (ešte neexistujúce). Sem ide iba názov úlohy bez ID. Do Related Tasks napíš vśetky úlohy z Dependents + Dependents ID, Outgoing Dependents + Outgoing Dependents ID, Parent Task + Parent Task ID, Subtask (in System) *+* Subtask ID (in System)*,*  `Related Tasks`  + `Related Tasks`ID.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Vlož sem linky (URL) na relevantné Asana úlohy alebo ich ID/názvy. AI môže toto pole použiť na získanie širšieho obrazu.
- **Možnosti výberu / Vstup (Multi-Select Dropdown):** Výber zo všetkých taskov, ktoré mám.

---

## **Related Tasks ID**

- **Funkcia a Fungovanie (Dokumentácia):** Ak je vyplnené pole/field “Related Tasks”, sem patria Task ID’s všetkých úloh, ktoré sú napísané v poli Related Tasks (musia ísť za sebou v tom istom poradí ako sú napísané v poli “Related Tasks”. Sem ide iba ID bez názvu úlohy.
- Dávaš sem Task ID (to je to isté čo má samotná úloha ako Task ID… neje o žiadny iný typ ID)
- Vypĺňa AI, alebo automaticky.

---

## **Related Entities**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-Select Dropdown**) slúži na vymenovanie **ďalších osôb, klientov, partnerov alebo organizácií**, ktoré s úlohou súvisia, okrem tej hlavnej uvedenej v poli  Related Entity (Person/Org).
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Vymenuj ďalšie relevantné mená alebo názvy organizácií, oddelené napr. čiarkou alebo každé na novom riadku.
- **Možnosti výberu / Vstup (Multi-select Dropdown):** Výber zo všetkých mien, entín apod. ktoré sa objavujú v mojich splnených a nesplnených taskoch.

---

## **`Target Audience`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Text) špecifikuje **konkrétnu skupinu ľudí, pre ktorú je výsledok úlohy primárne určený**. Pomáha AI (aj tebe) prispôsobiť štýl, tón, úroveň detailov a obsah výstupu potrebám a očakávaniam tejto skupiny. Líši sa od  `Related Entity`, ktorá označuje hlavnú interagujúcu osobu/organizáciu.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Ak je pre úlohu dôležité definovať cieľovú skupinu (napr. pri tvorbe obsahu, marketingových materiálov, dizajne kurzu), vyplň toto pole. Buď čo najkonkrétnejší.
    - **AI Návrh:** AI sa môže pokúsiť odvodiť cieľovú skupinu z  `Input Data & Context` alebo `Task Name` a navrhnúť vyplnenie tohto poľa.
- **Možnosti výberu / Vstup:**
    - **Text:** Voľný textový popis, napr. `Začiatočníci v AI bez technického vzdelania`, `Existujúci klienti koučingu`, `Mladí dospelí (20-30r) so záujmom o sebarozvoj`, `HR manažéri v stredných firmách`.

---

## **`Task Purpose (Why)`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Text) vysvetľuje **hlbší zámer, motiváciu alebo strategický kontext** za úlohou. Odpovedá na otázku "Prečo túto úlohu robíme?". Pomáha AI (aj tebe) pochopiť dôležitosť úlohy a jej miesto vo väčšom obraze, čo môže ovplyvniť prioritu a spôsob spracovania.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Vyplň najmä pre strategickejšie alebo menej zrejmé úlohy. Prečo je dôležité ju urobiť? Čo sa stane, ak sa neurobí? Ako prispieva k väčším cieľom?
    - **AI Návrh:** AI môže mať problém automaticky určiť hlbší účel, ale môže analyzovať prepojenie na strategické ciele (ak sú definované inde).
- **Možnosti výberu / Vstup:** Voľný text.
    - *Príklady:* `Zvýšiť engagement na Instagrame o 15%.`, `Zjednodušiť proces onboardingu nových klientov a znížiť počet otázok.`, `Splniť zákonnú požiadavku do konca mesiaca.`, `Získať nové poznatky pre zlepšenie workshopu X.`, `Posilniť vzťah s kľúčovým partnerom Y.`

---

## **Type**

(Štandardné Asana pole, nemá priamy ekvivalent v tvojich poliach) - *Použi "Milestone", ak AI identifikuje míľnik.*

- Dropdown
- apod.

---

## **`Task Type`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-Select Dropdown**) klasifikuje **dominantný typ mentálnej alebo fyzickej aktivity**, ktorú budeš musieť vykonať **ty** na dokončenie úlohy (alebo jej časti, ktorá zostala po práci AI). Pomáha ti plánovať deň podľa typu energie a preferencií.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Pri Triedení / Review:** Skontroluj návrh AI alebo vyber typ práce, ktorý od teba úloha vyžaduje. Je to kľúčové pre batchovanie podobných úloh alebo plánovanie podľa energie.
    - **AI Návrh:** AI môže navrhnúť typ práce na základe `Task Name`, `Task Goal` a `AI Action / Process`. Napríklad, ak AI akcia bola `Research`, tvoja časť môže byť `Kreatíva / Hlboká Práca` (analýza a písanie záverov). Ak AI akcia bola `Generate: Draft Text`, tvoja časť môže byť `Operatíva / Rutina` (korektúra, formátovanie).
- **Možnosti výberu / Vstup (Multi-select Dropdown):**
    - `Kreatíva / Hlboká Práca`
    - `Operatíva / Rutina`
    - `Admin / Byrokracia`
    - `Komunikácia (Volania, Maily)`
    - `Research / Analýza (Manuálna)`
    - `Štúdium / Učenie sa`
    - `Fyzická / Manuálna Práca`
    - `Rozhodovanie / Schvaľovanie`
    - `Kontrola / Revízia`
    - AI   (Ak očakávaš, že AI to zvládne na 100%)

---

## **`Estimated User Time`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) odhaduje **časový rozsah, ktorý budeš potrebovať TY** na dokončenie svojej časti úlohy (najmä v stave `5 - Vyžaduje Moju Akciu`). Pomáha pri dennom plánovaní kapacity.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Pri Triedení / Review:** Skontroluj návrh AI alebo zadaj svoj realistický odhad času. Pomôže ti to nepreplánovať si deň.
    - **AI Návrh:** AI môže odhadnúť tvoj čas na základe typu úlohy, rozsahu požadovanej akcie (z komentára) a historických dát (ak by sa systém učil).
- **Možnosti výberu / Vstup (Dropdown):**
    - `< 5 min`
    - `5-15 min`
    - `15-30 min`
    - `30-60 min`
    - `1-2 hod`
    - `2-4 hod`
    - `4+ hod`
    - `8+` hod
    - 1-3 dni
    - 3-7 dni
    - 1+ týždeň
    - 1+ mesiac

---

## **`Cognitive Load (For User)`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) hodnotí, **ako veľmi mentálne náročná** bude tvoja časť práce na úlohe. Pomáha plánovať podľa mentálnej kapacity počas dňa.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Pri Triedení / Review:** Skontroluj návrh AI alebo ohodnoť náročnosť. Naplánuj si úlohy s vysokou náročnosťou na čas, kedy máš najviac mentálnej energie.
    - **AI Návrh:** AI môže odvodiť z `Task Type (For User)` (napr. Kreatíva = Vysoká, Operatíva = Nízka) a komplexnosti zadania.
- **Možnosti výberu / Vstup (Dropdown):**
    - `Nízka` (Rutina, jednoduché rozhodnutie)
    - `Stredná` (Vyžaduje premýšľanie, ale postup je známy)
    - `Vysoká` (Nové problémy, komplexné rozhodovanie, vysoká miera sústredenia)

---

## **`Energy Level Required (For User)`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) hodnotí, **akú úroveň celkovej energie** (fyzickej aj mentálnej) si vyžaduje tvoja časť práce. Dopĺňa Kognitívnu Náročnosť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Pri Triedení / Review:** Skontroluj návrh AI alebo ohodnoť energetickú náročnosť. Plánuj si prácu tak, aby zodpovedala tvojej aktuálnej úrovni energie.
    - **AI Návrh:** AI môže odvodiť z  `Task Type (For User)` a  `Cognitive Load`.
- **Možnosti výberu / Vstup (Dropdown):**
    - `Nízka` (Môžem robiť aj unavený)
    - `Stredná` (Vyžaduje bežnú úroveň energie)
    - `Vysoká` (Vyžaduje, aby som bol oddýchnutý a plný energie)

---

## **Required Tools / Software**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-select Dropdown) špecifikuje kľúčové **softvérové aplikácie, hardvérové zariadenia alebo online platformy**, ktoré sú **nevyhnutné alebo primárne používané** na dokončenie úlohy (buď tebou alebo AI). Pomáha pri plánovaní (mám k dispozícii daný nástroj?) a dáva AI kontext o technologickom zásobníku.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Ak vieš, že úloha vyžaduje špecifický nástroj (napr. strih videa v Premiere Pro, práca s dátami v Google Sheets), vyber ho zo zoznamu alebo napíš do textového poľa.
    - **AI Návrh:** AI môže na základe Task Name, Task Goal, AI Action / Process a Input Data navrhnúť potrebné nástroje.
- **Možnosti výberu / Vstup (Multi-select Dropdown):**
    
    **A. Základné & Kancelárske:**
    
    - Web Browser (Chrome, Safari, Firefox...)
    - Email Client (Gmail, Outlook...)
    - Calendar App (Google Calendar, Outlook Cal...)
    - Text Editor (Plain) (Notepad, TextEdit, VSCode...)
    - Word Processor (Google Docs, MS Word...)
    - Spreadsheet App (Google Sheets, MS Excel...)
    - Presentation App (Google Slides, MS PowerPoint, Keynote...)
    - PDF Reader/Editor (Adobe Acrobat, Preview...)
    - Cloud Storage (Google Drive, Dropbox, OneDrive...)
    
    **B. Komunikácia & Spolupráca:**
    
    - Asana (Samotný nástroj)
    - Slack
    - Microsoft Teams
    - Discord
    - Zoom
    - Google Meet
    - WhatsApp
    - Telegram
    - Signal
    
    **C. Poznámky & PKM:**
    
    - Notion
    - Evernote
    - Obsidian
    - Diarium
    - Google Keep
    - Apple Notes
    - Mind Mapping Tool (Xmind, MindMeister...)
    
    **D. AI & Automatizácia:**
    
    - ChatGPT (Web UI)
    - Claude AI (Web UI)
    - Google Gemini (Web UI)
    - Midjourney (Discord/Web)
    - Stable Diffusion (Lokálne/Web UI)
    - Dall-E (Web UI/API)
    - Whisper (API/App)
    - Make.com
    - Zapier
    - IFTTT
    - Apple Shortcuts
    - Keyboard Maestro
    - Web Scraping Tool
    - Specific Custom GPT (Môžeš mať tagy aj pre svoje vlastné GPTs)
    
    **E. Marketing & Sociálne Médiá:**
    
    - Instagram App/Web
    - Facebook App/Web
    - Facebook Business Suite / Ads Manager
    - YouTube Studio
    - LinkedIn App/Web
    - TikTok App/Web
    - Email Marketing Platform (Mailchimp, Brevo...)
    - Google Analytics
    - Google Search Console
    - SEO Tool (SEMrush, Ahrefs...)
    - Social Media Scheduler (Buffer, Later...)
    - Canva
    - Figma
    - Website CMS (WordPress, Webflow, Wix...)
    - Heatmap/Analytics Tool (Hotjar, Clarity...)
    
    **F. Kreatíva & Dizajn:**
    
    - Adobe Photoshop
    - Adobe Illustrator
    - Adobe InDesign
    - Adobe Premiere Pro
    - Adobe After Effects
    - Adobe Audition
    - Adobe Lightroom
    - Final Cut Pro
    - DaVinci Resolve
    - CapCut
    - Procreate
    - Blender
    - (Iné špecifické grafické/video editory...)
    
    **G. DJing & Hudba:**
    
    - Rekordbox
    - Serato DJ Pro
    - Traktor Pro
    - Ableton Live
    - Logic Pro
    - FL Studio
    - Beatport/Beatsource (Web/App)
    - SoundCloud
    - Spotify (Pre prieskum)
    - Music Recognition App (Shazam...)
    - Key Analysis Software (MixedInKey...)
    - DAW (Všeobecne)
    
    **H. Vývoj & Kódovanie:**
    
    - VS Code
    - Terminal / Command Line
    - Git
    - GitHub/GitLab/Bitbucket (Web)
    - Docker Desktop
    - Postman / Insomnia (API Testing)
    - Browser Developer Tools
    - Bubble.io Editor
    - Specific IDE (PyCharm, IntelliJ...)
    - Database Client (DBeaver, TablePlus...)
    - (Specific Language Runtime/Compiler) (Python, Node.js...)
    
    **I. Hardvér (Ak je špecificky potrebný):**
    
    - MacBook
    - iPad + Apple Pencil
    - iPhone
    - Externý Monitor (Dual Screen Setup)
    - Kvalitný Mikrofón
    - Kamera (DSLR/Mirrorless)
    - Webkamera
    - DJ Controller / Mixpult / Gramofóny
    - MIDI Klávesnica
    - Grafický Tablet (Wacom...)
    - Tlačiareň / Skener
    - Externý Hard Disk
    - VR Headset (Ak relevantné)
    
    **J. Ostatné / Špecifické Platformy:**
    
    - Online Bankovníctvo
    - Účtovný Softvér
    - CRM Systém (Ak používaš iný ako Asana)
    - Platforma pre Online Kurzy (Teachable, Kajabi...)
    - Rezervačný Systém (Calendly...)
    - Slovenská Pošta / Zasielkovňa (Web/App)
    - Bazos / Inzertný Portál

---

## **`Required Hardware`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-select Dropdown) špecifikuje kľúčové **fyzické zariadenia alebo vybavenie**, ktoré sú nevyhnutné alebo špecificky potrebné na dokončenie úlohy.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Vyber/napíš hardvér, ak je jeho použitie kľúčové alebo limitujúce.
- **AI Návrh:** Môže navrhnúť na základe typu úlohy.
- **Možnosti výberu / Vstup (Multi-select Dropdown):**
    
    **Počítače a Príslušenstvo:**
    
    - `PC / Laptop (Všeobecne)`
    - `PC - Windows`
    - `MacBook (macOS)`
    - `Výkonný Počítač (High-Performance)` (Pre náročné úlohy ako video strih, 3D, AI tréning)
    - `Externý Monitor`
    - `Nastavenie s Viacerými Monitormi` (Dual/Triple Screen)
    - `Klávesnica (Externá/Špecifická)`
    - `Myš / Trackpad (Externý/Špecifický)`
    - `Grafický Tablet` (Wacom, XP-Pen...)
    - `Webkamera (Externá/Kvalitná)`
    - `Dokovacia Stanica`
    
    **Mobilné Zariadenia:**
    
    - `Smartfón (Všeobecne)`
    - `iPhone (iOS)`
    - `Android Zariadenie`
    - `Tablet (Všeobecne)`
    - `iPad`
    - `iPad + Apple Pencil`
    - `Android Tablet`
    - `Smart Hodinky` (Apple Watch, iné)
    
    **Audio Vybavenie:**
    
    - `Mikrofón (Externý/Štúdiový)`
    - `USB Mikrofón`
    - `XLR Mikrofón`
    - `Lavalier Mikrofón (Klopový)`
    - `Shotgun Mikrofón`
    - `Audio Rozhranie / Zvuková Karta (Externá)`
    - `Slúchadlá (Monitorovacie/Štúdiové)`
    - `Slúchadlá (Bežné/Na Cesty)`
    - `Reproduktory (Monitorovacie/Štúdiové)`
    - `Reproduktory (Prenosné)`
    - `Mixpult (Audio)`
    - `Rekordér (Prenosný)`
    
    **Video & Foto Vybavenie:**
    
    - `Kamera (DSLR/Mirrorless)`
    - `Videokamera`
    - `Akčná Kamera` (GoPro...)
    - `360° Kamera`
    - `Objektívy (Špecifické)`
    - `Statív (Tripod)`
    - `Gimbal / Stabilizátor`
    - `Osvetlenie (Externé Svetlá)` (Softbox, Ring light...)
    - `Zelené Plátno (Greenscreen)`
    - `Čítačka (Teleprompter)`
    
    **DJ Technika:**
    
    - `DJ Controller`
    - `DJ Mixpult`
    - `Gramofóny (Turntables)`
    - `CDJ / Media Player`
    - `DJ Slúchadlá`
    - `Laptop Stand`
    - `Efektová Jednotka (DJ FX)`
    - `Sampler / Groovebox` (Ak používaš pri DJingu)
    
    **Hudobná Produkcia:**
    
    - `MIDI Klávesnica / Controller`
    - `Drum Machine / Pad Controller`
    - `Syntetizátor (Hardvérový)`
    - `Groovebox (Hardvérový)`
    
    **Prezentácia & Workshopy:**
    
    - `Projektor`
    - `Plátno`
    - `Flipchart / Biela Tabuľa`
    - `Prezenter / Klikátko`
    - `Ozvučenie (PA Systém)`
    
    **Úložiská & Ostatné Periférie:**
    
    - `Externý Hard Disk (HDD/SSD)`
    - `USB Kľúč`
    - `SD / Pamäťová Karta`
    - `Čítačka Kariet`
    - `Tlačiareň`
    - `Skener`
    - `USB Hub`
    
    **Špecifický Hardvér:**
    
    - `VR Headset` (Oculus/Meta Quest, Vive...)
    - `AR Zariadenie` (Ak relevantné)
    - `Senzory Pohybu` (Kinect, Leap Motion...)
    - `Biofeedback Zariadenie` (HRV monitor...)
    - `3D Tlačiareň`
    - `Špecifické Meracie Prístroje`
    - `Šijací Stroj` (Ak relevantné pre umenie)
    - `Nástroje pre Manuálnu Prácu` (Vŕtačka, Pílka...)

---

## **`Required Skills`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-select Dropdown) špecifikuje kľúčové **zručnosti, schopnosti alebo oblasti expertízy**, ktoré sú potrebné na vykonanie úlohy. Pomáha identifikovať, či máš ty alebo AI potrebné predpoklady, alebo či je potrebná externá pomoc alebo ďalšie štúdium.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Pri triedení alebo plánovaní komplexnejších úloh môžeš označiť potrebné skilly. Pomôže ti to aj pri sebahodnotení alebo plánovaní rozvoja.
- **AI Návrh:** AI môže navrhnúť potrebné zručnosti na základe `Task Name`, `Task Goal`, `AI Action / Process` a požadovaných nástrojov.
- **Možnosti výberu / Vstup (Multi-select Dropdown):**
    
    **A. Komunikačné & Interpersonálne Zručnosti:**
    
    - `Skill:Písanie/Copywriting`
    - `Skill:Písanie/Kreatívne`
    - `Skill:Písanie/Technické`
    - `Skill:Písanie/Akademické`
    - `Skill:Editácia/Korektúra`
    - `Skill:Prezentovanie/VerejnýPrejav`
    - `Skill:Komunikácia/Verbálna`
    - `Skill:Komunikácia/Neverbálna`
    - `Skill:Komunikácia/Nenásilná(NVC)`
    - `Skill:Komunikácia/Asertivita`
    - `Skill:AktívnePočúvanie`
    - `Skill:Empatia`
    - `Skill:Networking/BudovanieVzťahov`
    - `Skill:Vyjednávanie/Presviedčanie`
    - `Skill:Facilitácia/Moderovanie`
    - `Skill:PoskytovanieFeedbacku`
    - `Skill:PrijímanieFeedbacku`
    - `Skill:RiešenieKonfliktov`
    - `Skill:TímováPráca/Spolupráca`
    
    **B. Kreatívne & Dizajnérske Zručnosti:**
    
    - `Skill:KreatívneMyslenie/GenerovanieNápadov`
    - `Skill:VizuálneMyslenie`
    - `Skill:GrafickýDizajn`
    - `Skill:UI/UXDizajn`
    - `Skill:WebDizajn`
    - `Skill:Fotografovanie`
    - `Skill:VideoProdukcia/Strih`
    - `Skill:AudioProdukcia/Editácia`
    - `Skill:Animácia/MotionGraphics`
    - `Skill:Ilustrácia/Kresba`
    - `Skill:Storytelling`
    - `Skill:SoundDesign`
    - `Skill:HudobnáKompozícia/Aranžovanie`
    - `Skill:DJing/Mixovanie`
    - `Skill:Performance/Herectvo`
    - `Skill:Tanec/Choreografia`
    - `Skill:Maľba/VýtvarnéTechniky`
    
    **C. Analytické & Strategické Zručnosti:**
    
    - `Skill:AnalytickéMyslenie`
    - `Skill:KritickéMyslenie`
    - `Skill:RiešenieProblémov`
    - `Skill:Rozhodovanie`
    - `Skill:StrategickéPlánovanie`
    - `Skill:ProjektovýManažment`
    - `Skill:Výskum/ZberDát`
    - `Skill:AnalýzaDát/Štatistika`
    - `Skill:InterpretáciaDát`
    - `Skill:PrieskumTrhu`
    - `Skill:FinančnáAnalýza/Modelovanie`
    
    **D. Technické & Digitálne Zručnosti:**
    
    - `Skill:PrácaSNástrojom/[NázovNástroja]` (Napr. `Skill:PrácaSNástrojom/Asana`, `Skill:PrácaSNástrojom/ChatGPT`, `Skill:PrácaSNástrojom/Ableton`) - **Veľmi užitočné!**
    - `Skill:Programovanie/[Jazyk]` (Napr. `Skill:Programovanie/Python`, `Skill:Programovanie/JavaScript`)
    - `Skill:WebDevelopment/Frontend`
    - `Skill:WebDevelopment/Backend`
    - `Skill:SprávaDatabáz`
    - `Skill:APIIntegrácie`
    - `Skill:NoCode/LowCodeVývoj`
    - `Skill:PromptEngineering`
    - `Skill:AutomatizáciaProcesov`
    - `Skill:SprávaServerov/Cloudu`
    - `Skill:CyberSecurityZáklady`
    - `Skill:PrácaSCMS` (WordPress...)
    - `Skill:SEOOptimalizácia`
    - `Skill:DigitálnyMarketing`
    - `Skill:PokročiláPrácaSTabuľkami` (Excel, Sheets)
    
    **E. Koučing, Terapia & Facilitácia Zručnosti:**
    
    - `Skill:KoučovacieKompetencie(ICF)`
    - `Skill:TerapeutickéTechniky/[Názov]` (Napr. `Skill:TerapeutickéTechniky/SE`, `Skill:TerapeutickéTechniky/Gestalt`)
    - `Skill:FacilitáciaSkupín`
    - `Skill:VedenieWorkshopu/Kurzu`
    - `Skill:PrácaSTraumou` (Vyžaduje špecializáciu)
    - `Skill:PrácaSEmóciami`
    - `Skill:PrácaSTelom/Somatika`
    - `Skill:Diagnostika/Assessment`
    - `Skill:TvorbaBezpečnéhoPriestoru`
    
    **F. Osobné & Manažérske Zručnosti:**
    
    - `Skill:TimeManagement/Organizácia`
    - `Skill:Sebadisciplína/ProkrastináciaManažment`
    - `Skill:Adaptabilita/Flexibilita`
    - `Skill:UčenieSa/RýchleUčenie`
    - `Skill:OdolnosťVočiStresu`
    - `Skill:VedenieĽudí/Leadership` (Ak relevantné)
    - `Skill:Delegovanie`
    
    **G. Jazykové Zručnosti:**
    
    - `Skill:Jazyk/Angličtina/[Úroveň]` (Napr. `Skill:Jazyk/Angličtina/C1`)
    - `Skill:Jazyk/Nemčina/[Úroveň]`
    - `Skill:Jazyk/Španielčina/[Úroveň]`
    - `(Ďalšie jazyky)`

---

## **`Estimated Cost / Budget`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Number s možnosťou nastavenia meny) zaznamenáva **predpokladané priame finančné náklady** spojené s vykonaním úlohy. Môže ísť o nákup softvéru, materiálu, platbu za externé služby, API kredity pre AI, cestovné náklady atď. Pomáha pri finančnom plánovaní a sledovaní nákladov na projekty.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári / Pri Triedení:** Ak vieš, že úloha bude niečo stáť, zadaj sem odhadovanú sumu a menu. Ak sú náklady nulové alebo zanedbateľné, nechaj prázdne alebo 0.
    - **AI Návrh:** AI môže odhadnúť náklady na základe požadovaných nástrojov alebo procesov (napr. odhad ceny za API volania OpenAI pre generovanie textu určitej dĺžky), ale toto je pokročilejšia funkcia. Skôr budeš zadávať ty.
- **Možnosti výberu / Vstup:** Číselná hodnota. V Asane môžeš nastaviť aj formát meny (napr. EUR, USD).

---

## **`Expected Impact / Success Metric`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Text) popisuje **očakávaný prínos alebo výsledok dokončenia úlohy** a ideálne aj **spôsob, akým sa bude merať jej úspech**. Spája úlohu so širšími cieľmi a pomáha vyhodnotiť jej reálnu hodnotu.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Pri Triedení / Plánovaní:** Vyplň najmä pre **dôležitejšie alebo strategické úlohy**. Zamysli sa: Aký pozitívny výsledok očakávam? Ako spoznám, že úloha bola naozaj úspešná a prínosná? Buď čo najkonkrétnejší a merateľný, ak je to možné.
    - **AI Návrh:** AI môže mať problém presne určiť očakávaný dopad, ale môže navrhnúť štandardné metriky pre určité typy úloh (napr. pre marketingový post navrhne sledovať engagement rate).
- **Možnosti výberu / Vstup:** Voľný text.
    - *Príklady:*
        - `Zvýšenie počtu registrácií na workshop o 10%.`
        - `Zníženie času potrebného na onboarding klienta o 20 minút.`
        - `Získanie 5 nových relevantných kontaktov na konferencii.`
        - `Publikovaný odborný článok na tému X.`
        - `Zlepšenie spokojnosti klienta Y (merané feedbackom).`
        - `Funkčná automatizácia procesu Z.`
        - `Ušetrené 2 hodiny manuálnej práce týždenne.`
        - `Lepšie pochopenie potrieb cieľovej skupiny.`

---

## **Location**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Text**) špecifikuje **geografickú lokalitu alebo kontext, ku ktorému sa úloha priamo viaže**. Určuje, *o akom mieste* úloha je, alebo kde sa jej výsledok prejaví, na rozdiel od poľa Execution Location, ktoré určuje, kde by si mal *ty* ideálne pracovať. Pomáha pri organizácii úloh viazaných na konkrétne mestá, krajiny, miesta alebo online priestor a poskytuje dôležitý kontext pre AI.
    - **Príklady použitia:** Plánovanie eventu v Bratislave, research o trhu v Českej Republike, online stretnutie, úloha týkajúca sa tvojho bytu v Nitre.
    - **TY:** Toto pole vypĺňaš pri vytváraní alebo triedení úlohy, ak má úloha jasný geografický súvis.
    - **AI:** AI toto pole **číta** pre získanie kontextu (napr. pri vyhľadávaní informácií špecifických pre danú lokalitu). Môže tiež **navrhnúť** hodnotu na základe analýzy celkového kontextu úlohy (napr. ak cieľ je "Zorganizovať workshop v Prahe", AI navrhne "Praha, Česká Republika").
- **Ako s tým pracovať (TY & AI):**
    - **TY:** Ak má úloha geografický kontext, vyplň toto pole. Buď čo najkonkrétnejší, ale zároveň konzistentný (napr. vždy používaj "Bratislava", nie niekedy "BA"). Môžeš zadať mesto, krajinu, región, konkrétnu adresu. Ak je lokalita online daj online. Ak je lokalita konkrétna webová stránka, daj online + webová stránka. Ak lokalita nie je relevantná, nechaj pole prázdne alebo zadaj "Nezáleží".
    - **AI:** AI **číta** toto pole pre kontext. Ak analyzuje úlohu a identifikuje jasnú geografickú súvislosť (a pole je prázdne), môže navrhnúť vyplnenie tohto poľa v Task Comments alebo ho priamo vyplniť (ak je na to inštruovaná a má vysokú mieru istoty). AI by nemala prepisovať tebou zadanú hodnotu.
- **Možnosti výberu / Vstup:** **Voľný text (Free Text).**
    - *Príklady vstupu:*
        - Bratislava
        - Nitra
        - Praha, Česká Republika
        - Koh Phangan, Thajsko
        - Plank am Kamp, Rakúsko
        - Nová Cvernovka, Bratislava
        - Online
        - Nezáleží
        - [Konkrétna Adresa], [Mesto]

---

## **Execution Location**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown alebo Text) špecifikuje **optimálne alebo požadované fyzické miesto**, kde by si mal **ty** vykonávať svoju časť úlohy.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Pri triedení označ miesto, ak je pre úlohu dôležité alebo preferované. Používaj to na filtrovanie úloh podľa toho, kde sa práve nachádzaš.
- **AI Návrh:** AI môže navrhnúť miesto na základe typu úlohy (napr. Fyzická práca -> Vonku/NaMieste, Hlboká práca -> Domov/Pracovňa).
- **Možnosti výberu / Vstup (Multi-select Dropdown):** Nezáleží, Domov, Domov - Pracovňa, Kancelária/Cowork, Vonku/Príroda, Mesto/Kaviareň, Na Cestách, Konkrétne Mesto (Nitra, BA...), Konkrétne Miesto (WellBe, Telocvičňa...)… +++ kľudne doplniť podľa toho čo sa objavuje v tasku

---

## **Required Device(s)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-select Dropdown) špecifikuje **kľúčové hardvérové zariadenia**, ktoré **ty** potrebuješ na vykonanie svojej časti úlohy.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Označ potrebné zariadenia. Filtruj úlohy podľa toho, aké zariadenie máš práve k dispozícii.
- **AI Návrh:** AI môže navrhnúť na základe typu úlohy a požadovaných nástrojov (napr. Video strih -> Výkonný Počítač).
- **Možnosti výberu / Vstup (Multi-select Dropdown):** PC/Laptop, MacBook, Mobil (iOS/Android), Tablet (iPad+Pencil), Externý Monitor, Kvalitný Mikrofón, Kamera, DJ Technika, Papier & Pero, Žiadne Špecifické.

---

## **Internet Requirement**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) definuje, **či a ako veľmi je pre tvoju časť práce potrebný prístup na internet**.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Označ potrebu internetu. Užitočné pre plánovanie práce na cestách alebo miestach s nespoľahlivým pripojením.
- **AI Návrh:** AI môže odvodiť na základe požadovaných nástrojov (napr. práca s Google Docs vyžaduje internet, písanie v textovom editore nie).
- **Možnosti výberu / Vstup (Dropdown):**
    - Nevyhnutný (Online)
    - Vhodný (Offline obmedzené)
    - Netreba (Offline možné)

---

## **Focus Requirement**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown) hodnotí, **akú mieru nerušeného sústredenia si vyžaduje tvoja časť práce**. Dopĺňa kognitívnu náročnosť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Ohodnoť potrebu fokusu. Plánuj si úlohy s vysokou potrebou sústredenia na čas a miesto, kde ťa nebude nikto rušiť.
- **AI Návrh:** AI môže odvodiť z typu úlohy (napr. Kreatíva/Hlboká práca -> Vysoká, Komunikácia -> Nízka/Stredná).
- **Možnosti výberu / Vstup (Dropdown):**
    - Vysoká (Deep Work)
    - Stredná (Bežné sústredenie)
    - Nízka (Možné prerušenia)

---

## **`Optimal Time of Day`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (**Multi-Select Dropdown**) označuje **preferovanú alebo najvhodnejšiu časť dňa** na vykonanie tvojej časti úlohy, zohľadňujúc tvoje definované energetické a mentálne stavy podľa ideálneho režimu.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Pri triedení úlohy priraď fázu dňa, ktorá najlepšie zodpovedá typu práce alebo energii, ktorú si úloha vyžaduje.
- **AI Návrh:** AI môže na základe  Task Type,  Cognitive Load a  Energy Level navrhnúť optimálnu časť dňa podľa tejto logiky.
- **Možnosti výberu / Vstup (Multi-select Dropdown):**
    1.  **`Ráno (5:30-8:30) - Príprava & Naladenie`**
        - *Charakteristika:* Somatika, grounding, humor, očista, energizácia, krátky intenzívny pohyb, plánovanie dňa. Fáza "Zviera/Hravosť/Prijímanie".
        - *Vhodné pre úlohy:* Osobné praxe, plánovanie, ľahké fyzické aktivity, úlohy vyžadujúce prijímajúci/hravý mindset.
    2.  **`Doobeda (8:30-11:30) - Hlboká Práca (Kreatíva/Kognitíva)`**
        - *Charakteristika:* Maximálne sústredenie, kognitívny výkon, tvorba, riešenie problémov, strategické myslenie. Fáza "Muž/Sila/Moc". Pomodoro bloky.
        - *Vhodné pre úlohy:* Písanie, kódovanie, dizajn, stratégia, komplexná analýza, náročné učenie, kreatívna tvorba.
    3.  **`Obed & Aktívna Pauza (11:30-12:10)`**
        - *Charakteristika:* Krátky workout/pohyb, ľahký obed, mentálny oddych (nie práca), power nap/relaxácia.
        - *Vhodné pre úlohy:* Krátke fyzické aktivity, regeneračné techniky, mindfulness. (Menej vhodné pre bežné pracovné úlohy).
    4.  **`Poobede Blok 1 (12:10-15:00) - Operatíva & Praktické Úlohy`**
        - *Charakteristika:* Dobrá energia na praktické vykonávanie, rutinu, dokončovanie. Začína sa druhá polovica pracovného dňa.
        - *Vhodné pre úlohy:* Implementácia, operatívne tasky, vybavovanie, praktická príprava, dokončovanie rozpracovaných úloh z doobedia.
    5.  **`Poobede Blok 2 (15:00-16:00) - Komunikácia & Admin`**
        - *Charakteristika:* Fokus na komunikáciu (emaily, správy) a administratívne úlohy, uzatváranie dňa.
        - *Vhodné pre úlohy:* Odpovedanie na emaily/správy, administratíva, fakturácia, organizácia Asany, drobné dokončovacie úlohy.
    6.  **`Prechod (16:00-17:00) - Uvoľnenie & Resourcing`**
        - *Charakteristika:* Prechod z práce do osobného času, parasympatikus, uvoľnenie napätia, resourcing, pohyb pre radosť. Fáza "Už je potom/Som v bezpečí".
        - *Vhodné pre úlohy:* Relaxačné techniky, ľahší pohyb, prechádzka, aktivity zamerané na pôžitok a zdroje, krátka reflexia dňa.
    7.  **`Učenie & Hobby (17:00-18:30)`**
        - *Charakteristika:* Angažovaný oddych, učenie sa nových vecí (menej náročné ako doobeda), venovanie sa záľubám, ľahšia sociálna interakcia. "Unwind but engaged".
        - *Vhodné pre úlohy:* Osobné štúdium (menej náročné kurzy, knihy, podcasty), hobby projekty, kreatívne aktivity pre radosť, plánovanie osobných vecí, ľahšia komunikácia.
    8.  **`Voľný Čas & Rituál (18:30-20:45)`**
        - *Charakteristika:* Voľnosť, kreativita bez tlaku, pôžitok, večerné rituály, sebareflexia, práca s podvedomím. Fáza "Žena/Bábätko/Mág/Šaman".
        - *Vhodné pre úlohy:* Journaling, meditačné praxe, kreatívne vyjadrenie (bez cieľa), práca so snami, plánovanie vízií, hlboká relaxácia.
    9.  **`Príprava na Spánok (20:45-22:00)`**
        - *Charakteristika:* Upokojenie, nízka stimulácia, príprava tela a mysle na spánok. Fáza "Duša/Pokoj/Bezpečie".
        - *Vhodné pre úlohy:* Čítanie (papierová kniha), počúvanie pokojnej hudby/podcastu, ľahké strečingové cvičenia, vďačnosť, príprava na ďalší deň (len mentálna).
    10.  **`Noc (po 22:00)`**
        - *Charakteristika:* Spánok.
        - *Vhodné pre úlohy:* Žiadne.
    11.  **`Nezáleží / Flexibilné`**
        - *Charakteristika:* Úloha sa dá urobiť kedykoľvek.
        - *Vhodné pre úlohy:* Veľmi krátke úlohy, niektoré typy operatívy/adminu.

---

## **`Assignee`**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole (typ User), ktoré určuje **jednu osobu primárne zodpovednú** za dokončenie úlohy. V tvojom systéme to budeš **vždy TY**. Aj keď AI vykonáva časti práce, ty si finálnym vlastníkom a zodpovedným za dohliadnutie na dokončenie. AI Agent nie je "užívateľ" v Asane, ktorému by sa dala úloha priradiť.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Asana ti pravdepodobne automaticky priradí úlohu, ktorú vytvoríš. Kontroluj, či si priradený ku všetkým aktívnym úlohám, ktoré vyžadujú tvoju akciu alebo dohľad.
- **Možnosti výberu / Vstup:** Užívateľ Asany (vždy ty - Jakub Cerulík, email: jakubcerulik@gmail.com).

---

## **`Collaborators`**

- **Funkcia a Fungovanie (Dokumentácia):** Štandardné Asana pole (typ Users), ktoré umožňuje pridať **ďalších ľudí (užívateľov Asany)**, ktorí majú o úlohe vedieť, dostávať notifikácie o zmenách alebo komentároch, ale nie sú primárne zodpovední za jej dokončenie.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Manuálne pridaj relevantných ľudí (ak nejakých v Asane máš – napr. Maťo Grafik, externý partner, ktorý má prístup), ak potrebuješ, aby úlohu videli alebo boli informovaní o jej priebehu. Pre komunikáciu s ľuďmi mimo Asany slúžia iné polia a úlohy ( `Related Entity`, úlohy typu `Komunikácia`).
- **Možnosti výberu / Vstup:** Výber užívateľov z tvojho Asana Workspace.

---

## **`Related Entity`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Multi-select Dropdown**) identifikuje **hlavnú externú alebo internú osobu, klienta, partnera alebo organizáciu**, ktorej sa úloha priamo týka alebo s ktorou budeš v rámci úlohy primárne interagovať. Dáva AI dôležitý kontext o kľúčovom aktérovi.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):**
    - **Vo Formulári (Voliteľné):** Zadaj meno osoby alebo názov organizácie, ak je to pre úlohu kľúčové (napr. `Klient: Peter Novák`, `Organizácia: WellBe Club`, `Osoba: Maťo Grafik`).
    - **Pri Triedení:** Skontroluj alebo doplň, ak relevantné.
- **Možnosti výberu / Vstup:** **Multi-select Dropdown**. Odporúča sa používať konzistentný formát (napr. `Meno Priezvisko` alebo `Názov Organizácie`)…. podľa toho čo je v tasku, alebo v databáze taskov, ktoré ma o mne AI ako knowledge-base

---

## **`Waiting For`**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (Dropdown) špecifikuje **dôvod, prečo je úloha aktuálne blokovaná alebo v čakajúcom stave** (najmä ak je  `AI Workflow Status` nastavený na `2 - Čaká na Info` alebo ak manuálne označíš úlohu ako blokovanú). Ujasňuje, na aký externý alebo interný faktor sa čaká.
- **Ako s tým pracovať (TY & AI):**
    - **TY:** Ak nastavuješ stav na `2 - Čaká na Info`, vyplň toto pole, aby si vedel, čo ti chýba. Ak manuálne blokuješ úlohu, vyplň dôvod.
    - **AI:** Ak AI nastaví stav na `5 - Vyžaduje Moju Akciu`, môže (voliteľne) vyplniť toto pole hodnotou `User Action / Decision`. Ak AI identifikuje závislosť, ktorú nevie automaticky nastaviť, môže sem napísať `Waiting for Task ID [ID]`. Ak čaká na externú API, môže napísať `Waiting for API [Názov]`.
- **Možnosti výberu / Vstup (Príklady pre Dropdown):**
    - `User Input / Decision` (Čaká na tvoju akciu/rozhodnutie)
    - `Missing Information` (Chýbajú vstupné dáta)
    - `External: [Meno Osoby/Org]` (Čaká na odpoveď/vstup od externej entity)
    - `Dependency: [Názov/ID Úlohy]` (Čaká na dokončenie inej Asana úlohy)
    - `AI Processing` (Ak chceš explicitne označiť čakanie na AI)
    - `Approval Needed` (Čaká na schválenie)
    - `Resource Availability` (Čaká na voľný zdroj/nástroj)
    - `External Event` (Čaká na určitý dátum/udalosť)

---

## **Financial Return (Value & Speed)**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ **Dropdown**) kombinuje odhadovanú **výšku potenciálneho finančného zisku** (alebo ušetrených nákladov) s odhadovaným **časom, za ktorý sa tento zisk prejaví** od dokončenia úlohy. Slúži na veľmi presnú finančnú prioritizáciu úloh.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Pri triedení úloh, ktoré majú potenciál generovať príjem alebo úsporu, vyber kombináciu, ktorá najlepšie odhaduje hodnotu a rýchlosť návratnosti. Buď čo najrealistickejší, ale ber to ako odhad.
- **AI Návrh:** AI toto pole vyplní len veľmi ťažko. Je to tvoje strategické a biznisové hodnotenie. AI ho ale môže použiť na prioritizáciu.
- **Možnosti výberu / Vstup (Dropdown):**
    
    *(Formát: Odhad Zisku / Odhad Času Návratnosti)*
    
    **Najrýchlejšia Návratnosť (< 1 deň):**
    
    - €50 / <1d
    - €100 / <1d
    - €200 / <1d
    - €200-500 / <1d
    - €500-1k / <1d
    - €1k-2k / <1d
    - €2k-5k / <1d
    - €5k-20k / <1d
    - €20k+ / <1d
    
    **Návratnosť ~1 Deň:**
    
    - €50 / ~1d
    - €100 / ~1d
    - €200 / ~1d
    - €200-500 / ~1d
    - €500-1k / ~1d
    - €1k-2k / ~1d
    - €2k-5k / ~1d
    - €5k-20k / ~1d
    - €20k+ / ~1d
    
    **Návratnosť 1-3 Dni:**
    
    - €50 / 1-3d
    - €100 / 1-3d
    - €200 / 1-3d
    - €200-500 / 1-3d
    - €500-1k / 1-3d
    - €1k-2k / 1-3d
    - €2k-5k / 1-3d
    - €5k-20k / 1-3d
    - €20k+ / 1-3d
    
    **Návratnosť 3-7 Dní:**
    
    - €50 / 3-7d
    - €100 / 3-7d
    - €200 / 3-7d
    - €200-500 / 3-7d
    - €500-1k / 3-7d
    - €1k-2k / 3-7d
    - €2k-5k / 3-7d
    - €5k-20k / 3-7d
    - €20k+ / 3-7d
    
    **Návratnosť 1-2 Týždne:**
    
    - €50 / 1-2w
    - €100 / 1-2w
    - €200 / 1-2w
    - €200-500 / 1-2w
    - €500-1k / 1-2w
    - €1k-2k / 1-2w
    - €2k-5k / 1-2w
    - €5k-20k / 1-2w
    - €20k+ / 1-2w
    
    **Návratnosť 2-4 Týždne:**
    
    - €50 / 2-4w
    - €100 / 2-4w
    - €200 / 2-4w
    - €200-500 / 2-4w
    - €500-1k / 2-4w
    - €1k-2k / 2-4w
    - €2k-5k / 2-4w
    - €5k-20k / 2-4w
    - €20k+ / 2-4w
    
    **Návratnosť 1-3 Mesiace:**
    
    - €50 / 1-3m
    - €100 / 1-3m
    - €200 / 1-3m
    - €200-500 / 1-3m
    - €500-1k / 1-3m
    - €1k-2k / 1-3m
    - €2k-5k / 1-3m
    - €5k-20k / 1-3m
    - €20k+ / 1-3m
    
    **Návratnosť 3+ Mesiace:**
    
    - €50 / 3m+
    - €100 / 3m+
    - €200 / 3m+
    - €200-500 / 3m+
    - €500-1k / 3m+
    - €1k-2k / 3m+
    - €2k-5k / 3m+
    - €5k-20k / 3m+
    - €20k+ / 3m+
    
    **Ostatné / Nepriame:**
    
    - Nepriamy Vplyv / Podpora  (Neprináša priamo peniaze, ale podporuje príjmové aktivity)
    - Nákladová Úloha  (Generuje náklady)
    - Nerelevantné / Neviem Odhadnúť (Predvolené)

---

## **AI Output Rating**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Dropdown, možno s hviezdičkami alebo číslami) slúži na **tvoje subjektívne hodnotenie kvality a užitočnosti práce AI** na danej úlohe. Kľúčové pre spätnú väzbu a budúce ladenie AI Agenta alebo promptov.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Po skontrolovaní výstupu AI (v Description alebo na linku) a predtým, ako úlohu označíš za hotovú (alebo pošleš späť na revíziu), vyber hodnotenie.
- **Možnosti výberu / Vstup (Dropdown):**
    - ⭐⭐⭐⭐⭐ - Vynikajúce (Presne to, čo som chcel, žiadne úpravy)
    - ⭐⭐⭐⭐ - Veľmi Dobré (Skvelý základ, len drobné úpravy)
    - ⭐⭐⭐ - Dobré / Použiteľné (Použiteľné, ale vyžaduje viac úprav)
    - ⭐⭐ - Priemerné / Čiastočné (Len čiastočne užitočné, veľa práce pre mňa)
    - ⭐ - Zlé / Nepoužiteľné (Výstup bol mimo, chybný, musel som začať odznova)
    - N/A - AI Nepracovala

---

## **Feedback for AI**

- **Funkcia a Fungovanie (Dokumentácia):** Toto **Custom Field** (typ Multi-line Text) poskytuje priestor pre **tvoju konkrétnu slovnú spätnú väzbu** k práci AI na tejto úlohe. Čo bolo dobré? Čo sa dalo zlepšiť? Prečo si dal také hodnotenie? Tieto dáta sú extrémne cenné pre budúce učenie a vylepšovanie AI Agenta.
- **Ako s tým pracovať (TY ak nie je priradené tak AI):** Po zadaní hodnotenia ([⭐] AI Output Rating), najmä ak nebolo 5 hviezdičiek, sem napíš stručné poznámky, čo konkrétne by AI mohla nabudúce urobiť inak alebo lepšie.
- **Možnosti výberu / Vstup:** Voľný text.
    - *Príklady:* Výborne zhrnuté, ale chýbal odkaz na zdroj X., Tón bol príliš formálny, nabudúce skús viac hravý., Návrhy boli dobré, ale príliš dlhé., Úplne nepochopila zadanie, zamerala sa na nesprávnu tému.

---

# FIELDS, KTORÉ SÚ VO FORMULÁRI A BUDÚ AJ V CSV, ALE BUDÚ SLÚŽIŤ LEN PRE AI AKO KONTEXT ABY NA ZÁKLADE Z NICH AI VEDELA VYPLNIŤ OSTATNÉ FIELDS

## **`Suggested Initial Steps / Subtasks`**

- **Typ:** Custom Field (Multi-line Text)
- **Účel:** Miesto pre tvoj prvotný nápad, ako by sa dala úloha rozložiť alebo aké by mali byť prvé kroky. Nie sú to konečné subtasks, ktoré mám plniť. Len nápad, ktorý ďalej AI zohľadňuje, alebo ak má lepší nápad tak nie. Na základe nich AI lepšie chápe kontext a vie ako subtasks ma vytvoriť pre mňa (čo mám ja spraviť krok po kroku) a aké subtasks vytvoriť pre seba (AI, ako asi bude postupovať aby mi čo najlepšie pomohla). Nepovinné.
- **Pre Teba:** Pomáha ti štruktúrovať myšlienky pri zadávaní komplexnejšej úlohy.
- **Pre AI:** Vstup pre funkciu "Generovanie Akčných Krokov". AI môže tieto návrhy použiť, rozšíriť alebo ignorovať, ak má lepší plán. Ale skôr by ich malo brať v potaz, aj keby ich rozšíri alebo transformuje.
- **Ako vyplniť:** V bodoch alebo stručných vetách napíš prvé kroky, ktoré ti napadnú. Napr.: `1. Research kľúčové slová. 2. Vytvoriť osnovu. 3. Napísať prvý draft.`
- **Dokumentácia:** Sem môžeš napísať svoje prvé nápady na kroky alebo podúlohy. Je to **vstupný text** pre AI, ktorá potom môže vytvoriť skutočné Asana podúlohy a štruktúrovaný zoznam krokov v poli Subtasks (for user) a tak isto aj v Subtasks (for AI)
- **Ty:** Voliteľne napíš svoje nápady na kroky.
- **AI:** Číta tento vstup a berie ho ako kontext pre jej ďalśie akcie

## **`Relatated Areas for AI to Consider`**

1. **`(Based on this it will categorise it to specific Portfolio, Project, Section, etc.)`**
- **Typ:** Custom Field (Text)
- **Účel:** Označenie **ďalších** portfólií, projektov alebo širších oblastí, s ktorými úloha súvisí, okrem tej primárnej. Kľúčové pre cross-vyhľadávanie.
- **Pre Teba:** Pomáha ti vidieť prepojenia medzi rôznymi časťami tvojho systému.
- **Pre AI:** Poskytuje dodatočný kontext pre pochopenie a kategorizáciu.
- **Ako vyplniť:** Voľne napíš s čím všetkým úloha súvisi aby AI vedelo na základe toho kategorizovať ka mbude úloha zaradená atď.
- **Dokumentácia:** Označenie súvsiacich portfólií, oblastí, projektov, sekcií, úloh apod., s ktorými úloha súvisí. Pomáha AI pochopiť medzioblastné prepojenia.
- **Ty:** Volne napíš text.
- **AI:** Číta tvoj výber a môže navrhnúť ďalšie na základe analýzy.

## **`Potential Dependencies / Related Tasks` (for AI to consider)**

- **Typ:** Custom Field (Multi-line Text)
- **Účel:** Zaznamenať prepojenia na iné úlohy alebo zdroje, ktoré nie sú formálnymi závislosťami v Asane, ale sú dôležité pre kontext.
- **Pre Teba:** Rýchly prístup k súvisiacim informáciám.
- **Pre AI:** Vstup pre identifikáciu skutočných závislostí alebo pre pochopenie širšieho kontextu.
- **Ako vyplniť:** Vlož linky na iné Asana úlohy, relevantné emaily, dokumenty alebo stručne popíš súvislosť.
- **Typ:** Custom Field (Multi-line Text)
- **Účel:** Zaznamenať prepojenia na iné úlohy alebo zdroje, ktoré nie sú formálnymi závislosťami v Asane, ale sú dôležité pre kontext.
- **Pre Teba:** Rýchly prístup k súvisiacim informáciám.
- **Pre AI:** Vstup pre identifikáciu skutočných závislostí alebo pre pochopenie širšieho kontextu.
- **Ako vyplniť:** Vlož linky na iné Asana úlohy, relevantné emaily, dokumenty alebo stručne popíš súvislosť.
- **Ty:** Voliteľne vlož linky alebo popisy.
- **AI:** Číta tento vstup, analyzuje ho a snaží sa nastaviť formálne závislosti a prepojenia.'