import Container from "./Container";
import { Icon } from "./Icons";
import { Reveal, RevealGroup, RevealItem } from "./motion/Motion";

const publications = [
  {
    source: "Jack Kent Cooke Foundation",
    date: "2025-05-13",
    displayDate: "May 13, 2025",
    category: "National scholarship",
    title: "2025 Cooke Undergraduate Transfer Scholar",
    description:
      "Selected as one of 90 Cooke Undergraduate Transfer Scholars nationwide in 2025 from more than 1,600 applicants.",
    href: "https://www.jkcf.org/our-stories/2025-transfer-scholarship-finalists/",
    linkText: "Read the Foundation announcement",
  },
  {
    source: "BMCC / The City University of New York",
    date: "2025-05-15",
    displayDate: "May 15, 2025",
    category: "University news feature",
    title: "Academic Excellence & Leadership",
    description:
      "Featured in a university news article recognizing my academic achievements, leadership, and selection as a Jack Kent Cooke Scholar.",
    href: "https://www.bmcc.cuny.edu/news/bmcc-computer-science-star-abdoulaye-diallo-named-prestigious-cooke-undergraduate-scholar/",
    linkText: "Read the university feature",
  },
] as const;

export default function HonorsRecognition() {
  return (
    <section id="honors" aria-labelledby="honors-heading" className="py-10 scroll-mt-24">
      <Container>
        <Reveal className="mb-4 flex items-center gap-3">
          <span className="icon-orb h-9 w-9"><Icon name="sparkles" className="h-4 w-4" /></span>
          <h2 id="honors-heading" className="text-xl font-bold">Honors &amp; Recognition</h2>
        </Reveal>
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {publications.map((publication) => (
            <RevealItem key={publication.href} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1f55c6]">
                  {publication.category}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug">{publication.title}</h3>
                <div className="mt-3 border-t border-neutral-100 pt-3 text-sm text-neutral-600">
                  <p className="font-medium text-neutral-800">{publication.source}</p>
                  <time dateTime={publication.date} className="mt-1 block">{publication.displayDate}</time>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{publication.description}</p>
                <div className="mt-auto pt-5">
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#1f55c6] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f55c6]"
                  >
                    {publication.linkText}
                    <Icon name="external" className="h-4 w-4 shrink-0" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
