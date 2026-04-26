# Use Case Diagram

> System functionality overview for the Astrology backend

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
graph LR

    %% Actors
    Actor((👤 User<br/>Registered))
    API[/"⚙️ VedicAstro API"\]
    DB[("🗄️ MongoDB")]

    %% System Boundary
    subgraph System ["Vedic Astrology System"]
        Auth("Authenticate User")
        Fetch("Fetch Planetary Data")
        
        UC1("Manage Birth Profile")
        UC2("Calculate Birth Chart")
        UC3("Analyse Dosha Status")
        
        UC4("Manage Saved Reports")
        UC4a("Export Report as PDF")
        
        UC5("Request Account Deletion")
    end

    %% Association (Primary Actor Relationships - Solid lines)
    Actor --- UC1
    Actor --- UC2
    Actor --- UC4
    Actor --- UC5

    %% <<include>> Relationships (Base Use Case -> Included Use Case)
    UC1 -.->|"«include»"| Auth
    UC4 -.->|"«include»"| Auth
    UC5 -.->|"«include»"| Auth
    UC2 -.->|"«include»"| Fetch

    %% <<extend>> Relationships (Extending Use Case -> Base Use Case)
    UC3 -.->|"«extend»"| UC2
    UC4a -.->|"«extend»"| UC4

    %% Secondary Association (External System Interactions)
    Fetch --- API
    UC1 --- DB
    UC2 --- DB
    UC3 --- DB
    UC4 --- DB
    UC5 --- DB

    %% Styling
    style Actor fill:#1a237e,stroke:#fff,color:#fff,stroke-width:2px
    style Auth fill:#004d40,stroke:#fff,color:#fff
    style Fetch fill:#004d40,stroke:#fff,color:#fff
    style UC1 fill:#2e7d32,stroke:#fff,color:#fff
    style UC2 fill:#2e7d32,stroke:#fff,color:#fff
    style UC3 fill:#2e7d32,stroke:#fff,color:#fff
    style UC4 fill:#2e7d32,stroke:#fff,color:#fff
    style UC4a fill:#2e7d32,stroke:#fff,color:#fff
    style UC5 fill:#2e7d32,stroke:#fff,color:#fff
    style API fill:#e65100,stroke:#fff,color:#fff,stroke-width:2px
    style DB fill:#e65100,stroke:#fff,color:#fff,stroke-width:2px
    style System fill:#00695c,stroke:#fff,color:#fff
```

---

## Use Case Descriptions

### 1. Manage Birth Profile
- **Description**: Save DOB (Date of Birth), TOB (Time of Birth), and User Coordinates
- **Actor**: Registered User
- **Purpose**: Capture essential biographical data for astrological calculations
- **Preconditions**: User must be authenticated
- **Flow**: User enters birth data -> System validates -> Data stored in MongoDB

### 2. Calculate Birth Chart
- **Description**: Virtual Rendering via VedicAstro API
- **Actor**: Registered User
- **Purpose**: Generate comprehensive birth chart
- **External Systems**: VedicAstro API
- **Flow**: User triggers calculation -> System queries VedicAstro API -> Results stored

### 3. Analyse Dosha Status
- **Description**: Analyze Mangal Dosha, Kaal Sarp Dosha
- **Actor**: Registered User
- **Purpose**: Provide detailed dosha analysis
- **Dosha Types**: Mangal Dosha, Kaal Sarp Dosha

### 4. Manage Saved Reports
- **Description**: CRUD operations for Historical Charts
- **Actor**: Registered User
- **Purpose**: Store, retrieve, update, and manage historical calculations

### 5. Request Account Deletion
- **Description**: Soft-Delete with 30-Day Recovery Window
- **Actor**: Registered User
- **Purpose**: Safe account deletion with recovery option

---

## System Components

| Component | Purpose | Details |
|-----------|---------|---------|
| Registered User | Primary Actor | Interacts with all use cases |
| Birth Profile Management | Data Intake | Stores biographical information |
| Chart Calculation Engine | Processing | Integrates with VedicAstro API |
| Dosha Analysis Engine | Analysis | Mangal and Kaal Sarp analysis |
| Report Management | CRUD Operations | Historical data in MongoDB |
| Account Management | User Control | Soft-delete with 30-day window |
| VedicAstro API | External Service | Astronomical calculations |
| MongoDB | Database | Centralized data storage |

---

*Updated: April 2026*
