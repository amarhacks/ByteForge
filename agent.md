# Depth Content Rules for Future Agents

This file defines the required rules when adding or updating topics, subtopics, or articles in this repo. Follow these rules for every change.

## Core Article Layout Rules
- Use the standard article shell used by `file_index/articles/designing_10m_users.html`.
- Keep the page structure in this order: `nav`, `article-hero`, `article-content`, newsletter, footer.
- Preserve the article title text exactly as provided. Do not rewrite headings.
- Preserve any existing highlight spans in titles such as `<span class="hl">` and `<span class="hl2">`.
- Never remove or rewrite user-supplied article body text. Layout fixes should keep the content verbatim; if the original text is missing, ask for the exact source before editing.
- Keep `body` classes and `data-nav` aligned to the topic of the article.
- Use the existing `article-panel` for Key Themes and mirror the subtitle text there.
- Each article file must contain exactly one HTML document. Never leave duplicate `<!DOCTYPE html>` blocks or inline custom layouts.
- Avoid inline `<style>` blocks inside article files. Use the shared Depth CSS only.

## AI / ML Longform Rules
- AI / ML longform articles must include `../../css/depth/components/ai-longform.css`.
- Wrap the longform content inside `<div class="ai-longform">`.
- Keep the hero layout identical to the standard article pattern.
- Use the existing longform pattern from `file_index/articles/hidden_cost_vector_search.html` as the reference.
- Update the "On This Page" TOC to match the section IDs in the longform content.

## Topic and Subtopic Rules
- Every article must appear under the correct topic page in `file_index/<topic>.html`.
- Every article must appear under the correct subtopic page in `file_index/subtopics/<topic>/<subtopic>.html`.
- Subtopic pages must only include articles that match the subtopic name.
- Update the subtopic counts in the sort bar to match the number of cards rendered.
- If you add a new subtopic, add it to the filter bar on every subtopic page for that topic.
- Update the "Core Subtopics" cards on the topic page to keep links and counts accurate.
- Subtopic cards should use tags that reflect the article metadata (read time, year, and the three primary tags).

## Index and Archive Rules
- Add new articles to `index.html` and `file_index/archive.html` where appropriate.
- Keep topic badges consistent with the article theme.
- Keep article cards and metadata in the same format as existing entries.

## Validation Checklist
1. Confirm all article links resolve by scanning for the filename with `rg`.
2. Verify counts in subtopic pages match the number of article cards.
3. Confirm the hero title and subtitle match the intended copy.
4. Ensure AI / ML longform pages include `ai-longform.css` and `.ai-longform`.
5. Do a quick HTML sanity check. HTML5 warnings from `xmllint` are expected and acceptable.
