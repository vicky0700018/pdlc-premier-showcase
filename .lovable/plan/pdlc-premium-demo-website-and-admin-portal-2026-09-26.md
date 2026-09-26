# PDLC Premium Demo Website and Admin Portal

## Goal
Build a complete frontend-only PDLC demo with polished public pages and a simulated admin portal. The visual direction will retain PDLC’s recognizable academic identity while using the supplied navy, gold, and neutral palette, editorial typography, realistic education imagery, fine borders, restrained motion, and responsive layouts.

The implementation will remain React + Vite + Tailwind CSS and mock data only. The project’s existing TanStack file router will be used solely for client-facing page navigation because it is part of the fixed React/Vite project scaffold; no backend, database, API, server action, or real authentication will be added.

## Public Experience
- Create a shared sticky overlay header, responsive mobile navigation, PDLC wordmark treatment, footer, floating mobile actions, page transitions, and reusable CTA/form/modal patterns.
- Build dedicated pages for Home, About, Programs, Program Details, Achievers, Faculty, Centers, Testimonials, FAQ, Contact, Enquiry, and Careers.
- Compose the Home page from the requested hero, floating hero metrics, statistics strip, about split, six reasons, filterable program showcase, featured program, achievers, faculty, four-step learning timeline, testimonial carousel, center previews, and admission CTA.
- Use fictional names, achievements, reviews, centers, enquiries, and jobs. Placeholder client contact fields will be visibly marked as demo details rather than presented as real PDLC information.
- Add working program filters, dynamic program detail navigation, FAQ accordions, testimonial controls, brochure notification, enquiry/contact/application forms, and success dialogs.
- Add unique PDLC page titles, descriptions, Open Graph text, and social-card metadata to every public route.

## Visual System and Assets
- Define the full supplied palette as semantic design tokens: navy `#0B1F3A`, secondary blue `#123B63`, gold `#D4A72C`, light gold `#F4D98B`, cool background, white, ink, muted text, and success green.
- Use a distinctive editorial serif for major academic/scansorial headings and a precise sans-serif for navigation, body copy, forms, tables, and admin data.
- Create a responsive vector/text PDLC wordmark inspired by the official brand composition without copying its asset.
- Generate a cohesive set of original, realistic education images for the hero, classrooms, mentorship, programs, faculty, achievers, centers, and CTA areas.
- Centralize subtle fade, slide, hover-lift, image-zoom, accordion, modal, navbar, and counter motion, including reduced-motion support.

## Mock Data and Session State
- Create typed centralized mock collections for hero banners, programs, categories, faculty, achievers, testimonials, centers, FAQs, enquiries, careers, statistics, website settings, social links, and contact details.
- Wrap the app in one in-memory React data provider so admin edits immediately update the public pages during the current browser session.
- Implement reusable add/edit forms, delete confirmations, visibility/active toggles, status controls, search, filters, toast notices, empty states, and simulated loading states.
- Reset all changes naturally on page refresh; no local storage, backend, API, or database will be used.

## Admin Experience
- Create `/admin/login` with PDLC branding and the supplied demo credentials (`admin@demo.com` / `admin123`), validation, password visibility control, and a clear demo-only notice.
- Simulate session-only authentication in React state and redirect successful sign-in to `/admin/dashboard`.
- Create a responsive admin shell with desktop/mobile sidebar, top search, notification panel, profile menu, and logout.
- Build a dashboard overview with requested totals and recent-enquiry status controls.
- Implement editable management views for Hero Banner, Website Settings, About, Programs, Program Categories, Achievers, Faculty, Testimonials, Centers, FAQs, Enquiries, Careers, Contact Information, Social Links, and Admin Profile.
- Use a consistent table/card editor pattern with mobile-friendly list views and working CRUD/toggle actions for all requested modules.

## Route Structure
- Public: `/`, `/about`, `/programs`, `/programs/$programId`, `/achievers`, `/faculty`, `/centers`, `/testimonials`, `/faq`, `/contact`, `/enquiry`, `/careers`.
- Admin: `/admin/login` and `/admin/dashboard`; dashboard subsections switch within the admin shell so management remains fast and cohesive.
- Every linked destination will exist in the same implementation, including the footer’s subtle Admin Login link.

## Verification
- Verify the preview compiles without errors and inspect runtime/console signals.
- Exercise navigation, mobile menu, program filtering/details, brochure notice, testimonial carousel, FAQ accordion, all public forms, admin login/logout, admin navigation, CRUD actions, toggles, enquiry search/status updates, and public-page reflection of admin edits.
- Visually inspect desktop and 390px mobile layouts for overflow, clipped text, broken imagery, navigation usability, modal/table behavior, and consistent PDLC branding.

## Scope Notes
- All people, results, reviews, locations, jobs, statistics, and contact details are explicitly demo content.
- No official PDLC image, testimonial, exact marketing copy, proprietary code, or private data will be copied.
- “Download Brochure,” map/directions, social links, phone, and email actions remain polished demo interactions until real client details or files are supplied.
