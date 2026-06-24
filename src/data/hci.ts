import { Question } from "./types";

export const hciQuestions: Question[] = [
  // ===== SECTION 1: DESIGN STORIES / SCENARIOS (Questions 1-15) =====
  {
    question: "What is a 'scenario' in the context of HCI design?",
    choices: [
      "A fictional tale about graphic design history",
      "A narrative describing how a user interacts with a system to achieve a goal in a specific context",
      "A technical specification document for developers",
      "A marketing brochure for stakeholders"
    ],
    answer: 1,
    explanation: "A scenario is a narrative that describes a specific user interacting with a system in their real-world context to achieve a goal, helping designers understand user needs, workflows, and potential issues."
  },
  {
    question: "Which best describes a 'use case' in interaction design?",
    choices: [
      "A user complaint report filed after launch",
      "A structured description of interactions between an actor and a system to achieve a specific goal",
      "A database schema diagram",
      "A unit test case for software validation"
    ],
    answer: 1,
    explanation: "A use case formally describes the sequence of interactions between a user (actor) and the system to accomplish a specific goal, including preconditions, main flow, alternate paths, and postconditions."
  },
  {
    question: "How do scenarios differ from use cases in design?",
    choices: [
      "They are identical in form and purpose",
      "Scenarios are narrative and context-rich; use cases are more structured and formal",
      "Use cases are fictional narratives; scenarios are technical specifications",
      "Scenarios are only used for mobile applications"
    ],
    answer: 1,
    explanation: "Scenarios are rich narratives about a specific person in a specific situation (who, when, where, why). Use cases are more structured, listing steps, preconditions, and alternative flows in a formal format."
  },
  {
    question: "What is a 'persona' in the context of scenario-based design?",
    choices: [
      "The designer's personal branding identity",
      "A fictional but research-based character representing a key user group",
      "A user's login username and avatar",
      "A color palette chosen for the interface"
    ],
    answer: 1,
    explanation: "A persona is a realistic but fictional representation of a target user segment, built from user research data, including demographics, goals, frustrations, and behavioral patterns."
  },
  {
    question: "What is 'conceptual design' in the design lifecycle?",
    choices: [
      "Writing production-ready code",
      "Developing an abstract model of what users can do with the product and the concepts needed to understand it",
      "Choosing specific colors and fonts",
      "Conducting A/B tests on live products"
    ],
    answer: 1,
    explanation: "Conceptual design involves creating an abstract description of the proposed system in terms of concepts familiar to users, describing what the product will do and how it will behave, before any detailed visual or technical design."
  },
  {
    question: "What distinguishes 'concrete design' from conceptual design?",
    choices: [
      "Concrete design happens before conceptual design",
      "Concrete design specifies detailed look, feel, layout, and specific interaction elements",
      "Concrete design only involves writing documentation",
      "There is no distinction; they are the same phase"
    ],
    answer: 1,
    explanation: "Concrete design takes the abstract conceptual model and specifies the actual interface details: screen layouts, widget choices, colors, fonts, icons, and precise interaction behaviors."
  },
  {
    question: "What is Hierarchical Task Analysis (HTA)?",
    choices: [
      "A method for ranking team members by productivity",
      "A technique that breaks down tasks into subtasks and plans, showing the hierarchical structure of user activities",
      "A database indexing algorithm",
      "A method for measuring server response time"
    ],
    answer: 1,
    explanation: "HTA decomposes a high-level task into subtasks and plans (conditions for when subtasks are performed), represented as a hierarchy. It helps designers understand the structure and sequence of user activities."
  },
  {
    question: "In scenario-based design, what is 'claims analysis'?",
    choices: [
      "Analyzing insurance claims from users",
      "Identifying positive and negative consequences (upsides and downsides) of design features",
      "Counting the number of user complaints",
      "A legal review of terms of service"
    ],
    answer: 1,
    explanation: "Claims analysis identifies the pros and cons (upsides and downsides) of specific design features within a scenario, helping designers weigh trade-offs and make informed decisions about design choices."
  },
  {
    question: "What is 'envisionment' in the design process?",
    choices: [
      "A meditation technique for designers",
      "Creating representations (sketches, prototypes, storyboards) that allow stakeholders to see and experience proposed designs",
      "A database visualization tool",
      "Writing final documentation"
    ],
    answer: 1,
    explanation: "Envisionment involves creating tangible representations of future designs (sketches, mockups, prototypes, storyboards) so that stakeholders can visualize, experience, and give feedback on proposed solutions."
  },
  {
    question: "What is the correct order of phases in scenario-based design?",
    choices: [
      "Implementation → Testing → Analysis → Design",
      "Problem analysis → Activity design → Information design → Interaction design",
      "Coding → Deployment → Maintenance → Retirement",
      "Marketing → Design → Testing → Launch"
    ],
    answer: 1,
    explanation: "Scenario-based design follows: problem analysis (understanding current activities), activity design (redesigning activities), information design (how information is presented), and interaction design (detailed interaction mechanisms)."
  },
  {
    question: "What is a 'user story' in agile/UX practice?",
    choices: [
      "A biography of the end user",
      "A short statement in the form 'As a [user], I want [goal] so that [reason]'",
      "A long narrative essay about the product history",
      "A technical requirements document"
    ],
    answer: 1,
    explanation: "A user story is a brief, informal description of a feature from the user's perspective: 'As a [type of user], I want [some goal] so that [some reason].' It captures who, what, and why."
  },
  {
    question: "What is the primary benefit of using scenarios in the early design phase?",
    choices: [
      "They eliminate the need for user testing",
      "They help designers explore and communicate design ideas in concrete, relatable terms before committing to implementations",
      "They serve as legal contracts with users",
      "They replace all technical documentation"
    ],
    answer: 1,
    explanation: "Scenarios allow designers to explore and communicate ideas concretely and relatably, making abstract concepts tangible for discussion, evaluation, and iteration early in the process before costly implementation."
  },
  {
    question: "In HTA, what does a 'plan' specify?",
    choices: [
      "The project budget and timeline",
      "The conditions under which subtasks are performed and their ordering",
      "The color scheme of the interface",
      "The programming language to be used"
    ],
    answer: 1,
    explanation: "In HTA, a plan specifies the conditions under which subtasks are executed and their sequencing (e.g., 'do 1 then 2 then 3' or 'do 1, then if condition X do 2, else do 3')."
  },
  {
    question: "What role does task analysis play in interaction design?",
    choices: [
      "It replaces the need for prototyping",
      "It helps designers understand the goals, steps, and context of tasks users need to accomplish",
      "It is only used for performance optimization",
      "It measures system response time"
    ],
    answer: 1,
    explanation: "Task analysis helps designers understand what users are trying to achieve, the steps involved, information needed, and the context of performance—informing interface structure and workflow design."
  },
  {
    question: "What is 'narrative-based design'?",
    choices: [
      "Writing novels about software",
      "Using storytelling and narrative structures to explore, communicate, and evaluate design ideas",
      "A programming paradigm",
      "Designing only text-based interfaces"
    ],
    answer: 1,
    explanation: "Narrative-based design uses stories and narratives as a central method for exploring user experiences, communicating design concepts to stakeholders, and evaluating design alternatives in context."
  },
  // ===== SECTION 2: USER RESEARCH AND PERSONAS (Questions 16-40) =====
  {
    question: "Which research method involves observing and interviewing users in their actual work environment?",
    choices: [
      "A/B testing",
      "Contextual inquiry",
      "Online survey distribution",
      "Automated usability testing"
    ],
    answer: 1,
    explanation: "Contextual inquiry involves going to the user's workplace, observing them perform tasks in their natural context, and asking questions as they work to understand real behaviors, workarounds, and needs."
  },
  {
    question: "What is the primary goal of user research in UX design?",
    choices: [
      "To prove the designer's initial ideas are correct",
      "To understand user needs, behaviors, motivations, and pain points through systematic investigation",
      "To create pixel-perfect visual mockups",
      "To reduce the project budget"
    ],
    answer: 1,
    explanation: "User research aims to understand who users are, what they need, how they behave, and what frustrates them—ensuring design decisions are evidence-based rather than assumption-driven."
  },
  {
    question: "Which of the following is a qualitative research method?",
    choices: [
      "Web analytics (page views, bounce rates)",
      "A/B testing with conversion metrics",
      "In-depth semi-structured user interviews",
      "Click-through rate measurement"
    ],
    answer: 2,
    explanation: "User interviews are qualitative—they yield rich, descriptive insights into user attitudes, motivations, and experiences. Quantitative methods (analytics, A/B tests) produce numerical/statistical data."
  },
  {
    question: "What is 'card sorting' used for in UX research?",
    choices: [
      "Sorting database records alphabetically",
      "Discovering how users naturally categorize and group information to inform information architecture",
      "Prioritizing bug fixes in a sprint",
      "Arranging visual design elements on a grid"
    ],
    answer: 1,
    explanation: "Card sorting asks participants to organize topic cards into groups that make sense to them. Results inform information architecture, menu structure, navigation design, and labeling."
  },
  {
    question: "What is an 'empathy map' in UX design?",
    choices: [
      "A geographic map showing user locations",
      "A collaborative tool that captures what a user says, thinks, feels, and does to build shared understanding",
      "A color theory diagram",
      "A network topology diagram"
    ],
    answer: 1,
    explanation: "An empathy map is a collaborative visualization divided into quadrants (Says, Thinks, Does, Feels) that helps teams build a shared understanding of user needs, attitudes, and behaviors."
  },
  {
    question: "What is a 'user journey map'?",
    choices: [
      "A GPS navigation feature in an app",
      "A visualization of the end-to-end experience a user has with a product, including touchpoints, emotions, and pain points",
      "A project management Gantt chart",
      "A map of the office layout"
    ],
    answer: 1,
    explanation: "A user journey map visualizes the complete user experience across all touchpoints over time, mapping actions, thoughts, emotions, and pain points to identify opportunities for improvement."
  },
  {
    question: "What distinguishes quantitative from qualitative user research?",
    choices: [
      "Quantitative is always better than qualitative",
      "Quantitative measures what and how much (numbers); qualitative explores why and how (insights)",
      "Qualitative only uses surveys; quantitative only uses interviews",
      "There is no meaningful difference between them"
    ],
    answer: 1,
    explanation: "Quantitative research measures 'what' and 'how much' through numbers and statistics. Qualitative research explores 'why' and 'how' through rich descriptions, narratives, and interpretive analysis."
  },
  {
    question: "What is the 'think-aloud protocol' in usability testing?",
    choices: [
      "The facilitator explains the interface to users",
      "Participants verbalize their thoughts, feelings, and reasoning while performing tasks",
      "Users write essays about their experience afterward",
      "The system reads aloud all text on screen"
    ],
    answer: 1,
    explanation: "In the think-aloud protocol, participants continuously verbalize their thoughts as they interact with the system. This reveals their mental model, expectations, confusion, and decision-making process in real time."
  },
  {
    question: "What is the difference between formative and summative usability testing?",
    choices: [
      "They are identical in purpose and timing",
      "Formative testing identifies issues during design to improve it; summative testing measures overall usability of a finished product",
      "Formative is quantitative; summative is qualitative",
      "Summative testing always comes before formative"
    ],
    answer: 1,
    explanation: "Formative evaluation happens during design to find and fix problems (diagnostic). Summative evaluation happens after design to assess overall usability metrics and compare against benchmarks."
  },
  {
    question: "What is 'participatory design'?",
    choices: [
      "Designers work in isolation without user input",
      "Users are actively involved as co-designers in the design process, contributing ideas and making decisions",
      "Only managers participate in design reviews",
      "Users are only consulted after the product is complete"
    ],
    answer: 1,
    explanation: "Participatory design actively involves end users as equal partners in the design process. Users contribute ideas, create artifacts, and help make design decisions, not just provide feedback."
  },
  {
    question: "What are 'cultural probes' in user research?",
    choices: [
      "Surveys about cultural preferences",
      "Packages of creative materials (cameras, diaries, maps) given to users to self-document their lives and experiences",
      "Interviews conducted in different countries",
      "Automated data collection tools"
    ],
    answer: 1,
    explanation: "Cultural probes are self-documentation packages (disposable cameras, postcards, diaries, maps) given to participants to record aspects of their lives, providing rich inspirational data about their context and values."
  },
  {
    question: "What is an 'affinity diagram' used for in design research?",
    choices: [
      "Measuring user satisfaction scores",
      "Organizing large amounts of qualitative data into meaningful groups by identifying natural relationships",
      "Creating database relationships",
      "Drawing user interface wireframes"
    ],
    answer: 1,
    explanation: "Affinity diagramming organizes large volumes of research notes/observations into clusters based on natural relationships and themes, helping teams identify patterns, insights, and design opportunities."
  },
  {
    question: "What is a 'diary study' in user research?",
    choices: [
      "Researchers write about their own experiences",
      "Participants log their experiences, activities, and thoughts over a period of time in their natural context",
      "Reading user diaries without permission",
      "A one-time interview lasting one day"
    ],
    answer: 1,
    explanation: "In diary studies, participants self-report their experiences, behaviors, and thoughts over days or weeks in their natural context. This captures longitudinal data about real usage patterns and experiences."
  },
  {
    question: "How many participants are typically recommended for identifying most usability problems in a usability test?",
    choices: [
      "1 participant",
      "5 participants (identifies ~85% of usability problems)",
      "50 participants minimum",
      "100 participants"
    ],
    answer: 1,
    explanation: "Nielsen's research suggests that 5 participants typically uncover about 85% of usability problems, following the diminishing returns curve where each additional user finds fewer new issues."
  },
  {
    question: "What is 'thematic analysis' in qualitative research?",
    choices: [
      "Analyzing the color theme of an interface",
      "A method for identifying, analyzing, and reporting patterns (themes) within qualitative data",
      "Counting word frequency in documents",
      "Statistical regression analysis"
    ],
    answer: 1,
    explanation: "Thematic analysis is a qualitative method for systematically identifying, organizing, and reporting patterns of meaning (themes) across a dataset, such as interview transcripts or observation notes."
  },
  {
    question: "What is 'ethnographic research' in HCI?",
    choices: [
      "Studying ethnic food preferences for app design",
      "Immersive, long-term observation of users in their natural environment to understand culture, practices, and social context",
      "A quick 5-minute survey",
      "Automated analytics tracking"
    ],
    answer: 1,
    explanation: "Ethnographic research involves extended immersion in users' natural environments, observing and participating in their activities to gain deep understanding of their practices, culture, and social context."
  },
  {
    question: "What is A/B testing in the context of UX?",
    choices: [
      "Testing on both Android and iOS devices",
      "Comparing two versions of a design with real users to determine which performs better on a specific metric",
      "Testing with users named A and users named B",
      "Comparing the first and last pages of a website"
    ],
    answer: 1,
    explanation: "A/B testing (split testing) shows different versions of a design element to different user groups simultaneously and measures which version achieves better outcomes on defined metrics (conversion, engagement, etc.)."
  },
  {
    question: "Which research method is best for understanding how users naturally organize information for a website's navigation?",
    choices: [
      "A/B testing",
      "Card sorting",
      "Performance load testing",
      "Code review"
    ],
    answer: 1,
    explanation: "Card sorting directly reveals users' mental models for organizing information. Participants sort content topics into categories, showing how they expect information to be grouped in navigation."
  },
  {
    question: "What should a well-crafted persona include?",
    choices: [
      "Only a name and stock photo",
      "Name, demographics, goals, frustrations, behaviors, scenarios, and technical proficiency",
      "Only the user's job title and salary",
      "Just a list of product features they want"
    ],
    answer: 1,
    explanation: "Effective personas include a name, photo, demographic details, goals, pain points, typical behaviors, technology comfort level, and a narrative scenario—all grounded in actual research data."
  },
  {
    question: "What is 'requirements gathering' in the UX design process?",
    choices: [
      "Collecting software library dependencies",
      "Systematically identifying and documenting user needs, constraints, and expectations that the design must satisfy",
      "Gathering office supplies for the design team",
      "Downloading template files"
    ],
    answer: 1,
    explanation: "Requirements gathering systematically identifies what users need, what constraints exist (technical, business, regulatory), and what criteria the design must meet—typically through interviews, observation, and document analysis."
  },
  {
    question: "What is a 'focus group' in user research?",
    choices: [
      "A single user being observed for a long time",
      "A moderated group discussion (typically 6-10 participants) exploring attitudes, perceptions, and ideas about a topic",
      "A team of developers focused on one feature",
      "An executive meeting about product strategy"
    ],
    answer: 1,
    explanation: "A focus group brings 6-10 participants together for a moderated discussion about a topic, generating rich qualitative data about shared attitudes, perceptions, and group dynamics around the product or concept."
  },
  {
    question: "What is the key advantage of contextual inquiry over lab-based usability testing?",
    choices: [
      "It is always cheaper to conduct",
      "It reveals real-world context, workarounds, and environmental factors that lab settings cannot replicate",
      "It produces more statistically significant data",
      "It requires fewer researchers"
    ],
    answer: 1,
    explanation: "Contextual inquiry captures the actual work environment, interruptions, workarounds, physical context, and social dynamics that influence real usage—things impossible to replicate in a laboratory setting."
  },
  {
    question: "What are 'open' vs 'closed' card sorts?",
    choices: [
      "Open cards are visible; closed cards are face down",
      "In open sorts, participants create their own category names; in closed sorts, categories are predefined",
      "Open sorts use physical cards; closed sorts are digital",
      "Open sorts are public; closed sorts are private"
    ],
    answer: 1,
    explanation: "In open card sorting, participants group cards and create their own category labels. In closed card sorting, participants sort cards into predefined categories. Both inform information architecture differently."
  },
  {
    question: "What is the purpose of creating an empathy map before designing?",
    choices: [
      "To determine the project budget",
      "To build shared team understanding of user attitudes, needs, and behaviors beyond just demographics",
      "To assign tasks to team members",
      "To write marketing copy"
    ],
    answer: 1,
    explanation: "Empathy maps help teams move beyond demographic assumptions to deeply understand what users say, think, feel, and do—building empathy that drives user-centered design decisions."
  },
  {
    question: "In a questionnaire for user research, what is the difference between Likert scale and open-ended questions?",
    choices: [
      "There is no difference",
      "Likert scales provide quantitative rating data; open-ended questions yield qualitative narrative insights",
      "Likert scales are always better",
      "Open-ended questions are only for children"
    ],
    answer: 1,
    explanation: "Likert scales (e.g., 1-5 agree/disagree) produce quantitative data for statistical analysis. Open-ended questions let respondents express thoughts in their own words, providing qualitative depth and unexpected insights."
  },
  // ===== SECTION 3: DESIGN RULES AND GUIDELINES (Questions 41-70) =====
  {
    question: "According to Don Norman, what is an 'affordance'?",
    choices: [
      "The price of a software license",
      "A relationship between an object's properties and a person's capabilities that determines how the object could be used",
      "The speed at which a page loads",
      "A type of CSS animation"
    ],
    answer: 1,
    explanation: "Norman defines affordance as the relationship between the properties of an object and the capabilities of the agent that determines how the object could possibly be used (e.g., a chair affords sitting)."
  },
  {
    question: "What is a 'signifier' according to Don Norman?",
    choices: [
      "A digital signature on a document",
      "A perceivable indicator that communicates appropriate behavior—where to click, push, slide, or act",
      "An encryption key",
      "A brand logo"
    ],
    answer: 1,
    explanation: "Norman distinguishes signifiers from affordances: signifiers are the perceivable signals (visual, auditory, tactile) that communicate where and how to act. A 'Push' sign on a door is a signifier."
  },
  {
    question: "What is 'mapping' in Norman's design principles?",
    choices: [
      "Creating geographic maps in an app",
      "The relationship between controls and their effects, ideally using spatial correspondence or cultural conventions",
      "Plotting data on a chart",
      "Assigning team members to tasks"
    ],
    answer: 1,
    explanation: "Mapping refers to the relationship between controls and their outcomes. Good mapping leverages spatial correspondence (e.g., stove knob position matches burner position) or cultural conventions to be intuitive."
  },
  {
    question: "What are 'constraints' in Norman's design principles?",
    choices: [
      "Budget limitations on a project",
      "Design features that limit possible actions, guiding users toward correct use and preventing errors",
      "Technical limitations of hardware",
      "Time constraints on development"
    ],
    answer: 1,
    explanation: "Norman identifies physical, cultural, semantic, and logical constraints that limit the actions possible at a given moment, guiding users toward correct interactions and preventing errors."
  },
  {
    question: "What is 'feedback' in Norman's interaction design principles?",
    choices: [
      "User reviews on app stores",
      "Communicating the results of an action immediately through sensory signals so users know what happened",
      "A customer support ticket system",
      "Annual performance reviews"
    ],
    answer: 1,
    explanation: "Feedback is immediate information communicated back to the user about what action was performed and what result was accomplished. It must be timely, informative, and presented through appropriate sensory channels."
  },
  {
    question: "What is a 'conceptual model' in Norman's framework?",
    choices: [
      "A 3D physical model of the product",
      "A user's mental understanding of how a system works, which guides their expectations and interactions",
      "A UML class diagram",
      "A business model canvas"
    ],
    answer: 1,
    explanation: "A conceptual model is the user's mental explanation of how something works. Good design communicates a clear, correct conceptual model through the system image so users can predict system behavior."
  },
  {
    question: "What does Fitts's Law predict?",
    choices: [
      "The number of errors a user will make",
      "The time required to move to a target is a function of the distance to the target and the target's size (T = a + b × log₂(D/W + 1))",
      "How many users will abandon a website",
      "The optimal number of menu items"
    ],
    answer: 1,
    explanation: "Fitts's Law: T = a + b × log₂(D/W + 1), where T is movement time, D is distance to target, and W is target width. Larger, closer targets are faster to acquire. This informs button sizing and placement."
  },
  {
    question: "According to Fitts's Law, which button would be fastest to click?",
    choices: [
      "A small button far from the cursor",
      "A large button close to the cursor",
      "A small button close to the cursor",
      "A large button far from the cursor"
    ],
    answer: 1,
    explanation: "Fitts's Law (T = a + b × log₂(D/W + 1)) shows that targets which are larger (greater W) and closer (smaller D) require less time to reach. A large, close button minimizes both factors."
  },
  {
    question: "What does Hick's Law (Hick-Hyman Law) state?",
    choices: [
      "Users always prefer the first option presented",
      "Decision time increases logarithmically with the number of choices available",
      "Users can only see 3 items at a time",
      "Faster internet always improves usability"
    ],
    answer: 1,
    explanation: "Hick's Law states that the time to make a decision increases logarithmically as the number of choices increases. This supports simplifying options and progressive disclosure in UI design."
  },
  {
    question: "What does Miller's Law state about human cognitive capacity?",
    choices: [
      "Humans can multitask perfectly with up to 10 items",
      "The average person can hold approximately 7 (±2) items in working memory at once",
      "Users need exactly 7 seconds to read any page",
      "Interfaces should always have 7 buttons"
    ],
    answer: 1,
    explanation: "Miller's Law (1956) states that working memory can hold approximately 7±2 chunks of information. This informs design decisions like limiting menu items, grouping content, and chunking information."
  },
  {
    question: "Which Gestalt principle explains why items placed close together are perceived as related?",
    choices: [
      "Similarity",
      "Proximity",
      "Closure",
      "Continuity"
    ],
    answer: 1,
    explanation: "The Gestalt principle of proximity states that elements placed close together are perceived as belonging to the same group, even without explicit visual grouping. Spacing communicates relationships in UI layout."
  },
  {
    question: "Which Gestalt principle explains why elements that look alike are perceived as part of the same group?",
    choices: [
      "Proximity",
      "Similarity",
      "Common fate",
      "Figure-ground"
    ],
    answer: 1,
    explanation: "The Gestalt principle of similarity states that elements sharing visual characteristics (color, shape, size, orientation) are perceived as related or belonging to the same group."
  },
  {
    question: "What does the Gestalt principle of 'closure' describe?",
    choices: [
      "Users prefer interfaces that can be closed easily",
      "People tend to perceive incomplete shapes as complete by filling in missing information",
      "All dialogs should have a close button",
      "Sessions should time out automatically"
    ],
    answer: 1,
    explanation: "Closure describes the human tendency to perceive incomplete shapes as whole by mentally filling in gaps. Designers use this for logos, icons, and progress indicators that imply completeness."
  },
  {
    question: "What does the Gestalt principle of 'continuity' describe?",
    choices: [
      "Software should have continuous updates",
      "The eye follows smooth paths and lines, perceiving elements arranged on a line or curve as more related than randomly positioned elements",
      "Users want continuous scrolling",
      "Feedback should be continuous"
    ],
    answer: 1,
    explanation: "Continuity states that the eye naturally follows smooth paths, lines, and curves. Elements arranged along a line or curve are perceived as more related than elements not on the path."
  },
  {
    question: "What is the Gestalt principle of 'common fate'?",
    choices: [
      "All users will eventually stop using a product",
      "Elements that move or change together are perceived as being part of the same group",
      "Similar outcomes happen to similar interfaces",
      "Users share common goals"
    ],
    answer: 1,
    explanation: "Common fate states that elements moving in the same direction or changing together are perceived as a group. This applies to animations, scrolling behaviors, and coordinated state changes in UIs."
  },
  {
    question: "What is the Gestalt principle of 'figure-ground'?",
    choices: [
      "Interfaces should use a ground/earth color palette",
      "People instinctively perceive objects (figure) as distinct from their surrounding area (ground)",
      "Grounded elements are more usable",
      "Background images improve usability"
    ],
    answer: 1,
    explanation: "Figure-ground describes how we perceive some elements as prominent objects (figures) in the foreground and others as the background. Designers use contrast, shadow, and layering to establish this hierarchy."
  },
  {
    question: "What is 'internal consistency' in UI design?",
    choices: [
      "Consistent server uptime",
      "Design elements and behaviors are uniform throughout a single product or system",
      "Using only internal team members for testing",
      "Consistent code style"
    ],
    answer: 1,
    explanation: "Internal consistency means that similar elements and interactions behave the same way throughout the same product—same buttons look the same, same gestures produce same results, reinforcing learnability."
  },
  {
    question: "What is 'external consistency' in UI design?",
    choices: [
      "Making your product look like competitors",
      "Design conventions are consistent with other products and platform standards users already know",
      "Using external APIs consistently",
      "Consistent branding across social media"
    ],
    answer: 1,
    explanation: "External consistency means following established platform conventions and industry standards (e.g., shopping cart icon for e-commerce, hamburger menu for mobile nav) so users can transfer existing knowledge."
  },
  {
    question: "What does WCAG stand for in accessibility design?",
    choices: [
      "Web Content Accessibility Guidelines",
      "World Computer Architecture Group",
      "Web Coding And Graphics",
      "Wireless Communication Access Gateway"
    ],
    answer: 0,
    explanation: "WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility, organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR)."
  },
  {
    question: "What are the four principles of WCAG (POUR)?",
    choices: [
      "Pretty, Organized, Useful, Responsive",
      "Perceivable, Operable, Understandable, Robust",
      "Performance, Optimization, Usability, Reliability",
      "Practical, Objective, Universal, Repeatable"
    ],
    answer: 1,
    explanation: "WCAG is built on four principles: Perceivable (content must be presentable to senses), Operable (interface must be navigable), Understandable (information must be comprehensible), Robust (content works with assistive technologies)."
  },
  {
    question: "What is 'error prevention' as a design principle?",
    choices: [
      "Never allowing users to make any action",
      "Designing the interface to prevent errors before they occur through constraints, confirmations, and good defaults",
      "Hiding all error messages from users",
      "Only allowing expert users to access the system"
    ],
    answer: 1,
    explanation: "Error prevention involves designing interfaces that make it hard to make mistakes: using constraints, offering confirmations for destructive actions, providing sensible defaults, and eliminating error-prone conditions."
  },
  {
    question: "How does color theory apply to UI design?",
    choices: [
      "Only aesthetic appeal matters in color choice",
      "Color communicates meaning, creates hierarchy, ensures accessibility (contrast ratios), and evokes emotional responses",
      "All interfaces should be monochrome",
      "Color is irrelevant to usability"
    ],
    answer: 1,
    explanation: "Color in UI communicates meaning (red=error, green=success), creates visual hierarchy, must meet contrast ratio standards for accessibility, and evokes emotional/cultural associations that influence user perception."
  },
  {
    question: "What is 'information architecture' (IA)?",
    choices: [
      "The physical architecture of a data center",
      "The structural design of shared information environments—organizing, labeling, and designing navigation for findability",
      "Building architecture inspired by data",
      "The arrangement of servers in a rack"
    ],
    answer: 1,
    explanation: "Information architecture is the practice of organizing, structuring, and labeling content effectively to help users find information and complete tasks. It encompasses navigation, categorization, labeling, and search systems."
  },
  {
    question: "Which of Shneiderman's 8 Golden Rules states 'Permit easy reversal of actions'?",
    choices: [
      "Rule about reducing short-term memory load",
      "Rule about enabling users to undo actions, relieving anxiety and encouraging exploration",
      "Rule about offering informative feedback",
      "Rule about designing for closure"
    ],
    answer: 1,
    explanation: "Shneiderman's 'Permit easy reversal of actions' states that users should be able to undo their actions, which relieves anxiety about making mistakes and encourages exploration of unfamiliar features."
  },
  {
    question: "Which Shneiderman Golden Rule relates to 'Reduce short-term memory load'?",
    choices: [
      "Keep displays simple and consolidate multiple pages",
      "Design interfaces so users don't need to remember information across screens; keep needed information visible",
      "Use fewer colors in the interface",
      "Limit the number of team members"
    ],
    answer: 1,
    explanation: "Shneiderman's 'Reduce short-term memory load' says humans have limited working memory, so interfaces should not require users to remember information from one screen to use on another—keep it visible or provide cues."
  },
  {
    question: "What is a common navigation pattern that shows the user's location in a website hierarchy?",
    choices: [
      "Hamburger menu",
      "Breadcrumb navigation",
      "Footer links",
      "Infinite scroll"
    ],
    answer: 1,
    explanation: "Breadcrumb navigation shows the user's current location within the site hierarchy (Home > Category > Subcategory > Current Page), enabling easy navigation to parent levels and providing context."
  },
  {
    question: "According to Fitts's Law, why are dropdown menus potentially problematic?",
    choices: [
      "They use too much memory",
      "Targets are narrow (small height) and require precise vertical movement, increasing selection time and error",
      "They don't work on mobile",
      "They are visually unattractive"
    ],
    answer: 1,
    explanation: "Dropdown menu items have small target height (W in Fitts's Law), requiring precise cursor movement. Combined with distance to traverse, this increases acquisition time and errors, especially for long menus."
  },
  {
    question: "What does 'progressive disclosure' mean in UI design?",
    choices: [
      "Gradually revealing the source code to users",
      "Showing only essential information initially and revealing more detail progressively as users need it",
      "A phased product launch strategy",
      "Slowly loading page elements for animation"
    ],
    answer: 1,
    explanation: "Progressive disclosure manages complexity by showing only the most important information/options first, then revealing additional details on demand. This reduces cognitive load while keeping advanced features accessible."
  },
  {
    question: "What is the 'visibility of system status' design principle (beyond Nielsen's heuristic)?",
    choices: [
      "The system should be invisible to users",
      "The system should clearly communicate its current state so users always know what is happening",
      "All system files should be visible",
      "The source code should be open source"
    ],
    answer: 1,
    explanation: "Visibility of system status means the interface always communicates what is currently happening: loading states, progress, selected items, active modes, and confirmation of completed actions."
  },
  {
    question: "What is 'Shneiderman's 8 Golden Rules' relationship to Nielsen's heuristics?",
    choices: [
      "They are identical and interchangeable",
      "Both are sets of broad usability principles with significant overlap but different emphasis and organization",
      "Shneiderman's rules replaced Nielsen's heuristics",
      "Nielsen's heuristics are for mobile only; Shneiderman's for desktop"
    ],
    answer: 1,
    explanation: "Both are broad usability principles with overlapping themes (feedback, error handling, consistency). Shneiderman's rules emphasize dialogue design and user control; Nielsen's heuristics focus on evaluation criteria."
  },
  // ===== SECTION 4: HEURISTICS (Questions 71-100) =====
  {
    question: "A loading spinner appears while a file uploads. Which of Nielsen's heuristics does this satisfy?",
    choices: [
      "#5 Error prevention",
      "#1 Visibility of system status",
      "#8 Aesthetic and minimalist design",
      "#10 Help and documentation"
    ],
    answer: 1,
    explanation: "Heuristic #1 (Visibility of System Status): The system keeps users informed about what is going on through appropriate feedback within reasonable time. A loading spinner communicates ongoing processing."
  },
  {
    question: "A shopping site uses a trash can icon for 'delete item' and a cart icon for 'add to cart.' Which heuristic does this follow?",
    choices: [
      "#7 Flexibility and efficiency of use",
      "#2 Match between system and the real world",
      "#4 Consistency and standards",
      "#6 Recognition rather than recall"
    ],
    answer: 1,
    explanation: "Heuristic #2 (Match Between System and Real World): The system uses familiar concepts from the users' real world (trash can = delete, cart = shopping). Information appears in a natural and logical order."
  },
  {
    question: "Gmail's 'Undo Send' feature allowing users to retract a sent email is an example of which heuristic?",
    choices: [
      "#1 Visibility of system status",
      "#5 Error prevention",
      "#3 User control and freedom",
      "#8 Aesthetic and minimalist design"
    ],
    answer: 2,
    explanation: "Heuristic #3 (User Control and Freedom): Users need a clearly marked 'emergency exit' to leave unwanted states. Undo Send provides freedom to reverse an action taken by mistake."
  },
  {
    question: "A website uses blue underlined text for links on some pages and green bold text on others. Which heuristic is violated?",
    choices: [
      "#2 Match between system and real world",
      "#4 Consistency and standards",
      "#8 Aesthetic and minimalist design",
      "#1 Visibility of system status"
    ],
    answer: 1,
    explanation: "Heuristic #4 (Consistency and Standards): Users should not have to wonder whether different words, situations, or actions mean the same thing. Link styling should be consistent throughout."
  },
  {
    question: "A form asks 'Are you sure you want to delete this? This cannot be undone.' with a confirmation dialog. Which heuristic?",
    choices: [
      "#3 User control and freedom",
      "#5 Error prevention",
      "#9 Help users recognize, diagnose, and recover from errors",
      "#10 Help and documentation"
    ],
    answer: 1,
    explanation: "Heuristic #5 (Error Prevention): Even better than good error messages is a careful design which prevents problems. Confirmation dialogs for destructive actions prevent slip errors."
  },
  {
    question: "A toolbar showing icons with text labels so users don't have to memorize what each icon means follows which heuristic?",
    choices: [
      "#2 Match between system and real world",
      "#6 Recognition rather than recall",
      "#8 Aesthetic and minimalist design",
      "#4 Consistency and standards"
    ],
    answer: 1,
    explanation: "Heuristic #6 (Recognition Rather Than Recall): Minimize the user's memory load by making objects, actions, and options visible. Labels help users recognize functions rather than having to recall icon meanings."
  },
  {
    question: "Keyboard shortcuts like Ctrl+C for copy that expert users can use to speed up interaction exemplify which heuristic?",
    choices: [
      "#4 Consistency and standards",
      "#7 Flexibility and efficiency of use",
      "#3 User control and freedom",
      "#2 Match between system and real world"
    ],
    answer: 1,
    explanation: "Heuristic #7 (Flexibility and Efficiency of Use): Accelerators—unseen by novice users—speed up interaction for experts. The system should cater to both inexperienced and experienced users."
  },
  {
    question: "A dashboard that only shows key metrics and hides rarely-used data behind expandable sections follows which heuristic?",
    choices: [
      "#1 Visibility of system status",
      "#8 Aesthetic and minimalist design",
      "#6 Recognition rather than recall",
      "#10 Help and documentation"
    ],
    answer: 1,
    explanation: "Heuristic #8 (Aesthetic and Minimalist Design): Dialogues should not contain irrelevant or rarely needed information. Every extra unit of information competes with relevant information and diminishes its visibility."
  },
  {
    question: "An error message reading 'Error 500: NullReferenceException at line 247' violates which heuristic?",
    choices: [
      "#5 Error prevention",
      "#9 Help users recognize, diagnose, and recover from errors",
      "#2 Match between system and real world",
      "#1 Visibility of system status"
    ],
    answer: 1,
    explanation: "Heuristic #9: Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution. Technical jargon fails to help users recover."
  },
  {
    question: "A software application provides searchable help documentation and context-sensitive tooltips. Which heuristic does this address?",
    choices: [
      "#6 Recognition rather than recall",
      "#10 Help and documentation",
      "#1 Visibility of system status",
      "#7 Flexibility and efficiency of use"
    ],
    answer: 1,
    explanation: "Heuristic #10 (Help and Documentation): Even though it's better if the system can be used without documentation, it may be necessary to provide help that is easy to search, focused on tasks, and lists concrete steps."
  },
  {
    question: "How many evaluators are typically recommended for a heuristic evaluation?",
    choices: [
      "1 evaluator is sufficient",
      "3 to 5 evaluators working independently",
      "At least 20 evaluators",
      "The entire development team simultaneously"
    ],
    answer: 1,
    explanation: "Research shows 3-5 evaluators independently evaluating an interface find approximately 75% of usability problems. Each evaluator works alone first, then findings are compiled and compared."
  },
  {
    question: "In heuristic evaluation, what is the correct process for multiple evaluators?",
    choices: [
      "All evaluators discuss issues together from the start",
      "Each evaluator independently inspects the interface, then findings are aggregated and discussed",
      "Evaluators vote on which issues matter most first",
      "Only one evaluator's findings are used"
    ],
    answer: 1,
    explanation: "Evaluators must work independently first to avoid bias and groupthink, documenting violations on their own. Findings are then compiled, duplicates merged, and severity discussed as a group."
  },
  {
    question: "What are the severity ratings used in heuristic evaluation?",
    choices: [
      "Low, Medium, High only",
      "0 (not a problem) to 4 (usability catastrophe), rating frequency, impact, and persistence",
      "A, B, C, D, F letter grades",
      "1 to 100 percentage scale"
    ],
    answer: 1,
    explanation: "Nielsen's severity scale: 0 = not a usability problem; 1 = cosmetic only; 2 = minor problem; 3 = major problem; 4 = usability catastrophe. Ratings consider frequency, impact, and persistence."
  },
  {
    question: "What is a 'cognitive walkthrough'?",
    choices: [
      "A physical tour of the office",
      "A usability inspection where evaluators step through tasks from the user's perspective, evaluating learnability at each step",
      "A code walkthrough for developers",
      "A fitness exercise for designers"
    ],
    answer: 1,
    explanation: "A cognitive walkthrough is a task-based inspection method where evaluators step through a task asking: Will the user know what to do? Will they notice the correct action? Will they understand the feedback?"
  },
  {
    question: "What is the System Usability Scale (SUS)?",
    choices: [
      "A hardware benchmarking tool",
      "A 10-item standardized questionnaire giving a score from 0-100 measuring perceived usability",
      "A programming framework",
      "A screen resolution measurement"
    ],
    answer: 1,
    explanation: "SUS is a reliable, 10-item Likert scale questionnaire that provides a quick subjective assessment of usability. Scores range from 0-100; above 68 is considered above average. It's technology-independent."
  },
  {
    question: "What does ISO 9241-11 define as the three components of usability?",
    choices: [
      "Speed, accuracy, and aesthetics",
      "Effectiveness, efficiency, and satisfaction",
      "Learnability, memorability, and errors",
      "Accessibility, compatibility, and security"
    ],
    answer: 1,
    explanation: "ISO 9241-11 defines usability as the extent to which a product can be used by specified users to achieve specified goals with effectiveness (task completion), efficiency (resources expended), and satisfaction (comfort/acceptability)."
  },
  {
    question: "A mobile app forces users to complete a 10-step registration before seeing any content. Which heuristic is most violated?",
    choices: [
      "#8 Aesthetic and minimalist design",
      "#3 User control and freedom",
      "#7 Flexibility and efficiency of use",
      "#5 Error prevention"
    ],
    answer: 1,
    explanation: "Heuristic #3 (User Control and Freedom): Users should have freedom to explore without being forced into lengthy processes. They need 'emergency exits' and the ability to access core value without mandatory gates."
  },
  {
    question: "A weather app shows temperature in Celsius without any option to switch to Fahrenheit for US users. Which heuristic is violated?",
    choices: [
      "#1 Visibility of system status",
      "#2 Match between system and the real world",
      "#7 Flexibility and efficiency of use",
      "#8 Aesthetic and minimalist design"
    ],
    answer: 2,
    explanation: "Heuristic #7 (Flexibility and Efficiency of Use): The system should allow users to customize frequent actions. Also arguably #2 (Match system/real world) since it doesn't match the user's conventions."
  },
  {
    question: "An app uses the word 'repository' and 'commit hash' in a task management tool for non-technical users. Which heuristic is violated?",
    choices: [
      "#2 Match between system and the real world",
      "#4 Consistency and standards",
      "#8 Aesthetic and minimalist design",
      "#10 Help and documentation"
    ],
    answer: 0,
    explanation: "Heuristic #2 (Match Between System and Real World): The system should speak the users' language with familiar words and concepts rather than system-oriented or developer-specific terminology."
  },
  {
    question: "What distinguishes a 'usability inspection' from a 'usability test'?",
    choices: [
      "They are exactly the same thing",
      "Inspections are expert-based reviews without users; tests involve observing actual users performing tasks",
      "Tests are cheaper than inspections",
      "Inspections always use automated tools"
    ],
    answer: 1,
    explanation: "Usability inspections (heuristic evaluation, cognitive walkthrough) are expert-based analytical methods. Usability tests involve real users attempting real tasks while observers collect performance and behavioral data."
  },
  {
    question: "What is Nielsen's Heuristic #4 'Consistency and standards' about?",
    choices: [
      "Using the same programming language throughout",
      "Users should not have to wonder whether different words, situations, or actions mean the same thing; follow platform conventions",
      "All buttons must be the same size",
      "The codebase must follow consistent formatting"
    ],
    answer: 1,
    explanation: "Heuristic #4: Follow platform and industry conventions. Users should not wonder if different words or actions mean the same thing. Internal consistency within the product and external consistency with conventions."
  },
  {
    question: "A file manager shows a progress bar during file copy, updates percentage, and shows estimated time remaining. Which heuristics does this satisfy?",
    choices: [
      "#5 Error prevention and #8 Aesthetic design",
      "#1 Visibility of system status (progress, percentage, ETA all communicate system state)",
      "#3 User control and #7 Flexibility",
      "#10 Help and documentation"
    ],
    answer: 1,
    explanation: "Heuristic #1 (Visibility of System Status): The progress bar, percentage, and time estimate all keep the user informed about what the system is doing, how far along it is, and when it will finish."
  },
  {
    question: "What is the average SUS score considered 'above average'?",
    choices: [
      "50",
      "68",
      "80",
      "95"
    ],
    answer: 1,
    explanation: "Based on extensive research, a SUS score of 68 is considered the average. Scores above 68 indicate above-average perceived usability. Scores above 80.3 are considered 'excellent' (Grade A)."
  },
  {
    question: "In ISO 9241-11, what does 'effectiveness' specifically measure?",
    choices: [
      "How fast users complete tasks",
      "The accuracy and completeness with which users achieve specified goals",
      "User emotional satisfaction",
      "System performance under load"
    ],
    answer: 1,
    explanation: "In ISO 9241-11, effectiveness measures whether users can actually achieve their goals accurately and completely—not how quickly (that's efficiency) or how they feel about it (that's satisfaction)."
  },
  {
    question: "In ISO 9241-11, what does 'efficiency' specifically measure?",
    choices: [
      "User satisfaction with the visual design",
      "The resources (time, effort, cost) expended in relation to the accuracy and completeness of goals achieved",
      "The number of features available",
      "Server response time"
    ],
    answer: 1,
    explanation: "Efficiency in ISO 9241-11 relates the resources expended (time, mental effort, physical effort, cost) to the results achieved. A more efficient system lets users achieve goals with fewer resources."
  },
  {
    question: "A search engine auto-suggests queries as the user types, reducing typing and preventing misspellings. Which heuristics does this support?",
    choices: [
      "#4 Consistency and #8 Aesthetics",
      "#5 Error prevention and #7 Flexibility and efficiency of use",
      "#1 Visibility and #10 Help",
      "#3 User control and #6 Recognition"
    ],
    answer: 1,
    explanation: "Auto-suggest supports #5 (Error Prevention—prevents misspellings) and #7 (Flexibility and Efficiency—accelerates the search task for experienced users who can quickly select suggestions)."
  },
  {
    question: "Which of the following correctly lists all 10 of Nielsen's Usability Heuristics in order?",
    choices: [
      "Visibility, Match real world, User control, Consistency, Error prevention, Recognition not recall, Flexibility, Aesthetic design, Help recover errors, Help & documentation",
      "Visibility, Consistency, Error prevention, Match real world, User control, Flexibility, Recognition, Aesthetic design, Help, Documentation",
      "Consistency, Visibility, Flexibility, Error prevention, Match real world, User control, Aesthetic design, Recognition, Help, Documentation",
      "Visibility, User control, Match real world, Error prevention, Consistency, Flexibility, Recognition, Help recover errors, Aesthetic design, Documentation"
    ],
    answer: 0,
    explanation: "The correct order is: #1 Visibility of system status, #2 Match between system and real world, #3 User control and freedom, #4 Consistency and standards, #5 Error prevention, #6 Recognition rather than recall, #7 Flexibility and efficiency, #8 Aesthetic and minimalist design, #9 Help users recognize/diagnose/recover from errors, #10 Help and documentation."
  },
  {
    question: "A system displays 'Error: ECONNREFUSED 127.0.0.1:5432' to an end user when the database is unavailable. What would heuristic #9 recommend instead?",
    choices: [
      "Hide the error completely and show nothing",
      "Show a plain-language message like 'Service temporarily unavailable. Please try again in a few minutes.'",
      "Show more technical details including the stack trace",
      "Automatically restart the user's computer"
    ],
    answer: 1,
    explanation: "Heuristic #9 (Help users recognize, diagnose, and recover from errors): Messages should be in plain language, precisely indicate the problem, and constructively suggest a solution—not display technical codes."
  },
  {
    question: "What is the relationship between Nielsen's Heuristic #6 and Miller's Law?",
    choices: [
      "They are completely unrelated principles",
      "Both support reducing cognitive load—#6 says make options visible so users recognize rather than recall, aligning with Miller's limited working memory capacity",
      "Miller's Law contradicts Heuristic #6",
      "They only apply to mobile interfaces"
    ],
    answer: 1,
    explanation: "Both address cognitive limitations. Miller's Law notes working memory holds ~7±2 items. Heuristic #6 (Recognition rather than recall) reduces memory demands by making options visible, directly complementing Miller's finding."
  },
  {
    question: "During a heuristic evaluation, an evaluator finds that a 'Save' button is green on one page and blue on another. What severity rating would this most likely receive?",
    choices: [
      "0 - Not a usability problem",
      "2 - Minor usability problem (low priority fix)",
      "4 - Usability catastrophe (must fix before release)",
      "Cannot be rated without user testing"
    ],
    answer: 1,
    explanation: "Inconsistent button colors (violating #4 Consistency) is typically rated severity 2 (minor): it causes confusion but doesn't prevent task completion. Severity 4 is reserved for problems that prevent core functionality."
  },
];
