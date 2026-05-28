import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  Gavel,
  HeartHandshake,
  Landmark,
  Phone,
  Shield,
  Users,
} from "lucide-react";

const legalActs = [
  {
    title: "Ustawa o przeciwdziałaniu przemocy domowej",
    desc: "Podstawowy akt określający system przeciwdziałania przemocy domowej, zadania gmin, zespołów interdyscyplinarnych i grup diagnostyczno-pomocowych.",
    link: "https://isap.sejm.gov.pl/",
  },
  {
    title: "Rozporządzenie RM z 6 września 2023 r.",
    desc: "Reguluje procedurę „Niebieskie Karty” oraz wzory formularzy NK-A, NK-B, NK-C i NK-D.",
    link: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20230001870",
  },
  {
    title: "Przepisy karne i cywilne",
    desc: "W praktyce procedura może łączyć się m.in. z zawiadomieniem o przestępstwie, nakazem opuszczenia mieszkania, zakazem kontaktowania się lub zabezpieczeniem dziecka.",
    link: "https://www.gov.pl/",
  },
];

const procedureSteps = [
  {
    title: "1. Rozpoznanie podejrzenia przemocy",
    text: "Pracownik służby, instytucji lub organizacji zauważa sygnały przemocy albo otrzymuje zgłoszenie od osoby doznającej przemocy, świadka, dziecka, sąsiada lub innej osoby.",
  },
  {
    title: "2. Wypełnienie formularza NK-A",
    text: "Procedura rozpoczyna się przez wypełnienie formularza „Niebieska Karta – A”. Nie wymaga zgody osoby doznającej przemocy i powinna być uruchomiona przy uzasadnionym podejrzeniu przemocy domowej.",
  },
  {
    title: "3. Przekazanie informacji osobie doznającej przemocy",
    text: "Osobie doznającej przemocy przekazuje się formularz NK-B z informacjami o prawach, formach pomocy, bezpieczeństwie i możliwościach kontaktu z instytucjami.",
  },
  {
    title: "4. Przekazanie NK-A do zespołu interdyscyplinarnego",
    text: "Formularz trafia do zespołu interdyscyplinarnego, który organizuje dalsze działania i powołuje grupę diagnostyczno-pomocową.",
  },
  {
    title: "5. Praca grupy diagnostyczno-pomocowej",
    text: "Grupa diagnozuje sytuację, opracowuje plan pomocy, monitoruje bezpieczeństwo i podejmuje działania wobec osoby stosującej przemoc.",
  },
  {
    title: "6. Monitoring, dokumentowanie i zakończenie procedury",
    text: "Działania są dokumentowane, a zakończenie procedury następuje po ustaniu przemocy i uzasadnionym przypuszczeniu, że zaprzestano jej dalszego stosowania albo po rozstrzygnięciu o braku zasadności prowadzenia procedury.",
  },
];

const roles = [
  "Pomoc społeczna",
  "Policja",
  "Oświata",
  "Ochrona zdrowia",
  "Gminna komisja rozwiązywania problemów alkoholowych",
  "Organizacje wspierające osoby doznające przemocy",
];

const examples = [
  {
    title: "Przykład 1: dziecko ujawnia przemoc w domu",
    body: "Nauczyciel słyszy od ucznia, że ojciec regularnie bije matkę i grozi domownikom. Pracownik szkoły nie prowadzi własnego dochodzenia — opisuje uzyskane informacje, zapewnia bezpieczeństwo dziecku i uruchamia procedurę NK-A zgodnie z kompetencjami placówki.",
    action: "Kluczowe: dokumentacja wypowiedzi dziecka, nieobwiniająca rozmowa, kontakt z zespołem interdyscyplinarnym, ocena ryzyka i ochrona małoletniego.",
  },
  {
    title: "Przykład 2: interwencja Policji po awanturze domowej",
    body: "Patrol zostaje wezwany do mieszkania. Osoba doznająca przemocy ma obrażenia, sprawca jest agresywny, dzieci są przestraszone. Funkcjonariusze zabezpieczają miejsce, rozważają środki natychmiastowej ochrony i wypełniają NK-A.",
    action: "Kluczowe: bezpieczeństwo tu i teraz, pouczenie o prawach, dokumentacja obrażeń i zagrożeń, informacja do właściwych służb.",
  },
  {
    title: "Przykład 3: pracownik socjalny widzi kontrolę ekonomiczną",
    body: "Podczas wywiadu środowiskowego kobieta mówi, że partner zabiera jej pieniądze, kontroluje telefon i zabrania kontaktów z rodziną. Nie ma widocznych obrażeń, ale występują przesłanki przemocy psychicznej i ekonomicznej.",
    action: "Kluczowe: nie ograniczać przemocy do obrażeń fizycznych, opisać zachowania kontrolujące, zaproponować plan bezpieczeństwa i uruchomić procedurę.",
  },
];

