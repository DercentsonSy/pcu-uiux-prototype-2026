<script>
  const requirements = [
    {
      title: 'Annual Financial Statements (AFS)',
      due: '120 days after fiscal year end',
      appliesTo: 'Corporations with primary licenses',
      description:
        'Audited financial statements with accompanying notes and audit report prepared by an accredited external auditor.',
      link: 'https://www.sec.gov.ph/reportorial-requirements/'
    },
    {
      title: 'General Information Sheet (GIS)',
      due: 'Within 30 days from annual stockholders’ meeting',
      appliesTo: 'All domestic corporations',
      description: 'Updated corporate profile, officers, shareholders, and beneficial ownership details.',
      link: 'https://www.sec.gov.ph/reportorial-requirements/'
    },
    {
      title: 'Special Forms (e.g., MC28)',
      due: 'Within 30 days from changes',
      appliesTo: 'Entities with changes in official contact details or primary/secondary purposes',
      description: 'Contact information updates, principal office changes, and other material corporate amendments.',
      link: 'https://www.sec.gov.ph/mc-28-2020/'
    },
    {
      title: 'Beneficial Ownership Information (BOI)',
      due: 'Within 30 days from incorporation and within 30 days of changes',
      appliesTo: 'All covered corporations',
      description: 'Declaration of beneficial owners to comply with anti-money laundering transparency rules.',
      link: 'https://www.sec.gov.ph/circulars/2021/cmc-no-1-s-2021/'
    }
  ];

  const steps = [
    {
      label: '1',
      title: 'Review requirements',
      detail: 'Confirm which forms apply to your entity type (primary license, domestic/foreign, non-stock).' ,
    },
    {
      label: '2',
      title: 'Prepare documents',
      detail: 'Gather audited AFS, GIS details, board resolutions, and updated contact information.'
    },
    {
      label: '3',
      title: 'Submit digitally',
      detail: 'File via SEC’s eFAST or designated submission channels. Keep your tracking number.'
    },
    {
      label: '4',
      title: 'Monitor status',
      detail: 'Track acknowledgments and address any SEC clarifications before deadlines.'
    }
  ];

  const faqs = [
    {
      q: 'Where do I submit the requirements?',
      a: 'Use SEC eFAST for electronic filings. Some documents may require in-person or courier submission as indicated by SEC notices.'
    },
    {
      q: 'Can deadlines be extended?',
      a: 'Extensions are rare. Watch for official SEC advisories for calamity or public emergency adjustments.'
    },
    {
      q: 'What happens if I miss a deadline?',
      a: 'Late filings may incur penalties, possible revocation proceedings, and difficulty in securing clearances.'
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
  <header class="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <div class="flex items-center gap-3">
        <div class="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-white shadow-card">
          <div class="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100"></div>
          <div class="absolute inset-0 grid place-content-center font-display text-xs font-bold text-brand-700">SEC</div>
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Primary License Filers</p>
          <p class="font-display text-xl font-semibold text-slate-900">Reportorial Requirements</p>
          <p class="text-[13px] text-slate-600">Quick guide • Deadlines • Contacts</p>
        </div>
      </div>
      <div class="hidden items-center gap-3 sm:flex">
        <a
          class="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-700 shadow-soft ring-1 ring-slate-200 hover:ring-brand-200"
          href="https://www.sec.gov.ph/"
          target="_blank"
          rel="noreferrer"
        >
          SEC Home
        </a>
        <a
          class="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-500"
          href="#requirements"
        >
          View requirements
        </a>
      </div>
    </div>
  </header>

  <main class="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pt-14">
    <section class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 shadow-soft ring-1 ring-slate-100">
          Primary license filers • Corporations
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
        </div>
        <h1 class="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Stay compliant with SEC reportorial requirements.
        </h1>
        <p class="text-lg text-slate-700 sm:max-w-2xl">
          Everything you need to file on time: deadlines, submission channels, and direct links to official SEC resources and eFAST.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            class="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-500"
            href="#requirements"
          >
            Browse requirements
            <span class="text-lg">→</span>
          </a>
          <a
            class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-brand-200"
            href="https://www.sec.gov.ph/reportorial-requirements/corporations-with-primary-licenses/"
            target="_blank"
            rel="noreferrer"
          >
            View official guidance
          </a>
          <a
            class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            href="https://cifss-efile.sec.gov.ph/"
            target="_blank"
            rel="noreferrer"
          >
            Go to eFAST
          </a>
        </div>
        <div class="grid gap-3 sm:grid-cols-3">
          <div class="section-card p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Up to date</p>
            <p class="text-sm text-slate-700">Aligned with current SEC reportorial requirements.</p>
          </div>
          <div class="section-card p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Official links</p>
            <p class="text-sm text-slate-700">Direct access to SEC resources and eFAST portal.</p>
          </div>
          <div class="section-card p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Easy to use</p>
            <p class="text-sm text-slate-700">Clear structure, readable text, mobile-friendly.</p>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="section-card p-5">
            <p class="text-sm text-slate-500">Who is this for?</p>
            <p class="mt-1 text-lg font-semibold text-slate-900">Corporations with primary licenses</p>
            <p class="mt-2 text-sm text-slate-600">Domestic and foreign, stock or non-stock, required to file AFS, GIS, and related forms.</p>
          </div>
          <div class="section-card p-5">
            <p class="text-sm text-slate-500">Why it matters</p>
            <p class="mt-1 text-lg font-semibold text-slate-900">Avoid penalties and maintain good standing</p>
            <p class="mt-2 text-sm text-slate-600">Meet deadlines, keep records current, and respond quickly to SEC clarifications.</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-emerald-50 blur-3xl"></div>
        <div class="section-card overflow-hidden border-brand-50/60">
          <div class="bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 px-6 py-5 text-white">
            <p class="text-sm uppercase tracking-[0.2em] text-white/80">At a glance</p>
            <p class="mt-1 text-2xl font-semibold">Key deadlines & coverage</p>
          </div>
          <div class="divide-y divide-slate-100">
            {#each requirements as req}
              <div class="px-6 py-4 grid gap-2 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                <div>
                  <p class="font-semibold text-slate-900">{req.title}</p>
                  <p class="text-sm text-slate-600">{req.description}</p>
                </div>
                <div class="grid gap-1 sm:justify-items-end">
                  <p class="text-sm font-semibold text-brand-700">{req.due}</p>
                  <p class="text-xs text-slate-500">{req.appliesTo}</p>
                  <a
                    class="text-sm font-medium text-brand-700 hover:text-brand-600"
                    href={req.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View details →
                  </a>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section id="requirements" class="mt-16 space-y-8">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Checklist</p>
          <h2 class="font-display text-3xl font-bold text-slate-900">Core reportorial requirements</h2>
          <p class="max-w-3xl text-slate-700">Tailored to corporations with primary licenses. Always verify against the latest SEC circulars and memoranda.</p>
        </div>
        <a
          class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-soft ring-1 ring-slate-200 hover:ring-brand-200"
          href="https://www.sec.gov.ph/reportorial-requirements/corporations-with-primary-licenses/"
          target="_blank"
          rel="noreferrer"
        >
          See full list
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        {#each requirements as req}
          <article class="section-card p-6 hover:-translate-y-1 hover:shadow-card transition duration-200">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{req.appliesTo}</p>
                <h3 class="mt-1 font-display text-xl font-semibold text-slate-900">{req.title}</h3>
              </div>
              <span class="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{req.due}</span>
            </div>
            <p class="mt-3 text-sm text-slate-700">{req.description}</p>
            <div class="mt-4 flex flex-wrap gap-3">
              <a
                class="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-2 text-xs font-semibold text-white hover:bg-brand-500"
                href={req.link}
                target="_blank"
                rel="noreferrer"
              >
                Official reference
              </a>
              <a
                class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                href="#contact"
              >
                Talk to compliance
              </a>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="section-card p-6">
        <div class="flex items-center gap-2">
          <div class="h-10 w-10 rounded-2xl bg-emerald-500 text-white grid place-content-center font-semibold">✓</div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">Action plan</p>
            <h3 class="font-display text-2xl font-semibold text-slate-900">4-step compliance flow</h3>
          </div>
        </div>
        <div class="mt-6 space-y-4">
          {#each steps as step}
            <div class="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 shadow-inner">
              <div class="mt-1 h-8 w-8 shrink-0 rounded-full bg-brand-600 text-white grid place-content-center font-semibold">
                {step.label}
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">{step.title}</p>
                <p class="text-sm text-slate-600">{step.detail}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="section-card p-6">
        <div class="flex items-center gap-2">
          <div class="h-10 w-10 rounded-2xl bg-brand-600 text-white grid place-content-center font-semibold">?</div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">FAQs</p>
            <h3 class="font-display text-2xl font-semibold text-slate-900">Quick answers</h3>
          </div>
        </div>
        <div class="mt-6 space-y-4">
          {#each faqs as faq}
            <details class="group rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-inner">
              <summary class="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900">
                {faq.q}
                <span class="text-lg text-brand-600 transition group-open:rotate-45">+</span>
              </summary>
              <p class="mt-2 text-sm text-slate-600">{faq.a}</p>
            </details>
          {/each}
        </div>
      </div>
    </section>

    <section id="contact" class="mt-16 section-card overflow-hidden">
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-500 px-8 py-10 text-white">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Need help?</p>
          <h3 class="mt-2 font-display text-3xl font-semibold">SEC Contact Center</h3>
          <p class="mt-3 max-w-xl text-white/80">For clarifications on schedules, acceptable formats, and system availability.</p>
          <ul class="mt-6 space-y-2 text-white/85">
            <li>📧  compliance@sec.gov.ph</li>
            <li>☎️  +63 (2) 8818-0921</li>
            <li>🏢  Secretariat Building, PICC Complex, Pasay City</li>
          </ul>
          <div class="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-white">
            <span class="h-2 w-2 rounded-full bg-emerald-300"></span>
            Support hours: Mon–Fri, 8:00 AM–5:00 PM PHT
          </div>
        </div>
        <div class="p-8">
          <h4 class="font-display text-2xl font-semibold text-slate-900">Good practice reminders</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-700">
            <li>• Keep proof of submission and acknowledgment receipts.</li>
            <li>• Verify if notarization or apostille is required for your filing.</li>
            <li>• Update authorized representatives and contact emails regularly.</li>
            <li>• Monitor SEC advisories for any changes in format or deadlines.</li>
          </ul>
          <div class="mt-6 flex flex-wrap gap-3">
            <a
              class="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-500"
              href="https://www.sec.gov.ph/"
              target="_blank"
              rel="noreferrer"
            >
              Visit SEC website
            </a>
            <a
              class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:ring-brand-200"
              href="https://www.sec.gov.ph/reportorial-requirements/corporations-with-primary-licenses/"
              target="_blank"
              rel="noreferrer"
            >
              View reportorial page
            </a>
          </div>
          <div class="mt-6 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <p class="font-semibold text-slate-900">Compliance calendar tip</p>
            <p>Set reminders 30 and 10 days before each deadline. Keep eFAST credentials and latest templates on file.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-slate-200 bg-white/80 backdrop-blur">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm text-slate-600">Reference guide for SEC Philippines reportorial requirements.</p>
      <div class="flex gap-3 text-sm text-slate-600">
        <a href="https://www.sec.gov.ph/" target="_blank" rel="noreferrer" class="hover:text-brand-700">SEC Home</a>
        <span aria-hidden="true">•</span>
        <a href="https://www.sec.gov.ph/reportorial-requirements/" target="_blank" rel="noreferrer" class="hover:text-brand-700">Reportorial Requirements</a>
      </div>
    </div>
  </footer>
</div>
