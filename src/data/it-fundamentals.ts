import { Question } from "./types";

export const itFundamentalsQuestions: Question[] = [
  // ============================================================
  // COMPUTING CONCEPTS (Questions 1-20)
  // ============================================================
  {
    question: "What is a computer?",
    choices: [
      "A device that only performs mathematical calculations",
      "An electronic device that accepts input, processes data, stores data, and produces output",
      "A machine designed exclusively for communication",
      "A device that only stores information",
    ],
    answer: 1,
    explanation:
      "A computer is an electronic device that performs four basic operations: accepts input, processes data, stores data, and produces output. This is known as the IPOS (Input-Process-Output-Storage) cycle.",
  },
  {
    question:
      "Which of the following correctly describes the IPOS cycle?",
    choices: [
      "Install, Program, Operate, Save",
      "Input, Process, Output, Storage",
      "Integrate, Process, Optimize, Store",
      "Input, Print, Output, Send",
    ],
    answer: 1,
    explanation:
      "The IPOS cycle stands for Input, Process, Output, and Storage — the four fundamental operations a computer performs when handling data.",
  },
  {
    question: "What is the difference between hardware and software?",
    choices: [
      "Hardware is expensive; software is free",
      "Hardware is the physical components; software is the set of instructions that tells hardware what to do",
      "Hardware processes data; software stores data",
      "There is no difference; they are interchangeable terms",
    ],
    answer: 1,
    explanation:
      "Hardware refers to the tangible, physical components of a computer (CPU, monitor, keyboard), while software is the intangible set of programs and instructions that direct the hardware.",
  },
  {
    question: "Which of the following is an example of system software?",
    choices: [
      "Microsoft Word",
      "Adobe Photoshop",
      "Windows 11 operating system",
      "Google Chrome",
    ],
    answer: 2,
    explanation:
      "System software manages computer hardware and provides a platform for running application software. Operating systems like Windows 11, macOS, and Linux are primary examples of system software.",
  },
  {
    question: "Utility software is best described as:",
    choices: [
      "Software used to create documents and presentations",
      "Software that helps maintain, analyze, and optimize the computer system",
      "Software used for gaming and entertainment",
      "The main operating system of a computer",
    ],
    answer: 1,
    explanation:
      "Utility software performs maintenance tasks such as disk defragmentation, virus scanning, file compression, and backup. Examples include antivirus programs and disk cleanup tools.",
  },
  {
    question:
      "Which CPU component performs arithmetic calculations and logical comparisons?",
    choices: [
      "Control Unit (CU)",
      "Arithmetic Logic Unit (ALU)",
      "Register",
      "Cache memory",
    ],
    answer: 1,
    explanation:
      "The ALU (Arithmetic Logic Unit) is the component of the CPU that performs all arithmetic operations (addition, subtraction, etc.) and logical operations (AND, OR, NOT comparisons).",
  },
  {
    question: "What is the role of the Control Unit (CU) in the CPU?",
    choices: [
      "It performs arithmetic calculations",
      "It stores data permanently",
      "It directs and coordinates all operations of the computer system",
      "It converts analog signals to digital",
    ],
    answer: 2,
    explanation:
      "The Control Unit fetches instructions from memory, decodes them, and coordinates the execution of operations by directing the flow of data between the CPU, memory, and I/O devices.",
  },
  {
    question:
      "What is the correct order of memory hierarchy from fastest to slowest?",
    choices: [
      "RAM, Cache, Registers, Hard Drive",
      "Registers, Cache, RAM, Secondary Storage",
      "Cache, Registers, RAM, Secondary Storage",
      "Hard Drive, RAM, Cache, Registers",
    ],
    answer: 1,
    explanation:
      "The memory hierarchy from fastest (and smallest) to slowest (and largest) is: Registers → Cache → RAM → Secondary Storage (HDD/SSD). Speed decreases as capacity increases.",
  },
  {
    question: "Which type of memory is non-volatile?",
    choices: ["RAM", "Cache memory", "ROM", "Registers"],
    answer: 2,
    explanation:
      "ROM (Read-Only Memory) is non-volatile, meaning it retains its data even when the power is turned off. It typically stores firmware like the BIOS. RAM, cache, and registers are volatile.",
  },
  {
    question:
      "What is the primary advantage of SSD over traditional HDD?",
    choices: [
      "SSD has more storage capacity",
      "SSD is cheaper per gigabyte",
      "SSD has faster read/write speeds and no moving parts",
      "SSD uses magnetic platters for reliability",
    ],
    answer: 2,
    explanation:
      "SSDs (Solid State Drives) use flash memory with no moving parts, providing significantly faster read/write speeds, lower power consumption, and greater durability compared to HDDs which use spinning magnetic platters.",
  },
  {
    question: "Which of the following is an input device?",
    choices: ["Printer", "Monitor", "Speaker", "Scanner"],
    answer: 3,
    explanation:
      "A scanner is an input device that converts physical documents or images into digital format for the computer to process. Printers, monitors, and speakers are all output devices.",
  },
  {
    question: "A supercomputer is primarily used for:",
    choices: [
      "Basic word processing tasks",
      "Complex scientific calculations and simulations requiring massive processing power",
      "Personal home computing",
      "Small business accounting",
    ],
    answer: 1,
    explanation:
      "Supercomputers are the most powerful computers, designed for extremely complex calculations such as weather forecasting, molecular modeling, nuclear simulations, and cryptography.",
  },
  {
    question: "Which type of computer is designed to serve multiple users simultaneously in large organizations?",
    choices: [
      "Microcomputer",
      "Embedded computer",
      "Mainframe computer",
      "Wearable computer",
    ],
    answer: 2,
    explanation:
      "Mainframe computers are large, powerful systems designed to handle massive amounts of data processing for multiple users simultaneously, commonly used in banking, airlines, and government agencies.",
  },
  {
    question: "An embedded computer is best described as:",
    choices: [
      "A computer built into another device to perform a dedicated function",
      "A portable laptop computer",
      "A high-performance gaming PC",
      "A server used for web hosting",
    ],
    answer: 0,
    explanation:
      "Embedded computers are specialized systems built into other devices (cars, appliances, medical equipment) to perform dedicated functions. They are designed for specific tasks rather than general-purpose computing.",
  },
  {
    question: "Which storage device uses laser technology to read and write data?",
    choices: [
      "Hard Disk Drive (HDD)",
      "USB Flash Drive",
      "Optical disc (CD/DVD/Blu-ray)",
      "Solid State Drive (SSD)",
    ],
    answer: 2,
    explanation:
      "Optical discs (CDs, DVDs, Blu-ray) use laser technology to read and write data. A laser beam reads the pattern of pits and lands on the disc surface to retrieve stored information.",
  },
  {
    question: "What is the primary function of an output device?",
    choices: [
      "To accept data from the user",
      "To present processed information to the user",
      "To store data permanently",
      "To process raw data into information",
    ],
    answer: 1,
    explanation:
      "Output devices present processed data (information) to the user in a human-readable form. Examples include monitors (visual), printers (hardcopy), and speakers (audio).",
  },
  {
    question: "Application software is designed to:",
    choices: [
      "Manage hardware resources of the computer",
      "Help users perform specific tasks like word processing or browsing the web",
      "Boot up the computer system",
      "Defragment the hard drive",
    ],
    answer: 1,
    explanation:
      "Application software is designed to help end users accomplish specific tasks such as writing documents (Word), creating spreadsheets (Excel), browsing the internet (Chrome), or editing images (Photoshop).",
  },
  {
    question: "CPU registers are used for:",
    choices: [
      "Long-term data storage",
      "Temporarily holding data and instructions currently being processed by the CPU",
      "Connecting peripheral devices",
      "Displaying graphics on screen",
    ],
    answer: 1,
    explanation:
      "Registers are the smallest and fastest storage locations inside the CPU. They temporarily hold data, instructions, and addresses that the CPU is currently processing.",
  },
  {
    question: "Which of the following best describes cache memory?",
    choices: [
      "A type of permanent storage on the hard drive",
      "High-speed memory between the CPU and RAM that stores frequently accessed data",
      "Memory used only for storing the operating system",
      "External memory connected via USB",
    ],
    answer: 1,
    explanation:
      "Cache memory is a small, high-speed memory located between the CPU and RAM. It stores copies of frequently accessed data and instructions to reduce the time needed to access them from slower RAM.",
  },
  {
    question: "A flash drive stores data using:",
    choices: [
      "Magnetic platters",
      "Optical laser technology",
      "Flash memory (electrically erasable chips)",
      "Vacuum tube technology",
    ],
    answer: 2,
    explanation:
      "USB flash drives use flash memory (EEPROM technology) to store data electronically. They are portable, rewritable, and have no moving parts, making them durable and convenient for data transfer.",
  },
  // ============================================================
  // HISTORY OF COMPUTERS (Questions 21-35)
  // ============================================================
  {
    question: "Who designed the Analytical Engine, considered the first general-purpose computer concept?",
    choices: [
      "Blaise Pascal",
      "Charles Babbage",
      "Gottfried Wilhelm Leibniz",
      "Alan Turing",
    ],
    answer: 1,
    explanation:
      "Charles Babbage designed the Analytical Engine in 1837. It incorporated an ALU, control flow via conditional branching, and integrated memory — concepts fundamental to modern computers. He is called the 'Father of the Computer.'",
  },
  {
    question: "What technology characterized second-generation computers (1956-1963)?",
    choices: [
      "Vacuum tubes",
      "Transistors",
      "Integrated circuits",
      "Microprocessors",
    ],
    answer: 1,
    explanation:
      "Second-generation computers replaced vacuum tubes with transistors, which were smaller, faster, more reliable, and generated less heat. Languages like COBOL and FORTRAN were developed during this era.",
  },
  {
    question: "The ENIAC (Electronic Numerical Integrator and Computer) was completed in:",
    choices: ["1936", "1946", "1951", "1958"],
    answer: 1,
    explanation:
      "ENIAC was completed in 1946 at the University of Pennsylvania by J. Presper Eckert and John Mauchly. It was one of the first general-purpose electronic digital computers and used approximately 18,000 vacuum tubes.",
  },
  {
    question: "Who is credited with writing the first computer algorithm, making her the first computer programmer?",
    choices: [
      "Grace Hopper",
      "Ada Lovelace",
      "Marie Curie",
      "Hedy Lamarr",
    ],
    answer: 1,
    explanation:
      "Ada Lovelace wrote detailed notes on Charles Babbage's Analytical Engine in 1843, including what is recognized as the first algorithm intended to be processed by a machine, making her the first computer programmer.",
  },
  {
    question: "The transistor was invented in what year?",
    choices: ["1937", "1943", "1947", "1953"],
    answer: 2,
    explanation:
      "The transistor was invented in 1947 at Bell Laboratories by John Bardeen, Walter Brattain, and William Shockley. It revolutionized electronics by replacing bulky, unreliable vacuum tubes.",
  },
  {
    question: "What is the Pascaline?",
    choices: [
      "An early programming language",
      "A mechanical calculator invented by Blaise Pascal in 1642",
      "The first electronic computer",
      "A type of integrated circuit",
    ],
    answer: 1,
    explanation:
      "The Pascaline was a mechanical calculator built by Blaise Pascal in 1642 to help his father with tax calculations. It could perform addition and subtraction using interlocking gears and wheels.",
  },
  {
    question: "The first integrated circuit (IC) was developed in:",
    choices: ["1947", "1953", "1958", "1965"],
    answer: 2,
    explanation:
      "The first integrated circuit was independently developed in 1958 by Jack Kilby at Texas Instruments. Robert Noyce at Fairchild Semiconductor created a practical version shortly after. ICs put multiple transistors on a single chip.",
  },
  {
    question: "UNIVAC I is significant in computing history because it was:",
    choices: [
      "The first personal computer",
      "The first commercial computer delivered to a business client",
      "The first computer to use transistors",
      "The first laptop computer",
    ],
    answer: 1,
    explanation:
      "UNIVAC I (1951) was the first commercially produced electronic digital computer in the United States. It was delivered to the U.S. Census Bureau and famously predicted the 1952 presidential election results.",
  },
  {
    question: "The Intel 4004, released in 1971, was significant because it was:",
    choices: [
      "The first vacuum tube",
      "The first transistor",
      "The first commercially available microprocessor",
      "The first integrated circuit",
    ],
    answer: 2,
    explanation:
      "The Intel 4004 (1971) was the world's first commercially available single-chip microprocessor. It placed the entire CPU on one chip, marking the beginning of the fourth generation of computers.",
  },
  {
    question: "Fifth-generation computers are primarily characterized by:",
    choices: [
      "Vacuum tube technology",
      "Transistor-based circuits",
      "Artificial intelligence and parallel processing",
      "Integrated circuits only",
    ],
    answer: 2,
    explanation:
      "Fifth-generation computers (present and beyond) focus on artificial intelligence, machine learning, natural language processing, and parallel processing. They aim to create machines that can learn and make decisions.",
  },
  {
    question: "The abacus is considered one of the earliest computing devices because it:",
    choices: [
      "Used electricity to calculate",
      "Helped perform arithmetic calculations using beads on rods",
      "Was the first programmable machine",
      "Stored data in binary format",
    ],
    answer: 1,
    explanation:
      "The abacus, dating back to around 2400 BC in Babylon, is one of the earliest known computing tools. It uses beads on rods to represent numbers and assist with arithmetic calculations like addition and subtraction.",
  },
  {
    question: "Who developed the concept of a universal computing machine (Turing Machine)?",
    choices: [
      "John von Neumann",
      "Alan Turing",
      "Charles Babbage",
      "Grace Hopper",
    ],
    answer: 1,
    explanation:
      "Alan Turing proposed the concept of the Turing Machine in 1936, a theoretical device that can simulate any algorithm. This established the mathematical foundations of computation and computability.",
  },
  {
    question: "Gottfried Wilhelm Leibniz's Step Reckoner (1694) improved upon the Pascaline by adding the ability to:",
    choices: [
      "Store programs in memory",
      "Multiply and divide in addition to adding and subtracting",
      "Use electricity for computations",
      "Process data in binary format",
    ],
    answer: 1,
    explanation:
      "Leibniz's Step Reckoner (1694) was a mechanical calculator that could perform all four basic arithmetic operations: addition, subtraction, multiplication, and division — an improvement over Pascal's machine which only did addition and subtraction.",
  },
  {
    question: "Grace Hopper is known for her contribution to computing, specifically:",
    choices: [
      "Inventing the first microprocessor",
      "Developing the first compiler and contributing to COBOL",
      "Building the ENIAC computer",
      "Designing the first integrated circuit",
    ],
    answer: 1,
    explanation:
      "Rear Admiral Grace Hopper developed the first compiler (A-0 System) in 1952 and was instrumental in developing COBOL, one of the earliest high-level programming languages. She also popularized the term 'debugging.'",
  },
  {
    question: "The Harvard Mark I (1944) was significant because:",
    choices: [
      "It was the first computer to use integrated circuits",
      "It was the first commercially sold computer",
      "It was one of the first large-scale automatic digital computers",
      "It introduced the graphical user interface",
    ],
    answer: 2,
    explanation:
      "The Harvard Mark I (IBM ASCC), completed in 1944, was one of the first large-scale electromechanical computers. Built by Howard Aiken, it used electromechanical relays and could perform calculations automatically.",
  },
  // ============================================================
  // NUMBER SYSTEMS (Questions 36-60)
  // ============================================================
  {
    question: "What is the binary (base-2) equivalent of the decimal number 45?",
    choices: ["101101", "101011", "110101", "100101"],
    answer: 0,
    explanation:
      "45 ÷ 2 = 22 R1, 22 ÷ 2 = 11 R0, 11 ÷ 2 = 5 R1, 5 ÷ 2 = 2 R1, 2 ÷ 2 = 1 R0, 1 ÷ 2 = 0 R1. Reading remainders bottom-up: 101101. Verify: 32+8+4+1 = 45.",
  },
  {
    question: "Convert the binary number 10110110 to decimal.",
    choices: ["182", "176", "186", "178"],
    answer: 0,
    explanation:
      "10110110 = 1×128 + 0×64 + 1×32 + 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 128 + 32 + 16 + 4 + 2 = 182.",
  },
  {
    question: "What is the hexadecimal equivalent of the binary number 11001010?",
    choices: ["CA", "AC", "CB", "DA"],
    answer: 0,
    explanation:
      "Split into 4-bit groups: 1100 = C (12), 1010 = A (10). Therefore, 11001010 in binary = CA in hexadecimal.",
  },
  {
    question: "Convert hexadecimal 3F to binary.",
    choices: ["00110111", "00111111", "00111110", "01001111"],
    answer: 1,
    explanation:
      "3 in hex = 0011 in binary, F in hex = 1111 in binary. Therefore, 3F = 00111111 in binary.",
  },
  {
    question: "What is the decimal equivalent of the octal number 52?",
    choices: ["40", "42", "44", "52"],
    answer: 1,
    explanation:
      "Octal 52 = 5 × 8¹ + 2 × 8⁰ = 40 + 2 = 42 in decimal.",
  },
  {
    question: "Convert decimal 100 to octal.",
    choices: ["144", "150", "124", "134"],
    answer: 0,
    explanation:
      "100 ÷ 8 = 12 R4, 12 ÷ 8 = 1 R4, 1 ÷ 8 = 0 R1. Reading remainders bottom-up: 144 in octal. Verify: 1×64 + 4×8 + 4×1 = 64 + 32 + 4 = 100.",
  },
  {
    question: "What is the result of binary addition: 1011 + 1101?",
    choices: ["11000", "10110", "11010", "10100"],
    answer: 0,
    explanation:
      "1011 (11) + 1101 (13) = 11000 (24). Column-by-column: 1+1=10 (write 0 carry 1), 1+0+1=10 (write 0 carry 1), 0+1+1=10 (write 0 carry 1), 1+1+1=11 (write 1 carry 1), carry 1. Result: 11000.",
  },
  {
    question: "What is the 1's complement of the 8-bit binary number 01010011?",
    choices: ["10101100", "10101101", "10101010", "10101011"],
    answer: 0,
    explanation:
      "The 1's complement is obtained by flipping (inverting) every bit: 0→1, 1→0. So 01010011 becomes 10101100.",
  },
  {
    question: "What is the 2's complement of the 8-bit binary number 00110100?",
    choices: ["11001011", "11001100", "11001010", "11001101"],
    answer: 1,
    explanation:
      "Step 1: Find 1's complement by flipping all bits: 11001011. Step 2: Add 1: 11001011 + 1 = 11001100. The 2's complement of 00110100 is 11001100.",
  },
  {
    question: "In the hexadecimal number system, what decimal value does the letter 'B' represent?",
    choices: ["10", "11", "12", "13"],
    answer: 1,
    explanation:
      "In hexadecimal (base 16): A=10, B=11, C=12, D=13, E=14, F=15. The letter B represents the decimal value 11.",
  },
  {
    question: "Convert decimal 255 to hexadecimal.",
    choices: ["EF", "FE", "FF", "F5"],
    answer: 2,
    explanation:
      "255 ÷ 16 = 15 R15, 15 ÷ 16 = 0 R15. Reading remainders: 15,15 = FF in hex. Alternatively, FF = 15×16 + 15 = 240 + 15 = 255.",
  },
  {
    question: "What is the BCD (Binary Coded Decimal) representation of decimal 47?",
    choices: ["0100 0111", "0100 1001", "0011 0111", "0100 1000"],
    answer: 0,
    explanation:
      "In BCD, each decimal digit is represented by its 4-bit binary equivalent. 4 = 0100, 7 = 0111. So decimal 47 in BCD is 0100 0111.",
  },
  {
    question: "What is the decimal equivalent of the binary number 11111111?",
    choices: ["256", "128", "255", "127"],
    answer: 2,
    explanation:
      "11111111 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255. This is the maximum value an unsigned 8-bit binary number can represent (2⁸ - 1 = 255).",
  },
  {
    question: "In signed magnitude representation using 8 bits, how is -5 represented?",
    choices: ["10000101", "11111011", "11111010", "00000101"],
    answer: 0,
    explanation:
      "In signed magnitude, the MSB (leftmost bit) represents the sign (0=positive, 1=negative), and the remaining 7 bits represent the magnitude. +5 = 00000101, so -5 = 10000101.",
  },
  {
    question: "How many unique values can be represented with 4 bits?",
    choices: ["4", "8", "16", "32"],
    answer: 2,
    explanation:
      "With n bits, you can represent 2ⁿ unique values. With 4 bits: 2⁴ = 16 values (0 through 15 for unsigned numbers, or -8 through 7 in 2's complement).",
  },
  {
    question: "What is the result of binary subtraction: 1100 - 0101?",
    choices: ["0110", "0111", "1001", "1000"],
    answer: 1,
    explanation:
      "1100 (12) - 0101 (5) = 0111 (7). Using borrowing: rightmost column 0-1 borrow, gives 10-1=1; next 0-0=0 (after borrow became 0, and need to borrow again); working through gives 0111.",
  },
  {
    question: "The ASCII code for the character 'A' is 65 in decimal. What is its binary representation?",
    choices: ["01000001", "01000010", "01100001", "01000100"],
    answer: 0,
    explanation:
      "65 in decimal = 64 + 1 = 2⁶ + 2⁰ = 01000001 in binary. ASCII uses 7 bits (stored in 8 bits) to represent characters, with 'A' being 65 (01000001).",
  },
  {
    question: "Unicode differs from ASCII primarily because:",
    choices: [
      "Unicode uses fewer bits than ASCII",
      "Unicode can represent characters from virtually all world writing systems",
      "Unicode is only used for numbers",
      "ASCII supports more characters than Unicode",
    ],
    answer: 1,
    explanation:
      "Unicode supports more than 150,000 assigned characters across many writing systems, while ASCII is limited to 128 characters (English letters, digits, and symbols). Unicode can be encoded using formats such as UTF-8 and UTF-16.",
  },
  {
    question: "Convert hexadecimal A7 to decimal.",
    choices: ["157", "167", "175", "147"],
    answer: 1,
    explanation:
      "A7 in hexadecimal = A × 16 + 7 × 1 = 10 × 16 + 7 = 160 + 7 = 167 in decimal.",
  },
  {
    question: "What is the octal equivalent of binary 110101011?",
    choices: ["653", "651", "645", "655"],
    answer: 0,
    explanation:
      "Group binary digits into sets of 3 from right: 110 101 011. 110 = 6, 101 = 5, 011 = 3. Therefore 110101011 binary = 653 octal.",
  },
  {
    question: "Convert decimal 200 to binary.",
    choices: ["11001000", "11000100", "11010000", "11001100"],
    answer: 0,
    explanation:
      "200 ÷ 2 = 100 R0, 100 ÷ 2 = 50 R0, 50 ÷ 2 = 25 R0, 25 ÷ 2 = 12 R1, 12 ÷ 2 = 6 R0, 6 ÷ 2 = 3 R0, 3 ÷ 2 = 1 R1, 1 ÷ 2 = 0 R1. Reading bottom-up: 11001000. Verify: 128+64+8 = 200.",
  },
  {
    question: "In 2's complement using 8 bits, what decimal value does 10000000 represent?",
    choices: ["-0", "-128", "-127", "128"],
    answer: 1,
    explanation:
      "In 8-bit 2's complement, 10000000 represents -128. It is the most negative value representable. The range of 8-bit 2's complement is -128 to +127.",
  },
  {
    question: "What is the binary equivalent of hexadecimal 5D?",
    choices: ["01011101", "01011011", "01010111", "01011110"],
    answer: 0,
    explanation:
      "5 in hex = 0101 in binary, D (13) in hex = 1101 in binary. Therefore, 5D = 01011101 in binary.",
  },
  {
    question: "What is the BCD representation of decimal 92?",
    choices: ["1001 0010", "1001 0011", "1000 0010", "1001 0100"],
    answer: 0,
    explanation:
      "In BCD, each decimal digit is independently converted to 4-bit binary. 9 = 1001, 2 = 0010. So decimal 92 in BCD is 1001 0010.",
  },
  {
    question: "How many bits are needed to represent the decimal number 500 in binary?",
    choices: ["8 bits", "9 bits", "10 bits", "11 bits"],
    answer: 1,
    explanation:
      "We need to find n such that 2ⁿ > 500. 2⁸ = 256 (not enough), 2⁹ = 512 (sufficient). So 9 bits are needed to represent 500 (500 in binary = 111110100).",
  },
  // ============================================================
  // ELEMENTS OF COMPUTER AND COMMUNICATION SYSTEMS (Questions 61-80)
  // ============================================================
  {
    question: "In Von Neumann architecture, both instructions and data are stored in:",
    choices: [
      "Separate memories for each",
      "The same memory space",
      "Only in the CPU registers",
      "Only on the hard disk",
    ],
    answer: 1,
    explanation:
      "Von Neumann architecture uses a single memory space for both instructions and data (stored-program concept). The CPU fetches both instructions and data from this shared memory through the same bus.",
  },
  {
    question: "The data bus in a computer system is responsible for:",
    choices: [
      "Carrying memory addresses from CPU to memory",
      "Carrying data between the CPU, memory, and I/O devices",
      "Sending control signals to coordinate operations",
      "Supplying power to components",
    ],
    answer: 1,
    explanation:
      "The data bus carries actual data between the CPU, memory, and I/O devices. It is bidirectional — data can flow in both directions. The width of the data bus (e.g., 32-bit, 64-bit) determines how much data can be transferred at once.",
  },
  {
    question: "What is the function of the address bus?",
    choices: [
      "It carries data between CPU and memory",
      "It carries control signals",
      "It carries memory addresses to identify locations to read from or write to",
      "It connects the computer to the internet",
    ],
    answer: 2,
    explanation:
      "The address bus carries memory addresses from the CPU to memory, specifying which memory location to access. It is unidirectional (CPU to memory). Its width determines the maximum addressable memory (e.g., 32-bit = 4GB).",
  },
  {
    question: "The control bus carries signals that:",
    choices: [
      "Transfer data between components",
      "Specify memory addresses",
      "Coordinate and control operations such as read, write, and interrupt",
      "Supply electrical power to the CPU",
    ],
    answer: 2,
    explanation:
      "The control bus carries control signals (read, write, interrupt, clock) that coordinate and synchronize operations between the CPU and other components. It manages the timing and direction of data flow.",
  },
  {
    question: "In a communication system, the five basic elements are:",
    choices: [
      "CPU, memory, input, output, storage",
      "Sender, receiver, message, medium, protocol",
      "Hardware, software, data, people, procedures",
      "Router, switch, hub, cable, server",
    ],
    answer: 1,
    explanation:
      "A communication system consists of: Sender (source of message), Receiver (destination), Message (data being communicated), Medium (channel through which the message travels), and Protocol (rules governing communication).",
  },
  {
    question: "Twisted pair cable is commonly used for:",
    choices: [
      "Undersea long-distance communication",
      "Telephone lines and Ethernet networking (LAN)",
      "Satellite communication",
      "Television cable broadcasting only",
    ],
    answer: 1,
    explanation:
      "Twisted pair cables (UTP/STP) are the most common type of networking cable, used in telephone systems and Ethernet LANs (e.g., Cat5e, Cat6). The twisting reduces electromagnetic interference.",
  },
  {
    question: "Which transmission medium offers the highest bandwidth and is immune to electromagnetic interference?",
    choices: [
      "Twisted pair cable",
      "Coaxial cable",
      "Fiber optic cable",
      "Radio waves",
    ],
    answer: 2,
    explanation:
      "Fiber optic cable transmits data as light pulses through glass/plastic fibers, offering the highest bandwidth (up to terabits per second), longest range, and complete immunity to electromagnetic interference (EMI).",
  },
  {
    question: "Bandwidth in data communication is measured in:",
    choices: [
      "Meters per second",
      "Bits per second (bps)",
      "Watts",
      "Hertz only",
    ],
    answer: 1,
    explanation:
      "Bandwidth (data transfer rate) is measured in bits per second (bps) and its multiples: Kbps, Mbps, Gbps. It represents the maximum amount of data that can be transmitted over a channel per unit of time.",
  },
  {
    question: "What is the difference between analog and digital signals?",
    choices: [
      "Analog signals are faster than digital signals",
      "Analog signals are continuous waves; digital signals are discrete (0s and 1s)",
      "Digital signals can only travel through fiber optic cables",
      "There is no difference; they are the same",
    ],
    answer: 1,
    explanation:
      "Analog signals are continuous waveforms that vary smoothly over time (like sound waves). Digital signals are discrete, representing data as distinct values (binary 0s and 1s). Computers use digital signals internally.",
  },
  {
    question: "Serial transmission sends data:",
    choices: [
      "Multiple bits simultaneously over multiple wires",
      "One bit at a time over a single wire",
      "Only in one direction",
      "Without any protocol",
    ],
    answer: 1,
    explanation:
      "Serial transmission sends data one bit at a time sequentially over a single communication line. It is simpler and cheaper for long distances. Examples include USB and SATA interfaces.",
  },
  {
    question: "Parallel transmission sends data:",
    choices: [
      "One bit at a time over a single channel",
      "Multiple bits simultaneously over multiple channels",
      "Only wirelessly",
      "Only between computers of the same type",
    ],
    answer: 1,
    explanation:
      "Parallel transmission sends multiple bits simultaneously over multiple parallel wires/channels. It is faster for short distances but more expensive and subject to synchronization issues (skew) over longer distances.",
  },
  {
    question: "Full-duplex communication means:",
    choices: [
      "Data flows in only one direction",
      "Data flows in both directions but only one direction at a time",
      "Data flows in both directions simultaneously",
      "Data is broadcast to multiple receivers",
    ],
    answer: 2,
    explanation:
      "Full-duplex allows simultaneous two-way communication (both parties can send and receive at the same time). Example: telephone conversations where both parties can talk and listen simultaneously.",
  },
  {
    question: "Half-duplex communication allows:",
    choices: [
      "Simultaneous two-way communication",
      "Communication in both directions, but only one direction at a time",
      "One-way communication only",
      "Communication only over fiber optics",
    ],
    answer: 1,
    explanation:
      "Half-duplex allows communication in both directions, but not simultaneously — only one party can transmit at a time. Example: walkie-talkies where you must wait for the other person to finish before speaking.",
  },
  {
    question: "Simplex communication mode is characterized by:",
    choices: [
      "Two-way simultaneous communication",
      "Two-way alternating communication",
      "One-way communication only (unidirectional)",
      "Communication between multiple receivers",
    ],
    answer: 2,
    explanation:
      "Simplex mode allows data to flow in only one direction. The sender can only send, and the receiver can only receive. Examples: television broadcasting, keyboard to computer input.",
  },
  {
    question: "Latency in a network refers to:",
    choices: [
      "The maximum data transfer capacity",
      "The delay between sending a request and receiving a response",
      "The total number of connected devices",
      "The physical length of network cables",
    ],
    answer: 1,
    explanation:
      "Latency is the time delay between when data is sent and when it is received (measured in milliseconds). Low latency is critical for real-time applications like video calls and online gaming.",
  },
  {
    question: "Throughput differs from bandwidth in that throughput measures:",
    choices: [
      "The theoretical maximum capacity of the channel",
      "The actual amount of data successfully transferred per unit of time",
      "The physical width of the cable",
      "The number of devices on the network",
    ],
    answer: 1,
    explanation:
      "Throughput is the actual data transfer rate achieved in practice, which is often lower than bandwidth (theoretical maximum) due to network congestion, errors, protocol overhead, and other factors.",
  },
  {
    question: "Coaxial cable consists of:",
    choices: [
      "Two insulated copper wires twisted together",
      "A central conductor surrounded by insulation, metallic shield, and outer jacket",
      "Glass fibers that carry light signals",
      "Multiple parallel flat wires",
    ],
    answer: 1,
    explanation:
      "Coaxial cable has a central copper conductor surrounded by insulation, a metallic shield (braided mesh), and an outer plastic jacket. The shield reduces interference. It's used for cable TV and older Ethernet networks.",
  },
  {
    question: "In Von Neumann architecture, the fetch-decode-execute cycle describes:",
    choices: [
      "How data is stored on a hard drive",
      "The basic operational process of the CPU",
      "How the operating system boots up",
      "The process of printing a document",
    ],
    answer: 1,
    explanation:
      "The fetch-decode-execute (machine) cycle is the fundamental process of the CPU: Fetch an instruction from memory, Decode it to determine the operation, Execute the instruction, then repeat. This cycle continues billions of times per second.",
  },
  {
    question: "Which of the following is a wireless transmission medium?",
    choices: [
      "Cat6 Ethernet cable",
      "Fiber optic cable",
      "Infrared and radio waves",
      "Coaxial cable",
    ],
    answer: 2,
    explanation:
      "Wireless transmission media include radio waves (Wi-Fi, Bluetooth, cellular), infrared (remote controls, short-range), microwaves (satellite, point-to-point), and satellite communications. They do not require physical cables.",
  },
  {
    question: "A protocol in data communication is:",
    choices: [
      "A type of network cable",
      "A set of rules governing how data is formatted, transmitted, and received",
      "A hardware device for routing data",
      "A type of encryption algorithm",
    ],
    answer: 1,
    explanation:
      "A protocol is a set of rules and conventions that define how data is formatted, transmitted, received, and acknowledged in a communication system. Examples include TCP/IP, HTTP, FTP, and SMTP.",
  },
  // ============================================================
  // IT SOCIAL AND PROFESSIONAL ISSUES (Questions 81-100)
  // ============================================================
  {
    question: "Republic Act 10173, also known as the Data Privacy Act of 2012, was enacted to:",
    choices: [
      "Regulate internet speed in the Philippines",
      "Protect individual personal information in information and communications systems",
      "Establish rules for online gaming",
      "Create a national ID system",
    ],
    answer: 1,
    explanation:
      "RA 10173 (Data Privacy Act of 2012) protects individual personal information collected, stored, and processed by government and private entities. It established the National Privacy Commission (NPC) to administer and implement the law.",
  },
  {
    question: "Republic Act 8792 (E-Commerce Act of 2000) primarily provides:",
    choices: [
      "Legal recognition of electronic documents and electronic signatures",
      "Penalties for computer hacking",
      "Regulations for social media platforms",
      "Copyright protection for software",
    ],
    answer: 0,
    explanation:
      "RA 8792 (Electronic Commerce Act of 2000) provides legal recognition of electronic data messages, electronic documents, and electronic signatures. It ensures that electronic transactions have the same legal effect as paper-based ones.",
  },
  {
    question: "Under RA 10175 (Cybercrime Prevention Act of 2012), which of the following is a punishable offense?",
    choices: [
      "Using social media",
      "Illegal access to a computer system (hacking)",
      "Sending personal emails",
      "Creating a website",
    ],
    answer: 1,
    explanation:
      "RA 10175 penalizes cybercrimes including illegal access (hacking), data interference, system interference, misuse of devices, identity theft, cybersex, child pornography, and online libel.",
  },
  {
    question: "Copyright protection for software means:",
    choices: [
      "Anyone can freely copy and distribute the software",
      "The creator has exclusive rights to reproduce, distribute, and modify the work",
      "The software cannot be sold",
      "The software must be open source",
    ],
    answer: 1,
    explanation:
      "Copyright gives the creator exclusive legal rights to reproduce, distribute, display, and create derivative works of their software. Others must obtain permission (license) to use, copy, or modify it.",
  },
  {
    question: "What distinguishes a patent from a copyright in intellectual property?",
    choices: [
      "Patents protect artistic expressions; copyrights protect inventions",
      "Patents protect inventions and processes; copyrights protect original works of authorship",
      "There is no difference between them",
      "Patents are only for software; copyrights are for hardware",
    ],
    answer: 1,
    explanation:
      "Patents protect qualifying inventions, technical processes, and functional designs for a limited time (often 20 years from filing, depending on jurisdiction). Copyrights protect original works of authorship such as software code, books, and music for the author's lifetime plus additional years.",
  },
  {
    question: "Software piracy includes all of the following EXCEPT:",
    choices: [
      "Installing software on more computers than the license allows",
      "Downloading cracked versions of paid software from the internet",
      "Purchasing a legitimate software license from an authorized dealer",
      "Sharing registration keys or serial numbers online",
    ],
    answer: 2,
    explanation:
      "Purchasing legitimate software from an authorized dealer is legal. Software piracy includes unauthorized copying, using cracked versions, exceeding license limits (softlifting), and distributing registration keys.",
  },
  {
    question: "Open source software differs from proprietary software in that:",
    choices: [
      "Open source is always inferior in quality",
      "Open source code is freely available to view, modify, and distribute under its license terms",
      "Proprietary software is always free of charge",
      "Open source software cannot be used commercially",
    ],
    answer: 1,
    explanation:
      "Open source software makes its source code freely available for anyone to inspect, modify, and redistribute under its license terms (e.g., GPL, MIT, Apache). Proprietary software keeps its source code secret and restricts usage.",
  },
  {
    question: "The ACM Code of Ethics states that computing professionals should:",
    choices: [
      "Prioritize profit above all else",
      "Contribute to society and human well-being while avoiding harm",
      "Only work for large corporations",
      "Keep all source code secret",
    ],
    answer: 1,
    explanation:
      "The ACM (Association for Computing Machinery) Code of Ethics emphasizes that computing professionals should contribute to society and human well-being, avoid harm, be honest, respect privacy, and maintain professional competence.",
  },
  {
    question: "Ransomware is a type of malware that:",
    choices: [
      "Speeds up your computer performance",
      "Encrypts the victim's files and demands payment for the decryption key",
      "Provides free antivirus protection",
      "Improves network security",
    ],
    answer: 1,
    explanation:
      "Ransomware is malicious software that encrypts a victim's files or locks their system, then demands a ransom payment (usually in cryptocurrency) in exchange for the decryption key. Examples include WannaCry and CryptoLocker.",
  },
  {
    question: "Social engineering in cybersecurity refers to:",
    choices: [
      "Building social media applications",
      "Manipulating people into divulging confidential information or performing actions",
      "Engineering better social networks",
      "Improving computer hardware design",
    ],
    answer: 1,
    explanation:
      "Social engineering exploits human psychology rather than technical vulnerabilities. Attackers manipulate people into revealing passwords, clicking malicious links, or granting access. Examples include phishing, pretexting, and baiting.",
  },
  {
    question: "The digital divide can be reduced by:",
    choices: [
      "Increasing the cost of technology",
      "Providing affordable internet access, computer literacy programs, and infrastructure in underserved areas",
      "Restricting technology use to urban areas",
      "Eliminating all free software",
    ],
    answer: 1,
    explanation:
      "Bridging the digital divide requires making technology accessible through affordable internet, public access facilities, digital literacy education, infrastructure development in rural areas, and government programs promoting inclusion.",
  },
  {
    question: "E-waste refers to:",
    choices: [
      "Spam emails",
      "Discarded electronic devices and components",
      "Digital files that are no longer needed",
      "Electromagnetic radiation from computers",
    ],
    answer: 1,
    explanation:
      "E-waste (electronic waste) refers to discarded electronic devices such as computers, phones, TVs, and peripherals. Improper disposal can release toxic substances (lead, mercury, cadmium) into the environment, harming ecosystems and human health.",
  },
  {
    question: "Which of the following is a principle of data protection under RA 10173?",
    choices: [
      "Personal data should be collected without any limits",
      "Personal data must be collected for specified and legitimate purposes",
      "Data subjects have no rights over their personal data",
      "Personal data can be shared with anyone without consent",
    ],
    answer: 1,
    explanation:
      "RA 10173 principles include: transparency (informing data subjects), legitimate purpose (collected for declared, specified purposes), and proportionality (data collected must be relevant and not excessive for the stated purpose).",
  },
  {
    question: "Ergonomics in computing is concerned with:",
    choices: [
      "Increasing the processing speed of computers",
      "Designing workplaces and equipment to minimize health risks and maximize efficiency for users",
      "Programming language syntax",
      "Network security protocols",
    ],
    answer: 1,
    explanation:
      "Ergonomics (human factors engineering) in computing focuses on designing workstations, equipment, and practices that reduce health risks like repetitive strain injury (RSI), eye strain, and back pain while improving user comfort and productivity.",
  },
  {
    question: "Repetitive Strain Injury (RSI) in computer use is primarily caused by:",
    choices: [
      "Computer viruses",
      "Repeated motions like prolonged typing and mouse use without proper breaks",
      "Power surges in the electrical system",
      "Downloading large files",
    ],
    answer: 1,
    explanation:
      "RSI results from repetitive motions (typing, clicking) and poor posture over extended periods. Prevention includes ergonomic equipment, proper positioning, regular breaks, and stretching exercises.",
  },
  {
    question: "A trade secret in IT is:",
    choices: [
      "Public domain software",
      "Confidential business information (like algorithms or processes) that provides competitive advantage",
      "A patented invention",
      "An open source license type",
    ],
    answer: 1,
    explanation:
      "Trade secrets are confidential business information (formulas, algorithms, processes, customer lists) that derive economic value from being secret. Unlike patents, they can be protected indefinitely as long as secrecy is maintained. Example: Google's search algorithm.",
  },
  {
    question: "Netiquette refers to:",
    choices: [
      "Network security protocols",
      "The proper etiquette and guidelines for acceptable behavior when communicating online",
      "A type of internet connection",
      "A programming language for web development",
    ],
    answer: 1,
    explanation:
      "Netiquette (network etiquette) is the set of informal rules and conventions for polite, respectful online communication. It includes not typing in all caps (shouting), respecting others' privacy, avoiding spam, and being constructive in discussions.",
  },
  {
    question: "Professional responsibility in IT requires practitioners to:",
    choices: [
      "Only follow instructions without questioning their impact",
      "Maintain competence, act with integrity, and consider the societal impact of their work",
      "Maximize profits regardless of consequences",
      "Ignore security vulnerabilities if they don't affect profits",
    ],
    answer: 1,
    explanation:
      "IT professional responsibility includes maintaining competence through continuous learning, acting honestly and with integrity, protecting user privacy, reporting security vulnerabilities, and considering the broader social impact of technology decisions.",
  },
  {
    question: "Phishing attacks can best be prevented by:",
    choices: [
      "Installing more RAM",
      "Verifying the sender's identity, checking URLs carefully, and never clicking suspicious links",
      "Using a faster internet connection",
      "Disabling the firewall",
    ],
    answer: 1,
    explanation:
      "Preventing phishing requires user awareness: verify sender email addresses, hover over links before clicking, look for HTTPS and valid certificates, never provide sensitive information via email, and use multi-factor authentication.",
  },
  {
    question: "A trademark in the context of IT protects:",
    choices: [
      "The source code of a program",
      "Brand identifiers such as logos, names, and symbols that distinguish products or services",
      "The physical computer hardware",
      "Database schemas",
    ],
    answer: 1,
    explanation:
      "A trademark protects brand identifiers — logos, names, slogans, and symbols — that distinguish goods or services from competitors. In IT, examples include the Apple logo, the Windows name, and the Android robot symbol.",
  },
];
