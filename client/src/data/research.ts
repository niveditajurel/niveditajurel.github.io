export interface ResearchStep {
  title: string;
  detail: string;
}

export interface ResearchItem {
  id: string;
  route: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  authors: string[];
  year: string;
  format: string;
  containerTitle: string;
  containerSubtitle: string;
  publisher: string;
  pages: string;
  doi: string;
  doiUrl: string;
  publisherUrl: string;
  summary: string;
  context: string;
  approach: string;
  output: string;
  citation: string;
  keywords: string[];
  flow: ResearchStep[];
}

export const aisliResearch: ResearchItem = {
  id: "aisli",
  route: "/research/aisli",
  title:
    "Audio to Indian Sign Language Interpreter (AISLI) using machine translation and NLP techniques",
  shortTitle: "Audio to Indian Sign Language Interpreter (AISLI)",
  subtitle:
    "A 2023 book chapter on converting spoken English into Indian Sign Language outputs using speech recognition, machine translation, and NLP.",
  authors: ["B. K. Tripathy", "Nivedita"],
  year: "2023",
  format: "Book chapter",
  containerTitle: "Hybrid Computational Intelligent Systems",
  containerSubtitle: "Modeling, Simulation and Optimization",
  publisher: "CRC Press",
  pages: "189-200",
  doi: "10.1201/9781003381167-12",
  doiUrl: "https://doi.org/10.1201/9781003381167-12",
  publisherUrl:
    "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003381167-12/audio-indian-sign-language-interpreter-aisli-using-machine-translation-nlp-techniques-tripathy-nivedita",
  summary:
    "Co-authored a chapter proposing AISLI, a system that takes spoken English, recognizes the audio, follows an Indian Sign Language translation structure, and returns sign output through GIFs and letter-level output.",
  context:
    "The work starts from a communication gap between people with hearing disabilities and people who do not know sign language.",
  approach:
    "The proposed pipeline uses Google API-based audio recognition together with Natural Language Processing and machine translation to move from spoken English into an Indian Sign Language-oriented output structure.",
  output:
    "The system is described as producing Indian Sign Language output in GIF form, along with letters based on the recognized phrase or word.",
  citation:
    "Tripathy, B. K., and Nivedita. (2023). Audio to Indian Sign Language Interpreter (AISLI) using machine translation and NLP techniques. In Hybrid Computational Intelligent Systems: Modeling, Simulation and Optimization (pp. 189-200). CRC Press. https://doi.org/10.1201/9781003381167-12",
  keywords: [
    "Accessibility",
    "Speech recognition",
    "Machine translation",
    "Natural Language Processing",
    "Indian Sign Language",
  ],
  flow: [
    {
      title: "Audio input",
      detail: "Spoken English is captured as the starting signal.",
    },
    {
      title: "Speech recognition",
      detail: "Google API-based recognition converts the audio into text.",
    },
    {
      title: "Language processing",
      detail: "NLP and machine translation are used to align the text with an Indian Sign Language structure.",
    },
    {
      title: "Sign output",
      detail: "The interpreted result is delivered through GIFs and letter-level output based on the recognized phrase or word.",
    },
  ],
};
