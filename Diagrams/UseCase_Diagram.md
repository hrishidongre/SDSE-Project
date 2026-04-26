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
