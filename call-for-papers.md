---
layout: page
title: Call for Papers
permalink: /call-for-papers/
description: "Call for papers for GeoAI 2027, SpaceTimeAI: Bringing Time into GeoAI, at UCL, London."
easychair_url: ""     # TODO: EasyChair submission link, e.g. https://easychair.org/conferences?conf=geoai2027
contact_email: ""     # TODO: conference contact address
---

{% capture easychair %}{% if page.easychair_url != "" %}[EasyChair]({{ page.easychair_url }}){% else %}EasyChair (link coming soon){% endif %}{% endcapture %}
{% capture email %}{% if page.contact_email != "" %}[{{ page.contact_email }}](mailto:{{ page.contact_email }}){% else %}the organising committee (address coming soon){% endif %}{% endcapture %}

<p class="lead">
  GeoAI 2027 invites submissions on all aspects of geospatial artificial intelligence, with a particular focus on this year's theme, <strong>SpaceTimeAI: Bringing Time into GeoAI</strong>.
</p>

## Theme

Geospatial Artificial Intelligence (GeoAI), originally grounded in GIScience, Computer Science and related fields, is an emerging discipline that aims to enable machines to learn, reason and analyse geospatial data in ways similar to humans, and sometimes beyond human capabilities. It integrates geographic knowledge and methods with AI to address geographic problems and beyond.

Researchers are increasingly using large language models and multimodal foundation models alongside "traditional" machine learning and deep learning across a range of GeoAI tasks. GeoFoundation models, which use embeddings of geospatial data to produce global-scale models, are being developed for many applications. However, many of these models are built on static data snapshots and are not suited to temporal dynamics and real-time data streams. Established GeoAI models such as graph neural networks, on the other hand, are inherently suited to spatiotemporal data and continue to show state-of-the-art performance.

GeoAI 2027 provides a platform to showcase the latest advances in GeoFoundation models and in GeoAI methods that handle the unique properties of spatiotemporal data, moving towards a research agenda that fully integrates time into GeoAI.

## Topics

Topics of interest include, but are not limited to:

- Foundations and nature of GeoAI and SpaceTimeAI
- AI architectures for spatiotemporal data
- Representations and embeddings of spatiotemporal data in GeoAI and SpaceTimeAI
- Spatially and temporally explicit AI
- Neuro-symbolic GeoAI
- Geographic knowledge graphs for GeoAI
- Explainable, trustworthy, transparent and responsible GeoAI
- Ethics, fairness and bias in GeoAI
- GeoAI for real-time geospatial and spatiotemporal data streams (e.g. IoT, sensors, mobility)
- GeoAI benchmarking and evaluation
- Geospatial and spatiotemporal foundation models
- Multimodal GeoAI and SpaceTimeAI
- Large language models (LLMs) and GeoAI
- Vision-language models (VLMs) for GeoAI
- NLP and computer vision for GeoAI
- World models and GeoAI
- Generative GeoAI
- Agentic GeoAI
- Reproducibility, open science, education and training in GeoAI
- Sustainability issues of GeoAI
- Applications of GeoAI and SpaceTimeAI

## How to submit

### Extended abstracts

- **Length:** 600–1,200 words, in English.
- **Format:** PDF, using the GeoAI 2027 [template](#templates) (Word or LaTeX), with figures included in the text.
- **Content:** research objectives and significance, a methodology described clearly enough to support reproducibility, and preliminary or expected findings. Vision and opinion papers are also welcome.
- **Review:** single-blind, by three members of the Programme Committee.
- **Outcome:** accepted abstracts are presented as a talk or a poster and published in the online conference proceedings on Zenodo, with a DOI.
- **Examples:** see the GeoAI 2026 proceedings for [oral presentations](https://zenodo.org/communities/geoaiconference_oral/records?q=&l=list&p=1&s=10&sort=newest) and [posters](https://zenodo.org/communities/geoaiconference_poster/records?q=&l=list&p=1&s=10&sort=newest).
- **Submission:** via {{ easychair }}.

### Templates

Download the template in [Word]({{ '/assets/templates/GeoAI2027_Word_template.docx' | relative_url }}) or [LaTeX]({{ '/assets/templates/GeoAI2027_LaTeX_template.zip' | relative_url }}) format. If your abstract is accepted, edit the first-page footnote in the camera-ready version to keep either "Oral Presentation Papers" or "Poster Papers", matching your presentation type.

### Published-article track

Authors can present a full paper published in a peer-reviewed journal or conference in 2025–2027.

- Send a 300–600 word summary to {{ email }}, including the full citation and a link to the published article.
- Submissions are reviewed by the Organising Committee. Accepted papers are presented as a talk or a poster.

### Industry presentations

Companies and organisations are invited to present their GeoAI solutions. Please contact {{ email }} with a short description of the proposed talk or demo. Sponsorship of the conference is highly recommended.

### Workshop and tutorial proposals

GeoAI 2027 invites proposals for half-day workshops and tutorials, held on the pre-conference day. Formats can include talks, hands-on sessions, discussions or a mix of these. For inspiration, see the [GeoAI 2026 workshops](https://2026.geoaiconference.org/?page_id=200).

- **Length:** up to 1,000 words, in English.
- **Format:** PDF. Any template may be used.
- **Content:** title; organisers with affiliations and a contact person; aims and relevance to GeoAI and the conference theme; format and a draft schedule; target audience and expected number of participants; how participants will join (open attendance, call for contributions or statement of interest); and any technical requirements, such as computer rooms, software, data or internet access.
- **Review:** by the Workshop and Tutorial Chair and the Organising Committee.
- **Outcome:** accepted workshops and tutorials are announced on the conference website. Organisers run their own sessions, including any call for contributions.
- **Submission:** by email to {{ email }}.

## Important dates

All deadlines are 23:59 [Anywhere on Earth](https://time.is/Anywhere_on_Earth) (UTC−12).

| Milestone | Date |
|---|---|
| Workshop and tutorial proposals | 8 January 2027 |
| Extended abstracts and published-article summaries | 22 January 2027 |
| Notification of acceptance | 1 March 2027 |
| Early-bird registration | 2 April 2027 |
| Registration closes | 7 June 2027 |
| Conference | 29 June – 2 July 2027 |
{: .table .w-auto }

## Publication

All accepted extended abstracts are published in the online conference proceedings on Zenodo. The organisers are also planning special issues in leading GIScience and computer science journals; details will be announced here.
