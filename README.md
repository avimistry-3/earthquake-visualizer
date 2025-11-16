# Earthquake Visualizer

A **React + TypeScript** app (built with Vite) that fetches and visualizes recent earthquake data from the USGS feed:  
[https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv)

Features:

- Interactive scatter chart with configurable axes.  
- Scrollable data table showing all earthquake details.  
- Two-way selection: clicking a chart point highlights the corresponding table row and vice versa.  

---

## Prerequisites

- Node.js **20.19+** or **22.12+**  
- npm **9+**  

## Installation

### Clone the repository:

git clone https://github.com/avimistry-3/earthquake-visualizer.git
cd earthquake-visualizer

### Install dependencies:
npm install

### Running the Development Server
npm run dev

Open http://localhost:5173 in your browser.

## External Dependencies

| Package | Purpose |
|---------|---------|
| **react** | Core library for building UI components. |
| **react-dom** | Handles rendering React components in the DOM. |
| **typescript** | Adds static typing to JavaScript for safer, clearer code. |
| **vite** | Fast build tool and development server for React + TypeScript. |
| **recharts** | Charting library for building interactive scatter plots. |
| **axios** | HTTP client for fetching earthquake CSV data from the USGS feed. |
| **@tanstack/react-query** | Manages data fetching, caching, and UI updates efficiently. |
| **zustand** | Lightweight state management for selected table/chart rows. |
| **postcss** | Processes CSS files. |
