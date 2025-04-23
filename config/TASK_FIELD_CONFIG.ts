// CORE CONFIG FOR AI TO DO LIST APP
// Designed for single-table storage and CSV compatibility.
// All fields are set to editable: true as requested.

export interface TaskFieldConfig {
    label: string;
    // Types adjusted for single-table/CSV approach:
    // 'multi-select' implies UI handling, stored as TEXT (e.g., comma-separated).
    // 'textarea' for multi-line text.
    // 'text' for single-line text or IDs.
    // 'dropdown' stored as TEXT.
    // 'date' stored as TIMESTAMP/DATE string.
    // 'number' stored as NUMBER or TEXT.
    type: 'text' | 'textarea' | 'dropdown' | 'multi-select' | 'date' | 'number' | 'checkbox';
    options?: string[];
    // Dynamically get options based on other selections (now expects arrays or undefined)
  getOptions?: (selectedPortfolios?: string[] | undefined, selectedProjects?: string[] | undefined) => string[];
    editable: boolean; // ALWAYS TRUE based on user request
    multi?: boolean; // UI hint for multi-select
    description?: string;
    filterable?: boolean; // Can this field be used in advanced filters?
    defaultFilterValue?: string | boolean | string[] | undefined | null;
}
  
  // Typovanie pre dynamický objekt portfólio → projekt → sekcie
  export type PortfolioProjectSection = {
    [portfolio: string]: {
      [project: string]: string[];
    };
  };
  
  // Auto-generovaný objekt podľa portfolios-projects-sections.md
  export const PORTFOLIO_PROJECT_SECTION: PortfolioProjectSection = {
      "GLOBAL (Global)": {
          "OVERDUE (Global)": [
              "Osobný Život & Rozvoj (OVERDUE (Global))", "Pracovný Život & Administratíva (OVERDUE (Global))", "Koučing & Terapia (OVERDUE (Global))", "Kurzy & Workshopy (OVERDUE (Global))", "DJing (OVERDUE (Global))", "Umenie (OVERDUE (Global))", "AI & Technológie (OVERDUE (Global))", "Projekty & Produkty (OVERDUE (Global))", "Social Media & Marketing (OVERDUE (Global))", "Cestovanie & Logistika (OVERDUE (Global))", "Znalostná Báza & Výskum (OVERDUE (Global))", "Crypto (OVERDUE (Global))", "Organizovanie Eventov (OVERDUE (Global))"
          ],
          "DNES (Global)": [
              "Ráno (5:30-8:30) - Príprava & Naladenie (DNES (Global))", "Doobeda (8:30-11:30) - Hlboká Práca (Kreatíva/Kognitíva) (DNES (Global))", "Obed & Aktívna Pauza (11:30-12:10) (DNES (Global))", "Poobede Blok 1 (12:10-15:00) - Operatíva & Praktické Úlohy (DNES (Global))", "Poobede Blok 2 (15:00-16:00) - Komunikácia & Admin (DNES (Global))", "Prechod (16:00-17:00) - Uvoľnenie & Resourcing (DNES (Global))", "Učenie & Hobby (17:00-18:30) (DNES (Global))", "Voľný Čas & Rituál (18:30-20:45) (DNES (Global))", "Príprava na Spánok (20:45-22:00) (DNES (Global))", "Noc (po 22:00) (DNES (Global))", "Nezáleží / Flexibilné (DNES (Global))"
          ],
          "TENTO TÝŽDEŇ (Global)": [
              "Osobný Život & Rozvoj (TENTO TÝŽDEŇ (Global))", "Pracovný Život & Administratíva (TENTO TÝŽDEŇ (Global))", "Koučing & Terapia (TENTO TÝŽDEŇ (Global))", "Kurzy & Workshopy (TENTO TÝŽDEŇ (Global))", "DJing (TENTO TÝŽDEŇ (Global))", "Umenie (TENTO TÝŽDEŇ (Global))", "AI & Technológie (TENTO TÝŽDEŇ (Global))", "Projekty & Produkty (TENTO TÝŽDEŇ (Global))", "Social Media & Marketing (TENTO TÝŽDEŇ (Global))", "Cestovanie & Logistika (TENTO TÝŽDEŇ (Global))", "Znalostná Báza & Výskum (TENTO TÝŽDEŇ (Global))", "Crypto (TENTO TÝŽDEŇ (Global))", "Organizovanie Eventov (TENTO TÝŽDEŇ (Global))"
          ],
          "TENTO MESIAC (Global)": [
              "Osobný Život & Rozvoj (TENTO MESIAC (Global))", "Pracovný Život & Administratíva (TENTO MESIAC (Global))", "Koučing & Terapia (TENTO MESIAC (Global))", "Kurzy & Workshopy (TENTO MESIAC (Global))", "DJing (TENTO MESIAC (Global))", "Umenie (TENTO MESIAC (Global))", "AI & Technológie (TENTO MESIAC (Global))", "Projekty & Produkty (TENTO MESIAC (Global))", "Social Media & Marketing (TENTO MESIAC (Global))", "Cestovanie & Logistika (TENTO MESIAC (Global))", "Znalostná Báza & Výskum (TENTO MESIAC (Global))", "Crypto (TENTO MESIAC (Global))", "Organizovanie Eventov (TENTO MESIAC (Global))"
          ],
          "GLOBAL INBOX (Global)": ["GLOBAL INBOX (GLOBAL INBOX (Global))"]
      },
      "Osobný Život & Rozvoj (Osobné & Rozvoj)": {
          "ZHRNUTIE (Osobný Život & Rozvoj)": ["INBOX (ZHRNUTIE (Osobný Život & Rozvoj))", "URGENT !!! (ZHRNUTIE (Osobný Život & Rozvoj))", "KOMUNIKÁCIA (ZHRNUTIE (Osobný Život & Rozvoj))", "OSTATNÉ (ZHRNUTIE (Osobný Život & Rozvoj))"],
          "Osobný Rozvoj & Prax (Osobné & Rozvoj)": ["INBOX (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "URGENT !!! (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "Rozvoj & Štúdium (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "Prax (Návyky, Rituály) (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "Ciele & Vízia (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "Reflexia (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "Sebahodnota (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "Mentálne Zdravie & Regulácia (Osobný Rozvoj & Prax (Osobné & Rozvoj))", "Ostatné (Osobný Rozvoj & Prax (Osobné & Rozvoj))"],
          "Zdravie & Wellbeing (Osobné & Rozvoj)": ["INBOX (Zdravie & Wellbeing (Osobné & Rozvoj))", "URGENT !!! (Zdravie & Wellbeing (Osobné & Rozvoj))", "Lekári & Terapie (Zdravie & Wellbeing (Osobné & Rozvoj))", "Pohyb & Cvičenie (Zdravie & Wellbeing (Osobné & Rozvoj))", "Strava & Doplnky (Zdravie & Wellbeing (Osobné & Rozvoj))", "Ostatné (Zdravie & Wellbeing (Osobné & Rozvoj))"],
          "Financie & Byrokracia - Osobné (Osobné & Rozvoj)": ["INBOX (Financie & Byrokracia - Osobné (Osobné & Rozvoj))", "URGENT !!! (Financie & Byrokracia - Osobné (Osobné & Rozvoj))", "Byrokracia (Úrady, Doklady) (Financie & Byrokracia - Osobné (Osobné & Rozvoj))", "Platby & Účty (osobné) (Financie & Byrokracia - Osobné (Osobné & Rozvoj))", "Subscribe / Unsubscribe (Financie & Byrokracia - Osobné (Osobné & Rozvoj))", "Optimalizácia Výdavkov (Financie & Byrokracia - Osobné (Osobné & Rozvoj))", "Budget & Prehľad (Financie & Byrokracia - Osobné (Osobné & Rozvoj))", "Ostatné (Financie & Byrokracia - Osobné (Osobné & Rozvoj))"],
          "Nákupy & Domácnosť (Osobné & Rozvoj)": ["INBOX (Nákupy & Domácnosť (Osobné & Rozvoj))", "URGENT !!! (Nákupy & Domácnosť (Osobné & Rozvoj))", "Nákupný Zoznam (Všeobecne) (Nákupy & Domácnosť (Osobné & Rozvoj))", "Kúpiť: Bežný život (Nákupy & Domácnosť (Osobné & Rozvoj))", "Kúpiť: Zdravie (Nákupy & Domácnosť (Osobné & Rozvoj))", "Kúpiť: Byt (Nákupy & Domácnosť (Osobné & Rozvoj))", "Kúpiť: Produkty (Nákupy & Domácnosť (Osobné & Rozvoj))", "Údržba: Byt (Nákupy & Domácnosť (Osobné & Rozvoj))", "Údržba: Digital (Nákupy & Domácnosť (Osobné & Rozvoj))", "Údržba: Ostatné (Nákupy & Domácnosť (Osobné & Rozvoj))", "Ostatné (Nákupy & Domácnosť (Osobné & Rozvoj))"],
          "Sociálne Vzťahy & Komunita (Osobné & Rozvoj)": ["INBOX (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))", "URGENT !!! (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))", "Komunikácia (Odpovedať) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))", "Stretnutia (Plánovanie) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))", "Eventy (Plánovanie) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))", "Nápady na Aktivity (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))", "Komunita & Networking (Osobné) (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))", "Ostatné (Sociálne Vzťahy & Komunita (Osobné & Rozvoj))"],
          "Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj)": ["INBOX (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))", "URGENT !!! (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))", "Optimalizácie (Systémy, Automatizácie, Workflows) (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))", "Poznámkové Systémy (Správa a Údržba) (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))", "Nástroje Produktivity (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))", "Digitálny Poriadok (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))", "Ostatné (Produktivita & Optimalizácie - Osobné (Osobné & Rozvoj))"]
      },
      "Pracovný Život & Administratíva (Práca & Admin)": {
          "ZHRNUTIE (Práca & Admin)": ["INBOX (ZHRNUTIE (Práca & Admin))", "URGENT !!! (ZHRNUTIE (Práca & Admin))", "KOMUNIKÁCIA (ZHRNUTIE (Práca & Admin))", "OSTATNÉ (ZHRNUTIE (Práca & Admin))"],
          "Kariéra & Job Search (Práca & Admin)": ["INBOX (Kariéra & Job Search (Práca & Admin))", "URGENT !!! (Kariéra & Job Search (Práca & Admin))", "Komunikácia (Kariéra & Job Search (Práca & Admin))", "Aktívne Hľadanie (Kariéra & Job Search (Práca & Admin))", "CV & Portfólio (Príprava) (Kariéra & Job Search (Práca & Admin))", "Pracovné Ciele & Stratégia (Kariéra & Job Search (Práca & Admin))", "Networking & Partnerstvá (Profesný) (Kariéra & Job Search (Práca & Admin))", "Ostatné (Kariéra & Job Search (Práca & Admin))"],
          "Financie & Byrokracia - Biznis (Práca & Admin)": ["INBOX (Financie & Byrokracia - Biznis (Práca & Admin))", "URGENT !!! (Financie & Byrokracia - Biznis (Práca & Admin))", "Komunikácia (Financie & Byrokracia - Biznis (Práca & Admin))", "Byrokracia (Živnosť, OZ, Zmluvy) (Financie & Byrokracia - Biznis (Práca & Admin))", "Financie: Na Vystavenie / Prijatie (Financie & Byrokracia - Biznis (Práca & Admin))", "Financie: Platby / Odoslanie (Financie & Byrokracia - Biznis (Práca & Admin))", "Financie: Prehľady & Reporty (Financie & Byrokracia - Biznis (Práca & Admin))", "Dane & Odvody (Biznis) (Financie & Byrokracia - Biznis (Práca & Admin))", "Ostatné (Financie & Byrokracia - Biznis (Práca & Admin))"],
          "Pracovné Nástroje & Infraštruktúra (Práca & Admin)": ["INBOX (Pracovné Nástroje & Infraštruktúra (Práca & Admin))", "URGENT !!! (Pracovné Nástroje & Infraštruktúra (Práca & Admin))", "Optimalizácie (Systémy, Automatizácie, Workflows) (Pracovné Nástroje & Infraštruktúra (Práca & Admin))", "Nástroje Produktivity (Pracovné Nástroje & Infraštruktúra (Práca & Admin))", "Hardware & Software (Správa) (Pracovné Nástroje & Infraštruktúra (Práca & Admin))", "Ostatné (Pracovné Nástroje & Infraštruktúra (Práca & Admin))"],
          "Guiding - Sprievodcovstvo (Práca & Admin)": ["INBOX (Guiding - Sprievodcovstvo (Práca & Admin))", "URGENT !!! (Guiding - Sprievodcovstvo (Práca & Admin))", "Komunikácia (Guiding) (Guiding - Sprievodcovstvo (Práca & Admin))", "Networking & Partnerstvá (Guiding) (Guiding - Sprievodcovstvo (Práca & Admin))", "Príprava & Materiály (Guiding - Sprievodcovstvo (Práca & Admin))", "Logistika & Booking (Guiding) (Guiding - Sprievodcovstvo (Práca & Admin))", "Ostatné (Guiding - Sprievodcovstvo (Práca & Admin))"]
      },
      "Koučing & Terapia (Koučing & Terapia)": {
          "ZHRNUTIE (Koučing & Terapia)": ["INBOX (ZHRNUTIE (Koučing & Terapia))", "URGENT !!! (ZHRNUTIE (Koučing & Terapia))", "KOMUNIKÁCIA (ZHRNUTIE (Koučing & Terapia))", "OSTATNÉ (ZHRNUTIE (Koučing & Terapia))"],
          "Klienti a Individuálky (Koučing & Terapia)": ["INBOX (Klienti a Individuálky (Koučing & Terapia))", "URGENT !!! (Klienti a Individuálky (Koučing & Terapia))", "Komunikácia (Klienti & Leads) (Klienti a Individuálky (Koučing & Terapia))", "Príprava na Session (Klienti a Individuálky (Koučing & Terapia))", "Aktívni Klienti (Evidencia) (Klienti a Individuálky (Koučing & Terapia))", "Potenciálni Klienti (Leads) (Klienti a Individuálky (Koučing & Terapia))", "Pauza Klienti (Klienti a Individuálky (Koučing & Terapia))", "Ukončení Klienti (Klienti a Individuálky (Koučing & Terapia))", "Referencie & Spätná väzba (Klienti a Individuálky (Koučing & Terapia))", "Ostatné (Klienti a Individuálky (Koučing & Terapia))"],
          "Produkty & Služby (Koučing & Terapia)": ["INBOX (Produkty & Služby (Koučing & Terapia))", "URGENT !!! (Produkty & Služby (Koučing & Terapia))", "Online Produkty & Služby (Vývoj) (Produkty & Služby (Koučing & Terapia))", "Offline Produkty & Služby (Vývoj) (Produkty & Služby (Koučing & Terapia))", "Nástroje & Metodiky (Vývoj) (Produkty & Služby (Koučing & Terapia))", "Ostatné (Produkty & Služby (Koučing & Terapia))"],
          "Marketing & Biznis Rozvoj (Koučing & Terapia)": ["INBOX (Marketing & Biznis Rozvoj (Koučing & Terapia))", "URGENT !!! (Marketing & Biznis Rozvoj (Koučing & Terapia))", "Marketing (Aktivity, Kampane) (Marketing & Biznis Rozvoj (Koučing & Terapia))", "Networking & Partnerstvá (B2B, Referraly) (Marketing & Biznis Rozvoj (Koučing & Terapia))", "Business Rozvoj (Stratégia, Niche) (Marketing & Biznis Rozvoj (Koučing & Terapia))", "Monetizácia & Cenotvorba (Marketing & Biznis Rozvoj (Koučing & Terapia))", "Ostatné (Marketing & Biznis Rozvoj (Koučing & Terapia))"],
          "Štúdium & Rozvoj (Koučing & Terapia)": ["INBOX (Štúdium & Rozvoj (Koučing & Terapia))", "URGENT !!! (Štúdium & Rozvoj (Koučing & Terapia))", "Knihy & Podcasty & Články (Štúdium & Rozvoj (Koučing & Terapia))", "Offline - Kurzy & Workshopy (Účasť) (Štúdium & Rozvoj (Koučing & Terapia))", "Online - Kurzy & Webináre (Účasť) (Štúdium & Rozvoj (Koučing & Terapia))", "Zdokonaľovanie Metód (Štúdium & Rozvoj (Koučing & Terapia))", "Supervízia & Intervízia (Štúdium & Rozvoj (Koučing & Terapia))", "Ostatné (Štúdium & Rozvoj (Koučing & Terapia))"],
          "Optimalizácie & Admin (Koučing & Terapia)": ["INBOX (Optimalizácie & Admin (Koučing & Terapia))", "URGENT !!! (Optimalizácie & Admin (Koučing & Terapia))", "Optimalizácie (Systémy, Automatizácie, Workflows) (Optimalizácie & Admin (Koučing & Terapia))", "Nástroje Produktivity (Koučing) (Optimalizácie & Admin (Koučing & Terapia))", "Šablóny & Dokumenty (Optimalizácie & Admin (Koučing & Terapia))", "Štruktúry Sessions (Optimalizácie & Admin (Koučing & Terapia))", "Ostatné (Optimalizácie & Admin (Koučing & Terapia))"]
      },
      "Kurzy & Workshopy (Kurzy & Workshopy)": {
          "ZHRNUTIE (Kurzy & Workshopy)": ["INBOX (ZHRNUTIE (Kurzy & Workshopy))", "URGENT !!! (ZHRNUTIE (Kurzy & Workshopy))", "KOMUNIKÁCIA (ZHRNUTIE (Kurzy & Workshopy))", "OSTATNÉ (ZHRNUTIE (Kurzy & Workshopy))"],
          "Klienti (Kurzy & Workshopy)": ["INBOX (Klienti (Kurzy & Workshopy))", "URGENT !!! (Klienti (Kurzy & Workshopy))", "Komunikácia (Účastníci & Záujemcovia) (Klienti (Kurzy & Workshopy))", "Registrácie & Správa Účastníkov (Klienti (Kurzy & Workshopy))", "Spätná Väzba & Referencie (Klienti (Kurzy & Workshopy))", "Fakturácia & Platby (Účastníci) (Klienti (Kurzy & Workshopy))", "Ostatné (Klienti (Kurzy & Workshopy))"],
          "Offline Projekty (Kurzy & Workshopy)": ["INBOX (Offline Projekty (Kurzy & Workshopy))", "URGENT !!! (Offline Projekty (Kurzy & Workshopy))", "Nápady & Koncepty (Offline) (Offline Projekty (Kurzy & Workshopy))", "Plánovanie & Logistika (Miesto, Čas) (Offline Projekty (Kurzy & Workshopy))", "Realizácia & Facilitácia (Prebiehajúce/Nadchádzajúce) (Offline Projekty (Kurzy & Workshopy))", "Príprava Obsahu (Offline Špecifické) (Offline Projekty (Kurzy & Workshopy))", "Ostatné (Offline Projekty (Kurzy & Workshopy))"],
          "Online Projekty (Kurzy & Workshopy)": ["INBOX (Online Projekty (Kurzy & Workshopy))", "URGENT !!! (Online Projekty (Kurzy & Workshopy))", "Nápady & Koncepty (Online) (Online Projekty (Kurzy & Workshopy))", "Tvorba Obsahu (Video, Text, Audio) (Online Projekty (Kurzy & Workshopy))", "Vývoj Platformy & Technológie (Online Projekty (Kurzy & Workshopy))", "Realizácia & Správa (Prebiehajúce/Dostupné) (Online Projekty (Kurzy & Workshopy))", "Ostatné (Online Projekty (Kurzy & Workshopy))"],
          "Marketing & Biznis Rozvoj (Kurzy & Workshopy)": ["INBOX (Marketing & Biznis Rozvoj (Kurzy))", "URGENT !!! (Marketing & Biznis Rozvoj (Kurzy))", "Marketing (Propagácia, Kampane) (Marketing & Biznis Rozvoj (Kurzy))", "Networking & Partnerstvá (Priestory, Spolupráce) (Marketing & Biznis Rozvoj (Kurzy))", "Business Rozvoj (Nové Formáty, Cenník) (Marketing & Biznis Rozvoj (Kurzy))", "Predaj & Konverzie (Marketing & Biznis Rozvoj (Kurzy))", "Ostatné (Marketing & Biznis Rozvoj (Kurzy))"],
          "Štúdium a Rozvoj (Kurzy & Workshopy)": ["INBOX (Štúdium a Rozvoj (Kurzy))", "URGENT !!! (Štúdium a Rozvoj (Kurzy))", "Štúdium - kurzy, workshopy, výcviky, knihy (Štúdium a Rozvoj (Kurzy))", "Vývoj Metodológie & Štruktúry Kurzov (Štúdium a Rozvoj (Kurzy))", "Zdroje & Materiály (Štúdium a Rozvoj (Kurzy))", "Ostatné (Štúdium a Rozvoj (Kurzy))"],
          "Optimalizácie (Kurzy & Workshopy)": ["INBOX (Optimalizácie (Kurzy))", "URGENT !!! (Optimalizácie (Kurzy))", "Optimalizácie (Systémy, Automatizácie, Workflows) (Optimalizácie (Kurzy))", "Nástroje Produktivity (Optimalizácie (Kurzy))", "Šablóny & Štruktúry sessions (Optimalizácie (Kurzy))", "Zlepšovanie Materiálov & Obsahu (Optimalizácie (Kurzy))", "Ostatné (Optimalizácie (Kurzy))"]
      },
      "DJing (DJing)": {
          "ZHRNUTIE (DJing)": ["INBOX (ZHRNUTIE (DJing))", "URGENT !!! (ZHRNUTIE (DJing))", "KOMUNIKÁCIA (ZHRNUTIE (DJing))", "OSTATNÉ (ZHRNUTIE (DJing))"],
          "Gigs & Booking (DJing)": ["INBOX (Gigs & Booking (DJing))", "URGENT !!! (Gigs & Booking (DJing))", "Komunikácia (Booking, Eventy) (Gigs & Booking (DJing))", "Networking & Partnerstvá (DJ) (Gigs & Booking (DJing))", "Search (Príležitosti) (Gigs & Booking (DJing))", "Oslovenie a ponuky (Gigs & Booking (DJing))", "Potvrdené Gigs (Príprava) (Gigs & Booking (DJing))", "Referencie (Gigs & Booking (DJing))", "Ostatné (Gigs & Booking (DJing))"],
          "Knižnica + Tvorba (DJing)": ["INBOX (Knižnica + Tvorba (DJing))", "URGENT !!! (Knižnica + Tvorba (DJing))", "Search (Nová Hudba, Žánre) (Knižnica + Tvorba (DJing))", "Nákup & Download (Knižnica + Tvorba (DJing))", "Tag & Organize (Knižnica + Tvorba (DJing))", "Príprava Konceptu (Knižnica + Tvorba (DJing))", "Tvorba Setu (Mix, Nahrávanie) (Knižnica + Tvorba (DJing))", "Ostatné (Knižnica + Tvorba (DJing))"],
          "Projekty (DJing)": ["INBOX (Projekty (DJing))", "URGENT !!! (Projekty (DJing))", "Networking & Partnerstvá (Projekty (DJing))", "Nápady na Projekty (Video, Tour, Audio...) (Projekty (DJing))", "Prebiehajúce projekty (Projekty (DJing))", "Ostatné (Projekty (DJing))"],
          "Marketing (DJing)": ["INBOX (Marketing (DJing))", "URGENT !!! (Marketing (DJing))", "Stratégia & Branding (DJ) (Marketing (DJing))", "Tvorba Marketingových Materiálov (Marketing (DJing))", "Správa Sociálnych Médií (DJ) (Marketing (DJing))", "Reklama & Promovanie (DJ) (Marketing (DJing))", "Ostatné (Marketing (DJing))"],
          "Učenie DJingu - Individuálky (DJing)": ["INBOX (Učenie DJingu - Individuálky (DJing))", "URGENT !!! (Učenie DJingu - Individuálky (DJing))", "Komunikácia (Záujemcovia, Študenti) (Učenie DJingu - Individuálky (DJing))", "Aktívni Klienti (Evidencia) (Učenie DJingu - Individuálky (DJing))", "Potenciálni Klienti (Učenie DJingu - Individuálky (DJing))", "Pauza Klienti (Učenie DJingu - Individuálky (DJing))", "Ukončení klienti (Učenie DJingu - Individuálky (DJing))", "Príprava & Materiály (Individuálne) (Učenie DJingu - Individuálky (DJing))", "Plánovanie & Scheduling (Učenie DJingu - Individuálky (DJing))", "Fakturácia & Platby (Učenie DJingu - Individuálky (DJing))", "Ostatné (Učenie DJingu - Individuálky (DJing))"],
          "Učenie DJingu - Skupinovky (DJing)": ["INBOX (Učenie DJingu - Skupinovky (DJing))", "URGENT !!! (Učenie DJingu - Skupinovky (DJing))", "Komunikácia (Záujemcovia, Skupiny) (Učenie DJingu - Skupinovky (DJing))", "Aktívni Klienti (Evidencia) (Učenie DJingu - Skupinovky (DJing))", "Potenciálni Klienti (Učenie DJingu - Skupinovky (DJing))", "Pauza Klienti (Učenie DJingu - Skupinovky (DJing))", "Ukončení klienti (Učenie DJingu - Skupinovky (DJing))", "Príprava & Materiály (Skupinové) (Učenie DJingu - Skupinovky (DJing))", "Plánovanie & Logistika (Miesto, Termíny) (Učenie DJingu - Skupinovky (DJing))", "Fakturácia & Registrácia (Učenie DJingu - Skupinovky (DJing))", "Marketing (Skupinových Kurzov) (Učenie DJingu - Skupinovky (DJing))", "Ostatné (Učenie DJingu - Skupinovky (DJing))"],
          "Technika a Vybavenie (DJing)": ["INBOX (Technika a Vybavenie (DJing))", "URGENT !!! (Technika a Vybavenie (DJing))", "Nákupný Zoznam (DJ Technika) (Technika a Vybavenie (DJing))", "Údržba & Opravy (Technika a Vybavenie (DJing))", "Setup & Konfigurácia (Technika a Vybavenie (DJing))", "Zoznam Vybavenia (Inventory) (Technika a Vybavenie (DJing))", "Ostatné (Technika a Vybavenie (DJing))"]
      },
      "Umenie (Umenie)": {
          "ZHRNUTIE (Umenie)": ["INBOX (ZHRNUTIE (Umenie))", "URGENT !!! (ZHRNUTIE (Umenie))", "KOMUNIKÁCIA (ZHRNUTIE (Umenie))", "OSTATNÉ (ZHRNUTIE (Umenie))"],
          "Správa Projektov (Umenie)": ["INBOX (Správa Projektov (Umenie))", "URGENT !!! (Správa Projektov (Umenie))", "Komunikácia (Všeobecná - Umenie) (Správa Projektov (Umenie))", "Fondy & Granty (Prehľad, Hľadanie) (Správa Projektov (Umenie))", "Nápady (Nové Projekty) (Správa Projektov (Umenie))", "Ponuky (Projekty na zváženie) (Správa Projektov (Umenie))", "Aktuálne (Projekty - Koordinácia) (Správa Projektov (Umenie))", "Ostatné (Správa Projektov (Umenie))"],
          "New Beginnings (Umenie)": ["INBOX (New Beginnings (Umenie))", "URGENT !!! (New Beginnings (Umenie))", "Komunikácia (Projekt) (New Beginnings (Umenie))", "Partnerstvá (Projekt) (New Beginnings (Umenie))", "Výskum (Autor) (New Beginnings (Umenie))", "Tvorba (New Beginnings (Umenie))", "Prezentácia & Event (New Beginnings (Umenie))", "Admin & Logistika (New Beginnings (Umenie))", "Ostatné (New Beginnings (Umenie))"],
          "Lud:Us (Umenie)": ["INBOX (Lud:Us (Umenie))", "URGENT !!! (Lud:Us (Umenie))", "Komunikácia (Projekt) (Lud:Us (Umenie))", "Partnerstvá (Školy...) (Lud:Us (Umenie))", "Výskum (Lud:Us (Umenie))", "Tvorba(Karty, App, LP - Autor) (Lud:Us (Umenie))", "Prezentácia & Event (Lud:Us (Umenie))", "Marketing & Predaj (Lud:Us) (Lud:Us (Umenie))", "Admin & Logistika (Lud:Us (Umenie))", "Ostatné (Lud:Us (Umenie))"],
          "Ume(nie)Áno (Umenie)": ["INBOX (Ume(nie)Áno (Umenie))", "URGENT !!! (Ume(nie)Áno (Umenie))", "Komunikácia (Projekt) (Ume(nie)Áno (Umenie))", "Partnerstvá (Ume(nie)Áno (Umenie))", "Výskum (Ume(nie)Áno (Umenie))", "Tvorba (Ume(nie)Áno (Umenie))", "Prezentácia & Event (Ume(nie)Áno (Umenie))", "Marketing & Predaj (Ume(nie)Áno (Umenie))", "Admin & Logistika (Ume(nie)Áno (Umenie))", "Ostatné (Ume(nie)Áno (Umenie))"],
          "Marketing a Biznis Rozvoj (Umenie)": ["INBOX (Marketing a Biznis Rozvoj (Umenie))", "URGENT !!! (Marketing a Biznis Rozvoj (Umenie))", "Komunikácia (Marketing a Biznis Rozvoj (Umenie))", "Portfólio & CV (Marketing a Biznis Rozvoj (Umenie))", "Marketing (Marketing a Biznis Rozvoj (Umenie))", "Networking & Partnerstvá (Marketing a Biznis Rozvoj (Umenie))", "Business Rozvoj (Marketing a Biznis Rozvoj (Umenie))", "Monetizácia (Granty - Príprava Podkladov) (Marketing a Biznis Rozvoj (Umenie))", "Ostatné (Marketing a Biznis Rozvoj (Umenie))"],
          "Štúdium a Rozvoj (Umenie)": ["INBOX (Štúdium a Rozvoj (Umenie))", "URGENT !!! (Štúdium a Rozvoj (Umenie))", "Štúdium Online (Štúdium a Rozvoj (Umenie))", "Štúdium Offline (Štúdium a Rozvoj (Umenie))", "Rozvoj Zručností (Performance, Iné) (Štúdium a Rozvoj (Umenie))", "Ostatné (Štúdium a Rozvoj (Umenie))"],
          "Optimalizácie (Umenie)": ["INBOX (Optimalizácie (Umenie))", "URGENT !!! (Optimalizácie (Umenie))", "Optimalizácie (Systémy, Automatizácie, Workflows) (Optimalizácie (Umenie))", "Nástroje Produktivity (Optimalizácie (Umenie))", "Šablóny & Štruktúry (Optimalizácie (Umenie))", "Zlepšovanie Materiálov & Obsahu (Optimalizácie (Umenie))", "Ostatné (Optimalizácie (Umenie))"],
          "Tvorba & Prezentácia - Iné (Umenie)": ["INBOX (Tvorba & Prezentácia - Iné (Umenie))", "URGENT !!! (Tvorba & Prezentácia - Iné (Umenie))", "Tvorba (Performance, Maľba, Iné) (Tvorba & Prezentácia - Iné (Umenie))", "Príprava na Vystúpenia / Výstavy (Tvorba & Prezentácia - Iné (Umenie))", "Prezentácia (Realizácia) (Tvorba & Prezentácia - Iné (Umenie))", "Ostatné (Tvorba & Prezentácia - Iné (Umenie))"]
      },
      "AI & Technológie (AI & Tech)": {
          "ZHRNUTIE (AI & Tech)": ["INBOX (ZHRNUTIE (AI & Tech))", "URGENT !!! (ZHRNUTIE (AI & Tech))", "KOMUNIKÁCIA (ZHRNUTIE (AI & Tech))", "OSTATNÉ (ZHRNUTIE (AI & Tech))"],
          "Kariéra v AI & Tech (AI & Tech)": ["INBOX (Kariéra v AI & Tech (AI & Tech))", "URGENT !!! (Kariéra v AI & Tech (AI & Tech))", "Job Search (AI/Tech) (Kariéra v AI & Tech (AI & Tech))", "CV & Portfolio (AI/Tech) (Kariéra v AI & Tech (AI & Tech))", "Spolupráce & Partnerstvá (AI/Tech) (Kariéra v AI & Tech (AI & Tech))", "Granty & Funding (AI/Tech) (Kariéra v AI & Tech (AI & Tech))", "Ostatné (Kariéra v AI & Tech (AI & Tech))"],
          "Štúdium & Research (AI & Tech)": ["INBOX (Štúdium & Research (AI & Tech))", "URGENT !!! (Štúdium & Research (AI & Tech))", "Aktívne Štúdium (Kurzy, Knihy, Výskumy) (Štúdium & Research (AI & Tech))", "Research (Trendy, Nové Technológie) (Štúdium & Research (AI & Tech))", "Nápady na Výskum / Témy (Štúdium & Research (AI & Tech))", "Zdroje & Materiály (Linky, Papers...) (Štúdium & Research (AI & Tech))", "Ostatné (Štúdium & Research (AI & Tech))"],
          "Projekty & Produkty (AI & Tech)": ["INBOX (Nové AI/Tech Nápady & Projekty) (Projekty & Produkty (AI & Tech))", "URGENT !!! (AI/Tech Projekty) (Projekty & Produkty (AI & Tech))", "Osobné AI Nástroje (Vývoj) (Projekty & Produkty (AI & Tech))", "AI pre Biznis (Vývoj) (Projekty & Produkty (AI & Tech))", "SaaS & Komerčné Produkty (Vývoj) (Projekty & Produkty (AI & Tech))", "Automatizácie & Skripty (Vývoj) (Projekty & Produkty (AI & Tech))", "Web Aplikácie & Kód (Vývoj) (Projekty & Produkty (AI & Tech))", "Experimenty & Open Source (Projekty & Produkty (AI & Tech))", "Nápady na Zváženie (Roztriedené) (Projekty & Produkty (AI & Tech))", "Hotovo / Archív (AI/Tech Projekty) (Projekty & Produkty (AI & Tech))"],
          "Nástroje & Workflow PRE Prácu s AI (AI & Tech)": ["INBOX (Nástroje & Workflow PRE Prácu s AI (AI & Tech))", "URGENT !!! (Nástroje & Workflow PRE Prácu s AI (AI & Tech))", "Nástroje (Výber, Testovanie, Správa - GPTs, Platformy...) (Nástroje & Workflow PRE Prácu s AI (AI & Tech))", "Workflows (Efektívny Prompting, Chainovanie...) (Nástroje & Workflow PRE Prácu s AI (AI & Tech))", "Optimalizácia Používania AI (Best Practices) (Nástroje & Workflow PRE Prácu s AI (AI & Tech))", "Experimenty s Nástrojmi a Technikami (Nástroje & Workflow PRE Prácu s AI (AI & Tech))", "Ostatné (Nástroje & Workflow PRE Prácu s AI (AI & Tech))"],
          "Optimalizácia & Automatizácia POMOCOU AI (AI & Tech)": ["INBOX (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))", "URGENT !!! (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))", "Automatizácie (Make.com + AI, Skripty...) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))", "Integrácie (Prepojenie AI s inými nástrojmi) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))", "Workflows (AI-Enhanced Procesy) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))", "Knižnica Promptov (Pre Opakované Úlohy) (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))", "Analýza Dát Pomocou AI (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))", "Ostatné (Optimalizácia & Automatizácia POMOCOU AI (AI & Tech))"]
      },
      "Projekty & Produkty (Nápady)": {
          "ZHRNUTIE (Nápady)": ["INBOX (ZHRNUTIE (Nápady))", "URGENT !!! (ZHRNUTIE (Nápady))", "KOMUNIKÁCIA (ZHRNUTIE (Nápady))", "OSTATNÉ (ZHRNUTIE (Nápady))"],
          "Nápady - AI + SaaS (Nápady)": ["INBOX (Nové AI/SaaS nápady) (Nápady - AI + SaaS (Nápady))", "URGENT !!! (Validácia AI/SaaS) (Nápady - AI + SaaS (Nápady))", "Na Zváženie / Validácia (Nápady - AI + SaaS (Nápady))", "Rozpracované Koncepty (Nápady - AI + SaaS (Nápady))", "Zaparkované / Archív (Nápady - AI + SaaS (Nápady))"],
          "Nápady - Eventy (Nápady)": ["INBOX (Nové nápady na eventy) (Nápady - Eventy (Nápady))", "URGENT !!! (Validácia eventov) (Nápady - Eventy (Nápady))", "Na Zváženie / Validácia (Nápady - Eventy (Nápady))", "Rozpracované Koncepty (Nápady - Eventy (Nápady))", "Zaparkované / Archív (Nápady - Eventy (Nápady))"],
          "Nápady - Kurzy & Workshopy (Nápady)": ["INBOX (Nové nápady na kurzy) (Nápady - Kurzy & Workshopy (Nápady))", "URGENT !!! (Validácia kurzov) (Nápady - Kurzy & Workshopy (Nápady))", "Na Zváženie / Validácia (Nápady - Kurzy & Workshopy (Nápady))", "Rozpracované Koncepty (Nápady - Kurzy & Workshopy (Nápady))", "Zaparkované / Archív (Nápady - Kurzy & Workshopy (Nápady))"],
          "Nápady - Firmy (Nápady)": ["INBOX (Nové nápady pre firmy) (Nápady - Firmy (Nápady))", "URGENT !!! (Validácia pre firmy) (Nápady - Firmy (Nápady))", "Na Zváženie / Validácia (Nápady - Firmy (Nápady))", "Rozpracované Koncepty (Nápady - Firmy (Nápady))", "Zaparkované / Archív (Nápady - Firmy (Nápady))"],
          "Nápady - Hry (Nápady)": ["INBOX (Nové nápady na hry) (Nápady - Hry (Nápady))", "URGENT !!! (Validácia hier) (Nápady - Hry (Nápady))", "Na Zváženie / Validácia (Nápady - Hry (Nápady))", "Rozpracované Koncepty (Nápady - Hry (Nápady))", "Zaparkované / Archív (Nápady - Hry (Nápady))"],
          "Nápady - Umenie (Nápady)": ["INBOX (Nové nápady na umenie) (Nápady - Umenie (Nápady))", "URGENT !!! (Validácia umenia) (Nápady - Umenie (Nápady))", "Na Zváženie / Validácia (Nápady - Umenie (Nápady))", "Rozpracované Koncepty (Nápady - Umenie (Nápady))", "Zaparkované / Archív (Nápady - Umenie (Nápady))"],
          "Nápady - Ostatné (Nápady)": ["INBOX (Nové ostatné nápady) (Nápady - Ostatné (Nápady))", "URGENT !!! (Validácia ostatných) (Nápady - Ostatné (Nápady))", "Na Zváženie / Validácia (Nápady - Ostatné (Nápady))", "Rozpracované Koncepty (Nápady - Ostatné (Nápady))", "Zaparkované / Archív (Nápady - Ostatné (Nápady))"]
      },
      "Social Media & Marketing (Marketing)": {
          "ZHRNUTIE (Marketing)": ["INBOX (ZHRNUTIE (Marketing))", "URGENT !!! (ZHRNUTIE (Marketing))", "KOMUNIKÁCIA (ZHRNUTIE (Marketing))", "OSTATNÉ (ZHRNUTIE (Marketing))"],
          "Stratégia & Branding - Centrálny (Marketing)": ["INBOX (Stratégia & Branding - Centrálny (Marketing))", "URGENT !!! (Stratégia & Branding - Centrálny (Marketing))", "Stratégia (Celková) (Stratégia & Branding - Centrálny (Marketing))", "Brand & Vizuálna Identita (Stratégia & Branding - Centrálny (Marketing))", "Cieľové Skupiny (Stratégia & Branding - Centrálny (Marketing))", "Ostatné (Stratégia & Branding - Centrálny (Marketing))"],
          "Web Stránky - Správa & Obsah (Marketing)": ["INBOX (Web Stránky - Správa & Obsah (Marketing))", "URGENT !!! (Web Stránky - Správa & Obsah (Marketing))", "Obsah & SEO (Web Stránky - Správa & Obsah (Marketing))", "Dizajn & UX (Web Stránky - Správa & Obsah (Marketing))", "Technická Správa (Web Stránky - Správa & Obsah (Marketing))", "Analytika & Optimalizácie (Web Stránky - Správa & Obsah (Marketing))", "Ostatné (Web Stránky - Správa & Obsah (Marketing))"],
          "Sociálne Médiá - Správa & Obsah (Marketing)": ["INBOX (Sociálne Médiá - Správa & Obsah (Marketing))", "URGENT !!! (Sociálne Médiá - Správa & Obsah (Marketing))", "Plán Obsahu (Sociálne Médiá - Správa & Obsah (Marketing))", "Tvorba Obsahu (Grafika, Video, Text) (Sociálne Médiá - Správa & Obsah (Marketing))", "Správa Kanálov & Komunita (Sociálne Médiá - Správa & Obsah (Marketing))", "Reklama (SocMedia) (Sociálne Médiá - Správa & Obsah (Marketing))", "Analytika (Sociálne Médiá - Správa & Obsah (Marketing))", "Ostatné (Sociálne Médiá - Správa & Obsah (Marketing))"],
          "Email Marketing & CRM Lite (Marketing)": ["INBOX (Email Marketing & CRM Lite (Marketing))", "URGENT !!! (Email Marketing & CRM Lite (Marketing))", "Správa Kontaktov (Email Marketing & CRM Lite (Marketing))", "Tvorba Kampaní (Email Marketing & CRM Lite (Marketing))", "Automatizácia (Email Marketing & CRM Lite (Marketing))", "Analytika (Email Marketing & CRM Lite (Marketing))", "Ostatné (Email Marketing & CRM Lite (Marketing))"],
          "Reklama & Kampane - Centrálne (Marketing)": ["INBOX (Reklama & Kampane - Centrálne (Marketing))", "URGENT !!! (Reklama & Kampane - Centrálne (Marketing))", "Tvorba Reklamných Materiálov (Reklama & Kampane - Centrálne (Marketing))", "Správa Kampaní (FB/Google Ads) (Reklama & Kampane - Centrálne (Marketing))", "Budget & Optimalizácia (Reklama & Kampane - Centrálne (Marketing))", "Vyhodnotenie (Reklama & Kampane - Centrálne (Marketing))", "Ostatné (Reklama & Kampane - Centrálne (Marketing))"],
          "Marketingové Nástroje & Optimalizácie (Marketing)": ["INBOX (Marketingové Nástroje & Optimalizácie (Marketing))", "URGENT !!! (Marketingové Nástroje & Optimalizácie (Marketing))", "Optimalizácie Procesov (Marketingové Nástroje & Optimalizácie (Marketing))", "Automatizácia Marketingu (Marketingové Nástroje & Optimalizácie (Marketing))", "Affiliate & Partnerstvá (Nástroje) (Marketingové Nástroje & Optimalizácie (Marketing))", "Ostatné (Marketingové Nástroje & Optimalizácie (Marketing))"],
          "Produkty & Služby - Marketingový pohľad (Marketing)": ["INBOX (Produkty & Služby - Marketingový pohľad (Marketing))", "URGENT !!! (Produkty & Služby - Marketingový pohľad (Marketing))", "Produktové Portfólio (Prehľad) (Produkty & Služby - Marketingový pohľad (Marketing))", "Uvedenie na Trh (Go-to-Market) (Produkty & Služby - Marketingový pohľad (Marketing))", "Cenotvorba & Balíčky (Produkty & Služby - Marketingový pohľad (Marketing))", "Ostatné (Produkty & Služby - Marketingový pohľad (Marketing))"]
      },
      "Cestovanie & Logistika (Cestovanie)": {
          "ZHRNUTIE (Cestovanie)": ["INBOX (ZHRNUTIE (Cestovanie))", "URGENT !!! (ZHRNUTIE (Cestovanie))", "KOMUNIKÁCIA (ZHRNUTIE (Cestovanie))", "OSTATNÉ (ZHRNUTIE (Cestovanie))"],
          "Plánovanie Ciest - Pracovné/Osobné (Cestovanie)": ["INBOX (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))", "URGENT !!! (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))", "Nápady (Destinácie) (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))", "Plánovanie Itinerárov (Konkrétne cesty) (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))", "Kontakty & Miesta (Počas Cesty) (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))", "Ostatné (Plánovanie Ciest - Pracovné/Osobné (Cestovanie))"],
          "Logistika Cestovania - Booking & Admin (Cestovanie)": ["INBOX (Logistika Cestovania - Booking & Admin (Cestovanie))", "URGENT !!! (Logistika Cestovania - Booking & Admin (Cestovanie))", "Doprava (Booking) (Logistika Cestovania - Booking & Admin (Cestovanie))", "Ubytovanie (Booking) (Logistika Cestovania - Booking & Admin (Cestovanie))", "Dokumenty & Poistenie (Logistika Cestovania - Booking & Admin (Cestovanie))", "Balenie & Príprava (Logistika Cestovania - Booking & Admin (Cestovanie))", "Ostatné (Logistika Cestovania - Booking & Admin (Cestovanie))"]
      },
      "Znalostná Báza & Výskum (Arzenál)": {
          "ZHRNUTIE (Arzenál)": ["INBOX (ZHRNUTIE (Arzenál))", "URGENT !!! (ZHRNUTIE (Arzenál))", "KOMUNIKÁCIA (ZHRNUTIE (Arzenál))", "OSTATNÉ (ZHRNUTIE (Arzenál))"],
          "Štúdium & Výskum - Tematický (Arzenál)": ["INBOX (Štúdium & Výskum - Tematický (Arzenál))", "URGENT !!! (Štúdium & Výskum - Tematický (Arzenál))", "Aktívny Výskum / Štúdium (Štúdium & Výskum - Tematický (Arzenál))", "Nápady na Výskum (Štúdium & Výskum - Tematický (Arzenál))", "Zdroje (Knihy, Kurzy...) (Štúdium & Výskum - Tematický (Arzenál))", "Ostatné (Štúdium & Výskum - Tematický (Arzenál))"],
          "Organizácia Vedomostí - PKM (Arzenál)": ["INBOX (Organizácia Vedomostí - PKM (Arzenál))", "URGENT !!! (Organizácia Vedomostí - PKM (Arzenál))", "Spracovanie Poznámok (Organizácia Vedomostí - PKM (Arzenál))", "Prepojenie & Syntéza (Organizácia Vedomostí - PKM (Arzenál))", "Správa Nástrojov (Diarium, Keep...) (Organizácia Vedomostí - PKM (Arzenál))", "Review & Údržba (Organizácia Vedomostí - PKM (Arzenál))", "Ostatné (Organizácia Vedomostí - PKM (Arzenál))"]
      },
      "Crypto (Crypto)": {
          "ZHRNUTIE (Crypto)": ["INBOX (ZHRNUTIE (Crypto))", "URGENT !!! (ZHRNUTIE (Crypto))", "KOMUNIKÁCIA (ZHRNUTIE (Crypto))", "OSTATNÉ (ZHRNUTIE (Crypto))"],
          "Crypto Manažment (Crypto)": ["INBOX (Crypto Manažment (Crypto))", "URGENT !!! (Crypto Manažment (Crypto))", "Komunikácia (Crypto) (Crypto Manažment (Crypto))", "Analýza & Stratégia (Crypto Manažment (Crypto))", "Trading & Investície (Záznamy) (Crypto Manažment (Crypto))", "Nástroje & Peňaženky (Správa) (Crypto Manažment (Crypto))", "Optimalizácie (Procesy, Boty) (Crypto Manažment (Crypto))", "Admin & Dane (Crypto) (Crypto Manažment (Crypto))", "Ostatné (Crypto Manažment (Crypto))"]
      },
      "Organizovanie Eventov (Eventy)": {
          "ZHRNUTIE (Eventy)": ["INBOX (ZHRNUTIE (Eventy))", "URGENT !!! (ZHRNUTIE (Eventy))", "KOMUNIKÁCIA (ZHRNUTIE (Eventy))", "OSTATNÉ (ZHRNUTIE (Eventy))"],
          "Nápady na Eventy - Inkubátor (Eventy)": ["INBOX (Nové nápady na eventy - všetky typy) (Nápady na Eventy - Inkubátor (Eventy))", "URGENT !!! (Validácia / Rýchle rozhodnutie) (Nápady na Eventy - Inkubátor (Eventy))", "Na Zváženie / Validácia Konceptu (Nápady na Eventy - Inkubátor (Eventy))", "Rozpracované Koncepty (Program, Cieľovka, Miesto...) (Nápady na Eventy - Inkubátor (Eventy))", "Hrubý Odhad Budgetu & Životaschopnosť (Nápady na Eventy - Inkubátor (Eventy))", "Zaparkované / Archív (Nápady na eventy) (Nápady na Eventy - Inkubátor (Eventy))"],
          "Event Manažment - Plánovanie & Realizácia (Eventy)": ["INBOX (Nové úlohy pre schválené eventy) (Event Manažment - Plánovanie & Realizácia (Eventy))", "URGENT !!! (Úlohy pre eventy) (Event Manažment - Plánovanie & Realizácia (Eventy))", "Komunikácia (Partneri, Účastníci, Dodávatelia) (Event Manažment - Plánovanie & Realizácia (Eventy))", "Detailné Plánovanie (Program, Harmonogram) (Event Manažment - Plánovanie & Realizácia (Eventy))", "Logistika (Miesto, Technika, Catering...) (Event Manažment - Plánovanie & Realizácia (Eventy))", "Marketing & Promovanie (Realizácia) (Event Manažment - Plánovanie & Realizácia (Eventy))", "Realizácia & Koordinácia (Na mieste) (Event Manažment - Plánovanie & Realizácia (Eventy))", "Spätná Väzba & Vyhodnotenie (Event Manažment - Plánovanie & Realizácia (Eventy))", "Budget & Fakturácia (Eventov) (Event Manažment - Plánovanie & Realizácia (Eventy))", "Ostatné (Event Manažment - Plánovanie & Realizácia (Eventy))"],
          "Plánovanie Retreatov (Eventy)": ["INBOX (Úlohy pre schválené retreaty) (Plánovanie Retreatov (Eventy))", "URGENT !!! (Retreaty) (Plánovanie Retreatov (Eventy))", "Detailný Koncept & Program (Retreat) (Plánovanie Retreatov (Eventy))", "Miesto & Logistika (Výber, Booking) (Plánovanie Retreatov (Eventy))", "Partneri & Tím (Retreat) (Plánovanie Retreatov (Eventy))", "Marketing & Účastníci (Realizácia) (Plánovanie Retreatov (Eventy))", "Budget & Financovanie (Detailné) (Plánovanie Retreatov (Eventy))", "Realizácia & Spätná Väzba (Plánovanie Retreatov (Eventy))", "Ostatné (Plánovanie Retreatov (Eventy))"],
          "Conscious / Komunitné Eventy (Eventy)": ["INBOX (Úlohy pre schválené komunitné eventy) (Conscious / Komunitné Eventy (Eventy))", "URGENT !!! (Komunitné Eventy) (Conscious / Komunitné Eventy (Eventy))", "Koncept & Program (Detailné) (Conscious / Komunitné Eventy (Eventy))", "Miesto & Technika (Conscious / Komunitné Eventy (Eventy))", "Komunita & Pozvánky (Conscious / Komunitné Eventy (Eventy))", "Realizácia & Atmosféra (Conscious / Komunitné Eventy (Eventy))", "Ostatné (Conscious / Komunitné Eventy (Eventy))"]
      }
  };
  
  
  export const TASK_FIELD_CONFIG: Record<string, TaskFieldConfig> = {
    // --- Core Fields (Based on Documentation) ---
    task_id: {
      label: 'Task ID',
      type: 'text',
      editable: true,
      description: 'Unikátny identifikátor úlohy (vlastný systém). AI ho môže generovať alebo čítať.',
      filterable: true
    },
    name: {
      label: 'Name',
      type: 'text',
      editable: true, 
      description: 'Základný identifikátor úlohy. AI ho číta, nemení. Začína akčným slovesom.',
      filterable: true
    },
    description: {
      label: 'Description',
      type: 'textarea', 
      editable: true,
      description: 'Úložisko pre FINÁLNY VÝSLEDOK práce AI Agenta (text, linky, kód...).',
      filterable: true
    },
    notes: {
      label: 'Notes',
      type: 'textarea',
      editable: true,
      description: 'HLAVNÝ INFORMAČNÝ PANEL. Generuje a aktualizuje AI (stav, kroky, výstup...). TY čítaš.',
      filterable: true
    },
    task_comments: {
      label: 'Task Comments',
      type: 'textarea', // UI bude musieť renderovať ako chat/zoznam komentárov
      editable: true,
      description: 'Primárny komunikačný kanál medzi TEBOU a AI (chat).',
      filterable: true
    },
    portfolio: {
        label: 'Portfolio',
        type: 'multi-select', // Changed back
        multi: true,          // Added back
        options: [
          'GLOBAL (Global)', 'Osobný Život & Rozvoj (Osobné & Rozvoj)', 'Pracovný Život & Administratíva (Práca & Admin)',
          'Koučing & Terapia (Koučing & Terapia)', 'Kurzy & Workshopy (Kurzy & Workshopy)', 'DJing (DJing)',
          'Umenie (Umenie)', 'AI & Technológie (AI & Tech)', 'Projekty & Produkty (Nápady)',
          'Social Media & Marketing (Marketing)', 'Cestovanie & Logistika (Cestovanie)', 'Znalostná Báza & Výskum (Arzenál)',
          'Crypto (Crypto)', 'Organizovanie Eventov (Eventy)'
        ],
        editable: true,
        description: 'Hlavná strategická oblasť úlohy. Prvá hodnota je primárna. AI navrhuje/potvrdzuje.',
        filterable: true
    },
    project: {
      label: 'Project',
      type: 'multi-select', // Changed back
      multi: true,          // Added back
      getOptions: (selectedPortfolios?: string[] | undefined, selectedProjects?: string[] | undefined) => { // Accepts string[]
          const pfArr = selectedPortfolios ? selectedPortfolios.map(s => s.trim()).filter(Boolean) : [];
          const prArr = selectedProjects ? selectedProjects.map(s => s.trim()).filter(Boolean) : [];
          if (!pfArr.length) return Object.values(PORTFOLIO_PROJECT_SECTION).flatMap(p => Object.keys(p));
          let projectsList: string[] = pfArr.flatMap(pf => PORTFOLIO_PROJECT_SECTION[pf] ? Object.keys(PORTFOLIO_PROJECT_SECTION[pf]) : []);
          return Array.from(new Set(projectsList));
      },
      editable: true,
      description: 'Konkrétny projekt/iniciatíva. Možnosti filtrované podľa portfólia. Prvá hodnota je primárna. AI navrhuje/potvrdzuje.',
      filterable: true
    },
    section: {
      label: 'Section',
      type: 'multi-select', // Changed back
      multi: true,          // Added back
      getOptions: (selectedPortfolios?: string[] | undefined, selectedProjects?: string[] | undefined) => { // Accepts string[]
          const pfArr = selectedPortfolios ? selectedPortfolios.map(s => s.trim()).filter(Boolean) : [];
          const prArr = selectedProjects ? selectedProjects.map(s => s.trim()).filter(Boolean) : [];
          if (!pfArr.length && !prArr.length) return Object.values(PORTFOLIO_PROJECT_SECTION).flatMap(p => Object.values(p)).flat();
 
          let sectionsList: string[] = [];
          pfArr.forEach(pf => {
              const portfolioData = PORTFOLIO_PROJECT_SECTION[pf];
              if (!portfolioData) return;
              if (prArr.length) {
                  prArr.forEach(pr => {
                      if (portfolioData[pr]) sectionsList.push(...portfolioData[pr]);
                  });
              } else {
                  Object.values(portfolioData).forEach(arr => sectionsList.push(...arr));
              }
          });
          return Array.from(new Set(sectionsList));
      },
      editable: true,
      description: 'Tematická sekcia v rámci projektu. Možnosti filtrované podľa projektu. Prvá hodnota je primárna. AI navrhuje/potvrdzuje.',
      filterable: true
    },
    parent_task: {
        label: 'Parent Task',
        type: 'text', // Názov rodičovskej úlohy
        editable: true,
        description: 'Čitateľný názov rodičovskej úlohy (ak je podúlohou).',
        filterable: true
    },
    parent_task_id: {
        label: 'Parent Task ID',
        type: 'text', // ID rodičovskej úlohy
        editable: true,
        description: 'Systémové ID nadradenej úlohy (ak je podúlohou).',
        filterable: true
    },
     subtasks_for_user: {
        label: 'Subtasks (for user)',
        type: 'textarea', // Zoznam krokov ako text
        editable: true,
        description: 'Kroky (5-7), ktoré máš vykonať TY. AI generuje. Uložené ako text.',
        filterable: true    
    },
    subtasks_for_ai: {
        label: 'Subtasks (for AI)',
        type: 'textarea', // Zoznam krokov AI ako text
        editable: true,
        description: 'Plánované kroky AI Agenta pre túto úlohu. Uložené ako text.',
        filterable: true
    },
     subtasks_in_system: {
        label: 'Subtasks (in System)',
        type: 'textarea', // Zoznam názvov podúloh ako text
        editable: true,
        description: 'Názvy úloh, ktoré majú túto úlohu ako Parent Task. AI/Systém vyplňuje.',
        filterable: true
     },
     subtasks_id_in_system: {
        label: 'Subtasks ID (in System)',
        type: 'textarea', // Zoznam ID podúloh ako text
        editable: true,
        description: 'Task ID úloh, ktoré majú túto úlohu ako Parent Task. AI/Systém vyplňuje.',
        filterable: true
     },
     ai_brainstorm_ideas_on_how_it_can_help_me: {
        label: 'AI Brainstorm Ideas on How It Can Help Me',
        type: 'textarea', // Zoznam nápadov ako text
        editable: true,
        description: 'Návrhy AI (10), ako ti môže ďalej pomôcť. AI generuje.',
        filterable: true
     },
     dependents: {
        label: 'Dependents',
        type: 'textarea', // Zoznam názvov ako text
        editable: true,
        description: 'Názvy úloh, ktoré musia byť dokončené PRED touto úlohou.',
        filterable: true
     },
     dependents_id: {
        label: 'Dependents ID',
        type: 'textarea', // Zoznam ID ako text
        editable: true,
        description: 'Task ID úloh, ktoré musia byť dokončené PRED touto úlohou.',
        filterable: true
     },
     outgoing_dependents: {
        label: 'Outgoing Dependents',
        type: 'textarea', // Zoznam názvov ako text
        editable: true,
        description: 'Názvy úloh, ktoré čakajú na dokončenie TEJTO úlohy.',
        filterable: true
     },
     outgoing_dependents_id: {
        label: 'Outgoing Dependents ID',
        type: 'textarea', // Zoznam ID ako text
        editable: true,
        description: 'Task ID úloh, ktoré čakajú na dokončenie TEJTO úlohy.',
        filterable: true
     },
    tags: {
        label: 'Tags',
        type: 'multi-select',
        multi: true,
        options: [ /* FULL LIST OF TAGS */
            "#Typ:Kreatíva", "#Typ:Kreatíva/Brainstorming", "#Typ:Kreatíva/Brainstorming/Individuálny", "#Typ:Kreatíva/Brainstorming/Tímový", "#Typ:Kreatíva/Brainstorming/MindMapping", "#Typ:Kreatíva/Konceptualizácia", "#Typ:Kreatíva/Konceptualizácia/VíziaProjektu", "#Typ:Kreatíva/Konceptualizácia/DefinovanieProblému", "#Typ:Kreatíva/Konceptualizácia/NávrhRiešenia", "#Typ:Kreatíva/Písanie", "#Typ:Kreatíva/Písanie/Copywriting", "#Typ:Kreatíva/Písanie/ContentWriting", "#Typ:Kreatíva/Písanie/CreativeWriting", "#Typ:Kreatíva/Písanie/Script", "#Typ:Kreatíva/Písanie/SocMediaPríspevok", "#Typ:Kreatíva/Písanie/EmailNewsletter", "#Typ:Kreatíva/Písanie/Technické", "#Typ:Kreatíva/Písanie/Akademické", "#Typ:Kreatíva/Písanie/Kniha", "#Typ:Kreatíva/Písanie/Žurnalistika", "#Typ:Kreatíva/Písanie/Preklad", "#Typ:Kreatíva/Písanie/KorektúraEditácia", "#Typ:Kreatíva/Písanie/GrantováŽiadosť", "#Typ:Kreatíva/Písanie/TvorbaPonuky", "#Typ:Kreatíva/Dizajn", "#Typ:Kreatíva/Dizajn/Grafický", "#Typ:Kreatíva/Dizajn/Web", "#Typ:Kreatíva/Dizajn/UI-UX", "#Typ:Kreatíva/Dizajn/Prezentácia", "#Typ:Kreatíva/Dizajn/Šablóny", "#Typ:Kreatíva/Dizajn/Infografika", "#Typ:Kreatíva/Dizajn/Ilustrácia", "#Typ:Kreatíva/Dizajn/Animácia", "#Typ:Kreatíva/Dizajn/3DModelovanie", "#Typ:Kreatíva/Dizajn/ExperienceDesign", "#Typ:Kreatíva/TvorbaObsahu", "#Typ:Kreatíva/TvorbaObsahu/VideoNatáčanie", "#Typ:Kreatíva/TvorbaObsahu/VideoStrih", "#Typ:Kreatíva/TvorbaObsahu/VideoPostprodukcia", "#Typ:Kreatíva/TvorbaObsahu/AudioNahrávanie", "#Typ:Kreatíva/TvorbaObsahu/AudioEditácia", "#Typ:Kreatíva/TvorbaObsahu/AudioMixMastering", "#Typ:Kreatíva/TvorbaObsahu/Fotografovanie", "#Typ:Kreatíva/TvorbaObsahu/FotoEditácia", "#Typ:Kreatíva/TvorbaObsahu/PodcastProdukcia", "#Typ:Kreatíva/TvorbaObsahu/Livestreaming", "#Typ:Kreatíva/Hudba", "#Typ:Kreatíva/Hudba/MixovanieDJ", "#Typ:Kreatíva/Hudba/PrípravaSetuDJ", "#Typ:Kreatíva/Hudba/ProdukciaBeatmaking", "#Typ:Kreatíva/Hudba/Kompozícia", "#Typ:Kreatíva/Hudba/Aranžovanie", "#Typ:Kreatíva/Hudba/SoundDesign", "#Typ:Kreatíva/Umenie", "#Typ:Kreatíva/Umenie/PerformancePríprava", "#Typ:Kreatíva/Umenie/PerformanceRealizácia", "#Typ:Kreatíva/Umenie/Choreografia", "#Typ:Kreatíva/Umenie/MaľbaKresba", "#Typ:Kreatíva/Umenie/SochaObjekt", "#Typ:Kreatíva/Umenie/Inštalácia", "#Typ:Kreatíva/Umenie/DigitálneUmenie", "#Typ:Kreatíva/Vývoj", "#Typ:Kreatíva/Vývoj/Frontend", "#Typ:Kreatíva/Vývoj/Backend", "#Typ:Kreatíva/Vývoj/Fullstack", "#Typ:Kreatíva/Vývoj/MobilnáApp", "#Typ:Kreatíva/Vývoj/WebApp", "#Typ:Kreatíva/Vývoj/NoCode-LowCode", "#Typ:Kreatíva/Vývoj/SkriptovanieAutomatizácia", "#Typ:Kreatíva/Vývoj/DatabázaNávrh", "#Typ:Kreatíva/Vývoj/APIDizajnIntegrácia", "#Typ:Kreatíva/Vývoj/Debugging", "#Typ:Kreatíva/Vývoj/CodeReview", "#Typ:Kreatíva/HraDizajn", "#Typ:Kreatíva/HraDizajn/Koncept", "#Typ:Kreatíva/HraDizajn/Mechaniky", "#Typ:Kreatíva/HraDizajn/LevelDizajn", "#Typ:Kreatíva/HraDizajn/Narativ", "#Typ:Kreatíva/HraDizajn/Playtesting", "#Typ:Kreatíva/ProduktDizajn", "#Typ:Kreatíva/KurikulumDizajn",
            "#Typ:Operatíva", "#Typ:Operatíva/VykonávaniePostupu", "#Typ:Operatíva/RutinnáÚdržba", "#Typ:Operatíva/PrípravaMateriálov", "#Typ:Operatíva/PrípravaPriestoru", "#Typ:Operatíva/NastavenieTechniky", "#Typ:Operatíva/PublikovanieObsahu", "#Typ:Operatíva/AktualizáciaDát", "#Typ:Operatíva/ImplementáciaSystému", "#Typ:Operatíva/TestovanieFunkčnosti", "#Typ:Operatíva/SpracovanieDátManual", "#Typ:Operatíva/SpracovanieObjednávky", "#Typ:Operatíva/ZadávaniePríkazovAI", "#Typ:Operatíva/Moderovanie", "#Typ:Operatíva/Transkripcia",
            "#Typ:Admin", "#Typ:Admin/ByrokraciaÚrady", "#Typ:Admin/FakturáciaVystavovanie", "#Typ:Admin/FakturáciaPrijímanie", "#Typ:Admin/PlatbyOdosielanie", "#Typ:Admin/PlatbyPrijímanieKontrola", "#Typ:Admin/BudgetingPlánovanie", "#Typ:Admin/BudgetingSledovanie", "#Typ:Admin/PlánovanieČasové", "#Typ:Admin/PlánovanieZdrojov", "#Typ:Admin/OrganizáciaSúborov", "#Typ:Admin/OrganizáciaEmailov", "#Typ:Admin/OrganizáciaAsana", "#Typ:Admin/ReportingTvorba", "#Typ:Admin/ReportingAnalýza", "#Typ:Admin/EvidenciaZáznamov", "#Typ:Admin/ArchiváciaDigitálna", "#Typ:Admin/ArchiváciaFyzická", "#Typ:Admin/ObjednávanieNákup", "#Typ:Admin/LogistikaPlánovanie", "#Typ:Admin/LogistikaKoordinácia", "#Typ:Admin/PrávneZáležitosti", "#Typ:Admin/HR", "#Typ:Admin/SprávaProjektu",
            "#Typ:Komunikácia", "#Typ:Komunikácia/EmailPísanie", "#Typ:Komunikácia/EmailOdpovedanie", "#Typ:Komunikácia/EmailTriedenie", "#Typ:Komunikácia/TelefonátAktívny", "#Typ:Komunikácia/TelefonátPasívny", "#Typ:Komunikácia/MeetingOnline", "#Typ:Komunikácia/MeetingOffline", "#Typ:Komunikácia/MeetingPríprava", "#Typ:Komunikácia/MeetingZápis", "#Typ:Komunikácia/OdpovedanieSocMedia", "#Typ:Komunikácia/OdpovedanieChat", "#Typ:Komunikácia/NetworkingAktívny", "#Typ:Komunikácia/NetworkingPasívny", "#Typ:Komunikácia/PrezentovaniePrednášanie", "#Typ:Komunikácia/FacilitáciaWorkshop", "#Typ:Komunikácia/FacilitáciaDiskusia", "#Typ:Komunikácia/FeedbackPoskytovanie", "#Typ:Komunikácia/FeedbackPrijímanie", "#Typ:Komunikácia/VyjednávanieRokovanie", "#Typ:Komunikácia/PodporaKlienta", "#Typ:Komunikácia/KrízováKomunikácia", "#Typ:Komunikácia/InternáTímová",
            "#Typ:Research", "#Typ:Research/PrieskumTrhuKvalitatívny", "#Typ:Research/PrieskumTrhuKvantitatívny", "#Typ:Research/AnalýzaKonkurencie", "#Typ:Research/HľadanieInfoOnline", "#Typ:Research/HľadanieInfoOffline", "#Typ:Research/HľadanieZdrojov", "#Typ:Research/AnalýzaDátŠtatistická", "#Typ:Research/AnalýzaDátKvalitatívna", "#Typ:Research/ValidáciaHypotéz", "#Typ:Research/ValidáciaNápadov", "#Typ:Research/PrieskumPoužívateľovUX", "#Typ:Research/MonitoringMédiíSocSietí", "#Typ:Research/MonitoringTrendov", "#Typ:Research/SWOTAnalýza", "#Typ:Research/ForenznáAnalýza",
            "#Typ:Štúdium", "#Typ:Štúdium/KurzOnlineSledovanie", "#Typ:Štúdium/KurzOnlineÚlohy", "#Typ:Štúdium/KurzOfflineÚčasť", "#Typ:Štúdium/KnihaČítanie", "#Typ:Štúdium/KnihaPoznámky", "#Typ:Štúdium/ČlánokBlogČítanie", "#Typ:Štúdium/VideoPodcastPočúvanieSledovanie", "#Typ:Štúdium/PraxNácvik", "#Typ:Štúdium/AplikáciaTeórie", "#Typ:Štúdium/ReflexiaUčenia", "#Typ:Štúdium/MentoringAktívny", "#Typ:Štúdium/SupervíziaPasívna", "#Typ:Štúdium/PeerLearning", "#Typ:Štúdium/VýučbaUčenieIných",
            "#Typ:FyzickáPráca", "#Typ:FyzickáPráca/ManuálnaOprava", "#Typ:FyzickáPráca/ManuálnaMontáž", "#Typ:FyzickáPráca/ManuálnaBalenie", "#Typ:FyzickáPráca/PohybCvičenie", "#Typ:FyzickáPráca/PohybTanec", "#Typ:FyzickáPráca/PohybŠport", "#Typ:FyzickáPráca/TransportAutom", "#Typ:FyzickáPráca/TransportMHD", "#Typ:FyzickáPráca/TransportBicykelChôdza", "#Typ:FyzickáPráca/NaMiesteEvent", "#Typ:FyzickáPráca/NaMiesteNákup", "#Typ:FyzickáPráca/NaMiesteVybavovanie", "#Typ:FyzickáPráca/ÚdržbaUpratovanie", "#Typ:FyzickáPráca/ÚdržbaZáhrada", "#Typ:FyzickáPráca/PrípravaJedla",
            "#Typ:RozhodovanieStrategické", "#Typ:RozhodovanieTaktické", "#Typ:KontrolaKvality", "#Typ:Revízia", "#Typ:Schvaľovanie", "#Typ:ČakanieNaInput", "#Typ:ČakanieNaVýsledok", "#Typ:OddychRegenerácia",
            "#Oblasť:Technológie/IntegrácieAPI",
            "#Oblasť:Nápady/Validácia", "#Oblasť:Nápady/Prototypovanie", "#Oblasť:Nápady/BiznisModel", "#Oblasť:Nápady/PodľaKategórie",
            "#Oblasť:Marketing/StratégiaBranding", "#Oblasť:Marketing/Web", "#Oblasť:Marketing/SocMedia", "#Oblasť:Marketing/SocMedia/Instagram", "#Oblasť:Marketing/SocMedia/Facebook", "#Oblasť:Marketing/SocMedia/YouTube", "#Oblasť:Marketing/SocMedia/LinkedIn", "#Oblasť:Marketing/Email", "#Oblasť:Marketing/Reklama", "#Oblasť:Marketing/Obsah", "#Oblasť:Marketing/SEO", "#Oblasť:Marketing/Analytika", "#Oblasť:Marketing/PR", "#Oblasť:Marketing/Affiliate", "#Oblasť:Marketing/Komunita",
            "#Oblasť:Cestovanie/Plánovanie", "#Oblasť:Cestovanie/Booking", "#Oblasť:Cestovanie/LogistikaNaMieste", "#Oblasť:Cestovanie/Pracovné", "#Oblasť:Cestovanie/Osobné", "#Oblasť:Cestovanie/Retreaty",
            "#Oblasť:Výskum/Tematický", "#Oblasť:Výskum/PKM", "#Oblasť:Výskum/OrganizáciaPoznámok", "#Oblasť:Výskum/Zdroje",
            "#Oblasť:Crypto/AnalýzaStratégia", "#Oblasť:Crypto/TradingInvestície", "#Oblasť:Crypto/NástrojePeňaženky", "#Oblasť:Crypto/DeFiStaking", "#Oblasť:Crypto/AdminDane", "#Oblasť:Crypto/Bezpečnosť",
            "#Oblasť:Eventy/Plánovanie", "#Oblasť:Eventy/Logistika", "#Oblasť:Eventy/MarketingPromovanie", "#Oblasť:Eventy/RealizáciaKoordinácia", "#Oblasť:Eventy/BudgetFakturácia", "#Oblasť:Eventy/RetreatyŠpecifické", "#Oblasť:Eventy/KomunitnéŠpecifické",
            // Téma / Špecifický Predmet
            "#Téma:Somatika", "#Téma:SomaticExperiencing", "#Téma:SomaticCoaching", "#Téma:SomaticMovement", "#Téma:Embodiment", "#Téma:BodyMindCentering", "#Téma:Feldenkrais", "#Téma:AlexanderTechnique", "#Téma:BodyMindTherapy", "#Téma:Interocepcia", "#Téma:Propriocepcia", "#Téma:PohybováInteligencia", "#Téma:NeuroplasticitaPohyb",
            "#Téma:NervovýSystém", "#Téma:PolyvagalTheory", "#Téma:AutonómnyNS", "#Téma:Sympatikus", "#Téma:Parasympatikus", "#Téma:Parasympatikus/VentrálnyVágus", "#Téma:Parasympatikus/DorzálnyVágus", "#Téma:ReguláciaNS", "#Téma:Koregulácia", "#Téma:VagusNerve", "#Téma:VagusNerve/Cvičenia", "#Téma:StresResponse", "#Téma:Trauma", "#Téma:Trauma/Vývojová", "#Téma:Trauma/Šoková", "#Téma:TraumaInformedApproach", "#Téma:Grounding", "#Téma:Orienting", "#Téma:Titration", "#Téma:Pendulation", "#Téma:Resourcing", "#Téma:WindowOfTolerance",
            "#Téma:Tanec", "#Téma:EcstaticDance", "#Téma:ContactImprovisation", "#Téma:AuthenticMovement", "#Téma:5Rhythms", "#Téma:MovementMedicine", "#Téma:SomaticDance", "#Téma:TherapeuticDance", "#Téma:Improvizácia", "#Téma:ExpresívneUmenia", "#Téma:Arteterapia", "#Téma:Muzikoterapia", "#Téma:Dramaterapia", "#Téma:PohybováTerapia",
            "#Téma:Mindfulness", "#Téma:Meditácia", "#Téma:Meditácia/Vedená", "#Téma:Meditácia/Pohybová", "#Téma:Psychoterapia", "#Téma:KoučingMetódy", "#Téma:TerapiaMetódy", "#Téma:VnútornýKritik", "#Téma:Hranice", "#Téma:EmocionálnaRegulácia", "#Téma:Úzkosť", "#Téma:Depresia", "#Téma:StresManagement", "#Téma:Vyhorenie", "#Téma:Reziliencia", "#Téma:SebahodnotaSebavedomie", "#Téma:MotiváciaCiele", "#Téma:NávykyZmenaSprávania", "#Téma:Komunikácia", "#Téma:Komunikácia/Nenásilná", "#Téma:Komunikácia/Asertivita", "#Téma:KonfliktRiešenie", "#Téma:VzťahyDynamika", "#Téma:AttachmentTheory", "#Téma:TranspersonálnaPsych", "#Téma:Archetypy", "#Téma:Šamanizmus", "#Téma:Psychadelika", "#Téma:CliftonStrengths",
            "#Téma:AI/LLM", "#Téma:AI/NLP", "#Téma:AI/ComputerVision", "#Téma:AI/MachineLearning", "#Téma:AI/DeepLearning", "#Téma:AI/PromptEngineering", "#Téma:AI/Agenti", "#Téma:AI/GeneratívneModely", "#Téma:AI/EtikaBias", "#Téma:Technológie/Cloud", "#Téma:Technológie/API", "#Téma:Technológie/Databázy", "#Téma:Technológie/WebDevFrameworks", "#Téma:Technológie/NoCodeLowCodePlatformy", "#Téma:Technológie/Verzionovanie", "#Téma:Technológie/CyberSecurity",
            "#Téma:Biznis/StratégiaPlánovanie", "#Téma:Biznis/MarketingFunnel", "#Téma:Biznis/PredajnéTechniky", "#Téma:Biznis/ProduktManažment", "#Téma:Biznis/ProjektManažment", "#Téma:Biznis/LeanStartup", "#Téma:Biznis/FinančnéModelovanie", "#Téma:Biznis/PrávoPrePodnikateľov", "#Téma:Marketing/ContentMarketing", "#Téma:Marketing/SocialMediaMarketing", "#Téma:Marketing/EmailMarketing", "#Téma:Marketing/SEO-SEM", "#Téma:Marketing/PPC", "#Téma:Marketing/Branding", "#Téma:Marketing/AnalytikaMeranie", "#Téma:Produktivita/GTD", "#Téma:Produktivita/Pomodoro", "#Téma:Produktivita/TimeBlocking", "#Téma:Produktivita/DeepWork", "#Téma:Produktivita/MinimalizmusDigital", "#Téma:Produktivita/PKM",
            "#Téma:Projekt/NewBeginnings", "#Téma:Projekt/LudUs", "#Téma:Projekt/UmenieAno", "#Téma:Projekt/AI_Duplikat", "#Téma:Projekt/AI_Manazer", "#Téma:Event/TEDx", "#Téma:Event/AnimaMundi", "#Téma:Event/Ecstatica", "#Téma:Event/SkenarKlinika", "#Téma:Event/ImpulzTanz", "#Téma:Event/WorkshopPraha", "#Téma:Event/Retreat2025", "#Téma:Miesto/Nitra", "#Téma:Miesto/Bratislava", "#Téma:Miesto/Praha", "#Téma:Miesto/Berlin", "#Téma:Miesto/Holandsko", "#Téma:Miesto/Turecko", "#Téma:Miesto/KohPhangan", "#Téma:Organizácia/WellBeClub", "#Téma:Organizácia/SOGA", "#Téma:Organizácia/FPU", "#Téma:Organizácia/ErasmusPlus",
            "#Téma:Gamifikácia", "#Téma:Storytelling", "#Téma:Hry", "#Téma:LARP", "#Téma:Outdoor", "#Téma:Príroda", "#Téma:CestovanieTyp", "#Téma:ExtrémneŠporty", "#Téma:KomunitaBudovanie", "#Téma:VzdelávanieDospelých", "#Téma:Prevencia", "#Téma:Integrácia", "#Téma:OsobnéFinancie", "#Téma:CryptoMeny", "#Téma:NFT", "#Téma:Metaverse",
            // Nástroj / Platforma
            "#Nástroj:Asana", "#Nástroj:GoogleWorkspace", "#Nástroj:Google/Gmail", "#Nástroj:Google/Calendar", "#Nástroj:Google/Drive", "#Nástroj:Google/Docs", "#Nástroj:Google/Sheets", "#Nástroj:Google/Slides", "#Nástroj:Google/Forms", "#Nástroj:Google/Keep", "#Nástroj:Microsoft365", "#Nástroj:Microsoft/Outlook", "#Nástroj:Microsoft/Word", "#Nástroj:Microsoft/Excel", "#Nástroj:Microsoft/PowerPoint", "#Nástroj:Microsoft/OneDrive", "#Nástroj:Notion", "#Nástroj:Evernote", "#Nástroj:Obsidian", "#Nástroj:Diarium", "#Nástroj:MindMeister", "#Nástroj:Xmind", "#Nástroj:MindNode", "#Nástroj:TogglTrack", "#Nástroj:Clockify", "#Nástroj:PomodoroApp", "#Nástroj:PasswordManager",
            "#Nástroj:ChatGPT", "#Nástroj:ChatGPT/GPT4", "#Nástroj:ChatGPT/GPT4o", "#Nástroj:ChatGPT/CustomGPT", "#Nástroj:ClaudeAI", "#Nástroj:GoogleGemini", "#Nástroj:Midjourney", "#Nástroj:StableDiffusion", "#Nástroj:Dall-E", "#Nástroj:Whisper", "#Nástroj:MakeCom", "#Nástroj:Zapier", "#Nástroj:IFTTT", "#Nástroj:AppleShortcuts", "#Nástroj:KeyboardMaestro", "#Nástroj:WebScraper", "#Nástroj:AI_WritingAssistant", "#Nástroj:AI_VideoGenerator", "#Nástroj:AI_AudioGenerator", "#Nástroj:AI_CodeAssistant",
            "#Nástroj:Slack", "#Nástroj:MicrosoftTeams", "#Nástroj:Discord", "#Nástroj:WhatsApp", "#Nástroj:Telegram", "#Nástroj:Signal", "#Nástroj:Zoom", "#Nástroj:GoogleMeet", "#Nástroj:Whereby",
            "#Nástroj:Instagram", "#Nástroj:Facebook", "#Nástroj:Facebook/AdsManager", "#Nástroj:YouTube", "#Nástroj:LinkedIn", "#Nástroj:TikTok", "#Nástroj:Pinterest", "#Nástroj:X", "#Nástroj:Mailchimp", "#Nástroj:Brevo", "#Nástroj:ActiveCampaign", "#Nástroj:GoogleAnalytics", "#Nástroj:GoogleSearchConsole", "#Nástroj:SEMrush", "#Nástroj:Ahrefs", "#Nástroj:Buffer", "#Nástroj:Hootsuite", "#Nástroj:Later", "#Nástroj:Canva", "#Nástroj:AdobeExpress", "#Nástroj:Figma", "#Nástroj:Webflow", "#Nástroj:Wix", "#Nástroj:Squarespace", "#Nástroj:WordPress", "#Nástroj:Hotjar", "#Nástroj:Clarity",
            "#Nástroj:AdobeCreativeCloud", "#Nástroj:Adobe/Photoshop", "#Nástroj:Adobe/Illustrator", "#Nástroj:Adobe/InDesign", "#Nástroj:Adobe/PremierePro", "#Nástroj:Adobe/AfterEffects", "#Nástroj:Adobe/Audition", "#Nástroj:Adobe/Lightroom", "#Nástroj:FinalCutPro", "#Nástroj:DaVinciResolve", "#Nástroj:CapCut", "#Nástroj:Procreate", "#Nástroj:Blender",
            "#Nástroj:Rekordbox", "#Nástroj:Serato", "#Nástroj:Traktor", "#Nástroj:AbletonLive", "#Nástroj:LogicPro", "#Nástroj:FLStudio", "#Nástroj:Beatport", "#Nástroj:Beatsource", "#Nástroj:SoundCloud", "#Nástroj:Spotify", "#Nástroj:Shazam", "#Nástroj:SoundHound", "#Nástroj:MixedInKey",
            "#Nástroj:VSCode", "#Nástroj:SublimeText", "#Nástroj:Git", "#Nástroj:GitHub", "#Nástroj:GitLab", "#Nástroj:Bitbucket", "#Nástroj:Docker", "#Nástroj:Terminal", "#Nástroj:CommandLine", "#Nástroj:Postman", "#Nástroj:BrowserDevTools", "#Nástroj:Bubble",
            "#Nástroj:MacBook", "#Nástroj:iPad", "#Nástroj:iPhone", "#Nástroj:AppleWatch", "#Nástroj:ExternýMonitor", "#Nástroj:Mikrofón", "#Nástroj:Kamera", "#Nástroj:Webkamera", "#Nástroj:DJController", "#Nástroj:Mixpult", "#Nástroj:Gramofóny", "#Nástroj:Slúchadlá", "#Nástroj:Reproduktory", "#Nástroj:Tlačiareň", "#Nástroj:Skener", "#Nástroj:HardDiskExterný",
            "#Nástroj:Kalendár", "#Nástroj:TabuľkovýProcesor", "#Nástroj:TextovýEditor", "#Nástroj:PrezentačnýNástroj", "#Nástroj:PísacíStroj", "#Nástroj:PapierPero",
            // Stav / Fáza
            "#Stav:Nápad", "#Stav:Inbox", "#Stav:NaValidáciu", "#Stav:Prieskum", "#Stav:Plánovanie", "#Stav:Konceptualizácia", "#Stav:PrípravaZdrojov", "#Stav:ČakáNaSchválenie",
            "#Stav:TvorbaVerzia1", "#Stav:TvorbaObsahu", "#Stav:VývojKódovanie", "#Stav:Implementácia", "#Stav:RealizáciaEventu", "#Stav:Nahrávanie", "#Stav:EditáciaPostprodukcia", "#Stav:Prebieha",
            "#Stav:NaRevíziu", "#Stav:ČakáNaFeedback", "#Stav:SpracovanieFeedbacku", "#Stav:Testovanie", "#Stav:KontrolaKvality",
            "#Stav:Blokované", "#Stav:Blokované/ChýbaInfo", "#Stav:Blokované/Závislosť", "#Stav:Blokované/TechnickýProblém", "#Stav:ČakáNaOsobu", "#Stav:ČakáNaAI", "#Stav:Pozastavené",
            "#Stav:NaPublikovanie", "#Stav:NaOdovzdanie", "#Stav:NaFakturáciu", "#Stav:HotovoČakáArchiváciu", "#Stav:Hotovo", "#Stav:Zrušené", "#Stav:Zaparkované",
            "#Stav:AI/Pripravená", "#Stav:AI/Pracuje", "#Stav:AI/VyžadujeAkciu", "#Stav:AI/GenerujeKroky", "#Stav:AI/Chyba",
            // Kontext / Miesto
            "#Kontext:PC", "#Kontext:PC/StabilnýInternet", "#Kontext:PC/ŠpecifickýSoftvér", "#Kontext:Mobil", "#Kontext:Mobil/iOS", "#Kontext:Mobil/Android", "#Kontext:Tablet", "#Kontext:Hodinky", "#Kontext:PapierPero", "#Kontext:BezZariadenia",
            "#Kontext:Domov", "#Kontext:Domov/Pracovňa", "#Kontext:Domov/Kuchyňa", "#Kontext:Domov/OddychováZóna", "#Kontext:Kancelária", "#Kontext:Vonku", "#Kontext:Vonku/Príroda", "#Kontext:Vonku/Mesto", "#Kontext:Vonku/Kaviareň", "#Kontext:NaCestách", "#Kontext:NaCestách/Offline", "#Kontext:VerejnéMiesto", "#Kontext:ŠpecifickéMiesto", "#Kontext:Miesto/Nitra", "#Kontext:Miesto/Bratislava", "#Kontext:Miesto/Praha", "#Kontext:Miesto/Berlin", "#Kontext:Miesto/WellBeClub", "#Kontext:Miesto/Telocvičňa", "#Kontext:Miesto/Ateliér",
            "#Kontext:HlbokáPráca", "#Kontext:NízkaEnergia", "#Kontext:VysokáEnergia", "#Kontext:KreatívnaNálada", "#Kontext:AnalytickáNálada", "#Kontext:SociálnaNálada", "#Kontext:PoČastiach", "#Kontext:KrátkaPrestávka",
            "#Kontext:Rýchlovka", "#Kontext:KrátkaÚloha", "#Kontext:StrednáÚloha", "#Kontext:DlháÚloha", "#Kontext:PočasDňa", "#Kontext:Večer", "#Kontext:Víkend",
            "#Kontext:VyžadujeInternet", "#Kontext:OfflineMožné", "#Kontext:VyžadujeTicho", "#Kontext:HlukNevadí", "#Kontext:VyžadujeSpoluprácu", "#Kontext:VyžadujeMateriály",
            // Spolupráca / Osoba
            "#ČakáNa:MenoPriezvisko", "#ČakáNa:Prezývka", "#ČakáNa:Klient", "#ČakáNa:Partner", "#ČakáNa:Dodávateľ", "#ČakáNa:Schválenie", "#ČakáNa:Feedback", "#ČakáNa:Informácie", "#ČakáNa:AI",
            "#Spolupráca:MenoPriezvisko", "#Spolupráca:Prezývka", "#Spolupráca:TímováÚloha", "#Spolupráca:Externista", "#Spolupráca:Partnerstvo", "#Delegované:MenoPriezvisko", "#Delegované:Prezývka", "#Delegované:AI", "#NaKontrolu:MenoPriezvisko", "#NaKontrolu:Prezývka", "#KonzultáciaPotrebná:MenoPriezvisko", "#KonzultáciaPotrebná:Prezývka",
            "#Pre:Klienta", "#Pre:Klienta/MenoPriezvisko", "#Pre:Klienta/Firma", "#Pre:ÚčastníkovKurzu", "#Pre:Komunitu", "#Pre:Partnera", "#Pre:Tím", "#Pre:Verejnosť", "#Pre:Mňa",
            "#Osoba:MaťoGrafik", "#Osoba:FredoErasmus", "#Osoba:JanaRegulova", "#Osoba:ZuzkaSpolupraca", "#Osoba:BenPeniaze", "#Osoba:SilviaKluce", "#Osoba:AnjaBinance", "#Osoba:TristanDJ", "#Organizácia:SkenarTerapia", "#Organizácia:WellBeClub", "#Organizácia:AMAEN", "#Organizácia:FPU", "#Organizácia:SOGA",
            // Časový Horizont / Priorita
            "#Priorita:Najvyššia", "#Priorita:KľúčováÚloha", "#Priorita:RýchlyVýsledok", "#Priorita:BlokujeIných", "#Priorita:PrípravaNaEvent", "#Priorita:PrevenciaProblému", "#Priorita:NízkaAleNutná",
            "#Čas:Dnes", "#Čas:TentoTýždeň", "#Čas:BudúciTýždeň", "#Čas:TentoMesiac", "#Čas:BudúciMesiac", "#Čas:TentoKvartál", "#Čas:TentoRok", "#Čas:DeadlinePevný", "#Čas:DeadlineFlexibilný", "#Čas:BezDeadlinu", "#Čas:Priebežne", "#Čas:Sezónne",
            "#ČasTrvanie:Mikro", "#ČasTrvanie:Krátke", "#ČasTrvanie:Stredné", "#ČasTrvanie:Dlhé", "#ČasTrvanie:VeľmiDlhé",
            "#Frekvencia:Denne", "#Frekvencia:Týždenne", "#Frekvencia:DvaTýždne", "#Frekvencia:Mesačne", "#Frekvencia:Kvartálne", "#Frekvencia:Ročne", "#Frekvencia:Nepravidelne / Podľa potreby",
            "#FázaDňa:Ráno", "#FázaDňa:Doobeda", "#FázaDňa:Poobede", "#FázaDňa:Večer", "#FázaDňa:Noc",
            // Zdroj Úlohy
            "#Zdroj:Email", "#Zdroj:Email/KonkrétnaOsoba", "#Zdroj:Email/Klient", "#Zdroj:Email/Partner", "#Zdroj:Email/NewsletterInšpirácia", "#Zdroj:Meeting", "#Zdroj:Meeting/Zápis", "#Zdroj:Meeting/KonkrétnyEvent", "#Zdroj:Telefonát", "#Zdroj:ChatSpráva", "#Zdroj:SociálneMédiá", "#Zdroj:OsobnýRozhovor",
            "#Zdroj:VlastnýNápad", "#Zdroj:Brainstorming", "#Zdroj:Reflexia", "#Zdroj:TýždennýReview", "#Zdroj:StrategickéPlánovanie", "#Zdroj:CieľProjektu", "#Zdroj:RutinaNávyk",
            "#Zdroj:PožiadavkaKlienta", "#Zdroj:PožiadavkaPartnera", "#Zdroj:PožiadavkaSpolupracovníka", "#Zdroj:Feedback", "#Zdroj:Formulár", "#Zdroj:VerejnáVýzva", "#Zdroj:LegislatívaZmena",
            "#Zdroj:Kniha", "#Zdroj:ČlánokBlog", "#Zdroj:Podcast", "#Zdroj:VideoPrednáška", "#Zdroj:KurzWorkshop", "#Zdroj:KonferenciaEvent", "#Zdroj:KonkurenciaInšpirácia",
            "#Zdroj:AsanaRule", "#Zdroj:ZapierMake", "#Zdroj:AI_AgentNávrh", "#Zdroj:SystémováNotifikácia", "#Zdroj:Template",
            "#Zdroj:NáhodnýObjav", "#Zdroj:ProblémChyba", "#Zdroj:PredchádzajúcaÚloha", "#Zdroj:DelegovanéOdoMňa",
            // Finančný Aspekt
            "#Fin:Príjem", "#Fin:Príjem/PriamyPredaj", "#Fin:Príjem/FakturáciaKlient", "#Fin:Príjem/PrijatáPlatba", "#Fin:Príjem/Affiliate", "#Fin:Príjem/GrantDotácia", "#Fin:Príjem/Pasívny", "#Fin:Príjem/DividendyÚroky", "#Fin:Výdavok", "#Fin:Výdavok/NákupTovarSlužba", "#Fin:Výdavok/SoftwarePredplatné", "#Fin:Výdavok/Hardvér", "#Fin:Výdavok/ReklamaMarketing", "#Fin:Výdavok/Cestovné", "#Fin:Výdavok/Prevádzkové", "#Fin:Výdavok/MzdyOdmeny", "#Fin:Výdavok/PoplatkyBankové", "#Fin:Výdavok/DaneOdvody", "#Fin:Výdavok/VráteniePeniazí", "#Fin:Investícia", "#Fin:Investícia/DoSeba", "#Fin:Investícia/DoBiznisu", "#Fin:Investícia/Finančná", "#Fin:PresunPeniazí",
            "#FinVeľkosť:Mikro", "#FinVeľkosť:Malá", "#FinVeľkosť:Stredná", "#FinVeľkosť:Veľká", "#FinVeľkosť:XL", "#FinVeľkosť:Variabilná",
            "#FinČas:Okamžite", "#FinČas:Krátkodobý", "#FinČas:Strednodobý", "#FinČas:Dlhodobý", "#FinČas:Pravidelný", "#FinČas:Neurčitý",
            "#FinStatus:ČakáNaPlatbu", "#FinStatus:Zaplatené", "#FinStatus:PoTermíne", "#FinStatus:NaFakturáciu", "#FinStatus:NaZaplatenie",
            "#Fin:Budgeting", "#Fin:CashflowRelevantné", "#Fin:DaňovoRelevantné", "#Fin:VyžadujeSchválenie",
            // Metodológia / Prístup
            "#Metóda:Agile", "#Metóda:Agile/Scrum", "#Metóda:Agile/Kanban", "#Metóda:Waterfall", "#Metóda:Lean", "#Metóda:GTD", "#Metóda:Zettelkasten", "#Metóda:PARA", "#Metóda:EisenhowerMatrix", "#Metóda:OKR",
            "#Metóda:DesignThinking", "#Metóda:DoubleDiamond", "#Metóda:BrainstormingTechniky", "#Metóda:Prototypovanie", "#Metóda:Prototypovanie/LowFidelity", "#Metóda:Prototypovanie/HighFidelity", "#Metóda:UserCenteredDesign", "#Metóda:Storytelling", "#Metóda:GamifikáciaPrístup", "#Metóda:ImprovizáciaPrístup",
            "#Metóda:Koučing/GROW", "#Metóda:Koučing/TGROW", "#Metóda:Koučing/OSKAR", "#Metóda:Koučing/SolutionFocused", "#Metóda:Koučing/Systemický", "#Metóda:Terapia/SomaticExperiencingPrístup", "#Metóda:Terapia/GestaltPrístup", "#Metóda:Terapia/MindfulnessBased", "#Metóda:Terapia/ExpresívneTerapiePrístup", "#Metóda:Terapia/InternalFamilySystems", "#Metóda:Terapia/AttachmentBased", "#Metóda:Terapia/TraumaInformedCare",
            "#Metóda:Výskum/Kvalitatívny", "#Metóda:Výskum/Kvantitatívny", "#Metóda:Výskum/Zmiešaný", "#Metóda:Výskum/DeskResearch", "#Metóda:Analýza/SWOT", "#Metóda:Analýza/PESTEL", "#Metóda:Analýza/Konkurenčná", "#Metóda:Analýza/Obsahová", "#Metóda:Analýza/Štatistická",
            "#Metóda:Prístup/Experimentálny", "#Metóda:Prístup/Iteratívny", "#Metóda:Prístup/Intuitívny", "#Metóda:Prístup/Štruktúrovaný", "#Metóda:Prístup/Kolaboratívny", "#Metóda:Prístup/Samostatný", "#Metóda:Prístup/HĺbkováPráca", "#Metóda:Prístup/Multitasking", "#Metóda:Prístup/Batching", "#Metóda:Prístup/Timeboxing",
            "#Metóda:AI/PromptChaining", "#Metóda:AI/FewShotLearning", "#Metóda:AI/ZeroShotLearning", "#Metóda:AI/FineTuning", "#Metóda:AI/RAG", "#Metóda:AI/HumanInTheLoop",
            // Energetický / Emocionálny Vplyv
            "#Vplyv:Energia/Nabíjajúce", "#Vplyv:Energia/Vyčerpávajúce", "#Vplyv:Energia/Neutrálne", "#Vplyv:Energia/FlowState", "#Vplyv:Energia/Rozptyľujúce", "#Vplyv:Energia/Stimulujúce", "#Vplyv:Energia/Upokojujúce", "#Vplyv:Energia/VyžadujePrípravu", "#Vplyv:Energia/RýchlyDopamín", "#Vplyv:Energia/DlhodobéUspokojenie",
            "#Vplyv:Emócie/RadosťZábava", "#Vplyv:Emócie/FrustráciaNuda", "#Vplyv:Emócie/ZvedavosťZáujem", "#Vplyv:Emócie/ObavyÚzkosť", "#Vplyv:Emócie/HnevPodráždenie", "#Vplyv:Emócie/HrdosťUspokojenie", "#Vplyv:Emócie/SmútokSkleslosť", "#Vplyv:Emócie/InšpiráciaNadšenie", "#Vplyv:Emócie/PocitZmysluplnosti", "#Vplyv:Emócie/PocitPreťaženia", "#Vplyv:Emócie/PocitKompetencie", "#Vplyv:Emócie/PocitNeistoty",
            "#Vplyv:Motivácia/Prokrastinujem", "#Vplyv:Motivácia/ChcemToRobiť", "#Vplyv:Motivácia/VyžadujeDisciplínu", "#Vplyv:Motivácia/UdržateľnéDlhodobo", "#Vplyv:Motivácia/RýchloOmrzí",
            "#Vzťah:MilujemTo", "#Vzťah:MámToRád", "#Vzťah:Neutrálny", "#Vzťah:NemámToRád", "#Vzťah:NeznášamTo", "#Vzťah:JeToVýzva", "#Vzťah:JeToPovinnosť"
        ],
        editable: true,
        description: 'Flexibilné štítky pre doplnkovú kategorizáciu (typ práce, oblasť, téma, nástroj, stav, kontext, osoba, čas, zdroj, financie, metóda, vplyv).',
        filterable: true
    },
    priority: { // Názov podľa existujúceho kódu, mapovaný na P0-P4 Priority z dokumentácie
      label: 'Priority',
      type: 'dropdown',
      options: [
        "P0 - NOW", "P1 - Critical", "P2 - High", "P3 - Medium", "P4 - Low"
      ],
      editable: true,
      description: 'Celková dôležitosť a urgencia úlohy (P0=najvyššia).',
      filterable: true
    },
     due_date: {
        label: 'Due Date',
        type: 'date',
        editable: true,
        description: 'Finálny termín dokončenia celej úlohy.',
        filterable: true
    },
    start_date: {
        label: 'Start Date',
        type: 'date',
        editable: true,
        description: 'Plánovaný alebo najskorší možný dátum začiatku práce.',
        filterable: true
    },
    deadline_type: {
      label: 'Deadline Type',
      type: 'dropdown',
      options: [
          "Hard Deadline", "Soft Deadline / Target", "No Deadline / Ongoing"
      ],
      editable: true,
      description: 'Povaha termínu v Due Date (pevný, orientačný, žiadny).',
      filterable: true
    },
    recurrence_frequency: {
      label: 'Recurrence Frequency',
      type: 'dropdown',
      options: [
          "Neopakuje sa", "Denne", "Týždenne", "Každé 2 týždne", "Mesačne",
          "Kvartálne", "Polročne", "Ročne", "Nepravidelne / Podľa potreby",
          "Iné (Popíš v Description/Input)"
      ],
      editable: true,
      description: 'Frekvencia opakovania úlohy (ak nie je riadené systémom).',
      filterable: true
    },
    created_at: {
      label: 'Created At',
      type: 'date', // Presnejšie Timestamp, ale pre zjednodušenie date
      editable: true, // Reálne false, ale podľa požiadavky true
      description: 'Dátum a čas vytvorenia úlohy (systémové).',
      filterable: true
    },
    completed_at: {
      label: 'Completed At',
      type: 'date', // Presnejšie Timestamp
      editable: true, // Reálne false, ale podľa požiadavky true
      description: 'Dátum a čas dokončenia úlohy (systémové).',
      filterable: true
    },
    last_modified_at: {
      label: 'Last Modified At',
      type: 'date', // Presnejšie Timestamp
      editable: true, // Reálne false, ale podľa požiadavky true
      description: 'Dátum a čas poslednej úpravy (systémové).',
      filterable: true
    },
    task_goal: {
      label: 'Task Goal',
      type: 'textarea', // Umožňuje detailnejší popis
      editable: true,
      description: 'Jasná, stručná, ideálne merateľná definícia požadovaného výsledku. Základné zadanie pre AI.',
      filterable: true
    },
    input_data_context: {
      label: 'Input Data & Context',
      type: 'textarea',
      editable: true,
      description: 'Hlavný kontajner pre všetky vstupné informácie, zdroje, brief pre AI. Použi štruktúru.',
      filterable: true
    },
    desired_output_format: {
      label: 'Desired Output Format',
      type: 'multi-select',
      multi: true,
      options: [
          "Free (AI zvolí aký output bude najvhodnejší)", "Voľný text", "Google Doc", "Google Sheet", "Google Slides",
          "Markdown Súbor (.md)", "Čistý Text Súbor (.txt)", "CSV Súbor (.csv)", "JSON Dáta",
          "Zoznam Liniek (v komentári/dokumente)", "Email Draft (v Gmaili)", "Asana Podúlohy",
          "Obrázok PNG", "Obrázok JPG", "SVG Súbor", "Audio Súbor MP3", "Audio Súbor WAV",
          "Video Súbor MP4", "Prezentácia PPTX", "Kód Súbor (.py, .js, .html...)",
          "Aktualizácia Custom Field(ov)", "Žiadny Priamy Výstup (Len zmena stavu)",
          "Iné (Popíš v Constraints)"
        ],
      editable: true,
      description: 'Požadovaný formát a štruktúra finálneho výstupu AI.',
      filterable: true
    },
    ai_action_process_free_text: {
      label: 'AI Action / Process (Free Text)',
      type: 'text',
      editable: true,
      description: 'Voľný text definujúci hlavnú akciu AI, alebo "AI" / "All" / "Categorize".',
      filterable: true
    },
    ai_action_process_dropdown: {
      label: 'AI Action / Process (Dropdown)',
      type: 'multi-select',
      multi: true,
      options: [
          "Free:AI Chooses", "All:AI Chooses", "Custom:I write custom prompt", "Categorize:AI fill all fields",
          "Generate: Draft Text", "Generate: Final Text", "Generate: Multiple Text Options", "Generate: Content Ideas", "Generate: Content Outline / Structure", "Generate: Social Media Post(s)", "Generate: Email / Newsletter Draft", "Generate: Script (Video/Podcast/...)", "Generate: Presentation Content", "Generate: Creative Writing (Story, Poem...)", "Generate: Q&A / FAQ", "Generate: Persona Description", "Generate: Product Description", "Generate: Ad Copy",
          "Process: Summarize Text/Document", "Process: Extract Key Information", "Process: Translate Text", "Process: Proofread / Edit Text", "Process: Rephrase / Rewrite Text", "Process: Format Text (Markdown/HTML...)", "Process: Analyze Sentiment", "Process: Categorize / Tag Text/Data", "Process: Convert Data Format",
          "Research: Find Information / Sources", "Research: Competitor Analysis", "Research: Market Analysis", "Research: Find Contacts / Leads", "Research: Fact-Check Information", "Analyze: Data Analysis (Basic)", "Analyze: Identify Patterns / Trends", "Analyze: Compare Options / Products",
          "Plan: Create Action Steps / Subtasks", "Plan: Create Project Outline / Plan", "Plan: Create Meeting Agenda", "Organize: Categorize Asana Task", "Organize: Identify Dependencies",
          "Generate: Image Prompt", "Generate: Image (via API)", "Process: Transcribe Audio/Video", "Generate: Code Snippet", "Process: Debug Code", "Process: Explain Code", "Process: Convert Code Language",
          "Interact: Simulate Conversation / Role-play", "Interact: Answer Questions", "Interact: Brainstorm Ideas with Me",
          "No AI Action (Manual Task / Categorization Only)"
        ],
      editable: true,
      description: 'Primárna operácia alebo typ spracovania pre AI.',
      filterable: true  
    },
    ai_workflow_status: {
      label: 'AI Workflow Status',
      type: 'dropdown',
      options: [
        "1 - Nová (v Inboxe)", "2 - Čaká na Info / Rozhodnutie (Ja)", "3 - Pripravená pre AI",
        "4 - AI Agent Pracuje", "5 - Vyžaduje Moju Akciu / Dokončenie", "6 - Hotovo",
        "7 - Zaparkované / Zrušené"
      ],
      editable: true,
      description: 'Aktuálna fáza úlohy v procese spracovania AI.',
      filterable: true
    },
    allow_autonomous_execution: {
      label: 'Allow Autonomous Execution (for AI)',
      type: 'dropdown',
      options: [
          "Nie (Len Pripraviť / Vyžaduje Moju Akciu)", // Default
          "Áno (Pokús sa dokončiť)",
          "Len Kategorizuj a Generuj Kroky/Plán"
      ],
      editable: true,
      description: 'Povolenie pre AI pokúsiť sa úlohu kompletne dokončiť.',
      filterable: true
    },
    number_of_variations: {
      label: 'Number of Variations (If Applicable)',
      type: 'number',
      editable: true,
      description: 'Počet variantov, ktoré má AI vygenerovať (ak relevantné pre AI Action).',
      filterable: true
    },
    desired_style_tone: {
      label: 'Desired Style / Tone (for AI)',
      type: 'multi-select',
      multi: true,
      options: [
          "Formálny", "Neformálny", "Profesionálny", "Kreatívny", "Hravý", "Empatický",
          "Priamy/Stručný", "Detailný/Vysvetľujúci", "Presvedčivý", "Technický",
          "Inšpiratívny", "Neutrálny", "Ako Ja (Experimentálne)"
        ],
      editable: true,
      description: 'Požadovaný štýl, tón a celkové vyznenie výstupu AI.',
      filterable: true
    },
    specific_constraints_instructions: {
      label: 'Specific Constraints / Instructions (for AI)',
      type: 'textarea',
      editable: true,
      description: 'Doplnkové špecifické pravidlá, mantinely alebo inštrukcie pre AI.',
      filterable: true
    },
    ai_behavior_on_uncertainty: {
      label: 'AI Behavior on Uncertainty',
      type: 'dropdown',
      options: [
          "Pýtaj sa / Čakaj na Mňa", // Default
          "Rozhodni Najlepšie Sama",
          "Buď Konzervatívna",
          "Buď Kreatívna/Odvážna"
        ],
      editable: true,
      description: 'Ako má AI postupovať pri nejasnostiach.',
      filterable: true
    },
    ai_creativity_level: {
      label: 'AI Creativity Level',
      type: 'dropdown',
      options: [
          "Nízka / Faktická",
          "Stredná (Vyvážená)", // Default
          "Vysoká / Experimentálna"
        ],
      editable: true,
      description: 'Požadovaná miera kreativity AI (ovplyvňuje "temperature").',
      filterable: true
    },
    ai_processing_priority: {
      label: 'AI Processing Priority',
      type: 'dropdown',
      options: [
          "Vysoká (Spracuj čo najskôr)",
          "Normálna", // Default
          "Nízka (Keď bude čas)"
        ],
      editable: true,
      description: 'Priorita úlohy špecificky pre frontu AI Agenta.',
      filterable: true
    },
    ai_agent_status_log: {
      label: 'AI Agent Status Log',
      type: 'textarea',
      editable: true,
      description: 'Detailný technický log krokov a stavov AI počas spracovania.',
      filterable: true
    },
    ai_output_result_link: {
      label: 'AI Output / Result Link',
      type: 'text', // URL
      editable: true,
      description: 'Priamy odkaz na finálny výstup AI (ak nie je v Description/Notes).',
      filterable: true
    },
    action_required_from_user: {
      label: 'Action Required From User',
      type: 'text', // Krátky popis
      editable: true,
      description: 'Stručný popis akcie/rozhodnutia, ktoré AI od teba očakáva (keď je status 5).',
      filterable: true
    },
    related_portfolios: {
        label: 'Related Portfolios',
        type: 'multi-select',
        multi: true,
        options: [
          'GLOBAL (Global)', 'Osobný Život & Rozvoj (Osobné & Rozvoj)', 'Pracovný Život & Administratíva (Práca & Admin)',
          'Koučing & Terapia (Koučing & Terapia)', 'Kurzy & Workshopy (Kurzy & Workshopy)', 'DJing (DJing)',
          'Umenie (Umenie)', 'AI & Technológie (AI & Tech)', 'Projekty & Produkty (Nápady)',
          'Social Media & Marketing (Marketing)', 'Cestovanie & Logistika (Cestovanie)', 'Znalostná Báza & Výskum (Arzenál)',
          'Crypto (Crypto)', 'Organizovanie Eventov (Eventy)'
        ],
        editable: true,
        description: 'Ďalšie súvisiace portfóliá pre kontext.',
        filterable: true
    },
    related_projects: {
        label: 'Related Projects',
        type: 'multi-select',
        multi: true,
        getOptions: (selectedPortfolios?: string[] | undefined, selectedProjects?: string[] | undefined) => { // Accepts string[]
              const pfArr = selectedPortfolios ? selectedPortfolios.map(s => s.trim()).filter(Boolean) : [];
              const prArr = selectedProjects ? selectedProjects.map(s => s.trim()).filter(Boolean) : [];
              if (!pfArr.length) return Object.values(PORTFOLIO_PROJECT_SECTION).flatMap(p => Object.keys(p)); // Show all if no portfolio selected
              let projectsList: string[] = pfArr.flatMap(pf => PORTFOLIO_PROJECT_SECTION[pf] ? Object.keys(PORTFOLIO_PROJECT_SECTION[pf]) : []);
              return Array.from(new Set(projectsList));
         },
        editable: true,
        description: 'Ďalšie súvisiace projekty (mimo primárneho). Filtrované podľa Related Portfolios.',
        filterable: true
    },
    related_sections: {
        label: 'Related Sections',
        type: 'multi-select',
        multi: true,
        getOptions: (selectedPortfolios?: string[] | undefined, selectedProjects?: string[] | undefined) => { // Accepts string[]
             const pfArr = selectedPortfolios ? selectedPortfolios.map(s => s.trim()).filter(Boolean) : [];
             const prArr = selectedProjects ? selectedProjects.map(s => s.trim()).filter(Boolean) : [];
             if (!pfArr.length && !prArr.length) return Object.values(PORTFOLIO_PROJECT_SECTION).flatMap(p => Object.values(p)).flat(); // Show all if nothing selected
             let sectionsList: string[] = [];
             pfArr.forEach(pf => {
                 const portfolioData = PORTFOLIO_PROJECT_SECTION[pf];
                 if (!portfolioData) return;
                 if (prArr.length) {
                      // Filter by selected projects within the portfolio
                      prArr.forEach(pr => {
                         if (portfolioData[pr]) sectionsList.push(...portfolioData[pr]);
                      });
                 } else {
                      // If no related project selected, show all sections from related portfolios
                      Object.values(portfolioData).forEach(arr => sectionsList.push(...arr));
                 }
             });
             return Array.from(new Set(sectionsList));
         },
        editable: true,
        description: 'Ďalšie súvisiace tematické sekcie (aj z iných projektov). Filtrované podľa Related Projects.',
        filterable: true
    },
    related_tasks: {
        label: 'Related Tasks',
        type: 'textarea', // Zoznam názvov úloh
        editable: true,
        description: 'Iné relevantné úlohy (názvy), ktoré nie sú priamou závislosťou.',
        filterable: true
    },
    related_tasks_id: {
        label: 'Related Tasks ID',
        type: 'textarea', // Zoznam ID úloh
        editable: true,
        description: 'Task ID úloh z poľa Related Tasks.',
        filterable: true
    },
    related_entities: {
        label: 'Related Entities',
        type: 'multi-select', // Zmenené na multi-select pre konzistenciu
        multi: true,
        options: [], // Tu by bol zoznam entít, ideálne dynamický
        editable: true,
        description: 'Ďalšie súvisiace osoby, klienti, partneri, organizácie.',
        filterable: true
    },
    target_audience: {
      label: 'Target Audience',
      type: 'textarea',
      editable: true,
      description: 'Konkrétna cieľová skupina, pre ktorú je výsledok úlohy určený.',
      filterable: true
    },
    task_purpose: {
      label: 'Task Purpose (Why)',
      type: 'textarea',
      editable: true,
      description: 'Hlbší zámer, motivácia alebo strategický kontext za úlohou.',
      filterable: true
    },
    type: { // Štandardné Asana pole 'Type' - pridané pre úplnosť
      label: 'Type',
      type: 'dropdown',
      options: ['Task', 'Milestone'], // Príklady, uprav podľa potreby
      editable: true,
      description: 'Typ úlohy (napr. Task, Milestone).',
      filterable: true
    },
    task_type: {
      label: 'Task Type (For User)', // Upravený label pre jasnosť
      type: 'dropdown',
      options: [
        'Kreatíva / Hlboká Práca', 'Operatíva / Rutina', 'Admin / Byrokracia',
        'Komunikácia (Volania, Maily)', 'Research / Analýza (Manuálna)', 'Štúdium / Učenie sa',
        'Fyzická / Manuálna Práca', 'Rozhodovanie / Schvaľovanie', 'Kontrola / Revízia', 'AI'
      ],
      editable: true,
      description: 'Dominantný typ mentálnej/fyzickej aktivity vyžadovanej od Teba.',
      filterable: true
    },
    estimated_user_time: {
      label: 'Estimated User Time',
      type: 'dropdown',
      options: [
          '< 5 min', '5-15 min', '15-30 min', '30-60 min', '1-2 hod',
          '2-4 hod', '4+ hod', '8+ hod', '1-3 dni', '3-7 dni', '1+ týždeň', '1+ mesiac'
      ],
      editable: true,
      description: 'Odhadovaný čas potrebný pre Teba na dokončenie tvojej časti úlohy.',
      filterable: true
    },
    cognitive_load: {
      label: 'Cognitive Load (For User)', // Upravený label
      type: 'dropdown',
      options: [ 'Nízka', 'Stredná', 'Vysoká' ],
      editable: true,
      description: 'Ako veľmi mentálne náročná bude tvoja časť práce.',
      filterable: true
    },
    energy_level_required: {
      label: 'Energy Level Required (For User)', // Upravený label
      type: 'dropdown',
      options: [ 'Nízka', 'Stredná', 'Vysoká' ],
      editable: true,
      description: 'Akú úroveň celkovej energie si vyžaduje tvoja časť práce.',
      filterable: true
    },
    required_tools_software: {
      label: 'Required Tools / Software',
      type: 'multi-select',
      multi: true,
      options: [ /* FULL LIST OF TOOLS */
          "Web Browser", "Email Client", "Calendar App", "Text Editor (Plain)", "Word Processor", "Spreadsheet App", "Presentation App", "PDF Reader/Editor", "Cloud Storage",
          "Asana", "Slack", "Microsoft Teams", "Discord", "Zoom", "Google Meet", "WhatsApp", "Telegram", "Signal",
          "Notion", "Evernote", "Obsidian", "Diarium", "Google Keep", "Apple Notes", "Mind Mapping Tool",
          "ChatGPT (Web UI)", "Claude AI (Web UI)", "Google Gemini (Web UI)", "Midjourney (Discord/Web)", "Stable Diffusion (Lokálne/Web UI)", "Dall-E (Web UI/API)", "Whisper (API/App)", "Make.com", "Zapier", "IFTTT", "Apple Shortcuts", "Keyboard Maestro", "Web Scraping Tool", "Specific Custom GPT",
          "Instagram App/Web", "Facebook App/Web", "Facebook Business Suite / Ads Manager", "YouTube Studio", "LinkedIn App/Web", "TikTok App/Web", "Email Marketing Platform", "Google Analytics", "Google Search Console", "SEO Tool", "Social Media Scheduler", "Canva", "Figma", "Website CMS", "Heatmap/Analytics Tool",
          "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Audition", "Adobe Lightroom", "Final Cut Pro", "DaVinci Resolve", "CapCut", "Procreate", "Blender",
          "Rekordbox", "Serato DJ Pro", "Traktor Pro", "Ableton Live", "Logic Pro", "FL Studio", "Beatport/Beatsource (Web/App)", "SoundCloud", "Spotify (Pre prieskum)", "Music Recognition App", "Key Analysis Software", "DAW (Všeobecne)",
          "VS Code", "Terminal / Command Line", "Git", "GitHub/GitLab/Bitbucket (Web)", "Docker Desktop", "Postman / Insomnia", "Browser Developer Tools", "Bubble.io Editor", "Specific IDE", "Database Client", "(Specific Language Runtime/Compiler)",
          "Online Bankovníctvo", "Účtovný Softvér", "CRM Systém", "Platforma pre Online Kurzy", "Rezervačný Systém", "Slovenská Pošta / Zasielkovňa (Web/App)", "Bazos / Inzertný Portál"
      ],
      editable: true,
      description: 'Kľúčové softvérové aplikácie alebo online platformy potrebné na dokončenie úlohy.',
      filterable: true
    },
    required_hardware: {
      label: 'Required Hardware',
      type: 'multi-select',
      multi: true,
      options: [ /* FULL LIST OF HARDWARE */
          "PC / Laptop (Všeobecne)", "PC - Windows", "MacBook (macOS)", "Výkonný Počítač (High-Performance)", "Externý Monitor", "Nastavenie s Viacerými Monitormi", "Klávesnica (Externá/Špecifická)", "Myš / Trackpad (Externý/Špecifický)", "Grafický Tablet", "Webkamera (Externá/Kvalitná)", "Dokovacia Stanica",
          "Smartfón (Všeobecne)", "iPhone (iOS)", "Android Zariadenie", "Tablet (Všeobecne)", "iPad", "iPad + Apple Pencil", "Android Tablet", "Smart Hodinky",
          "Mikrofón (Externý/Štúdiový)", "USB Mikrofón", "XLR Mikrofón", "Lavalier Mikrofón (Klopový)", "Shotgun Mikrofón", "Audio Rozhranie / Zvuková Karta (Externá)", "Slúchadlá (Monitorovacie/Štúdiové)", "Slúchadlá (Bežné/Na Cesty)", "Reproduktory (Monitorovacie/Štúdiové)", "Reproduktory (Prenosné)", "Mixpult (Audio)", "Rekordér (Prenosný)",
          "Kamera (DSLR/Mirrorless)", "Videokamera", "Akčná Kamera", "360° Kamera", "Objektívy (Špecifické)", "Statív (Tripod)", "Gimbal / Stabilizátor", "Osvetlenie (Externé Svetlá)", "Zelené Plátno (Greenscreen)", "Čítačka (Teleprompter)",
          "DJ Controller", "DJ Mixpult", "Gramofóny (Turntables)", "CDJ / Media Player", "DJ Slúchadlá", "Laptop Stand", "Efektová Jednotka (DJ FX)", "Sampler / Groovebox",
          "MIDI Klávesnica / Controller", "Drum Machine / Pad Controller", "Syntetizátor (Hardvérový)", "Groovebox (Hardvérový)",
          "Projektor", "Plátno", "Flipchart / Biela Tabuľa", "Prezenter / Klikátko", "Ozvučenie (PA Systém)",
          "Externý Hard Disk (HDD/SSD)", "USB Kľúč", "SD / Pamäťová Karta", "Čítačka Kariet", "Tlačiareň", "Skener", "USB Hub",
          "VR Headset", "AR Zariadenie", "Senzory Pohybu", "Biofeedback Zariadenie", "3D Tlačiareň", "Špecifické Meracie Prístroje", "Šijací Stroj", "Nástroje pre Manuálnu Prácu"
      ],
      editable: true,
      description: 'Kľúčové fyzické zariadenia alebo vybavenie potrebné na dokončenie úlohy.',
      filterable: true
    },
    required_skills: {
      label: 'Required Skills',
      type: 'multi-select',
      multi: true,
      options: [ /* FULL LIST OF SKILLS */
          "Skill:Písanie/Copywriting", "Skill:Písanie/Kreatívne", "Skill:Písanie/Technické", "Skill:Písanie/Akademické", "Skill:Editácia/Korektúra", "Skill:Prezentovanie/VerejnýPrejav", "Skill:Komunikácia/Verbálna", "Skill:Komunikácia/Neverbálna", "Skill:Komunikácia/Nenásilná(NVC)", "Skill:Komunikácia/Asertivita", "Skill:AktívnePočúvanie", "Skill:Empatia", "Skill:Networking/BudovanieVzťahov", "Skill:Vyjednávanie/Presviedčanie", "Skill:Facilitácia/Moderovanie", "Skill:PoskytovanieFeedbacku", "Skill:PrijímanieFeedbacku", "Skill:RiešenieKonfliktov", "Skill:TímováPráca/Spolupráca",
          "Skill:KreatívneMyslenie/GenerovanieNápadov", "Skill:VizuálneMyslenie", "Skill:GrafickýDizajn", "Skill:UI/UXDizajn", "Skill:WebDizajn", "Skill:Fotografovanie", "Skill:VideoProdukcia/Strih", "Skill:AudioProdukcia/Editácia", "Skill:Animácia/MotionGraphics", "Skill:Ilustrácia/Kresba", "Skill:Storytelling", "Skill:SoundDesign", "Skill:HudobnáKompozícia/Aranžovanie", "Skill:DJing/Mixovanie", "Skill:Performance/Herectvo", "Skill:Tanec/Choreografia", "Skill:Maľba/VýtvarnéTechniky",
          "Skill:AnalytickéMyslenie", "Skill:KritickéMyslenie", "Skill:RiešenieProblémov", "Skill:Rozhodovanie", "Skill:StrategickéPlánovanie", "Skill:ProjektovýManažment", "Skill:Výskum/ZberDát", "Skill:AnalýzaDát/Štatistika", "Skill:InterpretáciaDát", "Skill:PrieskumTrhu", "Skill:FinančnáAnalýza/Modelovanie",
          "Skill:PrácaSNástrojom/Asana", "Skill:PrácaSNástrojom/ChatGPT", "Skill:PrácaSNástrojom/Ableton", /* Add more tool skills as needed */ "Skill:Programovanie/Python", "Skill:Programovanie/JavaScript", "Skill:WebDevelopment/Frontend", "Skill:WebDevelopment/Backend", "Skill:SprávaDatabáz", "Skill:APIIntegrácie", "Skill:NoCode/LowCodeVývoj", "Skill:PromptEngineering", "Skill:AutomatizáciaProcesov", "Skill:SprávaServerov/Cloudu", "Skill:CyberSecurityZáklady", "Skill:PrácaSCMS", "Skill:SEOOptimalizácia", "Skill:DigitálnyMarketing", "Skill:PokročiláPrácaSTabuľkami",
          "Skill:KoučovacieKompetencie(ICF)", "Skill:TerapeutickéTechniky/SE", "Skill:TerapeutickéTechniky/Gestalt", /* Add more */ "Skill:FacilitáciaSkupín", "Skill:VedenieWorkshopu/Kurzu", "Skill:PrácaSTraumou", "Skill:PrácaSEmóciami", "Skill:PrácaSTelom/Somatika", "Skill:Diagnostika/Assessment", "Skill:TvorbaBezpečnéhoPriestoru",
          "Skill:TimeManagement/Organizácia", "Skill:Sebadisciplína/ProkrastináciaManažment", "Skill:Adaptabilita/Flexibilita", "Skill:UčenieSa/RýchleUčenie", "Skill:OdolnosťVočiStresu", "Skill:VedenieĽudí/Leadership", "Skill:Delegovanie",
          "Skill:Jazyk/Angličtina/C1", "Skill:Jazyk/Nemčina/B2" /* Add more */
      ],
      editable: true,
      description: 'Kľúčové zručnosti, schopnosti alebo oblasti expertízy potrebné na vykonanie úlohy.',
      filterable: true
    },
    estimated_cost_budget: {
      label: 'Estimated Cost / Budget',
      type: 'number', // UI by mohlo pridať symbol meny
      editable: true,
      description: 'Predpokladané priame finančné náklady spojené s úlohou.',
      filterable: true
    },
    expected_impact_success_metric: {
      label: 'Expected Impact / Success Metric',
      type: 'textarea',
      editable: true,
      description: 'Očakávaný prínos alebo výsledok úlohy a spôsob merania úspechu.',
      filterable: true
    },
    location: {
      label: 'Location',
      type: 'text',
      editable: true,
      description: 'Geografická lokalita alebo kontext, ku ktorému sa úloha viaže (napr. Bratislava, Online, Nezáleží).',
      filterable: true
    },
    execution_location: {
      label: 'Execution Location',
      type: 'dropdown',
      options: [
          "Nezáleží", "Domov", "Domov - Pracovňa", "Kancelária/Cowork", "Vonku/Príroda",
          "Mesto/Kaviareň", "Na Cestách", "Nitra", "Bratislava", "Praha, Česká Republika",
          "WellBe Club", "Telocvičňa", "Ateliér"
        ],
      editable: true,
      description: 'Optimálne alebo požadované fyzické miesto, kde by si mal TY vykonávať svoju časť úlohy.',
      filterable: true
    },
    required_devices: {
      label: 'Required Devices (For User)', // Mierne upravený label
      type: 'multi-select',
      multi: true,
      options: [
        "PC/Laptop", "MacBook", "Mobil (iOS/Android)", "Tablet (iPad+Pencil)",
        "Externý Monitor", "Kvalitný Mikrofón", "Kamera", "DJ Technika",
        "Papier & Pero", "Žiadne Špecifické"
      ],
      editable: true,
      description: 'Kľúčové hardvérové zariadenia, ktoré TY potrebuješ na vykonanie svojej časti úlohy.',
      filterable: true
    },
    internet_requirement: {
      label: 'Internet Requirement',
      type: 'dropdown',
      options: [
        "Nevyhnutný (Online)", "Vhodný (Offline obmedzené)", "Netreba (Offline možné)"
      ],
      editable: true,
      description: 'Či a ako veľmi je pre tvoju časť práce potrebný internet.',
      filterable: true
    },
    focus_requirement: {
      label: 'Focus Requirement',
      type: 'dropdown',
      options: [
        "Vysoká (Deep Work)", "Stredná (Bežné sústredenie)", "Nízka (Možné prerušenia)"
      ],
      editable: true,
      description: 'Akú mieru nerušeného sústredenia si vyžaduje tvoja časť práce.',
      filterable: true
    },
    optimal_time_of_day: {
      label: 'Optimal Time of Day',
      type: 'multi-select',
      multi: true,
      options: [
        "Ráno (5:30-8:30) - Príprava & Naladenie",
        "Doobeda (8:30-11:30) - Hlboká Práca (Kreatíva/Kognitíva)",
        "Obed & Aktívna Pauza (11:30-12:10)",
        "Poobede Blok 1 (12:10-15:00) - Operatíva & Praktické Úlohy",
        "Poobede Blok 2 (15:00-16:00) - Komunikácia & Admin",
        "Prechod (16:00-17:00) - Uvoľnenie & Resourcing",
        "Učenie & Hobby (17:00-18:30)",
        "Voľný Čas & Rituál (18:30-20:45)",
        "Príprava na Spánok (20:45-22:00)",
        "Noc (po 22:00)",
        "Nezáleží / Flexibilné"
      ],
      editable: true,
      description: 'Preferovaná alebo najvhodnejšia časť dňa na vykonanie tvojej časti úlohy podľa energie.',
      filterable: true
    },
    assignee: {
      label: 'Assignee',
      type: 'text', // Vlastník úlohy - zvyčajne Jakub Cerulík
      editable: true,
      description: 'Primárne zodpovedná osoba (vždy Jakub Cerulík).',
      filterable: true
    },
    collaborators: {
      label: 'Collaborators',
      type: 'textarea', // Zoznam mien/emailov ako text
      editable: true,
      description: 'Ďalší ľudia, ktorí majú o úlohe vedieť (uložené ako text).',
      filterable: true
    },
    related_entity: {
      label: 'Related Entity',
      type: 'text', // Meno osoby alebo názov organizácie
      editable: true,
      description: 'Hlavná externá/interná osoba, klient, partner alebo organizácia.',
      filterable: true
    },
    waiting_for: {
      label: 'Waiting For',
      type: 'dropdown',
      options: [
        'User Input / Decision', 'Missing Information', 'External: [Meno Osoby/Org]',
        'Dependency: [Názov/ID Úlohy]', 'AI Processing', 'Approval Needed',
        'Resource Availability', 'External Event'
      ],
      editable: true,
      description: 'Dôvod, prečo je úloha blokovaná alebo v čakajúcom stave.',
      filterable: true
    },
    financial_return_value_speed: {
      label: 'Financial Return (Value & Speed)',
      type: 'dropdown',
      options: [
          "€50 / <1d", "€100 / <1d", "€200 / <1d", "€200-500 / <1d", "€500-1k / <1d", "€1k-2k / <1d", "€2k-5k / <1d", "€5k-20k / <1d", "€20k+ / <1d",
          "€50 / ~1d", "€100 / ~1d", "€200 / ~1d", "€200-500 / ~1d", "€500-1k / ~1d", "€1k-2k / ~1d", "€2k-5k / ~1d", "€5k-20k / ~1d", "€20k+ / ~1d",
          "€50 / 1-3d", "€100 / 1-3d", "€200 / 1-3d", "€200-500 / 1-3d", "€500-1k / 1-3d", "€1k-2k / 1-3d", "€2k-5k / 1-3d", "€5k-20k / 1-3d", "€20k+ / 1-3d",
          "€50 / 3-7d", "€100 / 3-7d", "€200 / 3-7d", "€200-500 / 3-7d", "€500-1k / 3-7d", "€1k-2k / 3-7d", "€2k-5k / 3-7d", "€5k-20k / 3-7d", "€20k+ / 3-7d",
          "€50 / 1-2w", "€100 / 1-2w", "€200 / 1-2w", "€200-500 / 1-2w", "€500-1k / 1-2w", "€1k-2k / 1-2w", "€2k-5k / 1-2w", "€5k-20k / 1-2w", "€20k+ / 1-2w",
          "€50 / 2-4w", "€100 / 2-4w", "€200 / 2-4w", "€200-500 / 2-4w", "€500-1k / 2-4w", "€1k-2k / 2-4w", "€2k-5k / 2-4w", "€5k-20k / 2-4w", "€20k+ / 2-4w",
          "€50 / 1-3m", "€100 / 1-3m", "€200 / 1-3m", "€200-500 / 1-3m", "€500-1k / 1-3m", "€1k-2k / 1-3m", "€2k-5k / 1-3m", "€5k-20k / 1-3m", "€20k+ / 1-3m",
          "€50 / 3m+", "€100 / 3m+", "€200 / 3m+", "€200-500 / 3m+", "€500-1k / 3m+", "€1k-2k / 3m+", "€2k-5k / 3m+", "€5k-20k / 3m+", "€20k+ / 3m+",
          "Nepriamy Vplyv / Podpora", "Nákladová Úloha", "Nerelevantné / Neviem Odhadnúť"
      ],
      editable: true,
      description: 'Odhadovaná výška finančného zisku/úspory a rýchlosť návratnosti.',
      filterable: true
    },
    ai_output_rating: {
      label: 'AI Output Rating',
      type: 'dropdown',
      options: [
          "⭐⭐⭐⭐⭐ - Vynikajúce", "⭐⭐⭐⭐ - Veľmi Dobré", "⭐⭐⭐ - Dobré / Použiteľné",
          "⭐⭐ - Priemerné / Čiastočné", "⭐ - Zlé / Nepoužiteľné", "N/A - AI Nepracovala"
      ],
      editable: true,
      description: 'Tvoje subjektívne hodnotenie kvality a užitočnosti práce AI.',
      filterable: true
    },
    feedback_for_ai: {
      label: 'Feedback for AI',
      type: 'textarea',
      editable: true,
      description: 'Tvoja konkrétna slovná spätná väzba k práci AI pre budúce učenie.',
      filterable: true
    },
    // --- Fields from Form (Input Only - AI uses them for context) ---
    suggested_initial_steps_subtasks: {
      label: 'Suggested Initial Steps / Subtasks (Input)',
      type: 'textarea',
      editable: true,
      description: 'Tvoj prvotný nápad na kroky/podúlohy ako vstup pre AI.',
      filterable: true
    },
    related_areas_for_ai_to_consider: {
      label: 'Related Areas for AI to Consider (Input)',
      type: 'textarea',
      editable: true,
      description: 'Voľný text popisujúci súvisiace oblasti pre AI na lepšiu kategorizáciu.',
      filterable: true
    },
    potential_dependencies_related_tasks: {
      label: 'Potential Dependencies / Related Tasks (Input)',
      type: 'textarea',
      editable: true,
      description: 'Linky alebo popisy súvisiacich úloh/zdrojov ako vstup pre AI.',
      filterable: true
    },
    financial_aspect: { // Pridané pole z konca dokumentácie
      label: 'Financial Aspect',
      type: 'dropdown', // Alebo multi-select, ak môže mať viac aspektov
      options: [ // Doplnené options z tagov pre financie
        "Žiadny", // Predvolené
        "#Fin:Príjem", "#Fin:Výdavok", "#Fin:Investícia", "#Fin:PresunPeniazí",
        "#Fin:Budgeting", "#Fin:CashflowRelevantné", "#Fin:DaňovoRelevantné"
      ],
      editable: true,
      description: 'Rýchla identifikácia úloh s finančným dopadom.',
      filterable: true
    },
  };