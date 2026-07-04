export interface NoteSource {
  label: string;
  url: string;
}

export interface NoteSection {
  heading: string;
  memory: string;
  points: string[];
}

export interface NoteTableRow {
  term: string;
  meaning: string;
  memory: string;
  trap: string;
}

export interface NoteTable {
  heading: string;
  rows: NoteTableRow[];
}

export interface TopicNotes {
  topicId: string;
  title: string;
  summary: string;
  verificationStatus: "Verified" | "Source-backed draft" | "Needs verification";
  examFocus: string[];
  sections: NoteSection[];
  tables: NoteTable[];
  quickDrills: string[];
  sources: NoteSource[];
}

const row = (term: string, meaning: string, memory: string, trap: string): NoteTableRow => ({ term, meaning, memory, trap });
const section = (heading: string, memory: string, points: string[]): NoteSection => ({ heading, memory, points });
const source = (label: string, url: string): NoteSource => ({ label, url });

export const notesByTopic: Record<string, TopicNotes> = {
  "it-fundamentals": {
    topicId: "it-fundamentals",
    title: "IT Fundamentals Notes",
    summary: "Comprehensive memorization sheet for computing basics, number systems, architecture, communication, Philippine IT laws, and professional ethics.",
    verificationStatus: "Verified",
    examFocus: [
      "Classify hardware, software, system software, applications, utilities, CPU parts, memory, and storage.",
      "Convert between binary, octal, decimal, hexadecimal, BCD, ASCII, Unicode, 1's complement, and 2's complement.",
      "Memorize Von Neumann architecture, buses, fetch-decode-execute, communication elements, and transmission modes.",
      "Know RA 10173, RA 8792, RA 10175, intellectual property, malware, phishing, privacy, and ethics.",
    ],
    sections: [
      section("How To Memorize", "Group by function: compute, store, communicate, protect.", [
        "Use IPOS for computer definition: input, process, output, storage.",
        "Use 3-bit grouping for octal and 4-bit grouping for hexadecimal.",
        "For laws: 10173 = privacy, 8792 = e-commerce, 10175 = cybercrime.",
      ]),
      section("Common Calculation Patterns", "Most number-system items are place-value problems.", [
        "Binary to decimal: sum each 1 bit times its power of 2.",
        "Decimal to binary: divide by 2 and read remainders upward.",
        "2's complement: flip bits, add 1; 8-bit range is -128 to +127.",
      ]),
    ],
    tables: [
      {
        heading: "Computer System Terms",
        rows: [
          row("Computer", "Electronic system that accepts input, processes data using instructions, stores data, and produces output.", "IPOS", "Do not define it as only a calculator; stored instructions matter."),
          row("Hardware", "Physical computer parts such as CPU, RAM, storage, monitor, keyboard, NIC.", "Touchable", "A driver is software, not hardware."),
          row("Software", "Programs and data instructions that tell hardware what to do.", "Instructions", "Software includes system, application, and utility categories."),
          row("System Software", "Software that manages hardware and provides services/platform for applications.", "Runs the machine", "MS Word is not system software."),
          row("Application Software", "Software for user tasks such as writing, browsing, editing, and accounting.", "User task", "Depends on the OS and system services."),
          row("Utility Software", "Maintenance/protection tools such as antivirus, backup, cleanup, compression, diagnostics.", "Maintains", "Usually supports the system; it is not the main OS."),
          row("ALU", "CPU unit for arithmetic and logical operations.", "Compute unit", "Control Unit coordinates; ALU computes."),
          row("Control Unit", "CPU unit that coordinates instruction execution and control signals.", "Traffic officer", "Does not store long-term data."),
          row("Register", "Tiny, fastest CPU storage for immediate execution values.", "CPU scratchpad", "Smaller and faster than cache/RAM."),
          row("Cache", "Small fast memory near CPU for frequently used data/instructions.", "Near CPU", "Volatile; not permanent storage."),
          row("RAM", "Volatile main memory for running programs and active data.", "Work table", "Loses content when power is off."),
          row("ROM/Flash", "Non-volatile memory/storage that keeps data without power.", "Keeps data", "ROM is not normal working memory."),
        ],
      },
      {
        heading: "Number Systems And Data Representation",
        rows: [
          row("Binary", "Base-2 system using 0 and 1.", "2 digits", "Each place is a power of 2."),
          row("Octal", "Base-8 system using 0 through 7.", "3 bits per digit", "8 is invalid in octal."),
          row("Decimal", "Base-10 system using 0 through 9.", "Human default", "Computers store it as binary patterns."),
          row("Hexadecimal", "Base-16 system using 0-9 and A-F.", "4 bits per digit", "A=10, B=11, C=12, D=13, E=14, F=15."),
          row("BCD", "Binary-coded decimal; each decimal digit becomes its own 4-bit code.", "Digit by digit", "47 BCD is 0100 0111, not ordinary binary 101111."),
          row("ASCII", "Character code originally using 7 bits for English letters, digits, symbols, controls.", "A = 65", "ASCII does not cover all languages/scripts."),
          row("Unicode", "Character standard covering many world scripts and symbols.", "Global text", "Unicode is not the same thing as UTF-8."),
          row("1's Complement", "Signed representation made by flipping every bit.", "Flip bits", "Has positive zero and negative zero."),
          row("2's Complement", "Signed representation made by flipping bits then adding 1.", "Flip + 1", "8-bit 10000000 is -128."),
          row("Signed Magnitude", "Signed representation where one bit is sign and remaining bits are magnitude.", "Sign + value", "Also has positive and negative zero."),
        ],
      },
      {
        heading: "Architecture And Communication",
        rows: [
          row("Von Neumann Architecture", "Architecture where instructions and data share memory.", "One memory", "Harvard architecture separates instruction/data paths."),
          row("Fetch-Decode-Execute", "CPU cycle: fetch instruction, decode it, execute it.", "FDE", "Decode happens before execution."),
          row("Data Bus", "Pathway carrying actual data between components.", "Data payload", "Not the same as address bus."),
          row("Address Bus", "Pathway carrying memory addresses.", "Where to go", "Wider address bus can address more memory."),
          row("Control Bus", "Pathway carrying read/write/timing/control signals.", "Command signals", "Does not carry main data payload."),
          row("Protocol", "Communication rules for syntax, semantics, and timing.", "Rules", "A cable is a medium, not a protocol."),
          row("Bandwidth", "Maximum carrying capacity of a channel.", "Capacity", "Not the same as actual throughput."),
          row("Throughput", "Actual useful delivered data rate.", "Real speed", "Affected by overhead, congestion, errors."),
          row("Latency", "Delay before or during communication.", "Wait time", "High bandwidth does not guarantee low latency."),
          row("Simplex", "One-way communication only.", "One direction", "Keyboard to computer is a common example."),
          row("Half-Duplex", "Two-way communication, one direction at a time.", "Take turns", "Walkie-talkie style."),
          row("Full-Duplex", "Two-way simultaneous communication.", "Both talk", "Telephone-style communication."),
        ],
      },
      {
        heading: "Philippine IT Law, Ethics, And Safety",
        rows: [
          row("RA 10173", "Data Privacy Act of 2012; protects personal information and governs processing.", "Privacy law", "Core principles: transparency, legitimate purpose, proportionality."),
          row("RA 8792", "E-Commerce Act of 2000; recognizes electronic documents, signatures, and transactions.", "E-documents", "Not the cybercrime law."),
          row("RA 10175", "Cybercrime Prevention Act of 2012; defines and penalizes cybercrime offenses.", "Cybercrime law", "Includes illegal access, data interference, computer-related fraud."),
          row("Copyright", "Protects original expression such as code, docs, and media.", "Expression", "Does not protect an abstract idea alone."),
          row("Patent", "Protects qualifying inventions/technical solutions.", "Invention", "Different from copyright."),
          row("Trademark", "Protects brand identifiers such as names, marks, and logos.", "Brand sign", "Does not protect general code logic."),
          row("Trade Secret", "Confidential business-value information kept secret.", "Secret value", "Protection depends on secrecy."),
          row("Phishing", "Social engineering that tricks users into revealing secrets.", "Fake bait", "Attacks people, not just machines."),
          row("Ransomware", "Malware that blocks/encrypts access and demands payment.", "Data hostage", "Backups/prevention are better than paying."),
          row("Digital Divide", "Gap in access, skills, affordability, and effective use of digital tech.", "Access gap", "Not only about owning devices."),
          row("Ergonomics", "Designing work tools/spaces for comfort, safety, and efficiency.", "Fit the user", "RSI is linked to poor repetitive posture/motion."),
        ],
      },
    ],
    quickDrills: [
      "Convert 255 to binary, octal, and hexadecimal.",
      "Explain RAM vs ROM vs cache in one sentence each.",
      "Classify simplex, half-duplex, and full-duplex examples.",
      "Match RA 10173, RA 8792, and RA 10175 to their legal focus.",
    ],
    sources: [
      source("PUP College of Computer and Information Sciences", "https://www.pup.edu.ph/CCIS/"),
      source("National Privacy Commission - Data Privacy Act", "https://privacy.gov.ph/data-privacy-act/"),
      source("Official Gazette - RA 10173", "https://www.officialgazette.gov.ph/2012/08/15/republic-act-no-10173/"),
      source("Official Gazette - RA 8792", "https://www.officialgazette.gov.ph/2000/06/14/republic-act-no-8792-s-2000/"),
      source("Official Gazette - RA 10175", "https://www.officialgazette.gov.ph/2012/09/12/republic-act-no-10175/"),
      source("ACM Code of Ethics", "https://www.acm.org/code-of-ethics"),
      source("NIST CSRC Glossary", "https://csrc.nist.gov/glossary"),
      source("Unicode Standard", "https://www.unicode.org/versions/latest/"),
      source("RFC 20 - ASCII", "https://www.rfc-editor.org/rfc/rfc20"),
      source("Computer History Museum - Computers Timeline", "https://www.computerhistory.org/timeline/computers/"),
    ],
  },

  "data-structures": {
    topicId: "data-structures",
    title: "Data Structures & Algorithms Notes",
    summary: "Spreadsheet-style reviewer for arrays, stacks, queues, linked lists, searching, sorting, complexity, and expression conversion.",
    verificationStatus: "Verified",
    examFocus: [
      "Memorize operation complexity for arrays, stacks, queues, linked lists, linear search, and binary search.",
      "Practice array address formulas for 1D, row-major 2D, and column-major 2D arrays.",
      "Compare sorting algorithms by time, space, stability, and best use case.",
      "Trace stack/queue operations and postfix/infix conversions.",
    ],
    sections: [
      section("Fast Formula Sheet", "Complexity questions are pattern recognition.", [
        "Array access O(1); insert/delete with shifting O(n).",
        "Stack push/pop O(1); queue enqueue/dequeue O(1) with proper implementation.",
        "Binary search O(log n) requires sorted data.",
      ]),
      section("Expression Rule", "Postfix is easiest with a stack.", [
        "Scan left to right. Push operands. On operator, pop operands, compute, push result.",
        "For infix to postfix, multiplication/division outrank addition/subtraction; parentheses force priority.",
      ]),
    ],
    tables: [
      {
        heading: "Arrays, Matrices, And Lists",
        rows: [
          row("Array", "Contiguous indexed collection.", "Index + contiguous", "Access O(1), shifting O(n)."),
          row("Zero-Based Index", "Valid indices for n elements are 0 to n-1.", "Start at zero", "Index n is out of bounds."),
          row("Static Array", "Fixed-size array.", "Fixed", "Cannot automatically grow."),
          row("Dynamic Array", "Resizable array that may allocate bigger storage and copy.", "Resizable", "Append is amortized O(1), not always O(1)."),
          row("Sparse Matrix", "Matrix where most values are zero.", "Mostly zero", "Use compact representation to avoid storing zeros."),
          row("1D Address", "Address(A[i]) = base + i * elementSize.", "Base + offset", "Use correct zero/one-based index."),
          row("Row-Major", "Rows stored consecutively.", "Rows first", "Formula uses number of columns."),
          row("Column-Major", "Columns stored consecutively.", "Columns first", "Formula uses number of rows."),
          row("Singly Linked List", "Node has data and next link.", "Data + next", "No direct backward traversal."),
          row("Doubly Linked List", "Node has data, previous, and next links.", "Prev + next", "More memory per node."),
          row("Circular List", "Last node points back to first node.", "Tail to head", "Avoid infinite traversal loops."),
        ],
      },
      {
        heading: "Stacks And Queues",
        rows: [
          row("Stack", "LIFO structure; insert/remove at top.", "Last in first out", "Used in recursion, undo, postfix, parentheses."),
          row("Push", "Add item to top of stack.", "Add top", "Can overflow in fixed array stack."),
          row("Pop", "Remove/return top stack item.", "Remove top", "Can underflow if empty."),
          row("Peek/Top", "Read top item without removing.", "Look only", "Does not change stack size."),
          row("Queue", "FIFO structure; enqueue rear, dequeue front.", "First in first out", "Used in BFS, buffering, scheduling."),
          row("Enqueue", "Insert item at rear.", "Join line", "Circular queues wrap rear using modulo."),
          row("Dequeue", "Remove item from front.", "Leave line", "Different from stack pop."),
          row("Circular Queue", "Array queue that reuses freed spaces by wrapping.", "Modulo queue", "Full often means (rear+1)%size == front."),
          row("Priority Queue", "Removal based on priority.", "Priority first", "Not strict FIFO."),
          row("Deque", "Double-ended queue.", "Both ends", "Deque is a structure; dequeue is an operation."),
        ],
      },
      {
        heading: "Searching And Sorting",
        rows: [
          row("Linear Search", "Checks elements one by one.", "Scan all", "Works unsorted; worst O(n)."),
          row("Binary Search", "Checks middle of sorted data and halves search space.", "Halve", "Requires sorted data."),
          row("Bubble Sort", "Swaps adjacent out-of-order items repeatedly.", "Adjacent swaps", "Best O(n) only with optimized flag."),
          row("Selection Sort", "Selects minimum remaining item each pass.", "Select min", "O(n^2) even if already sorted."),
          row("Insertion Sort", "Inserts each item into sorted prefix.", "Sorted hand", "Best for small/nearly sorted data."),
          row("Merge Sort", "Splits, sorts halves, merges.", "Split + merge", "O(n log n), stable, usually O(n) extra space."),
          row("Quick Sort", "Partitions around pivot.", "Pivot", "Average O(n log n), worst O(n^2)."),
          row("Stable Sort", "Keeps equal items in original relative order.", "Equal order kept", "Selection/quick usually not stable."),
          row("In-Place Sort", "Uses small extra memory.", "Low extra memory", "Standard merge sort is not in-place for arrays."),
          row("Amortized Time", "Average cost per operation over a sequence.", "Spread cost", "Dynamic array append is amortized O(1)."),
        ],
      },
    ],
    quickDrills: [
      "Compute row-major address for A[2][3] with base 1000, columns 4, size 4.",
      "Convert (A + B) * (C - D) to postfix.",
      "Say time and stability for bubble, selection, insertion, merge, quick.",
      "Trace enqueue/dequeue on a circular queue of size 5.",
    ],
    sources: [
      source("Open Data Structures", "https://opendatastructures.org/"),
      source("OpenDSA Data Structures and Algorithms", "https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/"),
    ],
  },

  "operating-systems": {
    topicId: "operating-systems",
    title: "Operating Systems Notes",
    summary: "Deep reviewer for CPU architecture, booting, protection, processes, scheduling, deadlocks, disk scheduling, paging, and virtual memory.",
    verificationStatus: "Verified",
    examFocus: [
      "Memorize CPU registers, boot process, BIOS/UEFI, POST, boot loader, MBR/GPT, and Secure Boot.",
      "Know user mode, kernel mode, system calls, traps, interrupts, base/limit registers, and privileged instructions.",
      "Trace FCFS, SJF, SRTF, Round Robin, disk scheduling, FIFO/LRU page replacement.",
      "Know deadlock conditions, prevention, avoidance, safe states, and Banker's Algorithm.",
    ],
    sections: [
      section("Scheduling Reminder", "Draw the Gantt chart first.", [
        "Waiting time is time in ready queue; turnaround time is completion minus arrival.",
        "SJF minimizes average waiting if burst times are known; SRTF is preemptive SJF.",
      ]),
      section("Memory Reminder", "Virtual memory makes disk act like extension of RAM, but slowly.", [
        "Page fault means page not in memory; TLB miss means translation not cached.",
        "Thrashing means too much paging and too little useful execution.",
      ]),
    ],
    tables: [
      {
        heading: "CPU, Registers, And Booting",
        rows: [
          row("Program Counter", "Register holding address of next instruction.", "Next instruction", "Not the current instruction itself."),
          row("Instruction Register", "Register holding current instruction.", "Current instruction", "Different from PC."),
          row("MAR", "Memory Address Register; holds memory address for access.", "Where", "MDR holds data."),
          row("MDR", "Memory Data Register; holds data read/written.", "What", "MAR says address; MDR says data."),
          row("Stack Pointer", "Register pointing to top of stack.", "Top stack", "Used in calls/interrupts."),
          row("POST", "Power-On Self-Test checking hardware at boot.", "Hardware check", "Runs before OS."),
          row("Boot Loader", "Program that loads OS kernel.", "Loads kernel", "Firmware finds boot loader."),
          row("MBR", "Legacy boot/partition structure in first disk sector.", "First sector", "GPT is newer and supports larger disks."),
          row("GPT", "Modern partitioning scheme replacing many MBR limits.", "Modern partition", "Works with UEFI commonly."),
          row("Secure Boot", "UEFI feature checking trusted boot signatures.", "Trusted boot", "Not a general antivirus."),
        ],
      },
      {
        heading: "Protection, Processes, And Scheduling",
        rows: [
          row("User Mode", "Restricted mode for applications.", "Limited", "Cannot run privileged instructions."),
          row("Kernel Mode", "Privileged mode for OS kernel.", "Full control", "Kernel bugs can crash system."),
          row("System Call", "Controlled request to OS service.", "Ask OS", "Uses controlled transition."),
          row("Trap", "Software-generated interrupt for system call/exception.", "Software interrupt", "Not always an error."),
          row("Interrupt", "Signal causing CPU to handle an event.", "Attention", "Can be hardware or software."),
          row("PCB", "Process Control Block storing state, registers, scheduling info.", "Process record", "Needed for context switch."),
          row("Context Switch", "Save one process state, load another.", "Switch", "Too many switches waste time."),
          row("FCFS", "First-Come First-Served scheduling.", "Arrival order", "Can cause convoy effect."),
          row("SJF", "Shortest Job First scheduling.", "Shortest first", "Needs burst estimates."),
          row("Round Robin", "Preemptive scheduling with time quantum.", "Take turns", "Tiny quantum increases overhead."),
          row("SRTF", "Shortest Remaining Time First.", "Remaining shortest", "Can preempt current job."),
          row("Aging", "Increasing priority of waiting processes.", "Help old jobs", "Reduces starvation."),
        ],
      },
      {
        heading: "Deadlock, Disk, And Virtual Memory",
        rows: [
          row("Deadlock", "Processes wait forever for each other.", "Circular waiting", "Needs all four Coffman conditions."),
          row("Mutual Exclusion", "Resource cannot be shared.", "One user", "One deadlock condition."),
          row("Hold And Wait", "Process holds resources while waiting for more.", "Hold + ask", "Can prevent by all-at-once requests."),
          row("No Preemption", "Resources cannot be forcibly taken.", "Cannot take", "One deadlock condition."),
          row("Circular Wait", "Cycle of processes waiting for resources.", "Cycle", "Resource ordering prevents it."),
          row("Banker's Algorithm", "Avoidance algorithm checking safe state.", "Safe loan", "Requires max claims."),
          row("Seek Time", "Time for disk head to move to track.", "Move head", "Part of disk access time."),
          row("Rotational Latency", "Waiting for disk sector to rotate under head.", "Wait spin", "Average is half rotation."),
          row("SCAN", "Disk scheduling elevator algorithm.", "Elevator", "C-SCAN moves one direction then jumps."),
          row("Page Fault", "Needed page is not in physical memory.", "Missing page", "OS may load it; not always fatal."),
          row("TLB", "Cache of recent address translations.", "Address cache", "TLB miss is not page fault."),
          row("Belady's Anomaly", "FIFO may get more page faults with more frames.", "FIFO surprise", "Does not happen with stack algorithms like LRU."),
        ],
      },
    ],
    quickDrills: [
      "List boot steps from firmware to kernel.",
      "Draw Gantt charts for FCFS, SJF, SRTF, and Round Robin.",
      "Trace FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK disk scheduling.",
      "Simulate FIFO and LRU page replacement.",
    ],
    sources: [
      source("Operating Systems: Three Easy Pieces", "https://pages.cs.wisc.edu/~remzi/OSTEP/"),
      source("UEFI Specifications", "https://uefi.org/specifications"),
      source("Microsoft Windows boot overview", "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-boot-and-installation-overview"),
    ],
  },

  "discrete-structures": {
    topicId: "discrete-structures",
    title: "Discrete Structures Notes",
    summary: "Formula-first notes for counting, permutations, combinations, pigeonhole, binomial theorem, sets, relations, functions, propositions, and quantifiers.",
    verificationStatus: "Verified",
    examFocus: [
      "Choose product rule, sum rule, permutation, or combination correctly.",
      "Memorize set operations, De Morgan laws, inclusion-exclusion, and power set sizes.",
      "Classify relations and functions.",
      "Transform implications, contrapositives, converses, inverses, and quantifier negations.",
    ],
    sections: [
      section("Decision Rule", "Order matters = permutation; order ignored = combination.", [
        "President/VP/secretary: permutation.",
        "Committee/team/group: combination.",
        "AND stages multiply; OR disjoint choices add.",
      ]),
      section("Logic Rule", "p -> q fails only on true-to-false.", [
        "Contrapositive is equivalent to original.",
        "Converse and inverse are not generally equivalent.",
      ]),
    ],
    tables: [
      {
        heading: "Counting And Combinatorics",
        rows: [
          row("Product Rule", "Multiply choices across stages.", "AND = multiply", "Use when all stages happen."),
          row("Sum Rule", "Add disjoint alternatives.", "OR = add", "Only direct if alternatives do not overlap."),
          row("Bit Strings", "Length n bit strings: 2^n.", "2 choices each", "Length 8 gives 256."),
          row("Function Count", "Functions from m-element set to n-element set: n^m.", "Codomain^domain", "Exponent is domain size."),
          row("Permutation", "Ordered selection: P(n,r)=n!/(n-r)!.", "Order matters", "Officer positions are permutations."),
          row("Combination", "Unordered selection: C(n,r)=n!/(r!(n-r)!).", "Order ignored", "Committees are combinations."),
          row("Repeated Permutation", "n! divided by repeated item factorials.", "Divide repeats", "Use for MISSISSIPPI/BANANA style."),
          row("Circular Permutation", "n distinct around circle: (n-1)!.", "Fix one seat", "Bead reflection cases may divide by 2."),
          row("Pigeonhole Principle", "N objects in k boxes means at least ceiling(N/k) in one box.", "Too many objects", "Use generalized form for minimum guarantee."),
          row("Binomial Coefficient", "Coefficient in (a+b)^n is C(n,k).", "Pascal row", "Row n starts k=0."),
        ],
      },
      {
        heading: "Sets, Relations, And Functions",
        rows: [
          row("Union", "Elements in A, B, or both.", "Either", "Subtract overlap when counting."),
          row("Intersection", "Elements common to both sets.", "Both", "A intersect empty set is empty."),
          row("Difference", "A - B means in A but not B.", "A only", "Not generally equal to B - A."),
          row("Complement", "Elements in universal set not in A.", "Outside A", "Depends on universal set."),
          row("Power Set", "Set of all subsets; size 2^|A|.", "All subsets", "|A|=5 gives 32 subsets."),
          row("Cartesian Product", "Set of ordered pairs from A and B.", "Ordered pairs", "|A x B| = |A| * |B|."),
          row("Inclusion-Exclusion", "|A union B|=|A|+|B|-|A intersect B|.", "Subtract overlap", "Neither = total - union."),
          row("Reflexive", "Every element relates to itself.", "(a,a) all", "Missing one self-pair fails."),
          row("Symmetric", "aRb implies bRa.", "Both directions", "Not antisymmetric."),
          row("Transitive", "aRb and bRc imply aRc.", "Chain closes", "Check all chains."),
          row("Equivalence Relation", "Reflexive, symmetric, transitive.", "RST", "Antisymmetric not included."),
          row("Partial Order", "Reflexive, antisymmetric, transitive.", "RAT", "Symmetry not included."),
          row("Injective", "Different inputs map to different outputs.", "No sharing", "Finite domain cannot be larger than codomain."),
          row("Surjective", "Every codomain element is hit.", "Covers codomain", "Range must equal codomain."),
          row("Bijective", "Both injective and surjective.", "Perfect pairing", "Same-size finite injective implies surjective."),
        ],
      },
      {
        heading: "Logic",
        rows: [
          row("Proposition", "Statement with definite truth value.", "True/false", "Questions are not propositions."),
          row("Conditional", "p -> q false only when p true and q false.", "T to F fails", "False antecedent makes implication true."),
          row("Contrapositive", "not q -> not p.", "Reverse + negate", "Equivalent to original."),
          row("Converse", "q -> p.", "Reverse", "Not generally equivalent."),
          row("Inverse", "not p -> not q.", "Negate", "Not generally equivalent."),
          row("Biconditional", "p <-> q true when p and q match truth values.", "Same truth", "Means both directions."),
          row("Tautology", "Always true.", "Always T", "p OR not p."),
          row("Contradiction", "Always false.", "Always F", "p AND not p."),
          row("Universal Quantifier", "forall x means every x.", "All", "Negates to exists x not P(x)."),
          row("Existential Quantifier", "exists x means at least one x.", "Some", "Negates to forall x not P(x)."),
          row("De Morgan Logic", "not(p OR q)=not p AND not q; not(p AND q)=not p OR not q.", "Flip operator", "Negate each part and change connector."),
        ],
      },
    ],
    quickDrills: [
      "Compute C(12,2), P(8,3), and functions from 3 elements to 4 elements.",
      "Negate: Every student passed.",
      "Classify a relation as reflexive/symmetric/antisymmetric/transitive.",
      "Convert p -> q to contrapositive, converse, and inverse.",
    ],
    sources: [
      source("Discrete Mathematics: An Open Introduction", "https://discrete.openmathbooks.org/dmoi4.html"),
      source("MIT OpenCourseWare Mathematics for Computer Science", "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/"),
    ],
  },

  networking: {
    topicId: "networking",
    title: "Data Communication & Networking Notes",
    summary: "Comprehensive table reviewer for protocols, ports, Internet basics, addressing, subnetting, OSI/TCP-IP, TCP/UDP, Ethernet, switches, routers, VLAN, and ARP.",
    verificationStatus: "Verified",
    examFocus: [
      "Memorize common protocol ports and protocol functions.",
      "Know IPv4/IPv6/MAC sizes, classes, private ranges, CIDR, masks, and host formulas.",
      "Map OSI layers, TCP/IP layers, PDUs, and devices.",
      "Understand TCP handshake, UDP use cases, Ethernet switching, ARP, VLAN, STP.",
    ],
    sections: [
      section("Subnet Rule", "Host bits decide host count.", [
        "Usable IPv4 hosts usually = 2^hostBits - 2.",
        "/24 means 24 network bits and 8 host bits.",
      ]),
      section("Model Rule", "OSI is 7 layers; TCP/IP commonly uses 4 layers.", [
        "Router = Layer 3, switch = Layer 2, hub = Layer 1.",
        "Transport PDU = segment; Network = packet; Data Link = frame; Physical = bits.",
      ]),
    ],
    tables: [
      {
        heading: "Protocols And Ports",
        rows: [
          row("Protocol", "Rules for syntax, semantics, timing, and order of communication.", "Rules", "Not a cable or device."),
          row("HTTP", "Web protocol using TCP port 80.", "Web 80", "HTTPS is 443."),
          row("HTTPS", "Encrypted web communication over TLS, TCP port 443.", "Secure web", "S means TLS security."),
          row("FTP", "File Transfer Protocol; control connection TCP port 21.", "File 21", "Not encrypted by default."),
          row("SSH", "Secure remote login, TCP port 22.", "Shell 22", "Replaces Telnet."),
          row("Telnet", "Insecure remote terminal, TCP port 23.", "Old remote 23", "No modern encryption."),
          row("SMTP", "Mail sending/transfer, TCP port 25.", "Send mail 25", "POP3/IMAP retrieve mail."),
          row("DNS", "Resolves names to addresses, port 53.", "Name to IP", "Often UDP, sometimes TCP."),
          row("POP3", "Email retrieval, TCP port 110.", "Post office 110", "Often downloads mail."),
          row("IMAP", "Email access/sync, TCP port 143.", "Mailbox sync 143", "Keeps mail server-centered."),
          row("DHCP", "Automatically assigns IP configuration.", "Auto IP", "Different from DNS."),
          row("ARP", "Maps IPv4 address to MAC address on local network.", "IP to MAC", "Local-link only."),
        ],
      },
      {
        heading: "Addressing And Models",
        rows: [
          row("IPv4", "32-bit address in dotted-decimal notation.", "32 bits", "Four octets."),
          row("IPv6", "128-bit address in hexadecimal groups.", "128 bits", "Not dotted decimal."),
          row("MAC Address", "48-bit Layer 2 address.", "48 bits", "Switches use MACs; routers use IP."),
          row("Class A", "First octet 1-126.", "A 1-126", "127 is loopback."),
          row("Class B", "First octet 128-191.", "B 128-191", "Private B is 172.16.0.0/12."),
          row("Class C", "First octet 192-223.", "C 192-223", "192.168.0.0/16 is private."),
          row("Class D", "224-239 multicast.", "D multicast", "Not normal host range."),
          row("Private Ranges", "10/8, 172.16/12, 192.168/16.", "Private LANs", "Not routed publicly as normal Internet addresses."),
          row("CIDR", "Slash notation for prefix length.", "/prefix", "/28 = 28 network bits."),
          row("Subnet Mask", "Separates network bits from host bits.", "Network vs host", "/28 = 255.255.255.240."),
          row("NAT", "Translates private internal addresses to external addresses.", "Private to public", "Not identical to firewall."),
          row("Loopback", "Host's own address, commonly 127.0.0.1.", "Self", "Traffic stays inside host."),
        ],
      },
      {
        heading: "Layers, TCP/UDP, And Ethernet",
        rows: [
          row("Physical Layer", "OSI Layer 1; transmits bits.", "Bits", "Hub is Layer 1."),
          row("Data Link Layer", "OSI Layer 2; frames and MAC addressing.", "Frames", "Switch is Layer 2."),
          row("Network Layer", "OSI Layer 3; routing and logical addressing.", "Packets", "Router is Layer 3."),
          row("Transport Layer", "OSI Layer 4; ports, segments, end-to-end delivery.", "Segments", "TCP/UDP here."),
          row("TCP", "Reliable connection-oriented transport.", "Reliable stream", "More overhead."),
          row("UDP", "Connectionless low-overhead datagrams.", "Fast datagrams", "No built-in reliability."),
          row("TCP Handshake", "SYN, SYN-ACK, ACK.", "S-S-A", "Establishes TCP connection."),
          row("Socket", "Endpoint identified by IP address plus port.", "IP + port", "Not the physical cable."),
          row("Switch", "Forwards frames using MAC table.", "MAC forwarding", "Unknown unicast is flooded."),
          row("Router", "Forwards packets between networks.", "IP routing", "Separates broadcast domains."),
          row("VLAN", "Logical LAN segmentation on switches.", "Virtual LAN", "Different VLANs need routing."),
          row("STP", "Prevents Layer 2 loops.", "Stop loops", "Avoids broadcast storms."),
        ],
      },
    ],
    quickDrills: [
      "Write ports for FTP, SSH, Telnet, SMTP, DNS, HTTP, POP3, IMAP, HTTPS.",
      "Compute usable hosts for /26 and /28.",
      "Map OSI layers to PDU and device.",
      "Trace ARP and switch forwarding for same-LAN communication.",
    ],
    sources: [
      source("RFC 791 - Internet Protocol", "https://www.rfc-editor.org/rfc/rfc791"),
      source("RFC 8200 - IPv6", "https://www.rfc-editor.org/rfc/rfc8200"),
      source("RFC 9293 - TCP", "https://www.rfc-editor.org/rfc/rfc9293"),
      source("RFC 768 - UDP", "https://www.rfc-editor.org/rfc/rfc768"),
      source("IANA Service Name and Transport Protocol Port Number Registry", "https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"),
      source("RFC 1918 - Private Address Space", "https://www.rfc-editor.org/rfc/rfc1918"),
      source("RFC 826 - ARP", "https://www.rfc-editor.org/rfc/rfc826"),
      source("RFC 792 - ICMP", "https://www.rfc-editor.org/rfc/rfc792"),
      source("RFC 3986 - URI Generic Syntax", "https://www.rfc-editor.org/rfc/rfc3986"),
    ],
  },

  "web-development": {
    topicId: "web-development",
    title: "Web Development Notes",
    summary: "Table-style reviewer for HTML, CSS, JavaScript, DOM, events, PHP, forms, arrays, sessions, and MySQLi basics.",
    verificationStatus: "Verified",
    examFocus: [
      "Know HTML semantic elements, forms, attributes, tables, entities, and metadata.",
      "Know CSS syntax, selectors, specificity, box model, display, position, flexbox, colors, units, and media queries.",
      "Predict JavaScript type/equality/coercion outputs and array/DOM method behavior.",
      "Know PHP syntax, strings, arrays, superglobals, loops, include/require, sessions, and MySQLi.",
    ],
    sections: [
      section("Web Stack Cue", "HTML = structure, CSS = presentation, JS = behavior, PHP = server logic.", [
        "For exam output questions, evaluate types/coercion step by step.",
        "For PHP form questions, POST data lives in $_POST; session data lives in $_SESSION.",
      ]),
    ],
    tables: [
      {
        heading: "HTML And CSS",
        rows: [
          row("<!DOCTYPE html>", "Tells browser to use HTML5 standards mode.", "HTML5 mode", "Not an HTML element."),
          row("<head>", "Metadata container for title, charset, stylesheet links.", "Page info", "Visible content goes in body."),
          row("<main>", "Primary unique content of document.", "Main content", "Usually one main per page."),
          row("<nav>", "Major navigation links.", "Navigation", "Not every link group must be nav."),
          row("<article>", "Independent self-contained content.", "Can stand alone", "Different from generic div."),
          row("src", "Source path for image/resource.", "Source", "Links use href."),
          row("alt", "Alternative image text.", "Image fallback", "Important for accessibility."),
          row("colspan", "Table cell spans columns.", "Column span", "rowspan spans rows."),
          row("CSS Rule", "selector { property: value; }", "Selector + declarations", "Use colon, not equals."),
          row("Class Selector", ".name targets class.", "Dot class", "# is id."),
          row("ID Selector", "#name targets id.", "Hash id", "ID should be unique."),
          row("Specificity", "Priority: inline > id > class > element.", "I-I-C-E", "Source order wins only on tie."),
          row("Box Model", "Content, padding, border, margin.", "Inside out", "Margin is outside border."),
          row("display:none", "Removes element from layout.", "Gone", "visibility:hidden still takes space."),
          row("position:fixed", "Positions relative to viewport.", "Fixed to screen", "Default is static."),
          row("Flexbox Axes", "justify-content = main axis; align-items = cross axis.", "Main/cross", "Axis changes with flex-direction."),
          row("rem", "Unit relative to root font size.", "Root em", "em depends on current context."),
          row("Media Query", "Conditional CSS for device/screen features.", "Responsive", "@media, not @import."),
        ],
      },
      {
        heading: "JavaScript, DOM, PHP",
        rows: [
          row("let", "Block-scoped reassignable variable.", "Block + reassign", "Different from var."),
          row("const", "Block-scoped binding that cannot be reassigned.", "Constant binding", "Object contents can still mutate."),
          row("var", "Function-scoped variable.", "Function scope", "Not block scoped."),
          row("==", "Loose equality with coercion.", "Coerces", "'' == false is true."),
          row("===", "Strict equality by value and type.", "No coercion", "NaN === NaN is false."),
          row("typeof null", "Returns 'object' due to legacy JS behavior.", "Null object bug", "null is not really a normal object."),
          row("typeof NaN", "Returns 'number'.", "NaN number", "Name is misleading."),
          row("map()", "Transforms each array element into a new array.", "Transform", "Does not filter."),
          row("filter()", "Keeps elements passing a test.", "Keep passing", "Does not transform by itself."),
          row("querySelector()", "Returns first element matching CSS selector.", "First CSS match", "querySelectorAll returns all."),
          row("textContent", "Sets/gets plain text.", "Plain text", "innerHTML parses markup."),
          row("addEventListener()", "Attaches event handler.", "Listen", "Prefer over inline handlers."),
          row("<?php ?>", "PHP opening/closing tags.", "PHP tags", "Pure PHP files often omit closing tag."),
          row("echo", "Outputs text/values.", "Print", "Concatenate strings with dot."),
          row("strlen()", "Returns string length.", "Length", "count() is for arrays/countables."),
          row("$_POST", "Submitted POST form fields.", "Posted fields", "Validate and sanitize."),
          row("$_SESSION", "Session data across requests.", "User session", "Needs session_start()."),
          row("include vs require", "include warns if missing; require fatal errors.", "Require is required", "Use require for essential files."),
          row("mysqli_query()", "Executes SQL through MySQLi connection.", "Run SQL", "Use prepared statements for user input."),
        ],
      },
    ],
    quickDrills: [
      "Predict: typeof null, typeof NaN, 10 > 9 > 8, NaN === NaN.",
      "Rank specificity: p, .note, #main, inline style.",
      "Write PHP to read $_POST['username'].",
      "Explain textContent vs innerHTML.",
    ],
    sources: [
      source("MDN HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML"),
      source("MDN CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS"),
      source("MDN JavaScript Guide", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"),
      source("PHP Manual", "https://www.php.net/manual/en/"),
    ],
  },

  hci: {
    topicId: "hci",
    title: "Human-Computer Interaction Notes",
    summary: "Memorization table for scenario-based design, user research, personas, task analysis, Norman principles, UX laws, Gestalt, WCAG, Nielsen/Shneiderman heuristics, SUS, and ISO usability.",
    verificationStatus: "Verified",
    examFocus: [
      "Compare scenarios, use cases, personas, user stories, conceptual design, and concrete design.",
      "Know contextual inquiry, ethnography, card sorting, diary study, focus group, A/B testing, think-aloud, usability testing.",
      "Memorize Norman principles, Fitts, Hick, Miller, Gestalt principles, and WCAG POUR.",
      "Know Nielsen heuristics, Shneiderman rules, heuristic evaluation, cognitive walkthrough, SUS, ISO 9241-11.",
    ],
    sections: [
      section("Research Cue", "Qualitative explains why; quantitative measures how much.", [
        "Use card sorting for information architecture.",
        "Use contextual inquiry for real work behavior.",
        "Use A/B testing for comparing variants with metrics.",
      ]),
      section("Heuristic Cue", "Most UI exam examples map to Nielsen's heuristics.", [
        "Spinner/progress = visibility of system status.",
        "Undo = user control and freedom.",
        "Plain error messages = help users recognize, diagnose, recover.",
      ]),
    ],
    tables: [
      {
        heading: "Design And User Research",
        rows: [
          row("Scenario", "Narrative of users doing tasks in context.", "Story of use", "Less formal than use case."),
          row("Use Case", "Structured actor-system interaction to reach a goal.", "Actor + system", "More system-focused."),
          row("User Story", "As a user, I want goal, so that benefit.", "Role-goal-benefit", "Not a full spec alone."),
          row("Persona", "Research-based archetype of a user group.", "User model", "Should not be stereotype."),
          row("Conceptual Design", "High-level model of what the system is and how users think about it.", "Big idea", "Before detailed UI."),
          row("Concrete Design", "Detailed screens, controls, layouts, interaction specifics.", "Actual UI", "Should follow conceptual model."),
          row("HTA", "Hierarchical Task Analysis decomposes goals into tasks/subtasks/plans.", "Goal tree", "Plan defines sequence/conditions."),
          row("Claims Analysis", "Studies positive and negative effects of design choices.", "Pros/cons", "Not only requirements listing."),
          row("Contextual Inquiry", "Observe/interview users in real context.", "Watch in context", "Not lab-only testing."),
          row("Card Sorting", "Users group items to reveal mental categories.", "Group cards", "Open sort names groups; closed sort uses given groups."),
          row("Think-Aloud", "Users verbalize thoughts while doing tasks.", "Say thoughts", "May influence natural behavior."),
          row("Diary Study", "Users record experiences over time.", "Long-term notes", "Good for habits/patterns."),
          row("A/B Testing", "Compares variants using behavior metrics.", "A vs B", "Needs enough data and clear metric."),
          row("Affinity Diagram", "Clusters findings into themes.", "Group insights", "Used after collecting data."),
        ],
      },
      {
        heading: "Principles, Accessibility, And Evaluation",
        rows: [
          row("Affordance", "Possible action suggested by object/interface.", "Can do", "Button affords pressing."),
          row("Signifier", "Cue showing where/how action should happen.", "Shows action", "Label/icon can be signifier."),
          row("Mapping", "Relationship between controls and results.", "Control matches result", "Bad mapping confuses."),
          row("Constraint", "Limit preventing invalid/unwanted actions.", "Stops wrong", "Can be physical/logical/semantic/cultural."),
          row("Feedback", "System response after user action.", "System answers", "No feedback causes uncertainty."),
          row("Fitts's Law", "Pointing time increases with distance and decreases with target size.", "Big near targets", "Tiny far buttons are slower."),
          row("Hick's Law", "Decision time tends to increase with number/complexity of choices.", "More choices slower", "Organize choices; do not blindly hide all."),
          row("Miller's Law", "Short-term memory is limited; often summarized as 7 plus/minus 2 chunks.", "Chunk memory", "Not a strict modern menu limit."),
          row("Gestalt Proximity", "Nearby items are perceived as related.", "Near = related", "Spacing communicates grouping."),
          row("Gestalt Similarity", "Similar-looking items are perceived as related.", "Same look", "Inconsistent styles imply different meaning."),
          row("WCAG POUR", "Perceivable, operable, understandable, robust.", "POUR", "Accessibility is more than color contrast."),
          row("Nielsen Heuristics", "Ten usability principles for inspection.", "10 checks", "Heuristics, not strict laws."),
          row("Heuristic Evaluation", "Experts inspect UI independently against heuristics.", "Expert inspection", "Different from usability test with users."),
          row("Cognitive Walkthrough", "Step-by-step inspection for learnability/discoverability.", "Can user figure it out?", "Good for first-use tasks."),
          row("SUS", "10-item System Usability Scale questionnaire.", "10 questions", "Around 68 is commonly average."),
          row("ISO 9241-11", "Usability as effectiveness, efficiency, satisfaction in context.", "EES", "Always tied to users/goals/context."),
        ],
      },
    ],
    quickDrills: [
      "List Nielsen's 10 heuristics.",
      "Match spinner, undo, confirmation dialog, inconsistent colors, and technical error to heuristics.",
      "Choose the best method: card sorting, contextual inquiry, A/B testing, diary study.",
      "Explain affordance vs signifier using a button.",
    ],
    sources: [
      source("Nielsen Norman Group - 10 Usability Heuristics", "https://www.nngroup.com/articles/ten-usability-heuristics/"),
      source("Nielsen Norman Group - Test with 5 Users", "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/"),
      source("W3C WCAG Overview", "https://www.w3.org/WAI/standards-guidelines/wcag/"),
      source("ISO 9241-11 overview", "https://www.iso.org/standard/77520.html"),
    ],
  },
};