const downloads = [
  { name: "Formularz Niebieska Karta – A", type: "PDF / formularz", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20230001870" },
  { name: "Formularz Niebieska Karta – B", type: "Informacja dla osoby doznającej przemocy", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20230001870" },
  { name: "Formularz Niebieska Karta – C", type: "Diagnoza sytuacji osoby doznającej przemocy", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20230001870" },
  { name: "Formularz Niebieska Karta – D", type: "Praca z osobą stosującą przemoc", href: "https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20230001870" },
  { name: "Checklista pierwszej rozmowy", type: "Materiał roboczy do przygotowania", href: "#checklisty" },
  { name: "Plan bezpieczeństwa", type: "Wzór do pracy z osobą doznającą przemocy", href: "#checklisty" },
];

const checklist = [
  "Czy osoba jest teraz bezpieczna?",
  "Czy w domu są dzieci, osoby starsze lub osoby zależne?",
  "Czy występują groźby, broń, duszenie, stalking, eskalacja przemocy?",
  "Czy osoba ma gdzie zadzwonić i gdzie się schronić?",
  "Czy przekazano informację o prawach i dostępnych formach pomocy?",
  "Czy udokumentowano fakty, wypowiedzi i widoczne obrażenia bez oceniania?",
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#start" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-sm">
              <Shield size={23} />
            </span>
            <span className="text-lg md:text-xl">Niebieskie Karty — praktyczny portal</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#prawo" className="hover:text-blue-700">Prawo</a>
            <a href="#procedura" className="hover:text-blue-700">Procedura</a>
            <a href="#praktyka" className="hover:text-blue-700">Przykłady</a>
            <a href="#pliki" className="hover:text-blue-700">Pliki</a>
            <a href="#kontakt" className="hover:text-blue-700">Pomoc</a>
          </nav>
          <a href="#pliki" className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800 md:inline-flex">
            Pobierz materiały
          </a>
        </div>
      </header>

      <main id="start">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.24),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                <HeartHandshake size={17} /> Dla osób pracujących w obszarze przeciwdziałania przemocy
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Procedura „Niebieskie Karty” — prawo, praktyka i narzędzia w jednym miejscu
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Portal roboczy dla pracowników pomocy społecznej, Policji, oświaty, ochrony zdrowia, gminnych komisji oraz członków zespołów interdyscyplinarnych i grup diagnostyczno-pomocowych.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#procedura" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-800 shadow-xl transition hover:bg-blue-50">
                  Zobacz procedurę <ArrowRight size={18} />
                </a>
                <a href="#prawo" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                  Podstawy prawne
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-3xl bg-white p-6 text-slate-950">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="text-amber-600" size={28} />
                  <h2 className="text-xl font-black">Najważniejsza zasada</h2>
                </div>
                <p className="mt-4 leading-7 text-slate-700">
                  Procedura nie jest „sprawdzaniem, czy przemoc na pewno wystąpiła”. Jest uruchamiana przy uzasadnionym podejrzeniu przemocy domowej i ma służyć bezpieczeństwu, diagnozie sytuacji oraz skoordynowanej pomocy.
                </p>
                <div className="mt-6 grid gap-3">
                  {["Bezpieczeństwo osoby doznającej przemocy", "Dokumentowanie faktów", "Współpraca międzyinstytucjonalna", "Plan pomocy i monitoring"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-blue-50 p-3 font-semibold text-blue-950">
                      <CheckCircle2 size={20} className="text-blue-700" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="prawo" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-blue-700">Aspekty prawne</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Podstawy prawne i praktyczne znaczenie przepisów</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Poniższa sekcja służy jako punkt startowy. Przy pracy zawodowej zawsze korzystaj z aktualnego tekstu aktu prawnego i lokalnych procedur zespołu interdyscyplinarnego.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {legalActs.map((act) => (
              <a key={act.title} href={act.link} target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Gavel className="text-blue-700" size={30} />
                <h3 className="mt-5 text-xl font-black group-hover:text-blue-700">{act.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{act.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="procedura" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.22em] text-blue-700">Procedura krok po kroku</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Od rozpoznania przemocy do zakończenia procedury</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {procedureSteps.map((step, idx) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-blue-700">Role instytucji</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Wspólna odpowiedzialność służb</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Procedura wymaga współpracy. Każda instytucja wnosi inną perspektywę: bezpieczeństwo, diagnozę socjalną, sytuację dziecka, zdrowie, uzależnienia, wsparcie psychologiczne i prawne.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <Users className="text-blue-700" size={25} />
                <span className="font-bold">{role}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="praktyka" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.22em] text-blue-300">Przykłady z praktyki</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Jak myśleć o sytuacjach zgłaszanych w terenie</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {examples.map((example) => (
                <div key={example.title} className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur">
                  <BookOpen className="text-blue-300" size={30} />
                  <h3 className="mt-5 text-xl font-black">{example.title}</h3>
                  <p className="mt-4 leading-7 text-slate-200">{example.body}</p>
                  <p className="mt-5 rounded-2xl bg-blue-500/15 p-4 text-sm font-semibold leading-6 text-blue-100">{example.action}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="checklisty" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-[0.22em] text-blue-700">Narzędzia pracy</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Checklista pierwszego kontaktu</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Lista pomaga uporządkować pierwszą rozmowę. Nie zastępuje formularzy ani lokalnych procedur, ale wspiera bezpieczne i spokojne zebranie informacji.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              {checklist.map((item) => (
                <label key={item} className="flex gap-3 border-b border-slate-100 py-4 last:border-b-0">
                  <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-300" />
                  <span className="font-medium leading-7 text-slate-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <section id="pliki" className="bg-blue-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="font-bold uppercase tracking-[0.22em] text-blue-700">Pliki do pobrania</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Formularze, wzory i materiały robocze</h2>
              </div>
              <p className="max-w-xl leading-7 text-slate-700">
                Linki do formularzy prowadzą do oficjalnego rozporządzenia. Materiały robocze można przygotować jako osobne pliki PDF/DOCX dla Twojej instytucji.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {downloads.map((file) => (
                <a key={file.name} href={file.href} target={file.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <FileText className="text-blue-700" size={30} />
                    <Download className="text-slate-400 transition group-hover:text-blue-700" size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-black group-hover:text-blue-700">{file.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{file.type}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-12">
              <Landmark className="text-blue-300" size={36} />
              <h2 className="mt-5 text-3xl font-black md:text-5xl">Strefa szybkiej pomocy</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                W przypadku bezpośredniego zagrożenia życia lub zdrowia należy niezwłocznie kontaktować się z numerem alarmowym 112. Strona nie zastępuje interwencji służb ani porady prawnej w konkretnej sprawie.
              </p>
              <div className="mt-8 rounded-3xl bg-white/10 p-6">
                <div className="flex items-center gap-3 text-2xl font-black"><Phone className="text-blue-300" /> 112</div>
                <p className="mt-2 text-slate-300">Numer alarmowy w sytuacji bezpośredniego zagrożenia.</p>
              </div>
            </div>
            <div className="bg-white p-8 text-slate-950 md:p-12">
              <h3 className="text-2xl font-black">Dla administratora strony</h3>
              <p className="mt-4 leading-7 text-slate-700">
                W tym miejscu możesz dodać lokalne kontakty: zespół interdyscyplinarny, ośrodek pomocy społecznej, punkt konsultacyjny, dyżury prawne, telefon interwencyjny, adres ePUAP oraz godziny przyjęć.
              </p>
              <div className="mt-6 grid gap-4">
                {["Nazwa instytucji", "Adres", "Telefon", "E-mail", "Godziny dyżurów"].map((field) => (
                  <div key={field} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-600">
                    {field}: do uzupełnienia
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        Portal edukacyjno-informacyjny. Treści należy okresowo weryfikować z aktualnym stanem prawnym i lokalnymi procedurami.
      </footer>
    </div>
  );
}
