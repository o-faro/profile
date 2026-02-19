---
dateRange: "01.2019 – 03.2021"
id: siemens-hellopage
title: Siemens „HelloPage“ – Intranet Startseite
aliases:
  - Siemens – Intranet Portal „HelloPage“
clientOrganization: Siemens
agencyOrPartner: Querplex
roleText: Senior Frontend Entwickler
employmentTypeText: Freie Mitarbeit
locationText: München
techStack: |-
  React · TypeScript · SCSS
  Drag & Drop · Framer Motion · Cypress · React Testing Library

  React, TypeScript, Redux, Drag & Drop, GSAP, Enterprise UI Patterns
narratives:
  cv:
    - label: CV-Beschreibung
      bodyText:
        - "Konzeption und Entwicklung eines internen Enterprise-Portals von Projektbeginn an mit Fokus auf ein desktopähnliches Nutzungserlebnis"
        - "Umsetzung komplexer Drag-and-Drop-Interaktionen und animierter UI-Übergänge"
        - "Entwicklung einer vollständig animierten Guided Tour mit GSAP inklusive automatischer Seitenwechsel"
        - "Starker Fokus auf Usability, Performance und Skalierbarkeit im Konzernumfeld"
        - "Enge Zusammenarbeit mit UX/UI-Designern, Backend-Entwicklung und Produktverantwortlichen"
  portfolio:
    - label: Projektbeschreibung
      bodyText: |-
        Entwicklung der zentralen Startseite des Siemens-Intranets mit Fokus auf ein personalisiertes,
        desktopähnliches Nutzungserlebnis.
        Die Anwendung zeichnet sich durch dynamische UI-Elemente, Animationen und umfangreiche
        Konfigurierbarkeit aus.
        Schwerpunkte
        • Komplexe UI-Interaktionen (Drag & Drop, Off-Canvas, Animationen)
        • Konfigurierbare Linksammlungen und Kachel-Layouts
        • Guided Tour mit Persistenz von Abbruchpunkten
        • Performance-Optimierung
        • Mitarbeit in einem agilen Scrum-Team

isHero: true
showInCV: true
showInArchive: true
detailPage: true

wentLive: false

visibility:
  publicUrl: null
  screenshotsAllowed: false
---

## Context

Implementierung globaler Intranet Portalseite für Siemens.

## Role & setup

As a freelancing frontend developer for Querplex in Munich.

## Problem space

Start page of Siemens intranet.  
The start page is shaped by dynamic elements like animations, drag and drop and offcanvas elements. Its contents are personal and global calendar entries and configurable link collections.

## Key decisions & solutions

- Realisierung des reponsiven Layouts mit ReactJS/Typescript und SCSS
- Konfigurierbare Linksammlung  
  über Drag & Drop konnten Newsfeeds aus einer Leiste mit Vorschlägen in den Arbeitsbereich werden.
- Konfigurierbare Kacheln mit relevanten Feeds aus dem Siemens Universum.  
  Es gab eine Grundkonfiguration an vorgegebenen Themen, die beliebig erweitert werden konnte.  
  Der Anwender konnte pro Seite 6 Kacheln in einer beliebigen Reihenfolge und auf beliebig vielen Seiten sortieren.
- Guided Tour: klassische Tour, die den Anwender über alle Seiten der Anwendung führt, um Funktionalitäten zu erläutern. Abbrechpunkte wurden gespeichert, um die Tour zu einem späteren Zeitpunkt fortführen zu können. Die Tour interagierte mit den bereits vorhanden Seitenanimationen wie Page Transitions, Offcanvas-Elementen oder Slidern.

## Quality & collaboration

- Unit tests (react testing library)
- Planung von Sprints als Mitglied eines Scrum Teams

## Constraints

Leider kann ich nicht in das Siemens Intranet verlinken oder Screencasts davon zeigen.

## Status / Outcome
