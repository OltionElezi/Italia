// Import images
import { appetizers, idraulico, fabbro, elettricista } from "./assets/index.js";

// JSON string
const menuJson = {
  categories: [
    {
      category_name: "IDRAULICO",
      image: idraulico,
      products: [
        {
          description: [
            "Ristrutturazione bagno",
            "Disotturazione water, lavandino, piatto doccia, bidet",
            "Perdite occulte",
            "Collegamento lavatrice e lavastoviglie",
            "Riparazione tubi",
            "Assistenza e riparazioni di scaldabagno e termosifoni",
            "Allaccio di cucine e lavelli all’impianto idraulico",
            "Sostituzione della vecchia caldaia",
            "Sostituzione e montaggio box piatto doccia, vasca da bagno e sanitari",
            "Sostituzione flessibili e sifoni",
            "Sostituzione di sanitari",
            "Sostituzione della rubinetteria di bagno e cucina",
            "Sostituzione cassette di scarico per WC",
            "Verifica e riparazione di malfunzionamenti per un blocco della caldaia",
            "Installazione pompa di calore",
          ],
        },
      ],
    },
    {
      category_name: "ELETTRICISTA",
      image: elettricista,
      products: [
        {
          description: [
            "Riparazione di guasti elettrici",
            "Riparazione di cortocircuiti",
            "Soluzioni veloci per un black out elettrico",
            "Installazione di salvavita per la casa",
            "Installazione di quadri elettrici per aziende",
            "Certificazioni per impianti elettrici",
            "Verifiche agli impianti elettrici industriali e civili",
            "Manutenzione o rifacimento dell’impianto elettrico",
            "Messa a norma di impianti elettrici civili e industriali",
            "Adeguamento dell’impianto elettrico",
            "Installazione, riparazione o sostituzione citofono e videocitofono",
          ],
        },
      ],
    },
    {
      category_name: "FABBRO",
      image: fabbro,
      products: [
        {
          description: [
            "Pronto intervento fabbro per porte, saracinesca e serrande",
            "Apertura di porte blindate",
            "Apertura serrature bloccate",
            "Apertura di casseforti con chiusura bloccata",
            "Apertura porta a causa di perdita delle chiavi",
            "Riparazione di porte danneggiate",
            "Riparazione serratura danneggiata dai ladri",
            "Riparazione serranda o saracinesca bloccata",
            "Riparazione saracinesche, serrande e basculanti",
            "Riparazione inferriate di sicurezza",
            "Sostituzione e riparazione di serranda o cilindro danneggiato",
          ],
        },
      ],
    },
  ],
};

// Now you can use the `menu` object in your application
export default menuJson;
